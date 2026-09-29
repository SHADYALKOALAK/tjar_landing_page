/**
 * Web app manifest (served at /manifest.webmanifest and linked automatically
 * by Next.js). Icons are the official TJAR logo on the brand gradient.
 */
export default function manifest() {
  return {
    name: 'TJAR — تي جار',
    short_name: 'TJAR',
    description: 'منصة تربطك بالأشخاص اللي يملكون أشياء قد تحتاجها، وتخليك تستأجرها بسهولة بدل ما تشتريها.',
    lang: 'ar',
    dir: 'rtl',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#00A5A5',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
