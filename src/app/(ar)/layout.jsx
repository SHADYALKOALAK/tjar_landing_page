import Document from '@/app/Document';
import ar from '@/content/ar/index.js';
import { SITE_VIEWPORT } from '@/lib/viewport';

export const viewport = SITE_VIEWPORT;

/** Root layout for Arabic (RTL), served from the site root without a prefix. */
export default function ArabicLayout({ children }) {
  return <Document locale="ar" dictionary={ar}>{children}</Document>;
}