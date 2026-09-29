'use client';

import { m, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { contact } from '../../config/site';
import { useLocale } from '../../i18n/LocaleContext';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import { SPRING_SOFT } from '../../lib/motion';
import Icon from '../Icon/Icon';
import styles from './WhatsAppFab.module.css';

const ENTRANCE_DELAY = 1.8;
/** The label introduces itself once, then tucks away until hover / focus. */
const INTRO_SHOW_MS = 2600;
const INTRO_HIDE_MS = 6200;

/** Floating WhatsApp contact button (all pages, mobile and desktop). */
export default function WhatsAppFab() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const show = setTimeout(() => setIntro(true), INTRO_SHOW_MS);
    const hide = setTimeout(() => setIntro(false), INTRO_HIDE_MS);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [reduceMotion]);

  if (!contact.whatsappNumber) return null;

  return (
    <m.a
      href={buildWhatsAppUrl(contact.whatsappNumber, t.whatsappFab.greeting)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      data-expanded={intro || undefined}
      aria-label={`${t.whatsappFab.label} ${contact.whatsappDisplay}`}
      initial={{ opacity: 0, scale: 0.5, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ ...SPRING_SOFT, delay: ENTRANCE_DELAY }}
    >
      <span className={styles.label} aria-hidden="true">
        <span className={styles.labelTitle}>{t.whatsappFab.label}</span>{' '}
        <span className={`${styles.labelHint} latin`}>{contact.whatsappDisplay}</span>
      </span>
      <span className={styles.button} aria-hidden="true">
        <span className={styles.pulse} />
        <Icon name="whatsapp" size={30} />
      </span>
    </m.a>
  );
}
