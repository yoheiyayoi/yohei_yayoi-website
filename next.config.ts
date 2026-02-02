import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://tr.rbxcdn.com/**"),
      new URL("https://placehold.co/**"),
      new URL("https://t3.rbxcdn.com/**"),
    ]
  }
};

export default nextConfig;
