/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Clean URLs: /contact, not /contact/ — matches how the site has always
  // been linked and what the canonical URLs in the metadata point to.
  trailingSlash: false,

  // Screenshots are tiny WebP files rendered at ~300px wide inside the phone
  // mockup, so let the optimizer pick a sensible size and format for them.
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // The app is fully static: 8 pages, no dynamic routes, no server data.
  // Emitting them at build time keeps the HTML crawlable without a runtime.
  output: undefined,
};

export default nextConfig;
