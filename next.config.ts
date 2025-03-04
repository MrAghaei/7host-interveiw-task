import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["coin-images.coingecko.com"],
  },
  //TODO: remove this
  reactStrictMode: false,
};

export default nextConfig;
