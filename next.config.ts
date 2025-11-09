import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
  trailingSlash: true,
  basePath: "/vtc.github.io", // Ajouter cette ligne si vous gardez l'URL actuelle
};

export default nextConfig;
