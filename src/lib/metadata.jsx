import { SITE_URL, contact } from '../config/site.js';
import { LOCALE_CODES, LOCALES, DEFAULT_LOCALE } from '../i18n/locales.js';
import { pagePath } from '../i18n/routes.js';
import ar from '../content/ar/index.js';
import en from '../content/en/index.js';

/**
 * Server-side SEO for every page, built with the Next.js Metadata API.
 *
 * This replaces scripts/generate-pages.mjs, which used to hand-write the same
 * markup into eight static HTML files. Titles, descriptions, canonical URLs,
 * hreflang alternates and Open Graph / Twitter cards now come from one place:
 * the language dictionaries in src/content/<locale>/ui.js.
 */

const DICTIONARIES = { ar, en };

/** Page heading used in breadcrumbs (the meta title carries the brand suffix). */
function pageHeading(pageId, t) {
  if (pageId === 'contact') return t.contactPage.title;
  if (pageId === 'privacy' || pageId === 'terms') return t.legal[pageId].title;
  return t.common.home;
}

/** Public absolute URL of a page. */
export function pageUrl(pageId, locale) {
  return new URL(pagePath(pageId, locale), `${SITE_URL}/`).href;
}

/** Absolute URL of a path in public/. */
function publicUrl(path) {
  return new URL(path, `${SITE_URL}/`).href;
}

/** hreflang map for the same page in every language, plus x-default. */
function languageAlternates(pageId) {
  const languages = Object.fromEntries(LOCALE_CODES.map((code) => [code, pageUrl(pageId, code)]));
  return { ...languages, 'x-default': pageUrl(pageId, DEFAULT_LOCALE) };
}

/**
 * Full metadata for a page: unique title and description, canonical URL,
 * hreflang alternates, Open Graph and Twitter cards, and robots directives.
 */
export function buildMetadata(pageId, locale) {
  const t = DICTIONARIES[locale];
  const { ogLocale } = LOCALES[locale];
  const meta = t.meta.pages[pageId];
  const url = pageUrl(pageId, locale);
  const ogImage = publicUrl(t.meta.ogImage);

  return {
    title: { absolute: meta.title },
    description: meta.description,
    // Official TJAR logo on the brand gradient (generated into public/).
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    },
    alternates: {
      canonical: url,
      languages: languageAlternates(pageId),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    openGraph: {
      type: 'website',
      siteName: t.meta.siteName,
      locale: ogLocale,
      alternateLocale: LOCALE_CODES.filter((code) => code !== locale).map((code) => LOCALES[code].ogLocale),
      url,
      title: meta.title,
      description: meta.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: t.meta.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [{ url: ogImage, alt: t.meta.ogImageAlt }],
    },
  };
}

/**
 * JSON-LD graph for a page, matching what the old generator emitted:
 * Organization + WebSite + the page itself, plus FAQPage on the home page
 * and a BreadcrumbList everywhere else.
 */
export function buildStructuredData(pageId, locale) {
  const t = DICTIONARIES[locale];
  const meta = t.meta.pages[pageId];
  const url = pageUrl(pageId, locale);

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'TJAR',
    alternateName: ['تي جار', 'T Jar'],
    url: new URL('/', `${SITE_URL}/`).href,
    logo: { '@type': 'ImageObject', url: publicUrl('/icon-512.png'), width: 512, height: 512 },
    email: contact.email,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${contact.whatsappNumber}`,
      email: contact.email,
      contactType: 'customer support',
      availableLanguage: ['Arabic', 'English'],
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: new URL('/', `${SITE_URL}/`).href,
    name: 'TJAR',
    alternateName: 'تي جار',
    inLanguage: LOCALE_CODES,
    publisher: { '@id': organization['@id'] },
  };

  const webpage = {
    '@type': pageId === 'contact' ? 'ContactPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: locale,
    isPartOf: { '@id': website['@id'] },
    about: { '@id': organization['@id'] },
    primaryImageOfPage: publicUrl(t.meta.ogImage),
  };

  const graph = [organization, website, webpage];

  if (pageId === 'home') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: locale,
      mainEntity: t.home.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  } else {
    const breadcrumb = {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.common.home, item: pageUrl('home', locale) },
        { '@type': 'ListItem', position: 2, name: pageHeading(pageId, t), item: url },
      ],
    };
    webpage.breadcrumb = { '@id': breadcrumb['@id'] };
    graph.push(breadcrumb);
  }

  // Escape "<" so the JSON can never close the script tag.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

/** Server component that emits the JSON-LD graph into the page head. */
export function StructuredData({ pageId, locale }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildStructuredData(pageId, locale) }} />;
}
