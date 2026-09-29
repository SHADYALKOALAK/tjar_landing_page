/**
 * Supported languages. Arabic is the default and lives at the site root;
 * every other language is served under its own prefix (e.g. /en).
 * Pure data: also imported by the build-time SEO generator (Node).
 */
export const DEFAULT_LOCALE = 'ar';

export const LOCALES = {
  ar: { code: 'ar', dir: 'rtl', name: 'العربية', ogLocale: 'ar_SA' },
  en: { code: 'en', dir: 'ltr', name: 'English', ogLocale: 'en_US' },
};

export const LOCALE_CODES = Object.keys(LOCALES);

export const resolveLocale = (value) => (value in LOCALES ? value : DEFAULT_LOCALE);
