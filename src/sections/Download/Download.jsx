'use client';

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DeviceReveal from '../../components/DeviceReveal/DeviceReveal';
import Logo from '../../components/Logo/Logo';
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup';
import Reveal from '../../components/Reveal/Reveal';
import RevealText from '../../components/RevealText/RevealText';
import StoreBadges from '../../components/StoreBadges/StoreBadges';
import { useLocale } from '../../i18n/LocaleContext';
import styles from './Download.module.css';

export default function Download() {
  const { t, forward } = useLocale();
  const { download } = t.home;
  const bandRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // The band grows into place as it enters the viewport.
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ['start end', 'start 0.55'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <section id="download" className={`section ${styles.download}`} aria-labelledby="download-title">
      <div className="container">
        <m.div
          ref={bandRef}
          className={styles.band}
          style={reduceMotion ? undefined : { scale }}
        >
          <span className={styles.pattern} aria-hidden="true" />
          <span className={styles.glow} aria-hidden="true" />

          <div className={styles.copy}>
            <Reveal y={16}>
              <Logo className={styles.logo} decorative />
            </Reveal>
            <RevealText id="download-title" text={download.title} className={styles.title} />
            <Reveal as="p" className={styles.text} delay={0.12}>
              {download.text}
            </Reveal>
            <Reveal delay={0.2} className={styles.stores}>
              <StoreBadges size="lg" adaptive />
            </Reveal>
          </div>

          <div className={styles.visual}>
            <DeviceReveal className={styles.backPhone} tilt={10 * forward} parallax={50} delay={0.2}>
              <PhoneMockup screen="onboardingHow" className={styles.backDevice} />
            </DeviceReveal>
            <DeviceReveal className={styles.frontPhone} tilt={-6 * forward} parallax={24} float>
              <PhoneMockup screen="onboardingWelcome" className={styles.frontDevice} />
            </DeviceReveal>
          </div>
        </m.div>
      </div>
    </section>
  );
}
