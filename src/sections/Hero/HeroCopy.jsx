'use client';

import { m, useTransform } from 'framer-motion';
import StoreBadges from '../../components/StoreBadges/StoreBadges';
import { useLocale } from '../../i18n/LocaleContext';
import { HERO_TIMELINE as T } from './timeline';
import styles from './Hero.module.css';

/**
 * Inline custom properties that drive the CSS entrance in Hero.module.css:
 * `--enter-delay` is the hero timeline position, `--enter-y` the travel
 * distance. They are read by the @keyframes in globals.css, so the browser
 * runs the reveal at first paint.
 */
const enter = (delay, y) => ({ '--enter-delay': `${delay}s`, '--enter-y': `${y}px` });

/**
 * Message first: headline → description → store badges, in sequence.
 *
 * The above-the-fold entrance is plain CSS rather than framer-motion. These
 * elements used to carry an `initial={{ opacity: 0 }}` prop, which
 * framer-motion also writes into the server-rendered HTML — the hero shipped
 * with every headline line, the lead and the badges invisible and only
 * appeared once the JavaScript bundle had hydrated, which is what held Largest
 * Contentful Paint at ~3.8s. The CSS classes run the same reveal at first
 * paint, with the same timeline delays and the same easing curve
 * (--ease-out is the same cubic-bezier as the EASE_OUT constant).
 *
 * The scroll-linked parallax on the wrapper stays with framer-motion: it is
 * driven by scroll position, not by a one-off entrance.
 */
export default function HeroCopy({ progress, parallax }) {
  const { hero } = useLocale().t.home;
  const y = useTransform(progress, [0, 1], [0, 90]);
  const opacity = useTransform(progress, [0, 0.8], [1, 0.25]);

  return (
    <m.div className={styles.copy} style={parallax ? { y, opacity } : undefined}>
      <p className={`${styles.eyebrow} ${styles.enterUp}`} style={enter(T.eyebrow, 12)}>
        <span className={styles.eyebrowDot} aria-hidden="true" />
        {hero.eyebrow}
      </p>

      <h1 id="hero-title" className={styles.title}>
        {hero.titleLines.map((line, index) => {
          const isAccent = index === hero.titleLines.length - 1;
          const delay = T.headline + index * T.headlineStagger;

          return (
            <span key={line} className={styles.line}>
              <span
                className={`${styles.enterLine} ${isAccent ? styles.accent : styles.lineText}`}
                style={{ '--enter-delay': `${delay}s` }}
              >
                {line}
                {isAccent && (
                  <svg
                    className={styles.swoosh}
                    viewBox="0 0 220 24"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    style={{ '--enter-delay': `${T.swoosh}s` }}
                  >
                    {/* pathLength="1" lets a dash of 1 cover the whole curve. */}
                    <path pathLength="1" d="M4 17C58 7 132 5 216 13" />
                  </svg>
                )}
              </span>
              {!isAccent && ' '}
            </span>
          );
        })}
      </h1>

      <p className={`${styles.lead} ${styles.enterUp}`} style={enter(T.lead, 18)}>
        {hero.lead}
      </p>

      <div className={`${styles.stores} ${styles.enterUp}`} style={enter(T.badges, 12)}>
        <StoreBadges size="md" adaptive lazy={false} className={styles.badges} />
      </div>
    </m.div>
  );
}
