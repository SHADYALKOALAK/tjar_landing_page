'use client';

import Icon from '../../components/Icon/Icon';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { useLocale } from '../../i18n/LocaleContext';
import Marquee from './Marquee';
import styles from './Categories.module.css';

/** Real in-app categories and searches, shown as two kinetic rows. */
export default function Categories() {
  const { categories } = useLocale().t.home;

  return (
    <section id="categories" className={`section ${styles.categories}`} aria-labelledby="categories-title">
      <div className="container">
        <SectionHeading
          id="categories-title"
          eyebrow={categories.eyebrow}
          title={categories.title}
          lead={categories.lead}
          align="center"
        />
      </div>

      {/* Accessible, static version of the moving rows below */}
      <div className="visually-hidden">
        <h3>{categories.listLabel}</h3>
        <ul>
          {categories.items.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
        <h3>{categories.searchesLabel}</h3>
        <ul>
          {categories.searches.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>

      <div className={styles.rows} aria-hidden="true">
        <Marquee duration={38}>
          {categories.items.map((item) => (
            <span key={item.id} className={styles.category}>
              <span className={styles.categoryIcon}>
                <Icon name={item.icon} size={30} strokeWidth={1.6} />
              </span>
              {item.label}
            </span>
          ))}
        </Marquee>

        <Marquee duration={46} reverse>
          {categories.searches.map((term) => (
            <span key={term} className={styles.search}>
              <Icon name="search" size={20} strokeWidth={2} />
              {term}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
