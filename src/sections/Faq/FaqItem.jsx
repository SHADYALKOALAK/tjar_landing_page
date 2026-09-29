'use client';

import { AnimatePresence, m } from 'framer-motion';
import Icon from '../../components/Icon/Icon';
import { EASE_OUT } from '../../lib/motion';
import styles from './Faq.module.css';

/** Accordion item following the WAI-ARIA disclosure pattern. */
export default function FaqItem({ item, open, onToggle }) {
  const buttonId = `faq-q-${item.id}`;
  const panelId = `faq-a-${item.id}`;

  return (
    <div className={styles.item} data-open={open || undefined}>
      <h3 className={styles.question}>
        <button
          id={buttonId}
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {item.question}
          <span className={styles.icon} aria-hidden="true">
            <Icon name="plus" size={18} strokeWidth={2.25} />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className={styles.panel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <p className={styles.answer}>{item.answer}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
