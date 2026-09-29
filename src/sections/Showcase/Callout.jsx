'use client';

import { m } from 'framer-motion';
import { EASE_OUT } from '../../lib/motion';
import styles from './Showcase.module.css';

/** One numbered annotation. Hover, focus or tap spotlights it on the phone. */
export default function Callout({ number, callout, active, onSelect, delay }) {
  return (
    <m.li
      className={styles.callout}
      data-active={active || undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay }}
    >
      <button
        type="button"
        className={styles.calloutButton}
        aria-pressed={active}
        onClick={onSelect}
        onMouseEnter={onSelect}
        onFocus={onSelect}
      >
        <span className={styles.calloutNumber} aria-hidden="true">
          {number}
        </span>
        <span className={styles.calloutBody}>
          <span className={styles.calloutTitle}>{callout.title}</span>
          <span className={styles.calloutText}>{callout.text}</span>
        </span>
      </button>
    </m.li>
  );
}
