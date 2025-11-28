import { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kullanım Şartları',
  description: 'GNK Oteller kullanım şartları ve koşulları',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Kullanım Şartları
            </h1>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 italic">
                Yasal metinler buraya gelecektir. Bu sayfa, web sitemizin kullanım koşulları,
                kullanıcı sorumlulukları ve hizmet şartlarını içerecektir.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Hizmet Şartları</h2>
              <p className="text-gray-600">
                GNK Oteller web sitesini kullanarak, aşağıdaki kullanım şartlarını kabul etmiş olursunuz.
                Detaylı şartlar buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kullanıcı Sorumlulukları</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fikri Mülkiyet Hakları</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sorumluluk Sınırlamaları</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. İletişim</h2>
              <p className="text-gray-600">
                Kullanım şartları hakkında sorularınız için:{' '}
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
