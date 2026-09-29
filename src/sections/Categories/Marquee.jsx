import styles from './Categories.module.css';

/** Number of identical groups; two are enough for a seamless loop. */
const COPIES = 2;
/** Items repeated inside each group so short lists still span wide screens. */
const REPEAT = 3;

/**
 * Infinite, CSS-driven marquee (GPU transform only). Pauses on hover and is
 * rendered as a static, wrapped row for reduced-motion users.
 */
export default function Marquee({ children, duration = 40, reverse = false }) {
  const group = Array.from({ length: REPEAT }, (_, index) => (
    <div key={index} className={styles.set}>
      {children}
    </div>
  ));

  return (
    <div className={styles.marquee} style={{ '--duration': `${duration}s` }}>
      <div className={`${styles.track} ${reverse ? styles.reverse : ''}`}>
        {Array.from({ length: COPIES }, (_, copy) => (
          <div key={copy} className={styles.group} data-clone={copy > 0 || undefined}>
            {group}
          </div>
        ))}
      </div>
    </div>
  );
}
