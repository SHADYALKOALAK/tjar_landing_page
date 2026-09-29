'use client';

import { AnimatePresence, m } from 'framer-motion';
import { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { contact } from '../../config/site';
import { useLocale } from '../../i18n/LocaleContext';
import { buildContactMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import FormField from './FormField';
import { CONTACT_FIELDS, validateContact } from './validateContact';
import styles from './ContactPage.module.css';

/**
 * Contact form → WhatsApp. Nothing is stored or sent to a server: on submit
 * the message is prepared and WhatsApp opens with it, ready to send.
 */
export default function ContactForm({ values, onChange }) {
  const { t, locale, href } = useLocale();
  const { form, errors: messages, message: labels } = t.contactPage;
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const fieldRefs = useRef({});
  // In Arabic, numbers and emails are typed left-to-right inside an RTL form.
  const latinFieldDir = locale === 'ar' ? 'ltr' : undefined;

  const register = (name) => ({
    name,
    value: values[name],
    error: errors[name],
    optionalLabel: form.optional,
    inputRef: (element) => {
      fieldRefs.current[name] = element;
    },
    onChange: (event) => {
      const next = { ...values, [name]: event.target.value };
      onChange(next);
      setResult(null);
      // Re-validate live only after the first submit attempt.
      if (submitted) setErrors(validateContact(next, messages));
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    const nextErrors = validateContact(values, messages);
    setErrors(nextErrors);

    const firstInvalid = CONTACT_FIELDS.find((field) => nextErrors[field]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      setResult(null);
      return;
    }

    if (!contact.whatsappNumber) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[T Jar] contact.whatsappNumber is empty in src/config/site.js');
      }
      setResult({ type: 'unconfigured' });
      return;
    }

    const url = buildWhatsAppUrl(contact.whatsappNumber, buildContactMessage(values, labels));
    window.open(url, '_blank', 'noopener,noreferrer');
    setResult({ type: 'sent', url });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className={styles.formTitle}>
        {form.title}
      </h2>

      <div className={styles.fields}>
        <FormField
          {...register('name')}
          label={form.name}
          type="text"
          autoComplete="name"
          placeholder={form.namePlaceholder}
          className={styles.full}
        />
        <FormField
          {...register('phone')}
          label={form.phone}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir={latinFieldDir}
          placeholder={form.phonePlaceholder}
        />
        <FormField
          {...register('email')}
          label={form.email}
          optional
          type="email"
          inputMode="email"
          autoComplete="email"
          dir={latinFieldDir}
          placeholder={form.emailPlaceholder}
        />
        <FormField
          {...register('message')}
          label={form.message}
          multiline
          rows={4}
          placeholder={form.messagePlaceholder}
          className={styles.full}
        />
      </div>

      <Button type="submit" size="lg" icon="chat" fullWidth className={styles.submit}>
        {form.submit}
      </Button>

      <div className={styles.status} role="status" aria-live="polite">
        <AnimatePresence mode="wait">
          {result?.type === 'sent' && (
            <m.p
              key="sent"
              className={`${styles.notice} ${styles.noticeSuccess}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Icon name="check" size={18} strokeWidth={2.5} />
              <span>
                {form.sent}{' '}
                <a href={result.url} target="_blank" rel="noopener noreferrer" className={styles.noticeLink}>
                  {form.sentRetry}
                </a>
              </span>
            </m.p>
          )}
          {result?.type === 'unconfigured' && (
            <m.p
              key="unconfigured"
              className={`${styles.notice} ${styles.noticeWarning}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <Icon name="bell" size={18} />
              <span>{form.unconfigured}</span>
            </m.p>
          )}
        </AnimatePresence>
      </div>

      <p className={styles.privacy}>
        {form.privacy}{' '}
        <a href={href('privacy')} className={styles.privacyLink}>
          {form.privacyLink}
        </a>
      </p>
    </form>
  );
}
