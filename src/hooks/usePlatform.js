'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

function detectPlatform() {
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'android';
  // iPadOS reports itself as "Macintosh" but has touch support.
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return 'other';
}

/**
 * Best-effort mobile platform detection: 'ios' | 'android' | 'other'.
 *
 * The server cannot know the device, so it renders 'other'. useSyncExternalStore
 * hydrates with that same server value and switches to the real platform right
 * after hydration — reading navigator during render would make iOS/Android
 * markup differ from the server HTML (a hydration error).
 */
export default function usePlatform() {
  return useSyncExternalStore(subscribe, detectPlatform, () => 'other');
}
