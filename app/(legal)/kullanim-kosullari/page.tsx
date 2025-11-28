import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'GNK Otel Rehberi kullanım koşulları ve sorumluluk bildirimi',
};

export default function TermsOfUsePage() {
  return (
    <article className="prose prose-zinc max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
        Kullanım Koşulları
      </h1>

      <p className="text-zinc-600 text-lg mb-8">
        Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
        <h3 className="text-lg font-semibold text-amber-900 mt-0 mb-2">Önemli Uyarı</h3>
        <p className="text-amber-800 mb-0">
          GNK Otel Rehberi, bir rezervasyon acentesi, tur operatörü veya otel işletmecisi değildir.
          Platform sadece bilgilendirme ve yönlendirme hizmeti sunmaktadır.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. Hizmetin Kapsamı</h2>
        <p className="text-zinc-700 leading-relaxed">
          GNK Otel Rehberi (&quot;GNK&quot;, &quot;biz&quot;, &quot;bizim&quot;), kullanıcılara Türkiye&apos;deki
          oteller hakkında bilgi sağlayan bir keşif ve listeleme platformudur. Sitemiz:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Otel bilgileri, fotoğrafları ve özellikleri sunar</li>
          <li>Kullanıcıları otellerin resmi websitelerine veya rezervasyon platformlarına yönlendirir</li>
          <li>Otel puanları ve değerlendirmeleri paylaşır</li>
          <li>Gezi rehberleri ve seyahat tavsiyeleri yayınlar</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. Rezervasyon ve Ödeme Sorumluluğu</h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-red-900 mt-0 mb-2">Kritik Madde</h3>
          <p className="text-red-800 mb-0">
            <strong>GNK bir rezervasyon acentesi değildir.</strong> Sitede yer alan fiyatlar, müsaitlik bilgileri
            ve otel özellikleri yalnızca bilgilendirme amaçlıdır. Nihai rezervasyon, ödeme ve hizmet ilişkisi,
            kullanıcı ile yönlendirilen otelin veya rezervasyon platformunun kendi sistemleri üzerinden gerçekleşir.
          </p>
        </div>

        <p className="text-zinc-700 leading-relaxed">
          GNK üzerinden bir otele tıkladığınızda:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Otelin resmi websitesine veya Booking.com, Hotels.com gibi üçüncü taraf rezervasyon sitelerine yönlendirilirsiniz</li>
          <li>Rezervasyon işlemi o platformda tamamlanır</li>
          <li>Ödeme bilgileriniz o platforma girilir, GNK&apos;ye değil</li>
          <li>İptal, değişiklik ve iade süreçleri o platformun politikalarına tabidir</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. Sorumluluk Reddi</h2>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">3.1. Fiyat ve Müsaitlik Değişiklikleri</h3>
        <p className="text-zinc-700 leading-relaxed">
          Sitemizde gösterilen fiyatlar ve müsaitlik bilgileri, otel veya rezervasyon platformları tarafından
          güncel tutulmaya çalışılsa da, gerçek zamanlı olmayabilir. <strong>GNK, yönlendirilen sitelerdeki
          fiyat değişikliklerinden, fiyat farklarından veya müsaitlik durumundan sorumlu değildir.</strong>
        </p>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">3.2. Hizmet Kalitesi ve İçerik Doğruluğu</h3>
        <p className="text-zinc-700 leading-relaxed">
          Otel açıklamaları, fotoğrafları ve özellikleri iyi niyetle derlenmiş olsa da, GNK:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Otellerin sunduğu hizmetlerin kalitesini garanti etmez</li>
          <li>Otellerdeki konaklama deneyiminizden sorumlu değildir</li>
          <li>Otel fotoğraflarının veya açıklamalarının %100 güncel olduğunu garanti etmez</li>
          <li>Üçüncü taraf rezervasyon platformlarının politikalarından sorumlu tutulamaz</li>
        </ul>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">3.3. İptal ve İade</h3>
        <p className="text-zinc-700 leading-relaxed">
          Rezervasyon iptalleri, değişiklikleri ve iadeler tamamen yönlendirilen platformun veya otelin
          kendi politikalarına tabidir. <strong>GNK bu süreçlerde aracı değildir ve iptal/iade taleplerinde
          muhatap alınamaz.</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. Kullanıcı Sorumlulukları</h2>
        <p className="text-zinc-700 leading-relaxed">
          Sitemizi kullanarak şunları kabul edersiniz:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Rezervasyon yapmadan önce ilgili platformun şartlarını okuyacağınızı</li>
          <li>Fiyat ve koşulları yönlendirildiğiniz sitede tekrar kontrol edeceğinizi</li>
          <li>GNK&apos;nin bir aracı kurum olmadığını anladığınızı</li>
          <li>Site içeriğini kişisel kullanım dışında ticari amaçla kullanmayacağınızı</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. Fikri Mülkiyet Hakları</h2>
        <p className="text-zinc-700 leading-relaxed">
          Site içeriği (logo, tasarım, metin, fotoğraflar) GNK&apos;nin veya lisans verenlerin mülkiyetindedir.
          İzinsiz kopyalama, çoğaltma veya dağıtım yasaktır.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">6. Bağlantı Politikası</h2>
        <p className="text-zinc-700 leading-relaxed">
          Sitemiz üçüncü taraf websitelerine bağlantılar içerir. Bu sitelerin içeriği, gizlilik politikaları
          veya uygulamalarından GNK sorumlu değildir. Bağlantılara tıkladığınızda o sitenin şartlarını kabul
          etmiş sayılırsınız.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">7. Değişiklikler</h2>
        <p className="text-zinc-700 leading-relaxed">
          GNK, bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar.
          Değişiklikler bu sayfada yayınlandığı anda geçerli olur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">8. Uygulanacak Hukuk</h2>
        <p className="text-zinc-700 leading-relaxed">
          Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Ortaya çıkabilecek anlaşmazlıklarda
          Türkiye mahkemeleri yetkilidir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">9. İletişim</h2>
        <p className="text-zinc-700 leading-relaxed">
          Kullanım koşulları hakkında sorularınız için:{' '}
          <a href="mailto:info@gnkoteller.com" className="text-zinc-900 font-semibold hover:underline">
            info@gnkoteller.com
          </a>
        </p>
      </section>

      <div className="border-t border-zinc-200 mt-12 pt-8">
        <p className="text-sm text-zinc-500 italic">
          Bu kullanım koşullarını kabul ederek, GNK&apos;nin bir bilgilendirme platformu olduğunu
          ve rezervasyon/ödeme süreçlerinde taraf olmadığını onaylamış sayılırsınız.
        </p>
      </div>
    </article>
  );
}
