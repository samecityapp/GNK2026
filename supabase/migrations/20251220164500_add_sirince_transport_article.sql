-- Migration: Add "Şirince Ulaşım Rehberi" Article

INSERT INTO public.articles (
    id,
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
)
VALUES (
    uuid_generate_v4(),
    'İzmir’den Şirince’ye Arabasız Ulaşım: İZBAN, Selçuk Dolmuşları ve Püf Noktaları',
    'izmirden-sirinceye-arabasiz-ulasim-izban-selcuk-dolmus',
    '<h1>İzmir’den Şirince’ye Arabasız Ulaşım: İZBAN, Selçuk Dolmuşları ve Püf Noktaları</h1>

<p>Şirince, dağın tepesinde saklı bir köy gibi görünse de arabası olmayanlar için İzmir çevresindeki en “kolay erişilen” turistik rotalardan biridir. İşin sırrı basit: önce Selçuk’a ineceksiniz, sonra Selçuk–Şirince minibüsleriyle köye çıkacaksınız.</p>

<p>Bu rehberde; İzmir merkezden ve Adnan Menderes Havalimanı’ndan başlayarak adım adım gidişi, “aktarma” gerçeklerini, dönüşte son dolmuş stresini ve bavulla geziyi kolaylaştıracak küçük ama kritik tüyoları anlatıyorum.</p>

<div class="my-8">
    <img src="/images/blog/sirince_ulasim_cover.png" alt="İzmir Selçuk Şirince Ulaşım (İZBAN)" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-6">
    <h3 class="font-bold text-blue-800 mb-2">Selçuk’a Gitmeden Şirince Olmaz</h3>
    <p>Şirince, Selçuk’a bağlı bir yerleşim. Yani ulaşım planınızın kalbi: Selçuk ilçesi.</p>
    <p class="mt-2 text-sm">Selçuk’a ulaşmak için iki sağlam seçeneğiniz var:</p>
    <ul class="list-disc pl-5 text-sm mt-1">
        <li><strong>İZBAN (banliyö treni):</strong> En ekonomik ve pratik seçenek.</li>
        <li><strong>TCDD Bölgesel Tren (Basmane çıkışlı):</strong> Daha “klasik tren” konforu isteyenlere iyi alternatif.</li>
    </ul>
</div>

<h2>1) İZBAN ile Selçuk’a Ulaşım (Havalimanı Dahil)</h2>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div>
        <h4 class="font-bold text-gray-900">İzmirim Kart / Bilet35 konusu</h4>
        <p class="text-sm mt-2">İZBAN dâhil İzmir toplu taşımada en sorunsuz yöntem İzmirim Kart kullanmak. Kısa süreli ziyaretçilerin işi kolaylaşsın diye Bilet35 (kullan-at) seçeneği de var. Kart ve biletleri metro/banliyö istasyonlarındaki makinelerden ve ana noktalardan temin edebilirsiniz; havaalanı istasyonları da bu kapsama giriyor. <a href="https://www.izmir.bel.tr/" target="_blank" class="text-blue-600 underline">İzmir Belediyesi</a></p>
        <p class="text-xs text-gray-500 mt-2">Not: Ücretler ve entegrasyon kuralları dönemsel güncellenir; “kart/bilet” işini en temiz şekilde istasyon makinelerinden çözün.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900">Adnan Menderes Havalimanı’ndan (ADB) İZBAN’a geçiş</h4>
        <p class="text-sm mt-2">Uçaktan indikten sonra ayrı bir terminal yolculuğu yapmanız gerekmeden havaalanı içindeki İZBAN bağlantısına geçebilirsiniz (yönlendirmeler net). Hedefiniz: Selçuk.</p>
    </div>
</div>

<div class="my-6">
    <img src="/images/blog/selcuk_izban_istasyonu.png" alt="Selçuk İZBAN İstasyonu" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
    <h4 class="font-bold text-yellow-800 mb-2">“Tepeköy aktarması” gerçeği (bazen)</h4>
    <p class="text-sm">İZBAN’da Selçuk uzantısı bazı saatlerde Selçuk–Tepeköy arasında işletilen sefer mantığıyla çalışabiliyor; pratikte bunun anlamı şu:</p>
    <ul class="list-disc pl-5 text-sm mt-1">
        <li>Bazı trenler Tepeköy’de sonlanır,</li>
        <li>Selçuk yönü için aynı istasyonda kısa bir peron değişimi/aktarma yaparsınız.</li>
    </ul>
    <p class="text-sm font-bold mt-2">Altın kural: Panodaki son durağa bakın. “Selçuk” yazmıyorsa, büyük ihtimalle Tepeköy’de kısa bir aktarma vardır. Aktarmayı büyütmeyin: aynı istasyon içinde birkaç dakikalık iştir.</p>
</div>

<hr class="my-8" />

<h2>2) Alternatif: TCDD Bölgesel Tren (Basmane → Selçuk)</h2>
<p>“Aktarma sevmiyorum, oturarak gideyim” diyorsanız İzmir Basmane Garı’ndan kalkıp Aydın yönüne giden TCDD bölgesel trenleri Selçuk’ta durabiliyor.</p>
<ul class="list-disc pl-6 space-y-2 mt-2">
    <li><strong>Artısı:</strong> Koltuk konforu, daha “şehirlerarası tren” hissi, bavulla rahatlık.</li>
    <li><strong>Eksisi:</strong> Sefer sayısı İZBAN kadar sık olmayabilir.</li>
</ul>
<p class="text-sm italic text-gray-600 mt-2">Burada net saat yazmıyorum çünkü sezon/plan değişebilir. En doğru kontrol, TCDD Taşımacılık’ın resmi bilet/saat sisteminden bakmak.</p>

<hr class="my-8" />

<h2>3) Selçuk’tan Şirince’ye Çıkış (Dolmuş / Minibüs)</h2>
<p>Selçuk’a indiniz… Şimdi işin Şirince kısmı başlıyor.</p>

<div class="my-6">
    <img src="/images/blog/selcuk_sirince_dolmus.png" alt="Selçuk Şirince Dolmuşları" class="w-full h-auto rounded-lg shadow-md" />
</div>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Mesafe:</strong> Yaklaşık 8 km (virajlı, sürekli tırmanış)</li>
    <li><strong>Yürüyerek?</strong> Bavulla ve günübirlik gezi için mantıklı değil.</li>
    <li><strong>Dolmuş nereden kalkar?</strong> Genelde ana nokta Selçuk Otogarıdır. İstasyondan otogara kısa bir yürüyüş yapabilir ya da yerel halka “Şirince minibüsü nereden kalkıyor?” diye sorup doğru noktaya yönlenebilirsiniz. Ama kalabalık günlerde otogardan binmek yer bulma açısından avantajlıdır.</li>
    <li><strong>Yolculuk nasıl?</strong> Yaklaşık 15–20 dakika sürer. Yol virajlıdır; aracınız tutuyorsa ön sıralar daha konforlu olur.</li>
</ul>

<hr class="my-8" />

<h2>4) En Kritik Uyarı: “Son Dolmuş Kaçta?”</h2>
<p>Şirince’ye arabasız gidenlerin yaptığı en büyük hata: dönüş saatini sormamak.</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Yazın seferler genelde daha geçe uzar,</li>
    <li>Sezon dışında dönüş daha erken bitebilir.</li>
</ul>
<div class="bg-red-50 p-4 rounded mt-4 border border-red-200">
    <p class="font-bold text-red-800">Ne yapacaksınız? Köye iner inmez ilk iş:</p>
    <p class="text-sm mt-1">Dolmuş şoförüne veya duraktaki kişiye: “Selçuk’a son dolmuş kaçta?” diye sorun. Bu soru size “taksiye mecbur kalmama” garantisi verir.</p>
</div>

<hr class="my-8" />

<h2>5) B Planı: Taksi Mantığı (Doğru Kullanırsanız Kurtarıcı)</h2>
<p>Son dolmuşu kaçırdıysanız veya bavul/çocukla uğraşmak istemiyorsanız taksi devreye girer.</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Şirince–Selçuk kısa bir hat olduğu için (Bodrum’daki gibi) “uçak bileti parası” hissi yaratmaz.</li>
    <li>3–4 kişiyseniz kişi başı maliyet çoğu zaman makul seviyeye düşer.</li>
</ul>
<p class="text-sm font-bold mt-2">İpucu: Binmeden önce “Selçuk’a yaklaşık ne yazar?” diye sorup netleşin.</p>

<hr class="my-8" />

<h2>6) Bavulla Şirince Gezme Hatası ve Emanet Çözümü</h2>
<p>Şirince’nin taşlı ve eğimli sokaklarında çekçekli bavul eziyete dönüşür.</p>

<div class="my-6">
    <img src="/images/blog/sirince_tasli_sokak_bavul.png" alt="Şirince Taşlı Sokaklar" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>Günübirlikseniz en mantıklısı:</p>
<ol class="list-decimal pl-6 space-y-2">
    <li>Büyük eşyayı Selçuk’ta bırakın,</li>
    <li>Köye küçük sırt çantasıyla çıkın.</li>
</ol>
<p class="mt-4 text-sm"><strong>Selçuk’ta bunun için:</strong> Otogar çevresinde emanet çözümleri, Merkezde kısa süreli bırakma yapan esnaf seçenekleri olabiliyor. Net standart her gün aynı olmayabilir; Selçuk’a indiğiniz anda otogar/istasyon çevresinde “emanet” diye sorunca hızlıca yön bulursunuz.</p>

<hr class="my-8" />

<div class="bg-gray-100 p-6 rounded-lg my-8">
    <h3 class="font-bold text-gray-800 mb-4">Minik ama Hayat Kurtaran 7 İpucu</h3>
    <ul class="space-y-2 text-sm">
        <li>✅ Dönüş saatini köye varır varmaz öğren.</li>
        <li>✅ İZBAN’da panolarda son durağı kontrol et; gerekirse Tepeköy’de kısa aktarma yap.</li>
        <li>✅ Şirince’ye bavulla çıkacaksan, dolmuş yerine taksi bazen daha akıllı.</li>
        <li>✅ Köy taşlı: rahat ayakkabı şart.</li>
        <li>✅ Kalabalık günlerde dolmuşta ayakta kalmamak için Selçuk Otogarı’ndan bin.</li>
        <li>✅ Akşam serinliğini hesaba kat: ince bir üst iyi olur.</li>
        <li>✅ Planını “Şirince + Selçuk (Efes çevresi)” şeklinde kurarsan gün çok daha verimli akar.</li>
    </ul>
</div>

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Sonuç</h3>
    <p class="text-blue-900">Şirince’ye arabasız gitmek, çoğu zaman arabayla gitmekten daha keyiflidir: park stresi yok, dar sokak derdi yok. İZBAN/TCDD ile Selçuk’a in, dolmuşla köye çık, dönüş saatini doğru yönet… Bu kadar.</p>
</div>

<hr class="my-8" />

<h3>Sıkça Sorulan Sorular</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">İzmir Adnan Menderes Havalimanı’ndan Şirince’ye arabasız gidilir mi?</h4>
        <p class="text-gray-700 mt-1">Evet. Havalimanından İZBAN ile Selçuk’a geçip, Selçuk’tan Şirince dolmuşlarına binebilirsiniz. <a href="https://www.izmir.bel.tr/" target="_blank" class="text-blue-600 underline">İzmir Belediyesi</a></p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">İZBAN ile Selçuk’a direkt gidiliyor mu, aktarma var mı?</h4>
        <p class="text-gray-700 mt-1">Sefer planına göre bazı trenler Tepeköy’de sonlanır ve Selçuk yönü için aynı istasyonda kısa aktarma yapılır. Panolardan son durağı kontrol etmek en doğru yöntemdir.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Selçuk–Şirince dolmuşları nereden kalkıyor?</h4>
        <p class="text-gray-700 mt-1">Genellikle Selçuk Otogarı ana kalkış noktasıdır. Yoğun günlerde otogardan binmek daha rahattır.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Şirince’den Selçuk’a son dolmuş kaçta?</h4>
        <p class="text-gray-700 mt-1">Sezon ve güne göre değişir. Köye varır varmaz şoföre/duraktaki kişiye “son dolmuş” saatini sormak gerekir.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Bavulla Şirince gezilir mi?</h4>
        <p class="text-gray-700 mt-1">Teknik olarak mümkün ama taşlı ve dik yokuşlar yüzünden zor. Günübirlikseniz eşyayı Selçuk’ta emanet bırakıp köye hafif çıkmak daha iyi.</p>
    </div>
</div>',
    '/images/blog/sirince_ulasim_cover.png',
    'Şirince, Selçuk',
    'İzmir’den Şirince’ye arabasız nasıl gidilir? İZBAN ile Selçuk’a ulaşım, Tepeköy aktarması, Selçuk–Şirince dolmuş kalkış noktaları, son sefer tüyoları ve bavulla gezi ipuçları.',
    TRUE,
    CURRENT_TIMESTAMP + INTERVAL '18 seconds',
    now(),
    now()
);
