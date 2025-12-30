
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkHotelsColumns() {
    console.log('Checking hotels table structure and data...');

    const { data: hotels, error } = await supabase
        .from('hotels')
        .select('id, name, description, about, breakfast_description')
        .limit(3);

    if (error) {
        console.error('Error fetching hotels:', error);
        return;
    }

    if (!hotels || hotels.length === 0) {
        console.log('No hotels found.');
        return;
    }

    hotels.forEach((hotel, index) => {
        console.log(`\n--- Hotel ${index + 1} ---`);
        console.log('ID:', hotel.id);
        console.log('Name Type:', typeof hotel.name, 'Value:', hotel.name);
        console.log('Description Type:', typeof hotel.description, 'Value (truncated):', typeof hotel.description === 'string' ? hotel.description.substring(0, 50) + '...' : hotel.description);
        console.log('About Type:', typeof hotel.about, 'Value (truncated):', typeof hotel.about === 'string' ? (hotel.about ? hotel.about.substring(0, 50) + '...' : 'null') : hotel.about);
        console.log('Breakfast Description Type:', typeof hotel.breakfast_description, 'Value:', hotel.breakfast_description);
    });
}

checkHotelsColumns();
