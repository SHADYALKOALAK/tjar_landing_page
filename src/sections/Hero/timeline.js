/**
 * Hero load sequence (seconds). Message first, then the product:
 * headline → description → store badges → stage → phones → app boots → chips.
 *
 * The whole sequence is compressed relative to the original pacing (~20%
 * faster across the board) because Largest Contentful Paint is decided by the
 * front phone: its screen is the largest element in the viewport by a wide
 * margin (161,645px² vs 59,036px² for the headline), so the moment that screen
 * swaps from splash to home *is* the LCP. With the old timings the swap landed
 * at boot 2.3s + a 0.55s cross-fade, which pinned LCP near 2.9s no matter how
 * fast the page itself got.
 *
 * The order and the relative spacing are unchanged — only the clock. Note the
 * phones are given a little more of the budget than a flat 0.8 scale would
 * give them, so each one still lands before the next beat starts:
 *   stage 0.35 + 1.1s = 1.45s, front phone 0.55 + 1.2s = 1.75s, back phone
 * 0.75 + 1.1s = 1.85s, boot at 1.85s. That keeps a short beat of stillness
 * between the phone settling and its screen changing, which is what makes
 * the boot read as a boot rather than a flicker.
 */
export const HERO_TIMELINE = {
  eyebrow: 0.08,
  headline: 0.16,
  headlineStagger: 0.1,
  lead: 0.4,
  badges: 0.54,
  swoosh: 0.8,
  stage: 0.35,
  frontPhone: 0.55,
  backPhone: 0.75,
  boot: 1.85,
  ownerChip: 2.1,
  renterChip: 2.3,
};

/** Real screens the front phone walks through once the app has "booted". */
export const HERO_SCREEN_CYCLE = ['home', 'search', 'account'];
export const HERO_SCREEN_INTERVAL_MS = 3600;
