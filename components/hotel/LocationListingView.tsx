import { Hotel } from '@/lib/types';
import HotelCard from '@/components/HotelCard';
import { getLocalizedText } from '@/lib/localization';
import Image from 'next/image';
import { ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';

interface LocationListingViewProps {
    location: {
        slug: string;
        title: string;
        image: string;
        description: string;
    };
    hotels: Hotel[];
}

import { getDictionary } from '@/lib/dictionary';

interface LocationListingViewProps {
    location: {
        slug: string;
        title: string;
        image: string;
        description: string;
    };
    hotels: Hotel[];
    lang?: 'tr' | 'en';
}

export async function LocationListingView({ location, hotels, lang = 'tr' }: LocationListingViewProps) {
    const dict = await getDictionary(lang);
    const prefix = lang === 'tr' ? '' : `/${lang}`;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Header for Location */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl uppercase">
                        {location.title} {lang === 'tr' ? 'Otelleri' : 'Hotels'}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-lg font-medium">
                        {location.description}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                    <div>
                        <Link
                            href={prefix || '/'}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-4 font-semibold transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {dict.common.back}
                        </Link>
                        <div className="flex items-center gap-3 text-gray-900">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                            <h2 className="text-2xl font-bold">
                                {lang === 'tr'
                                    ? `${location.title} Bölgesindeki En İyi ${hotels.length} Otel`
                                    : `Best ${hotels.length} Hotels in ${location.title}`}
                            </h2>
                        </div>
                    </div>
                </div>

                {hotels.length === 0 ? (
                    <div className="bg-white rounded-3xl p-20 text-center shadow-sm border border-gray-100">
                        <div className="text-6xl mb-6">🏨</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{dict.search.no_results}</h3>
                        <p className="text-gray-500">
                            {lang === 'tr'
                                ? 'Bu lokasyon için henüz otel eklemedik. Diğer bölgelerimize göz atabilirsiniz.'
                                : 'We haven\'t added any hotels for this location yet. You can check our other regions.'}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
                        {hotels.map((hotel, index) => (
                            <HotelCard key={hotel.id} hotel={hotel} lang={lang} priority={index < 4} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
