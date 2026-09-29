'use client';

import { m } from 'framer-motion';
import Icon from '../../components/Icon/Icon';
import { SPRING_SOFT } from '../../lib/motion';
import styles from './Hero.module.css';

/**
 * Small floating label quoting a real in-app element (decorative).
 * `highlighted` gently lifts it while its screen is shown in the phone.
 */
export default function FloatingChip({ icon, label, dot = false, delay = 0, highlighted = false, className, style }) {
  return (
    <m.div className={`${styles.chip} ${className}`} style={style} aria-hidden="true">
      <m.div
        initial={{ opacity: 0, scale: 0.6, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ ...SPRING_SOFT, delay }}
      >
        <m.div
          className={styles.chipBody}
          data-highlighted={highlighted || undefined}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.8 }}
        >
          <span className={styles.chipIcon}>
            <Icon name={icon} size={18} />
          </span>
          <span className={styles.chipLabel}>{label}</span>
          {dot && <span className={styles.chipDot} />}
        </m.div>
      </m.div>
    </m.div>
  );
}
