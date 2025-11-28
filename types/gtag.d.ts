declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'consent',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export {};
