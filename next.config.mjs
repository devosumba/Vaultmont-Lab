/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: Removing static export so API routes run in production
  // If you need static export for a separate target, create a separate config or branch
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

 