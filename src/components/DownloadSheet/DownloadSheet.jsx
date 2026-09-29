'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useRef } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import useDialog from '../../hooks/useDialog';
import useMediaQuery from '../../hooks/useMediaQuery';
import { EASE_OUT } from '../../lib/motion';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import StoreBadges from '../StoreBadges/StoreBadges';
import styles from './DownloadSheet.module.css';

const SHEET_QUERY = '(max-width: 639px)';
const DISMISS_DISTANCE = 110;

/**
 * Download options in one tap: a bottom sheet on phones (drag down to
 * dismiss), a centred dialog on larger screens. The visitor's platform
 * store is listed first.
 */
export default function DownloadSheet({ open, onClose }) {
  const { t, href } = useLocale();
  const panelRef = useRef(null);
  const isSheet = useMediaQuery(SHEET_QUERY);
  useDialog(open, panelRef, onClose);

  const motionProps = isSheet
    ? {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' },
        transition: { type: 'spring', stiffness: 380, damping: 38 },
        drag: 'y',
        dragConstraints: { top: 0, bottom: 0 },
        dragElastic: { top: 0, bottom: 0.6 },
        onDragEnd: (_, info) => {
          if (info.offset.y > DISMISS_DISTANCE || info.velocity.y > 600) onClose();
        },
      }
    : {
        initial: { opacity: 0, y: 28, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 16, scale: 0.98 },
        transition: { duration: 0.45, ease: EASE_OUT },
      };

  return (
    <AnimatePresence>
      {open && (
        <div className={styles.root}>
          <m.div
            className={styles.backdrop}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-sheet-title"
            aria-describedby="download-sheet-text"
            className={styles.panel}
            {...motionProps}
          >
            <span className={styles.grabber} aria-hidden="true" />
            <button type="button" className={styles.close} onClick={onClose} aria-label={t.common.close}>
              <Icon name="close" size={20} />
            </button>

            <span className={styles.mark}>
              <Logo className={styles.logo} decorative />
            </span>
            <h2 id="download-sheet-title" className={styles.title}>
              {t.downloadSheet.title}
            </h2>
            <p id="download-sheet-text" className={styles.text}>
              {t.downloadSheet.text}
            </p>

            <StoreBadges size="lg" layout="stack" adaptive lazy={false} className={styles.badges} />

            <a href={href('home', 'how')} className={styles.secondary} onClick={onClose}>
              {t.downloadSheet.howLink}
              <Icon name="arrowForward" size={16} />
            </a>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
