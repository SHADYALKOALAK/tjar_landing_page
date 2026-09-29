import { useLocale } from '../../i18n/LocaleContext';
import Icon from '../Icon/Icon';
import styles from './LanguageSwitch.module.css';

/** Short labels shown on the switch, per target language. */
const SHORT = { ar: 'عربي', en: 'EN' };

/**
 * Links to the same page in the other language, keeping the current section
 * (#hash). The plain href stays crawlable; hreflang/lang describe the target.
 */
export default function LanguageSwitch({ className, full = false }) {
  const { locale, alternates, t } = useLocale();
  const targets = alternates.filter((alternate) => alternate.code !== locale);

  const go = (event, target) => {
    if (!window.location.hash) return;
    event.preventDefault();
    window.location.assign(`${target.href}${window.location.hash}`);
  };

  return targets.map((target) => (
    <a
      key={target.code}
      href={target.href}
      hrefLang={target.code}
      lang={target.code}
      className={[styles.switch, className].filter(Boolean).join(' ')}
      aria-label={t.header.switchLanguage}
      onClick={(event) => go(event, target)}
    >
      <Icon name="globe" size={18} />
      <span className={styles.label}>{full ? target.name : SHORT[target.code]}</span>
    </a>
  ));
}
