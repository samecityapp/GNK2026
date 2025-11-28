'use client';

import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 border-t border-zinc-800 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="hidden sm:block flex-shrink-0 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center">
              <Cookie className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-zinc-300 leading-relaxed">
                Size daha iyi bir deneyim sunmak ve sitemizi geliştirmek için çerezleri kullanıyoruz.
                <span className="hidden sm:inline"> Detaylı bilgi için </span>
                <a href="/gizlilik-politikasi" className="underline hover:text-white transition-colors">
                  gizlilik politikamızı
                </a>
                <span className="hidden sm:inline"> inceleyebilirsiniz.</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-initial px-6 py-2.5 text-sm font-medium text-zinc-400 hover:text-white bg-transparent hover:bg-zinc-800 rounded-lg transition-all"
            >
              Reddet
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-initial px-6 py-2.5 text-sm font-semibold text-zinc-900 bg-white hover:bg-zinc-100 rounded-lg transition-all shadow-sm"
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
