import path from 'path';
import { fileURLToPath } from 'url';

// ES モジュールで __dirname を模倣するための変数
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app');
    config.resolve.alias['~'] = path.join(__dirname, 'app');
    return config;
  },
};

export default nextConfig;
