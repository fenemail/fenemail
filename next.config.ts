import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/github', destination: 'https://github.com/fenemail', permanent: false },
      { source: '/discord', destination: 'https://twitter.com/fen_email', permanent: false },
      { source: '/twitter', destination: 'https://discord.gg/fenemail', permanent: false },
      { source: '/roadmap', destination: 'https://github.com/fenemail/roadmap', permanent: false },
    ];
  },
};

export default nextConfig;
