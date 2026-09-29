'use client';

import Image from 'next/image';
import { AnimatePresence, m } from 'framer-motion';
import { SCREEN_SIZE, screens } from '../../content/screens';
import { useLocale } from '../../i18n/LocaleContext';
import { EASE_OUT } from '../../lib/motion';
import styles from './PhoneMockup.module.css';

/**
 * How a new screen replaces the previous one. In both cases the outgoing
 * screen stays opaque underneath until the incoming one has landed.
 * - fade:  cross-dissolve with a slight settle (boot, step changes)
 * - slide: RTL app navigation, the new screen pushes in from the left
 */
const SWAPS = {
  fade: {
    initial: { opacity: 0, scale: 1.035, x: 0, zIndex: 1 },
    animate: { opacity: 1, scale: 1, x: 0, zIndex: 1 },
    exit: { opacity: 0, zIndex: 0, transition: { duration: 0.15, delay: 0.5 } },
    transition: { duration: 0.55, ease: EASE_OUT },
  },
  slide: {
    initial: { x: '-100%', opacity: 1, scale: 1, zIndex: 1 },
    animate: { x: 0, opacity: 1, scale: 1, zIndex: 1 },
    exit: { x: '30%', zIndex: 0, transition: { duration: 0.65, ease: EASE_OUT } },
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

const toPercent = ({ x, y, w, h }) => ({
  left: `${(x / SCREEN_SIZE.width) * 100}%`,
  top: `${(y / SCREEN_SIZE.height) * 100}%`,
  width: `${(w / SCREEN_SIZE.width) * 100}%`,
  height: `${(h / SCREEN_SIZE.height) * 100}%`,
});

/**
 * Realistic iPhone frame that displays a real T Jar screen, pixel-true.
 * The frame scales from a single width (`--phone-w`) through container
 * query units, so bezel, radius and Dynamic Island stay proportional.
 *
 * The screenshot is rendered with next/image; the swap animation lives on a
 * motion wrapper around it, because next/image renders a plain <img> and
 * cannot take motion props.
 *
 * @param screen     key of `screens` (e.g. 'home')
 * @param priority   load eagerly with high fetch priority (above the fold)
 * @param highlight  hotspot to spotlight on the screen (see `hotspots`)
 * @param markers    [{ id, label, spot }] numbered badges on the screen
 * @param activeMarker id of the marker that is currently emphasised
 * @param swap       'fade' | 'slide' — transition used when `screen` changes
 */
export default function PhoneMockup({
  screen,
  priority = false,
  highlight,
  markers,
  activeMarker,
  className,
  decorative = false,
  swap = 'fade',
}) {
  const { t } = useLocale();
  const { src } = screens[screen];
  const alt = t.screens[screen];
  const classes = [styles.phone, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.frame}>
        <span className={`${styles.hw} ${styles.action}`} aria-hidden="true" />
        <span className={`${styles.hw} ${styles.volUp}`} aria-hidden="true" />
        <span className={`${styles.hw} ${styles.volDown}`} aria-hidden="true" />
        <span className={`${styles.hw} ${styles.power}`} aria-hidden="true" />

        <div className={styles.bezel}>
          <div className={styles.screen}>
            <AnimatePresence initial={false}>
              <m.div key={screen} className={styles.swap} {...SWAPS[swap]}>
                <Image
                  src={src}
                  alt={decorative ? '' : alt}
                  width={SCREEN_SIZE.width}
                  height={SCREEN_SIZE.height}
                  sizes="(max-width: 1023px) 240px, 300px"
                  priority={priority}
                  loading={priority ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable={false}
                  className={styles.image}
                />
              </m.div>
            </AnimatePresence>

            {highlight && (
              <m.span
                className={styles.spotlight}
                aria-hidden="true"
                initial={false}
                animate={{
                  ...toPercent(highlight),
                  borderRadius: highlight.shape === 'circle' ? '50%' : '3.4cqw',
                }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              />
            )}

            <span className={styles.island} aria-hidden="true" />
            <span className={styles.glare} aria-hidden="true" />
          </div>

          {markers && (
            <div className={styles.markers} aria-hidden="true">
              {markers.map((marker, index) => (
                <span
                  key={marker.id}
                  className={styles.marker}
                  data-active={marker.id === activeMarker || undefined}
                  style={{ top: `${((marker.spot.y + marker.spot.h / 2) / SCREEN_SIZE.height) * 100}%` }}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
