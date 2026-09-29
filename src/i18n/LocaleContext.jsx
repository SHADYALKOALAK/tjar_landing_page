import { createContext, useContext, useMemo } from 'react';
import ar from '../content/ar/index.js';
import en from '../content/en/index.js';
import { LOCALE_CODES, LOCALES } from './locales.js';
import { pageHref } from './routes.js';

const DICTIONARIES = { ar, en };

const LocaleContext = createContext(null);

/**
 * Provides the page language to the whole tree:
 *   locale / dir  — 'ar' | 'en', 'rtl' | 'ltr'
 *   t             — the language dictionary (src/content/<locale>)
 *   href(page, #) — localized link to a page / section
 *   alternates    — the same page in every language (language switcher, SEO)
 *   forward       — +1 in LTR, -1 in RTL (for "forward" motion offsets)
 */
export function LocaleProvider({ locale, page, children }) {
  const value = useMemo(() => {
    const { dir } = LOCALES[locale];
    return {
      locale,
      dir,
      page,
      t: DICTIONARIES[locale],
      forward: dir === 'rtl' ? -1 : 1,
      href: (pageId, hash) => pageHref(pageId, locale, hash),
      alternates: LOCALE_CODES.map((code) => ({ ...LOCALES[code], href: pageHref(page, code) })),
    };
  }, [locale, page]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside <LocaleProvider>');
  return context;
}
