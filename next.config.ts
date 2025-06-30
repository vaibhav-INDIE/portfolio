import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repo = 'portfolio' // your repository name

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig;
