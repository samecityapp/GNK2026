-- Migration to add Bodrum Accommodation Guide article
-- Created at: 2025-12-19 10:00:00

INSERT INTO articles (
  title,
  slug,
  content,
  cover_image_url,
  location,
  meta_description,
  is_published,
  published_at,
  created_at,
  updated_at
) VALUES (
  'Bodrum’da Nerede Kalınır? Mahalle Savaşları: Yalıkavak, Türkbükü mü Yoksa Merkez mi?',
  'bodrum-nerede-kalinir-yalikavak-turkbuku-merkez-rehberi',
  '
<h1>Bodrum’da Nerede Kalınır?</h1>
<h2>Mahalle Savaşları: Yalıkavak, Türkbükü mü Yoksa Merkez mi?</h2>

<p>Bodrum tatili planlarken yapılan en büyük hata, Bodrum’u “küçük bir sahil kasabası” sanmak. Oysa Bodrum; bir yarımada ve her koy kendi kurallarını yazmış gibi. Haritada yakın görünen iki nokta, yaz trafiğinde 45 dakika – 1 saat olabiliyor. Bu yüzden Bodrum’da doğru konaklama seçimi, otel seçmekten bile kritik: yanlış mahallede kalırsan tatilin yolda, park yeri ararken ve “keşke” diyerek geçer.</p>

<p>Bu rehberde otel/işletme ismi vermeden, Bodrum’un ana bölgelerini “karakter analizi”yle anlatacağım:</p>

<ul class="list-disc pl-6 space-y-2">
    <li>Neresi ne kadar hareketli?</li>
    <li>Neresi daha serin, neresi daha rüzgârlı?</li>
    <li>Çocuklu aile, çift, arkadaş grubu… kim nereye yakışır?</li>
    <li>“Merkeze ineriz” planı gerçekten çalışıyor mu?</li>
</ul>

<p class="mt-4">Kısa not: “Bodrum’da nerede kalınır?” aramasında insanların asıl derdi şu: deniz + gece + ulaşım + bütçe dengesini kurmak. Bu yazı tam bunu çözüyor.</p>

<div class="my-8">
    <img src="/images/blog/bodrum_accommodation_cover.png" alt="Bodrum Genel Görünüm" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">30 Saniyede Karar</h3>
    <ul class="space-y-2 text-sm">
        <li>🏛️ <strong>İlk defa geliyorum, her yere erişeyim:</strong> Bodrum Merkez</li>
        <li>🛥️ <strong>Lüks, marina, şık atmosfer:</strong> Yalıkavak</li>
        <li>🥂 <strong>“Gör ve görün”, iskele kültürü:</strong> Türkbükü</li>
        <li>🌅 <strong>Bohem, gün batımı, romantik:</strong> Gümüşlük</li>
        <li>🏖️ <strong>Çocukla sığ deniz + kum:</strong> Akyarlar / Karaincir / Bitez</li>
        <li>🎉 <strong>Uygun fiyat + gece hayatı:</strong> Gümbet</li>
        <li>💨 <strong>Daha yerleşik, geniş, rüzgâr seven:</strong> Turgutreis</li>
    </ul>
</div>

<hr class="my-8" />

<h2>Bölüm 1: “Bodrum’un Büyük Üçlüsü”</h2>
<p class="text-lg font-semibold text-gray-700">Merkez – Yalıkavak – Türkbükü</p>

<div class="bg-yellow-50 p-4 rounded-lg my-4 border-l-4 border-yellow-400">
    <h4 class="font-bold text-yellow-800">Konaklama seçmeden önce 3 gerçek</h4>
    <ul class="list-disc pl-5 text-sm mt-2">
        <li>Bodrum’da “merkeze yakın” demek her zaman hızlı ulaşım demek değil. Saat, trafik ve park her şeyi değiştirir.</li>
        <li>Deniz kalitesi koydan koya çok değişir. “Bodrum denizi” tek bir şey değil.</li>
        <li>Mahalle seçimi, tatil tarzını belirler. Sessizlik arayıp eğlencenin göbeğine düşmek en sık yaşanan hata.</li>
    </ul>
</div>

<h3>1) Klasik ve Hareketli: Bodrum Merkez</h3>
<p class="italic text-gray-600">Kumbahçe – Çarşı – Marina hattı</p>

<p>“Ben Bodrum’un ruhunu hissetmek istiyorum” diyenlerin yeridir. Beyaz evlerin arasında dolaşmak, çarşıya karışmak, akşam yürüyüşü yapmak, “Bodrum’un kalbi nerede?” sorusunun cevabını yaşamak isteyenler için en net seçenektir.</p>

<p><strong>Bölgenin karakteri:</strong><br>
Merkez, yarımadanın “başlangıç noktası” gibi çalışır. Gün içinde tekne turları, akşam çarşı kalabalığı, gece eğlence… Her şey burada başlar ve dağılır.</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-green-50 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">Avantajları</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Ulaşım üssü:</strong> Araba yoksa en rahat bölgedir. Birçok hatta buradan dolmuş/servis mantığıyla geçiş olur.</li>
            <li><strong>Her şey elinin altında:</strong> Market, eczane, sahil yürüyüşü, çarşı, gece seçenekleri…</li>
            <li><strong>İlk kez gelenler için ideal:</strong> Bodrum’u “tanımak” için en doğru başlangıç.</li>
        </ul>
    </div>
    <div class="bg-red-50 p-4 rounded">
        <h4 class="font-bold text-red-800 mb-2">Dezavantajları</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Deniz beklentisi:</strong> Merkez plajları “şehir içi” hissi verebilir. En berrak koy iddiası genelde başka bölgelerdedir.</li>
            <li><strong>Gürültü riski:</strong> Çarşı ve eğlenceye yakınsan gece ses olabilir.</li>
            <li><strong>Trafik + park:</strong> Akşam saatleri merkezde park konusu can sıkabilir.</li>
        </ul>
    </div>
</div>
<p><strong>Kimler seçmeli?</strong><br>
İlk defa Bodrum’a gelenler, arabasız gezenler, “gündüz gezer akşam çarşıya inerim” diyenler, kısa tatilde maksimum çeşit isteyenler.</p>

<hr class="my-8" />

<h3>2) Yeni Lüksün Adresi: Yalıkavak</h3>
<p class="italic text-gray-600">“Marina + rüzgâr + şıklık” üçgeni</p>

<p>Yalıkavak son yıllarda Bodrum’un ağırlık merkezini yukarı taşıdı. Burası “sakin balıkçı kasabası” imajından çıkıp, daha premium bir kimliğe büründü.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_yalikavak_view.png" alt="Yalıkavak Marina ve Manzara" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p><strong>Bölgenin karakteri:</strong><br>
Şık akşamlar, marina yürüyüşleri, daha seçilmiş bir kalabalık… Yalıkavak, “Bodrum’u konforlu yaşamak” isteyenlere hitap eder.</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-green-50 p-4 rounded">
        <h4 class="font-bold text-green-800 mb-2">Avantajları</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Serinlik:</strong> Yarımadanın kuzeybatısında olduğu için yazın bile çoğu zaman “efil efil” esebilir.</li>
            <li><strong>Premium atmosfer:</strong> Daha bakımlı, daha derli toplu ve “lüks hissi” yüksek.</li>
            <li><strong>Akşam planları güçlü:</strong> Yürüyüş + manzara + şık ortam isteyenler memnun kalır.</li>
        </ul>
    </div>
    <div class="bg-red-50 p-4 rounded">
        <h4 class="font-bold text-red-800 mb-2">Dezavantajları</h4>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>Bütçe:</strong> Bodrum’un en yüksek bütçeli bölgelerinden biri olabilir.</li>
            <li><strong>Yaz akşamı trafik:</strong> Özellikle gün batımı sonrası yoğunlaşır.</li>
            <li><strong>“Merkeze ineriz” tuzağı:</strong> Her gün merkeze gidip gelmeyi planlıyorsan, tatilin bir kısmı yola döner.</li>
        </ul>
    </div>
</div>
<p><strong>Kimler seçmeli?</strong><br>
Bütçesi esnek olanlar, lüks sevenler, daha serin hava arayanlar, “tatilim şık olsun” diyen çiftler/arkadaş grupları.</p>

<hr class="my-8" />

<h3>3) “Gör ve Görün” Sahnesi: Türkbükü</h3>
<p class="italic text-gray-600">Göltürkbükü – iskele kültürü – sosyallik</p>

<p>Türkbükü, Bodrum’un en “podyum” akşamlarına sahip bölgelerinden biri. Burada tatil biraz “sosyal sahne”dir.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_turkbuku_view.png" alt="Türkbükü İskeleleri" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p><strong>Bölgenin karakteri:</strong><br>
Kumsaldan çok iskele kültürü öne çıkar. Gündüz güneşlenme, akşamüstü hareket, akşam sosyallik… Türkbükü’nün ritmi böyledir.</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Avantajları:</strong> Ambiyans şık, canlı ve sosyal. Kapalı koy yapısı nedeniyle deniz bazen sakindir. Akşamları sahil hattı “gösterişli” akar.</li>
    <li><strong>Dezavantajları:</strong> Araba yoksa erişim Merkez kadar rahat değildir. Bütçe zorlayabilir (“havlumu atayım gireyim” zordur). Sessizlik arayanı yorabilir.</li>
</ul>
<p class="mt-2"><strong>Kimler seçmeli?</strong><br>Sosyalleşmek isteyenler, şık beach günü sevenler, “ortam” odaklı tatil yapanlar.</p>

<hr class="my-8" />

<h2>Bölüm 2: Bodrum’un Asıl Sürprizi</h2>
<p class="text-lg font-semibold text-gray-700">Bohem, aile dostu ve bütçe dostu mahalleler</p>
<p>Bodrum sadece Merkez–Yalıkavak–Türkbükü değil. Hatta birçok kişi için “Bodrum’u Bodrum yapan” yerler bu ikinci bölümde.</p>

<h3>4) Bohem Rapsodi: Gümüşlük</h3>
<p class="italic text-gray-600">“Gün batımı + sanat + salaş lüks” hissi</p>

<div class="my-6">
    <img src="/images/blog/bodrum_gumusluk_sunset.png" alt="Gümüşlük Gün Batımı" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>Gümüşlük, Bodrum’da zamanı yavaşlatan yerlerden. Daha az kasıntı, daha çok “an”.</p>
<p><strong>Bölgenin karakteri:</strong> El işi tezgâhlar, daha bohem sokaklar, gün batımı ritüeli… Gümüşlük “sakin ama kaliteli” bir akşam isteyenlere iyi gelir.</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Avantajları:</strong> Bodrum’un en güçlü gün batımı. Sanatsal ve özgün ruh. Romantik atmosfer.</li>
    <li><strong>Dezavantajları:</strong> Deniz yer yer taşlı/yosunlu olabilir. Akşamları dar yollar park sıkıntısı yaratabilir. Merkeze uzaktır.</li>
</ul>
<p><strong>Kimler seçmeli?</strong><br>Romantik çiftler, bohem atmosfer sevenler, kalabalıktan kaçıp “Bodrum’un sakin tarafını” isteyenler.</p>

<hr class="my-8" />

<h3>5) Ailelerin Kalesi: Turgutreis & Akyarlar & Karaincir</h3>
<p class="italic text-gray-600">“Kum, sığ deniz, ferahlık” isteyenlere</p>

<div class="my-6">
    <img src="/images/blog/bodrum_turgutreis_beach.png" alt="Turgutreis ve Akyarlar Sahili" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>Bu hat, Bodrum’da çocukla tatil yapanların en çok rahat ettiği bölgelerden. Özellikle sığ deniz ve kum arayan aileler için güçlü bir aday.</p>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Avantajları:</strong> Sığ ve kum deniz (çocuklar için güvenli). Daha makul fiyat dengesi. Rüzgâr aldığı için ferah.</li>
    <li><strong>Dezavantajları:</strong> Rüzgâr bazen üşütebilir. Merkeze mesafe vardır (her gün gidip gelmek zor). Gece hayatı sakindir.</li>
</ul>
<p><strong>Kimler seçmeli?</strong><br>Çocuklu aileler, “deniz-kum benim için birinci” diyenler, daha sakin ve geniş alan sevenler.</p>

<hr class="my-8" />

<h3>6) Zıt Kardeşler: Gümbet & Bitez</h3>
<p class="italic text-gray-600">Yan yana ama bambaşka karakterler</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-purple-50 p-4 rounded border border-purple-200">
        <h4 class="font-bold text-purple-800 mb-2">Gümbet: “Eğlence + Bütçe”</h4>
        <p class="text-sm mb-2">Daha hareketli, genç, ekonomik. Gece hayatı güçlü.</p>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>+:</strong> Gece hareketi, Merkeze yakınlık, Bütçe.</li>
            <li><strong>-:</strong> Gürültü, Kalabalık.</li>
        </ul>
        <p class="text-xs mt-2 font-semibold">Kimler? Genç gruplar, eğlence odaklılar.</p>
    </div>
    <div class="bg-teal-50 p-4 rounded border border-teal-200">
        <h4 class="font-bold text-teal-800 mb-2">Bitez: “Yeşil + Huzur”</h4>
        <p class="text-sm mb-2">Daha sakin, nefes alan, aileye uygun.</p>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>+:</strong> Sakinlik, Yumuşak tempo, Aile dostu.</li>
            <li><strong>-:</strong> Gece hayatı az, Merkezden kopuk hissettirebilir.</li>
        </ul>
        <p class="text-xs mt-2 font-semibold">Kimler? Aileler, dinlenmek isteyenler.</p>
    </div>
</div>

<hr class="my-8" />

<h3>7) Bodrum’da En Sık Yapılan 5 Hata</h3>
<p>Bunlar SEO’da da çok aranan dertler; seni doğrudan kurtarır:</p>
<ul class="list-decimal pl-6 space-y-2">
    <li>Yalıkavak’ta kalıp her akşam merkeze “ineriz” sanmak → yol + park + trafik yorabilir.</li>
    <li>Gümbet’te kalıp “sessiz uyuyayım” beklemek → tempo sana uymayabilir.</li>
    <li>Türkbükü’nde “her yerden ücretsiz denize girerim” beklentisi → planın bozulabilir.</li>
    <li>Akyarlar gibi rüzgâr alan bölgede akşam serinliğini hesaba katmamak → ince üstlük şart olabilir.</li>
    <li>Bodrum’da lokasyon seçmeden otel seçmek → “oteli sevdim ama her yer uzak” pişmanlığı.</li>
</ul>

<hr class="my-8" />

<div class="bg-gray-100 p-6 rounded-lg">
    <h3 class="font-bold text-gray-800 mb-4">Özet Karar Listesi: “Ben Hangisiyim?”</h3>
    <ul class="space-y-2 text-sm">
        <li>🏛️ <strong>İlk kez Bodrum + maksimum çeşit:</strong> Bodrum Merkez</li>
        <li>🛥️ <strong>Premium, şık, marina akşamı:</strong> Yalıkavak</li>
        <li>🥂 <strong>Sosyallik, iskele kültürü:</strong> Türkbükü</li>
        <li>🌅 <strong>Bohem, gün batımı, özgün:</strong> Gümüşlük</li>
        <li>🏖️ <strong>Aile + sığ kum + rahat deniz:</strong> Akyarlar / Karaincir / Bitez</li>
        <li>🎉 <strong>Uygun fiyat + gece hayatı:</strong> Gümbet</li>
        <li>💨 <strong>Daha yerleşik, geniş, rüzgâr seven:</strong> Turgutreis</li>
    </ul>
</div>

<hr class="my-8" />

<h3>Sıkça Sorulan Sorular</h3>
<div class="space-y-4">
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Bodrum’a ilk defa gidiyorum, en risksiz bölge hangisi?</summary>
        <p class="mt-2 text-gray-600">Genelde Bodrum Merkez en risksiz başlangıçtır: ulaşım, çarşı, simgeler, her şey elinin altında.</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Çocukla Bodrum’da en rahat neresi?</summary>
        <p class="mt-2 text-gray-600">Genelde Akyarlar/Karaincir hattı ve Bitez daha aile dostu hissettirebilir (deniz ve tempo açısından).</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Deniz en temiz nerede?</summary>
        <p class="mt-2 text-gray-600">Koydan koya değişir. Genel olarak şehir içi plajlar yerine yarımadanın farklı koylarında berraklık artar. Kritik olan rüzgâr ve dalga gününü yakalamaktır.</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Gece hayatı için en mantıklı bölgeler?</summary>
        <p class="mt-2 text-gray-600">Merkez ve Gümbet hattı daha hareketli; Türkbükü daha “sosyal sahne” gibi akar.</p>
    </details>
    <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Arabasız Bodrum olur mu?</summary>
        <p class="mt-2 text-gray-600">Olur ama bölge seçimi daha da önemli olur. Arabasız gelenler genelde Merkez’i daha konforlu bulur.</p>
    </details>
     <details class="bg-white border border-gray-200 rounded-lg p-4">
        <summary class="font-bold cursor-pointer">Bodrum’da “sessizlik + güzel akşam” ikisini birden istiyorum, neresi?</summary>
        <p class="mt-2 text-gray-600">Gümüşlük veya Bitez gibi daha sakin bölgeler bu hissi daha çok verir.</p>
    </details>
</div>

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Sonuç: Bodrum’u Siz Yaratın</h3>
    <p class="text-blue-900">Bodrum tek bir yer değil; her koy kendi cumhuriyeti. Doğru bölge seçimi Bodrum’u sevdirebilir, yanlış seçim “bir daha gelmem” dedirtebilir. Kendine şu soruyu sor: “Benim Bodrum’um; eğlence mi, deniz mi, şıklık mı, sakinlik mi?” Cevap netleşince doğru mahalle zaten kendini seçiyor.</p>
</div>
',
  '/images/blog/bodrum_accommodation_cover.png',
  'Bodrum',
  'Bodrum’da nerede kalınır? Yalıkavak, Türkbükü, Bodrum Merkez, Gümüşlük, Akyarlar, Turgutreis, Gümbet ve Bitez bölgelerinin artıları-eksileri. Tatil tarzınıza en uygun bölgeyi seçin.',
  true,
  NOW(),
  NOW(),
  NOW()
);
