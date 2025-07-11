/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '5ycd9odhqw.ufs.sh',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;