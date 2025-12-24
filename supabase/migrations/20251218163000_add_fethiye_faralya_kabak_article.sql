-- Migration to add Fethiye Faralya & Kabak Guide article
-- Created at: 2025-12-18 16:30:00

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
  'Fethiye’de Romantik ve Gözlerden Uzak Tatil: Faralya ve Kabak Koyu Rehberi',
  'fethiye-faralya-kabak-koyu-rehberi',
  '
<h1>Fethiye’de Romantik ve Gözlerden Uzak Tatil</h1>
<h2>Faralya ve Kabak Koyu Rehberi: Sessizlik, Manzara ve “Dünyadan Kopma” Hissi</h2>

<p>Fethiye’de “kalabalık + müzik + koşuşturma” arkanızda kalsın istiyorsanız, rotayı yukarı çevirmeniz gerekiyor: Faralya ve Kabak Koyu. Buralar Fethiye’nin “arka bahçesi” değil; bence tam olarak saklı cenneti. Deniz aşağıda kalıyor, siz yüzlerce metre yüksekte; gökyüzüyle suyun birleştiği bir çizgiye bakıyorsunuz. Zaman yavaşlıyor, sesler azalıyor, tatil “dinlenme”ye dönüşüyor.</p>

<p>Bu rehberde otel/işletme adı vermeden, Faralya ve Kabak’ın atmosferini, kimlere hitap ettiğini, ulaşım gerçeklerini ve “Hangisi bana daha uygun?” kararını netleştiriyoruz. Buraya gelenler genelde bir şey arıyor: huzur, romantizm, mahremiyet ve doğanın içinde ‘az ama öz’ bir tatil.</p>

<div class="bg-purple-50 p-6 rounded-lg my-8">
    <h2 class="text-xl font-bold mb-4 text-purple-800">30 Saniyelik Özet: Hangisi Sana Göre?</h2>
    <ul class="space-y-2">
        <li>✨ <strong>“Lüks + sessizlik + manzaraya karşı dinlenme”</strong> → Faralya</li>
        <li>🌿 <strong>“Bohem + doğa + daha sosyal/samimi atmosfer”</strong> → Kabak</li>
        <li>⚠️ <strong>Not:</strong> İkisi de “denize sıfır kumsal” tatili değildir; erişim daha zahmetlidir.</li>
    </ul>
</div>

<div class="my-8">
    <!-- Image 1: Cover -->
    <img src="/images/blog/fethiye_faralya_kabak_cover.png" alt="Faralya Sonsuzluk Havuzu ve Manzara" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h2>Faralya ve Kabak’ı “Romantik” Yapan Şey Ne?</h2>
<p>Romantizm burada “süs” değil, ortamın doğal sonucu. Telefonu eline daha az alırsın, gürültü azdır, akşam planı “kalabalık mekân” değil; genelde gün batımı ritüeli olur.</p>

<h3>1) Faralya: Sonsuz Manzara, Sessizliğin Lüksü</h3>
<p>Ölüdeniz’den sonra virajlı yoldan yükselip, denize tepeden bakan yamaçlara kurulu bir bölge. “Sonsuzluk hissi” dediğimiz o şey burada çok gerçek.</p>

<div class="my-6">
    <!-- Image 2 -->
    <img src="/images/blog/fethiye_faralya_pool_view.png" alt="Faralya Tepeden Deniz Manzarası" class="w-full h-auto rounded-lg shadow-md" />
</div>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Atmosfer:</strong> Yetişkin modu. Çocuk sesi, animasyon yok. Sadece rüzgâr ve manzara.</li>
    <li><strong>Deniz Gerçeği:</strong> “Yüzme” değil “izleme” tatili. Kumsal yok, aşağı inmek zahmetli.</li>
    <li><strong>Kim Sever?</strong> Balayı çiftleri, "otelden çıkmasam da olur" diyenler.</li>
</ul>

<h3>2) Kabak Koyu: Bohem, Özgür ve Samimi</h3>
<p>Faralya’yı geçip devam ettiğinde atmosfer değişir. Lüks burada mermer değil; doğaya yaklaşmaktır.</p>

<div class="my-6">
    <!-- Image 3 -->
    <img src="/images/blog/fethiye_faralya_nature.png" alt="Kabak Koyu ve Bungalovlar" class="w-full h-auto rounded-lg shadow-md" />
</div>

<ul class="list-disc pl-6 space-y-2">
    <li><strong>Atmosfer:</strong> Bungalovlar, ahşap yapılar, daha sosyal ve rahat bir ortam.</li>
    <li><strong>Denize İniş:</strong> Araçlar sizi yukarıda bırakır. Koya inmek için servis veya yürüyüş gerekir.</li>
    <li><strong>Kim Sever?</strong> Doğayı seven çiftler, yoga/meditasyon sevenler, bohem ruhlular.</li>
</ul>

<hr class="my-8" />

<h2>Karar Anı: Faralya mı Kabak mı?</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div class="bg-gray-50 p-6 rounded border border-gray-200">
        <h3 class="text-xl font-bold text-gray-800 mb-3">Faralya''yı Seç Eğer...</h3>
        <ul class="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Sessizlik istiyorsan,</li>
            <li>Manzaraya karşı dinlenmek önceliğinse,</li>
            <li>Daha "özel" ve romantik bir his arıyorsan.</li>
        </ul>
    </div>
    <div class="bg-green-50 p-6 rounded border border-green-200">
        <h3 class="text-xl font-bold text-green-800 mb-3">Kabak''ı Seç Eğer...</h3>
        <ul class="list-disc pl-5 space-y-1 text-sm text-green-700">
            <li>Doğayla iç içe olmak istiyorsan,</li>
            <li>Bohem ve rahat atmosfer seviyorsan,</li>
            <li>"Yürürüm, iner çıkarım" diyebiliyorsan.</li>
        </ul>
    </div>
</div>

<div class="my-6">
    <!-- Image 4 -->
    <img src="/images/blog/fethiye_faralya_sunset_romance.png" alt="Faralya Gün Batımı Ritüeli" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-yellow-50 p-6 rounded-lg my-8">
    <h3 class="text-lg font-bold text-yellow-800 mb-2">Ulaşım Uyarısı</h3>
    <ul class="list-disc pl-5 space-y-1 text-yellow-900">
        <li>🚗 Yol virajlıdır, araç tutmasına dikkat.</li>
        <li>🚌 Dolmuş vardır ama gece varış için transfer daha rahattır.</li>
        <li>🚶 Kabak''ta son durak yukarıdadır, aşağısı için ek plan gerekir.</li>
    </ul>
</div>

<div class="text-center font-medium text-gray-600 mt-8">
    “Şehir hayatının gürültüsünden kaçıp, sadece kendinizi ve sevdiğinizi dinlemek istiyorsanız… Fethiye’de daha iyi bir rota zor.”
</div>
',
  '/images/blog/fethiye_faralya_kabak_cover.png',
  'Fethiye',
  'Fethiye’nin romantik kaçış rotaları Faralya ve Kabak Koyu rehberi. Balayı, doğa, sessizlik ve bohem tatil arayanlar için detaylı karşılaştırma.',
  true,
  NOW(),
  NOW(),
  NOW()
);
