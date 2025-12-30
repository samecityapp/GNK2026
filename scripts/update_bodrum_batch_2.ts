
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const articlesToUpdate = [
    {
        slug: "bodrum-nerede-kalinir-yalikavak-turkbuku-merkez-rehberi",
        title: {
            tr: "Bodrum’da Nerede Kalınır? Mahalle Savaşları: Yalıkavak, Türkbükü mü Yoksa Merkez mi?",
            en: "Where to Stay in Bodrum? Neighbourhood Wars: Yalıkavak, Türkbükü or Centre?"
        },
        meta_description: {
            tr: "Bodrum’da nerede kalınır? Yalıkavak, Türkbükü, Bodrum Merkez, Gümüşlük, Akyarlar, Turgutreis, Gümbet ve Bitez bölgelerinin artıları-eksileri. Tatil tarzınıza en uygun bölgeyi seçin.",
            en: "Where to stay in Bodrum? Pros and cons of Yalıkavak, Türkbükü, Bodrum Centre, Gümüşlük, Akyarlar, Turgutreis, Gümbet and Bitez regions. Choose the region best suiting your holiday style."
        },
        content_en: `<h1>Where to Stay in Bodrum?</h1>
<h2>Neighbourhood Wars: Yalıkavak, Türkbükü or Centre?</h2>

<p>The biggest mistake made when planning a Bodrum holiday is to assume Bodrum is a "small coastal town". However, Bodrum is a peninsula and every bay seems to have written its own rules. Two points appearing close on the map can take 45 minutes - 1 hour in summer traffic. That's why choosing the right accommodation in Bodrum is even more critical than choosing a hotel: if you stay in the wrong neighbourhood, your holiday will pass on the road, looking for parking and saying "I wish".</p>

<p>In this guide, without giving hotel/business names, I will explain Bodrum's main regions with "character analysis":</p>

<ul class="list-disc pl-6 space-y-2">
    <li>Which place is how lively?</li>
    <li>Which place is cooler, which is windier?</li>
    <li>Family with children, couple, group of friends... who fits where?</li>
    <li>Does the "Let's go down to the centre" plan really work?</li>
</ul>

<p class="mt-4">Short note: In "Where to stay in Bodrum?" search, people's real trouble is this: establishing the sea + night + transportation + budget balance. This article solves exactly this.</p>

<div class="my-8">
    <img src="/images/blog/bodrum_accommodation_cover.png" alt="Bodrum General View" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">Decision in 30 Seconds</h3>
    <ul class="space-y-2 text-sm">
        <li>🏛️ <strong>First time visiting, access everywhere:</strong> Bodrum Centre</li>
        <li>🛥️ <strong>Luxury, marina, chic atmosphere:</strong> Yalıkavak</li>
        <li>🥂 <strong>"See and be seen", pier culture:</strong> Türkbükü</li>
        <li>🌅 <strong>Bohemian, sunset, romantic:</strong> Gümüşlük</li>
        <li>🏖️ <strong>Shallow sea + sand with child:</strong> Akyarlar / Karaincir / Bitez</li>
        <li>🎉 <strong>Affordable price + nightlife:</strong> Gümbet</li>
        <li>💨 <strong>More settled, wide, wind loving:</strong> Turgutreis</li>
    </ul>
</div>

<hr class="my-8" />

<h2>Part 1: "Bodrum's Big Three"</h2>
<p class="text-lg font-semibold text-gray-700">Centre – Yalıkavak – Türkbükü</p>

<div class="bg-yellow-50 p-4 rounded-lg my-4 border-l-4 border-yellow-400">
    <h4 class="font-bold text-yellow-800">3 facts before choosing accommodation</h4>
    <ul class="list-disc pl-5 text-sm mt-2">
        <li>"Close to centre" in Bodrum doesn't always mean fast transport. Time, traffic and parking change everything.</li>
        <li>Sea quality changes a lot from bay to bay. "Bodrum sea" is not a single thing.</li>
        <li>Neighbourhood choice determines holiday style. Looking for silence and landing in the middle of entertainment is the most common mistake.</li>
    </ul>
</div>

<h3>1) Classic and Lively: Bodrum Centre</h3>
<p class="italic text-gray-600">Kumbahçe – Bazaar – Marina line</p>

<p>It is the place for those saying "I want to feel the spirit of Bodrum". It is the clearest option for those who want to wander among white houses, mix into the bazaar, take an evening walk, live the answer to the question "Where is the heart of Bodrum?".</p>

<p><strong>Region's character:</strong><br>
The Centre works like the "starting point" of the peninsula. Boat tours during the day, bazaar crowd in the evening, nightlife at night… Everything starts here and disperses.</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-green-50 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">Pros</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Transportation hub:</strong> If there is no car, it is the most comfortable region. Transition happens to many lines from here with minibus/shuttle logic.</li>
            <li><strong>Everything at hand:</strong> Market, pharmacy, seaside walk, bazaar, night options…</li>
            <li><strong>Ideal for first timers:</strong> The most correct start to "get to know" Bodrum.</li>
        </ul>
    </div>
    <div class="bg-red-50 p-4 rounded">
        <h4 class="font-bold text-red-800 mb-2">Cons</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Sea expectation:</strong> Centre beaches might give an "inner city" feeling. The claim for clearest bay is generally in other regions.</li>
            <li><strong>Noise risk:</strong> If you are close to bazaar and entertainment, there might be sound at night.</li>
            <li><strong>Traffic + parking:</strong> Parking issue in the centre can be annoying in evening hours.</li>
        </ul>
    </div>
</div>
<p><strong>Who should choose?</strong><br>
First time visitors to Bodrum, car-free travelers, those saying "I visit during day and go down to bazaar in evening", those wanting maximum variety in short holiday.</p>

<hr class="my-8" />

<h3>2) Address of New Luxury: Yalıkavak</h3>
<p class="italic text-gray-600">"Marina + wind + elegance" triangle</p>

<p>Yalıkavak has moved Bodrum's center of gravity up in recent years. This place came out of "quiet fishing town" image and took on a more premium identity.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_yalikavak_view.png" alt="Yalıkavak Marina and View" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p><strong>Region's character:</strong><br>
Chic evenings, marina walks, a more selected crowd… Yalıkavak appeals to those wanting to "live Bodrum comfortably".</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-green-50 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">Pros</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Coolness:</strong> Since it is in the northwest of the peninsula, it can blow "breezily" most of the time even in summer.</li>
            <li><strong>Premium atmosphere:</strong> More well-groomed, tidier and "luxury feeling" is high.</li>
            <li><strong>Evening plans strong:</strong> Those wanting walk + view + chic environment will be pleased.</li>
        </ul>
    </div>
    <div class="bg-red-50 p-4 rounded">
        <h4 class="font-bold text-red-800 mb-2">Cons</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Budget:</strong> Can be one of the highest budget regions of Bodrum.</li>
            <li><strong>Summer evening traffic:</strong> Especially intensifies after sunset.</li>
            <li><strong>"We go down to centre" trap:</strong> If you plan to go back and forth to centre every day, part of your holiday turns into road.</li>
        </ul>
    </div>
</div>
<p><strong>Who should choose?</strong><br>
Those with flexible budget, luxury lovers, seeking cooler air, couples/friend groups saying "let my holiday be chic".</p>

<hr class="my-8" />

<h3>3) "See and Be Seen" Scene: Türkbükü</h3>
<p class="italic text-gray-600">Göltürkbükü – pier culture – sociality</p>

<p>Türkbükü is one of the regions with the most "podium" evenings in Bodrum. Holiday here is a bit of a "social scene".</p>

<div class="my-6">
    <img src="/images/blog/bodrum_turkbuku_view.png" alt="Türkbükü Piers" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p><strong>Region's character:</strong><br>
Pier culture stands out more than beach. Sunbathing during day, movement in late afternoon, sociality in evening… Türkbükü's rhythm is like this.</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Pros:</strong> Ambience is chic, lively and social. Sea is sometimes calm due to closed bay structure. Coast line flows "showy" in evenings.</li>
    <li><strong>Cons:</strong> Access is not as comfortable as Centre if no car. Budget can be challenging (hard to "throw my towel and enter"). Can tire those seeking silence.</li>
</ul>
<p class="mt-2"><strong>Who should choose?</strong><br>Those wanting to socialize, loving chic beach day, holidaying with "vibe" focus.</p>

<hr class="my-8" />

<h2>Part 2: Bodrum's Real Surprise</h2>
<p class="text-lg font-semibold text-gray-700">Bohemian, family friendly and budget friendly neighbourhoods</p>
<p>Bodrum is not just Centre–Yalıkavak–Türkbükü. In fact, places that "make Bodrum Bodrum" for many people are in this second part.</p>

<h3>4) Bohemian Rhapsody: Gümüşlük</h3>
<p class="italic text-gray-600">"Sunset + art + shabby luxury" feeling</p>

<div class="my-6">
    <img src="/images/blog/bodrum_gumusluk_sunset.png" alt="Gümüşlük Sunset" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>Gümüşlük is one of the places slowing down time in Bodrum. Less pretentious, more "moment".</p>
<p><strong>Region's character:</strong> Handmade stalls, more bohemian streets, sunset ritual… Gümüşlük is good for those wanting a "calm but quality" evening.</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Pros:</strong> Bodrum's strongest sunset. Artistic and original spirit. Romantic atmosphere.</li>
    <li><strong>Cons:</strong> Sea can be stony/mossy in places. Narrow roads can create parking trouble in evenings. Far from centre.</li>
</ul>
<p><strong>Who should choose?</strong><br>Romantic couples, bohemian atmosphere lovers, those escaping crowds and wanting "Bodrum's calm side".</p>

<hr class="my-8" />

<h3>5) Castle of Families: Turgutreis & Akyarlar & Karaincir</h3>
<p class="italic text-gray-600">For those wanting "Sand, shallow sea, spaciousness"</p>

<div class="my-6">
    <img src="/images/blog/bodrum_turgutreis_beach.png" alt="Turgutreis and Akyarlar Coast" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>This line is one of the regions where those holidaying with children in Bodrum are most comfortable. Strong candidate especially for families looking for shallow sea and sand.</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Pros:</strong> Shallow and sandy sea (safe for children). More reasonable price balance. Spacious because it gets wind.</li>
    <li><strong>Cons:</strong> Wind can sometimes chill. Distance to centre exists (hard to come and go every day). Nightlife is calm.</li>
</ul>
<p><strong>Who should choose?</strong><br>Families with children, those saying "sea-sand is first for me", liking calmer and wide areas.</p>

<hr class="my-8" />

<h3>6) Opposite Siblings: Gümbet & Bitez</h3>
<p class="italic text-gray-600">Side by side but completely different characters</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-purple-50 p-4 rounded border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-2">Gümbet: "Fun + Budget"</h4>
        <p class="text-sm mb-2">More lively, young, economical. Strong nightlife.</p>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>+:</strong> Night action, Proximity to Centre, Budget.</li>
            <li><strong>-:</strong> Noise, Crowds.</li>
        </ul>
        <p class="text-xs mt-2 font-semibold">Who? Young groups, entertainment focused.</p>
    </div>
    <div class="bg-teal-50 p-4 rounded border border-teal-200">
        <h4 class="font-bold text-teal-800 mb-2">Bitez: "Green + Peace"</h4>
        <p class="text-sm mb-2">Calmer, breathing, suitable for family.</p>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>+:</strong> Calmness, Soft tempo, Family friendly.</li>
            <li><strong>-:</strong> Nightlife scarce, can feel disconnected from Centre.</li>
        </ul>
        <p class="text-xs mt-2 font-semibold">Who? Families, those wanting to rest.</p>
    </div>
</div>

<hr class="my-8" />

<h3>7) 5 Most Common Mistakes Made in Bodrum</h3>
<p>These are troubles much searched in SEO too; saves you directly:</p>
<ul class="list-decimal pl-6 space-y-2">
    <li>Staying in Yalıkavak and thinking "we'll go down" to centre every evening → road + parking + traffic can tire.</li>
    <li>Staying in Gümbet and expecting "let me sleep quietly" → tempo may not fit you.</li>
    <li>Expectation of "I enter sea for free everywhere" in Türkbükü → your plan may spoil.</li>
    <li>Not taking evening coolness into account in windy region like Akyarlar → thin top might be necessary.</li>
    <li>Choosing hotel without choosing location in Bodrum → regret of "I liked hotel but everything is far".</li>
</ul>

<hr class="my-8" />

<div class="bg-gray-100 p-6 rounded-lg">
    <h3 class="font-bold text-gray-800 mb-4">Summary Decision List: "Which One Am I?"</h3>
    <ul class="space-y-2 text-sm">
        <li>🏛️ <strong>First time Bodrum + maximum variety:</strong> Bodrum Centre</li>
        <li>🛥️ <strong>Premium, chic, marina evening:</strong> Yalıkavak</li>
        <li>🥂 <strong>Sociality, pier culture:</strong> Türkbükü</li>
        <li>🌅 <strong>Bohemian, sunset, original:</strong> Gümüşlük</li>
        <li>🏖️ <strong>Family + shallow sand + comfortable sea:</strong> Akyarlar / Karaincir / Bitez</li>
        <li>🎉 <strong>Affordable price + nightlife:</strong> Gümbet</li>
        <li>💨 <strong>More settled, wide, wind loving:</strong> Turgutreis</li>
    </ul>
</div>

<hr class="my-8" />

<h3>Frequently Asked Questions</h3>
<div class="space-y-4">
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">I'm going to Bodrum for first time, which is most risk-free region?</summary>
        <p class="mt-2 text-gray-600">Usually Bodrum Centre is most risk-free start: transportation, bazaar, symbols, everything at hand.</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Where is most comfortable with children in Bodrum?</summary>
        <p class="mt-2 text-gray-600">Usually Akyarlar/Karaincir line and Bitez can feel more family friendly (in terms of sea and tempo).</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Where is the cleanest sea?</summary>
        <p class="mt-2 text-gray-600">Varies from bay to bay. In general clarity increases in different bays of peninsula instead of inner city beaches. Critical thing is catching wind and wave day.</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Most logical regions for nightlife?</summary>
        <p class="mt-2 text-gray-600">Centre and Gümbet line more lively; Türkbükü flows more like "social scene".</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Is Bodrum possible without a car?</summary>
        <p class="mt-2 text-gray-600">Possible but region choice becomes even more important. Those coming without car usually find Centre more comfortable.</p>
    </details>
     <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">I want both "silence + nice evening" in Bodrum, where?</summary>
        <p class="mt-2 text-gray-600">Calmer regions like Gümüşlük or Bitez give this feeling more.</p>
    </details>
</div>

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Result: You Create Bodrum</h3>
    <p class="text-blue-900">Bodrum is not a single place; every bay is its own republic. Right region choice can make you love Bodrum, wrong choice can make you say "I won't come again". Ask yourself: "My Bodrum; is it fun, sea, elegance, silence?" When answer clears up, correct neighbourhood chooses itself anyway.</p>
</div>`
    },
    {
        slug: "bodrum-orak-adasi-tekne-turu-hangi-tekne",
        title: {
            tr: "Bodrum’un Maldivleri Orak Adası: Hangi Tekne Turu Seçilmeli? (Parti Teknesi mi, Sakin Gulet mi, Özel Tekne mi?)",
            en: "Bodrum's Maldives Orak Island: Which Boat Tour Should Be Chosen? (Party Boat, Calm Gulet or Private Boat?)"
        },
        meta_description: {
            tr: "Bodrum Orak Adası tekne turu rehberi: Parti teknesi (korsan), sakin gulet veya özel tekne seçenekleri. Orak Adası’nda deniz nasıl, derin mi, şnorkel şart mı, hangi tur kime uygun? Tüm tüyolar burada.",
            en: "Bodrum Orak Island boat tour guide: Party boat (pirate), calm gulet or private boat options. How is the sea at Orak Island, deep? Is snorkel necessary? Which tour suits whom? All tips here."
        },
        content_en: `<h1>Bodrum's Maldives Orak Island: Which Boat Tour Should Be Chosen? (Party Boat, Calm Gulet or Private Boat?)</h1>
<p>If you say "I have only one day in Bodrum, let me swim most unforgettably", Orak Island is usually written at the top of the list. The reason is simple: Water colour turns from dark blue to neon turquoise at some moments; light colour ground at the bottom makes the sea look "like pool".</p>
<p>But Orak Island has a critical detail: Not accessible by land. The way to reach there is by boat. And boat tour choice in Bodrum determines the whole mood of the holiday:
Do you want a quiet blue voyage, or music and fun in the middle of the sea?</p>
<p>The guide below is prepared to clarify the question "which boat is for whom".</p>
<div class="my-8">
    <img src="/images/blog/bodrum_orak_island_cover.png" alt="Bodrum Orak Island Turquoise Waters" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">Boat Selection 101: "Daily tour" or "private boat"?</h3>
    <p class="mb-2">You see three main options in Orak Island tours from Bodrum:</p>
    <ul class="space-y-2 text-sm">
        <li>🏴‍☠️ <strong>Party / "Pirate" boat:</strong> High energy, music, foam party.</li>
        <li>⛵ <strong>Classic gulet:</strong> Balanced, calm, blue cruise with meal.</li>
        <li>🛥️ <strong>Private boat rental:</strong> Privacy, route control, special for you.</li>
    </ul>
    <p class="mt-4 text-xs text-gray-600">Many tour programs are not limited to Orak Island and give swimming breaks at different bays on the route. (Example stops may vary from tour to tour.)</p>
</div>
<h3>1) Party and "Pirate" Boats: For those wanting "Sea + Music + Show"</h3>
<p>You can distinguish these easiest from the pier: large, showy, crowded, sometimes themed (slide/figure etc.).</p>
<div class="my-6">
    <img src="/images/blog/bodrum_pirate_boat.png" alt="Bodrum Pirate Boat" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="grid md:grid-cols-2 gap-6 my-4">
    <div class="bg-green-50 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">Who is this tour good for?</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Young groups of friends</li>
            <li>Those saying "I can't sit and calm down, let the day flow"</li>
            <li>Those loving music, announcements, activities</li>
        </ul>
    </div>
    <div class="bg-red-50 p-4 rounded">
        <h4 class="font-bold text-red-800 mb-2">Who struggles?</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Those seeking silence</li>
            <li>Families with baby/small child and sensitive "sleep time"</li>
            <li>Those saying "I will read book"</li>
        </ul>
    </div>
</div>
<p class="text-sm italic text-gray-600">Mini tip: One question solves everything when booking: "How is the music level on the boat? All day or at certain hours?"</p>
<hr class="my-8" />
<h3>2) Classic Gulet Tours: Most "correct balance" (calm + pleasure)</h3>
<p>Bodrum's gulet culture is one of the most compatible options for Orak Island. It usually gives a more "blue cruise" feeling: music lower, tempo softer, crowd relatively more controlled.</p>
<div class="my-6">
    <img src="/images/blog/bodrum_classic_gulet.png" alt="Bodrum Classic Gulet" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="bg-gray-50 p-4 rounded mt-4">
    <h4 class="font-bold text-gray-800 mb-2">Who is this tour good for?</h4>
    <ul class="list-disc pl-5 text-sm space-y-1">
        <li>Couples</li>
        <li>Families</li>
        <li>Everyone saying "let me both swim and dive into the view"</li>
    </ul>
</div>
<p class="mt-4"><strong>What to expect?</strong><br>A long swimming break at Orak Island and other swimming stops besides Orak in most tours (according to tour plan).</p>
<div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-4">
    <strong>Mini tip:</strong> Ask "What is the average passenger capacity?". Usually the lower the number, the more comfortable the day passes.
</div>
<hr class="my-8" />
<h3>3) Private Boat Rental: "My day, my rules"</h3>
<p>If budget is suitable, this is the option taking Orak Island experience to next level. You close the boat (motor yacht or small gulet) only for your own group.</p>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>Route and stop control:</strong> You can say "It got crowded here, let's move to another bay".</li>
    <li><strong>Time control:</strong> Leave early, return late; completely your flow.</li>
    <li><strong>Comfort:</strong> No crowd, no noise, privacy exists.</li>
</ul>
<p class="mt-4 text-sm"><strong>When does it make sense?</strong><br>If you are a group of 6–10 people, cost per person might not be "as soaring as expected". Also best option if you say "let even one day be perfect" for honeymoon or special day celebrations.</p>
<hr class="my-8" />
<h3>How is the sea at Orak Island? (Critical fact: Your feet may not touch ground)</h3>
<p>Orak Island's "Maldives" analogy is usually made for water colour and clarity not beach. In a significant part of tours, boat anchors and swimming break is from boat; there is not always plan to go ashore.</p>
<div class="space-y-4 mt-4">
    <div class="bg-teal-50 p-4 rounded-lg">
        <h4 class="font-bold text-teal-800">Depth Issue</h4>
        <p class="text-sm">Since underwater is very clearly visible, depth might be thought "less" than it is. This depth feeling can create uneasiness in non-swimmers.</p>
        <p class="text-xs mt-2 font-bold">Solution: There is usually life jacket/sea noodle on boat. Ask from start. Relaxes.</p>
    </div>
</div>
<hr class="my-8" />
<h3>Snorkel / sea goggles: "List of regrets if you don't take"</h3>
<p>Since water clarity is "event" at Orak Island, sea goggles (and snorkel if any) makes the day completely different.</p>
<div class="my-6">
    <img src="/images/blog/bodrum_snorkel_underwater.png" alt="Orak Island Underwater" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="bg-gray-100 p-4 rounded-lg">
    <h4 class="font-bold text-gray-800 mb-2">Must-haves in bag</h4>
    <ul class="checkbox-list space-y-2 text-sm">
        <li class="flex items-center"><span class="mr-2">🤿</span> Sea goggles / snorkel</li>
        <li class="flex items-center"><span class="mr-2">☀️</span> High protection sunscreen (reflection strong on water)</li>
        <li class="flex items-center"><span class="mr-2">🧢</span> Hat</li>
        <li class="flex items-center"><span class="mr-2">📱</span> Wet-dry bag (for phone)</li>
        <li class="flex items-center"><span class="mr-2">🩴</span> Slippers + light towel</li>
    </ul>
</div>
<hr class="my-8" />
<h3>How to take that famous turquoise photo?</h3>
<p>For the "bow of boat + turquoise water" frame you see on Instagram, best moment is usually this:</p>
<ol class="list-decimal pl-6 space-y-2">
    <li>As soon as boat anchors everyone jumps into sea.</li>
    <li>Wait 2 minutes. Boat front empties.</li>
    <li>Person taking photo should go up a bit if possible and shoot from slightly above (turquoise comes out clearer).</li>
</ol>
<hr class="my-8" />
<div class="bg-indigo-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-indigo-800">Quick Decision Guide: Which boat is for you?</h3>
    <ul class="space-y-2 text-sm">
        <li>🎉 <strong>"Fun, music, movement"</strong> → Party / pirate boat</li>
        <li>⛵ <strong>"Calmness but let there be social environment too"</strong> → Classic gulet</li>
        <li>🛥️ <strong>"I don't want crowd, control is mine"</strong> → Private boat</li>
    </ul>
</div>
<p>For more details on transportation in Bodrum, you can review our <a href="/rehber/bodrum-arabasiz-tatil-rehberi-ulasim-tuyolari" class="text-blue-600 hover:underline">Car-Free Holiday Guide in Bodrum</a> article, check <a href="/rehber/bodrum-ucretsiz-halk-plajlari-koylar-rehberi" class="text-blue-600 hover:underline">Bodrum Free Public Beaches</a> guide for free sea pleasure.</p>
<hr class="my-8" />
<h3>Frequently Asked Questions</h3>
<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Can you go to Orak Island by land?</h4>
        <p class="text-gray-700 mt-1">No. Access to Orak Island is practically provided by boat tours.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900 text-lg">What time do Orak Island boat tours usually depart?</h4>
        <p class="text-gray-700 mt-1">Many tours depart from Bodrum Port in late morning hours (mostly in 10:30–11:30 band); times vary according to boat.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Do you go ashore at Orak Island?</h4>
        <p class="text-gray-700 mt-1">In most tours swimming break is from boat; going ashore is not always part of plan.</p>
    </div>
</div>
<hr class="my-8" />
<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Final word</h3>
    <p class="text-blue-900">"Most correct boat" at Orak Island is not the most expensive one; it is the boat fitting your day mood. If you seek silence buy silence, if you seek fun choose fun. Orak Island's turquoise handles the rest anyway.</p>
</div>`
    },
    {
        slug: "bodrum-yerel-lezzetler-sebzeli-doner-bodrum-mantisi",
        title: {
            tr: "Bodrum’u Yerlisi Gibi Yemek: Meşhur Sebzeli Döner, Bodrum Mantısı ve Yerel Lezzetler",
            en: "Eating Bodrum Like a Local: Famous Vegetable Doner, Bodrum Manti and Local Delicacies"
        },
        meta_description: {
            tr: "Bodrum’da ne yenir? Sebzeli döner, çıtır Bodrum mantısı, çökertme kebabı, Ege otları, esnaf lokantaları ve Bitez dondurması için yerel rehber.",
            en: "What to eat in Bodrum? Local guide for vegetable doner, crispy Bodrum manti, Çökertme kebab, Aegean herbs, artisan restaurants and Bitez ice cream."
        },
        content_en: `<h1>Eating Bodrum Like a Local: Famous Vegetable Doner, Bodrum Manti and Local Delicacies</h1>
<p>Dinner in Bodrum is often referred to with "chic table by the sea". But what really makes Bodrum Bodrum are artisan flavours hiding in bazaar alleys at noon, showcases full of Aegean herbs and local rituals making you say "this is eaten like this here".</p>
<p>In short: You don't necessarily have to sit at a white tablecloth table to eat well in Bodrum. Sometimes the most unforgettable moment is; a vegetable doner eaten quickly in heat, followed by ice cold ayran, a crispy Bodrum manti in late afternoon and a light olive oil plate towards sunset.</p>
<p>In this guide, I explain signature flavours eaten "like a local" in Bodrum, where to look for them (with neighbourhood/region logic), what time to go and how to order.</p>
<div class="my-8">
    <img src="/images/blog/bodrum_sebzeli_doner.png" alt="Local flavour route in Bodrum: vegetable doner, crispy manti and Aegean herbs" class="w-full h-auto rounded-lg shadow-md" />
</div>
<h3>1) Bodrum's Signature: Vegetable Doner</h3>
<p>There is doner everywhere in Turkey; but Bodrum vegetable doner is a separate character. Difference is: Vegetables placed layer by layer between meat (especially potato–carrot–peas and seasonal additions) give aroma together with meat while cooking. Result is not "oily heavy"; but a light yet full taste.</p>
<div class="grid md:grid-cols-2 gap-6 my-4">
    <div class="bg-orange-50 p-4 rounded">
        <h4 class="font-bold text-orange-800 mb-2">When is it eaten?</h4>
        <p class="text-sm">Golden rule of this flavour: Plays for noon, doesn't stay for evening. Vegetable doner in Bodrum Centre Bazaar and main axes runs out in the afternoon in most places. If you say "We eat in evening", you usually get "out of stock" answer.</p>
    </div>
    <div class="bg-gray-50 p-4 rounded">
        <h4 class="font-bold text-gray-800 mb-2">How to order?</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Ask for "in pita/lavash" options (some places make it very good with fresh pita).</li>
            <li>Determiner side with it: ayran.</li>
            <li>If trying for first time ask for "less sauce–plenty vegetables balance".</li>
        </ul>
    </div>
</div>
<p class="text-sm italic mt-2">Where to look? Bodrum Centre (Bazaar, around Atatürk Street) is most practical region for vegetable doner. Places where you see "noon queue" while walking are usually correct trace.</p>
<hr class="my-8" />
<h3>2) Forget Kayseri Manti: Crispy Bodrum Manti</h3>
<p>Bodrum manti breaks "boiled tiny doughs" expectation. Because manti in Bodrum is famous in its fried form in most places: crispy outside, full inside; topped with garlic yogurt and tomato sauce. When done right, crispness feeling is preserved even if yogurt comes.</p>
<div class="my-6">
    <img src="/images/blog/bodrum_manti.png" alt="Crispy Bodrum Manti" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="bg-red-50 p-4 rounded mb-4">
    <h4 class="font-bold text-red-800 mb-2">Which version is better?</h4>
    <p class="text-sm mb-2"><strong>Original experience:</strong> Fully fried (crispy)</p>
    <p class="text-sm"><strong>For those saying "Oil comes heavy":</strong> Mixed (half boil–half fry)</p>
    <p class="text-sm italic mt-2">But crispy version is must to say "I ate Bodrum manti".</p>
</div>
<p><strong>Where to look?</strong> You find manti focused businesses in Bodrum Centre and some popular regions. Critical thing here is not name; fast serving (fresh service) and yogurt/sauce balance. Try in late afternoon if possible so it doesn't come "pre-fried" at very crowded hours.</p>
<hr class="my-8" />
<h3>3) A Plate Like Bodrum Folk Song: Çökertme Kebab</h3>
<p>Çökertme kebab is not just a meal in Bodrum, local pride. Three things will be correct on plate:</p>
<div class="my-6">
    <img src="/images/blog/bodrum_cokertme.png" alt="Bodrum Çökertme Kebab" class="w-full h-auto rounded-lg shadow-md" />
</div>
<ol class="list-decimal pl-6 space-y-2 font-semibold text-gray-800">
    <li>Matchstick thin potatoes (if thick "çökertme" taste drops)</li>
    <li>Strained yogurt will be balanced (not dominant, supportive)</li>
    <li>Meat and sauce will be compatible with plate, not like "poured on top"</li>
</ol>
<p class="mt-4"><strong>Where does it come out better?</strong> You find Çökertme everywhere but best performance usually comes out in restaurants maintaining artisan line in Bodrum Centre or places with regular regulars instead of "touristic menu" on Yalıkavak side. If potato thickens in touristic menu, magic of Çökertme goes.</p>
<hr class="my-8" />
<h3>4) "Real Noon" Route: Artisan Restaurants and Aegean Herbs</h3>
<p>Those living in Bodrum don't sit at fisherman everyday. Reality of noon: artisan restaurant showcase. Here you see Aegean side of Bodrum: olive oil dishes, herbs, light plates.</p>
<div class="bg-green-50 p-6 rounded-lg my-4">
    <h4 class="font-bold text-green-800 mb-2">Pick whatever you see in showcase logic:</h4>
    <ul class="list-disc pl-5 text-sm text-green-700 space-y-1">
        <li>Stuffed zucchini flowers (especially with olive oil)</li>
        <li>Aegean herbs like samphire / radish greens / mustard greens (varies by season)</li>
        <li>Olive oil dishes: light, fresh, saves hot day</li>
    </ul>
</div>
<p><strong>GEO tip: Where to look?</strong> Around Konacık (close to centre, line where local life is intense) is strong in artisan restaurant logic. As touristic crowd decreases on Bitez–Konacık axis, "real noon" is lived more comfortably.</p>
<hr class="my-8" />
<h3>5) Sweet Finale: Bitez Ice Cream and Bodrum Tangerine</h3>
<p>Bodrum's "signature aroma" is tangerine. That's why two things stand out on dessert side:</p>
<div class="my-6">
    <img src="/images/blog/bodrum_bitez_dondurma.png" alt="Bitez Ice Cream" class="w-full h-auto rounded-lg shadow-md" />
</div>
<h4 class="font-bold text-lg text-yellow-600 mt-4">Bitez ice cream</h4>
<p>Ice cream on Bitez side is an evening walk ritual. Best scenario: Buy ice cream → walk towards beach → finish in coolness after sunset. Classics like tangerine, black mulberry, gum mastic are usually safe choices.</p>
<h4 class="font-bold text-lg text-yellow-600 mt-4">Tangerine soda / tangerine products</h4>
<p>Instead of reaching for global brand on market shelf, look for local products with "Bodrum tangerine" emphasis. One of the most sympathetic gifts to take on return: tangerine themed drinks and jar products.</p>
<hr class="my-8" />
<h3>1 Day "Like a Local" Bodrum Flavour Route</h3>
<div class="space-y-4">
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">11:30</div>
        <div><strong>Bodrum Centre Bazaar:</strong> Vegetable doner + ayran (don't be late, finishes).</div>
    </div>
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">16:30</div>
        <div><strong>Manti break:</strong> Crispy Bodrum manti (before crowd explodes).</div>
    </div>
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">19:30</div>
        <div><strong>Evening main dish:</strong> Çökertme kebab (potato thinness important).</div>
    </div>
    <div class="flex items-start">
        <div class="bg-pink-100 text-pink-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">22:00</div>
        <div><strong>Sweet walk:</strong> Bitez ice cream + beach walk.</div>
    </div>
</div>
<hr class="my-8" />
<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Result: Bodrum's Taste Starts on Street</h3>
    <p class="text-blue-900">Eating Bodrum "like a local"; doesn't mean rejecting expensive tables, means catching right moment at right place. Sometimes most luxurious experience is hidden in simplest plate: noon vegetable doner, late afternoon crispy manti, çökertme towards night… And tangerine smell at finale.</p>
</div>
<p class="text-sm text-gray-500 mt-8">To continue your Bodrum discovery check <a href="/rehber/bodrum-arabasiz-tatil-rehberi-ulasim-tuyolari" class="text-blue-600 hover:underline">Car-Free Holiday Guide in Bodrum</a>, for accommodation options <a href="/rehber/bodrum-nerede-kalinir-yalikavak-turkbuku-merkez-rehberi" class="text-blue-600 hover:underline">Where to Stay in Bodrum?</a> or for free sea pleasure <a href="/rehber/bodrum-ucretsiz-halk-plajlari-koylar-rehberi" class="text-blue-600 hover:underline">Bodrum Public Beaches</a> articles.</p>`
    },
    {
        slug: "bodrum-sari-yaz-eylul-ekim-rehberi",
        title: {
            tr: "Bodrum’da “Sarı Yaz” Mevsimi: Eylül–Ekim’de Neden Gitmeli? (Hava, Fiyat ve Kalabalık Rehberi)",
            en: "\"Yellow Summer\" Season in Bodrum: Why Go in September-October? (Weather, Price and Crowd Guide)"
        },
        meta_description: {
            tr: "Bodrum’da Sarı Yaz (Eylül–Ekim) rehberi: deniz suyu sıcaklığı, hava ve yağış dengesi, düşen fiyatlar, azalan kalabalık, Leleg Yolu ve bağ bozumu rotaları.",
            en: "Yellow Summer (September-October) guide in Bodrum: sea water temperature, weather and precipitation balance, falling prices, decreasing crowd, Leleg Way and vintage routes."
        },
        content_en: `<h1>"Yellow Summer" Season in Bodrum: Why Go in September-October? (Weather, Price and Crowd Guide)</h1>
<p>If you knew Bodrum with July–August crowds, see the "Yellow Summer" period once. Peninsula breathes as schools open; daylight softens, a cool wind comes in evenings, service speeds up, roads open. In short: Bodrum comes out of "tourist mode" and enters a more pleasant rhythm.</p>
<p>In this guide I gathered advantages of coming to Bodrum in mid-September–end of October interval; weather/sea, price–crowd, gastro & nature activities and "tiny warnings you need to know" at once.</p>
<div class="my-8">
    <img src="/images/blog/bodrum_sari_yaz_cover.png" alt="Bodrum Yellow Summer September October" class="w-full h-auto rounded-lg shadow-md" />
</div>
<h2>1) Weather Comfort: Visiting Bodrum Without Sweating</h2>
<p>Most tiring thing in Bodrum Peninsula in summer is not just temperature; it is high tempo + traffic + crowd combination. In Yellow Summer tempo drops, weather becomes more "human".</p>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>September:</strong> Usually still gives summer feeling: day hot, evening fresher.</li>
    <li><strong>October:</strong> Makes it easier to establish "Day sea, evening walk/dinner" balance; nights noticeably cool down.</li>
</ul>
<div class="bg-blue-50 p-4 rounded mt-4">
    <p class="text-sm"><strong>Mini fact:</strong> Probability of precipitation tends to increase from second half of September. This is not bad news; just means "Plan B" in Yellow Summer plan.</p>
</div>
<hr class="my-8" />
<h2>2) Sea Water Legend: Real Warm Period is Late Summer</h2>
<p>Sentence "Sea is cold in September" is usually not true for Bodrum. Sea gets warm throughout summer and doesn't let that heat go easily.</p>
<div class="my-6">
    <img src="/images/blog/bodrum_eylul_deniz.png" alt="Bodrum September Sea Pleasure" class="w-full h-auto rounded-lg shadow-md" />
</div>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>September:</strong> Sea water average in Bodrum generally hovers around 25°C.</li>
    <li><strong>October:</strong> Even if average drops to 23°C band, swimmable days are still many (especially in hours when wind is calmer).</li>
</ul>
<p class="mt-4 text-sm"><strong>Practical Tactic:</strong> Best time for "sea pleasure" in Yellow Summer is usually between 11:00–16:30. Even if early morning hours are windy water recovers towards noon.</p>
<hr class="my-8" />
<h2>3) Prices and Service: "Same Bodrum, Less Scorching"</h2>
<p>Biggest event of Yellow Summer is this: Bodrum is same Bodrum, but since "peak season pressure" decreased:</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Chance to catch more logical options in accommodation increases (especially weekdays).</li>
    <li>"Fast service / fast table turning" stress decreases in restaurants; a more careful experience emerges.</li>
    <li>Beach order relaxes: sunbed snatching race slows down, coast becomes more spacious.</li>
</ul>
<hr class="my-8" />
<h2>4) Traffic and Crowd: Time When You Can Really Tour Bodrum</h2>
<p>Saying "Let's go down in late afternoon" from Yalıkavak to Bodrum Centre in July is sometimes writing half of day to road. In Yellow Summer:</p>
<div class="my-6">
    <img src="/images/blog/bodrum_gumusluk_gunbatimi.png" alt="Calm Bodrum Gümüşlük Sunset" class="w-full h-auto rounded-lg shadow-md" />
</div>
<ul class="list-disc pl-6 space-y-2">
    <li>Road becomes more fluent in axes like Yalıkavak – Bodrum Centre, Gümüşlük – Turgutreis.</li>
    <li>You see "sea" instead of "human sea" in popular bays.</li>
    <li>A more enjoyable tempo is caught especially at sunset hours (Gümüşlük, Yalıkavak coast, Bodrum Marina walks).</li>
</ul>
<hr class="my-8" />
<h2>5) Yellow Summer Activity Map: What to Do After Sea?</h2>
<h3 class="font-bold text-gray-800 mt-4">Vintage and tables: Mumcular – Yalıçiftlik line</h3>
<p>September is period when nature revives in Bodrum's countryside (like Mumcular and surroundings); vintage/harvest themed events stand out. A "rural route" + dinner combination close to sunset suits Yellow Summer very well.</p>
<div class="my-6">
    <img src="/images/blog/bodrum_bag_bozumu.png" alt="Bodrum Vintage and Nature" class="w-full h-auto rounded-lg shadow-md" />
</div>
<h3 class="font-bold text-gray-800 mt-4">Olive time: End of October village routes</h3>
<p>Olive theme becomes distinct towards end of October. You catch a more local rhythm in "inner peninsula" villages of Bodrum.</p>
<h3 class="font-bold text-gray-800 mt-4">Nature walk: Leleg / Pedasa line</h3>
<p>Trails not walkable in heat come to "perfect consistency" in Yellow Summer. Routes combining archaeology and nature in peninsula with focus on Pedasa and Leleg civilization stand out.</p>
<hr class="my-8" />
<div class="bg-yellow-50 p-6 rounded-lg my-8 border border-yellow-200">
    <h3 class="text-xl font-bold mb-4 text-yellow-800">6) 3 Warnings You Need to Know Coming to Yellow Summer</h3>
    <ul class="space-y-3 text-sm">
        <li>🚧 <strong>Seasonal venue closings:</strong> Some beach club and summer night concepts might slow down like end of September–mid October.</li>
        <li>🧥 <strong>Evening coolness:</strong> Wind might chill in evenings especially on Yalıkavak side. A thin cardigan/sweatshirt is must in suitcase.</li>
        <li>☔ <strong>Precipitation plan:</strong> Precipitation probability increases from second half of September; put Plan B like 1 day "museum/bazaar/long lunch".</li>
    </ul>
</div>
<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Result: Most "Livable" State of Bodrum</h3>
    <p class="text-blue-900">Yellow Summer is "life" period of Bodrum not "show". Better service with less crowd, more discovery with more comfortable roads, better memories with softer light… If you have chance to choose date, smartest move of calendar for Bodrum is usually September–October.</p>
</div>
<hr class="my-8" />
<h3>Frequently Asked Questions</h3>
<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">When does Yellow Summer start in Bodrum?</h4>
        <p class="text-gray-700 mt-1">Usually with period schools open (like mid-September) crowd drops in Bodrum; "Yellow Summer" air lasts until end of October.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Can you swim in Bodrum in September–October?</h4>
        <p class="text-gray-700 mt-1">Yes. Sea water is usually around ~25°C in Bodrum in September; even if average drops in October it is still in swimmable band most days.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Does it rain much in October?</h4>
        <p class="text-gray-700 mt-1">Precipitation probability is in tendency to rise from second half of September; it would be smart to make "Plan B" in October.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Which regions are more enjoyable in Yellow Summer?</h4>
        <p class="text-gray-700 mt-1">Gümüşlük for sunset and calmness; Yalıkavak for wind/freshness; Bodrum Centre–Marina line works well for more "classic Bodrum" walks.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Are beach clubs open in Yellow Summer?</h4>
        <p class="text-gray-700 mt-1">Some might close season early; especially changes based on venue in end of September–mid October. Best to confirm via Instagram/phone before going.</p>
    </div>
</div>`
    }
];

async function updateArticles() {
    console.log('Starting batch update for Bodrum articles (Batch 2)...');

    for (const article of articlesToUpdate) {
        try {
            console.log('Updating article: ' + article.slug);

            // 1. Check if article exists
            const { data: existing, error: fetchError } = await supabase
                .from('articles')
                .select('*')
                .eq('slug', article.slug)
                .single();

            if (fetchError || !existing) {
                console.error('Article not found: ' + article.slug);
                continue;
            }

            // 2. Prepare localized fields
            const localizedTitle = JSON.stringify(article.title);
            const localizedDesc = JSON.stringify(article.meta_description);

            let contentTr = existing.content;
            try {
                if (contentTr.trim().startsWith('{')) {
                    const parsed = JSON.parse(contentTr);
                    if (parsed.tr) contentTr = parsed.tr;
                }
            } catch (e) {
                // Not JSON, assume raw HTML string
            }

            const localizedContent = JSON.stringify({
                tr: contentTr,
                en: article.content_en
            });

            // 3. Update the article
            const { error: updateError } = await supabase
                .from('articles')
                .update({
                    title: localizedTitle,
                    meta_description: localizedDesc,
                    content: localizedContent,
                    updated_at: new Date().toISOString()
                })
                .eq('slug', article.slug);

            if (updateError) {
                console.error('Error updating ' + article.slug + ': ', updateError);
            } else {
                console.log('Successfully updated ' + article.slug);
            }

        } catch (err) {
            console.error('Unexpected error for ' + article.slug + ': ', err);
        }
    }

    console.log('Batch update complete.');
}

updateArticles();
