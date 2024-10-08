/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
