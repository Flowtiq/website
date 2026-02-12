import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@flowtiq/shared'],
};

export default nextConfig;
