import { m } from 'framer-motion';
import Icon from '../../components/Icon/Icon';
import Reveal from '../../components/Reveal/Reveal';
import { useLocale } from '../../i18n/LocaleContext';
import { SPRING_SOFT } from '../../lib/motion';
import ScrollText from './ScrollText';
import styles from './Intro.module.css';

export default function Intro() {
  const { intro } = useLocale().t.home;

  return (
    <section id="about" className={`section ${styles.intro}`} aria-labelledby="about-title">
      <div className="container">
        <Reveal as="h2" id="about-title" className={styles.eyebrow} y={16}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          {intro.eyebrow}
        </Reveal>

        <ScrollText text={intro.statement} className={styles.statement} />

        <div className={styles.pairs}>
          {intro.pairs.map((pair, index) => (
            <Reveal key={pair.id} className={`${styles.pair} ${styles[pair.id]}`} delay={index * 0.12} amount={0.6}>
              <span className={styles.question}>{pair.question}</span>
              <m.span
                className={styles.answer}
                initial={{ scale: 0.7, rotate: 0, opacity: 0 }}
                whileInView={{ scale: 1, rotate: index === 0 ? -3 : 3, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ ...SPRING_SOFT, delay: 0.25 + index * 0.12 }}
              >
                <Icon name={pair.icon} size={26} strokeWidth={2.25} className={styles.answerIcon} />
                {pair.answer}
              </m.span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className={styles.closing} delay={0.1}>
          {intro.closing}
        </Reveal>
      </div>
    </section>
  );
}
