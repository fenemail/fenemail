import { siteMetadata } from '@/config/metadata';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.name,
    short_name: siteMetadata.shortName,
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#27272D',
    theme_color: '#F3D0B1',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
