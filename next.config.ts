import type { NextConfig } from 'next';
import { siteConfig } from '@/config/metadata';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/github', destination: siteConfig.githubUrl, permanent: false },
      { source: '/discord', destination: siteConfig.discordUrl, permanent: false },
      { source: '/twitter', destination: siteConfig.twitterUrl, permanent: false },
      { source: '/roadmap', destination: siteConfig.roadmapUrl, permanent: false },
    ];
  },
};

export default nextConfig;
