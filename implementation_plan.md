# T Jar (تي جار) — Landing Page Implementation Plan

## 0. Inputs audited

| Input | Status | Notes |
|---|---|---|
| Design System file | **Not provided** | Tokens below were extracted from the real app screenshots (pixel-sampled). Where the official Design System differs, it wins; update `src/styles/tokens.css` only. |
| App screenshots (8) | Provided | 430×932 WebP with transparent rounded corners (~26px), 5–26 KB each. Already optimized, so they're used as-is. |
| Logo | Only raster (splash screen, ~100×76px) | Reconstructed as a geometric SVG (`src/components/Logo`) by measuring the splash pixels (sub-pixel edge detection, overlay-verified). Replace with the official vector when available. |
| Fonts | Not provided | App typography matches **IBM Plex Sans Arabic**. Self-hosted via `@fontsource` (400/500/600/700). |
| Store / social links, WhatsApp number | Not provided | Nothing invented. One central config: `src/config/site.js` (empty values render as marked placeholders). |
| Store badges | Official artwork | Apple "Download on the App Store" SVG (developer.apple.com) + Google Play "Get it on" PNG (play.google.com, transparent padding trimmed only), unmodified colors. |
| Legal text | Not provided | `/privacy-policy` and `/terms` are drafts describing the website only, visibly labelled as drafts (`draft: true` in `src/content/legal.js`). |

### Real product facts (the only claims the site makes)
Taken directly from the screenshots:
- Onboarding: «منصة تربطك بالأشخاص اللي يملكون أشياء قد تحتاجها… وتخليك تستأجرها بسهولة بدل ما تشتريها» / «كل اللي عليك تشارك ممتلكاتك بكل بساطة، والباقي أرباح تجيك بسهولة وراحة».
- Home: categories (إلكترونيات، ألعاب، المنزل، كتب، تخييم), search, «المنتجات القريبة منك», banner «ليه تشتريها بآلاف؟».
- Search: filters, «الأكثر بحثًا» (أغراض تخييم، أغراض البحر والبر، الكترونيات).
- Product: status «متاح», category tag, location, ratings/«التقييمات», «عدد القطع المتاحة», «مبلغ التأمين», «سعر الإيجار», tabs (معلومات الإيجار / معلومات المالك / التقييمات), share, favorite, «إحجز الآن».
- Chats: «محادثاتي» between renter & owner (e.g. «متى يمكنني استلام…؟»).
- Account: stats (الإعلانات / المؤجّرة / المستأجرة), «طلبات الإيجار الواردة», «إدارة منتجاتي», المفضلة, المحفظة, الإشعارات, language.
- Bottom nav: الرئيسية، حجوزاتي، (+) إضافة، محادثاتي، المزيد.

No statistics, users, reviews, partners, awards or trust claims beyond the above.

## 1. Design System (extracted)

- **Primary** `#00A5A5` (buttons, brand surfaces, display accents) — **Secondary** `#00CE67` (accents, status, highlights).
- Derived from the app itself: dark teal `#008888` (app header/splash gradient end → hover/pressed), light teal `#E6F6F5` (secondary button), app background `#F6F8FA`, available-badge `#D8FFE8`.
- Text-safe shades for small text: teal `#007373` (5.7:1), green `#007F3E` (5.0:1).
- Radius: 12px buttons/inputs (app), 16px list rows, 24–44px large compositions, pill chips.
- Shadows: soft, teal-tinted, low opacity (the app uses near-flat surfaces).
- Typography: IBM Plex Sans Arabic; fluid `clamp()` scale; Arabic line-height 1.25–1.85; **no letter-spacing** on Arabic.
- Contrast note: white on `#00A5A5` is 3.0:1. That passes WCAG AA for large/bold text and UI components, so primary buttons use 700-weight labels. If strict AA for small text is required, set `--btn-primary-bg` to `var(--teal-700)`.

## 2. Page architecture (story)

1. **Header**: floating pill, blur on scroll, active-section tracking, accessible mobile menu.
2. **Hero**: «عندك شيء ما تستخدمه؟ خلّه يجيب لك دخل.» + one CTA. Teal stage with a main iPhone that "boots" (real splash screen → real home screen), a secondary iPhone (product page) behind, and two floating chips that quote real UI labels. Parallax on scroll.
3. **Intro (what is T Jar)**: the app's own sentence, revealed word by word as you scroll, then «عندك شيء؟ أجّره.» / «تحتاج شيء؟ استأجره.»
4. **Two sides** (`#owners`, `#renters`): a split diptych, one half per audience with its real screen. Halves slide in from their own sides, and on hover the phone lifts. Each half deep-links into How it works with its path pre-selected.
5. **How it works** (`#how`): owner/renter switch (shared state). Desktop has a sticky iPhone whose screen and highlight ring change as each step scrolls to center. Mobile uses a tap stepper (no sticky).
6. **Categories**: real categories + «الأكثر بحثًا» as two kinetic marquee rows (paused on hover, static for reduced motion).
7. **Showcase / trust** (`#details`): «كل ما تحتاجه، في مكان واحد». The product page in an iPhone with numbered markers tied to callouts (price, deposit, ratings, owner info, availability, book now), then an inline list of app capabilities.
8. **FAQ** (`#faq`): 5 answers built only from the facts above.
9. **Contact** moved to its own page `/contact`: name / phone / email (optional) / message → validated, then WhatsApp (+966 55 806 8777) opens with a prepared message (no backend, nothing stored). Direct channels: WhatsApp and info@tjar.com. Live message preview on desktop.
10. **Download** (`#download`): «ليه تشتريها بآلاف؟», official badges, onboarding screens in iPhones; the band scales in on scroll.
11. **Footer** (layout from the client's reference): underlined columns — ملخص / روابط مهمة / الاتصال والدعم (incl. WhatsApp and email) — then logo | store badges (+ VAT number once configured), centred copyright, a quiet «ج» texture and a drifting teal/green «ج» band along the rounded base.

Separate pages (multi-page build, work on any static host): `/contact`, `/privacy-policy`, `/terms`.

Site-wide: floating WhatsApp button (bottom-left, official WhatsApp green, label introduces itself once and on hover/focus).

No card grids anywhere; each section uses a different composition.

## 2b. Refinement (mobile-first download)

- **Header**: desktop shows «تحميل التطبيق» (opens the download sheet: dialog, platform store first); on mobile the header is Logo + Menu only (client decision), store badges live in the hero, menu and footer.
- **Hero**: headline → description → official store badges → iPhone (no separate CTA button). Animated backdrop: drifting brand light, moving dot grid, orbit rings, pointer glow on desktop.
- **Mobile menu**: near full screen, staggered links, store badges, privacy and terms links; focus trapped, Esc and backdrop close it.

## 3. Motion system (Framer Motion only, via `LazyMotion` + `m`)

- Easing `cubic-bezier(.22,1,.36,1)`; durations 0.5–0.9s; stagger 0.06–0.12s.
- Load (sequenced in `sections/Hero/timeline.js`): headline, description, CTA, badges, stage wipe, then the phones. The app boots (splash → home) and walks through real screens with an RTL push transition, and the chips light up with their screen.
- Section titles: masked word-by-word reveal (`RevealText`). Phones: `DeviceReveal` (rise, settle rotation, desktop parallax).
- Scroll: `useScroll`/`useTransform` for hero parallax, intro word reveal, and the sticky How-it-works screens (step activation via `useInView`).
- Micro-interactions: buttons, nav, segmented control (`layoutId` indicator), accordion height, hover lift on split halves, pulsing hotspot ring.
- `prefers-reduced-motion`: `MotionConfig reducedMotion="user"` + CSS guard. Floats, marquee and parallax are disabled, and the boot sequence shows the home screen directly.
- Mobile: lighter transforms, no parallax, no sticky, no progress/scroll lines.

## 4. Responsive strategy

Breakpoints tested: 1440 / 1280 / 1024 / 768 / 390 / 360.
- Container: `min(1240px, 100% - 2×gutter)`, gutter `clamp(16px, 4vw, 40px)`.
- Phones sized with container-query units (`cqw`), so every bezel/radius/island scales from one width value.
- `overflow-x: clip` on the root as a safety net; full-bleed strips are clipped inside their own section.
- Mobile gets its own compositions (stacked hero, tap stepper, stacked split, full-width buttons), not a scaled-down desktop.

## 5. Component architecture

```
src/
  main.jsx, App.jsx
  config/site.js            brand, nav, store/legal/social link slots
  content/                  all copy + data (screens, steps, categories, faq, callouts)
  assets/app/               real screenshots (renamed, semantic)
  styles/tokens.css         design tokens
  styles/globals.css        reset, base typography, utilities
  lib/motion.js             shared easing/variants
  hooks/                    useMediaQuery, useActiveSection, useScrolled
  context/AudienceContext   owner/renter selection shared by sections
  components/               Logo, Button, PhoneMockup (+ hotspots), SectionHeading,
                            StoreButtons, SmartLink, Icon, Reveal, SegmentedControl
  layout/                   Header, Footer
  sections/                 Hero, Intro, Sides, HowItWorks, Categories, Showcase, Faq, Download
```

## 5b. Where to plug in real values

`src/config/site.js`: `storeLinks.appStore`, `storeLinks.googlePlay`, `company.vatNumber`, `contact.whatsappNumber` (digits only, international format, e.g. 9665XXXXXXXX), `contact.email`, `socialLinks`.
`src/content/legal.js`: replace drafts with the approved text, then set `draft: false`.
`index.html` (+ page HTML files): make `og:image` absolute once the domain is known. The OG image (`public/og-image.jpg`) is rendered from an HTML template with the brand font, real screens and official badges.

## 6. SEO / a11y / performance

- `lang="ar" dir="rtl"`, title/description/OG/Twitter meta, theme-color, SVG favicon + apple-touch icon, OG image generated from real assets.
- One `h1`, ordered `h2`/`h3`, landmarks, skip link, descriptive Arabic alt text for every screen.
- Visible focus rings, keyboard-operable tabs (arrow keys), accordion, and menu (Esc, focus return, scroll lock).
- Hero screens eager (`fetchpriority="high"`), everything else lazy with explicit dimensions (no CLS). Fonts self-hosted with `font-display: swap` and unicode-range subsets.
