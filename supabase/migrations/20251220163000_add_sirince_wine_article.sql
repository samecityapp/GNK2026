-- Migration: Add "Şirince Şarap Rehberi" Article

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
    'Şirince Şarap Rehberi: Meyve Şarabı mı, Gerçek Üzüm Mü? Tadım ve Alışveriş Tüyoları',
    'sirince-sarap-rehberi-meyve-sarabi-uzum',
    '<h1>Şirince Şarap Rehberi: Meyve Şarabı mı, Gerçek Üzüm Mü? Tadım ve Alışveriş Tüyoları</h1>

<p>Şirince’ye (Selçuk / İzmir) adım attığınız an, dar sokaklardan yükselen o tatlı mayhoş koku size “şarap köyü”ne geldiğinizi hissettirir. Kapı önlerinde dizilmiş rengârenk şişeler güzel görünür ama asıl mesele şudur: Şirince’de iki ayrı dünya var. Biri “tatlı meyve şarabı” dünyası, diğeri ise sek üzüm şarabı dünyası.</p>

<p>Bu rehberde marka ya da mekan ismi vermeden; damak tadınıza göre doğru şişeyi seçmeyi, tadım sırasında turist tuzağına düşmemeyi, alışveriş + taşıma + saklama işini sorunsuz bitirmeyi anlatıyoruz.</p>

<div class="my-8">
    <img src="/images/blog/sirince_sarap_cover.png" alt="Şirince Şarap Rehberi" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h2>1) Meyve Şarabı mı, Üzüm Şarabı mı? Önce Beklentiyi Doğru Kurun</h2>
<p>Şirince tezgâhlarında gördüğünüz şişelerin büyük kısmı meyve bazlı ürünlerdir. Bu kötü demek değil; sadece klasik şarap beklentisiyle içerseniz hayal kırıklığı yaratabilir.</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div class="bg-pink-50 p-4 rounded">
        <h3 class="font-bold text-pink-800 mb-2">Meyve şarapları (tatlı sevenler için):</h3>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>Genellikle tatlı, aromatik ve “dessert wine / kokteyl gibi” içimli olur.</li>
            <li>Klasik şarapların burukluğunu sevmeyenler için çok keyiflidir.</li>
            <li>Soğuk içilince dengesi artar; ılık içildiğinde şeker baskın gelebilir.</li>
        </ul>
    </div>
    <div class="bg-purple-50 p-4 rounded">
        <h3 class="font-bold text-purple-800 mb-2">Üzüm şarapları (klasik damaklar için):</h3>
        <ul class="list-disc pl-5 text-sm space-y-1">
            <li>“Ben şekerli içemem” diyorsanız tadımda net söyleyin: “Sek (dry) üzüm şarabı var mı?”</li>
            <li>Üzüm şarapları, özellikle yemekle içmek isteyenler için daha doğru tercih olur.</li>
        </ul>
    </div>
</div>

<hr class="my-8" />

<h2>2) Tadım Yapmanın Altın Kuralı: Sıralamayı Doğru Kur</h2>
<p>Şirince’de mahzen geziyor gibi yapmak yerine, tadımı akıllı yönetmek en hızlı kalite filtresidir.</p>

<div class="my-6">
    <img src="/images/blog/sirince_sarap_tadim.png" alt="Şirince Şarap Tadımı" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">Doğru tadım sırası</h3>
<ol class="list-decimal pl-6 space-y-2 mb-4">
    <li>Hafif aromalılar (beyaz üzüm / hafif meyveler)</li>
    <li>Orta yoğunluk</li>
    <li>En yoğunlar (karadut, yaban mersini vb.)</li>
</ol>

<p class="text-sm italic text-gray-600">Yoğun aromalı bir meyve şarabını başa alırsanız damağınız kilitlenir; sonra içtiğiniz her şey “aynı” gelir.</p>

<div class="bg-gray-100 p-4 rounded mt-4">
    <h4 class="font-bold text-gray-800 mb-2">Tadım sırasında sorulacak 3 soru:</h4>
    <ul class="list-disc pl-5 text-sm space-y-1">
        <li>“Sek/yarı sek üzüm şarabı var mı?”</li>
        <li>“Bu ürün meyve şarabı mı, yoksa meyve aromalı şarap mı?”</li>
        <li>“Alkol oranı ve şeker dengesi nasıl?”</li>
    </ul>
    <p class="text-xs text-gray-500 mt-2">Bu üç soru, hem ürün tipini hem de satıcının güvenilirliğini hızlıca gösterir.</p>
</div>

<hr class="my-8" />

<h2>3) “Turist Şişesi”ni Anlama: Etiket, Denge ve İçim</h2>
<p>Raflarda butik ürünle seri ürün yan yana durabilir. “Rengi güzel” diye şişe seçmek yerine şunlara bakın:</p>

<div class="my-6">
    <img src="/images/blog/sirince_mahzen.png" alt="Şirince Şarap Mahzenleri" class="w-full h-auto rounded-lg shadow-md" />
</div>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Etiket okuma:</strong> “Meyve aromalı” ibaresi genellikle aroma ile desteklenen profillere işaret eder. “Meyve şarabı” tek başına garanti değildir ama doğru kategoriye daha yakındır. En doğrusu: tadım + etiket + açıklama üçlüsü.</li>
    <li><strong>Tat dengesi:</strong> Kaliteli bir meyve şarabı tatlı olsa bile boğazda şurup gibi kalmaz; arkadan hafif asidite gelip içimi taşır. İlk yudumdan sonra “reçel gibi” baskın hissediyorsanız, muhtemelen aşırı şekerli bir seriyle karşı karşıyasınız.</li>
</ul>

<hr class="my-8" />

<h2>4) Hangi Şarap Ne ile Gider?</h2>
<p>Şirince meyve şaraplarını “Cabernet gibi” düşünmeyin; eşleşmesi farklıdır.</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div>
        <h4 class="font-bold text-gray-900">Meyve şarapları:</h4>
        <ul class="list-disc pl-5 text-sm space-y-1 mt-2">
            <li>Yemekten sonra: cheesecake, meyveli tart, sütlü tatlılar</li>
            <li>Hafif peynirler: kremamsı peynirler, tuzsuz/az tuzlu seçenekler</li>
            <li>Yaz akşamı: iyi soğutup ferah içim (isterseniz 1–2 buz)</li>
        </ul>
    </div>
    <div>
        <h4 class="font-bold text-gray-900">Sek üzüm şarapları:</h4>
        <ul class="list-disc pl-5 text-sm space-y-1 mt-2">
            <li>Izgara et/tavuk ve Ege otlarıyla daha güvenli eşleşir</li>
            <li>Meze masasında “tatlı şarap + meze” çakışmasını önler</li>
        </ul>
    </div>
</div>

<hr class="my-8" />

<h2>5) Taşıma: Uçakta, Otobüste, Arabada Sorunsuz Dönüş</h2>
<p>Şirince’den koliyle alışveriş yapan çok olur; asıl mesele sağ salim eve götürmek.</p>

<div class="my-6">
    <img src="/images/blog/sirince_manzara.png" alt="Şirince sokakları ve şarap evleri" class="w-full h-auto rounded-lg shadow-md" />
</div>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Uçakla dönenler:</strong> Şişeleri genelde check-in bagajında taşımak daha güvenlidir. Satıcıdan koruyucu köpük/strafor kılıf isteyin; yoksa kıyafet aralarına tampon yapın.</li>
    <li><strong>Otobüs/araçla dönenler:</strong> Şarap sıcağı sevmez. Yazın bagajda güneşte bekletmeyin. Mümkünse daha serin, sabit yerde taşıyın.</li>
    <li><strong>Kargo seçeneği:</strong> Kargo varsa mutlaka cam paketleme + sigorta durumunu netleştirin.</li>
</ul>

<hr class="my-8" />

<h2>6) Saklama: “Yıllandırma” Hatasını Yapmayın</h2>
<p>Şirince’den aldığınız her şişe mahzende bekletmelik değildir.</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Meyve şarapları genelde taze tüketim ürünüdür.</li>
    <li>Açıldıktan sonra kapağını sıkı kapatıp buzdolabında saklayın ve kısa sürede tüketin.</li>
</ul>

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Sonuç</h3>
    <p class="text-blue-900">Şirince’de doğru veya yanlış şarap yok; sizin damak tadınıza uygun şarap var. En pahalı şişe değil, içince gülümseten şişe doğrudur. Tadımı doğru sırayla yapın, etiketi okuyun, taşıma/saklama işini doğru yönetin; Şirince’den eve gerçekten keyifli bir hatıra götürürsünüz.</p>
</div>

<hr class="my-8" />

<h3>Sıkça Sorulan Sorular</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Şirince şarapları gerçekten şarap mı?</h4>
        <p class="text-gray-700 mt-1">Şirince’de hem meyve bazlı şaraplar hem de klasik sek üzüm şarapları var. Beklentiyi doğru kurmak gerekiyor.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Meyve şarabı ile “meyve aromalı” arasındaki fark ne?</h4>
        <p class="text-gray-700 mt-1">Meyve aromalı ürünlerde baz şaraba aroma eklenmiş olabilir. Etiket ve tadım burada belirleyici.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Şirince’de şarap tadımı nasıl yapılmalı?</h4>
        <p class="text-gray-700 mt-1">Hafiften yoğuna gidin. En yoğun aromalıları sona bırakın; damağınız kilitlenmesin.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Uçakla dönerken şarap nasıl taşınır?</h4>
        <p class="text-gray-700 mt-1">En güvenlisi check-in bagajı ve koruyucu paketleme. Kabin bagajında sıvı kuralı sorun çıkarabilir.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Şirince meyve şarabı yıllandırılır mı?</h4>
        <p class="text-gray-700 mt-1">Çoğu meyve şarabı taze tüketim içindir. Uzun süre saklamak kaliteyi bozabilir.</p>
    </div>
</div>',
    '/images/blog/sirince_sarap_cover.png',
    'Şirince, Selçuk',
    'Şirince’de meyve şarabı mı sek üzüm mü? Tadım sırası, etiket okuma, alışveriş tüyoları ve uçak/otobüsle şarap taşıma rehberi.',
    TRUE,
    CURRENT_TIMESTAMP + INTERVAL '17 seconds',
    now(),
    now()
);
