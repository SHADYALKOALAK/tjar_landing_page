import { useState } from 'react';
import Reveal from '../../components/Reveal/Reveal';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLocale } from '../../i18n/LocaleContext';
import FaqItem from './FaqItem';
import styles from './Faq.module.css';

export default function Faq() {
  const { faq } = useLocale().t.home;
  const [openId, setOpenId] = useState(faq.items[0].id);

  return (
    <section id="faq" className={`section ${styles.faq}`} aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} lead={faq.lead} className={styles.heading} />

        <Reveal className={styles.list} delay={0.1}>
          {faq.items.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
