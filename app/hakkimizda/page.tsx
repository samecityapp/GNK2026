import { Metadata } from 'next';
import { Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'GNK Otel Rehberi - Türkiye\'nin en seçkin butik otel kürasyon platformu',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <article className="prose prose-zinc max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-8">
            Biz Kimiz?
          </h1>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                  Hikayemiz, sosyal medyada yüz binlerce seyahatsevere ilham veren{' '}
                  <a
                    href="https://www.instagram.com/geceligi.ne.kadar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <Instagram className="w-4 h-4" />
                    @geceligi.ne.kadar
                  </a>
                  {' '}ve{' '}
                  <a
                    href="https://www.instagram.com/turkeyandhotels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <Instagram className="w-4 h-4" />
                    @turkeyandhotels
                  </a>
                  {' '}platformlarıyla başladı.
                </p>

                <p className="text-lg text-zinc-700 leading-relaxed mb-0">
                  Tam <strong className="text-zinc-900">10 yıldır</strong>, Türkiye&apos;nin en prestijli,
                  butik ve özel otellerini bizzat yerinde deneyimliyor, sadece &quot;en iyileri&quot; titizlikle
                  seçiyor ve tanıtıyoruz. Bu on yıllık birikimi ve güveni, şimdi dijital bir kürasyon
                  platformuna dönüştürmenin heyecanını yaşıyoruz.
                </p>
              </div>

              <div className="w-full md:w-48 shrink-0">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg
                        className="w-16 h-16 mx-auto mb-3 text-zinc-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <p className="text-xs text-zinc-500 font-medium">
                        Kurucumuz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">
              GNK (Gez, Nerede Kal) Nedir?
            </h3>

            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              GNK, sıradan bir otel rezervasyon sitesi değildir. Burası,{' '}
              <strong className="text-zinc-900">seçilmiş</strong> bir koleksiyondur.
            </p>

            <div className="bg-zinc-100 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-zinc-900 mb-3">Misyonumuz:</h4>
              <p className="text-zinc-700 leading-relaxed mb-0">
                Kalabalıkların değil, &quot;bilenlerin&quot; tercih ettiği yerleri keşfetmek.
                Yüzlerce vasat otel arasında kaybolmanızı engellemek; sadece karakteri, hikayesi
                ve ruhu olan işletmeleri listelemek. Algoritmaların değil,{' '}
                <strong className="text-zinc-900">gerçek deneyimin</strong> küratörlüğünü sunmak.
              </p>
            </div>

            <div className="bg-zinc-100 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-zinc-900 mb-3">Vizyonumuz:</h4>
              <p className="text-zinc-700 leading-relaxed mb-0">
                Türkiye&apos;nin turizm potansiyelini modern, şık ve güvenilir bir arayüzle dünyaya sunmak.
                Seyahat planı yapan herkesin <em>&quot;Acaba nerede kalsam?&quot;</em> sorusuna,
                en doğru ve en rafine cevabı veren tek adres olmak.
              </p>
            </div>
          </section>

          <div className="border-t border-zinc-200 pt-8">
            <p className="text-lg text-zinc-600 leading-relaxed text-center italic">
              Bizi takip ettiğiniz ve güvendiğiniz için teşekkürler.
            </p>
          </div>

          <div className="mt-12 bg-zinc-900 rounded-xl p-8 text-center">
            <h4 className="text-xl font-semibold text-white mb-4">
              Sosyal Medyada Bizi Takip Edin
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/geceligi.ne.kadar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @geceligi.ne.kadar
              </a>
              <a
                href="https://www.instagram.com/turkeyandhotels/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @turkeyandhotels
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-600 mb-4">
              Bizimle iletişime geçmek ister misiniz?
            </p>
            <a
              href="mailto:info@gnkoteller.com"
              className="text-zinc-900 hover:underline font-semibold text-lg"
            >
              info@gnkoteller.com
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
