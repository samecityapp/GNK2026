import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const articles = [
  {
    title: "Sapanca'nın En İyi Kahvaltı Mekanları ve Serpme Kahvaltı Durakları",
    slug: "sapanca-kahvalti-mekanlari-rehberi",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Göl manzarasına karşı organik ürünlerle dolu bir masa... Sapanca'da güne başlamanın en lezzetli yollarını ve en iyi serpme kahvaltı mekanlarını sizin için derledik.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
          <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sapanca Kahvaltı" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Güne Muhteşem Bir Başlangıç</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca denilince akla ilk gelen şeylerden biri, kuş sesleri eşliğinde yapılan uzun ve keyifli kahvaltılardır. Özellikle Kırkpınar ve Maşukiye hattında, doğanın tam kalbinde yer alan mekanlar, sadece karın doyurmak için değil, ruhu doyurmak için de birebir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Neden Sapanca Kahvaltısı?</h3>
          <p class="text-lg leading-relaxed">Bölgenin kahvaltı kültürünü özel kılan şey, yerel üreticilerden gelen taze ürünlerdir. Çerkez peynirleri, ev yapımı reçeller, sıcak bazlamalar ve tabii ki kiremitte eritilmiş tereyağlı mantarlar...</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">En Popüler Lokasyonlar</h3>
          <ul class="space-y-3 text-lg">
            <li><strong>Kırkpınar Bağdat Caddesi:</strong> Daha butik ve şık kafelerin olduğu bölge.</li>
            <li><strong>Göl Kenarı:</strong> Maviyle yeşilin buluştuğu, manzaralı mekanlar.</li>
            <li><strong>Natürköy & Sopeli Tarafları:</strong> Şelale sesleri eşliğinde tam bir doğa deneyimi.</li>
          </ul>
          <p class="text-lg leading-relaxed mt-4">Hafta sonu yer bulmak zor olabilir, bu yüzden GNK üzerinden bölgedeki otellerde konaklayarak sabahın erken saatlerinin tadını çıkarmanızı öneririz.</p>
        </div>
      </div>
    `
  },
  {
    title: "Sapanca Kırkpınar: Bağdat Caddesi'nin Yeşil Versiyonu",
    slug: "sapanca-kirkpinar-gezi-rehberi",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Sanat atölyeleri, üçüncü dalga kahveciler ve yemyeşil sokaklar. İstanbul'un kaosundan uzak ama bir o kadar da modern: Kırkpınar'ı keşfediyoruz.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
          <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kırkpınar" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Yeşilin İçindeki Modernite: Kırkpınar</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca'nın en nezih mahallesi olarak bilinen Kırkpınar, son yıllarda geçirdiği dönüşümle adeta bir açık hava yaşam merkezine dönüştü. Bağdat Caddesi'ni andıran ama egzoz dumanı yerine ıhlamur kokusu barındıran bu bölge, yürüyüş yapmak isteyenler için ideal.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Neler Yapılır?</h3>
          <p class="text-lg leading-relaxed">Eski havaalanı arazisinin geniş yürüyüş parkurlarında sabah sporu yapabilir, ardından bölgedeki butik kahvecilerde kitabınızı okuyabilirsiniz. Kırkpınar ayrıca sanat atölyeleri ve seramik kurslarıyla da ünlüdür.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Alışveriş ve Yeme İçme</h3>
          <p class="text-lg leading-relaxed">Burada zincir marketlerden ziyade, el yapımı ürünler satan dükkanlar ön plandadır. Organik pazarlar ve tasarım butikleri, alışveriş tutkunları için harika seçenekler sunar.</p>
        </div>
      </div>
    `
  },
  {
    title: "Göl Kenarında Huzur: Sapanca Yürüyüş ve Bisiklet Rotaları",
    slug: "sapanca-gol-kenari-yuruyus-bisiklet",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Pedalları huzura çevirin. Sapanca Gölü'nün çevresindeki en iyi yürüyüş parkurları ve bisiklet kiralama noktaları bu rehberde.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bisiklet" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Mavinin Kıyısında Aktivite</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca Gölü, sadece izlemek için değil, yaşamak için de harika bir atmosfer sunar. Yaklaşık 16 kilometrelik sahil şeridi, son yıllarda yapılan düzenlemelerle mükemmel bir rekreasyon alanına dönüştü.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Bisiklet Rotaları</h3>
          <p class="text-lg leading-relaxed">Sahil boyunca uzanan düz parkur, her seviyeden bisikletçi için uygundur. Bisikletiniz yoksa endişelenmeyin; sahil girişinde belediyenin ve özel işletmelerin kiralama noktaları mevcut.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <img src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gün Batımı" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Gün Batımı Yürüyüşleri</h3>
          <p class="text-lg leading-relaxed">Özellikle akşamüstü saatlerinde göl kenarı, fotoğrafçılar için eşsiz kareler sunar. İskelelerde oturup güneşi batırmak, Sapanca rütuelinin olmazsa olmazıdır. Yanınıza termosunuzu almayı unutmayın!</p>
        </div>
      </div>
    `
  },
  {
    title: "İstanbul'dan Kaçış: Hafta Sonu Neden Sapanca'ya Gitmelisiniz?",
    slug: "istanbuldan-sapancaya-hafta-sonu-kacisi",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Sadece 1.5 saat uzaklıkta bambaşka bir dünya. Trafikten, gürültüden ve stresten uzaklaşıp kendinizi doğanın kollarına bırakmanız için geçerli sebepler.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 border border-teal-100">
          <img src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Doğa Kaçışı" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Yakın Ama Çok Uzak</h2>
          <p class="text-lg leading-relaxed text-gray-700">İstanbul'da yaşayanlar için en büyük lüks zamandır. Cuma akşamı iş çıkışı yola koyulup, akşam yemeğinde şömine başında olabileceğiniz nadir yerlerden biri Sapanca. Şehir merkezine sadece 130 km uzaklıkta olması, onu vazgeçilmez kılıyor.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Oksijen Deposu</h3>
          <p class="text-lg leading-relaxed">Şehirden çıktığınızı, arabanızın camını açtığınızda yüzünüze çarpan o serin ve temiz havadan anlarsınız. Samanlı Dağları'nın eteklerinde yer alan bölge, yüksek oksijen oranıyla uyku kalitenizi bile artırır.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Her Mevsim Başka Güzel</h3>
          <p class="text-lg leading-relaxed">İlkbaharda yeşeren doğa, yazın serin göl havası, sonbaharda sarının binbir tonu ve kışın bembeyaz örtüsü... Sapanca tek seferlik değil, her mevsim gidilecek bir rotadır.</p>
        </div>
      </div>
    `
  },
  {
    title: "Beyaz Örtü Altında Sapanca: Kış Tatili ve Kartepe Rehberi",
    slug: "sapanca-kis-tatili-kartepe",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Sapanca sadece baharda değil, kışın da büyüleyici. Kartepe Kayak Merkezi'ne yakınlığı ve karlı manzaralarıyla kış tatilinin ipuçları.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-100">
          <img src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kış Manzarası" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Karın En Yakışıklı Hali</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca'da kış demek, sessizlik ve huzur demektir. Eğer kayak tutkunuysanız, Sapanca konaklamak için harika bir üs noktasıdır. Kartepe Kayak Merkezi'ne araçla sadece 20-25 dakikada ulaşabilirsiniz.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <img src="https://images.pexels.com/photos/848595/pexels-photo-848595.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kayak" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Kartepe'de Kayak Keyfi</h3>
          <p class="text-lg leading-relaxed">Günübirlik kayak yapıp, akşam Sapanca'nın ılıman iklimine ve konforlu otellerine dönmek akıllıca bir tercihtir. Kartepe zirvesinden Sapanca Gölü'nü izlemek paha biçilemez bir deneyimdir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Şömine Başı Sohbetleri</h3>
          <p class="text-lg leading-relaxed">Kayak yapmasanız bile, kar yağarken sıcak çikolatanızı yudumlamak veya sucuk ekmek partilerine katılmak için bölge harika seçenekler sunar.</p>
        </div>
      </div>
    `
  },
  {
    title: "Doğanın Kalbinde: Maşukiye ve Sapanca Gezi Rehberi",
    slug: "masukiye-sapanca-gezi-rehberi",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Şelaleler, alabalık vadisi ve yeşilin her tonu. Sapanca'nın komşusu Maşukiye'yi ve bölgedeki doğal güzellikleri keşfediyoruz.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <img src="https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Şelale" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Aşıklar Köyü: Maşukiye</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca'ya kadar gelmişken Maşukiye'ye uğramamak olmaz. Adını 'Maşuk' (Aşık) kelimesinden alan bu şirin belde, şelaleleri ve gürül gürül akan dereleriyle meşhurdur.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <img src="https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Alabalık" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Ne Yenir?</h3>
          <p class="text-lg leading-relaxed">Maşukiye denince akla kiremitte alabalık ve mantar gelir. Dere üzerine kurulmuş ahşap platformlarda yemek yemek, bölgenin klasiğidir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Aktiviteler</h3>
          <p class="text-lg leading-relaxed">Biraz adrenalin arıyorsanız, Maşukiye-Kartepe yolu üzerinde ATV safari turlarına katılabilir veya Zipline ile ormanın üzerinden uçabilirsiniz. Doğayı daha sakin yaşamak isteyenler içinse sayısız trekking parkuru mevcut.</p>
        </div>
      </div>
    `
  },
  {
    title: "Çocuklu Aileler İçin Sapanca: Parklar, Bahçeler ve Aktiviteler",
    slug: "cocuklu-aileler-icin-sapanca",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Çocuklar sıkılmasın, ebeveynler dinlensin. Ormanya Doğal Yaşam Parkı'ndan hayvanat bahçelerine, ailece yapılacak en iyi aktiviteler.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
          <img src="https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Çocuklu Aile" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Minik Kaşifler İçin Cennet</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca, çocuk dostu yapısıyla ailelerin favorisidir. Şehrin beton yığınlarından uzaklaşan çocuklar, burada toprağa dokunma ve hayvanları tanıma fırsatı bulur.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Doğa Parkı" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Ormanya: Hobbit Evleri ve Daha Fazlası</h3>
          <p class="text-lg leading-relaxed">Avrupa'nın en büyük doğal yaşam parklarından biri olan Ormanya, Sapanca'ya çok yakındır. Çocuklar buradaki 'Hobbit Evleri'ni gördüğünde büyüleniyor. Ayrıca içerisindeki hayvanat bahçesi ve yürüyüş parkurları tamamen ücretsizdir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Aktivite Parkları</h3>
          <p class="text-lg leading-relaxed">Göl kenarındaki parklarda uçurtma uçurabilir, göl bisikletlerine binebilirsiniz. Bölgedeki birçok otel ve restoran da çocuk oyun alanlarına sahiptir.</p>
        </div>
      </div>
    `
  },
  {
    title: "Romantik Rota: Sevgililer İçin Sapanca Rehberi",
    slug: "romantik-sapanca-sevgililer-gunu",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Baş başa kalmak, gün batımını izlemek ve romantik bir akşam yemeği yemek isteyen çiftler için Sapanca'nın en özel önerileri.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
          <img src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Romantik" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Aşkın Doğadaki Hali</h2>
          <p class="text-lg leading-relaxed text-gray-700">İster Sevgililer Günü olsun, ister sıradan bir hafta sonu; Sapanca çiftler için her zaman romantik bir kaçış noktasıdır. Doğanın sessizliği, birbirinize daha çok vakit ayırmanızı sağlar.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Romantik Aktiviteler</h3>
          <ul class="space-y-3 text-lg">
            <li><strong>Göl Kenarında Piknik:</strong> Sandalyelerinizi alın ve gün batımında gölün kızıla çalan renklerini izleyin.</li>
            <li><strong>Spa ve Masaj:</strong> Bölgedeki lüks otellerin spa merkezlerinde çift masajı ile yorgunluk atın.</li>
            <li><strong>Şık Akşam Yemekleri:</strong> Kırkpınar ve göl hattında, mum ışığında yemek yiyebileceğiniz İtalyan restoranları ve şarap evleri mevcut.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: "Keşfedilmemiş Rotalar: Sapanca'nın Gizli Köyleri",
    slug: "sapanca-gizli-koyler-dogal-guzellikler",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Herkesin gittiği yerlerden sıkılanlara... Yanık Köyü, Kurtköy ve Sapanca'nın arka sokaklarında doğa ile baş başa kalacağınız rotalar.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 border border-green-100">
          <img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gizli Köy" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Kalabalıktan Uzak, Doğaya Yakın</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca merkezi özellikle hafta sonları kalabalık olabilir. Ancak direksiyonu biraz dağlara ve köylere kırdığınızda, bambaşka bir Sapanca ile karşılaşırsınız.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Yanık Köyü</h3>
          <p class="text-lg leading-relaxed">Fidanlıklarıyla ünlü bu köy, yeşilin her tonunu barındırır. Köy yollarında yürüyüş yapmak, ciğerlerinizi bayram ettirecek. Ayrıca burada yerel halkın sattığı taze meyve ve sebzelerden alabilirsiniz.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <img src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dere" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Kurtköy Deresi</h3>
          <p class="text-lg leading-relaxed">Daha az bilinen bu bölge, doğa fotoğrafçıları için gizli bir cennettir. Dere kenarında sakin bir yürüyüş, meditasyon etkisi yaratır.</p>
        </div>
      </div>
    `
  },
  {
    title: "Sapanca'ya Nasıl Gidilir? Hızlı Tren ve Araçla Ulaşım",
    slug: "sapanca-ulasim-rehberi",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/163726/belgium-antwerp-central-station-landmark-163726.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "İstanbul ve Ankara'dan Sapanca'ya ulaşımın en kolay yolları. Yüksek Hızlı Tren (YHT) durakları, otoban çıkışları ve yol tarifi.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
          <img src="https://images.pexels.com/photos/163726/belgium-antwerp-central-station-landmark-163726.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tren" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Yolculuk Planı</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca'nın bu kadar popüler olmasının ana sebebi ulaşım kolaylığıdır. İster özel aracınızla ister toplu taşımayla bölgeye çok rahat ulaşabilirsiniz.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Özel Araç ile Ulaşım</h3>
          <p class="text-lg leading-relaxed">İstanbul'dan TEM otoyolunu kullanarak yaklaşık 1.5 saatte Sapanca gişelerine varabilirsiniz. Yolun büyük kısmı otoban olduğu için sürüş oldukça konforludur.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Yüksek Hızlı Tren (YHT)</h3>
          <p class="text-lg leading-relaxed">Araba kullanmak istemeyenler için YHT harika bir seçenektir. İstanbul (Söğütlüçeşme/Pendik) - Arifiye hattını kullanıp, Arifiye durağında inebilirsiniz. Buradan Sapanca merkeze taksi veya minibüsle geçmek sadece 10-15 dakika sürer. Ayrıca Adapazarı Ekspresi de direkt Sapanca durağında durmaktadır.</p>
        </div>
      </div>
    `
  },
  {
    title: "Sapanca'da Ne Yenir? Islama Köfteden Kabak Tatlısına Lezzet Turu",
    slug: "sapanca-yeme-icme-rehberi",
    location: "Sapanca",
    cover_image_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: "Sapanca mutfağı sadece kahvaltıdan ibaret değil! Islama köfte nerede yenir, en iyi kabak tatlısı kime aittir? Bölgenin gurme haritası.",
    published_at: new Date().toISOString(),
    content: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
          <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Yemek" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Damak Çatlatan Lezzetler</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sakarya mutfağının etkisindeki Sapanca'da, kiremitte pişen lezzetlerin yanı sıra yöresel tatlar da ön plandadır.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <img src="https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Köfte" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Islama Köfte</h3>
          <p class="text-lg leading-relaxed">Bölgeye gelip de Islama Köfte yemeden dönmek olmaz. Kemik suyu ve toz biberle hazırlanan soslu ekmeklerin üzerinde servis edilen bu köfte, tam bir lezzet şölenidir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Kabak Tatlısı</h3>
          <p class="text-lg leading-relaxed">Adapazarı kabağı meşhurdur. Sapanca'daki restoranlarda yemeğin üzerine, bol cevizli ve tahinli, fırında pişmiş kabak tatlısı mutlaka ikram edilir veya menüde bulunur.</p>
        </div>

        <div class="cove-card bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Çerkez Tavuğu ve Mısır Ekmeği</h3>
          <p class="text-lg leading-relaxed">Bölgedeki Çerkez nüfusunun etkisiyle, birçok restoranda nefis Çerkez tavuğu ve taze mısır ekmeği bulabilirsiniz.</p>
        </div>
      </div>
    `
  }
];

async function seedArticles() {
  console.log('🌱 Sapanca makaleleri yükleniyor...');

  for (const article of articles) {
    const { error } = await supabase
      .from('articles')
      .upsert(article, { onConflict: 'slug' });

    if (error) {
      console.error(`❌ Hata oluştu (${article.title}):`, error.message);
    } else {
      console.log(`✅ Eklendi: ${article.title}`);
    }
  }

  console.log('✨ Seed işlemi tamamlandı!');
}

seedArticles();
