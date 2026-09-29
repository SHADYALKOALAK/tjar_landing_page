import '@/styles/tokens.css';
import '@/styles/globals.css';

import SiteShell from '@/app/SiteShell';
import { fontClassNames } from '@/lib/fonts';
import { LocaleProvider } from '@/i18n/LocaleContext';
import { LOCALES } from '@/i18n/locales';

/**
 * The <html>/<body> shell shared by both root layouts.
 *
 * Arabic and English need a different lang and dir on <html>, which is why the
 * App Router has one root layout per language (app/(ar) and app/(en)/en)
 * instead of a single one -- a single root layout cannot vary lang/dir per
 * locale. Everything below the <html> element is identical, so it lives here.
 *
 * The language dictionary is passed in as a prop rather than imported by the
 * client provider, so only the active language is serialised into the page
 * and shipped to the browser.
 */
export default function Document({ locale, dictionary, children }) {
  const { dir } = LOCALES[locale];

  return (
    <html lang={locale} dir={dir} className={fontClassNames}>
      <body>
        <LocaleProvider locale={locale} t={dictionary}>
          <SiteShell>{children}</SiteShell>
        </LocaleProvider>
      </body>
    </html>
  );
}