import type { MetadataRoute } from 'next';
import { siteMetadata } from '@/config/metadata';

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
    rules: { userAgent: '*', allow: '/', disallow: disallowedFiles },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  };
}
