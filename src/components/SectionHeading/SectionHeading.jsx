import Reveal from '../Reveal/Reveal';
import RevealText from '../RevealText/RevealText';
import styles from './SectionHeading.module.css';

/**
 * Eyebrow + h2 + optional lead. The title reveals word by word, then the lead.
 * align: 'start' | 'center'   tone: 'default' | 'inverse'
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = 'start',
  tone = 'default',
  className,
}) {
  const classes = [styles.heading, styles[align], styles[tone], className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {eyebrow && (
        <Reveal as="p" className={styles.eyebrow} y={16}>
          <span className={styles.dot} aria-hidden="true" />
          {eyebrow}
        </Reveal>
      )}
      <RevealText id={id} text={title} className={styles.title} delay={0.08} />
      {lead && (
        <Reveal as="p" className={styles.lead} delay={0.3}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}
