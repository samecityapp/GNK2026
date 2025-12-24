
-- Migration to add Sapanca Security Article
-- Conformed to migration script Case B (10 values): title, slug, content, cover, location, meta, public, pub_at, created, updated

INSERT INTO public.articles (
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
    'Sapanca Bungalov Kiralamada Güvenlik Rehberi: Sahte Hesapları ve Dolandırıcılığı Anlama Taktikleri',
    'sapanca-bungalov-kiralama-guvenlik-sahte-hesap',
    '<h1>Sapanca Bungalov Kiralamada Güvenlik Rehberi: Sahte Hesapları ve Dolandırıcılığı Anlama Taktikleri</h1>

<p>Sapanca’daki havuzlu, şömineli bungalovlar son yıllarda inanılmaz popüler oldu. Popüler olunca ne oluyor? En iyi evler kadar, en hızlı dolandırıcılık senaryoları da ortaya çıkıyor. Instagram’da “rüya gibi” görünen bir yer, gerçek hayatta ya bambaşka çıkabiliyor ya da hiç var olmayabiliyor.</p>

<p>Bu yazının amacı basit: Para göndermeden önce birkaç dakikada uygulayacağın bir kontrol listesiyle, riskli ilanları en baştan elemek. Çünkü Sapanca’da keyfini kaçıran şey hava değil; yanlış yere atılan kapora.</p>

<div class="my-8">
    <img src="/images/blog/sapanca_bungalov_guvenlik_cover.png" alt="Sapanca Güvenli Bungalov Kiralama" class="w-full h-auto rounded-lg shadow-md" />
</div>

<h2>1) İlk Alarm: Instagram Vitrini “Çok Kusursuz”sa Şüphelen</h2>
<p>Sahte hesaplar genelde iki uçta olur: ya çok yeni açılmıştır ya da bir anda “aşırı profesyonel” görünür.</p>

<div class="bg-red-50 p-4 rounded-lg my-4">
    <h3 class="font-bold text-red-800 mb-2">Kontrol et:</h3>
    <ul class="list-disc pl-5 text-sm space-y-2">
        <li><strong>Hesap geçmişi:</strong> “Bu hesap hakkında” kısmında hesap açılış tarihini ve varsa isim değişikliklerini incele. Sürekli isim değiştiren hesaplar, iz kaybettirmek için kullanılıyor olabilir.</li>
        <li><strong>Yorum/etiket izi:</strong> Yorumlar kapalıysa tek başına suç değil ama risk artar. Asıl mesele şu: Gerçek misafirler etiketlemiş mi? “Etiketlenenler” bölümünde gerçek kullanıcı paylaşımları var mı?</li>
        <li><strong>Hikâye tutarlılığı:</strong> Her gün “son 1 boşluk” paylaşan ama hiç “gün içinden doğal an” göstermeyen hesaplar (mutfakta biri konuşuyor, havuzun suyuna günün ışığı vuruyor, bahçede rüzgâr sesi vs.) zayıf kalır.</li>
    </ul>
</div>

<p class="font-bold mt-4">Mini test: “Bugün saat 18:00 gibi havuz başından kısa bir video atabilir misiniz?” de. Gerçek işletme bunu genelde çözer; sahte hesaplar top çevirir.</p>

<hr class="my-8" />

<h2>2) Fotoğrafın Gerçeği: Tersine Görsel Arama Yap</h2>
<p>Bunu söyleyince herkes “tamam yaparım” diyor ama çoğu yapmıyor. Oysa en hızlı eleme yöntemlerinden biri.</p>

<h3 class="font-bold text-gray-800 mt-4">Ne yap:</h3>
<ol class="list-decimal pl-6 space-y-2">
    <li>İlandaki 2–3 ana fotoğrafı kaydet.</li>
    <li>Tersine görsel arama ile aynı fotoğraf başka bir şehirde/ülkede çıkıyor mu bak.</li>
    <li>Fotoğraflar başka bir tesise ait çıkarsa “açıklaması vardır” diye uzatma: direkt kapat.</li>
</ol>

<div class="my-6">
    <img src="/images/blog/sapanca_fake_social_media.png" alt="Sahte Hesap Kontrolü" class="w-full h-auto rounded-lg shadow-md" />
</div>

<hr class="my-8" />

<h2>3) Canlı Doğrulama: Görüntülü Arama İsteme Hakkın Var</h2>
<p>“Video atamam, mahremiyet” denebilir; bu makul. Ama senin istediğin şey zaten içerde misafir görüntüsü değil.</p>

<div class="bg-blue-50 p-4 rounded-lg my-4">
    <h3 class="font-bold text-blue-800 mb-2">Şunu iste:</h3>
    <ul class="list-disc pl-5 text-sm space-y-2">
        <li>Evin dış cephe tabelasız kısa görüntüsü</li>
        <li>Giriş kapısı + salon + banyo gibi 10–15 saniyelik kesintisiz tur</li>
        <li>Mümkünse o anın kanıtı için: “Kapıya yaklaşırken dışarıdan içeri tek seferde alabilir misiniz?”</li>
    </ul>
</div>
<p>Bu tür bir “tek plan” video, montajlı reklam videosundan daha kıymetli.</p>

<hr class="my-8" />

<h2>4) Resmîlik Meselesi: TÜRSAB, Vergi, Şirket Kaydı (Doğru Yerden Kontrol)</h2>
<p>Burada çok kritik bir ayrım var:</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Eğer sana satışı yapan yer “seyahat acentasıyım / tur satıyorum” diyorsa, <strong>TÜRSAB kaydı</strong> beklemek mantıklı.</li>
    <li>Ama bungalovun sahibi/işletmesi doğrudan kendi mülkünü kiralıyorsa, TÜRSAB belgesi “otomatik şart” değildir. (Yani “TÜRSAB yoksa kesin dolandırıcı” diye genelleme yapmak yanlış olur.)</li>
</ul>

<h3 class="font-bold text-gray-800 mt-4">Peki güveni nasıl artırırsın?</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>Vergi levhası / işletme unvanı iste (normal bir talep).</li>
    <li>Şirket unvanı verdilerse ticaret sicili / MERSİS tarafında unvanı ve faaliyeti kontrol edebilirsin.</li>
    <li>“Biz kurumsalız” diyip hiçbir belge sunamıyorlarsa, ciddiyet düşer.</li>
</ul>

<hr class="my-8" />

<h2>5) Konum ve Adres Testi: “Haritada Bulunabilir mi?”</h2>
<p>Sadece “Sapanca” yazmak yetmez. Güvenilir yer, adresini saklamaz.</p>
<ul class="list-disc pl-6 space-y-2">
    <li>Net mahalle/konum iste.</li>
    <li>Haritada aynı isimde bir işletme pin’i var mı bak.</li>
    <li>“Şu gün kapıdan geçeceğim, dışarıdan göreyim” dediğinde aşırı gerilip konuyu değiştiriyorlarsa, bu da sinyaldir.</li>
</ul>

<hr class="my-8" />

<h2>6) Ödeme Kırmızı Çizgileri: IBAN, Kapora ve Kart Meselesi</h2>
<p>Dolandırıcılığın asıl sahnesi burada başlar. En temiz kural şu: <strong>Şahıs IBAN’ı = Risk artar</strong></p>
<p>Küçük işletmeler bazen şahıs hesabı kullanabiliyor; yani tek başına “kesin dolandırıcı” demek doğru değil. Ama tüketici açısından risk bariz şekilde yükselir.</p>

<div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-4">
    <h3 class="font-bold text-yellow-800 mb-2">Ne yapmalı?</h3>
    <ul class="list-disc pl-5 text-sm space-y-2">
        <li>Ödeme alacak taraf şirketse, mümkünse şirket hesap bilgisi iste.</li>
        <li>Şahıs hesabı veriyorsa, en azından fatura/sözleşme + kimlik/işletme doğrulaması istemeden para gönderme.</li>
        <li><strong>“Sadece havale” ısrarı dikkat ister.</strong> Kredi kartı/ödeme linki, tüketici için ek koruma sağlayabilir. “Kart yok, sadece havale” tek başına suç değil; ama başka sinyallerle birleşince kötü kokar.</li>
    </ul>
</div>

<h3 class="font-bold text-gray-800 mt-4">En güvenli yaklaşım:</h3>
<ul class="list-disc pl-6 space-y-2">
    <li>3D Secure’lu ödeme linki,</li>
    <li>veya bilinen, aracı ödeme altyapısı üzerinden tahsilat,</li>
    <li>ya da rezervasyon belgesi + açık iptal koşulu + fatura üçlüsü.</li>
</ul>

<p class="mt-4 font-bold">Açıklama satırı boş bırakma!</p>
<p>Para gönderiyorsan açıklamaya şunu yaz: <em>“Sapanca konaklama – giriş/çıkış tarihi – ad soyad – ev adı”</em>. Bu, sonradan itiraz/kanıt açısından elini güçlendirir.</p>

<hr class="my-8" />

<h2>7) “Yarı Fiyatına Lüks” Hızlı Eleme Kuralı</h2>
<p>Sapanca’da fiyatlar sezona, güne, havuza, ısıtmaya, jakuzinin varlığına göre değişir. O yüzden “ortalama fiyat budur” diye kesin sayı söylemek doğru değil. Ama bir şey net:</p>
<p>Piyasanın çok altında fiyat verip “hemen kapora at, başkası soruyor” diyorsa, bu çoğu zaman psikolojik baskıdır.</p>
<p><strong>Kendine 10 dakika ver:</strong> “10 dakika sonra döneceğim” de. Bu süre bile karşı tarafın tavrını ortaya çıkarır. Gerçek işletme net bilgi verir, sahte olan panikler.</p>

<hr class="my-8" />

<h2>8) Mini Sözleşme Mantığı: Yazılı Kanıtın Yoksa Riskin Var</h2>
<p>WhatsApp konuşması bile kanıt olabilir ama daha temiz yol: Konaklayacağın tarih, kişi sayısı, ücret, iptal koşulu, dahil olanlar (kahvaltı/odun/havuz ısıtma) yazılı olsun.</p>
<p>“Havuz ısıtma dahil” gibi sürpriz çıkaran kalemler, sonradan can sıkıyor.</p>
<div class="bg-gray-100 p-4 rounded-lg my-4">
    <p class="italic">Basit bir cümle bile iş görür: “X tarihlerinde Y kişi, toplam ücret Z TL, giriş/çıkış saatleri…, iptal koşulu…” Bunu yazılı almak seni toparlar.</p>
</div>

<hr class="my-8" />

<h2>9) Hızlı Güvenlik Kontrol Listesi (Para Göndermeden Önce)</h2>
<p>Kopyala, notlarına ekle:</p>
<ul class="checkbox-list space-y-2 mt-4">
    <li class="flex items-center"><span class="mr-2">✅</span> Tersine görsel arama yaptım, fotoğraflar başka yerde çıkmadı</li>
    <li class="flex items-center"><span class="mr-2">✅</span> Görüntülü arama / tek plan kısa video aldım</li>
    <li class="flex items-center"><span class="mr-2">✅</span> Net konum + mahalle bilgisi aldım</li>
    <li class="flex items-center"><span class="mr-2">✅</span> Ödeme açıklamasına tarih–hizmet yazacağım</li>
    <li class="flex items-center"><span class="mr-2">✅</span> İptal koşulu yazılı</li>
    <li class="flex items-center"><span class="mr-2">✅</span> Aşırı acele baskısı yok</li>
    <li class="flex items-center"><span class="mr-2">✅</span> Şahıs IBAN’ıysa ekstra doğrulama aldım (belge/sözleşme/fatura)</li>
</ul>
<p>Bu liste “mükemmel güven” vermez; ama kötü niyetli ilanların çoğunu daha para göndermeden eler.</p>

<div class="bg-green-50 p-6 rounded-lg text-center mt-8">
    <h3 class="font-bold text-green-800 mb-2">Sonuç: Sapanca’da Huzur, Önce Güvenle Başlar</h3>
    <p class="text-green-900">Sapanca bungalovu keyif işidir; stres işi değil. Senin yapacağın şey “dedektiflik” değil, akıllı kontrol. 5–10 dakikalık doğrulama, günlerce sürecek mağduriyeti engelleyebilir.</p>
    <p class="font-bold mt-2">Kural basit: Görüntü var diye inanma. Kanıt var diye rahatla.</p>
</div>',
    '/images/blog/sapanca_bungalov_guvenlik_cover.png',
    'Sapanca',
    'Sapanca bungalov kiralarken dolandırılmamak için kontrol listesi: sahte Instagram hesaplarını anlama, IBAN/ödeme güvenliği, sözleşme–fatura ve görüntülü doğrulama adımları.',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
);
