import type { NextConfig } from 'next'

// Set NEXT_PUBLIC_BASE_PATH=/portfolio-site for GitHub Pages project sites.
// Leave it unset for Vercel or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
