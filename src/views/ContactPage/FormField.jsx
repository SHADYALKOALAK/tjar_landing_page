'use client';

import { AnimatePresence, m } from 'framer-motion';
import styles from './ContactPage.module.css';

/** Labelled input / textarea with an accessible, animated error message. */
export default function FormField({
  name,
  label,
  optional = false,
  optionalLabel,
  multiline = false,
  error,
  inputRef,
  className,
  ...inputProps
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const Control = multiline ? 'textarea' : 'input';

  return (
    <div className={[styles.field, error && styles.fieldInvalid, className].filter(Boolean).join(' ')}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}>{optionalLabel}</span>}
      </label>
      <Control
        ref={inputRef}
        id={id}
        name={name}
        className={styles.control}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        aria-required={optional ? undefined : true}
        {...inputProps}
      />
      <AnimatePresence initial={false}>
        {error && (
          <m.p
            id={errorId}
            className={styles.error}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  );
}
