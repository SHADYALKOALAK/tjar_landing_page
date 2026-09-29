'use client';

import { useReducedMotion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery, { DESKTOP_QUERY } from '../../hooks/useMediaQuery';
import HeroBackdrop from './HeroBackdrop';
import HeroCopy from './HeroCopy';
import HeroVisual from './HeroVisual';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Scroll-linked parallax only where it adds depth without costing comfort.
  const parallax = isDesktop && !reduceMotion;

  return (
    <section id="top" ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <HeroBackdrop containerRef={sectionRef} />
      <div className={`container ${styles.inner}`}>
        <HeroCopy progress={scrollYProgress} parallax={parallax} />
        <HeroVisual progress={scrollYProgress} parallax={parallax} />
      </div>
    </section>
  );
}
