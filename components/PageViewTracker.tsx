'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function PageViewTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Only track hotel detail pages for now, as the dashboard focuses on hotels
        // Route format: /otel/[id]
        // Or if we want to track all pages, we can do that too, but dashboard looks for 'page_view'

        // Let's track everything but identify hotel_id if present
        const trackPage = async () => {
            let hotelId = null;

            // Extract hotel ID from URL if possible
            const match = pathname?.match(/\/otel\/([^/]+)/);
            if (match) {
                hotelId = match[1];
            }

            try {
                await fetch('/api/track-event', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        event_type: 'page_view',
                        hotel_id: hotelId, // Can be null if it's homepage or search
                        metadata: {
                            path: pathname,
                            search: searchParams?.toString(),
                        }
                    })
                });
            } catch (err) {
                console.error('Failed to track page view:', err);
            }
        };

        trackPage();
    }, [pathname, searchParams]);

    return null;
}
