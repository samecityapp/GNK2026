
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
        slug: 'bodrum-arabasiz-tatil-rehberi-ulasim-tuyolari',
        title: {
            tr: 'Bodrum’da Arabasız Tatil Rehberi: Dolmuş Hatları, Taksi Gerçeği ve Ulaşım Tüyoları (2025)',
            en: 'Car-Free Holiday Guide in Bodrum: Minibus Lines, Taxi Reality and Transportation Tips (2025)'
        },
        meta_description: {
            tr: 'Bodrum’da arabasız tatil rehberi: BJV havalimanından ulaşım, dolmuş güzergahları, taksi kullanımı ve pratik ulaşım ipuçları.',
            en: 'Bodrum car-free holiday guide: Transportation from BJV airport, minibus routes, taxi usage and practical transportation tips.'
        },
        content_en: `<h1>Car-Free Holiday Guide in Bodrum: Minibus Lines, Taxi Reality and Transportation Tips (2025)</h1>

<p>For those visiting Bodrum for the first time, the "real culture shock" is often not experienced at sea, but during the first transportation attempt. Because Bodrum is a scattered geography that looks small in photos but actually works with a peninsula logic: the distance from one bay to another, which looks "close", can easily lengthen in summer traffic.</p>

<p>So, is Bodrum possible without a car? The clear answer: Yes. If you know the logic of correct transfers, you can travel most of the peninsula in a planned way with the minibus/bus network. Moreover, when you solve critical points such as entry from the airport, transfer in the centre, and return at night, your rate of being "forced" to take a taxi drops significantly.</p>

<p>The guide below does exactly this: It makes it easier to move around Bodrum without a car.</p>

<div class="my-8">
    <img src="/images/blog/bodrum_transport_cover.png" alt="Transportation and Minibus in Bodrum" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">30-Second Summary</h3>
    <ul class="space-y-2 text-sm">
        <li>🚍 <strong>Central Base:</strong> Most lines meet at "Merkez Garaj" (Central Garage), this is the transfer point.</li>
        <li>✈️ <strong>Airport:</strong> Go down to the centre with MUTTAŞ/HAVAŞ, then transfer to your accommodation by minibus.</li>
        <li>💳 <strong>Payment:</strong> MuglaKart or contactless credit card (commission may apply) is used.</li>
        <li>⚠️ <strong>Critical Question:</strong> When you get on the minibus/bus in the evening, definitely ask "What time is the last return?".</li>
    </ul>
</div>

<h3>1) Map of transportation in Bodrum: "Torba Bus Station" + "Central Garage" logic</h3>
<p>Two points in Bodrum determine everything:</p>

<h4 class="font-bold text-lg mt-4 text-gray-800">Bodrum Intercity Bus Terminal (Torba junction side)</h4>
<p>This is the main bus terminal where intercity buses drop off. After getting off here, most people are left wondering "Where is Bodrum center?"; because the bus terminal is not right in the middle of the center.</p>

<h4 class="font-bold text-lg mt-4 text-gray-800">Bodrum Central Garage (Old garage / main transfer near the bazaar)</h4>
<p>The main transfer logic of the inner-city minibus line works according to this place. Many lines of the peninsula either end here or pass through here. (You can see that MUTTAŞ's Bodrum inner-city line lists pass with the stop name "Bodrum Merkez Garaj".)</p>

<div class="my-6">
    <img src="/images/blog/bodrum_bus_station.png" alt="Bodrum Bus Station and Minibuses" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-4">
    <strong>Golden rule:</strong> It can sometimes be difficult to find a "direct" vehicle between two towns on the peninsula. In most scenarios, transfer via Central Garage is the most practical solution.
</div>

<hr class="my-8" />

<h3>2) Most logical entry to Bodrum from the Airport (BJV): MUTTAŞ / HAVAŞ + continue from the garage</h3>
<p>The main way to go to Bodrum by public transport from Milas–Bodrum Airport (BJV) exit is to go down to Bodrum with airport shuttles and continue from there.</p>

<p>Among MUTTAŞ's Bodrum lines, "Bodrum City Center – Milas/Bodrum Airport (BJV)" line is included. <br>
<a href="https://ulasim.muttas.com.tr" target="_blank" class="text-blue-600 hover:underline">ulasim.muttas.com.tr</a></p>

<p>These lines are usually arranged according to flight times; yet the safest way is to check the MUTTAŞ announcement/line page for the most up-to-date time. (It varies during the season.)</p>

<div class="bg-gray-50 p-4 rounded mt-4">
    <p class="font-semibold text-sm mb-2">Practical scenario (smartest plan without a car):</p>
    <ol class="list-decimal pl-5 text-sm space-y-1">
        <li>BJV → Go down to Bodrum by shuttle</li>
        <li>According to the region you will stay:
            <ul class="list-disc pl-5 mt-1 text-xs text-gray-600">
                <li>If you are in the centre, walk/mini transfer</li>
                <li>If you are going to places like Yalıkavak / Turgutreis / Gümbet / Bitez / Ortakent, continue by minibus from the garage</li>
            </ul>
        </li>
    </ol>
</div>
<p class="text-xs text-gray-500 mt-2">Note: Since stops like "Bodrum City Center" and "Bodrum Bus Station" are mentioned together in many line lists in Bodrum, the region is the determinant in the question "where should I get off?".</p>

<hr class="my-8" />

<h3>3) Minibus or municipal bus? Both are managed by the same logic: "line + transfer + time"</h3>
<p>There are two worlds in daily practice in Bodrum:</p>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>Dolmuş (Minibus) culture:</strong> The most common form of transportation between bays.</li>
    <li><strong>Municipal/coordinated lines:</strong> MUTTAŞ and similar lines.</li>
</ul>

<div class="my-6">
    <img src="/images/blog/bodrum_dolmus.png" alt="Bodrum Minibus" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>What matters for you is not the name; but these three:</p>
<ol class="list-decimal pl-6 space-y-2">
    <li>Where does the line depart from? (Most routes connect to the Central Garage.)</li>
    <li>What time does it become frequent during the day, and infrequent in the evening? (Summer/winter difference is huge.)</li>
    <li>Will a transfer be required? (Most of the time, yes.)</li>
</ol>

<hr class="my-8" />

<h3>4) Payment in Bodrum: MuglaKart / KentKart / contactless (but there is a small detail)</h3>
<p>MuglaKart/KentKart infrastructure is used in public transport throughout Muğla. Card printing/filling points and usage information are shared on MUTTAŞ/KentKart pages.</p>

<p><strong>Good news:</strong> There is also the possibility to pay with contactless bank/credit card.</p>

<div class="bg-red-50 p-4 rounded border-l-4 border-red-400 my-4">
    <strong>Small but important detail:</strong> In Muğla Metropolitan Municipality announcements, it is stated that there may be a "service fee" for boarding with a contactless credit card. So if "I paid with card, it charged a little more", this might be the reason.
</div>

<p><strong>Most trouble-free method:</strong> If you are staying in Bodrum for a few days, especially in the high season, getting a card (MuglaKart/KentKart) relieves most people.</p>

<hr class="my-8" />

<h3>5) "Where do I get on and get off?": Logic of 6 routes that work best in car-free Bodrum</h3>
<p>The following examples solve the question "I am car-free in Bodrum, how should I think?":</p>

<div class="space-y-4 mt-4">
    <div class="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50 rounded-r">
        <h4 class="font-bold text-teal-800">A) Center ↔ Gümbet / Bitez / Ortakent-Yahşi</h4>
        <p class="text-sm">This trio is the most comfortable for car-free holidaymakers. Because the centre connection is strong.</p>
    </div>
    <div class="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded-r">
        <h4 class="font-bold text-indigo-800">B) Center ↔ Yalıkavak</h4>
        <p class="text-sm">Yalıkavak line gets crowded in peak season; asking the driver for the return time when getting on prevents panic on the way back.</p>
    </div>
    <div class="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
        <h4 class="font-bold text-orange-800">C) Center ↔ Turgutreis</h4>
        <p class="text-sm">Turgutreis line is also one of the main lines; but "night return" times may end early off-season.</p>
    </div>
    
     <div class="border-l-4 border-gray-500 pl-4 py-2 bg-gray-50 rounded-r">
        <h4 class="font-bold text-gray-800">D) Center ↔ Göltürkbükü / Gündoğan / Torba</h4>
        <p class="text-sm">For these regions too, most plans work with a transfer in the centre. Thinking "I'll solve it via the garage" instead of "I'll find direct" pays off.</p>
    </div>
</div>

<h4 class="font-bold text-lg mt-6 text-gray-800">E) "Cross" transitions like Yalıkavak ↔ Turgutreis</h4>
<p>This is the scenario that burns the most taxi money in Bodrum. In cross transition, mostly:</p>
<ul class="list-disc pl-6 space-y-1 text-sm">
    <li>either you go down to Central Garage and go up again</li>
    <li>or if you are lucky, seasonal ring/connection lines coincide</li>
</ul>
<p class="text-sm italic mt-1">That's why planning the cross route during the day is an advantage.</p>

<hr class="my-8" />

<h3>6) Taxi reality: Taxi in Bodrum is not a "last resort" but an "unplanned cost"</h3>
<p>Taxi is sometimes inevitable in Bodrum: late night return, transfer with luggage, moments when you don't want to transfer under the heat or "one move" need with children/elderly.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_taxi_stand.png" alt="Bodrum Taxi Stand" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>But the thing that hurts the most in a taxi is this: distances that look close on the map turn into winding/busy roads on the peninsula.</p>

<div class="bg-yellow-50 p-4 rounded mt-4">
    <p class="font-semibold text-sm mb-2 text-yellow-900">Two small habits save lives when taking a taxi:</p>
    <ul class="list-disc pl-5 text-sm text-yellow-800">
        <li>Ask "Approximately how much will it cost to this point?" before setting off</li>
        <li>If you have a risk of finding a taxi on return, especially in busy areas, note down the stand / get the number</li>
    </ul>
</div>
<p class="text-xs text-gray-500 mt-2">Since taxi fares (opening/km) can be updated periodically with UKOME etc. decisions, it would not be correct to write figures here; what is "correct today" may deviate 1 month later. The safest method is to ask the stand and get a short estimate.</p>

<hr class="my-8" />

<h3>7) Night transportation: Bodrum has "nightlife, but does not always have night transportation"</h3>
<p>When planning for the evening in Bodrum, think about transportation from the start.</p>
<ul class="list-disc pl-6 space-y-2">
    <li>On short lines close to the centre, trips may extend to later hours.</li>
    <li>On return to further regions like Yalıkavak / Turgutreis / Gümüşlük, last trips may end earlier.</li>
</ul>
<p><strong>The right move (very simple):</strong> One question to the driver on the minibus/bus you get on: <strong>"What time is the last return in the evening?"</strong> This question halves the need to be "forced to take a taxi".</p>

<hr class="my-8" />

<h3>8) "Should I rent a car?" part: Freedom comes with a car, but so does parking stress</h3>
<p>Renting a car can turn into two things in Bodrum: comfort in chasing bays during the day, but parking and traffic stress in the centre/high season in the evening.</p>

<div class="bg-green-50 p-6 rounded-lg my-6">
    <h4 class="font-bold text-green-800 mb-2">The "best strategy" in a car-free holiday is this:</h4>
    <p class="text-green-700">Wide movement with public transport during the day + one-time taxi at night (when necessary). Thus, the budget stays controlled.</p>
</div>

<hr class="my-8" />

<h3>Frequently Asked Questions</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Is it possible to visit Bodrum without a car?</h4>
        <p class="text-gray-700 mt-1">Yes. If you know the Central Garage transfer and ask for line times, you can go to most regions by minibus/bus.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">What is the cheapest way to get to Bodrum centre from Milas-Bodrum Airport?</h4>
        <p class="text-gray-700 mt-1">Usually, going down to Bodrum by shuttle/bus lines (MUTTAŞ/HAVAŞ) and continuing by minibus from the bus terminal is the most budget-friendly method.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Are credit cards accepted in public transport in Bodrum?</h4>
        <p class="text-gray-700 mt-1">There is contactless card payment possibility in Muğla; however, it is stated that there may be details such as service fees.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Where to buy KentKart/MuglaKart in Bodrum?</h4>
        <p class="text-gray-700 mt-1">Card printing/filling points are shared on official lists; address information for points such as around Bodrum bus terminal is also included.</p>
    </div>
</div>

<hr class="my-8" />

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Final word: The secret of a car-free holiday in Bodrum is "route plan"</h3>
    <p class="text-blue-900">Car-free holiday in Bodrum is "difficult when left to chance", incredibly comfortable when planned. Set up the landing from the airport correctly, solve the Central Garage logic, ask the return time. The rest flows.</p>
</div>`
    },
    {
        slug: 'bodrum-ucretsiz-halk-plajlari-koylar-rehberi',
        title: {
            tr: 'Bodrum’da Giriş Ücreti Ödemeden Denize Girilecek En Temiz Halk Plajları ve Koylar',
            en: 'Cleanest Public Beaches and Bays to Swim in Bodrum Without Paying Entrance Fee'
        },
        meta_description: {
            tr: 'Bodrum’da giriş ücreti ödemeden denize girebileceğiniz en temiz halk plajlarını keşfedin: Merkez, Bitez, Yalıkavak, Ortakent ve Gümüşlük’te ücretsiz plajlar, tesis bilgileri ve pratik ipuçları.',
            en: 'Discover the cleanest public beaches in Bodrum where you can swim without paying an entrance fee: Free beaches, facility information and practical tips in Central, Bitez, Yalıkavak, Ortakent and Gümüşlük.'
        },
        content_en: `<h1>Cleanest Public Beaches and Bays to Swim in Bodrum Without Paying Entrance Fee</h1>

<p>When "expensive beach club" stories circulate in headlines about Bodrum, don't think it's "impossible to swim for free in Bodrum". In reality, the situation is the opposite: The municipal public beach network in Bodrum Peninsula is quite strong. Basic needs such as showers, toilets, changing cabins, lifeguards, and disabled access have been considered at many points.</p>

<p>The aim of this guide is clear:<br>To swim without paying an entrance fee and experience the "blue" side of Bodrum.<br><span class="text-sm text-gray-500">(Note: "Free entrance" does not mean sunbeds/umbrellas are free everywhere. Services can be obtained from the municipal facility at some public beaches; price/application may vary according to the season.)</span></p>

<div class="my-8">
    <img src="/images/blog/bodrum_beaches_cover.png" alt="Bodrum Public Beach General View" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">Quick Selection Guide</h3>
    <ul class="space-y-2 text-sm">
        <li>🚶 <strong>Walking to sea in the centre:</strong> Kumbahçe Blue Flag Public Beach, Paşa Tarlası Public Beach</li>
        <li>👶 <strong>Shallow-flat access bay with children:</strong> Bitez Public Beach</li>
        <li>💸 <strong>Free entrance breaking the "Yalıkavak is expensive" perception:</strong> Küdür Dodo Public Beach (Yalıkavak)</li>
        <li>🏖️ <strong>Long beach walk + wide area:</strong> Ortakent Public Beach / Ortakent Müskebi Public Beach</li>
        <li>🌿 <strong>Calmer, local vibe:</strong> Gümüşlük Public Beach / Gümüşlük Çayıraltı Public Beach</li>
    </ul>
</div>

<hr class="my-8" />

<h3>1) Bodrum Center: "Leave Hotel, Walk to Sea" Points</h3>
<p>In Bodrum, sometimes the biggest luxury is "not driving". If you are in the centre, you don't even need to make a plan to reach the beach.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Kumbahçe Blue Flag Public Beach</h4>
<p>One of the most practical options in the centre. It is listed on the municipal list with facility icons such as Blue Flag, shower, toilet, changing cabin, lifeguard and disabled platform.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Good for who?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Those who say "I'm staying in the centre, let me walk in"</li>
        <li>Those who love swimming early in the morning (when the water is calmest)</li>
    </ul>
    <p class="text-xs mt-2 text-gray-600">Mini tip: Central beaches get busy during the day. If you are looking for "clean and calm water", aim for the morning.</p>
</div>

<h4 class="font-bold text-lg mt-4 text-teal-700">Paşa Tarlası Public Beach (Paşatarlası)</h4>
<p>Again, it is on the municipal public beaches list and passed with similar facility opportunities.</p>
<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Good for who?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Those who want "easiest access" in the centre</li>
        <li>Those who will take a short sea break (especially before noon)</li>
    </ul>
</div>

<div class="my-6">
    <img src="/images/blog/bodrum_kumbahce_beach.png" alt="Kumbahçe Public Beach" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>2) Bitez: "Flat Access" Favourite of Families with Children</h3>
<p>Sea with children in Bodrum means: shallow water + easy entry + safe area on the shore. Bitez is a strong candidate in this regard.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Bitez Public Beach</h4>
<p>It is on the municipal list and indicated with basic facility icons.</p>

<div class="bg-orange-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm text-orange-900">Why family friendly?</p>
    <ul class="list-disc pl-5 text-sm text-orange-800">
        <li>Thanks to the bay structure, it usually gives a more "controlled" sea feeling</li>
        <li>Coastline is long: tolerates crowds better</li>
    </ul>
</div>
<p><strong>Bitez tactic:</strong> Go early in the morning and swim first, then drink your coffee on the walking band. If the wind increases in the afternoon, change the plan with children to "shore games + short swim".</p>

<div class="my-6">
    <img src="/images/blog/bodrum_bitez_shallow_beach.png" alt="Bitez Coast" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>3) Yalıkavak: Public Beach "Inside the Luxury Image"</h3>
<p>When Yalıkavak is mentioned, everyone thinks of high prices, but this does not mean "you have to burn money to swim".</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Küdür Dodo Public Beach (Yalıkavak)</h4>
<p>It is passed under Yalıkavak on the municipal list and facility opportunities are stated.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Good for who?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Those who say "I stayed in Yalıkavak but I don't want a beach club"</li>
        <li>Those looking for clean sea (regions receiving currents keep the water fresher most of the time)</li>
    </ul>
</div>
<p><strong>Realistic note:</strong> Yalıkavak can get windy. This sometimes means "wave", but also means "water renewing itself" feeling.</p>

<hr class="my-8" />

<h3>4) Ortakent – Müskebi: Long Coast, Wide Area, Comfortable Setup</h3>
<p>What those who say "I don't want to be squeezed on the beach" in Bodrum are looking for is usually this: long coast.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Ortakent Public Beach & Ortakent Müskebi Public Beach</h4>
<p>They pass separately on the municipal list and have facility icons.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Good for who?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Those looking for "space to breathe" even in crowds</li>
        <li>Those who want to combine beach walk + sea</li>
    </ul>
</div>
<p><strong>Ortakent tactic:</strong> If you have your own equipment (umbrella, camping chair), the wide coastline provides an advantage. You can also use the facilities offered by the municipality; but the most critical rule is the same: go early.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_ortakent_long_beach.png" alt="Ortakent Coast" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>5) Gümüşlük: Calmer, More Local, More "Slow-Paced"</h3>
<p>Public beaches in Gümüşlük are good for those who say "let me hang out a bit more calmly".</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Gümüşlük Public Beach & Gümüşlük Çayıraltı Public Beach</h4>
<p>Located on the municipal list.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Good for who?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Those who don't like crowded beach energy</li>
        <li>Those who want to do afternoon sea + sunset walk</li>
    </ul>
</div>

<div class="my-6">
    <img src="/images/blog/bodrum_gumusluk_beach.png" alt="Gümüşlük Coast" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>6) Warning and Strategy for "Facility-Free Bay" Lovers</h3>
<p>Internet is full of "hidden bays" in Bodrum. Yes, there are bays without facilities; but real life demands this:</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Water, hat, sunscreen, garbage bag</li>
    <li>Phone may not have reception → download the map beforehand</li>
    <li>Vehicle parking and descent path can be risky → not with slippers, but with proper sole shoes</li>
</ul>
<p class="mt-2 text-gray-700 italic">Bays without facilities are great if you prepare correctly; if you go unprepared, the "beautiful day" remains incomplete.</p>

<hr class="my-8" />

<div class="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
    <h3 class="text-xl font-bold mb-4 text-yellow-800">Golden Rules at Public Beaches</h3>
    <div class="space-y-4">
        <div>
            <h4 class="font-bold text-yellow-900">Go early rule</h4>
            <p class="text-sm">"Good places" in Bodrum fill up early. Especially in summer, public beaches with free entrance and facilities fill up even faster.</p>
        </div>
        <div>
            <h4 class="font-bold text-yellow-900">Day/Season detail</h4>
            <p class="text-sm">2025 season dates for municipal public beaches are published as 1 June 2025 – 30 September 2025. (Dates may be updated; it makes sense to check before travel.)</p>
        </div>
        <div>
            <h4 class="font-bold text-yellow-900">Cleanliness rule</h4>
            <p class="text-sm">Especially at points without facilities: The continuation of "Bodrum blue" is possible by you taking your garbage back.</p>
        </div>
    </div>
</div>

<hr class="my-8" />

<h3>Frequently Asked Questions</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Are public beaches in Bodrum really free?</h4>
        <p class="text-gray-700 mt-1">Usually entrance is free. However, usage conditions of services such as sunbeds/umbrellas may vary. The best is to see the municipal facility application when you arrive at the beach.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Are there showers and toilets?</h4>
        <p class="text-gray-700 mt-1">Facilities such as shower/toilet/changing cabin are marked on many municipal public beach pages.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Is it logical to swim in the centre?</h4>
        <p class="text-gray-700 mt-1">Logical — especially if you say "let me walk, take a sea break". If you want more "postcard clarity", you shift to different bays on the peninsula.</p>
    </div>
</div>

<hr class="my-8" />

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Result: The Sea Belongs to Everyone in Bodrum</h3>
    <p class="text-blue-900">It is unfair to read Bodrum only through "entrance fee". If you choose municipal public beaches correctly, you both don't pay entrance fee and swim meeting your basic needs. The issue in Bodrum is not "burning money"; but choosing the right bay at the right time.</p>
</div>`
    },
    {
        slug: 'bodrum-instagramlik-yerler-begonvilli-sokaklar-fotograf-noktalari',
        title: {
            tr: 'Bodrum’un “Instagramlık” Yüzü: Begonvilli Sokaklar ve En İyi Fotoğraf Noktaları',
            en: 'Bodrum’s "Instagrammable" Face: Streets with Bougainvillea and Best Photo Spots'
        },
        meta_description: {
            tr: 'Bodrum’da fotoğraf çekilecek en güzel yerler: Eskiçeşme–Kumbahçe begonvilli sokaklar, yel değirmenleri, Bodrum Kalesi ve Dibeklihan rotası.',
            en: 'Most beautiful places to take photos in Bodrum: Eskiçeşme–Kumbahçe streets with bougainvillea, windmills, Bodrum Castle and Dibeklihan route.'
        },
        content_en: `<h1>Bodrum’s "Instagrammable" Face: Streets with Bougainvillea and Best Photo Spots</h1>

<p>Bodrum is like a natural film set: whitewashed houses, indigo blue doors, bougainvillea hanging on pavements… But wandering randomly is not enough to catch "postcard" shots. The secret of this business is in two things: right time and right street.</p>

<p>In this guide, we are setting your route on the most aesthetic points. Phone charge full, memory empty, let's start.</p>

<div class="my-8">
    <img src="/images/blog/bodrum_instagram_cover.png" alt="Streets of Bodrum with bougainvillea" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-purple-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-purple-800">Best Hours for Photography in Bodrum</h3>
    <ul class="space-y-2 text-sm">
        <li>🌅 <strong>Morning (08:00–10:30):</strong> Streets are empty, light is soft, shadows are "cleaner".</li>
        <li>🌞 <strong>Golden Hour (~60–90 min before sunset):</strong> Bougainvillea pink, stone texture and blue tones shine best in this interval.</li>
        <li>🌌 <strong>Blue Hour (20–30 min after sunset):</strong> White houses look "pastel", lights look "cinematic".</li>
    </ul>
    <div class="mt-4 bg-white p-3 rounded border border-purple-200">
        <p class="text-xs text-red-600 font-bold">Rule: Between 12:00–16:00 noon, white wall + harsh sun = explosion on faces and walls, eye-straining contrast.</p>
    </div>
</div>

<h2>1) Classic and Indispensable: Eskiçeşme & Kumbahçe Bougainvillea Streets</h2>
<p>Where is this place? Spreading on two sides of Bodrum Castle, the neighbourhood feeling that best preserves the "old Bodrum" texture. Narrow streets, blue doors, cat shadows and bougainvillea arches…</p>

<div class="my-6">
    <img src="/images/blog/bodrum_eskicesme_sokak.png" alt="Bodrum Eskiçeşme Neighbourhood Streets" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">How to visit (practical route):</h3>
<p>Leave the bazaar crowd → enter the back parallel streets → uphill narrow streets take you to the most beautiful bougainvillea arches.</p>
<p class="mt-2">Door fronts, flower pots, windows: "detail" wins here.</p>

<div class="bg-gray-50 p-4 rounded mt-4">
    <h4 class="font-bold text-gray-800 mb-2">Photo tip (shooting technique):</h4>
    <ul class="list-disc pl-5 text-sm space-y-1">
        <li>If bougainvillea made an "arch", shoot upwards with a low angle.</li>
        <li>Portrait mode or 2x lens works very well on door/wall texture.</li>
    </ul>
</div>

<p class="text-xs text-gray-500 mt-2">Google Maps search: <em>"Eskiçeşme Mahallesi Bodrum", "Kumbahçe Bodrum beach"</em></p>

<hr class="my-8" />

<h2>2) Panoramic Sunset: Bodrum Windmills</h2>
<p>One of Bodrum's most iconic silhouettes: Windmills located on the hill between Bodrum and Gümbet. At sunset, stone texture turns red, you take two bays in the same frame at the back.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_yel_degirmenleri.png" alt="Bodrum Windmills Sunset" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">Why is this place "Instagrammable"?</h3>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>360° view feeling:</strong> Bodrum on one side, Gümbet on the other.</li>
    <li><strong>At golden hour:</strong> silhouette + wind effect (hair/dress movement) is perfect.</li>
</ul>

<div class="bg-yellow-50 p-4 rounded mt-4 border-l-4 border-yellow-400">
    <h4 class="font-bold text-yellow-800 mb-2">Shooting plan:</h4>
    <p class="text-sm">Leave 60 min before sunset.</p>
    <ul class="list-disc pl-5 text-sm mt-1">
        <li>First 20 min: clear view/portrait</li>
        <li>Last 20 min: silhouette (against the sun)</li>
    </ul>
</div>

<p class="text-xs text-gray-500 mt-2">Google Maps search: <em>"Bodrum Windmills"</em></p>

<hr class="my-8" />

<h2>3) "Frame within Frame": Bodrum Castle and Museum of Underwater Archaeology</h2>
<p>Bodrum Castle is not only a "place to visit"; it is a composition machine for photography. The castle is also used as the Museum of Underwater Archaeology.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_kalesi_manzara.png" alt="Bodrum Castle View" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">Iconic frame idea:</h3>
<p>Use window/embrasure gaps in castle walls as natural frames. Inside the frame: sea, marina, blue tones…</p>

<div class="bg-blue-50 p-4 rounded mt-4">
    <h4 class="font-bold text-blue-800 mb-2">Indoor tip:</h4>
    <p class="text-sm">Light can be low in museum sections:</p>
    <ul class="list-disc pl-5 text-sm mt-1">
        <li>Phone: "Night mode" / HDR</li>
        <li>Camera: Fix ISO without exaggerating (if possible)</li>
    </ul>
</div>

<p class="text-xs text-gray-500 mt-2">Google Maps search: <em>"Bodrum Castle"</em></p>

<hr class="my-8" />

<h2>4) Stone Architecture + Art: Dibeklihan Culture and Art Village (Yakaköy)</h2>
<p>The spot for those looking for "Italy village light in Bodrum": <a href="https://dibeklihan.com" target="_blank" class="text-blue-600 hover:underline">Dibeklihan</a>. Stone courtyards, giant gates, exhibition details… Moreover, there are photogenic areas like Orhan Kemal Square inside.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_dibeklihan.png" alt="Dibeklihan Art Village" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">Why is shooting easier here?</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>The venue gives a "designed" feeling: straight lines, stone textures, courtyard shadows.</li>
    <li>Even if crowded, framing clears up thanks to wide areas.</li>
</ul>

<p class="mt-4"><strong>Timing:</strong> Go close to sunset: stones soften, evening lights look "premium".</p>

<p class="text-xs text-gray-500 mt-2">Google Maps search: <em>"Dibeklihan Culture and Art Village"</em></p>

<hr class="my-8" />

<h2>5) Rustic and Authentic: Akyarlar Streets</h2>
<p>Akyarlar is for those who love the more "raw" and authentic face of Bodrum: worn wooden doors, fisherman details, stone street texture. Here, the power of photograph is not "luxury", but reality.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_akyarlar_sokak.png" alt="Akyarlar Old Houses" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">Best shots:</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>Door knocker / old paint crack / details like net-buoy</li>
    <li>"Street leading to sea" perspective (street lines flow to the sea)</li>
</ul>

<p class="text-xs text-gray-500 mt-2">Google Maps search: <em>"Akyarlar Bodrum"</em></p>

<hr class="my-8" />

<div class="bg-pink-50 p-6 rounded-lg my-8 border border-pink-100">
    <h3 class="text-xl font-bold mb-4 text-pink-800">Mini Style Guide for Photography: What to Wear?</h3>
    <ul class="space-y-3">
        <li>⚪ <strong>White linen:</strong> The colour that pops clearest in front of bougainvillea.</li>
        <li>👒 <strong>Straw accessory:</strong> Compatible with stone/wood texture, makes the photo "holiday".</li>
        <li>🔵 <strong>If you use blue:</strong> Don't go same tone with doors; choose either darker or lighter tone.</li>
    </ul>
</div>

<h2>Quick Plan: "Bodrum Photo Route" in 1 Day</h2>

<div class="space-y-4 my-6">
    <div class="flex items-start">
        <div class="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">09:00</div>
        <div><strong>Morning Light:</strong> Eskiçeşme / Kumbahçe streets (when no one is there).</div>
    </div>
    <div class="flex items-start">
        <div class="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">Noon</div>
        <div><strong>Break:</strong> Bazaar (shade/indoor instead of street in harsh light).</div>
    </div>
    <div class="flex items-start">
        <div class="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">19:00</div>
        <div><strong>Golden Hour:</strong> Windmills (1 hour before sunset).</div>
    </div>
    <div class="flex items-start">
        <div class="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded text-xs mr-3 mt-1">Evening</div>
        <div><strong>Blue Hour/Night:</strong> Dibeklihan (lights + stone textures).</div>
    </div>
    <div class="flex items-center text-sm text-gray-500 italic ml-12">
        <span>Next day option → Akyarlar (rustic/vintage day)</span>
    </div>
</div>

<hr class="my-8" />

<h3>Frequently Asked Questions</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Which are the "emptiest" photo hours in Bodrum?</h4>
        <p class="text-gray-700 mt-1">Between 08:00–10:30 in the morning. Streets are calm, light is soft.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Where are Bodrum Windmills?</h4>
        <p class="text-gray-700 mt-1">On the hill between Bodrum and Gümbet, it is a very popular spot for sunset.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Where is Dibeklihan, why is it good for photos?</h4>
        <p class="text-gray-700 mt-1">A stone architecture culture-art area located in Yakaköy; courtyards and squares make it easy to clear the frame.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Is Bodrum Castle suitable for photos?</h4>
        <p class="text-gray-700 mt-1">Yes. Since the castle is also used as the Museum of Underwater Archaeology, it gives both view and history frame.</p>
    </div>
</div>`
    },
    {
        slug: 'bodrum-beach-club-rehberi-2025-giris-ucretleri-happy-hour-ortam-analizi',
        title: {
            tr: 'Bodrum Beach Club Rehberi 2025: Giriş Ücretleri, Happy Hour Saatleri ve “Ortam” Seçme Kılavuzu',
            en: 'Bodrum Beach Club Guide 2025: Entrance Fees, Happy Hour Times and "Vibe" Selection Guide'
        },
        meta_description: {
            tr: 'Bodrum 2025 beach club rehberi: giriş ücreti mi minimum harcama mı, Türkbükü–Yalıkavak “happy hour” kültürü, kids friendly ve adult only konseptler, rezervasyon ve kapı kuralları.',
            en: 'Bodrum 2025 beach club guide: entrance fee or minimum spend, Türkbükü–Yalıkavak "happy hour" culture, kids friendly and adult only concepts, reservation and door rules.'
        },
        content_en: `<h1>Bodrum Beach Club Guide 2025: Entrance Fees, Happy Hour Times and "Vibe" Selection Guide</h1>

<p>In Bodrum, "beach club" doesn't just mean sunbed + sea. It's a daily ritual: calm in the morning, socializing in the afternoon, "happy hour" in the late afternoon and sometimes a tempo extending into the night.</p>

<p>But the real issue is: Wrong beach choice in Bodrum burns both your money and your day.<br>You want to open a book at one place, DJ set starts inside your head. You want to dance somewhere else, the atmosphere remains like a "library".</p>

<p>This guide clarifies Bodrum's beach culture region by region, wage systems in 2025 and door rules without mentioning brands. Goal: Selecting the place suitable for your vibe at once.</p>

<div class="my-8">
    <img src="/images/blog/bodrum_beach_club_luxury_cover.png" alt="Bodrum Beach Club 2025" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h2>Don't Enter Without Understanding "Wage System" in Bodrum</h2>
<p>You usually see two systems at the door in Bodrum:</p>

<h3 class="font-bold text-lg mt-4 text-gray-800">1) Entrance Fee</h3>
<p>You pay a fixed price at the door. In most places, this price covers basic services like sunbed/umbrella/towel; food & beverage is extra.</p>

<h3 class="font-bold text-lg mt-4 text-gray-800">2) Minimum Spend</h3>
<p>There is either no payment at the door or a low fee; but there is a minimum spending requirement of X TL/€ per person inside. Even if you don't spend that amount, you pay at the checkout. You see that this system is very common in Bodrum in 2025 and minimum spending limits are frequently mentioned in the news.</p>

<div class="bg-gray-100 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">2025 reality:</p>
    <p class="text-sm">According to season and concept, beach entrances/limits in Bodrum are discussed in a very wide band (from more "accessible" levels to hundreds of Euros per person levels).</p>
</div>
<p class="italic text-gray-600">Practical rule: If there is "minimum spend" at the door, think of that place not as a "beach" but as an all-day restaurant/bar. Because your payment model is according to that.</p>

<hr class="my-8" />

<h2>Average Budget Map in 2025 (Brandless, Concept Based)</h2>
<p>Every place can change the net price day by day. But roughly the bands discussed for 2025 are as follows:</p>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>More accessible entrances:</strong> The door can start lower at some private beaches.</li>
    <li><strong>Places working with minimum spend:</strong> Limits approaching a few thousand TL per person are mentioned in the news.</li>
    <li><strong>Top segment "Euro" scale:</strong> Some beaches can carry the total cost per person to hundreds of Euro band.</li>
</ul>

<div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-4">
    <h4 class="font-bold text-yellow-800">What might this include?</h4>
    <p class="text-sm">Sunbed/towel/service, sometimes parking, sometimes just "door". So definitely apply the "how to confirm" part below.</p>
</div>

<hr class="my-8" />

<h2>Bodrum Beach Club Regions: Map to Choose "Vibe"</h2>

<h3 class="font-bold text-lg mt-4 text-purple-800">Türkbükü – "See and Be Seen" Scene (Pier Culture)</h3>
<div class="my-4">
    <img src="/images/blog/bodrum_sea_lounge_deck.png" alt="Türkbükü Pier Culture" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p>Türkbükü's event is usually not "beach", but pier. More lounge during the day, tempo increases towards late afternoon. There are many crowds who dress chic, come to socialize, come for "vibe".</p>
<div class="grid md:grid-cols-2 gap-4 mt-2">
    <div class="bg-green-50 p-3 rounded">
        <strong>Suitable for you if:</strong> You say "Let the day pass on sunbed, let my mind be at peace".
    </div>
    <div class="bg-red-50 p-3 rounded">
        <strong>Not suitable for you if:</strong> You are in "Silence + book" or "Let me spread my towel and hang out" mindset.
    </div>
</div>

<h3 class="font-bold text-lg mt-8 text-purple-800">Yalıkavak & Tilkicik – Happy Hour and Party Rhythm</h3>
<div class="my-4">
    <img src="/images/blog/bodrum_beach_happy_hour_sunset.png" alt="Yalıkavak Happy Hour" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p>This line is known for an energy rising especially in the afternoon in summer. "Happy hour" is a concept here: music increases, socialization accelerates, the event turns from "beach" to "daytime activity" towards sunset.</p>
<ul class="list-disc pl-5 mt-2 space-y-1">
    <li>Reservation and crowd control may be stricter.</li>
    <li>Matching/demographic sensitivity may be experienced for groups in some places.</li>
</ul>
<div class="grid md:grid-cols-2 gap-4 mt-2">
    <div class="bg-green-50 p-3 rounded">
        <strong>Suitable for you if:</strong> You are looking for "Music, DJ, cocktail, happy hour" and movement at sunset.
    </div>
    <div class="bg-red-50 p-3 rounded">
        <strong>Not suitable for you if:</strong> You say "Just sea" (you can swim but motivation is mostly sociality).
    </div>
</div>

<h3 class="font-bold text-lg mt-8 text-purple-800">Gümüşlük & Yalıçiftlik – "Bohemian Luxury" and Comfortable Elegance</h3>
<p>Here the air is an elegance "stepping on the ground": straw, wood, natural tones. Music is mostly more chill; concepts with cuisine claims are many.</p>
<div class="grid md:grid-cols-2 gap-4 mt-2">
    <div class="bg-green-50 p-3 rounded">
        <strong>Suitable for you if:</strong> If you want "quality but not pretentious", start the day calmly and extend it with pleasure.
    </div>
    <div class="bg-red-50 p-3 rounded">
        <strong>Not suitable for you if:</strong> You say "I want full party" (if you don't choose right day/concept tempo might feel low).
    </div>
</div>

<h3 class="font-bold text-lg mt-8 text-purple-800">Torba & Calmer Bays – Comfort + Family Focussed Day</h3>
<div class="my-4">
    <img src="/images/blog/bodrum_calm_family_beach_torba.png" alt="Torba Family Beach" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p>In Torba and surrounding calmer lines, "full day comfort" and family order are found more easily: sea is more controlled, service is more planned, noise is lower.</p>
<div class="bg-green-50 p-3 rounded mt-2">
    <strong>Suitable for you if:</strong> You are planning a "safe and orderly" day with child, you say "Let the day pass on sunbed, let my mind be at peace".
</div>

<hr class="my-8" />

<h2>Kids Friendly or Adult Only? (If You Choose Wrong Your Day Burns)</h2>

<div class="grid md:grid-cols-2 gap-6">
    <div class="border border-blue-200 rounded-lg p-4">
        <h4 class="font-bold text-blue-800 mb-2">What to Look for in Kids Friendly Concept?</h4>
        <p class="text-sm mb-2">Check this without asking brand:</p>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Is the sea shallow, does it deepen quickly?</li>
            <li>Sand or pebble? (directly affects comfort of the day with child)</li>
            <li>Is there shade? (tree/umbrella arrangement)</li>
            <li>Is toilet/shower/changing area clear?</li>
            <li>Is music "background" or "show"?</li>
        </ul>
        <p class="text-xs mt-2 italic">When choosing beach club with child, logistics wins not "view".</p>
    </div>
    <div class="border border-red-200 rounded-lg p-4">
        <h4 class="font-bold text-red-800 mb-2">Who is Adult Only (+16 / +18) Concept For?</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Those wanting "Calmness, book, silence"</li>
            <li>Honeymoon/romantic getaway makers</li>
            <li>Those looking for crowded but "lower noise"</li>
        </ul>
        <p class="text-xs mt-2 italic">Music is usually more chill in these concepts; but still some places may increase tempo towards sunset.</p>
    </div>
</div>

<hr class="my-8" />

<div class="bg-gray-800 text-white p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4">Reservation and "Door" Rules: Golden 7 Rules in 2025</h3>
    <ul class="space-y-3">
        <li>📞 <strong>Confirm same day before going:</strong> Yesterday's condition can change today in Bodrum (limit, entrance, time).</li>
        <li>💰 <strong>"Entrance fee or minimum spend?":</strong> Ask in one sentence: "Is there payment at door, is there minimum spend per person?"</li>
        <li>📅 <strong>Weekend/holiday = different tariff:</strong> Same place may work differently on weekday and busy day.</li>
        <li>⏰ <strong>Time rule for best row:</strong> If you want sea side usually 10:30–11:30 band is "sweet spot".</li>
        <li>👗 <strong>Dress code de facto even if not "formal":</strong> Clean, neat, suitable for beach.</li>
        <li>🚕 <strong>Don't enter without making transport plan:</strong> Traffic may grow in Yalıkavak–Türkbükü line in late afternoon.</li>
        <li>🧾 <strong>Calculate total cost:</strong> Door + inside + parking.</li>
    </ul>
</div>

<div class="bg-gray-100 p-6 rounded-lg text-center my-8">
    <h3 class="font-bold text-gray-800 mb-4">"Which One For Me?" Quick Selection Guide</h3>
    <ul class="space-y-2 text-sm">
        <li>✨ "Let me live Bodrum, be social, I want elegance" → <strong>Türkbükü line</strong></li>
        <li>🎉 "I want Happy hour / music / energy" → <strong>Yalıkavak & Tilkicik line</strong></li>
        <li>🌿 "Let it be cool, bohemian elegance, let day flow calmly" → <strong>Gümüşlük & Yalıçiftlik line</strong></li>
        <li>👨‍👩‍👧‍👦 "Comfort with child, order, low noise" → <strong>Torba & calmer bays</strong></li>
    </ul>
</div>

<hr class="my-8" />

<h3>Frequently Asked Questions</h3>
<div class="space-y-4">
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">What should I definitely ask before going to beach club in Bodrum?</summary>
        <p class="mt-2 text-gray-600">"Is there entrance fee, is there minimum spend, how much TL/€ per person and is sunbed/towel included?"</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Are prices really in Euro in Bodrum in 2025?</summary>
        <p class="mt-2 text-gray-600">Pricing over Euro is discussed in some top segment places; there are examples and news in this direction for 2025 season.</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Is it possible to swim for free?</summary>
        <p class="mt-2 text-gray-600">Yes. 2025 season dates and points of Bodrum Municipality's public beaches are listed on municipality site. Clear solution for those who want not beach club but "free + orderly" sea.</p>
    </details>
</div>

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Final Word: Not Money, "Right Choice" Wins in Bodrum</h3>
    <p class="text-blue-900">You can go to expensive or reasonable in Bodrum. But what makes the real difference is: place suitable for your vibe. Giving 3000 TL and being unhappy is there, saying "my day passed legendary" with same money is there.</p>
</div>`
    }
];

async function updateArticles() {
    console.log('Starting batch update for Bodrum articles (Batch 1)...');

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
