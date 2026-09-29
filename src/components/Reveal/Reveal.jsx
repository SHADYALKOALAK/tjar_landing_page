import { m } from 'framer-motion';
import { DURATION, EASE_OUT } from '../../lib/motion';

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = 28,
  amount = 0.3,
  className,
  children,
  ...rest
}) {
  const Component = m[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
