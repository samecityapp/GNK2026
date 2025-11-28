import { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Award, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'GNK Oteller hakkında - Biz kimiz, neler yapıyoruz ve vizyonumuz',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Türkiye&apos;nin En Güvenilir Otel Rehberi
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Biz Kimiz?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                GNK Oteller, Türkiye&apos;nin en güzel destinasyonlarında yer alan otelleri titizlikle seçerek
                sizlere sunan bir otel rehberi platformudur.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Her otel, gerçek deneyimler ve detaylı araştırmalar sonucunda listeye eklenir.
                Amacımız, tatilinizi unutulmaz kılacak otelleri bulmanıza yardımcı olmaktır.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sadece fiyat değil, deneyim odaklı bir yaklaşımla her bütçeye uygun,
                kaliteli konaklama seçenekleri sunuyoruz.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-96 w-full bg-gradient-to-br from-blue-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg font-medium">
                    Görseller buraya eklenecek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Neden GNK Oteller?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Özenle Seçilmiş
              </h3>
              <p className="text-gray-600">
                Her otel, gerçek deneyimler ve detaylı araştırmalar sonucunda titizlikle seçilir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kalite Odaklı
              </h3>
              <p className="text-gray-600">
                Sadece kaliteli hizmet sunan, misafir memnuniyetine önem veren otelleri listeliyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Geniş Coğrafya
              </h3>
              <p className="text-gray-600">
                Türkiye&apos;nin dört bir yanından, farklı konseptlerde oteller sunuyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Her Bütçeye Uygun
              </h3>
              <p className="text-gray-600">
                Ekonomikten lükse, her bütçeye uygun kaliteli konaklama seçenekleri.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vizyonumuz
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Türkiye&apos;nin en güvenilir otel rehberi olarak, her gezginin mükemmel tatil deneyimi yaşamasına
            yardımcı olmak ve Türkiye&apos;nin eşsiz güzelliklerini keşfetmelerini sağlamak istiyoruz.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/search"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-xl transition-colors"
            >
              Otelleri Keşfet
            </a>
            <a
              href="/rehber"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-xl border-2 border-white transition-colors"
            >
              Gezi Rehberi
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Bizimle iletişime geçmek ister misiniz?
          </p>
          <a
            href="mailto:info@gnkoteller.com"
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            info@gnkoteller.com
          </a>
        </div>
      </div>
    </div>
  );
}
