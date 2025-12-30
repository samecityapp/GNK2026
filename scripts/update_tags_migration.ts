
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const TAG_UPDATES = [
    { slug: 'aile-oteli', name: { tr: 'Aile Oteli', en: 'Family Hotel' } },
    { slug: 'alkolsuz', name: { tr: 'Alkolsüz', en: 'Alcohol-Free' } },
    { slug: 'denize-sifir', name: { tr: 'Denize Sıfır', en: 'Beachfront' } },
    { slug: 'evcil-hayvan-dostu', name: { tr: 'Evcil Hayvan Dostu', en: 'Pet Friendly' } },
    { slug: 'havuzlu', name: { tr: 'Havuzlu', en: 'With Pool' } },
    { slug: 'romantik', name: { tr: 'Romantik', en: 'Romantic' } },
    { slug: 'yetiskin-oteli', name: { tr: 'Yetişkin Oteli', en: 'Adult Only' } },
    { slug: 'balayi', name: { tr: 'Balayı', en: 'Honeymoon' } },
    { slug: 'cocuk-dostu', name: { tr: 'Çocuk Dostu', en: 'Child Friendly' } },
    { slug: 'jakuzili', name: { tr: 'Jakuzili', en: 'With Jacuzzi' } },
];

async function updateTags() {
    console.log('Starting tag translation migration...');

    for (const update of TAG_UPDATES) {
        const { slug, name } = update;
        console.log(`Updating tag: ${slug} ->`, name);

        const { error } = await supabase
            .from('tags')
            .update({ name: name })
            .eq('slug', slug);

        if (error) {
            console.error(`Error updating ${slug}:`, error);
        } else {
            console.log(`Successfully updated ${slug}`);
        }
    }

    console.log('Migration complete.');
}

updateTags();
