import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import useMediaQuery, { DESKTOP_QUERY } from '../../hooks/useMediaQuery';
import styles from './HeroBackdrop.module.css';

const FOLLOW_SPRING = { stiffness: 70, damping: 18, mass: 0.7 };

/**
 * Living hero atmosphere: slow brand-colour light, a drifting dot grid (the
 * app's onboarding texture), orbit rings behind the phones, and — on desktop
 * — a soft glow that follows the pointer. Transform/opacity only; static
 * when reduced motion is requested.
 */
export default function HeroBackdrop({ containerRef }) {
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const follow = isDesktop && !reduceMotion;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const x = useSpring(pointerX, FOLLOW_SPRING);
  const y = useSpring(pointerY, FOLLOW_SPRING);
  const opacity = useSpring(glowOpacity, FOLLOW_SPRING);

  useEffect(() => {
    const element = containerRef.current;
    if (!follow || !element) return undefined;

    const onMove = (event) => {
      const rect = element.getBoundingClientRect();
      pointerX.set(event.clientX - rect.left);
      pointerY.set(event.clientY - rect.top);
      glowOpacity.set(1);
    };
    const onLeave = () => glowOpacity.set(0);

    element.addEventListener('pointermove', onMove);
    element.addEventListener('pointerleave', onLeave);
    return () => {
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerleave', onLeave);
    };
  }, [follow, containerRef, pointerX, pointerY, glowOpacity]);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <span className={`${styles.light} ${styles.lightTeal}`} />
      <span className={`${styles.light} ${styles.lightGreen}`} />
      <span className={`${styles.light} ${styles.lightMint}`} />
      <span className={styles.dotsFrame}>
        <span className={styles.dots} />
      </span>
      <span className={styles.orbit}>
        <span className={styles.orbitInner} />
      </span>
      {follow && <m.span className={styles.glow} style={{ x, y, opacity }} />}
    </div>
  );
}
