import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nordicfeel.com",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "images.kicks.se",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kicks.no",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
