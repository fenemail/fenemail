import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/github', destination: 'https://github.com/fenemail/fen.email', permanent: false },
      { source: '/discord', destination: 'https://discord.gg/SFqtWQgxVM', permanent: false },
      { source: '/x', destination: 'https://x.com/FenEmailHQ', permanent: false },
      { source: '/roadmap', destination: 'https://github.com/fenemail/fen.email/projects', permanent: false },
      { source: '/issues', destination: 'https://github.com/fenemail/fen.email/issues', permanent: false },
    ];
  },
};

export default nextConfig;
