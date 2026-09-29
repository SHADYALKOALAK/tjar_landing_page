import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/** Unread words stay readable (3.2:1 for large text) and darken as they are reached. */
const DIM_COLOR = '#8a9696';
const READ_COLOR = '#0f1b1b';

function Word({ children, progress, range }) {
  const color = useTransform(progress, range, [DIM_COLOR, READ_COLOR]);
  return <m.span style={{ color }}>{children}</m.span>;
}

/**
 * Paragraph whose words light up one by one as it scrolls through the
 * viewport. The full sentence is always in the DOM for assistive tech.
 */
export default function ScrollText({ text, className }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {reduceMotion
        ? text
        : words.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              progress={scrollYProgress}
              range={[index / words.length, (index + 1) / words.length]}
            >
              {word}
              {index < words.length - 1 ? ' ' : ''}
            </Word>
          ))}
    </p>
  );
}
