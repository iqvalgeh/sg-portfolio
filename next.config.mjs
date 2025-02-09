/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'iqvalgeh.sirv.com',
    }]
  }
};

export default nextConfig;
