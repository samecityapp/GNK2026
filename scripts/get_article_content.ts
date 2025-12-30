
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

async function fetchArticle() {
    const slug = 'fethiye-ne-zaman-gidilir-ay-ay-analiz';
    console.log(`Fetching article with slug: ${slug}...`);

    const { data: article, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error('Error fetching article:', error);
        return;
    }

    if (!article) {
        console.log('Article not found.');
        return;
    }

    const content = `TITLE: ${article.title}
META_DESCRIPTION: ${article.meta_description}
LOCATION: ${article.location}

CONTENT:
${article.content}`;

    fs.writeFileSync('temp_article_tr.txt', content);
    console.log('Saved to temp_article_tr.txt');
}

fetchArticle();
