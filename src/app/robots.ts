import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/metadata';

export default function robots(): MetadataRoute.Robots {
  // https://www.webdevtutor.net/blog/robots-txt-block-next-folder-next-js
  const disallowedFiles = [
    '/*.json$',
    '/*_buildManifest.js$',
    '/*_middlewareManifest.js$',
    '/*_ssgManifest.js$',
    '/*.js$',
    '/_next/*',
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: disallowedFiles },
      { userAgent: '*', disallow: '/mail' },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
