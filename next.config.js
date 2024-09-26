/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This exports the app as a static site, but it disables automatic image optimization
  images: {
    unoptimized: true, // To enable Next.js image optimization, this should be false, but with static export, images cannot be optimized.
  },
};

module.exports = nextConfig;