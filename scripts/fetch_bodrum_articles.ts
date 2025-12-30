
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchBodrumArticles() {
    console.log('Fetching Bodrum articles...');

    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .ilike('location', '%Bodrum%');

    if (error) {
        console.error('Error fetching articles:', error);
        return;
    }

    if (!data || data.length === 0) {
        console.log('No Bodrum articles found.');
        return;
    }

    console.log(`Found ${data.length} Bodrum articles.`);

    // Filter out already translated ones (checking if title is a JSON string with "en")
    const untranslated = data.filter(article => {
        try {
            if (typeof article.title === 'string' && article.title.trim().startsWith('{')) {
                const parsed = JSON.parse(article.title);
                return !parsed.en; // If 'en' key is missing, it needs translation
            }
            return true; // If purely string, it's definitely untranslated
        } catch (e) {
            return true; // Parse error means it's likely a plain string
        }
    });

    console.log(`${untranslated.length} articles need translation.`);

    fs.writeFileSync(
        path.resolve(__dirname, '../temp_bodrum_articles.json'),
        JSON.stringify(untranslated, null, 2)
    );

    console.log('Saved untranslated articles to temp_bodrum_articles.json');
}

fetchBodrumArticles();
