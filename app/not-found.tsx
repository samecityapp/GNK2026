import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative">
            <Compass className="w-32 h-32 text-gray-300 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-900">404</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900">
            Aradığınız Sayfayı Bulamadık
          </h1>
          <p className="text-gray-600 text-lg">
            Üzgünüz, bu sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" />
            Anasayfaya Dön
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-xl border-2 border-gray-900 transition-colors"
          >
            Otel Ara
          </Link>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Yardıma mı ihtiyacınız var?{' '}
            <Link href="/search" className="text-blue-600 hover:text-blue-700 font-medium">
              Otellere göz atın
            </Link>{' '}
            veya{' '}
            <Link href="/rehber" className="text-blue-600 hover:text-blue-700 font-medium">
              gezi rehberini inceleyin
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
