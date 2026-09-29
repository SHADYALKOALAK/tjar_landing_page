'use client';

import { useMemo } from 'react';
import { DOWNLOAD_TARGET, NAV } from '../config/site';
import { useLocale } from './LocaleContext';

/** Localized main navigation: [{ id, label, href }]. */
export function useNavItems() {
  const { t, href } = useLocale();
  return useMemo(
    () => NAV.map((item) => ({ id: item.id, label: t.nav[item.id], href: href(item.page, item.hash) })),
    [t, href],
  );
}

/** Localized legal page links. */
export function useLegalLinks() {
  const { t, href } = useLocale();
  return useMemo(
    () => [
      { id: 'privacy', label: t.legalLinks.privacy, href: href('privacy') },
      { id: 'terms', label: t.legalLinks.terms, href: href('terms') },
    ],
    [t, href],
  );
}

/** Localized fallback link for "Download the app" (the download section). */
export function useDownloadHref() {
  const { href } = useLocale();
  return href(DOWNLOAD_TARGET.page, DOWNLOAD_TARGET.hash);
}
