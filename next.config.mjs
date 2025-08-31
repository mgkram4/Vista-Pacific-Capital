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
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercrafter.com',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/equipment-finacing',
        destination: '/equipment-financing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;