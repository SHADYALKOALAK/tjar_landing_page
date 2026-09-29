'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useMemo } from 'react';
import { LOCALES, LOCALE_CODES } from './locales.js';
import { ALL_PAGES, pageHref, pagePath } from './routes.js';

/** Reverse lookup: public path → page id, so the current page is known. */
const PAGE_BY_PATH = Object.fromEntries(ALL_PAGES.map(({ id, locale }) => [pagePath(id, locale), id]));

const LocaleContext = createContext(null);

/**
 * Provides the page language to the whole tree:
 *   locale / dir  — 'ar' | 'en', 'rtl' | 'ltr'
 *   page          — current page id, read from the URL
 *   t             — the language dictionary (passed in from the server layout,
 *                   so only the active language reaches the browser)
 *   href(page, #) — localized link to a page / section
 *   alternates    — the same page in every language (language switcher, SEO)
 *   forward       — +1 in LTR, -1 in RTL (for "forward" motion offsets)
 */
export function LocaleProvider({ locale, t, children }) {
  const pathname = usePathname();
  const page = PAGE_BY_PATH[pathname] ?? 'home';

  const value = useMemo(() => {
    const { dir } = LOCALES[locale];
    return {
      locale,
      dir,
      page,
      t,
      forward: dir === 'rtl' ? -1 : 1,
      href: (pageId, hash) => pageHref(pageId, locale, hash),
      alternates: LOCALE_CODES.map((code) => ({ ...LOCALES[code], href: pageHref(page, code) })),
    };
  }, [locale, page, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside <LocaleProvider>');
  return context;
}
