export default {
  basePath: "/commerce",
  output: "export",

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
