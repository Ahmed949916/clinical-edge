/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config:any) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Converts SVGs into React components
    });

    return config;
  },
};

module.exports = nextConfig;
