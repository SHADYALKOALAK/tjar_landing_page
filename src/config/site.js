/**
 * Site-wide, language-independent configuration: the single place for real
 * links and numbers. All visible text lives in src/content/<locale>/.
 * The site's public origin is resolved separately, in ./siteUrl.js.
 *
 * Nothing here is invented: values that were not supplied are left empty and
 * render as clearly-marked placeholders (or not at all) until filled in.
 * Pure data: also imported by the build-time SEO generator (Node).
 */

/** Header / menu navigation: section links on the home page, then pages. */
export const NAV = [
  { id: 'top', page: 'home', hash: 'top' },
  { id: 'how', page: 'home', hash: 'how' },
  { id: 'owners', page: 'home', hash: 'owners' },
  { id: 'renters', page: 'home', hash: 'renters' },
  { id: 'faq', page: 'home', hash: 'faq' },
  { id: 'contact', page: 'contact' },
];

/** Where "Download the app" falls back to without JavaScript. */
export const DOWNLOAD_TARGET = { page: 'home', hash: 'download' };

/** TODO: add the official store URLs when the app listings are live. */
export const storeLinks = {
  appStore: '',
  googlePlay: '',
};

/**
 * Contact channels.
 * whatsappNumber: international format, digits only (used for wa.me links).
 * whatsappDisplay: how the number is shown to visitors.
 */
export const contact = {
  whatsappNumber: '966558068777',
  whatsappDisplay: '+966 55 806 8777',
  email: 'info@tjar.com',
};

/** Company details shown in the footer. TODO: add the official VAT number (shown only when filled in). */
export const company = {
  vatNumber: '',
};

/** Social accounts — none were provided, so none are rendered. */
export const socialLinks = [];
