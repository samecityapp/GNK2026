import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const articlesToUpdate = [
    {
        slug: "sapanca-arabasiz-ulasim-rehberi-yht-otobus",
        title: {
            tr: "İstanbul’dan Sapanca’ya Arabasız Ulaşım Rehberi: YHT, Otobüs ve VIP Seçenekler",
            en: "Car-Free Guide from Istanbul to Sapanca: YHT, Bus and VIP Options"
        },
        meta_description: {
            tr: "İstanbul’dan Sapanca’ya arabasız nasıl gidilir? YHT (Hızlı Tren) durakları, otobüs firmaları ve bungalovlara taksi/transfer tüyoları.",
            en: "How to get to Sapanca from Istanbul without a car? YHT (High Speed Train) stops, bus companies and taxi/transfer tips to reaching bungalows."
        },
        content_en: `
<h2>The Perfect Weekend Getaway</h2>
<p>Sapanca is arguably the most popular weekend escape from Istanbul. Why? Because it's green, full of lakes and mountains, and incredibly accessible.</p>

<h3>1. High Speed Train (YHT)</h3>
<p>The fastest and most comfortable way. The train departs from <strong>Söğütlüçeşme</strong> or <strong>Bostancı</strong> (Asian side) and <strong>Halkalı</strong> or <strong>Bakırköy</strong> (European side).</p>
<ul>
<li><strong>Stop:</strong> You need to get off at <strong>Arifiye</strong> station. (Note: The station is NOT called Sapanca).</li>
<li><strong>Transfer:</strong> From Arifiye, you can take a 15-minute taxi ride to Sapanca centre or your bungalow.</li>
<li><strong>Duration:</strong> Approx. 1 hour 15 minutes from Söğütlüçeşme.</li>
</ul>

<h3>2. Intercity Bus</h3>
<p>Many companies (Vib, Metro, Kamil Koç) run frequent services.</p>
<ul>
<li><strong>Route:</strong> Look for buses heading to "Sakarya" or "Adapazarı". Most will drop you off at the highway exit (SASCO facilities) or the Sapanca terminal.</li>
<li><strong>Convenience:</strong> Buses are frequent (every 30 mins), but traffic on Friday evenings can be heavy.</li>
</ul>

<h3>3. VIP Transfer</h3>
<p>If you are a group of 4-6 people, booking a private VIP van might cost the same as individual tickets plus taxis. It offers door-to-door convenience, which is great if you have lots of luggage.</p>
    `
    },
    {
        slug: "istanbuldan-sapancaya-arabasiz-ulasim-yht-otobus-tren",
        title: {
            tr: "İstanbul’dan Sapanca’ya Arabasız Ulaşım Rehberi: YHT, Bölgesel Tren, Otobüs ve Son Kilometre Taktikleri",
            en: "Transport Guide: Istanbul to Sapanca by YHT, Regional Train and Bus + Last Mile Tactics"
        },
        meta_description: {
            tr: "İstanbul’dan Sapanca’ya arabasız nasıl gidilir? YHT–Arifiye, bölgesel tren–Sapanca durağı, otobüs indirme noktaları ve son kilometre ulaşım tüyoları.",
            en: "Detailed guide for car-free travel to Sapanca. YHT vs Regional Train, bus drop-off points, and 'last mile' tactics to reach your hotel."
        },
        content_en: `
<h2>The "Last Mile" Problem</h2>
<p>Reaching Sapanca is easy. Reaching your specific bungalow high up in the mountains without a car? That requires planning.</p>

<h3>Option 1: The High Speed Train (YHT)</h3>
<p>The YHT is the premium option. However, it stops at <strong>Arifiye</strong>, which is about 10-15km away from Sapanca centre.</p>
<ul>
<li><strong>Cost:</strong> Dynamic pricing, book early.</li>
<li><strong>From Arifiye to Sapanca:</strong> You can take a local minibus (dolmuş) or a yellow taxi. Taxis are readily available at the station exit.</li>
</ul>

<h3>Option 2: The Regional Train (Ada Ekspresi)</h3>
<p>This is the budget adventurer's choice. It is slower than YHT but has a huge advantage: <strong>It stops directly at Sapanca Station.</strong></p>
<ul>
<li><strong>Route:</strong> Gebze -> Sapanca -> Arifiye -> Adapazarı.</li>
<li><strong>Connection:</strong> You first need to take the Marmaray to Gebze, then transfer to the Ada Ekspresi.</li>
<li><strong>Advantage:</strong> You land right in the town centre, walking distance to the lake.</li>
</ul>

<h3>Reaching Your Bungalow</h3>
<p>Most bungalows are located in <strong>Kırkpınar</strong>, <strong>Kurtköy</strong>, or high up near <strong>Dibektaş</strong>.</p>
<ul>
<li><strong>Taxis:</strong> Sapanca taxi drivers know every bungalow. However, ask for the estimated price before getting in.</li>
<li><strong>Host Transfer:</strong> Many premium bungalow hosts offer a free pick-up service from the bus terminal or train station if you ask in advance.</li>
</ul>
    `
    },
    {
        slug: "sapanca-masukiye-gunubirlik-rota-kahvalti-selale-atv",
        title: {
            tr: "Sapanca ve Maşukiye’yi Aynı Güne Sığdırma Sanatı: Kahvaltı, Şelale ve ATV Rotası",
            en: "Sapanca & Maşukiye in One Day: Breakfast, Waterfalls and ATV Route"
        },
        meta_description: {
            tr: "Sapanca ve Maşukiye’yi 1 günde gez: dere kenarı kahvaltı, şelale yürüyüşü, ATV/zipline, Kırkpınar ve gölde gün batımı. Saat saat rota.",
            en: "Can you do Sapanca and Maşukiye in one day? Riverside breakfast, waterfall trek, ATV/Zipline adventure and sunset by the lake. Hour-by-hour itinerary."
        },
        content_en: `
<h2>The Twin Jewels of Sakarya</h2>
<p>Sapanca (the lake) and Maşukiye (the mountain stream) are neighbours. Combining them makes for an action-packed Saturday.</p>

<h3>09:00 - Breakfast in Maşukiye</h3>
<p>Start your day in Maşukiye. The "Alabalık Vadisi" (Trout Valley) is lined with restaurants offering "Serpme Kahvaltı" (Spread Breakfast) right next to the rushing water. The air is cool and fresh.</p>

<h3>11:00 - Activity Time</h3>
<p>Maşukiye is the adrenaline capital.</p>
<ul>
<li><strong>ATV Safari:</strong> Dust and mud! Guided tours take you through the forest trails.</li>
<li><strong>Zipline:</strong> Fly over the valley. It's short but fun.</li>
<li><strong>UTV:</strong> Bigger, safer buggies for families.</li>
</ul>

<h3>13:00 - The Glass Terrace & Waterfall</h3>
<p>Drive up to the Maşukiye Glass Terrace for a panoramic view. Then, take a short walk to see the waterfalls. It’s touristy, but pretty.</p>

<h3>15:00 - Relax in Sapanca/Kırkpınar</h3>
<p>Head down to the lake. The Kırkpınar district (also known as "Bagdat Street of Sapanca") is full of chic 3rd wave coffee shops and boutiques.</p>
<ul>
<li>Walk along the lakeside promenade (Sahil Şeridi).</li>
<li>Rent a bike or simply sit on the grass.</li>
</ul>

<h3>18:00 - Dinner by the Lake</h3>
<p>Finish your day at one of the lakeside restaurants in Sapanca. Watch the sunset reflect off the calm water.</p>
    `
    },
    {
        slug: "sapanca-atv-zipline-paintball-rehberi",
        title: {
            tr: "Sapanca’da Adrenalin: ATV Safari, Zipline ve Paintball Rehberi",
            en: "Adrenaline in Sapanca: ATV Safari, Zipline and Paintball Guide"
        },
        meta_description: {
            tr: "Sapanca’da ATV/UTV safari, zipline ve paintball için güvenlik, kıyafet ve ekipman tüyoları. Parkur seçimi, fiyat oyunları ve sorulacak sorular.",
            en: "Safety tips, gear guide and track selection for ATV/UTV safari, zipline and paintball in Sapanca. Avoiding scams and questions to ask."
        },
        content_en: `
<h2>Getting Muddy!</h2>
<p>Sapanca isn't just about romantic bungalows; it's a huge playground for adults.</p>

<h3>ATV & UTV Safari</h3>
<p>This is the #1 activity. Hundreds of visitors ride into the forests every weekend.</p>
<ul>
<li><strong>ATV (Quad Bike):</strong> Single or double rider. Requires active steering. You will get dirty.</li>
<li><strong>UTV (Buggy):</strong> Side-by-side seating, steering wheel, roll cage. Safer for families or those who don't want to balance.</li>
<li><strong>The Scam/Tip:</strong> Some cheap tours just take you around a flat dusty field for 20 mins. Ask for a "Forest Route" or "Mountain Route" (Dağ Rotası). It should last at least 45 minutes.</li>
<li><strong>Clothing:</strong> Wear sunglasses (for dust) and old shoes. Many operators provide overalls, but don't wear your white Gucci sneakers!</li>
</ul>

<h3>Zipline</h3>
<p>Located mostly in Maşukiye and Naturkoy areas. These are not massive canyon zippers, but fun, medium-length lines over streams/trees. Good for a quick thrill.</p>

<h3>Paintball</h3>
<p>Forest arenas in Sapanca are excellent because of the natural cover (trees, bushes). Ideal for large groups of friends or corporate retreats.</p>
    `
    },
    {
        slug: "cocuklu-aileler-icin-sapanca-puset-park-bisiklet",
        title: {
            tr: "Çocuklu Aileler İçin Sapanca: Parklar, Bisiklet Yolları ve Pusetle Gezilebilecek Yerler",
            en: "Sapanca for Families: Parks, Cycle Paths and Stroller Friendly Spots"
        },
        meta_description: {
            tr: "Sapanca’da çocukla gezilecek puset dostu sahil rotaları, parklar ve bisiklet keyfi. Maşukiye tüyoları, konaklama güvenliği ve aile planı.",
            en: "Stroller-friendly lakeside routes, parks and cycling fun for families in Sapanca. Maşukiye tips, accommodation safety and family itinerary."
        },
        content_en: `
<h2>Is Sapanca Kid-Friendly?</h2>
<p>Yes, very. The flat lakeside area is perfect for toddlers and strollers, while the mountain activities suit older teenagers.</p>

<h3>The Lakeside Promenade (Sahil)</h3>
<p>The entire coastline from Sapanca centre to Uzunkum is essentially a massive park.</p>
<ul>
<li><strong>Strollers:</strong> The path is paved and flat. You can walk for kilometres without lifting the buggy.</li>
<li><strong>Cycling:</strong> There are dedicated cycle lanes. You can rent bikes with child seats or small bikes for kids.</li>
<li><strong>Playgrounds:</strong> Numerous municipal parks along the water.</li>
</ul>

<h3>Maşukiye with Kids?</h3>
<p>Maşukiye is steeper. Strollers are difficult near the waterfalls due to stairs and rocks. However, the restaurant area is generally accessible. The zoo (Ormanya) nearby is a huge hit.</p>

<h3>Ormanya Connectivity</h3>
<p>Just 15 mins from Sapanca is <strong>Ormanya</strong>, arguably the best family spot in Turkey. It has a Hobbit village, a free zoo, and massive walking trails. It is a must-visit.</p>

<h3>Accommodation Tips</h3>
<p>If booking a bungalow, ask about:</p>
<ol>
<li><strong>Stairs:</strong> Many are loft-style with steep ladders. Dangerous for toddlers. Ask for a single-floor unit.</li>
<li><strong>Heated Pools:</strong> Kids love the pool, but mountain nights are cold. Ensure the pool is heated.</li>
<li><strong>Garden Fences:</strong> Ensure the garden is secure so small children can't wander into the forest.</li>
</ol>
    `
    },
    {
        slug: "sapanca-yerel-alisveris-rehberi-bal-ayva-cerkez-peyniri",
        title: {
            tr: "Sapanca’dan Ne Alınır? Bal, Ayva, Peynir ve Fidan Rehberi",
            en: "What to Buy in Sapanca? Honey, Quince, Cheese and Saplings Guide"
        },
        meta_description: {
            tr: "Sapanca–Maşukiye yolunda tezgâhlardan doğru ürün seç: kestane balı, “Eşme ayvası”, isli Çerkez peyniri, hurma ve fidanlık tüyoları.",
            en: "Choosing the right products from roadside stalls: Chestnut honey, 'Eşme quince', Smoked Circassian cheese and garden sapling tips."
        },
        content_en: `
<h2>Taste the Region</h2>
<p>Sapanca is located in highly fertile geography. It sits between the mountains (chestnuts, honey) and the valley (fruits, plants).</p>

<h3>1. Eşme Quince (Ayva)</h3>
<p>The nearby village of Eşme produces the best quince in Turkey. They are bright yellow, softer than usual, and incredibly juicy. Season: Autumn/Winter.</p>

<h3>2. Smoked Circassian Cheese (İsli Çerkez Peyniri)</h3>
<p>The region has a large Circassian population. Their traditional smoked cheese is famous. It has a brown crust and a strong, smoky flavour. Perfect for breakfast or with wine.</p>

<h3>3. Chestnut Honey (Kestane Balı)</h3>
<p>Dark, bitter, and medicinal. Produced in the high forests of Mount Kartepe. It is expensive but potent. Be careful not to eat too much at once!</p>

<h3>4. Plants and Saplings</h3>
<p>Sapanca is the "landscape capital" of Turkey. The road is lined with nurseries selling outdoor plants, trees, and flowers. If you strictly live in Turkey, buying a lemon tree or olive sapling here is much cheaper than in city garden centres.</p>
    `
    },
    {
        slug: "sapanca-sogucak-yaylasi-kalabaliktan-kacis-trekking",
        title: {
            tr: "Sapanca’da Kalabalıktan Kaçış: Soğucak Yaylası Trekking",
            en: "Escape the Crowd: Trekking in Soğucak Plateau"
        },
        meta_description: {
            tr: "Soğucak Yaylası’na çıkış, yol–araç seçimi ve Sapanca’nın gizli trekking rotaları. Kamp hazırlığı, navigasyon ve güvenlik tüyoları tek rehberde.",
            en: "Ascent to Soğucak Plateau, route/vehicle selection and hidden trekking paths. Camping prep, navigation and safety tips in one guide."
        },
        content_en: `
<h2>Above the Clouds</h2>
<p>When the lakeside gets too crowded on Sundays, the locals head UP. Specifically, to <strong>Soğucak Yaylası</strong>.</p>

<h3>The Journey</h3>
<p>It sits at an altitude of 1,100 metres.</p>
<ul>
<li><strong>The Road:</strong> It takes about 30-40 minutes from Sapanca centre. The road is paved for the most part but becomes a dirt track for the last few kilometres. A normal car can make it in dry weather, but an SUV is recommended in winter/mud.</li>
</ul>

<h3>What to Do?</h3>
<ul>
<li><strong>Off-Road:</strong> This is a prime spot for 4x4 enthusiasts and motocross.</li>
<li><strong>Picnic/Camping:</strong> Huge open green meadows. There are no facilities (no electricity, no toilets). Come fully prepared.</li>
<li><strong>Festivals:</strong> In July, there is usually a "Yayla Festivali" with wrestling, music, and food.</li>
</ul>

<h3>Trekking</h3>
<p>The air is noticeably thinner and cleaner. You can hike freely across the meadows. It is safe, but watch out for herd dogs guarding sheep.</p>
    `
    },
    {
        slug: "sapanca-bungalov-kiralama-guvenlik-sahte-hesap",
        title: {
            tr: "Sapanca Bungalov Kiralamada Güvenlik Rehberi: Sahte Hesapları ve Dolandırıcılığı Anlama Taktikleri",
            en: "Safety Guide for Renting Bungalows in Sapanca: Spotting Scams and Fake Accounts"
        },
        meta_description: {
            tr: "Sapanca bungalov kiralarken dolandırılmamak için kontrol listesi: sahte Instagram hesaplarını anlama, IBAN/ödeme güvenliği, sözleşme–fatura ve görüntülü doğrulama adımları.",
            en: "Checklist to avoid scams when renting Sapanca bungalows: Spotting fake Instagram accounts, IBAN safety, contract requirements and video call verification."
        },
        content_en: `
<h2>Don't Let a Scam Ruin Your Holiday</h2>
<p>Sapanca bungalow tourism has exploded in popularity, and sadly, so have scammers. Fake Instagram pages sell non-existent bungalows to unsuspecting tourists.</p>

<h3>The Golden Rules of Security</h3>

<h4>1. The TÜRSAB Verification</h4>
<p>Legitimate travel agencies MUST have a TÜRSAB (Association of Turkish Travel Agencies) license number. You can verify this number on the official TÜRSAB website. If they can't provide it, run.</p>

<h4>2. Video Call Test</h4>
<p>If you are booking directly via Instagram/WhatsApp: <strong>Ask for a video call (Görüntülü Arama)</strong> from the garden of the bungalow. Scammers usually steal photos and cannot show you the place live.</p>

<h4>3. IBAN Check</h4>
<p>Be suspicious if they ask you to send money to a personal bank account (e.g., "Ahmet Yılmaz"). Legitimate businesses usually have corporate bank accounts or secure credit card payment links.</p>

<h4>4. Too Good to Be True?</h4>
<p>If a luxury bungalow with a heated pool is being offered for 2000 TL when the market average is 8000 TL, it is a scam. Period.</p>

<h3>Booking Platforms</h3>
<p>The safest way is to book through reputable platforms (Airbnb, Booking.com, or massive local agencies like Sapanca.com.tr) where your payment is protected until check-in.</p>
    `
    }
];

async function updateArticles() {
    console.log(`Starting batch update for ${articlesToUpdate.length} Sapanca articles...`);

    for (const article of articlesToUpdate) {
        try {
            const titleJson = JSON.stringify(article.title);
            const descJson = JSON.stringify(article.meta_description);

            // Fetch existing TR content first to preserve it
            const { data: existingData, error: fetchError } = await supabase
                .from('articles')
                .select('content')
                .eq('slug', article.slug)
                .single();

            if (fetchError || !existingData) {
                console.error(`Article not found or error fetching: ${article.slug}`, fetchError);
                continue;
            }

            let trContent = "";
            if (typeof existingData.content === 'string') {
                if (existingData.content.trim().startsWith('{')) {
                    try {
                        const parsed = JSON.parse(existingData.content);
                        trContent = parsed.tr || existingData.content;
                    } catch (e) {
                        trContent = existingData.content;
                    }
                } else {
                    trContent = existingData.content;
                }
            }

            // Construct final content JSON
            const finalContent = JSON.stringify({
                tr: trContent,
                en: article.content_en.trim()
            });

            const { error: updateError } = await supabase
                .from('articles')
                .update({
                    title: titleJson,
                    meta_description: descJson,
                    content: finalContent,
                    updated_at: new Date().toISOString()
                })
                .eq('slug', article.slug);

            if (updateError) {
                console.error(`Failed to update ${article.slug}:`, updateError);
            } else {
                console.log(`✅ Updated: ${article.slug}`);
            }

        } catch (err) {
            console.error(`Unexpected error for ${article.slug}:`, err);
        }
    }

    console.log('Batch update complete.');
}

updateArticles();
