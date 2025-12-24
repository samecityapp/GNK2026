import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface LocationCardProps {
    slug: string;
    title: string;
    image: string;
    description: string;
}

export function LocationCard({ slug, title, image, description }: LocationCardProps) {
    return (
        <Link
            href={`/rehber/${slug}`}
            className="group block relative overflow-hidden rounded-2xl aspect-[2.5/1] md:aspect-[3/4]"
        >
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:via-black/20" />

            <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">{title}</h3>
                <p className="text-white/80 line-clamp-2 text-xs md:text-base mb-2 md:mb-4">
                    {description}
                </p>
                <div className="flex items-center gap-1.5 md:gap-2 text-white font-medium text-xs md:text-sm">
                    <span>Rehberi Keşfet</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
