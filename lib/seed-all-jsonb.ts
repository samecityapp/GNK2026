import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

const toLocalized = (text: string) => ({ tr: text });

const sapancaArticles = [
  {
    title: toLocalized("Sapanca'nın En İyi Kahvaltı Mekanları ve Serpme Kahvaltı Durakları"),
    slug: "sapanca-kahvalti-mekanlari-rehberi",
    location: toLocalized("Sapanca"),
    cover_image_url: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: toLocalized("Göl manzarasına karşı organik ürünlerle dolu bir masa... Sapanca'da güne başlamanın en lezzetli yollarını ve en iyi serpme kahvaltı mekanlarını sizin için derledik."),
    published_at: new Date().toISOString(),
    content: toLocalized(`
      <div class="space-y-12">
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
          <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sapanca Kahvaltı" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Güne Muhteşem Bir Başlangıç</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca denilince akla ilk gelen şeylerden biri, kuş sesleri eşliğinde yapılan uzun ve keyifli kahvaltılardır. Özellikle Kırkpınar ve Maşukiye hattında, doğanın tam kalbinde yer alan mekanlar, sadece karın doyurmak için değil, ruhu doyurmak için de birebir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Neden Sapanca Kahvaltısı?</h3>
          <p class="text-lg leading-relaxed">Bölgenin kahvaltı kültürünü özel kılan şey, yerel üreticilerden gelen taze ürünlerdir. Çerkez peynirleri, ev yapımı reçeller, sıcak bazlamalar ve tabii ki kiremitte eritilmiş tereyağlı mantarlar...</p>
        </div>

        <div class="bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">En Popüler Lokasyonlar</h3>
          <ul class="space-y-3 text-lg">
            <li><strong>Kırkpınar Bağdat Caddesi:</strong> Daha butik ve şık kafelerin olduğu bölge.</li>
            <li><strong>Göl Kenarı:</strong> Maviyle yeşilin buluştuğu, manzaralı mekanlar.</li>
            <li><strong>Natürköy & Sopeli Tarafları:</strong> Şelale sesleri eşliğinde tam bir doğa deneyimi.</li>
          </ul>
          <p class="text-lg leading-relaxed mt-4">Hafta sonu yer bulmak zor olabilir, bu yüzden GNK üzerinden bölgedeki otellerde konaklayarak sabahın erken saatlerinin tadını çıkarmanızı öneririz.</p>
        </div>
      </div>
    `)
  },
  {
    title: toLocalized("Sapanca Kırkpınar: Bağdat Caddesi'nin Yeşil Versiyonu"),
    slug: "sapanca-kirkpinar-gezi-rehberi",
    location: toLocalized("Sapanca"),
    cover_image_url: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: toLocalized("Sanat atölyeleri, üçüncü dalga kahveciler ve yemyeşil sokaklar. İstanbul'un kaosundan uzak ama bir o kadar da modern: Kırkpınar'ı keşfediyoruz."),
    published_at: new Date().toISOString(),
    content: toLocalized(`
      <div class="space-y-12">
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
          <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kırkpınar" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Yeşilin İçindeki Modernite: Kırkpınar</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca'nın en nezih mahallesi olarak bilinen Kırkpınar, son yıllarda geçirdiği dönüşümle adeta bir açık hava yaşam merkezine dönüştü. Bağdat Caddesi'ni andıran ama egzoz dumanı yerine ıhlamur kokusu barındıran bu bölge, yürüyüş yapmak isteyenler için ideal.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Neler Yapılır?</h3>
          <p class="text-lg leading-relaxed">Eski havaalanı arazisinin geniş yürüyüş parkurlarında sabah sporu yapabilir, ardından bölgedeki butik kahvecilerde kitabınızı okuyabilirsiniz. Kırkpınar ayrıca sanat atölyeleri ve seramik kurslarıyla da ünlüdür.</p>
        </div>

        <div class="bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Alışveriş ve Yeme İçme</h3>
          <p class="text-lg leading-relaxed">Burada zincir marketlerden ziyade, el yapımı ürünler satan dükkanlar ön plandadır. Organik pazarlar ve tasarım butikleri, alışveriş tutkunları için harika seçenekler sunar.</p>
        </div>
      </div>
    `)
  },
  {
    title: toLocalized("Göl Kenarında Huzur: Sapanca Yürüyüş ve Bisiklet Rotaları"),
    slug: "sapanca-gol-kenari-yuruyus-bisiklet",
    location: toLocalized("Sapanca"),
    cover_image_url: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200",
    meta_description: toLocalized("Pedalları huzura çevirin. Sapanca Gölü'nün çevresindeki en iyi yürüyüş parkurları ve bisiklet kiralama noktaları bu rehberde."),
    published_at: new Date().toISOString(),
    content: toLocalized(`
      <div class="space-y-12">
        <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bisiklet" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Mavinin Kıyısında Aktivite</h2>
          <p class="text-lg leading-relaxed text-gray-700">Sapanca Gölü, sadece izlemek için değil, yaşamak için de harika bir atmosfer sunar. Yaklaşık 16 kilometrelik sahil şeridi, son yıllarda yapılan düzenlemelerle mükemmel bir rekreasyon alanına dönüştü.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Bisiklet Kiralama İpuçları</h3>
          <p class="text-lg leading-relaxed">Göl kenarında birçok bisiklet kiralama noktası bulunuyor. Saatlik ücretler 50-100 TL arasında değişiyor. Hafta içi giderseniz daha uygun fiyatlarla kiralayabilirsiniz.</p>
        </div>

        <div class="bg-white rounded-2xl p-8 border border-gray-100">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Önerilen Güzergahlar</h3>
          <ul class="space-y-3 text-lg">
            <li><strong>Göl Turu (16 km):</strong> Tüm gölü çevrelemek isterseniz yaklaşık 2 saat sürer.</li>
            <li><strong>Kısa Rota (5 km):</strong> Sapanca merkez - Kırkpınar arası, aileler için ideal.</li>
            <li><strong>Doğa Rotası (8 km):</strong> Gölden biraz uzaklaşıp orman içine girer, daha macera dolu.</li>
          </ul>
        </div>
      </div>
    `)
  }
];

async function seedArticles() {
  console.log('🌱 Starting article seed...');

  for (const article of sapancaArticles) {
    try {
      const { data, error } = await supabase
        .from('articles')
        .upsert(article, { onConflict: 'slug' })
        .select();

      if (error) {
        console.error(`❌ Error seeding article "${article.slug}":`, error);
      } else {
        console.log(`✅ Seeded article: ${article.slug}`);
      }
    } catch (err) {
      console.error(`❌ Exception seeding article "${article.slug}":`, err);
    }
  }
}

async function main() {
  try {
    await seedArticles();
    console.log('✅ All articles seeded successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  }
}

main();
