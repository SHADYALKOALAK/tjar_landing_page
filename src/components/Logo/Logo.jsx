/**
 * TJAR / تجار wordmark.
 * Geometric reconstruction of the logo on the app's splash screen (measured
 * from the real asset). Swap for the official vector file when available.
 * Uses `currentColor`, so its color follows the surrounding text color.
 */
export default function Logo({ className, title = 'TJAR', decorative = false }) {
  return (
    <svg
      className={className}
      viewBox="164.4 430.4 101.2 77.2"
      fill="currentColor"
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      focusable="false"
    >
      {/* ™ */}
      <path
        d="M165.1 431.4h2.8m-1.4 0v3.7m2.7 0v-3.7l2.15 2.3 2.15-2.3v3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth=".8"
      />
      {/* ر */}
      <path
        d="M181.35 440.6v27.35a6.5 6.5 0 0 1-6.5 6.5h-9.95"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.4"
      />
      {/* ا + ج */}
      <path d="M188.9 430.9h5.5v33l34.2-26.6v-1.1h-22.4v7.2h-5.3v-12.5h33.2v8.7l-36.6 28.5h-8.6Z" />
      <path d="m220 462.8 4.9 4.8-4.9 4.8-4.9-4.8Z" />
      {/* ت / ي */}
      <path d="M259.6 430.9h5.5v18.2h-20v3.5h20v15.5h-26.9a9.5 9.5 0 0 1-9.5-9.5v-7.7h5.4v7a4 4 0 0 0 4 4h21.5v-3.8h-15a5 5 0 0 1-5-5v-5.2a5 5 0 0 1 5-5h15Z" />
      <path d="M241 430.9h14.3v5.3H241zm9.6 41h13.8v5.2h-13.8z" />
      {/* T */}
      <path d="M164.9 481.7h28.2v4.9h-28.2zm11 0h5.6v25.4h-5.6z" />
      {/* J */}
      <path d="M200.9 481.7h13.2v25.4h-16.7a4.5 4.5 0 0 1-4.5-4.5V494h5.2v7.9h10.6v-15.3h-7.8Z" />
      {/* A */}
      <path
        fillRule="evenodd"
        d="M226.5 481.7h3.8l10.2 25.4h-5.6l-1.9-4.8h-9.5l-2.1 4.8h-5.5Zm1.8 9 2.8 6.9h-5.6Z"
      />
      {/* R */}
      <path
        fillRule="evenodd"
        d="M242.9 481.7h15.3a6 6 0 0 1 6 6v5.6a6 6 0 0 1-6 6h-10v7.8h-5.3Zm5.3 4.9h8.4a2.3 2.3 0 0 1 2.3 2.3v2.7a2.3 2.3 0 0 1-2.3 2.3h-8.4Z"
      />
      <path d="M253.3 499.3h6.3l4.8 7.8h-5.8Z" />
    </svg>
  );
}
