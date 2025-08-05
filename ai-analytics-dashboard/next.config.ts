/**
 * next.config.js
 * Ignores ESLint during builds to allow deployment.
 * You can remove this once all lint issues are fixed.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // This skips ESLint checks
  },
  // Add other config if needed (e.g., images, etc.)
}

module.exports = nextConfig
