'use client';

import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLocale } from '../../i18n/LocaleContext';
import SidePanel from './SidePanel';
import styles from './Sides.module.css';

/** The two-sided marketplace, told as a split diptych: owners | renters. */
export default function Sides() {
  const { sides } = useLocale().t.home;

  return (
    <section className={`section ${styles.sides}`} aria-labelledby="sides-title">
      <div className="container">
        <SectionHeading id="sides-title" eyebrow={sides.eyebrow} title={sides.title} lead={sides.lead} align="center" />

        <div className={styles.split}>
          {sides.items.map((side, index) => (
            <SidePanel key={side.id} side={side} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
