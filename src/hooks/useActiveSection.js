import { useEffect, useState } from 'react';

/** Fraction of the viewport height used as the "reading line". */
const READING_LINE = 0.4;

/**
 * Returns the id of the tracked element currently crossing the reading line
 * (or null between tracked sections). rAF-throttled, so fast jumps and
 * smooth anchor scrolling always resolve to the right section.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const elements = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * READING_LINE;
      const current = elements.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= line && rect.bottom > line;
      });
      setActive(current ? current.id : null);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [key]);

  return active;
}
