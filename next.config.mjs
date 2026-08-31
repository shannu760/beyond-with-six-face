/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    config.module.rules.push({
      test: /\.html$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
