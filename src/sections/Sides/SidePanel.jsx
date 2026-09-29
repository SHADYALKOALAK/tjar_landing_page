import { m } from 'framer-motion';
import DeviceReveal from '../../components/DeviceReveal/DeviceReveal';
import Icon from '../../components/Icon/Icon';
import PhoneMockup from '../../components/PhoneMockup/PhoneMockup';
import { useAudience } from '../../context/AudienceContext';
import { useLocale } from '../../i18n/LocaleContext';
import { EASE_OUT } from '../../lib/motion';
import styles from './Sides.module.css';

/** One half of the split: copy + the real screen for that side of the market. */
export default function SidePanel({ side, index }) {
  const { exploreAudience } = useAudience();
  const { forward } = useLocale();
  // Each panel enters from its own outer edge (owners sit at the reading start).
  const fromX = (index === 0 ? -64 : 64) * forward;

  return (
    <m.article
      id={side.id}
      className={`${styles.panel} ${styles[side.audience]}`}
      aria-labelledby={`${side.id}-title`}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, ease: EASE_OUT, delay: index * 0.1 }}
    >
      <Icon name={side.icon} size={220} strokeWidth={1} className={styles.watermark} />

      <div className={styles.copy}>
        <span className={styles.badge}>
          <Icon name={side.icon} size={16} strokeWidth={2.25} />
          {side.label}
        </span>
        <h3 id={`${side.id}-title`} className={styles.title}>
          {side.title}
        </h3>
        <p className={styles.text}>{side.text}</p>

        <ul className={styles.points}>
          {side.points.map((point) => (
            <li key={point} className={styles.point}>
              <span className={styles.check} aria-hidden="true">
                <Icon name="check" size={14} strokeWidth={2.75} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <button type="button" className={styles.link} onClick={() => exploreAudience(side.audience)}>
          {side.cta}
          <Icon name="arrowForward" size={18} className={styles.linkIcon} />
        </button>
      </div>

      <DeviceReveal className={styles.visual} tilt={(index === 0 ? 8 : -8) * forward} parallax={28} delay={0.15}>
        <PhoneMockup screen={side.screen} className={styles.device} />
      </DeviceReveal>
    </m.article>
  );
}
