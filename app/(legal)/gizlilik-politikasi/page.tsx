import { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'GNK Oteller gizlilik politikası ve kişisel verilerin korunması',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Gizlilik Politikası
            </h1>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 italic">
                Yasal metinler buraya gelecektir. Bu sayfa, kullanıcıların kişisel verilerinin nasıl toplandığı,
                kullanıldığı ve korunduğu hakkında detaylı bilgi içerecektir.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Genel Bilgiler</h2>
              <p className="text-gray-600">
                GNK Oteller olarak, kullanıcılarımızın gizliliğine önem veriyoruz. Bu gizlilik politikası,
                web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklamaktadır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanımı</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Çerezler</h2>
              <p className="text-gray-600">
                Çerez kullanımı hakkında detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. İletişim</h2>
              <p className="text-gray-600">
                Gizlilik politikamız hakkında sorularınız için:{' '}
                <a href="mailto:info@gnkoteller.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  info@gnkoteller.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
