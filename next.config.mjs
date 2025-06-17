// next.config.mjs
import transpileModules from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined,
  images: { unoptimized: true },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias, 
    };
    return config;
  },
};

export default transpileModules([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
])(nextConfig);
