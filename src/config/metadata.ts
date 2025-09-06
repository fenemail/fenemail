import type { Metadata } from 'next';
import { env } from '@/lib/env';

export const siteMetadata = {
  name: 'Fen Email',
  shortName: 'Fen',
  title: 'Email reimagined for modern workflows.',
  description:
    'Channels, threads, direct messages and more, all in a familiar interface. Privacy-focused and fully open-source.',
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  githubUrl: 'https://github.com/fenemail',
  twitterUrl: 'https://twitter.com/fen_email',
  discordUrl: 'https://discord.gg/fenemail',
  supportEmail: 'support@fen.email',
};

export const createMetadata = (override: Metadata): Metadata => ({
  ...override,
  openGraph: {
    siteName: siteMetadata.shortName,
    ...override.openGraph,
  },
  twitter: {
    creator: `@${new URL(siteMetadata.twitterUrl).pathname.split('/').filter(Boolean).at(0)}`,
    ...override.twitter,
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  alternates: {
    canonical: './',
  },
});
