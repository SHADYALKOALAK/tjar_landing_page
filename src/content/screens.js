import splash from '../assets/app/splash.webp';
import home from '../assets/app/home.webp';
import search from '../assets/app/search.webp';
import product from '../assets/app/product.webp';
import chats from '../assets/app/chats.webp';
import account from '../assets/app/account.webp';
import onboardingWelcome from '../assets/app/onboarding-welcome.webp';
import onboardingHow from '../assets/app/onboarding-how.webp';

/** Native size of every exported app screen (iPhone 6.7" logical resolution). */
export const SCREEN_SIZE = { width: 430, height: 932 };

/** Real T Jar app screens. Used as-is inside <PhoneMockup>; alt text lives in the language dictionaries (t.screens). */
export const screens = {
  splash: { src: splash },
  home: { src: home },
  search: { src: search },
  product: { src: product },
  chats: { src: chats },
  account: { src: account },
  onboardingWelcome: { src: onboardingWelcome },
  onboardingHow: { src: onboardingHow },
};

/**
 * UI regions on the real screens, in native pixels (430×932).
 * Used to draw highlight rings / markers precisely on top of the screenshots.
 */
export const hotspots = {
  homeAddButton: { x: 186, y: 804, w: 58, h: 60, shape: 'circle' },
  searchBar: { x: 16, y: 68, w: 398, h: 54 },
  productTags: { x: 16, y: 450, w: 398, h: 34 },
  productRating: { x: 150, y: 536, w: 264, h: 26 },
  productDeposit: { x: 200, y: 566, w: 214, h: 60 },
  productPrice: { x: 16, y: 638, w: 398, h: 48 },
  productTabs: { x: 16, y: 706, w: 398, h: 40 },
  productBook: { x: 16, y: 834, w: 398, h: 50 },
  accountStats: { x: 16, y: 206, w: 398, h: 64 },
  accountRequests: { x: 16, y: 402, w: 398, h: 50 },
  chatsFirst: { x: 6, y: 198, w: 418, h: 82 },
};
