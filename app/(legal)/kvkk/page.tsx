import { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'GNK Oteller kişisel verilerin korunması ve işlenmesi aydınlatma metni',
};

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              KVKK Aydınlatma Metni
            </h1>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-gray-700 italic">
                Yasal metinler buraya gelecektir. Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması
                Kanunu kapsamında kişisel verilerinizin işlenmesi hakkında detaylı bilgi içerecektir.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
              <p className="text-gray-600">
                6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca, kişisel verileriniz veri sorumlusu
                sıfatıyla GNK Oteller tarafından işlenmektedir. Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. İşlenen Kişisel Veriler</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kişisel Verilerin Aktarımı</h2>
              <p className="text-gray-600">
                Detaylı bilgiler buraya eklenecektir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Veri Sahibinin Hakları</h2>
              <p className="text-gray-600">
                KVKK&apos;nın 11. maddesi uyarınca veri sahipleri olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. İletişim</h2>
              <p className="text-gray-600">
                KVKK kapsamındaki haklarınızı kullanmak için:{' '}
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
