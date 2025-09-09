import type { Metadata } from 'next';
import { env } from '@/lib/env';

export const siteConfig = {
  name: 'Fen Email',
  shortName: 'Fen',
  title: 'Email reimagined for modern workflows.',
  description:
    'Channels, threads, direct messages and more, all in one familiar interface. Privacy-focused and 100% open-source.',
  siteUrl: env.NEXT_PUBLIC_APP_URL,
};

export const createMetadata = (override: Metadata): Metadata => ({
  ...override,
  openGraph: {
    siteName: siteConfig.shortName,
    ...override.openGraph,
  },
  twitter: {
    creator: '@FenEmailHQ',
    ...override.twitter,
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  alternates: {
    canonical: './',
  },
});
