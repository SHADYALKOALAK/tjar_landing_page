import { m } from 'framer-motion';
import { Fragment } from 'react';
import { EASE_OUT } from '../../lib/motion';
import styles from './RevealText.module.css';

const container = (delay, stagger) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const word = {
  hidden: { y: '115%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: EASE_OUT, opacity: { duration: 0.4 } },
  },
};

/**
 * Masked word-by-word reveal for headings. The accessible name is the plain
 * text; the animated words are hidden from assistive tech.
 */
export default function RevealText({
  as = 'h2',
  text,
  className,
  delay = 0,
  stagger = 0.06,
  amount = 0.6,
  ...rest
}) {
  const Component = m[as];
  const words = text.split(' ');

  return (
    <Component
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={container(delay, stagger)}
      {...rest}
    >
      {words.map((item, index) => (
        <Fragment key={`${item}-${index}`}>
          <span className={styles.mask} aria-hidden="true">
            <m.span className={styles.word} variants={word}>
              {item}
            </m.span>
          </span>
          {index < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Component>
  );
}
