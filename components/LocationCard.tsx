import Link from 'next/link';
import Image from 'next/image';

interface LocationCardProps {
    title: string;
    image: string;
    description: string;
    slug: string;
    lang?: 'tr' | 'en';
}

export function LocationCard({ title, image, description, slug, lang = 'tr' }: LocationCardProps) {
    return (
        <Link
            href={`/${lang}/rehber/${slug}`}
            className="group relative h-[320px] rounded-3xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
                <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    );
}
