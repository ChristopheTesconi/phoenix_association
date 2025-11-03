// Configuration i18n pour Phoenix Association
// Structure prête pour l'internationalisation français/anglais

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export function getLocaleName(locale: Locale): string {
  const names: Record<Locale, string> = {
    fr: 'Français',
    en: 'English',
  };
  return names[locale];
}
