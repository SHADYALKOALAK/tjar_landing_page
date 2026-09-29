import { toLatinDigits } from '../../lib/whatsapp';

export const EMPTY_CONTACT = { name: '', phone: '', email: '', message: '' };

/** Field order, used to focus the first invalid field. */
export const CONTACT_FIELDS = ['name', 'phone', 'email', 'message'];

const PHONE_PATTERN = /^\+?\d{8,15}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns { field: message } for invalid fields; messages come from the active language. */
export function validateContact(values, messages) {
  const errors = {};
  const phone = toLatinDigits(values.phone).replace(/[\s\-().]/g, '');

  if (values.name.trim().length < 2) errors.name = messages.name;

  if (!phone) errors.phone = messages.phoneRequired;
  else if (!PHONE_PATTERN.test(phone)) errors.phone = messages.phoneInvalid;

  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) errors.email = messages.email;

  if (values.message.trim().length < 5) errors.message = messages.message;

  return errors;
}
