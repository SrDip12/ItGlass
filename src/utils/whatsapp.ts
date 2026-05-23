import { contact } from '../data/site';

export function whatsappHref(message = contact.defaultWhatsappText) {
  return `https://wa.me/${contact.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
