import { AnimatePresence, m } from 'framer-motion';
import DeviceReveal from '../../components/DeviceReveal/DeviceReveal';
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup';
import { hotspots } from '../../content/screens';
import { EASE_OUT } from '../../lib/motion';
import styles from './HowItWorks.module.css';

/**
 * Mobile & tablet: no sticky scrolling. A compact tap-through stepper that
 * keeps the phone and the step list together in one short section.
 */
export default function StepperMobile({ steps, audience, active, onActiveChange, toggle, panelId }) {
  const step = steps[active] ?? steps[0];

  return (
    <div className={styles.stepper}>
      <div className={styles.stepperToggle}>{toggle}</div>

      <div
        className={styles.stepperBody}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${audience}`}
      >
        <DeviceReveal className={styles.stepperVisual} tilt={-4}>
          <PhoneMockup screen={step.screen} highlight={hotspots[step.spot]} className={styles.stepperDevice} />
        </DeviceReveal>

        <ol className={styles.stepperList}>
          {steps.map((item, index) => {
            const isActive = index === active;
            const panel = `${panelId}-step-${item.id}`;
            return (
              <li key={`${audience}-${item.id}`} className={styles.stepperItem} data-active={isActive || undefined}>
                <h3 className={styles.stepperHeading}>
                  <button
                    type="button"
                    className={styles.stepperButton}
                    aria-expanded={isActive}
                    aria-controls={panel}
                    onClick={() => onActiveChange(index)}
                  >
                    <span className={styles.stepperNumber} aria-hidden="true">
                      {index + 1}
                    </span>
                    {item.title}
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <m.div
                      id={panel}
                      key="panel"
                      className={styles.stepperPanel}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE_OUT }}
                    >
                      <p className={styles.stepperText}>{item.text}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
