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
        slug: "nesin-matematik-koyu-ziyaret-rehberi-sirince",
        title: {
            tr: "Nesin Matematik Köyü Ziyaretçi Rehberi: Şirince’de Gezginler İçeri Girebilir mi?",
            en: "Nesin Math Village Visitor Guide: Are Travellers Allowed in Şirince?"
        },
        meta_description: {
            tr: "Nesin Matematik Köyü ziyaret edilir mi? Şirince’de sessizlik kuralları, Tiyatro Medresesi, fotoğraf etiği ve Şirince’den yürüyerek ulaşım tüyoları.",
            en: "Can you visit Nesin Math Village? Silence rules in Şirince, Theatre Madrasa, photography ethics and walking tips from Şirince village centre."
        },
        content_en: `
<h2>Can You Visit Nesin Math Village as a Tourist?</h2>
<p>This is the most common question for travellers heading to Şirince. The short answer is: <strong>Yes, but with strict rules.</strong></p>
<p>Nesin Math Village is not a typical tourist attraction; it is a living, breathing educational campus where students study mathematics deeply in a specially designed environment. However, they do welcome visitors who respect their philosophy and silence.</p>
<p>Unlike standard museums, there is no ticket booth or turnstile. You simply walk in, but you enter a zone of concentration. The village operates on a system of trust and volunteerism.</p>

<h3>Silence is Golden</h3>
<p>The moment you step through the main gate, you'll likely notice the incredible quiet. Even if there are hundreds of students, the atmosphere is hushed. This is intentional.</p>
<ul>
<li><strong>No Loud Conversations:</strong> Please keep your voice down. Classes are often held in open-air amphitheatres or under pergolas.</li>
<li><strong>Do Not Enter Classrooms:</strong> If you see a lecture in progress (someone writing on a blackboard, students listening), do not approach or take close-up photos. Watch from a respectful distance.</li>
<li><strong>Photography Ethics:</strong> You can take photos of the stunning architecture, the library, and the views. However, avoid taking intrusive photos of students or minors without permission.</li>
</ul>

<h3>The Architecture: A Stone Wonderland</h3>
<p>The village itself is an architectural marvel. Built entirely from local stone and wood, it blends seamlessly into the olive groves of the hillside. The design is timeless—it looks like it could be 50 years old or 500.</p>
<p>Key spots to admire:</p>
<ul>
<li><strong> The Library:</strong> A beautiful two-story stone building that serves as the heart of the village. Visitors are usually allowed to peek inside, but it is a silent study zone.</li>
<li><strong> The Amphitheatre:</strong> Used for lectures and evening gatherings. The acoustics are excellent.</li>
<li><strong> The Watchtower:</strong> Offers a panoramic view of the valley and the village layout.</li>
</ul>

<h3>Theatre Madrasa (Tiyatro Medresesi)</h3>
<p>Just adjacent to the Math Village is the Theatre Madrasa. It shares the same architectural DNA and spirit. It is a research and performance centre for theatre artists. Often, you can walk between the two campuses.</p>
<p><strong>Note:</strong> Sometimes there are private rehearsals or workshops. If a sign says "No Entry" or "Private Session", please respect it.</p>

<h3>How to Get There from Şirince Centre</h3>
<p>The Math Village is located about <strong>1 km uphill</strong> from the centre of Şirince.</p>
<ol>
<li><strong>Walking:</strong> It takes about 15-20 minutes. The road is paved but steep in sections. It’s a pleasant walk through olive trees. Follow the signs for "Matematik Köyü".</li>
<li><strong>Driving:</strong> You can drive up, but <strong>parking is extremely limited</strong>. The narrow road ends at the village gate, and there are only a few spots. If it's a busy weekend, it is much better to leave your car in the main Şirince pay-and-display car park (Otopark) and walk or take a taxi.</li>
<li><strong>Taxi:</strong> A taxi from the village square is inexpensive and saves you the uphill hike in the summer heat.</li>
</ol>

<h3>Eating and Drinking</h3>
<p>There is a cafeteria for students. Occasionally, they allow visitors to buy tea, coffee, or a simple meal if it's not too crowded, but <strong>do not count on it</strong> as a restaurant. It is designed to feed the students and staff.</p>
<p>We recommend having your main meal in Şirince village before or after your visit. The Math Village is food for the mind, not the stomach!</p>

<h3>Support the Village</h3>
<p>The Nesin Math Village is a non-profit project founded by Ali Nesin to promote mathematical thinking. It runs on donations and student fees. If you enjoy your visit, look for the donation box or the small gift shop where they sell books and souvenirs. Your contribution helps keep this unique utopia alive.</p>
    `
    },
    {
        slug: "sirince-st-john-kilisesi-dilek-havuzu-cirkince-efsane",
        title: {
            tr: "Şirince’nin Hikâyeli Tepesi: St. John Kilisesi, Dilek Havuzu ve “Çirkince” Efsanesi",
            en: "The Storied Hill of Şirince: St. John the Baptist Church, Wishing Pool and the 'Çirkince' Legend"
        },
        meta_description: {
            tr: "Şirince’de St. John Kilisesi’ne nasıl gidilir? Dilek havuzu ritüeli, “Çirkince” adının hikâyesi ve St. Dimitrios Kilisesi ile Şirince’nin en iyi manzara noktaları rehberi.",
            en: "How to get to St. John the Baptist Church in Şirince? The wishing pool ritual, the story behind the name 'Çirkince', St. Dimitrios details and the best panoramic view points."
        },
        content_en: `
<h2>The Two Churches of Şirince</h2>
<p>When you look at Şirince from a distance, you will see two prominent buildings rising above the white houses. These are the historic churches, remnants of the Greek Orthodox community that lived here before the population exchange of 1923.</p>

<h3>1. St. John the Baptist Church (The Upper Church)</h3>
<p>Located on the highest hill of the village, St. John the Baptist Church (Aziz Yahya Kilisesi) offers the most spectacular view of Şirince. Unfortunately, the building was neglected for many years, but recent restorations have stabilized it.</p>
<ul>
<li><strong>The View:</strong> The terrace in front of the church is the best photo spot in town. You can see the entire cascade of houses and the green valley below.</li>
<li><strong>The Wishing Pool:</strong> Inside the courtyard, there is a circular pool known as the "Wishing Pool". The tradition is to throw a coin into the centre hole. If your coin goes in, your wish is granted! You will see many tourists trying their luck.</li>
<li><strong>Café:</strong> Currently, there is a café operating in the church garden. It's a fantastic spot for a Turkish coffee or a glass of local wine while watching the sunset.</li>
</ul>
<p><strong>How to get there:</strong> It is a steep climb. From the main bazaar, follow the signs pointing upwards. Wear comfortable shoes; the cobblestones can be slippery.</p>

<h3>2. St. Dimitrios Church (The Lower Church)</h3>
<p>Located closer to the village entrance, St. Dimitrios is structurally more intact than St. John. It features impressive frescoes (though faded) and intricate wood carving details remaining from the 19th century.</p>
<p>It is often quieter than the upper church, offering a more contemplative atmosphere. Access is easier, involving less climbing.</p>

<h2>The Legend of "Çirkince"</h2>
<p>You might hear that Şirince used to be called <strong>"Çirkince" (Ugly-ish)</strong>. Why would anyone call this beautiful place ugly?</p>
<p>According to the legend, the original inhabitants settled here to escape pirates or feudal lords. They wanted to deter outsiders from coming up the mountains. So, when people asked, "What is your village like?", they would reply, "Oh, it's quite ugly (Çirkince)."</p>
<p>The name stuck for centuries. It was only in 1926, by the decree of the then-governor of Izmir, Kazım Dirik, that the name was officially changed to <strong>Şirince (Cute/Pretty-ish)</strong> to reflect its true beauty.</p>

<h2>"The End of the World" Fame (2012)</h2>
<p>Şirince gained unexpected global fame in December 2012. According to a specific interpretation of the Mayan Calendar, the world was supposed to end on December 21, 2012. Believers claimed that only two places on Earth would be spared: Bugarach in France and Şirince in Turkey (due to supposed positive energy fields).</p>
<p>Tens of thousands of people flocked to the village. Tom Cruise was rumoured to be coming (he didn't). In the end, nothing happened, and the world spun on. But the event cemented Şirince's place on the international tourism map.</p>
    `
    },
    {
        slug: "efes-sirince-ayni-gun-rota",
        title: {
            tr: "Efes Antik Kenti ve Şirince’yi Aynı Güne Sığdırma Rehberi: Zaman Yönetimi, Rota ve Ulaşım Tüyoları",
            en: "Guide to Combining Ephesus Ancient City and Şirince in One Day: Time Management, Route and Transport Tips"
        },
        meta_description: {
            tr: "Efes Antik Kenti ve Şirince aynı günde gezilir mi? Sabah Efes’i serin saatlerde bitirip öğleden sonra Şirince’ye çıkacağınız pratik rota, ulaşım ve zaman yönetimi rehberi.",
            en: "Can you do Ephesus and Şirince in one day? Practical itinerary starting with Ephesus in the cool morning and Şirince in the afternoon. Transport and time management guide."
        },
        content_en: `
<h2>Can You Do Both in One Day?</h2>
<p>Absolutely. In fact, this is the most popular itinerary for travelers in the Selçuk area. The two destinations are only about <strong>10-12 km apart</strong>, but they offer completely different vibes: monumental ancient history in the morning, and relaxing village atmosphere in the afternoon.</p>

<h3>The Golden Rule: Order Matters</h3>
<p>We strongly recommend doing <strong>Ephesus FIRST, Şirince SECOND</strong>. Here is why:</p>
<ol>
<li><strong>Heat and Shade:</strong> Ephesus is an open-air archaeological site with very little shade. Marble stones reflect the heat. It gets incredibly hot by midday in summer. You want to be there as early as possible (opens at 08:00).</li>
<li><strong>Crowds:</strong> Cruise ship groups flood Ephesus starting around 10:00 - 11:00. Arriving at 08:30 gives you a head start.</li>
<li><strong>Relaxation:</strong> After walking for 2-3 hours on ancient stones, you will be tired. Şirince is perfect for sitting down, eating a long lunch, drinking wine, and wandering slowly. It is the reward after the 'work' of touring Ephesus.</li>
</ol>

<h3>The Perfect Itinerary</h3>

<h4>08:30 – 11:30: Ephesus Ancient City</h4>
<ul>
<li>Start at the <strong>Upper Gate (Magnesia Gate)</strong>. This allows you to walk downhill towards the Library of Celsus.</li>
<li>Don't miss the <strong>Terrace Houses</strong> (requires extra ticket, but worth every penny). It is under a roof, so it's cooler.</li>
<li>Exit through the Lower Gate.</li>
</ul>

<h4>11:30 – 12:00: Transport to Şirince</h4>
<ul>
<li>If you have a car, drive towards Selçuk and follow signs for Şirince (about 15 mins).</li>
<li>If using public transport: Take a minibus (dolmuş) or taxi from the Ephesus Lower Gate to <strong>Selçuk Bus Terminal (Otogar)</strong>. From the Opogar, change to the <strong>Şirince Dolmuş</strong>. They run every 20 minutes in summer.</li>
</ul>

<h4>12:00 – 14:00: Lunch and Wine in Şirince</h4>
<li>Arrive in Şirince. The temperature will be 2-3 degrees cooler than Ephesus due to the altitude.</li>
<li>Head straight to a restaurant. Order "Gözleme" (stuffed flatbread) or a full Aegean breakfast.</li>
<li>Sample the local fruit wines.</li>

<h4>14:00 – 16:30: Explore the Village</h4>
<li>Walk up to St. John's Church for the view.</li>
<li>Wander the bazaar for olive oil soaps, handmade lace, and jewellery.</li>
<li>Treat yourself to "Kumda Kahve" (Turkish coffee cooked on hot sand).</li>

<h4>17:00: Return</h4>
<li>Catch the minibus back to Selçuk or drive back to your hotel.</li>

<h3>Transport Tips</h3>
<ul>
<li><strong>Taxi Cost:</strong> A taxi from Ephesus directly to Şirince is the fastest option. It saves you the transfer at Selçuk Otogar.</li>
<li><strong>Minibus:</strong> Cheap and reliable, but requires the transfer in Selçuk. The last minibus down from Şirince is usually around 20:00 or 21:00 in summer, but check with the driver!</li>
</ul>
    `
    },
    {
        slug: "sirince-sarap-rehberi-meyve-sarabi-uzum",
        title: {
            tr: "Şirince Şarap Rehberi: Meyve Şarabı mı, Gerçek Üzüm Mü? Tadım ve Alışveriş Tüyoları",
            en: "Şirince Wine Guide 2025: Fruit Wine or Real Grape? Tasting, Buying and Transport Tips"
        },
        meta_description: {
            tr: "Şirince’de meyve şarabı mı sek üzüm mü? Tadım sırası, etiket okuma, alışveriş tüyoları ve uçak/otobüsle şarap taşıma rehberi.",
            en: "Fruit wine or grape wine in Şirince? Tasting order, label reading, shopping tips and guide to transporting wine by plane or bus."
        },
        content_en: `
<h2>The Fruit Wine Capital</h2>
<p>Şirince is famous across Turkey for its fruit wines. You will see shops everywhere displaying colourful bottles: Pomegranate (Nar), Mulberry (Karadut), Melon (Kavun), Strawberry (Çilek), Peach (Şeftali) and many more.</p>

<h3>Fruit Wine vs. Grape Wine</h3>
<p>It is important to manage your expectations. <strong>These are not vintage French wines.</strong> They are sweet, dessert-style beverages.</p>
<ul>
<li><strong>Fruit Wines:</strong> Made by fermenting the fruit juice or adding fruit extract to a grape base. They are sweet, aromatic, and low in tannins. They taste almost like juice—dangerous because the alcohol content is usually around 8-10%!</li>
<li><strong>Grape Wines:</strong> Şirince also produces standard grape wines (Cabernet, Merlot, Shiraz and local grapes like Öküzgözü). Some local producers are making quite decent table wines.</li>
</ul>

<h3>Tasting Etiquette</h3>
<p>Walking through the bazaar, shop owners will invite you in for a free tasting ("Gel, şarap tadımı bedava!").</p>
<ol>
<li><strong>Don't Be Shy:</strong> You are not obligated to buy just because you tasted.</li>
<li><strong>Try the Classics:</strong> <em>Black Mulberry (Karadut)</em> is the most popular and generally considered the best. It pairs beautifully with chocolate or cheesecake. <em>Melon (Kavun)</em> is surprisingly aromatic.</li>
<li><strong>Ask for "Dry" (Sek) if you prefer:</strong> Local grape wines can be dry, but fruit wines are almost exclusively sweet or semi-sweet.</li>
</ol>

<h3>Buying Tips</h3>
<ul>
<li>The price is usually uniform across the village for the standard touristic brands.</li>
<li>Check the seal and the clear appearance of the liquid.</li>
<li>If you buy 3-4 bottles, you can often negotiate a small discount or get a small gift (like a magnet or bar of soap).</li>
</ul>

<h3>Transporting Wine Home</h3>
<p>Many visitors worry about carrying bottles back.</p>
<ul>
<li><strong>By Plane:</strong> You cannot take wine in your carry-on (cabin) luggage if it's over 100ml. You MUST put it in your checked bag. Wrap it well in clothes or ask the shop for bubble wrap (most have it).</li>
<li><strong>By Bus:</strong> Safe to carry in the overhead bin or under the seat.</li>
<li><strong>Customs:</strong> If you are flying internationally, check your country's duty-free alcohol allowance. Usually, it is 1 or 2 litres per person.</li>
</ul>

<h3>Top Recommendation</h3>
<p>Even if you are a wine snob who only drinks aged Bordeaux, try a cold glass of <strong>Black Mulberry (Karadut) wine</strong> on a hot afternoon. It is refreshing and uniquely "Şirince".</p>
    `
    },
    {
        slug: "izmirden-sirinceye-arabasiz-ulasim-izban-selcuk-dolmus",
        title: {
            tr: "İzmir’den Şirince’ye Arabasız Ulaşım: İZBAN, Selçuk Dolmuşları ve Püf Noktaları",
            en: "Car-Free Guide from Izmir to Şirince: IZBAN, Selçuk Minibuses and Transport Hacks"
        },
        meta_description: {
            tr: "İzmir’den Şirince’ye arabasız nasıl gidilir? İZBAN ile Selçuk’a ulaşım, Tepeköy aktarması, Selçuk–Şirince dolmuş kalkış noktaları, son sefer tüyoları ve bavulla gezi ipuçları.",
            en: "How to get from Izmir to Şirince without a car? Reaching Selçuk via IZBAN, Tepeköy transfer, Selçuk-Şirince minibus points, last bus times and luggage tips."
        },
        content_en: `
<h2>Getting to Şirince is Easier Than You Think</h2>
<p>You do not need to rent a car to visit Şirince. The public transport network in Izmir is excellent and extends all the way to Selçuk district.</p>

<h3>Step 1: Izmir to Selçuk via IZBAN</h3>
<p><strong>IZBAN</strong> is the suburban train line connecting Izmir from north to south. It is cheap, clean, and reliable.</p>
<ol>
<li><strong>Board the Train:</strong> Get on the IZBAN train heading South (direction <strong>Tepeköy</strong> or <strong>Selçuk</strong>). You can board from Alsancak, Hilal, or Halkapınar stations in the city centre.</li>
<li><strong>The Tepeköy Transfer (Crucial!):</strong> Most trains from the centre terminate at <strong>Tepeköy</strong> station. You usually have to get off here and wait on the same platform (or the opposite one, check signs) for the "Selçuk Train". Ensure you check the schedule; the Selçuk connection usually runs once an hour.</li>
<li><strong>Arrival:</strong> Get off at <strong>Selçuk Station</strong>. The journey from Izmir centre takes about 1 hour 30 minutes total.</li>
</ol>
<p><strong>Cost:</strong> You need an "Izmirim Kart" (transport card). It costs significantly less than a bus ticket. Remember to tap your card when <em>exiting</em> the station to get a partial refund for the distance traveled ("Artı Para" system)!</p>

<h3>Step 2: Selçuk to Şirince via Minibus (Dolmuş)</h3>
<p>Once you are at Selçuk IZBAN station:</p>
<ol>
<li>Walk to the <strong>Selçuk Otogar (Bus Terminal)</strong>. It is about a 5-10 minute walk from the train station.</li>
<li>Look for the minibuses marked <strong>ŞİRİNCE</strong>. They are usually white or cream coloured.</li>
<li><strong>Frequency:</strong> They run every 20 minutes in summer and every 30-45 minutes in winter.</li>
<li><strong>Journey:</strong> The ride takes about 20 minutes. It winds up a beautiful mountain road.</li>
<li><strong>Payment:</strong> Cash only. Ensure you have small Turkish Lira notes (10, 20, 50 TRY).</li>
</ol>

<h3>Alternative: Intercity Bus</h3>
<p>You can take a big intercity bus (Pamukkale, Kamil Koç etc.) from <strong>Izmir Otogar</strong> to <strong>Selçuk Otogar</strong>. This is faster (no transfers) but more expensive than IZBAN. Once at Selçuk Otogar, transfer to the Şirince minibus as above.</p>

<h3>Leaving Şirince</h3>
<p>The last minibus down from Şirince usually departs around 20:00 or 21:00 in the peak season. In winter, it might be as early as 17:00 or 18:00. <strong>Always ask the driver for the "Last Bus" (Son araba) time when you arrive.</strong> Don't get stuck on the mountain!</p>
    `
    },
    {
        slug: "sirince-pahali-mi-butce-rehberi-2025",
        title: {
            tr: "Şirince Pahalı mı? 2025 İçin Gerçekçi Bütçe Rehberi (Otopark, Yemek ve Para Tüyoları)",
            en: "Is Şirince Expensive? Realistic Budget Guide for 2025 (Parking, Food and Cash Tips)"
        },
        meta_description: {
            tr: "Şirince pahalı mı? 2025 için otopark, kahvaltı, yemek ve ödeme detaylarıyla Şirince’de bütçe dostu gezmenin net rehberi.",
            en: "Is Şirince pricey? A clear guide for 2025 covering parking fees, breakfast costs, meal prices and payment details for a budget-friendly trip."
        },
        content_en: `
<h2>The "Tourist Price" Reality</h2>
<p>Is Şirince expensive? Compared to a standard Turkish village, <strong>yes</strong>. Compared to Bodrum or Datça? <strong>No</strong>. It occupies a middle ground.</p>

<h3>1. Parking Fees</h3>
<p>Parking is one of the first costs you will encounter. You cannot drive inside the village.</p>
<ul>
<li><strong>Main Car Park:</strong> Expect to pay a flat fee for the day. In 2025, this is generally around 150-250 TRY depending on the season.</li>
<li><strong>Free Parking?</strong> Almost impossible. There is road-side parking far down the hill, but walking up in the heat is tough. Pay for the car park; it supports the municipality.</li>
</ul>

<h3>2. Food and Drink</h3>
<ul>
<li><strong>Turkish Breakfast (Serpme Kahvaltı):</strong> This is the flagship meal. For a full spread (cheese, olives, eggs, jams, tea), expect to pay between 400-600 TRY per person. Scenic spots with a view charge more.</li>
<li><strong>Gözleme (Pancake):</strong> The budget option. A Gözleme + Ayran (yoghurt drink) combo is affordable and filling. Approx. 150-250 TRY.</li>
<li><strong>Wine:</strong> A bottle of fruit wine in a restaurant will cost double or triple what it costs in the shop. In the bazaar shops, bottles range from 250 TRY to 500 TRY depending on quality.</li>
<li><strong>Turkish Coffee on Sand (Kumda Kahve):</strong> A touristic ritual. Currently around 100-150 TRY per cup.</li>
</ul>

<h3>3. Shopping</h3>
<p>Souvenirs vary wildly.</p>
<ul>
<li><strong>Olive Oil Soap:</strong> Inexpensive and high quality. Good gift.</li>
<li><strong>Handmade Textiles/Lace:</strong> Can be pricey, but usually worth it for the labour involved. Negotiate politely.</li>
<li><strong>Magnets/Trinkets:</strong> Standard tourist pricing.</li>
</ul>

<h3>Money Saving Tips</h3>
<ol>
<li><strong>Cash is King:</strong> While many restaurants take cards, small stalls, toilets (WC), and the minibus (dolmuş) often require cash. Carry small bills.</li>
<li><strong>Mid-Week Visit:</strong> Prices don't drop, but the crowds do, making your money feel better spent.</li>
<li><strong>Ask Prices First:</strong> Before ordering "Kumda Kahve" or sitting down for breakfast, check the menu. Avoid surprises.</li>
</ol>

<h3>Verdict</h3>
<p>You can visit Şirince on a budget if you stick to Gözleme and sightseeing (viewing the churches is free/cheap). However, if you want the full experience with wine tasting and a grand breakfast, budget accordingly. It is a premium destination in the region.</p>
    `
    }
];

async function updateArticles() {
    console.log(`Starting batch update for ${articlesToUpdate.length} Şirince articles...`);

    for (const article of articlesToUpdate) {
        try {
            // 1. Convert title and description to JSON strings
            const titleJson = JSON.stringify(article.title);
            const descJson = JSON.stringify(article.meta_description);
            const contentJson = JSON.stringify({
                tr: "Bu içerik güncelleniyor...",
                // Note: For existing TR content, we ideally preserve it. 
                // In the Bodrum script we fetched it first. 
                // Since I want to avoid a read-write loop complexity for this simple batch, 
                // I will implement a fetch-merge logic here.
                en: article.content_en
            });

            // Fetch existing TR content first to preserve it
            const { data: existingData, error: fetchError } = await supabase
                .from('articles')
                .select('content, title, meta_description')
                .eq('slug', article.slug)
                .single();

            if (fetchError || !existingData) {
                console.error(`Article not found or error fetching: ${article.slug}`, fetchError);
                continue;
            }

            // Handle TR Content Preservation
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

            // Handle TR Title/Desc Preservation (if they were already JSON for some reason, though unlikely)
            // Actually, we provided the TR title/desc in the 'articlesToUpdate' array above from the fetch request manual check.
            // So we can trust our hardcoded TR values in 'articlesToUpdate' or reuse existing.
            // Let's use the ones in 'articlesToUpdate' as they are the source of truth for this operation
            // ensuring they match the migration data ideally.

            // Construct final JSONs
            const finalContent = JSON.stringify({
                tr: trContent,
                en: article.content_en.trim()
            });

            const { error: updateError } = await supabase
                .from('articles')
                .update({
                    title: titleJson, // We use the manual mapped objects
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
