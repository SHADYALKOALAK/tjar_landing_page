import { DEFAULT_LOCALE, LOCALE_CODES } from './locales.js';

/**
 * Page registry: id → path segment. Every page exists in every locale:
 *   ar: /, /contact, /privacy-policy, /terms
 *   en: /en, /en/contact, /en/privacy-policy, /en/terms
 * Pure data: also imported by vite.config.js and the SEO generator.
 */
export const PAGES = {
  home: '',
  contact: 'contact',
  privacy: 'privacy-policy',
  terms: 'terms',
};

export const PAGE_IDS = Object.keys(PAGES);

/** Public URL path of a page, without trailing slash (root is "/"). */
export function pagePath(pageId, locale = DEFAULT_LOCALE) {
  const segments = [locale === DEFAULT_LOCALE ? '' : locale, PAGES[pageId]].filter(Boolean);
  return `/${segments.join('/')}`;
}

/** Link to a page, optionally to a section on it. */
export function pageHref(pageId, locale, hash) {
  return hash ? `${pagePath(pageId, locale)}#${hash}` : pagePath(pageId, locale);
}

/** HTML source file (relative to the project root) that builds a page. */
export function pageHtmlFile(pageId, locale) {
  const path = pagePath(pageId, locale).slice(1);
  return path ? `${path}/index.html` : 'index.html';
}

/** Every page in every language. */
export const ALL_PAGES = PAGE_IDS.flatMap((id) => LOCALE_CODES.map((locale) => ({ id, locale })));
