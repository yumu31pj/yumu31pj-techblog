import path from 'path';
import { fileURLToPath } from 'url';

// Variables to mimic __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    loader: 'custom',  // to use Image component of Next.js with SSG
  },
  
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app');
    config.resolve.alias['~'] = path.join(__dirname, 'app');
    return config;
  },
};

export default nextConfig;
