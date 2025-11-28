import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'GNK Otel Rehberi gizlilik politikası ve kişisel veri koruma uygulamaları',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="prose prose-zinc max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
        Gizlilik Politikası
      </h1>

      <p className="text-zinc-600 text-lg mb-8">
        Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
      </p>

      <p className="text-zinc-700 leading-relaxed text-lg">
        GNK Otel Rehberi (&quot;GNK&quot;, &quot;biz&quot;, &quot;bizim&quot;) olarak kullanıcılarımızın
        gizliliğine önem veriyoruz. Bu gizlilik politikası, hangi verileri topladığımızı, nasıl kullandığımızı
        ve haklarınızı açıklamaktadır.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. Topladığımız Bilgiler</h2>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">1.1. Otomatik Toplanan Veriler</h3>
        <p className="text-zinc-700 leading-relaxed">
          Sitemizi ziyaret ettiğinizde, aşağıdaki bilgiler otomatik olarak toplanabilir:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, işletim sistemi, cihaz bilgileri</li>
          <li><strong>Kullanım Bilgileri:</strong> Ziyaret edilen sayfalar, tıklama verileri, oturum süresi</li>
          <li><strong>Lokasyon Bilgileri:</strong> Genel coğrafi konum (şehir/ülke seviyesi)</li>
          <li><strong>Referans Bilgileri:</strong> Sitemize hangi kaynaktan geldiğiniz</li>
        </ul>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">1.2. Gönüllü Olarak Sağlanan Veriler</h3>
        <p className="text-zinc-700 leading-relaxed">
          Bazı hizmetleri kullanırken şu bilgileri isteyebiliriz:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>İletişim Bilgileri:</strong> E-posta adresi (bülten kayıtları için)</li>
          <li><strong>İletişim Mesajları:</strong> İletişim formları üzerinden gönderilen mesajlar</li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
          <p className="text-blue-900 mb-0">
            <strong>Önemli:</strong> GNK bir rezervasyon platformu olmadığı için ödeme bilgileri,
            kredi kartı bilgileri veya rezervasyon detayları toplamaz ve saklamaz.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. Verilerin Kullanım Amaçları</h2>
        <p className="text-zinc-700 leading-relaxed">
          Topladığımız verileri şu amaçlarla kullanırız:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Site İyileştirme:</strong> Kullanıcı deneyimini analiz etmek ve geliştirmek</li>
          <li><strong>İçerik Optimizasyonu:</strong> Hangi otellerin ve bölgelerin popüler olduğunu anlamak</li>
          <li><strong>Teknik Bakım:</strong> Hataları tespit etmek ve performansı iyileştirmek</li>
          <li><strong>İletişim:</strong> Sorularınızı yanıtlamak ve destek sağlamak (iletişim formları için)</li>
          <li><strong>Bülten:</strong> İzin vermeniz halinde otel önerileri ve güncellemeler göndermek</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. Üçüncü Taraflarla Paylaşım</h2>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
          <p className="text-green-900 mb-0">
            <strong>Kesin Garanti:</strong> Kişisel verileriniz satılmaz, kiralanmaz veya pazarlama
            amacıyla üçüncü taraflara aktarılmaz.
          </p>
        </div>

        <p className="text-zinc-700 leading-relaxed">
          Ancak, aşağıdaki durumlarda sınırlı veri paylaşımı olabilir:
        </p>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">3.1. Analitik Hizmetler</h3>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Google Analytics:</strong> Anonim site trafiği ve kullanım istatistikleri</li>
          <li><strong>Vercel Analytics:</strong> Performans ve hata izleme</li>
        </ul>
        <p className="text-zinc-700 leading-relaxed">
          Bu servisler sizi şahsen tanımlayamaz, sadece toplu istatistikler üretir.
        </p>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">3.2. Yasal Yükümlülükler</h3>
        <p className="text-zinc-700 leading-relaxed">
          Yasal bir zorunluluk, mahkeme kararı veya resmi talep olması durumunda bilgi paylaşabiliriz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. Çerezler (Cookies)</h2>
        <p className="text-zinc-700 leading-relaxed">
          Sitemiz çerezler kullanır. Çerez kullanımı hakkında detaylı bilgi için{' '}
          <a href="/cerez-politikasi" className="text-zinc-900 font-semibold hover:underline">
            Çerez Politikası
          </a>
          {' '}sayfasını inceleyebilirsiniz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. Veri Güvenliği</h2>
        <p className="text-zinc-700 leading-relaxed">
          Verilerinizin güvenliği için teknik ve idari önlemler alıyoruz:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>SSL şifreleme (HTTPS protokolü)</li>
          <li>Güvenli sunucu altyapısı</li>
          <li>Düzenli güvenlik güncellemeleri</li>
          <li>Sınırlı erişim yetkilendirmesi</li>
        </ul>
        <p className="text-zinc-700 leading-relaxed">
          Ancak, internet üzerinden veri aktarımının %100 güvenli olmadığını unutmayın.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">6. Veri Saklama Süresi</h2>
        <p className="text-zinc-700 leading-relaxed">
          Verilerinizi yalnızca gerekli olduğu sürece saklarız:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Analitik Veriler:</strong> Genellikle 14-26 ay</li>
          <li><strong>Bülten E-postaları:</strong> Abonelikten çıkana kadar</li>
          <li><strong>İletişim Kayıtları:</strong> Yasal sürelere uygun olarak</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">7. Kullanıcı Hakları</h2>
        <p className="text-zinc-700 leading-relaxed">
          Kişisel verileriniz ile ilgili aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Erişim Hakkı:</strong> Hangi verilerinizin saklandığını öğrenme</li>
          <li><strong>Düzeltme Hakkı:</strong> Yanlış verilerin düzeltilmesini isteme</li>
          <li><strong>Silme Hakkı:</strong> Verilerinizin silinmesini talep etme</li>
          <li><strong>İtiraz Hakkı:</strong> Veri işlemeye itiraz etme</li>
          <li><strong>Taşınabilirlik Hakkı:</strong> Verilerinizi başka bir platforma aktarma</li>
        </ul>
        <p className="text-zinc-700 leading-relaxed">
          Bu haklarınızı kullanmak için{' '}
          <a href="mailto:info@gnkoteller.com" className="text-zinc-900 font-semibold hover:underline">
            info@gnkoteller.com
          </a>
          {' '}adresinden iletişime geçebilirsiniz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">8. Çocukların Gizliliği</h2>
        <p className="text-zinc-700 leading-relaxed">
          Sitemiz 18 yaş altı kullanıcılara yönelik değildir. Bilerek 18 yaş altı çocuklardan
          veri toplamıyoruz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">9. Politika Değişiklikleri</h2>
        <p className="text-zinc-700 leading-relaxed">
          Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada
          yayınlandığında geçerli olur. Önemli değişikliklerde e-posta ile bilgilendirebiliriz.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">10. İletişim</h2>
        <p className="text-zinc-700 leading-relaxed">
          Gizlilik politikamız veya verileriniz hakkında sorularınız için:
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
          Bu gizlilik politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve
          GDPR (Genel Veri Koruma Yönetmeliği) gerekliliklerine uygun olarak hazırlanmıştır.
        </p>
      </div>
    </article>
  );
}
