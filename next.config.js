/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/commerce",
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    ppr: false,
    inlineCss: true,
    useCache: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

module.exports = nextConfig;

