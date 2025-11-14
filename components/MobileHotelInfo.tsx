'use client';

import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

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
  const locationCity = location.split(',')[0].trim();
  const [showDesigns, setShowDesigns] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(1);

  const designs = [
    {
      id: 1,
      name: "Üst Vurgu",
      render: () => (
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900"></div>
            <p className="text-xs font-medium text-gray-600 mb-1.5 mt-1">Konum</p>
            <p className="text-lg font-bold text-gray-900">{locationCity}</p>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900"></div>
            <p className="text-xs font-medium text-gray-600 mb-1.5 mt-1">GNK Skor</p>
            <p className="text-lg font-bold text-gray-900">{rating} / 5</p>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900"></div>
            <p className="text-xs font-medium text-gray-600 mb-1.5 mt-1">Fiyat</p>
            <p className="text-lg font-bold text-gray-900">{price.toLocaleString('tr-TR')} ₺</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: "Gradient Arka Plan",
      render: () => (
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-4 text-center">
            <p className="text-xs font-semibold text-gray-600 mb-1.5">Konum</p>
            <p className="text-lg font-bold text-gray-900">{locationCity}</p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-4 text-center">
            <p className="text-xs font-semibold text-gray-600 mb-1.5">GNK Skor</p>
            <p className="text-lg font-bold text-gray-900">{rating} / 5</p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-4 text-center">
            <p className="text-xs font-semibold text-gray-600 mb-1.5">Fiyat</p>
            <p className="text-lg font-bold text-gray-900">{price.toLocaleString('tr-TR')} ₺</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: "Gölgeli Kartlar",
      render: () => (
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-4 text-center">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Konum</p>
            <p className="text-lg font-bold text-gray-900">{locationCity}</p>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-4 text-center">
            <p className="text-xs font-medium text-gray-600 mb-1.5">GNK Skor</p>
            <p className="text-lg font-bold text-gray-900">{rating} / 5</p>
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-4 text-center">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Fiyat</p>
            <p className="text-lg font-bold text-gray-900">{price.toLocaleString('tr-TR')} ₺</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      name: "Rozet Stili",
      render: () => (
        <div className="flex items-center justify-center gap-2">
          <div className="flex-1 bg-gray-900 text-white rounded-full px-4 py-3 text-center">
            <p className="text-[10px] font-medium text-gray-300 mb-0.5">Konum</p>
            <p className="text-sm font-bold">{locationCity}</p>
          </div>
          <div className="flex-1 bg-gray-900 text-white rounded-full px-4 py-3 text-center">
            <p className="text-[10px] font-medium text-gray-300 mb-0.5">GNK Skor</p>
            <p className="text-sm font-bold">{rating} / 5</p>
          </div>
          <div className="flex-1 bg-gray-900 text-white rounded-full px-4 py-3 text-center">
            <p className="text-[10px] font-medium text-gray-300 mb-0.5">Fiyat</p>
            <p className="text-sm font-bold">{price.toLocaleString('tr-TR')} ₺</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      name: "Üst Vurgu Kalın",
      render: () => (
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gray-900"></div>
            <p className="text-xs font-semibold text-gray-600 mb-1.5 mt-2">Konum</p>
            <p className="text-lg font-bold text-gray-900">{locationCity}</p>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gray-900"></div>
            <p className="text-xs font-semibold text-gray-600 mb-1.5 mt-2">GNK Skor</p>
            <p className="text-lg font-bold text-gray-900">{rating} / 5</p>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gray-900"></div>
            <p className="text-xs font-semibold text-gray-600 mb-1.5 mt-2">Fiyat</p>
            <p className="text-lg font-bold text-gray-900">{price.toLocaleString('tr-TR')} ₺</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      name: "3D Kabartma",
      render: () => (
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-2xl p-4 text-center" style={{ boxShadow: '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff' }}>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Konum</p>
            <p className="text-lg font-bold text-gray-900">{locationCity}</p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-2xl p-4 text-center" style={{ boxShadow: '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff' }}>
            <p className="text-xs font-medium text-gray-600 mb-1.5">GNK Skor</p>
            <p className="text-lg font-bold text-gray-900">{rating} / 5</p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-2xl p-4 text-center" style={{ boxShadow: '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff' }}>
            <p className="text-xs font-medium text-gray-600 mb-1.5">Fiyat</p>
            <p className="text-lg font-bold text-gray-900">{price.toLocaleString('tr-TR')} ₺</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      name: "Alt Vurgu",
      render: () => (
        <div className="flex items-center justify-center gap-3">
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Konum</p>
            <p className="text-lg font-bold text-gray-900 mb-1">{locationCity}</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900"></div>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <p className="text-xs font-medium text-gray-600 mb-1.5">GNK Skor</p>
            <p className="text-lg font-bold text-gray-900 mb-1">{rating} / 5</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900"></div>
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 text-center relative overflow-hidden">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Fiyat</p>
            <p className="text-lg font-bold text-gray-900 mb-1">{price.toLocaleString('tr-TR')} ₺</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 mx-5 mt-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight text-center">
        {hotelName}
      </h1>

      <div className="mb-4">
        {designs[selectedDesign].render()}
      </div>

      <button
        onClick={() => setShowDesigns(!showDesigns)}
        className="w-full mb-3 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold text-gray-700 flex items-center justify-between transition-colors"
      >
        <span>Dizayn Seç ({designs[selectedDesign].name})</span>
        {showDesigns ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {showDesigns && (
        <div className="mb-4 max-h-[400px] overflow-y-auto bg-gray-50 rounded-xl p-3 space-y-2">
          {designs.map((design) => (
            <button
              key={design.id}
              onClick={() => {
                setSelectedDesign(design.id);
                setShowDesigns(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                selectedDesign === design.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              #{design.id} - {design.name}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-2">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[52px] bg-white border border-gray-300 hover:border-gray-400 active:bg-gray-50 text-gray-600 font-semibold rounded-xl transition-all text-[16px]"
          >
            <ExternalLink className="w-5 h-5 mr-2 text-gray-600" strokeWidth={2} />
            Otele Git
          </a>
        )}

        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[52px] bg-white border border-gray-300 hover:border-gray-400 active:bg-gray-50 text-gray-600 font-semibold rounded-xl transition-all text-[16px]"
          >
            <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}
