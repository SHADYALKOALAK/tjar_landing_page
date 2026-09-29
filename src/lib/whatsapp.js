/** Converts Arabic-Indic / Eastern Arabic-Indic digits to Latin digits. */
export function toLatinDigits(value) {
  return value
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0));
}

/**
 * Formats the contact form into the WhatsApp message the visitor will send.
 * `labels` comes from the active language (t.contactPage.message).
 */
export function buildContactMessage({ name, phone, email, message }, labels) {
  return [
    labels.greeting,
    labels.intro,
    '',
    `${labels.name}: ${name.trim()}`,
    `${labels.phone}: ${toLatinDigits(phone.trim())}`,
    `${labels.email}: ${email.trim() || '—'}`,
    '',
    `${labels.message}:`,
    message.trim(),
  ].join('\n');
}

/** wa.me deep link. `number` must be international, digits only (e.g. 9665XXXXXXXX). */
export function buildWhatsAppUrl(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
