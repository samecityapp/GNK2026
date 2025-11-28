import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'GNK Otel Rehberi kişisel verilerin korunması ve işlenmesi aydınlatma metni',
};

export default function KVKKPage() {
  return (
    <article className="prose prose-zinc max-w-none">
      <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
        KVKK Aydınlatma Metni
      </h1>

      <p className="text-zinc-600 text-lg mb-8">
        Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <p className="text-blue-900 mb-0">
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca,
          kişisel verilerinizin işlenmesi hakkında sizi bilgilendirmek istiyoruz.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">1. Veri Sorumlusu</h2>
        <p className="text-zinc-700 leading-relaxed">
          KVKK uyarınca, kişisel verileriniz <strong>GNK Platformu</strong> (&quot;GNK&quot;) tarafından
          veri sorumlusu sıfatıyla işlenmektedir.
        </p>

        <div className="bg-zinc-100 p-4 rounded-lg my-4">
          <p className="text-zinc-900 font-semibold mb-2">İletişim Bilgileri:</p>
          <p className="text-zinc-700 mb-1">
            <strong>E-posta:</strong>{' '}
            <a href="mailto:info@gnkoteller.com" className="text-zinc-900 hover:underline">
              info@gnkoteller.com
            </a>
          </p>
          <p className="text-zinc-700 mb-0">
            <strong>Web:</strong> https://www.gnkoteller.com
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">2. İşlenen Kişisel Veriler</h2>
        <p className="text-zinc-700 leading-relaxed">
          Platformumuzda aşağıdaki kişisel verileriniz işlenebilir:
        </p>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">2.1. Kimlik ve İletişim Bilgileri</h3>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>E-posta adresi (bülten aboneliği için, isteğe bağlı)</li>
          <li>Ad-soyad (iletişim formları için, isteğe bağlı)</li>
        </ul>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">2.2. İşlem Güvenliği Bilgileri</h3>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>IP adresi</li>
          <li>Tarayıcı bilgileri</li>
          <li>Cihaz bilgileri</li>
          <li>Çerez kayıtları</li>
        </ul>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">2.3. Kullanıcı İşlem Bilgileri</h3>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Ziyaret edilen sayfalar</li>
          <li>Tıklama verileri</li>
          <li>Arama sorguları</li>
          <li>Oturum süreleri</li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6 rounded-r-lg">
          <p className="text-green-900 mb-0">
            <strong>Önemli:</strong> GNK bir rezervasyon platformu olmadığı için, ödeme bilgileri,
            kredi kartı bilgileri, TC kimlik numarası gibi hassas kişisel veriler ASLA işlenmez.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p className="text-zinc-700 leading-relaxed">
          Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
        </p>

        <div className="space-y-4 my-6">
          <div className="border-l-4 border-zinc-300 pl-4">
            <h4 className="font-semibold text-zinc-900 mb-1">Platform İşleyişi</h4>
            <p className="text-zinc-700 text-sm">
              Web sitesinin teknik altyapısının sağlanması ve güvenliğinin temini
            </p>
          </div>

          <div className="border-l-4 border-zinc-300 pl-4">
            <h4 className="font-semibold text-zinc-900 mb-1">Kullanıcı Deneyimi</h4>
            <p className="text-zinc-700 text-sm">
              Kullanıcı tercihlerinin hatırlanması ve kişiselleştirilmiş içerik sunumu
            </p>
          </div>

          <div className="border-l-4 border-zinc-300 pl-4">
            <h4 className="font-semibold text-zinc-900 mb-1">Analiz ve İyileştirme</h4>
            <p className="text-zinc-700 text-sm">
              Site trafiğinin analizi, hata tespiti ve performans iyileştirme
            </p>
          </div>

          <div className="border-l-4 border-zinc-300 pl-4">
            <h4 className="font-semibold text-zinc-900 mb-1">İletişim</h4>
            <p className="text-zinc-700 text-sm">
              Kullanıcı sorularının yanıtlanması ve bilgilendirme (bülten, onay vermeniz halinde)
            </p>
          </div>

          <div className="border-l-4 border-zinc-300 pl-4">
            <h4 className="font-semibold text-zinc-900 mb-1">Yasal Yükümlülükler</h4>
            <p className="text-zinc-700 text-sm">
              Hukuki ve düzenleyici gerekliliklerin yerine getirilmesi
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">4. Kişisel Verilerin Aktarımı</h2>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">4.1. Yurt İçi Aktarım</h3>
        <p className="text-zinc-700 leading-relaxed">
          Kişisel verileriniz, yalnızca yukarıda belirtilen amaçlarla ve KVKK&apos;nın öngördüğü
          şartlarda, aşağıdaki taraflara aktarılabilir:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Teknik altyapı sağlayıcıları (hosting, bulut hizmetleri)</li>
          <li>Analitik hizmet sağlayıcıları</li>
          <li>Yasal merciler (yasal zorunluluk halinde)</li>
        </ul>

        <h3 className="text-xl font-semibold text-zinc-800 mt-8 mb-3">4.2. Yurt Dışı Aktarım</h3>
        <p className="text-zinc-700 leading-relaxed">
          Bazı hizmet sağlayıcılar (Google Analytics, Vercel) verileri yurt dışında işleyebilir.
          Bu aktarımlar, KVKK&apos;nın 9. maddesi kapsamında ve sizin açık rızanızla gerçekleşir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">5. Kişisel Verilerin Toplanma Yöntemi</h2>
        <p className="text-zinc-700 leading-relaxed">
          Kişisel verileriniz aşağıdaki yöntemlerle toplanır:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li><strong>Otomatik Yöntemler:</strong> Çerezler, log dosyaları, analitik araçlar</li>
          <li><strong>Gönüllü Paylaşım:</strong> İletişim formları, bülten kayıtları</li>
          <li><strong>Üçüncü Taraf Entegrasyonlar:</strong> Analytics servisleri</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">6. Kişisel Verilerin İşlenme Hukuki Sebepleri</h2>
        <p className="text-zinc-700 leading-relaxed">
          Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki
          sebeplere dayanarak işlenmektedir:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>Bir sözleşmenin kurulması veya ifası için gerekli olması</li>
          <li>Veri sorumlusunun meşru menfaatleri için zorunlu olması</li>
          <li>İlgili kişinin açık rızası</li>
          <li>Hukuki yükümlülüğün yerine getirilmesi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">7. Veri Sahibinin Hakları (KVKK Madde 11)</h2>
        <p className="text-zinc-700 leading-relaxed">
          KVKK&apos;nın 11. maddesi uyarınca, kişisel verileriniz ile ilgili aşağıdaki haklara sahipsiniz:
        </p>

        <div className="bg-zinc-50 rounded-lg p-6 my-6 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">a)</span>
            <p className="text-zinc-700 mb-0">
              Kişisel verilerinizin işlenip işlenmediğini öğrenme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">b)</span>
            <p className="text-zinc-700 mb-0">
              Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">c)</span>
            <p className="text-zinc-700 mb-0">
              Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp
              kullanılmadığını öğrenme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">d)</span>
            <p className="text-zinc-700 mb-0">
              Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">e)</span>
            <p className="text-zinc-700 mb-0">
              Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların
              düzeltilmesini isteme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">f)</span>
            <p className="text-zinc-700 mb-0">
              KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin
              silinmesini veya yok edilmesini isteme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">g)</span>
            <p className="text-zinc-700 mb-0">
              Düzeltme ve silme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere
              bildirilmesini isteme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">h)</span>
            <p className="text-zinc-700 mb-0">
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle
              aleyhinize bir sonucun ortaya çıkmasına itiraz etme
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-zinc-900 font-bold">i)</span>
            <p className="text-zinc-700 mb-0">
              Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız
              hâlinde zararın giderilmesini talep etme
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">8. Başvuru Yöntemi</h2>
        <p className="text-zinc-700 leading-relaxed">
          Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvurabilirsiniz:
        </p>

        <div className="bg-zinc-100 p-6 rounded-lg my-6">
          <h3 className="text-lg font-semibold text-zinc-900 mb-3">Başvuru Kanalları</h3>

          <div className="space-y-3">
            <div>
              <p className="text-zinc-900 font-semibold mb-1">E-posta:</p>
              <a href="mailto:info@gnkoteller.com" className="text-zinc-900 hover:underline">
                info@gnkoteller.com
              </a>
            </div>

            <div>
              <p className="text-zinc-900 font-semibold mb-1">Başvuru Şekli:</p>
              <p className="text-zinc-700 text-sm">
                Kimliğinizi tespit edici belgelerle birlikte yazılı olarak veya
                kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza,
                mobil imza ya da ilgili kişi tarafından daha önce bildirilen ve
                sistemimizde kayıtlı bulunan elektronik posta adresini kullanmak
                suretiyle yapabilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <p className="text-zinc-700 leading-relaxed">
          Başvurularınız, talebin niteliğine göre en geç <strong>30 gün içinde</strong> ücretsiz
          olarak sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde,
          Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">9. Veri Güvenliği</h2>
        <p className="text-zinc-700 leading-relaxed">
          GNK, kişisel verilerin güvenliğini sağlamak için gerekli teknik ve idari tedbirleri almaktadır:
        </p>
        <ul className="text-zinc-700 space-y-2 my-4">
          <li>SSL/TLS şifreleme protokolleri</li>
          <li>Güvenli veri saklama altyapısı</li>
          <li>Erişim kontrol mekanizmaları</li>
          <li>Düzenli güvenlik testleri</li>
          <li>Veri minimizasyonu prensibi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-12 mb-4">10. Aydınlatma Metninin Güncellenmesi</h2>
        <p className="text-zinc-700 leading-relaxed">
          GNK, bu aydınlatma metnini yasal düzenlemelerdeki değişiklikler veya iş süreçlerindeki
          gelişmeler doğrultusunda güncelleme hakkını saklı tutar. Güncellemeler bu sayfada
          yayımlanır.
        </p>
      </section>

      <div className="border-t border-zinc-200 mt-12 pt-8">
        <p className="text-sm text-zinc-500 italic">
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili
          mevzuat çerçevesinde hazırlanmıştır.
        </p>
      </div>
    </article>
  );
}
