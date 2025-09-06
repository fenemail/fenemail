import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.siteUrl, lastModified: new Date() },
    { url: `${siteConfig.siteUrl}/privacy`, lastModified: new Date() },
    { url: `${siteConfig.siteUrl}/terms`, lastModified: new Date() },
    { url: `${siteConfig.siteUrl}/story`, lastModified: new Date() },
  ];
}
