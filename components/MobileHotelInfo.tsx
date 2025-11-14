'use client';

import { MapPin, Share2, Heart } from 'lucide-react';
import Image from 'next/image';

type MobileHotelInfoProps = {
  hotelName: string;
  price: number;
  rating: number;
  location: string;
  googleMapsUrl?: string;
  websiteUrl?: string;
  instagramUrl?: string;
};

export function MobileHotelInfo({
  hotelName,
  price,
  rating,
  location,
  googleMapsUrl,
  websiteUrl,
  instagramUrl,
}: MobileHotelInfoProps) {
  const handleMapClick = () => {
    if (googleMapsUrl) {
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <div className="relative -mt-6 bg-white rounded-t-[24px] pt-5 pb-0 shadow-[0_-2px_16px_rgba(0,0,0,0.08)]">
      <div className="px-5">
        <div className="mb-5">
          <h1 className="text-[26px] font-semibold text-gray-900 mb-1.5 leading-tight tracking-tight">
            {hotelName}
          </h1>

          <div className="flex items-center gap-1.5 text-gray-600">
            <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
            <span className="text-[15px] font-normal">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-gray-200">
          <div className="flex items-center gap-3">
            <div
              onClick={handleMapClick}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            >
              <div className="w-5 h-5">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C15.178 4 8 11.178 8 20C8 30 24 44 24 44C24 44 40 30 40 20C40 11.178 32.822 4 24 4Z" fill="#EA4335"/>
                  <circle cx="24" cy="20" r="6" fill="#FBBC04"/>
                  <path d="M24 14C20.686 14 18 16.686 18 20C18 23.314 20.686 26 24 26C27.314 26 30 23.314 30 20C30 16.686 27.314 14 24 14Z" fill="#34A853"/>
                  <path d="M24 17C22.343 17 21 18.343 21 20C21 21.657 22.343 23 24 23C25.657 23 27 21.657 27 20C27 18.343 25.657 17 24 17Z" fill="#4285F4"/>
                </svg>
              </div>
            </div>

            <div className="h-px w-px bg-gray-300 self-stretch my-2"></div>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-500 mb-0.5">GNK Skor</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[17px] font-semibold text-gray-900">{rating}</span>
                <span className="text-sm font-normal text-gray-500">/ 5</span>
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-semibold text-gray-900 leading-none">{price.toLocaleString('tr-TR')} ₺</span>
            <span className="text-[15px] font-normal text-gray-600">/ gece</span>
          </div>
        </div>

        <div className="py-5 space-y-2.5">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-[52px] bg-gray-900 hover:bg-gray-800 active:bg-black text-white font-semibold rounded-xl transition-colors text-[16px]"
            >
              Rezervasyon Yap
            </a>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-[52px] bg-white border border-gray-300 hover:border-gray-900 active:bg-gray-50 text-gray-900 font-semibold rounded-xl transition-all text-[16px]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
