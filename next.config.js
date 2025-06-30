/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/CuttuOP',
  assetPrefix: '/CuttuOP/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
