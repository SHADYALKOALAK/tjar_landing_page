import { m, useTransform } from 'framer-motion';
import StoreBadges from '../../components/StoreBadges/StoreBadges';
import { useLocale } from '../../i18n/LocaleContext';
import { EASE_OUT } from '../../lib/motion';
import { HERO_TIMELINE as T } from './timeline';
import styles from './Hero.module.css';

const enter = (delay, y = 18) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_OUT, delay },
});

/** Message first: headline → description → store badges, in sequence. */
export default function HeroCopy({ progress, parallax }) {
  const { hero } = useLocale().t.home;
  const y = useTransform(progress, [0, 1], [0, 90]);
  const opacity = useTransform(progress, [0, 0.8], [1, 0.25]);

  return (
    <m.div className={styles.copy} style={parallax ? { y, opacity } : undefined}>
      <m.p className={styles.eyebrow} {...enter(T.eyebrow, 12)}>
        <span className={styles.eyebrowDot} aria-hidden="true" />
        {hero.eyebrow}
      </m.p>

      <h1 id="hero-title" className={styles.title}>
        {hero.titleLines.map((line, index) => {
          const isAccent = index === hero.titleLines.length - 1;
          return (
            <span key={line} className={styles.line}>
              <m.span
                className={isAccent ? styles.accent : styles.lineText}
                initial={{ y: '120%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: EASE_OUT,
                  delay: T.headline + index * T.headlineStagger,
                  // Fade in quickly so Arabic marks never peek above the mask early.
                  opacity: { duration: 0.5, delay: T.headline + 0.05 + index * T.headlineStagger },
                }}
              >
                {line}
                {isAccent && (
                  <svg className={styles.swoosh} viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true">
                    <m.path
                      d="M4 17C58 7 132 5 216 13"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.9, ease: EASE_OUT, delay: T.swoosh }}
                    />
                  </svg>
                )}
              </m.span>
              {!isAccent && ' '}
            </span>
          );
        })}
      </h1>

      <m.p className={styles.lead} {...enter(T.lead)}>
        {hero.lead}
      </m.p>

      <m.div className={styles.stores} {...enter(T.badges, 12)}>
        <StoreBadges size="md" adaptive lazy={false} className={styles.badges} />
      </m.div>
    </m.div>
  );
}
