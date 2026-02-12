import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@flowtiq/shared'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
