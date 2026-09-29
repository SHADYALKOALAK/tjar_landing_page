'use client';

import { m, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import DeviceReveal from '../../components/DeviceReveal/DeviceReveal';
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup';
import { hotspots } from '../../content/screens';
import { EASE_OUT } from '../../lib/motion';
import styles from './HowItWorks.module.css';

const formatIndex = (index) => String(index + 1).padStart(2, '0');

/** A step becomes active when it crosses the middle band of the viewport. */
function StoryStep({ step, index, active, onEnter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (inView) onEnter(index);
  }, [inView, index, onEnter]);

  return (
    <li ref={ref} className={styles.storyStep} data-active={active || undefined}>
      <m.div
        className={styles.storyStepInner}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <span className={styles.storyNumber} aria-hidden="true">
          {formatIndex(index)}
        </span>
        <h3 className={styles.storyTitle}>{step.title}</h3>
        <p className={styles.storyText}>{step.text}</p>
      </m.div>
    </li>
  );
}

/**
 * Desktop: steps scroll by while a sticky iPhone swaps to the matching real
 * screen and spotlights the exact UI element being described.
 */
export default function StoryDesktop({ steps, audience, active, onActiveChange, toggle, panelId }) {
  const step = steps[active] ?? steps[0];

  return (
    <div
      className={styles.story}
      id={panelId}
      role="tabpanel"
      aria-labelledby={`${panelId}-tab-${audience}`}
    >
      <ol className={styles.storySteps} key={audience}>
        {steps.map((item, index) => (
          <StoryStep
            key={item.id}
            step={item}
            index={index}
            active={index === active}
            onEnter={onActiveChange}
          />
        ))}
      </ol>

      <div className={styles.storyAside}>
        <div className={styles.sticky}>
          {toggle}
          <DeviceReveal tilt={-5}>
            <PhoneMockup screen={step.screen} highlight={hotspots[step.spot]} className={styles.storyDevice} />
          </DeviceReveal>
          <p className={styles.storyStatus} aria-live="polite">
            <span className={styles.storyStatusIndex}>{formatIndex(active)}</span>
            {step.title}
          </p>
        </div>
      </div>
    </div>
  );
}
