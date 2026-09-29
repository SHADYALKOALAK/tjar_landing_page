import { m } from 'framer-motion';
import Icon from '../../components/Icon/Icon';
import Logo from '../../components/Logo/Logo';
import { useLocale } from '../../i18n/LocaleContext';
import { buildContactMessage } from '../../lib/whatsapp';
import styles from './ContactPage.module.css';

/** Live preview of exactly what will be sent — transparency before hand-off. */
export default function MessagePreview({ values }) {
  const { t } = useLocale();
  const { preview, message: labels } = t.contactPage;
  const placeholders = { email: '', ...preview.placeholders };

  const merged = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, value.trim() ? value : placeholders[key]]),
  );
  const isEmpty = Object.values(values).every((value) => !value.trim());

  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.previewHeader}>
        <span className={styles.previewAvatar}>
          <Logo className={styles.previewLogo} decorative />
        </span>
        <span className={styles.previewName}>{t.brand.name}</span>
        <span className={styles.previewLabel}>{preview.label}</span>
      </div>
      <m.div className={styles.bubble} data-empty={isEmpty || undefined} layout transition={{ duration: 0.3 }}>
        <p className={styles.bubbleText}>{buildContactMessage(merged, labels)}</p>
        <span className={styles.bubbleMeta}>
          {preview.time}
          <Icon name="check" size={14} strokeWidth={2.5} />
        </span>
      </m.div>
    </div>
  );
}
