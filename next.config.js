const { env } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: "standalone",
  outputFileTracing: true,
  assetPrefix: "/dev/",
};

switch (env.NODE_ENV) {
  case "development":
    nextConfig.basePath = "/dev";
}

module.exports = nextConfig;
