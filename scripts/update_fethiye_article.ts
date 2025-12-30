
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

async function updateArticle() {
    const slug = 'fethiye-ne-zaman-gidilir-ay-ay-analiz';

    const trTitle = "Fethiye’ye Ne Zaman Gidilir? Ay Ay Deniz Suyu, Hava ve Kalabalık Analizi";
    const enTitle = "When to Visit Fethiye? Month-by-Month Sea Water, Weather and Crowd Analysis";

    const trMeta = "Fethiye tatil planı için en doğru zaman ne zaman? Ay ay hava durumu, deniz suyu sıcaklığı ve kalabalık analizi ile ideal tatil takvimi.";
    const enMeta = "When is the right time for a Fethiye holiday plan? Ideal holiday calendar with month-by-month weather, sea water temperature and crowd analysis.";

    const trLocation = "Fethiye";
    const enLocation = "Fethiye";

    // HTML Content Translation
    // Keeping exact structure, classes, image paths.
    const enContent = `<h1>When to Visit Fethiye? Month-by-Month Sea Water, Weather and Crowd Analysis</h1>
<p>There is a question as critical as “Where should I go?” in a holiday plan: “When should I go?” <br>
Because if you go to the right place at the wrong time, the holiday becomes a struggle, not “rest”. Climbing the Kayaköy slope in the August noon is one thing, swimming in Ölüdeniz in October and taking a walk in the cool evening is another.</p>
<p>Fethiye is not just a “June–August” destination. The really sweet spot, the period the locals also love: <strong>Golden Summer (September–October)</strong>. The sea is still warm, the weather is milder, the crowd decreases… The holiday becomes “just right”.</p>
<p>In this guide, we handle Fethiye month by month:</p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Is the sea water at a “can I swim?” level?</li>
    <li>Is the weather at a “can I travel?” consistency?</li>
    <li>Is the crowd at a “will it spoil the fun?” level?</li>
</ul>
<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h2 class="text-xl font-bold mb-4 text-blue-800">30-Second Summary (For Those Who Want to Decide Immediately)</h2>
    <ul class="space-y-2">
        <li>⚖️ <strong>Best balance (sea warm + crowd low):</strong> September, October</li>
        <li>🔥 <strong>Sea guaranteed warm + city fully alive:</strong> July, August</li>
        <li>🌿 <strong>Travelling + walking + calmness:</strong> April, May, November</li>
        <li>💰 <strong>Most economic period:</strong> Early May / Late October</li>
        <li>👨‍👩‍👧‍👦 <strong>Golden ratio for families with children:</strong> Mid–Late June or Early September</li>
    </ul>
</div>
<div class="my-8">
    <img src="/images/blog/fethiye_season_cover_luxury.png" alt="Fethiye Landscape and Luxury Boats" class="w-full h-auto rounded-lg shadow-md" />
</div>
<h2>Fethiye Month by Month: What Should You Expect?</h2>
<h3>April: Spring Awakening (He Who Travels Wins)</h3>
<p><strong>Weather:</strong> Like spring… Some days it opens up like summer, some days “fine rain” makes a surprise. Tourable during the day, cools down in the evening.<br>
<strong>Sea:</strong> Generally cool. Those who say “I’ll swim” swim, but for most people the sea is not the main plan.<br>
<strong>Crowd:</strong> Low. One of the most comfortable periods for photography, walking, exploration.</p>
<div class="my-6">
    <img src="/images/blog/fethiye_spring_hiking.png" alt="Spring Walk in Fethiye" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p><strong>Who loves it?</strong></p>
<ul class="list-disc pl-6 space-y-2">
    <li>Those who say “I melt in the hot”</li>
    <li>Those planning nature walks</li>
    <li>Those who don’t want crowds</li>
    <li>Those who say “Let me feel Fethiye calmly”</li>
</ul>
<div class="bg-green-50 p-4 border-l-4 border-green-400 my-4">
    <strong>💡 Mini Tactic:</strong> Do not tie the programme to the sea in April. Build the plan on “strolling + short route”; if there is sea, it’s a bonus.
</div>
<h3>May: Trailer of Summer (Sweetest Exploration Month)</h3>
<p><strong>Weather:</strong> Pleasant during the day, a thin top is good for evenings. Summer gets serious after mid-May.<br>
<strong>Sea:</strong> Between cool–warm. Some days make you say “I’ll swim”, some days “let it stay”.<br>
<strong>Crowd:</strong> Still manageable.</p>
<p><strong>Biggest advantage of May:</strong> Fethiye’s colour looks very clean. The water becomes “glass-like” some days; very good for photography.</p>
<h3>June: Season Opened (Start of Full Consistency)</h3>
<p><strong>Weather:</strong> Summer is guaranteed. Hot during the day, more comfortable in the evening.<br>
<strong>Sea:</strong> Approaches the “ideal” level for many people.<br>
<strong>Crowd:</strong> First half of the month is calmer, density increases towards the end of the month.</p>
<h3>July: City Opened (Entertainment + Hot + Crowd)</h3>
<p><strong>Weather:</strong> Heat increases seriously. Long walks challenge during noon hours.<br>
<strong>Sea:</strong> Warm and comfortable. You don’t want to get out of the water.<br>
<strong>Crowd:</strong> High. Traffic, beach density, everything is more “active”.</p>
<div class="my-6">
    <img src="/images/blog/fethiye_summer_beach.png" alt="Beach Enjoyment in Fethiye Summer" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-4">
    <strong>⚠️ Realistic Warning:</strong> If you make a “travelling” plan between 12:00–15:00, you might struggle. Allocating these hours to shade/sleep/break saves the holiday.
</div>
<h3>August: Most Crowded, Most Expensive, Hottest</h3>
<p>This is the “peak of Fethiye”. Everyone is there. Everything is working, everything is alive but…<br>
<strong>Weather:</strong> Hottest period. Especially noon hours are challenging.<br>
<strong>Sea:</strong> Very warm. There are those who love it, and those who say “too hot”.<br>
<strong>Crowd:</strong> Very high. If you don’t go to popular places “early in the morning”, the day’s comfort might drop.</p>
<p><strong>August tactic (golden):</strong> Split the day in two: Early morning sea → Noon shade + break → Late afternoon short sea + walk.</p>
<h2>Golden Age of Fethiye: Golden Summer</h2>
<h3>September: Sea Still Summer, Crowd Starts to Decrease</h3>
<p><strong>Weather:</strong> Hot but not scorching like July-August. Evenings are sweeter.<br>
<strong>Sea:</strong> Still very enjoyable as it warmed up throughout the summer.<br>
<strong>Crowd:</strong> Starts to drop as schools approach opening.</p>
<h3>October: Most Refined State of Holiday (Month of Those Who Know)</h3>
<p>October is the period most people in Fethiye say “I wish it was always like this”.</p>
<div class="my-6">
    <img src="/images/blog/fethiye_autumn_sunset.png" alt="Golden Summer and Sunset in Fethiye" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p><strong>Weather:</strong> Milder, walking and travelling is more comfortable.<br>
<strong>Sea:</strong> The sea is still warm until mid-October in many years.<br>
<strong>Crowd:</strong> Decrease significantly.</p>
<p><strong>October tactic:</strong> Don’t miss the sunset hours. October light becomes softer; photos come out like “filters”.</p>
<h2>Fethiye in Winter: November–March (Quiet But Beautiful)</h2>
<p><strong>November:</strong> Travelling season starts. More comfortable for Lycian Way style walks and cultural trips.<br>
<strong>December–January–February:</strong> Silence and mild winter days. Ideal for those saying "Let me walk, let me explore on holiday".<br>
<strong>March:</strong> Entry to spring. "Pre-season calm Fethiye" feeling.</p>
<hr class="my-8" />
<h2>Frequently Asked Questions (FAQ)</h2>
<div class="space-y-4">
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Which is the best month to swim in Fethiye?</summary>
        <p class="mt-2 text-gray-700">For most people September gives the best balance: sea is warm, crowd is less.</p>
    </details>
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Can you swim in Ölüdeniz in October?</summary>
        <p class="mt-2 text-gray-700">You can swim in many years. Especially the first half of October is more advantageous; it changes according to the year’s course.</p>
    </details>
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Most comfortable month for families with children?</summary>
        <p class="mt-2 text-gray-700">Generally mid–late June or early September. Sea is more comfortable, crowd is more manageable.</p>
    </details>
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">What exactly does Golden Summer mean?</summary>
        <p class="mt-2 text-gray-700">The period when summer ends but the sea stays warm; the weather softens. In Fethiye this is generally the September–October feeling.</p>
    </details>
</div>
<div class="mt-8 p-6 bg-green-50 rounded-xl text-center">
    <h3 class="text-xl font-bold text-green-800 mb-2">Conclusion: If You Set the Calendar Right, Fethiye is Distinct</h3>
    <p class="text-green-700">Prepare the suitcase according to the season; Fethiye can please you in every situation — as long as you go at the right time.</p>
</div>`;

    const trContent = `<h1>Fethiye’ye Ne Zaman Gidilir? Ay Ay Deniz Suyu, Hava ve Kalabalık Analizi</h1>
<p>Tatil planında “Nereye gideyim?” kadar kritik bir soru var: “Ne zaman gideyim?” <br>
Çünkü yanlış zamanda doğru yere gidersen, tatil “dinlenme” değil mücadele olur. Ağustos öğleninde Kayaköy yokuşu tırmanmak başka bir şey, Ekim’de Ölüdeniz’e girip üstüne akşam serinliğinde yürüyüş yapmak başka bir şey.</p>
<p>Fethiye sadece “Haziran–Ağustos” destinasyonu değil. Asıl tatlı yer, yerel halkın da sevdiği o dönem: <strong>Sarı Yaz (Eylül–Ekim)</strong>. Deniz hâlâ sıcak, hava daha yumuşak, kalabalık azalıyor… Tatil “tam kıvam” oluyor.</p>
<p>Bu rehberde Fethiye’yi ay ay ele alıyoruz:</p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Deniz suyu “girilir mi?” seviyesinde mi?</li>
    <li>Hava “gezilir mi?” kıvamında mı?</li>
    <li>Kalabalık “keyfi bozar mı?” düzeyinde mi?</li>
</ul>
<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h2 class="text-xl font-bold mb-4 text-blue-800">30 Saniyelik Özet (Hemen Karar Vermek İsteyenlere)</h2>
    <ul class="space-y-2">
        <li>⚖️ <strong>En iyi denge (deniz sıcak + kalabalık az):</strong> Eylül, Ekim</li>
        <li>🔥 <strong>Deniz garanti sıcak + şehir full canlı:</strong> Temmuz, Ağustos</li>
        <li>🌿 <strong>Gezme + yürüyüş + sakinlik:</strong> Nisan, Mayıs, Kasım</li>
        <li>💰 <strong>En ekonomik dönem:</strong> Mayıs başı / Ekim sonu</li>
        <li>👨‍👩‍👧‍👦 <strong>Çocuklu aile için altın oran:</strong> Haziran ortası–sonu veya Eylül başı</li>
    </ul>
</div>
<div class="my-8">
    <img src="/images/blog/fethiye_season_cover_luxury.png" alt="Fethiye Manzarası ve Lüks Tekneler" class="w-full h-auto rounded-lg shadow-md" />
</div>
<h2>Ay Ay Fethiye: Ne Beklemelisin?</h2>
<h3>Nisan: Bahar Uyanışı (Gezen Kazanır)</h3>
<p><strong>Hava:</strong> Bahar gibi… Bazı günler yaz gibi açar, bazı günler “ince yağmur” sürpriz yapar. Gündüz gezilir, akşam serinler.<br>
<strong>Deniz:</strong> Genelde serin. “Girerim” diyen girer ama çoğu kişi için deniz ana plan değildir.<br>
<strong>Kalabalık:</strong> Düşük. Fotoğraf, yürüyüş, keşif için en rahat dönemlerden.</p>
<div class="my-6">
    <img src="/images/blog/fethiye_spring_hiking.png" alt="Fethiye'de Bahar Yürüyüşü" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p><strong>Kimler sever?</strong></p>
<ul class="list-disc pl-6 space-y-2">
    <li>“Ben sıcakta eriyorum” diyenler</li>
    <li>Doğa yürüyüşü planlayanlar</li>
    <li>Kalabalık istemeyenler</li>
    <li>“Fethiye’yi sakin sakin hissedeyim” diyenler</li>
</ul>
<div class="bg-green-50 p-4 border-l-4 border-green-400 my-4">
    <strong>💡 Mini Taktik:</strong> Nisan’da programı denize bağlama. Planı “gezinti + kısa rota” üstünden kur; deniz varsa bonus.
</div>
<h3>Mayıs: Yazın Fragmanı (En Tatlı Keşif Ayı)</h3>
<p><strong>Hava:</strong> Gün içinde keyifli, akşamları ince bir üst iyi gelir. Mayıs ortasından sonra yaz ciddileşir.<br>
<strong>Deniz:</strong> Serin–ılık arası. Bazı günler “girerim”, bazı günler “dursun” dedirtir.<br>
<strong>Kalabalık:</strong> Hâlâ yönetilebilir.</p>
<p><strong>Mayısın en büyük avantajı:</strong> Fethiye’nin rengi çok temiz görünür. Su bazı günler “cam gibi” olur; fotoğraf açısından çok iyi.</p>
<h3>Haziran: Sezon Açıldı (Tam Kıvamın Başlangıcı)</h3>
<p><strong>Hava:</strong> Yaz garantilenir. Gündüz sıcak, akşam daha rahat.<br>
<strong>Deniz:</strong> Birçok kişi için “ideal” seviyeye yaklaşır.<br>
<strong>Kalabalık:</strong> Ayın ilk yarısı daha sakin, ay sonuna doğru yoğunluk artar.</p>
<h3>Temmuz: Şehir Açıldı (Eğlence + Sıcak + Kalabalık)</h3>
<p><strong>Hava:</strong> Sıcak ciddi artar. Öğlen saatlerinde uzun yürüyüş zorlar.<br>
<strong>Deniz:</strong> Sıcak ve konforlu. Sudan çıkmak istemezsin.<br>
<strong>Kalabalık:</strong> Yüksek. Trafik, plaj yoğunluğu, her şey daha “hareketli”.</p>
<div class="my-6">
    <img src="/images/blog/fethiye_summer_beach.png" alt="Fethiye Yazın Plaj Keyfi" class="w-full h-auto rounded-lg shadow-md" />
</div>
<div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-4">
    <strong>⚠️ Gerçekçi Uyarı:</strong> 12:00–15:00 arası “gezme” planı yaparsan zorlanabilirsin. Bu saatleri gölge/uyku/molaya ayırmak tatili kurtarır.
</div>
<h3>Ağustos: En Yoğun, En Pahalı, En Sıcak</h3>
<p>Burası “Fethiye’nin tam zirvesi”. Herkes orada. Her şey çalışıyor, her şey canlı ama…<br>
<strong>Hava:</strong> En sıcak dönem. Özellikle öğlen saatleri zorlayıcı.<br>
<strong>Deniz:</strong> Çok sıcak. Seven de var, “fazla sıcak” diyen de.<br>
<strong>Kalabalık:</strong> Çok yüksek. Popüler yerlerde “sabah erken” gitmezsen günün konforu düşebilir.</p>
<p><strong>Ağustos taktiği (altın):</strong> Günü ikiye böl: Sabah erken deniz → Öğlen gölge + mola → Akşamüstü kısa deniz + yürüyüş.</p>
<h2>Fethiye’nin Altın Çağı: Sarı Yaz</h2>
<h3>Eylül: Deniz Hâlâ Yaz, Kalabalık Azalmaya Başlar</h3>
<p><strong>Hava:</strong> Sıcak ama Temmuz-Ağustos gibi yakıcı değil. Akşamlar daha tatlı.<br>
<strong>Deniz:</strong> Yaz boyunca ısındığı için hâlâ çok keyiflidir.<br>
<strong>Kalabalık:</strong> Okullar açılmaya yaklaştıkça düşmeye başlar.</p>
<h3>Ekim: Tatilin En Rafine Hali (Bilenlerin Ayı)</h3>
<p>Ekim, Fethiye’de çoğu insanın “Keşke hep böyle olsa” dediği dönem.</p>
<div class="my-6">
    <img src="/images/blog/fethiye_autumn_sunset.png" alt="Fethiye'de Sarı Yaz ve Gün Batımı" class="w-full h-auto rounded-lg shadow-md" />
</div>
<p><strong>Hava:</strong> Daha yumuşak, yürümek ve gezmek daha rahat.<br>
<strong>Deniz:</strong> Birçok yıl Ekim ortasına kadar deniz hâlâ ılıktır.<br>
<strong>Kalabalık:</strong> Belirgin şekilde azalır.</p>
<p><strong>Ekim taktiği:</strong> Gün batımı saatlerini kaçırma. Ekim ışığı daha yumuşak olur; fotoğraflar “filtre” gibi çıkar.</p>
<h2>Kışın Fethiye: Kasım–Mart (Sessiz Ama Güzel)</h2>
<p><strong>Kasım:</strong> Gezme mevsimi başlar. Likya Yolu tarzı yürüyüşler ve kültür gezileri için daha rahat.<br>
<strong>Aralık–Ocak–Şubat:</strong> Sessizlik ve ılık kış günleri. "Ben tatilde yürüyeyim, keşfedeyim" diyenler için ideal.<br>
<strong>Mart:</strong> Bahara giriş. "Sezon öncesi sakin Fethiye" hissi.</p>
<hr class="my-8" />
<h2>Sıkça Sorulan Sorular (SSS)</h2>
<div class="space-y-4">
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Fethiye’de denize girmek için en iyi ay hangisi?</summary>
        <p class="mt-2 text-gray-700">Çoğu insan için Eylül en iyi dengeyi verir: deniz sıcak, kalabalık daha az.</p>
    </details>
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Ekim’de Ölüdeniz’e girilir mi?</summary>
        <p class="mt-2 text-gray-700">Birçok yıl girilir. Özellikle Ekim’in ilk yarısı daha avantajlıdır; yılın gidişatına göre değişir.</p>
    </details>
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Çocuklu aileler için en rahat ay?</summary>
        <p class="mt-2 text-gray-700">Genelde Haziran ortası–sonu veya Eylül başı. Deniz daha konforlu, kalabalık daha yönetilebilir.</p>
    </details>
    <details class="bg-gray-50 p-4 rounded-lg">
        <summary class="font-semibold cursor-pointer">Sarı Yaz tam olarak ne demek?</summary>
        <p class="mt-2 text-gray-700">Yazın bittiği ama denizin hâlâ sıcak kaldığı; havanın yumuşadığı dönem. Fethiye’de bu genelde Eylül–Ekim hissidir.</p>
    </details>
</div>
<div class="mt-8 p-6 bg-green-50 rounded-xl text-center">
    <h3 class="text-xl font-bold text-green-800 mb-2">Sonuç: Takvimi Doğru Ayarlarsan Fethiye Bambaşka</h3>
    <p class="text-green-700">Bavulu mevsime göre hazırla; Fethiye seni her durumda memnun edebilir — yeter ki doğru zamanda git.</p>
</div>`;

    console.log('Updating article...');
    const { error } = await supabase
        .from('articles')
        .update({
            title: { tr: trTitle, en: enTitle },
            meta_description: { tr: trMeta, en: enMeta },
            content: { tr: trContent, en: enContent },
            // Update location to localized object as well if your schema supports it, 
            // but based on HotelDetails checks, article.location might be string. 
            // Let's check db schema for article.location. 
            // User prompt says "Location: Fethiye". If it's a string column and not localized, we keep it as string.
            // However, check_hotels_columns used LocalizedString for name/desc. 
            // Article schema in code view showed: location?: string; in types.ts.
            // So keeping location as string "Fethiye" is likely correct/safer unless we know it changed.
            // Re-reading types.ts:
            // export interface Article { ... location?: string; ... }
            // So location is string.
        })
        .eq('slug', slug);

    if (error) {
        console.error('Error updating article:', error);
    } else {
        console.log('Article updated successfully with English translation.');
    }
}

updateArticle();
