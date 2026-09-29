/**
 * The public origin of the site, used for canonical URLs, hreflang,
 * Open Graph / Twitter images, structured data and the sitemap.
 *
 * Link previews (WhatsApp, X, LinkedIn, iMessage…) follow og:url and download
 * og:image from this origin, so it must be the domain the site is really
 * served from — otherwise previews show nothing.
 *
 * Resolved at build time, in this order:
 *   1. SITE_URL env var — set it in Vercel to force a specific domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — provided by Vercel: the project's
 *      production domain (the custom domain once one is attached, otherwise
 *      <project>.vercel.app), so it follows the domain without code changes.
 *   3. http://localhost:3000 for local builds.
 *
 * Server-only: imported by metadata, sitemap and robots, never by client code.
 */
function resolveSiteUrl() {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, '');

  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelDomain) return `https://${vercelDomain.replace(/^https?:\/\//, '').replace(/\/+$/, '')}`;

  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();
