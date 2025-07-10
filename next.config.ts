import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  i18n,
  images: {
    domains: ['images.unsplash.com'],
  },
  /* config options here */
};

export default nextConfig;
