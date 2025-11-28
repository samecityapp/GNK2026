import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'GNK Otel Rehberi çerez kullanımı ve yönetimi politikası',
};

export default function CookiePolicyPage() {
  return (
    <article className="prose prose-zinc max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
        Çerez (Cookie) Politikası
      </h1>

      <p className="text-zinc-600 text-lg mb-8">
        Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
      </p>

      <p className="text-zinc-700 leading-relaxed text-lg">
        Bu çerez politikası, GNK Otel Rehberi web sitesinde kullanılan çerezlerin türlerini,
        amaçlarını ve yönetim seçeneklerini açıklamaktadır.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. Çerez Nedir?</h2>
        <p className="text-zinc-700 leading-relaxed">
          Çerezler (cookies), web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, telefon)
          kaydedilen küçük metin dosyalarıdır. Çerezler, web sitelerinin düzgün çalışması, kullanıcı
          deneyiminin iyileştirilmesi ve site trafiğinin analiz edilmesi için kullanılır.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <p className="text-blue-900 mb-0">
            <strong>Önemli:</strong> Çerezler sizi kişisel olarak tanımlayamaz. Çerezler virüs
            içermez ve cihazınıza zarar vermez.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. Kullandığımız Çerez Türleri</h2>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">2.1. Zorunlu Çerezler</h3>
        <p className="text-zinc-700 leading-relaxed">
          Bu çerezler, web sitesinin temel işlevlerinin çalışması için gereklidir:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Oturum Çerezleri:</strong> Sayfalar arasında gezinmenizi sağlar</li>
          <li><strong>Tercih Çerezleri:</strong> Dil ve bölge tercihlerinizi hatırlar</li>
          <li><strong>Güvenlik Çerezleri:</strong> Sitedeki güvenlik özelliklerini destekler</li>
        </ul>
        <p className="text-zinc-700 leading-relaxed">
          <strong>Bu çerezler devre dışı bırakılamaz</strong> çünkü site bunlar olmadan çalışamaz.
        </p>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">2.2. Performans ve Analitik Çerezleri</h3>
        <p className="text-zinc-700 leading-relaxed">
          Bu çerezler, site kullanımını anlamamıza ve iyileştirmemize yardımcı olur:
        </p>

        <div className="bg-zinc-50 p-6 rounded-lg my-4 border border-zinc-200">
          <h4 className="font-semibold text-zinc-900 mb-2">Google Analytics</h4>
          <ul className="text-zinc-700 space-y-1 text-sm">
            <li><strong>Amaç:</strong> Ziyaretçi sayısı, sayfa görüntülemeleri, trafik kaynakları analizi</li>
            <li><strong>Süre:</strong> 2 yıl</li>
            <li><strong>Gizlilik:</strong> IP adresleri anonimleştirilir, kişisel veri saklanmaz</li>
          </ul>
        </div>

        <div className="bg-zinc-50 p-6 rounded-lg my-4 border border-zinc-200">
          <h4 className="font-semibold text-zinc-900 mb-2">Vercel Analytics</h4>
          <ul className="text-zinc-700 space-y-1 text-sm">
            <li><strong>Amaç:</strong> Site performansı, yükleme süreleri, teknik hatalar</li>
            <li><strong>Süre:</strong> 24 saat - 30 gün</li>
            <li><strong>Gizlilik:</strong> Tamamen anonim, kişisel veri toplamaz</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">2.3. İşlevsellik Çerezleri</h3>
        <p className="text-zinc-700 leading-relaxed">
          Kullanıcı tercihlerinizi hatırlar:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Arama filtreleriniz (lokasyon, fiyat aralığı)</li>
          <li>Görüntüleme tercihleri (liste/harita görünümü)</li>
          <li>Çerez tercih ayarlarınız</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. Kullanmadığımız Çerezler</h2>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
          <p className="text-green-900">
            <strong>GNK şu çerez türlerini KULLANMAZ:</strong>
          </p>
          <ul className="text-green-900 space-y-1 mt-2 mb-0">
            <li>❌ Reklam çerezleri (hedefli reklamcılık)</li>
            <li>❌ Sosyal medya takip çerezleri</li>
            <li>❌ Üçüncü taraf pazarlama çerezleri</li>
            <li>❌ Davranışsal profilleme çerezleri</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. Çerezlerin Süreleri</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-zinc-300 my-6">
            <thead className="bg-zinc-100">
              <tr>
                <th className="border border-zinc-300 px-4 py-2 text-left font-semibold">Çerez Türü</th>
                <th className="border border-zinc-300 px-4 py-2 text-left font-semibold">Süre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Oturum Çerezleri</td>
                <td className="border border-zinc-300 px-4 py-2">Tarayıcı kapanınca silinir</td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 px-4 py-2">Tercih Çerezleri</td>
                <td className="border border-zinc-300 px-4 py-2">30 gün - 1 yıl</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 px-4 py-2">Analitik Çerezleri</td>
                <td className="border border-zinc-300 px-4 py-2">14 ay - 2 yıl</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. Çerezleri Nasıl Yönetebilirsiniz?</h2>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">5.1. Tarayıcı Ayarları</h3>
        <p className="text-zinc-700 leading-relaxed">
          Çoğu tarayıcı çerezleri otomatik kabul eder, ancak ayarlardan kontrol edebilirsiniz:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler ve diğer site verileri</li>
          <li><strong>Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
          <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler ve web sitesi verileri</li>
          <li><strong>Edge:</strong> Ayarlar → Gizlilik, arama ve hizmetler → Çerezler</li>
        </ul>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-lg">
          <p className="text-amber-900 mb-0">
            <strong>Uyarı:</strong> Çerezleri tamamen devre dışı bırakırsanız, bazı site
            özellikleri düzgün çalışmayabilir.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">5.2. Google Analytics Devre Dışı Bırakma</h3>
        <p className="text-zinc-700 leading-relaxed">
          Google Analytics&apos;ten çıkmak için{' '}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 font-semibold hover:underline"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          {' '}kullanabilirsiniz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">6. Üçüncü Taraf Çerezleri</h2>
        <p className="text-zinc-700 leading-relaxed">
          Sitemizde yer alan bazı bağlantılar (otellerin websiteleri, rezervasyon platformları)
          kendi çerezlerini kullanabilir. Bu çerezlerin politikaları ilgili sitelerin sorumluluğundadır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">7. Çerez Politikası Güncellemeleri</h2>
        <p className="text-zinc-700 leading-relaxed">
          Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişikliklerde sitede bildirim yapılır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">8. İletişim</h2>
        <p className="text-zinc-700 leading-relaxed">
          Çerez politikamız hakkında sorularınız için:
        </p>
        <div className="bg-zinc-100 p-4 rounded-lg my-4">
          <p className="text-zinc-900 font-semibold mb-1">E-posta:</p>
          <a href="mailto:info@gnkoteller.com" className="text-zinc-900 hover:underline">
            info@gnkoteller.com
          </a>
        </div>
      </section>

      <div className="border-t border-zinc-200 mt-12 pt-8">
        <p className="text-sm text-zinc-500 italic">
          Bu çerez politikası, 6698 sayılı KVKK ve Elektronik Ticaretin Düzenlenmesi Hakkında Kanun
          kapsamında hazırlanmıştır.
        </p>
      </div>
    </article>
  );
}
