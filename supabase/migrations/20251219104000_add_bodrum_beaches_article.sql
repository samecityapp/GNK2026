-- Migration to add Bodrum Public Beaches Guide article
-- Created at: 2025-12-19 10:40:00

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
  'Bodrum’da Giriş Ücreti Ödemeden Denize Girilecek En Temiz Halk Plajları ve Koylar',
  'bodrum-ucretsiz-halk-plajlari-koylar-rehberi',
  '
<h1>Bodrum’da Giriş Ücreti Ödemeden Denize Girilecek En Temiz Halk Plajları ve Koylar</h1>

<p>Bodrum denince manşetlerde “pahalı beach club” hikâyeleri dönüyor diye, “Bodrum’da ücretsiz denize girmek imkânsız” sanma. Gerçekte durum tam tersi: Bodrum Yarımadası’nda belediye halk plajları ağı oldukça güçlü. Birçok noktada duş, tuvalet, soyunma kabini, cankurtaran, engelli erişimi gibi temel ihtiyaçlar düşünülmüş durumda.</p>

<p>Bu rehberin amacı net:<br>Giriş ücreti ödemeden denize girip, Bodrum’un “mavi” tarafını yaşamak.<br><span class="text-sm text-gray-500">(Not: “Giriş ücretsiz” demek, her yerde şezlong/şemsiye de ücretsiz demek değildir. Bazı halk plajlarında hizmetler belediye tesisinden alınabilir; fiyat/uygulama sezona göre değişebilir.)</span></p>

<div class="my-8">
    <img src="/images/blog/bodrum_beaches_cover.png" alt="Bodrum Halk Plajı Genel Görünüm" class="w-full h-auto rounded-lg shadow-md" />
</div>

<div class="bg-blue-50 p-6 rounded-lg my-8">
    <h3 class="text-xl font-bold mb-4 text-blue-800">Hızlı Seçim Rehberi</h3>
    <ul class="space-y-2 text-sm">
        <li>🚶 <strong>Merkezde yürüyerek deniz:</strong> Kumbahçe Mavi Bayraklı Halk Plajı, Paşa Tarlası Halk Plajı</li>
        <li>👶 <strong>Çocukla sığ-düz ayak koy:</strong> Bitez Halk Plajı</li>
        <li>💸 <strong>“Yalıkavak pahalı” algısını bozan ücretsiz giriş:</strong> Küdür Dodo Halk Plajı (Yalıkavak)</li>
        <li>🏖️ <strong>Uzun sahil yürüyüşü + geniş alan:</strong> Ortakent Halk Plajı / Ortakent Müskebi Halk Plajı</li>
        <li>🌿 <strong>Daha sakin, yerel vibe:</strong> Gümüşlük Halk Plajı / Gümüşlük Çayıraltı Halk Plajı</li>
    </ul>
</div>

<hr class="my-8" />

<h3>1) Bodrum Merkez: “Otelden Çık, Denize Yürü” Noktaları</h3>
<p>Bodrum’da bazı günler en büyük lüks “araba kullanmamak.” Merkezdeysen, plaja ulaşmak için plan yapmana bile gerek yok.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Kumbahçe Mavi Bayraklı Halk Plajı</h4>
<p>Merkezin en pratik seçeneklerinden biri. Belediye listesinde Mavi Bayrak, duş, tuvalet, soyunma kabini, cankurtaran ve engelli platformu gibi tesis ikonlarıyla geçiyor.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Kimler için iyi?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>“Ben merkezde kalıyorum, yürüyerek gireyim” diyenler</li>
        <li>Sabah erken saat yüzmeyi sevenler (suyun en sakin olduğu zamanlar)</li>
    </ul>
    <p class="text-xs mt-2 text-gray-600">Mini ipucu: Merkez sahilleri gün içinde hareketlenir. “Temiz ve sakin su” arıyorsan sabahı hedefle.</p>
</div>

<h4 class="font-bold text-lg mt-4 text-teal-700">Paşa Tarlası Halk Plajı (Paşatarlası)</h4>
<p>Yine belediye halk plajları listesinde ve benzer tesis imkânlarıyla geçiyor.</p>
<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Kimler için iyi?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Merkezde “en kolay ulaşım” isteyenler</li>
        <li>Kısa süreli deniz molası yapacaklar (özellikle öğlen öncesi)</li>
    </ul>
</div>

<div class="my-6">
    <img src="/images/blog/bodrum_kumbahce_beach.png" alt="Kumbahçe Halk Plajı" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>2) Bitez: Çocuklu Ailelerin “Düz Ayak” Favorisi</h3>
<p>Bodrum’da çocukla deniz demek: sığ su + kolay giriş + kıyıda güvenli alan demek. Bitez bu konuda güçlü bir aday.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Bitez Halk Plajı</h4>
<p>Belediye listesinde yer alıyor ve temel tesis ikonlarıyla belirtilmiş.</p>

<div class="bg-orange-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm text-orange-900">Neden aile dostu?</p>
    <ul class="list-disc pl-5 text-sm text-orange-800">
        <li>Koy yapısı sayesinde genelde daha “kontrollü” deniz hissi verir</li>
        <li>Sahil hattı uzun: kalabalığı daha iyi tolere eder</li>
    </ul>
</div>
<p><strong>Bitez taktiği:</strong> Sabah erken gidip önce denize gir, sonra kahveni yürüyüş bandında iç. Öğleden sonra rüzgâr artarsa çocukla planı “kıyı oyunları + kısa deniz” şeklinde değiştir.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_bitez_shallow_beach.png" alt="Bitez Sahili" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>3) Yalıkavak: “Lüks İmajının İçinde” Halk Plajı</h3>
<p>Yalıkavak denince herkesin aklına yüksek fiyatlar geliyor ama bu, “denize girmek için para yakmak zorundasın” anlamına gelmiyor.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Küdür Dodo Halk Plajı (Yalıkavak)</h4>
<p>Belediye listesinde Yalıkavak altında geçiyor ve tesis imkânları belirtilmiş.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Kimler için iyi?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>“Ben Yalıkavak’ta kaldım ama beach club istemiyorum” diyenler</li>
        <li>Temiz deniz arayanlar (akıntı alan bölgeler çoğu zaman suyu daha diri tutar)</li>
    </ul>
</div>
<p><strong>Gerçekçi not:</strong> Yalıkavak rüzgâr alabilir. Bu bazen “dalga” demek, ama aynı zamanda “su kendini yeniliyor” hissi de demek.</p>

<hr class="my-8" />

<h3>4) Ortakent – Müskebi: Uzun Sahil, Geniş Alan, Rahat Kurulum</h3>
<p>Bodrum’da “plajda sıkışmak istemiyorum” diyenlerin aradığı şey genelde şudur: uzun sahil.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Ortakent Halk Plajı & Ortakent Müskebi Halk Plajı</h4>
<p>Belediye listesinde ayrı ayrı geçiyor ve tesis ikonları bulunuyor.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Kimler için iyi?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Kalabalıkta bile “nefes alacak alan” arayanlar</li>
        <li>Sahil yürüyüşü + deniz kombinasyonu yapmak isteyenler</li>
    </ul>
</div>
<p><strong>Ortakent taktiği:</strong> Eğer kendi ekipmanın varsa (şemsiye, kamp sandalyesi), geniş sahil çizgisi avantaj sağlar. Belediyenin sunduğu olanakları da kullanabilirsin; ama en kritik kural yine aynı: erken git.</p>

<div class="my-6">
    <img src="/images/blog/bodrum_ortakent_long_beach.png" alt="Ortakent Sahili" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>5) Gümüşlük: Daha Sakin, Daha Yerel, Daha “Ağırkanlı”</h3>
<p>Gümüşlük’teki halk plajları, “ben bir tık daha sakin takılayım” diyenlere iyi gelir.</p>

<h4 class="font-bold text-lg mt-4 text-teal-700">Gümüşlük Halk Plajı & Gümüşlük Çayıraltı Halk Plajı</h4>
<p>Belediye listesinde yer alıyor.</p>

<div class="bg-gray-50 p-4 rounded mt-2 mb-4">
    <p class="font-semibold text-sm">Kimler için iyi?</p>
    <ul class="list-disc pl-5 text-sm">
        <li>Kalabalık beach enerjisi sevmeyenler</li>
        <li>Akşamüstü deniz + gün batımı yürüyüşü yapmak isteyenler</li>
    </ul>
</div>

<div class="my-6">
    <img src="/images/blog/bodrum_gumusluk_beach.png" alt="Gümüşlük Sahili" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h3>6) “Tesissiz Koy” Sevenlere Uyarı ve Strateji</h3>
<p>Bodrum’da internet “gizli koy” dolu. Evet, tesissiz koylar var; ama gerçek hayat şunu ister:</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Su, şapka, güneş kremi, çöp poşeti</li>
    <li>Telefon çekmeyebilir → önceden haritayı indir</li>
    <li>Araç parkı ve iniş patikası riskli olabilir → terlikle değil, düzgün taban ayakkabıyla</li>
</ul>
<p class="mt-2 text-gray-700 italic">Tesissiz koylar doğru hazırlanırsan harika; hazırlıksız gidersen “güzelim gün” yarım kalır.</p>

<hr class="my-8" />

<div class="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-400">
    <h3 class="text-xl font-bold mb-4 text-yellow-800">Halk Plajlarında Altın Kurallar</h3>
    <div class="space-y-4">
        <div>
            <h4 class="font-bold text-yellow-900">Erken git kuralı</h4>
            <p class="text-sm">Bodrum’da “iyi yer” erken dolar. Hele yazın, ücretsiz girişli ve tesisli halk plajları daha da hızlı dolar.</p>
        </div>
        <div>
            <h4 class="font-bold text-yellow-900">Gün/Sezon detayı</h4>
            <p class="text-sm">Belediye halk plajları için 2025 sezon tarihleri 1 Haziran 2025 – 30 Eylül 2025 olarak yayımlanmış. (Tarihler güncellenebilir; seyahat öncesi kontrol etmek mantıklı.)</p>
        </div>
        <div>
            <h4 class="font-bold text-yellow-900">Temizlik kuralı</h4>
            <p class="text-sm">Özellikle tesissiz noktalarda: “Bodrum mavisi”nin devamı, senin çöpünü geri götürmenle mümkün.</p>
        </div>
    </div>
</div>

<hr class="my-8" />

<h3>Sık Sorulan Sorular</h3>

<div class="space-y-6">
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Bodrum’da halk plajları gerçekten ücretsiz mi?</h4>
        <p class="text-gray-700 mt-1">Genellikle giriş ücretsiz. Ancak şezlong/şemsiye gibi hizmetlerin kullanım şartları değişebilir. En doğrusu plaja vardığında belediye tesisinin uygulamasını görmek.</p>
    </div>
    
    <div>
        <h4 class="font-bold text-gray-900 text-lg">Duş ve tuvalet var mı?</h4>
        <p class="text-gray-700 mt-1">Birçok belediye halk plajı sayfasında duş/tuvalet/soyunma kabini gibi imkânlar işaretlenmiş.</p>
    </div>

    <div>
        <h4 class="font-bold text-gray-900 text-lg">Merkezde denize girmek mantıklı mı?</h4>
        <p class="text-gray-700 mt-1">Mantıklı — özellikle “yürüyerek gideyim, bir deniz molası vereyim” diyorsan. Daha “kartpostal berraklığı” istiyorsan yarımadada farklı koylara kayarsın.</p>
    </div>
</div>

<hr class="my-8" />

<div class="bg-blue-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-blue-800 mb-2">Sonuç: Bodrum’da Deniz Herkesin</h3>
    <p class="text-blue-900">Bodrum’u sadece “giriş ücreti” üzerinden okumak haksızlık. Belediye halk plajlarını doğru seçersen, hem giriş ücreti ödemezsin hem de temel ihtiyaçlarını karşılayarak denize girersin. Bodrum’da mesele “para yakmak” değil; doğru koyu, doğru saatte seçmek.</p>
</div>
',
  '/images/blog/bodrum_beaches_cover.png',
  'Bodrum',
  'Bodrum’da giriş ücreti ödemeden denize girebileceğiniz en temiz halk plajlarını keşfedin: Merkez, Bitez, Yalıkavak, Ortakent ve Gümüşlük’te ücretsiz plajlar, tesis bilgileri ve pratik ipuçları.',
  true,
  NOW(),
  NOW(),
  NOW()
);
