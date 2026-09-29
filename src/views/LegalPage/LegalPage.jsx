'use client';

import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import PageHero from '../../components/PageHero/PageHero';
import Reveal from '../../components/Reveal/Reveal';
import { useLocale } from '../../i18n/LocaleContext';
import useActiveSection from '../../hooks/useActiveSection';
import styles from './LegalPage.module.css';

/** Each legal page links to the other one. */
const RELATED = { privacy: 'terms', terms: 'privacy' };

const formatIndex = (index) => String(index + 1).padStart(2, '0');

/** Readable legal document: title band, sticky table of contents, sections. */
export default function LegalPage({ docId }) {
  const { t, href } = useLocale();
  const doc = t.legal[docId];
  const relatedId = RELATED[docId];
  const active = useActiveSection(doc.sections.map((section) => section.id));

  return (
    <article className={styles.page} aria-labelledby="legal-title">
      <PageHero id="legal-title" title={doc.title} lead={doc.lead}>
        <div className={styles.meta}>
          <span className={styles.updated}>
            {t.legalPage.updated} {doc.updated}
          </span>
          {doc.draft && (
            <span className={styles.draft}>
              <Icon name="bell" size={16} />
              {t.legal.draftNotice}
            </span>
          )}
        </div>
      </PageHero>

      <div className={`container ${styles.body}`}>
        <aside className={styles.toc} aria-labelledby="toc-title">
          <p id="toc-title" className={styles.tocTitle}>
            {t.legalPage.contents}
          </p>
          <ol className={styles.tocList}>
            {doc.sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={styles.tocLink}
                  aria-current={active === section.id ? 'location' : undefined}
                >
                  <span className={styles.tocIndex}>{formatIndex(index)}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className={styles.content}>
          {doc.sections.map((section, index) => (
            <Reveal
              as="section"
              key={section.id}
              id={section.id}
              className={styles.section}
              aria-labelledby={`${section.id}-title`}
              amount={0.2}
              y={20}
            >
              <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                <span className={styles.sectionIndex}>{formatIndex(index)}</span>
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <Reveal className={styles.help}>
            <div>
              <p className={styles.helpTitle}>{t.legalPage.helpTitle}</p>
              <p className={styles.helpText}>{t.legalPage.helpText}</p>
            </div>
            <div className={styles.helpActions}>
              <Button href={href('contact')} size="md" icon="chat">
                {t.legalPage.helpButton}
              </Button>
              <a href={href(relatedId)} className={styles.related}>
                {t.legal[relatedId].title}
                <Icon name="arrowForward" size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
