import { useMemo } from 'react';

/** Best-effort mobile platform detection: 'ios' | 'android' | 'other'. */
export default function usePlatform() {
  return useMemo(() => {
    if (typeof navigator === 'undefined') return 'other';
    const ua = navigator.userAgent || '';
    if (/android/i.test(ua)) return 'android';
    // iPadOS reports itself as "Macintosh" but has touch support.
    if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
    return 'other';
  }, []);
}
