'use client';

import { useLocale } from '../../i18n/LocaleContext';
import BrandPattern from '../BrandPattern/BrandPattern';
import Reveal from '../Reveal/Reveal';
import RevealText from '../RevealText/RevealText';
import styles from './PageHero.module.css';

/** Title band for stand-alone pages: breadcrumb, animated h1, lead, extras. */
export default function PageHero({ id = 'page-title', title, lead, children }) {
  const { t, href } = useLocale();

  return (
    <header className={styles.hero}>
      <BrandPattern className={styles.pattern} />
      <div className="container">
        <nav aria-label={t.common.breadcrumbLabel} className={styles.breadcrumb}>
          <ol>
            <li>
              <a href={href('home')}>{t.common.home}</a>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <RevealText as="h1" id={id} text={title} className={styles.title} amount={0.1} />
        {lead && (
          <Reveal as="p" className={styles.lead} delay={0.15}>
            {lead}
          </Reveal>
        )}
        {children && (
          <Reveal className={styles.children} delay={0.25}>
            {children}
          </Reveal>
        )}
      </div>
    </header>
  );
}
