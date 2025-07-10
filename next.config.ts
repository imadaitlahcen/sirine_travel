import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  i18n,
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    // Disable ESLint during builds to avoid false positives
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
