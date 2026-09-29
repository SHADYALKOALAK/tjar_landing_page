import Document from '@/app/Document';
import en from '@/content/en/index.js';
import { SITE_VIEWPORT } from '@/lib/viewport';

export const viewport = SITE_VIEWPORT;

/**
 * Root layout for English (LTR). It lives inside the `en` folder rather than in
 * the (en) group, because the group itself contributes nothing to the URL: a
 * page at (en)/page.jsx would resolve to `/` and collide with Arabic.
 */
export default function EnglishLayout({ children }) {
  return <Document locale="en" dictionary={en}>{children}</Document>;
}