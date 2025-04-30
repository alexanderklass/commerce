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
};

module.exports = nextConfig;

