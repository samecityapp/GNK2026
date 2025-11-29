import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const articles = [
  {
    title: { tr: "Bodrum Plaj Rehberi: Rüzgarı Hesaplamadan Yola Çıkma!" },
    slug: "bodrum-plaj-ve-koylar-rehberi",
    location: "Bodrum",
    cover_image_url: "https://images.unsplash.com/photo-1581430872221-d8baeb6b434a?q=80&w=1000&auto=format&fit=crop",
    meta_description: "Bodrum plajlarını rüzgar durumuna göre seçmek için detaylı rehber. Akyarlar, Karaincir, Ortakent, Mazı ve Akvaryum Koyu.",
    published_at: new Date().toISOString(),
    is_published: true,
    content: { tr: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <img src="https://images.unsplash.com/photo-1581430872221-d8baeb6b434a?q=80&w=1000&auto=format&fit=crop" alt="Bodrum Plaj" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Deniz Keyfini Şansa Bırakma</h2>
          <p class="text-lg leading-relaxed text-gray-700">Bak dostum, Bodrum'a gelip de "Hadi rastgele bir koya gidelim" dersen, kendini kum fırtınasının ortasında veya dalgalarla boğuşurken bulabilirsin. Burası bir yarımada; bir tarafı dayak yerken diğer tarafı çarşaf gibi olur. Formülümüz basit:</p>
        </div>

        <div class="bg-zinc-100 p-6 rounded-xl border-l-4 border-zinc-900 my-6">
          <p class="text-lg font-semibold text-gray-900"><strong>🚩 Altın Kural:</strong> Rüzgar Kuzeyden (Poyraz) esiyorsa rotan Güney koyları (Akyarlar, Ortakent, Bitez). Rüzgar Güneyden (Lodos) esiyorsa rotan Kuzey koyları (Torba, Gölköy, Türkbükü).</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">1. Akyarlar & Karaincir: Maldivler Simülasyonu</h3>
          <p class="text-lg leading-relaxed">Burası Bodrum'un en berrak ama en soğuk suyudur. Abartmıyoruz, suya girerken "çivi" tabirini iliklerinde hissedersin. Ama o kadar temizdir ki 5 metre derinlikteki balığı görürsün. Kumu un gibidir. Çocuklu aileler için sığlığı mükemmeldir. "Ben yüzerim arkadaş, soğuk bana işlemez" diyorsan burası senin cennetin.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Ortakent - Yahşi: Uzun ve Mavi</h3>
          <p class="text-lg leading-relaxed">Bodrum'un en uzun sahil şeridi. Burası tam "Orta Direk" ve aile dostu. Deniz biraz çabuk derinleşir, dikkat. Su sporları (Jet-ski, Rüzgar sörfü) yapmak istiyorsan merkez üssü burasıdır.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Mazı Köyü: Medeniyetten Kaçış</h3>
          <p class="text-lg leading-relaxed">Beach club müzikleri, vale terörü ve giriş ücretleri canını sıktıysa, atla arabana, virajlı yollardan Mazı'ya git. Zeytin ağaçları denize değer. Lüks şezlong yok, hasır şemsiye var. İnceyalı koyunda denize girip, sadece dalga sesi dinlemek ruhuna detoks gibi gelecek.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">4. Akvaryum Koyu: Kara Yolu Yok!</h3>
          <p class="text-lg leading-relaxed">Bitez ile Gümbet arasındaki burunda saklıdır. Yürüyerek gitmek (patikadan) zordur, en güzeli tekneyle gitmek. Adı üzerinde, suyun altı akvaryum gibidir. Şnorkelini almadan gidersen çok üzülürsün.</p>
        </div>
      </div>
    ` }
  },
  {
    title: { tr: "Mavi Yolculuk: Bodrum'u Denizden Keşfetmek (Tekne Turları)" },
    slug: "bodrum-tekne-turu-rehberi",
    location: "Bodrum",
    cover_image_url: "https://images.unsplash.com/photo-1504519626318-2e26f2a91f6b?q=80&w=1000&auto=format&fit=crop",
    meta_description: "Bodrum tekne turları rehberi: Orak Adası, Karaada, Meteor Çukuru ve Tirhandil deneyimi.",
    published_at: new Date().toISOString(),
    is_published: true,
    content: { tr: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
          <img src="https://images.unsplash.com/photo-1504519626318-2e26f2a91f6b?q=80&w=1000&auto=format&fit=crop" alt="Bodrum Tekne Turu" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Arabayla Gidemeyeceğin Cennetler</h2>
          <p class="text-lg leading-relaxed text-gray-700">Bodrum tatilinde bir günü tekneye ayırmazsan, Bodrum'u gördüm deme. Ama "Hangi tekne?" sorusu önemli. Halikarnas iskelesindeki yüksek müzikli "Parti Tekneleri" mi, yoksa sakin bir "Gulet" mi?</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Rota 1: Orak Adası (Instagram Yıldızı)</h3>
          <p class="text-lg leading-relaxed">Son yılların en popüler rotası. Denizin rengi burada fosforlu bir turkuaza döner. Adada yerleşim yok, sadece zeytin ağaçları ve keçiler var. Buraya demir atıp denize atladığında kendini Maldivler'de sanman garanti.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">Rota 2: Meteor Çukuru ve Karaada</h3>
          <p class="text-lg leading-relaxed">Bodrum Kalesi'nin tam karşısındaki büyük ada. Burada denize bir meteor düştüğü söylenir (efsane olsa da hikayesi güzel). Deniz aniden derinleşir ve laciverte döner. Adadaki mağaradan çıkan sıcak kükürtlü suyun cilde iyi geldiği söylenir.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">Özel Bir Deneyim: Tirhandil</h3>
          <p class="text-lg leading-relaxed">Bodrum'a özgü, her iki ucu sivri, yelkenli ahşap teknelere "Tirhandil" denir. Eğer bütçen uygunsa, kalabalık turlar yerine küçük bir tirhandil kirala. Kaptan seni kimsenin bilmediği koylara götürsün, rüzgarı yelkenine doldur. Gerçek "Mavi Yolculuk" budur.</p>
        </div>
      </div>
    ` }
  },
  {
    title: { tr: "Bodrum'da Kültür Turu: Kaleden Zeki Müren'e Tarih" },
    slug: "bodrum-tarihi-yerler-kultur-turu",
    location: "Bodrum",
    cover_image_url: "https://images.unsplash.com/photo-1565097938356-2a76451e8317?q=80&w=1000&auto=format&fit=crop",
    meta_description: "Bodrum tarih ve kültür turu: Bodrum Kalesi, Halikarnas Mozolesi, Zeki Müren Müzesi ve tarihi mekanlar.",
    published_at: new Date().toISOString(),
    is_published: true,
    content: { tr: `
      <div class="space-y-12">
        <div class="cove-card bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100">
          <img src="https://images.unsplash.com/photo-1565097938356-2a76451e8317?q=80&w=1000&auto=format&fit=crop" alt="Bodrum Kale" class="w-full h-64 object-cover rounded-xl mb-6" />
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Halikarnas Balıkçısı'nın İzinde</h2>
          <p class="text-lg leading-relaxed text-gray-700">Bodrum sadece "Lahmacun + Ayran" değildir. Heredot'un doğduğu bu topraklar, binlerce yıllık bir açık hava müzesidir.</p>
        </div>

        <div class="prose-section">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">1. Bodrum Kalesi ve Sualtı Arkeoloji Müzesi</h3>
          <p class="text-lg leading-relaxed">O kalenin sadece dışına bakıp geçmeyin, içine girin. Dünyanın en önemli sualtı arkeoloji müzelerinden biri buradadır. Dünyanın bilinen en eski batığı (Uluburun Batığı) ve içinden çıkan hazineler sergilenir. Kalenin surlarından gün batımını izlemek ise ayrı bir şiirdir.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">2. Halikarnas Mozolesi (Mausoleum)</h3>
          <p class="text-lg leading-relaxed">Bunu çoğu kişi bilmez: <strong>Dünyanın Yedi Harikası'ndan biri</strong> Bodrum'daydı! Kral Mausolos'un anıt mezarı. Büyük depremlerde yıkılmış, taşları Kale yapımında kullanılmış ama kalıntıları hala orada. Mimarlık tarihine "Mozole" kelimesini kazandıran yerdesiniz.</p>

          <h3 class="text-2xl font-semibold text-gray-900 mb-4 mt-8">3. Zeki Müren Sanat Müzesi</h3>
          <p class="text-lg leading-relaxed">"Bodrum'un Paşası" Zeki Müren'in son yıllarını geçirdiği evi, bugün bir müze. Sahne kostümleri, gözlükleri, o meşhur arabası ve özel eşyaları... Evi gezerken hoparlörden sürekli onun şarkıları çalar. İnsanın boğazı düğümlenir, çok özel bir deneyimdir.</p>
        </div>
      </div>
    ` }
  }
];

async function seedBodrumExperience() {
  console.log('🏖️ Bodrum Deneyim (Non-Food) İçerikleri yükleniyor...');

  for (const article of articles) {
    const { error } = await supabase
      .from('articles')
      .upsert(article, { onConflict: 'slug' });

    if (error) {
      console.error(`❌ Hata (${article.slug}):`, error.message);
    } else {
      console.log(`✅ Eklendi: ${article.title.tr}`);
    }
  }
  console.log('✨ Bodrum aktivite rehberi hazır!');
}

seedBodrumExperience();
