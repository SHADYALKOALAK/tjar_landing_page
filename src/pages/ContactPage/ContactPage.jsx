import { useState } from 'react';
import Icon from '../../components/Icon/Icon';
import PageHero from '../../components/PageHero/PageHero';
import Reveal from '../../components/Reveal/Reveal';
import { contact } from '../../config/site';
import { useLocale } from '../../i18n/LocaleContext';
import { buildWhatsAppUrl } from '../../lib/whatsapp';
import ContactForm from './ContactForm';
import MessagePreview from './MessagePreview';
import { EMPTY_CONTACT } from './validateContact';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  const { t } = useLocale();
  const page = t.contactPage;
  const [values, setValues] = useState(EMPTY_CONTACT);

  const channels = [
    contact.whatsappNumber && {
      id: 'whatsapp',
      icon: 'whatsapp',
      label: page.channels.whatsapp,
      value: contact.whatsappDisplay,
      href: buildWhatsAppUrl(contact.whatsappNumber, t.whatsappFab.greeting),
      external: true,
    },
    contact.email && {
      id: 'email',
      icon: 'mail',
      label: page.channels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
  ].filter(Boolean);

  return (
    <article className={styles.page} aria-labelledby="contact-title">
      <PageHero id="contact-title" title={page.title} lead={page.lead}>
        <ol className={styles.steps}>
          {page.steps.map((step, index) => (
            <li key={step} className={styles.step}>
              <span className={styles.stepIndex}>{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </PageHero>

      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          {channels.length > 0 && (
            <Reveal as="section" aria-labelledby="channels-title">
              <h2 id="channels-title" className={styles.channelsTitle}>
                {page.channelsTitle}
              </h2>
              <ul className={styles.channels}>
                {channels.map((channel) => (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      className={`${styles.channel} ${channel.id === 'whatsapp' ? styles.channelWhatsapp : ''}`}
                      {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className={styles.channelIcon}>
                        <Icon name={channel.icon} size={24} />
                      </span>
                      <span className={styles.channelText}>
                        <span className={styles.channelLabel}>{channel.label}</span>
                        <span className={`${styles.channelValue} latin`}>{channel.value}</span>
                      </span>
                      <Icon name="arrowForward" size={18} className={styles.channelArrow} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.15} className={styles.previewWrap}>
            <MessagePreview values={values} />
          </Reveal>
        </div>

        <Reveal y={40} delay={0.1}>
          <ContactForm values={values} onChange={setValues} />
        </Reveal>
      </div>
    </article>
  );
}
