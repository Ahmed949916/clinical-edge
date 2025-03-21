/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add SVGR loader to handle SVGs as React components
    config.module.rules.push({
      test: /\.svg$/, // Match all .svg files
      use: ["@svgr/webpack"], // Use SVGR to transform SVGs into React components
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"], // Use SVGR in Turbopack (experimental)
          as: "*.js", // Treat SVGs as JS modules
        },
      },
    },
  },
};

module.exports = nextConfig;
