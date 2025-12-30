
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTags() {
    const { data, error } = await supabase
        .from('tags')
        .select('*');

    if (error) {
        console.error('Error fetching tags:', error);
        return;
    }

    console.log('Total tags:', data.length);
    console.log(JSON.stringify(data, null, 2));
}

checkTags();
