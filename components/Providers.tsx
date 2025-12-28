'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Toaster } from '@/components/ui/toaster';

import { PageViewTracker } from '@/components/PageViewTracker';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      {children}
      <PageViewTracker />
      <Toaster />
    </ErrorBoundary>
  );
}
