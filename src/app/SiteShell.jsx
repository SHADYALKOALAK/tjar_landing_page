'use client';

import { LazyMotion, MotionConfig, domMax } from 'framer-motion';
import WhatsAppFab from '../components/WhatsAppFab/WhatsAppFab';
import { AudienceProvider } from '../context/AudienceContext';
import { DownloadProvider } from '../context/DownloadContext';
import { useLocale } from '../i18n/LocaleContext';
import Footer from '../layout/Footer/Footer';
import Header from '../layout/Header/Header';
import { EASE_OUT } from '../lib/motion';

/** Shared frame for every page: motion setup, providers, header and footer. */
export default function SiteShell({ children }) {
  const { t } = useLocale();

  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user" transition={{ ease: EASE_OUT }}>
        <AudienceProvider>
          <DownloadProvider>
            <a href="#main" className="skip-link">
              {t.common.skipToContent}
            </a>
            <Header />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <WhatsAppFab />
          </DownloadProvider>
        </AudienceProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
