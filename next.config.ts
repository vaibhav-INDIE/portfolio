import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const repo = 'portfolio' // your repository name

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',
  // Base path and asset prefix for GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { 
    unoptimized: true,
    domains: ['vaibhav-indie.github.io'],
  },
  trailingSlash: true,
  // Add this to handle static exports properly

  // Ensure all assets are properly exported
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
}

export default nextConfig;
