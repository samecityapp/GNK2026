import { LocalizedString } from './types';

export function getLocalizedText(
  text: LocalizedString | string | undefined,
  lang: string = 'tr'
): string {
  if (!text) return '';
  if (typeof text === 'string') return text;
  return text[lang] || text.tr || text.en || Object.values(text)[0] || '';
}

export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'tr';
  return localStorage.getItem('language') || 'tr';
}

export function setCurrentLanguage(lang: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}
