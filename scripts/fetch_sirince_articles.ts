import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchSirinceArticles() {
    console.log('Fetching Şirince articles...');

    // locations array to search for
    const locations = ['Şirince', 'Sirince'];

    // 1. Get all articles that match the location
    const { data: articles, error } = await supabase
        .from('articles')
        .select('id, slug, title, content, meta_description, location')
        .or(`location.ilike.%Şirince%,location.ilike.%Sirince%`);

    if (error) {
        console.error('Error fetching articles:', error);
        return;
    }

    console.log(`Found ${articles.length} total articles for Şirince.`);

    const missingTranslations: any[] = [];

    for (const article of articles) {
        let isTranslated = false;

        // Check if title is already a JSON string with 'en' key
        if (typeof article.title === 'string' && article.title.trim().startsWith('{')) {
            try {
                const parsed = JSON.parse(article.title);
                if (parsed.en) {
                    isTranslated = true;
                }
            } catch (e) {
                // Not a JSON string, so not translated
            }
        }

        if (!isTranslated) {
            missingTranslations.push({
                id: article.id,
                slug: article.slug,
                title: article.title, // This is likely just the Turkish string
                meta_description: article.meta_description,
                content_length: article.content ? article.content.length : 0
            });
        }
    }

    console.log(`Found ${missingTranslations.length} articles needing translation.`);

    // Save to file for inspection
    const outputPath = path.join(process.cwd(), 'sirince_articles_to_translate.json');
    fs.writeFileSync(outputPath, JSON.stringify(missingTranslations, null, 2));
    console.log(`Saved list to ${outputPath}`);
}

fetchSirinceArticles();
