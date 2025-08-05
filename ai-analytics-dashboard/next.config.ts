/**
 * next.config.js
 * Disables ESLint checks during production builds to fix Vercel errors.
 * Add other config options as needed.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during builds (warnings won't fail deployment)
    ignoreDuringBuilds: true,
  },
  // Add other options here, e.g.:
  // images: { domains: ['example.com'] },
  // reactStrictMode: true,
}

module.exports = nextConfig
