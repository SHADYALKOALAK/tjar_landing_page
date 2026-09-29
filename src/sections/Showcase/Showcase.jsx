'use client';

import { useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import DeviceReveal from '../../components/DeviceReveal/DeviceReveal';
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLocale } from '../../i18n/LocaleContext';
import { hotspots } from '../../content/screens';
import Callout from './Callout';
import styles from './Showcase.module.css';

const AUTOPLAY_MS = 3200;

/**
 * The real product page, annotated: each numbered callout spotlights the
 * matching part of the screen. Auto-advances while visible until the visitor
 * interacts; then it follows hover / focus / tap.
 */
export default function Showcase() {
  const { showcase } = useLocale().t.home;
  const markers = showcase.callouts.map((callout) => ({ id: callout.id, spot: hotspots[callout.spot] }));
  const half = Math.ceil(showcase.callouts.length / 2);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay || !inView || reduceMotion) return undefined;
    const timer = setInterval(
      () => setActiveIndex((index) => (index + 1) % showcase.callouts.length),
      AUTOPLAY_MS,
    );
    return () => clearInterval(timer);
  }, [autoplay, inView, reduceMotion]);

  const select = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  const active = showcase.callouts[activeIndex];

  const renderCallouts = (items, offset) =>
    items.map((callout, index) => (
      <Callout
        key={callout.id}
        number={offset + index + 1}
        callout={callout}
        active={callout.id === active.id}
        onSelect={() => select(offset + index)}
        delay={index * 0.08}
      />
    ));

  return (
    <section id="details" ref={sectionRef} className={`section ${styles.showcase}`} aria-labelledby="details-title">
      <div className="container">
        <SectionHeading
          id="details-title"
          eyebrow={showcase.eyebrow}
          title={showcase.title}
          lead={showcase.lead}
          align="center"
        />

        <div className={styles.layout}>
          <ol className={`${styles.callouts} ${styles.calloutsStart}`}>
            {renderCallouts(showcase.callouts.slice(0, half), 0)}
          </ol>

          <DeviceReveal className={styles.device} parallax={30}>
            <PhoneMockup
              screen="product"
              highlight={hotspots[active.spot]}
              markers={markers}
              activeMarker={active.id}
              className={styles.phone}
            />
          </DeviceReveal>

          <ol className={`${styles.callouts} ${styles.calloutsEnd}`} start={half + 1}>
            {renderCallouts(showcase.callouts.slice(half), half)}
          </ol>
        </div>
      </div>
    </section>
  );
}
