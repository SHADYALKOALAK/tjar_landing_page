import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@fontsource/ibm-plex-sans-arabic/400.css';
import '@fontsource/ibm-plex-sans-arabic/500.css';
import '@fontsource/ibm-plex-sans-arabic/600.css';
import '@fontsource/ibm-plex-sans-arabic/700.css';
import '../styles/tokens.css';
import '../styles/globals.css';

import { LocaleProvider } from '../i18n/LocaleContext';
import { resolveLocale } from '../i18n/locales';
import SiteShell from './SiteShell';

/**
 * Mounts a page inside the shared shell. The language comes from the static
 * HTML (`<html lang>`), generated per locale by scripts/generate-pages.mjs.
 */
export default function renderPage(Page, pageId) {
  const locale = resolveLocale(document.documentElement.lang);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LocaleProvider locale={locale} page={pageId}>
        <SiteShell>
          <Page />
        </SiteShell>
      </LocaleProvider>
    </StrictMode>,
  );
}
