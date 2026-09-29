import { m, useInView, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup';
import { useLocale } from '../../i18n/LocaleContext';
import { EASE_OUT } from '../../lib/motion';
import FloatingChip from './FloatingChip';
import { HERO_SCREEN_CYCLE, HERO_SCREEN_INTERVAL_MS, HERO_TIMELINE as T } from './timeline';
import styles from './Hero.module.css';

const IDLE_FLOAT = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
};

/**
 * One composition: brand stage, a main iPhone that boots (real splash →
 * real home screen) and then walks through real screens, a second iPhone
 * behind, and two chips that light up with the screen they belong to.
 */
export default function HeroVisual({ progress, parallax }) {
  const { t, forward } = useLocale();
  const { hero } = t.home;
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [booted, setBooted] = useState(false);
  const [screenIndex, setScreenIndex] = useState(0);
  const [cycled, setCycled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), reduceMotion ? 0 : T.boot * 1000);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  // Walk through real screens while the hero is visible.
  useEffect(() => {
    if (!booted || reduceMotion || !inView) return undefined;
    const timer = setInterval(() => {
      setCycled(true);
      setScreenIndex((index) => (index + 1) % HERO_SCREEN_CYCLE.length);
    }, HERO_SCREEN_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [booted, reduceMotion, inView]);

  const stageScale = useTransform(progress, [0, 1], [1, 0.93]);
  const frontY = useTransform(progress, [0, 1], [0, -90]);
  // Rotations and offsets are mirrored in LTR (forward = +1) so the composition flips cleanly.
  const frontRotate = useTransform(progress, [0, 1], [0, -3 * forward]);
  const backY = useTransform(progress, [0, 1], [0, -200]);
  const backRotate = useTransform(progress, [0, 1], [9 * forward, 16 * forward]);
  const ownerChipY = useTransform(progress, [0, 1], [0, -260]);
  const renterChipY = useTransform(progress, [0, 1], [0, -140]);

  const withParallax = (style) => (parallax ? style : undefined);
  const frontScreen = booted ? HERO_SCREEN_CYCLE[screenIndex] : 'splash';

  return (
    <div ref={ref} className={styles.visual}>
      <m.div className={styles.stageWrap} style={withParallax({ scale: stageScale })}>
        <m.div
          className={styles.stage}
          initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: T.stage }}
        >
          <span className={styles.stagePattern} aria-hidden="true" />
          <span className={styles.stageGlow} aria-hidden="true" />
        </m.div>
      </m.div>

      <m.div className={styles.backPhone} style={withParallax({ y: backY, rotate: backRotate })}>
        <m.div
          initial={{ opacity: 0, x: 70 * forward, rotate: -8 * forward }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.1, ease: EASE_OUT, delay: T.backPhone }}
        >
          <PhoneMockup screen="product" className={styles.backDevice} priority />
        </m.div>
      </m.div>

      <m.div className={styles.frontPhone} style={withParallax({ y: frontY, rotate: frontRotate })}>
        <m.div
          initial={{ opacity: 0, y: 140, rotate: -4 * forward }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: T.frontPhone }}
        >
          <m.div {...IDLE_FLOAT}>
            <PhoneMockup
              screen={frontScreen}
              swap={cycled ? 'slide' : 'fade'}
              className={styles.frontDevice}
              priority
            />
          </m.div>
        </m.div>
      </m.div>

      <FloatingChip
        {...hero.chips.owner}
        dot
        delay={T.ownerChip}
        highlighted={booted && frontScreen === 'account'}
        className={styles.chipOwner}
        style={withParallax({ y: ownerChipY })}
      />
      <FloatingChip
        {...hero.chips.renter}
        delay={T.renterChip}
        highlighted={booted && frontScreen === 'home'}
        className={styles.chipRenter}
        style={withParallax({ y: renterChipY })}
      />
    </div>
  );
}
