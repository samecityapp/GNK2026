-- Migration: Add "Nesin Matematik Köyü Ziyaretçi Rehberi" Article

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
    'Nesin Matematik Köyü Ziyaretçi Rehberi: Şirince’de Gezginler İçeri Girebilir mi?',
    'nesin-matematik-koyu-ziyaret-rehberi-sirince',
    '<h1>Nesin Matematik Köyü Ziyaretçi Rehberi: Şirince’de Gezginler İçeri Girebilir mi?</h1>

<p>Şirince’nin taş sokaklarında gezdikten sonra köyün yukarısında, zeytinliklerin arasında yükselen taş yapıları görüp “Burası neresi?” diye merak etmeniz çok normal: Nesin Matematik Köyü ve hemen yanında, aynı ekosistemin parçası olan Tiyatro Medresesi (ve Nesin Köyleri’nin diğer alanları).</p>

<p>Burası bir “müze” gibi sadece gezilip çıkılan bir yer değil; derslerin, atölyelerin, okumaların ve üretimin sürdüğü yaşayan bir kampüs. Bu yüzden ziyaret edilebilirlik meselesi “kapı açık mı?”dan çok, nasıl bir ziyaretçi olmanız gerektiğiyle ilgili.</p>

<div class="my-8">
    <img src="/images/blog/nesin_matematik_koyu_cover.png" alt="Nesin Matematik Köyü Genel Görünüm" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-6">
    <h3 class="font-bold text-blue-800 mb-2">Önce Konumu Doğru Koyalım: Şirince’ye Çok Yakın, Ama Köyün İçinde Değil</h3>
    <p>Nesin Köyleri yerleşkesi, Şirince’nin yaklaşık 1 km kadar güneyinde, Kayser Dağı yamaçlarında konumlanır; Şirince merkezden yürüyüşle ~800 m civarı bir mesafeden söz edilir. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></p>
    <p class="mt-2 text-sm">Bu yakınlık sayesinde, Şirince programınıza “kısa bir yürüyüş + kampüs atmosferi” eklemek oldukça kolay.</p>
</div>

<h2>Ziyaret Edilebilir mi?</h2>
<p>Genel yaklaşım şu: Burası dışarıdan gelenlere tamamen kapalı bir yer değildir, ancak ziyaret deneyimi “turistik gezi” mantığıyla işlemez.</p>
<ul class="list-disc pl-6 space-y-2 mt-2">
    <li>İçeride ders çalışan/üreten insanları rahatsız etmeyecek şekilde dolaşmanız beklenir.</li>
    <li>Kamp dönemleri, etkinlikler veya yoğunluk durumuna göre ziyaret akışı değişebilir.</li>
    <li>“Giriş ücreti” gibi konular sabit bir müze bileti mantığında olmayabilir; destek/bağış yaklaşımı veya kapıdaki yönlendirme söz konusu olabilir. Bu tip detaylarda en doğru hareket: gitmeden önce resmi kanallardan/kapıdan teyit etmek.</li>
</ul>

<div class="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 mt-4">
    <p class="text-sm font-bold text-yellow-800">Not:</p>
    <p class="text-sm text-yellow-700 mt-1">Nesin Köyleri’nin resmi anlatısında buranın bir bilim ve sanat merkezi olarak çalıştığı; içeride ders çalışanları rahatsız etmemek adına gürültülü etkinliklerin tercih edilmediği açıkça vurgulanır. Bu, ziyaretçinin “sessiz gözlem” modunu açıklayan en net çerçevedir. <a href="https://nesinkoyleri.org/" target="_blank" class="text-yellow-800 underline">nesinkoyleri.org</a></p>
</div>

<hr class="my-8" />

<h2>Ziyaretçinin 1 Numaralı Kuralı: Sessizlik ve Saygı</h2>
<p>Burada “sessizlik” sadece nezaket değil, işleyişin parçası:</p>
<ul class="list-disc pl-6 space-y-2 mt-2">
    <li>Dar bir sokaktan geçerken hemen yanınızdaki gölgelikte ders işleniyor olabilir.</li>
    <li>Yüksek sesle konuşmak, toplu halde bağırarak gezmek, içeridekiler için ciddi dikkat dağıtıcıdır.</li>
    <li>Kısa konuş, yavaş yürü, ortamı gözlemle. Bu kadar.</li>
</ul>

<hr class="my-8" />

<h2>İçeride Sizi Ne Bekliyor?</h2>
<p>Beklentiyi doğru kurarsanız, deneyim çok daha etkileyici olur:</p>

<div class="grid md:grid-cols-2 gap-6 my-6">
    <div>
        <h4 class="font-bold text-gray-900">Taş Mimari ve Akademi Hissi</h4>
        <p class="text-sm mt-2">Yerleşkede taş-ahşap doku ve avlular “estetik” olduğu kadar “işlev” de taşır: Çalışma alanları, derslikler, gölgelikler… Bu atmosferin gücü, “turistik dekor” değil gerçek kullanım olmasından gelir.</p>
    </div>
    <div>
        <h4 class="font-bold text-gray-900">Yemekhane/Kafeterya ve Manzara Molası</h4>
        <p class="text-sm mt-2">Ziyaretçilerin en doğal durağı genelde bir çay-kahve molasıdır. Buraya “gürültüsüz” bir kısa mola ekleyip, Selçuk–Şirince hattının manzarasını izlemek, köyün en iyi anlarından biri olabilir.</p>
    </div>
</div>

<div class="my-6">
    <img src="/images/blog/nesin_derslik_avlu.png" alt="Nesin Köyü Derslik ve Avlu" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">Kule ve Kütüphane Hissi</h3>
<p>Kule/kütüphane gibi alanlarda erişim ve kullanım koşulları dönemsel değişebilir. Ana prensip: çalışanların alanına müdahale etmeden, mümkünse uzaktan gözlem.</p>
<div class="my-6">
    <img src="/images/blog/nesin_kutuphane_kule.png" alt="Nesin Matematik Köyü Kulesi" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h2>Fotoğraf Çekmek Serbest mi?</h2>
<p>Kısa cevap: Mimari ve genel atmosferi çekmek genelde sorun olmaz; insan ve ders alanı hassastır.</p>
<div class="bg-gray-100 p-4 rounded mt-4">
    <h4 class="font-bold text-gray-800 mb-2">Güvenli fotoğraf etiği:</h4>
    <ul class="list-disc pl-5 text-sm space-y-1">
        <li>✅ Bina, avlu, manzara, genel plan: tamam.</li>
        <li>❌ Ders yapanların yüzleri, tahtadaki notlar, yakın plan “insan odaklı çekimler”: mutlaka izin gerektirir; izin yoksa çekmeyin.</li>
        <li>❌ Flaş kullanmayın, tripodla alan kapatmayın, kalabalık çekim yapmayın.</li>
    </ul>
</div>

<hr class="my-8" />

<h2>Hemen Yanı Başında Başka Bir Dünya: Tiyatro Medresesi ve “Üç Köy” Yapısı</h2>
<p>Nesin Köyleri anlatısında Matematik, Sanat ve Felsefe odaklı alanların iç içe olduğu; bazı alanların ortak kullanıldığı belirtilir. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></p>
<p class="mt-2">Bu yüzden Matematik Köyü’nü gezerken, yakınında Tiyatro Medresesi gibi farklı bir atmosferle karşılaşmanız çok normal.</p>
<ul class="list-disc pl-6 space-y-2 mt-2">
    <li><strong>Tiyatro Medresesi’nde de aynı kural geçerli:</strong> Prova/okuma varsa izleyebilirsiniz ama bölmeyin.</li>
    <li>Ortamın “sahne arkası” değil, “çalışma alanı” olduğunu unutmayın.</li>
</ul>

<hr class="my-8" />

<h2>Ulaşım ve Otopark: En Sık Yapılan Hata</h2>
<p>En kritik pratik bilgi şu: Ziyaretçiler genelde kendi imkanlarıyla gelir ve otopark kapasitesi sınırlıdır. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></p>

<div class="my-6">
    <img src="/images/blog/sirince_yuruyus_yolu.png" alt="Şirince''den Köye Yürüyüş Yolu" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h3 class="font-bold text-gray-800 mt-4">En iyi strateji:</h3>
<ol class="list-decimal pl-6 space-y-2 mt-2">
    <li>Eğer Şirince’ye zaten geldiyseniz, aracı Şirince tarafında bırakıp kısa yürüyüşle çıkmak çoğu zaman daha az streslidir. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></li>
    <li>Yokuş/viraj sizi zorluyorsa, Şirince’den kısa mesafe için taksi alternatifi mantıklı olabilir.</li>
</ol>

<div class="bg-gray-50 p-6 rounded-lg my-8">
    <h3 class="font-bold text-gray-800 mb-4">Önerilen İç Linkler</h3>
    <ul class="space-y-2 text-sm">
        <li><a href="/blog/izmirden-sirinceye-arabasiz-ulasim-izban-selcuk-dolmus" class="text-blue-600 hover:underline">İzmir’den Şirince’ye Arabasız Ulaşım: İZBAN, Selçuk Dolmuşları ve Püf Noktaları</a></li>
        <li><a href="/blog/sirince-sarap-rehberi-meyve-sarabi-uzum" class="text-blue-600 hover:underline">Şirince Şarap Rehberi: Meyve Şarabı mı, Gerçek Üzüm Mü?</a></li>
    </ul>
</div>

<div class="bg-green-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-green-800 mb-2">Sonuç: Bir Kampüsü “Turistikleştirmeden” Gezmek</h3>
    <p class="text-green-900">Nesin Matematik Köyü, Türkiye’de “başka türlü” bir üretim ve öğrenme kültürünün mümkün olduğunu gösteren nadir örneklerden. Buraya gelirken hedefiniz “çok fotoğraf çekmek” değil, o çalışma atmosferini kısa süreliğine solumak olursa, Şirince geziniz bambaşka bir derinlik kazanır.</p>
</div>

<hr class="my-8" />

<h3>Sıkça Sorulan Sorular</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Nesin Matematik Köyü gezginler tarafından ziyaret edilebilir mi?</h4>
        <p class="text-gray-700 mt-1">Genelde ziyaret mümkün olabilir; ancak burası yaşayan bir kampüs olduğu için uygulamalar dönemsel değişebilir. En doğrusu gitmeden önce resmi kanallardan/kapıdan teyit etmektir.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Nesin Matematik Köyü Şirince’nin içinde mi?</h4>
        <p class="text-gray-700 mt-1">Hayır. Şirince’nin yaklaşık 1 km kadar güneyinde, Kayser Dağı yamaçlarındadır. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Şirince’den yürüyerek gidilir mi?</h4>
        <p class="text-gray-700 mt-1">Evet. Şirince merkezden yürüyüşle yaklaşık ~800 m civarı bir mesafeden söz edilir; yokuşlu bir yürüyüş olabilir. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Otopark var mı?</h4>
        <p class="text-gray-700 mt-1">Ziyaretçiler genelde kendi imkanlarıyla gelir ve otopark alanı sınırlı olabilir; bu yüzden Şirince’de park edip yürümek çoğu zaman daha rahattır. <a href="https://nesinkoyleri.org/" target="_blank" class="text-blue-600 underline">nesinkoyleri.org</a></p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Fotoğraf çekmek serbest mi?</h4>
        <p class="text-gray-700 mt-1">Mimari ve genel planlar genelde sorun olmaz; ders/prova alanlarında insanları ve tahtaları izinsiz çekmemek gerekir.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Tiyatro Medresesi ile Matematik Köyü aynı yerde mi?</h4>
        <p class="text-gray-700 mt-1">Aynı ekosistemin parçasıdır; köylerin alanları iç içe geçer ve bazı alanlar ortak kullanılabilir.</p>
    </div>
</div>',
    '/images/blog/nesin_matematik_koyu_cover.png',
    'Şirince, Selçuk',
    'Nesin Matematik Köyü ziyaret edilir mi? Şirince’de sessizlik kuralları, Tiyatro Medresesi, fotoğraf etiği ve Şirince’den yürüyerek ulaşım tüyoları.',
    TRUE,
    CURRENT_TIMESTAMP + INTERVAL '19 seconds',
    now(),
    now()
);
