/**
 * Hero load sequence (seconds). Message first, then the product:
 * headline → description → store badges → stage → phones → app boots → chips.
 */
export const HERO_TIMELINE = {
  eyebrow: 0.1,
  headline: 0.2,
  headlineStagger: 0.13,
  lead: 0.5,
  badges: 0.68,
  swoosh: 1.0,
  stage: 0.55,
  frontPhone: 0.85,
  backPhone: 1.15,
  boot: 2.3,
  ownerChip: 2.55,
  renterChip: 2.75,
};

/** Real screens the front phone walks through once the app has "booted". */
export const HERO_SCREEN_CYCLE = ['home', 'search', 'account'];
export const HERO_SCREEN_INTERVAL_MS = 3600;
