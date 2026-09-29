'use client';

import { useEffect, useState } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import Icon from '../Icon/Icon';
import styles from './LanguageSwitch.module.css';

/** Short labels shown on the switch, per target language. */
const SHORT = { ar: 'عربي', en: 'EN' };

/**
 * Links to the same page in the other language, keeping the current section
 * (#hash). The plain href stays crawlable; hreflang/lang describe the target.
 *
 * The fragment is read in an effect rather than during render: it is not part
 * of the server-rendered path, so reading window here would produce
 * different server and client markup.
 */
export default function LanguageSwitch({ className, full = false }) {
  const { locale, alternates, t } = useLocale();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const targets = alternates.filter((alternate) => alternate.code !== locale);

  return targets.map((target) => (
    <a
      key={target.code}
      href={`${target.href}${hash}`}
      hrefLang={target.code}
      className={[styles.switch, className].filter(Boolean).join(' ')}
      title={t.header.switchLanguage}
    >
      <Icon name="globe" size={18} />
      {/* The accessible name starts with the visible label (voice control users say what they see). */}
      <span className={styles.label} lang={target.code}>
        {full ? target.name : SHORT[target.code]}
      </span>
      <span className="visually-hidden">{` — ${t.header.switchLanguage}`}</span>
    </a>
  ));
}
