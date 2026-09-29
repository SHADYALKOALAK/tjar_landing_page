import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery, { DESKTOP_QUERY } from '../../hooks/useMediaQuery';
import { EASE_OUT } from '../../lib/motion';

/**
 * Entrance + depth for iPhone mockups: rises into place with a slight
 * rotation settle, then drifts with a gentle scroll parallax (desktop only).
 *
 * @param tilt      starting rotation in degrees (settles to 0)
 * @param parallax  max parallax offset in px (0 disables it)
 * @param float     adds a slow idle float after the entrance
 */
export default function DeviceReveal({ children, className, tilt = 0, parallax = 0, float = false, delay = 0 }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);
  const withParallax = parallax > 0 && isDesktop && !reduceMotion;

  const content = float ? (
    <m.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay + 1.2 }}
    >
      {children}
    </m.div>
  ) : (
    children
  );

  return (
    <m.div ref={ref} className={className} style={withParallax ? { y } : undefined}>
      <m.div
        initial={{ opacity: 0, y: 90, rotate: tilt, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: EASE_OUT, delay }}
      >
        {content}
      </m.div>
    </m.div>
  );
}
