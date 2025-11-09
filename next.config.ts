import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  trailingSlash: true,
  basePath: "/website", // Correspond à l'URL https://vtc-app.github.io/website/
};

export default nextConfig;
