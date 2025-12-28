import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let locales = ['tr', 'en'];
let defaultLocale = 'tr';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // If it's a request for a static file (image, etc.) or api, ignore
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/static') ||
      pathname.includes('.') // files with extensions
    ) {
      return;
    }

    const locale = defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /tr/products
    return NextResponse.rewrite(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
