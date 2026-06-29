/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  transpilePackages: [
    '@mui/material',
    '@mui/system',
    '@mui/icons-material',
  ],
};

export default nextConfig;
