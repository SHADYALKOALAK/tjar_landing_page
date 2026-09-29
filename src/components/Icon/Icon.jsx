/**
 * Minimal line-icon set (24px grid, 1.75 stroke) drawn to match the app's
 * rounded outline icons. Brand marks (Apple / Google Play) are filled.
 */
const STROKE_ICONS = {
  arrowLeft: <path d="M19 12H5m6-6-6 6 6 6" />,
  download: (
    <>
      <path d="M12 4v11m-5-5 5 5 5-5" />
      <path d="M5 19.5h14" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2.5" />
      <path d="M9 20h6m-3-3.5V20" />
    </>
  ),
  gamepad: (
    <>
      <path d="M7.6 7h8.8a4.6 4.6 0 0 1 4.5 5.5l-.7 3.4a2.5 2.5 0 0 1-4.3 1.2L14 15h-4l-1.9 2.1a2.5 2.5 0 0 1-4.3-1.2l-.7-3.4A4.6 4.6 0 0 1 7.6 7Z" />
      <path d="M8.5 9.8v3.4m-1.7-1.7h3.4M15.5 10.5h.01m1.5 2h.01" />
    </>
  ),
  home: <path d="M4 10.2 12 4l8 6.2V19a1 1 0 0 1-1 1h-4.5v-5.2h-5V20H5a1 1 0 0 1-1-1v-8.8Z" />,
  book: (
    <>
      <path d="M12 6.6C10.4 5.3 8.2 4.8 4 5v13.2c4.2-.2 6.4.3 8 1.6 1.6-1.3 3.8-1.8 8-1.6V5c-4.2-.2-6.4.3-8 1.6Z" />
      <path d="M12 6.6v13" />
    </>
  ),
  tent: (
    <>
      <path d="M3 19.5 12 5l9 14.5H3Z" />
      <path d="m9.2 19.5 2.8-4.8 2.8 4.8M12 5 10.4 2.6M12 5l1.6-2.4" />
    </>
  ),
  chat: (
    <>
      <path d="M20 11.6a7.8 7.8 0 0 1-11.3 7L4 19.8l1.2-4.4A7.8 7.8 0 1 1 20 11.6Z" />
      <path d="M8.6 11.8h.01m3.4 0h.01m3.4 0h.01" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.5-6.5-11a6.5 6.5 0 0 1 13 0c0 5.5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  inbox: (
    <>
      <path d="m4 13.5 2.2-7.3A1.7 1.7 0 0 1 7.8 5h8.4a1.7 1.7 0 0 1 1.6 1.2l2.2 7.3V18a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18v-4.5Z" />
      <path d="M4 13.5h4.5l1 2h5l1-2H20" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5S9.7 5.9 12 3.5Z" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

const FILL_ICONS = {
  whatsapp: (
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  ),
  apple: (
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z" />
  ),
  googlePlay: (
    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49Z" />
  ),
};

/** Aliases: 'arrowForward' points in the reading direction (mirrored in LTR by globals.css). */
const ALIASES = { arrowForward: { name: 'arrowLeft', className: 'icon-forward' } };

export default function Icon({ name: requested, size = 20, strokeWidth = 1.75, className: extraClass, title }) {
  const alias = ALIASES[requested];
  const name = alias?.name ?? requested;
  const className = [alias?.className, extraClass].filter(Boolean).join(' ') || undefined;
  const isFill = name in FILL_ICONS;
  const glyph = isFill ? FILL_ICONS[name] : STROKE_ICONS[name];
  if (!glyph) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFill ? 'currentColor' : 'none'}
      stroke={isFill ? 'none' : 'currentColor'}
      strokeWidth={isFill ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
