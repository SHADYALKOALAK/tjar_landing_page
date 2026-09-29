import { m } from 'framer-motion';
import { useId, useRef } from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import Icon from '../Icon/Icon';
import styles from './SegmentedControl.module.css';

/**
 * Accessible tab-style switch (WAI-ARIA tabs pattern, automatic activation).
 * options: [{ value, label, icon? }]
 */
export default function SegmentedControl({ options, value, onChange, label, panelId, className }) {
  const indicatorId = useId();
  const tabRefs = useRef([]);
  const { forward } = useLocale();

  const handleKeyDown = (event, index) => {
    // The arrow pointing in the reading direction moves to the next tab.
    const keys = { ArrowLeft: -forward, ArrowRight: forward, Home: -index, End: options.length - 1 - index };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (index + keys[event.key] + options.length) % options.length;
    onChange(options[next].value);
    tabRefs.current[next]?.focus();
  };

  return (
    <div role="tablist" aria-label={label} className={[styles.control, className].filter(Boolean).join(' ')}>
      {options.map((option, index) => {
        const selected = option.value === value;
        return (
          <button
            key={option.value}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`${panelId}-tab-${option.value}`}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            className={styles.tab}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {selected && (
              <m.span
                layoutId={indicatorId}
                className={styles.indicator}
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
              />
            )}
            <span className={styles.label}>
              {option.icon && <Icon name={option.icon} size={18} />}
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
