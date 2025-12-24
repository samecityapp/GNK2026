-- Migration to add Bodrum Transportation Guide article
-- Created at: 2025-12-19 11:40:00

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
  'Bodrum’da Arabasız Tatil Rehberi: Dolmuş Hatları, Taksi Gerçeği ve Ulaşım Tüyoları (2025)',
  'bodrum-arabasiz-tatil-rehberi-ulasim-tuyolari',
  '
<h1>Bodrum’da Arabasız Tatil Rehberi: Dolmuş Hatları, Taksi Gerçeği ve Ulaşım Tüyoları (2025)</h1>

<p>Bodrum’a ilk kez gelenlerin yaşadığı “asıl kültür şoku” çoğu zaman denizde değil, ilk ulaşım hamlesinde yaşanır. Çünkü Bodrum, fotoğraflarda küçük görünen ama gerçekte yarımada mantığıyla çalışan dağınık bir coğrafya: bir koydan diğerine “yakın gibi” duran mesafe, yaz trafiğinde kolayca uzar.</p>

<p>Peki arabasız Bodrum yapılır mı? Net cevap: Evet. Doğru aktarma mantığını bilirseniz, dolmuş/otobüs ağıyla yarımadanın büyük kısmını planlı şekilde gezebilirsiniz. Üstelik havaalanından giriş, merkezde aktarma, gece dönüş gibi kritik noktaları baştan çözdüğünüzde, taksiye “mecbur kalma” oranınız ciddi düşer.</p>

<p>Aşağıdaki rehber, tam olarak bunu yapar: Bodrum’da arabasız hareket etmeyi kolaylaştırır.</p>

<div class="my-8">
    <img src="/images/blog/bodrum_transport_cover.png" alt="Bodrum’da Ulaşım ve Dolmuş" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">30 Saniyelik Özet</h3>
    <ul class="space-y-2 text-sm">
        <li>🚍 <strong>Merkez Üssü:</strong> Çoğu hat "Merkez Garaj"da birleşir, aktarma noktası burasıdır.</li>
        <li>✈️ <strong>Havalimanı:</strong> MUTTAŞ/HAVAŞ ile merkeze in, oradan kalacağın yere dolmuşla geç.</li>
        <li>💳 <strong>Ödeme:</strong> MuglaKart veya temassız kredi kartı (komisyon olabilir) kullanılır.</li>
        <li>⚠️ <strong>Kritik Soru:</strong> Akşam dolmuş/otobüse bindiğinde "Son dönüş kaçta?" diye mutlaka sor.</li>
    </ul>
</div>

<h3>1) Bodrum’da ulaşımın haritası: “Torba Otogar” + “Merkez Garaj” mantığı</h3>
<p>Bodrum’da iki nokta, her şeyi belirler:</p>

<h4 class="font-bold text-lg mt-4 text-gray-800">Bodrum Şehirlerarası Otogarı (Torba kavşağı tarafı)</h4>
<p>Şehirlerarası otobüslerin indiği ana otogardır. Buraya indikten sonra çoğu kişi “Bodrum merkez neresi?” diye kalakalır; çünkü otogar, merkezin tam göbeğinde değildir.</p>

<h4 class="font-bold text-lg mt-4 text-gray-800">Bodrum Merkez Garaj (Eski garaj / çarşıya yakın ana aktarma)</h4>
<p>Şehir içi minibüs-dolmuş hattının ana aktarma mantığı buraya göre çalışır. Yarımadanın birçok hattı ya burada biter ya buradan geçer. (MUTTAŞ’ın Bodrum içi hat listelerinde “Bodrum Merkez Garaj” durak adıyla geçtiğini görebilirsiniz.)</p>

<div class="my-6">
    <img src="/images/blog/bodrum_bus_station.png" alt="Bodrum Otogar ve Minibüsler" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-4">
    <strong>Altın kural:</strong> Yarımadada iki belde arasında “direkt” araç bulmak bazen zor olabilir. Çoğu senaryoda Merkez Garaj üzerinden aktarma en pratik çözümdür.
</div>

<hr class="my-8" />

<h3>2) Havalimanından (BJV) Bodrum’a en mantıklı giriş: MUTTAŞ / HAVAŞ + otogardan devam</h3>
<p>Milas–Bodrum Havalimanı (BJV) çıkışında Bodrum’a toplu taşımayla gitmenin ana yolu, havaalanı servisleriyle Bodrum’a inip oradan devam etmektir.</p>

<p>MUTTAŞ’ın Bodrum hatları içinde “Bodrum Şehir Merkezi – Milas/Bodrum Havalimanı (BJV)” hattı yer alıyor. <br>
<a href="https://ulasim.muttas.com.tr" target="_blank" class="text-blue-600 hover:underline">ulasim.muttas.com.tr</a></p>

<p>Bu hatlar genelde uçuş saatlerine göre düzenlenir; yine de en güncel saat için MUTTAŞ duyurusu/hat sayfası kontrolü en güvenlisi. (Sezon içinde oynar.)</p>

<div class="bg-gray-50 p-4 rounded mt-4">
    <p class="font-semibold text-sm mb-2">Pratik senaryo (arabasız en akıllı plan):</p>
    <ol class="list-decimal pl-5 text-sm space-y-1">
        <li>BJV → Bodrum’a servisle in</li>
        <li>Konaklayacağın bölgeye göre:
            <ul class="list-disc pl-5 mt-1 text-xs text-gray-600">
                <li>Merkezdeysen yürüyerek/mini aktarma</li>
                <li>Yalıkavak / Turgutreis / Gümbet / Bitez / Ortakent gibi yerlere gideceksen garajdan dolmuşla devam</li>
            </ul>
        </li>
    </ol>
</div>
<p class="text-xs text-gray-500 mt-2">Not: Bodrum’daki birçok hat listesinde “Bodrum Şehir Merkezi” ve “Bodrum Otogar” gibi duraklar birlikte geçtiği için, “nerede inmeliyim?” sorusunda bölge belirleyici olur.</p>

<hr class="my-8" />

<h3>3) Dolmuş mu, belediye otobüsü mü? İkisini de aynı akıl yönetir: “hat + aktarma + saat”</h3>
<p>Bodrum’da gündelik pratikte iki dünya var:</p>
<ul class="list-disc pl-6 space-y-2">
    <li><strong>Dolmuş/minibüs kültürü:</strong> Koylar arası en yaygın ulaşım şekli.</li>
    <li><strong>Belediye/koordineli hatlar:</strong> MUTTAŞ ve benzeri hatlar.</li>
</ul>

<div class="my-6">
    <img src="/images/blog/bodrum_dolmus.png" alt="Bodrum Dolmuşu" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>Sizin için önemli olan isim değil; şu üçlü:</p>
<ol class="list-decimal pl-6 space-y-2">
    <li>Hat nereden kalkıyor? (Çoğu rota Merkez Garaj’a bağlanır.)</li>
    <li>Gündüz kaçta sıklaşıyor, akşam kaçta seyrekleşiyor? (Yaz/kış farkı büyük.)</li>
    <li>Aktarma gerekecek mi? (Çoğu zaman evet.)</li>
</ol>

<hr class="my-8" />

<h3>4) Bodrum’da ödeme işi: MuglaKart / KentKart / temassız (ama küçük detay var)</h3>
<p>Muğla genelinde toplu taşımada MuglaKart/KentKart altyapısı kullanılıyor. Kart basım/dolum noktaları ve kullanım bilgileri MUTTAŞ/KentKart sayfalarında paylaşılıyor.</p>

<p><strong>İyi haber:</strong> Temassız banka/kredi kartı ile ödeme imkânı da var.</p>

<div class="bg-red-50 p-4 rounded border-l-4 border-red-400 my-4">
    <strong>Küçük ama önemli detay:</strong> Muğla Büyükşehir Belediyesi duyurularında temassız kredi kartıyla binişte “hizmet bedeli” olabileceği belirtiliyor. Yani “kartla ödedim, biraz fazla çekti” durumunun sebebi bu olabilir.
</div>

<p><strong>En sorunsuz yöntem:</strong> Bodrum’da birkaç gün kalacaksanız, özellikle yoğun sezonda, kart (MuglaKart/KentKart) çıkarmak çoğu kişiyi rahatlatır.</p>

<hr class="my-8" />

<h3>5) “Ben nereye binip nereye inerim?”: Arabasız Bodrum’da en çok işe yarayan 6 rota mantığı</h3>
<p>Aşağıdaki örnekler, “Bodrum’da arabasızım, nasıl düşünmeliyim?” sorusunu çözer:</p>

<div class="space-y-4 mt-4">
    <div class="border-l-4 border-teal-500 pl-4 py-2 bg-teal-50 rounded-r">
        <h4 class="font-bold text-teal-800">A) Merkez ↔ Gümbet / Bitez / Ortakent-Yahşi</h4>
        <p class="text-sm">Bu üçlü, arabasız tatilcinin en rahat ettiği hatlardır. Çünkü merkez bağlantısı güçlüdür.</p>
    </div>
    <div class="border-l-4 border-indigo-500 pl-4 py-2 bg-indigo-50 rounded-r">
        <h4 class="font-bold text-indigo-800">B) Merkez ↔ Yalıkavak</h4>
        <p class="text-sm">Yalıkavak hattı yoğun sezonda kalabalıklaşır; gidiş-dönüş saatini bindiğinizde şoföre sormak, dönüşte panik yaşamayı önler.</p>
    </div>
    <div class="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r">
        <h4 class="font-bold text-orange-800">C) Merkez ↔ Turgutreis</h4>
        <p class="text-sm">Turgutreis hattı da ana hatlardan biridir; ama “gece dönüş” saatleri sezon dışında erken bitebilir.</p>
    </div>
    
     <div class="border-l-4 border-gray-500 pl-4 py-2 bg-gray-50 rounded-r">
        <h4 class="font-bold text-gray-800">D) Merkez ↔ Göltürkbükü / Gündoğan / Torba</h4>
        <p class="text-sm">Bu bölgeler için de çoğu plan merkez aktarmalı işler. “Direkt bulurum” diye değil, “garaj üzerinden çözerim” diye düşünmek kazandırır.</p>
    </div>
</div>

<h4 class="font-bold text-lg mt-6 text-gray-800">E) Yalıkavak ↔ Turgutreis gibi “çapraz” geçişler</h4>
<p>Bodrum’da en çok taksi parası yakan senaryo budur. Çapraz geçişte çoğu zaman:</p>
<ul class="list-disc pl-6 space-y-1 text-sm">
    <li>ya Merkez Garaj’a inip tekrar çıkarsınız</li>
    <li>ya da sezonluk ring/bağlantı hatları denk gelirse şanslısınızdır</li>
</ul>
<p class="text-sm italic mt-1">Bu yüzden çapraz rotayı gündüz planlamak avantajdır.</p>

<hr class="my-8" />

<h3>6) Taksi gerçeği: Bodrum’da taksi “son çare” değil ama “plan dışı maliyet”tir</h3>
<p>Bodrum’da taksi bazen kaçınılmaz: gece geç saat dönüş, valizli transfer, sıcak altında aktarma yapmak istemediğiniz anlar veya çocukla/yaşlıyla “tek hamle” ihtiyacı.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_taxi_stand.png" alt="Bodrum Taksi Durağı" class="w-full h-auto rounded-lg shadow-md" />
</div>

<p>Ama takside en çok can yakan şey şu: haritada yakın görünen mesafeler, yarımadada virajlı/yoğun yola dönüşür.</p>

<div class="bg-yellow-50 p-4 rounded mt-4">
    <p class="font-semibold text-sm mb-2 text-yellow-900">Taksiye binerken iki küçük alışkanlık hayat kurtarır:</p>
    <ul class="list-disc pl-5 text-sm text-yellow-800">
        <li>“Şu noktaya yaklaşık ne tutar?” diye yola çıkmadan sor</li>
        <li>Dönüşte taksi bulma riskin varsa, özellikle yoğun bölgelerde durağı not al / numarayı al</li>
    </ul>
</div>
<p class="text-xs text-gray-500 mt-2">Taksi ücretleri (açılış/km) UKOME vb. kararlarla dönem dönem güncellenebildiği için burada rakam yazmak doğru olmaz; “bugün doğru” olan, 1 ay sonra şaşabilir. En sağlam yöntem, durağa sormak ve kısa bir tahmin almak.</p>

<hr class="my-8" />

<h3>7) Gece ulaşımı: Bodrum’da “gece hayatı var, gece ulaşımı her zaman yok”</h3>
<p>Bodrum’da akşam planı yaparken, ulaşımı en baştan düşünün.</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Merkeze yakın kısa hatlarda seferler daha geç saatlere uzayabilir.</li>
    <li>Yalıkavak / Turgutreis / Gümüşlük gibi daha uzak bölgelere dönüşte son seferler daha erken bitebilir.</li>
</ul>
<p><strong>En doğru hareket (çok basit):</strong> Bindiğiniz dolmuş/otobüste şoföre tek soru: <strong>“Akşam son dönüş kaçta?”</strong> Bu soru, “taksiye mecbur kalmayı” yarıya indirir.</p>

<hr class="my-8" />

<h3>8) “Araba kiralasam mı?” kısmı: Arabayla özgürlük geliyor ama otopark stresi de geliyor</h3>
<p>Araba kiralamak, Bodrum’da iki şeye dönüşebilir: gündüz koy kovalamada konfor, ama akşam merkez/yüksek sezonda otopark ve trafik stresi.</p>

<div class="bg-green-50 p-6 rounded-lg my-6">
    <h4 class="font-bold text-green-800 mb-2">Arabasız tatilde “en iyi strateji” şudur:</h4>
    <p class="text-green-700">Gündüz toplu taşımayla geniş hareket + gece tek seferlik taksi (gerektiğinde). Böylece bütçe kontrollü kalır.</p>
</div>

<hr class="my-8" />

<h3>Sık Sorulan Sorular</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Bodrum’da arabasız gezilir mi?</h4>
        <p class="text-gray-700 mt-1">Evet. Merkez Garaj aktarmasını bilip hat saatlerini sorarsanız çoğu bölgeye dolmuş/otobüsle gidebilirsiniz.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Milas-Bodrum Havalimanı’ndan Bodrum merkeze en ucuz nasıl gidilir?</h4>
        <p class="text-gray-700 mt-1">Genellikle servis/otobüs hatlarıyla (MUTTAŞ/HAVAŞ) Bodrum’a inip, otogardan dolmuşla devam etmek en bütçe dostu yöntemdir.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Bodrum’da toplu taşımada kredi kartı geçiyor mu?</h4>
        <p class="text-gray-700 mt-1">Muğla’da temassız kartla ödeme imkânı var; ancak hizmet bedeli gibi detaylar olabildiği belirtiliyor.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Bodrum’da KentKart/MuglaKart nereden alınır?</h4>
        <p class="text-gray-700 mt-1">Kart basım/dolum noktaları resmi listelerde paylaşılır; Bodrum otogar civarı gibi noktalara yönelik adres bilgileri de yer alır.</p>
    </div>
</div>

<hr class="my-8" />

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Son söz: Bodrum’da arabasız tatilin sırrı “rota planı”</h3>
    <p class="text-blue-900">Bodrum’da arabasız tatil, “şansa bırakınca zor”, planlayınca inanılmaz rahat. Havalimanından inişi doğru kur, Merkez Garaj mantığını çöz, dönüş saatini sor. Gerisi akıyor.</p>
</div>
',
  '/images/blog/bodrum_transport_cover.png',
  'Bodrum',
  'Bodrum’da arabasız tatil rehberi: BJV havalimanından ulaşım, dolmuş güzergahları, taksi kullanımı ve pratik ulaşım ipuçları.',
  true,
  NOW(),
  NOW(),
  NOW()
);
