import type { Metadata } from 'next';
import { env } from './env';

export const name = 'Fen Email';
export const shortName = 'Fen';
export const title = 'Email reimagined for modern workflows.';
export const description =
  'Channels, threads, direct messages and more, all in a familiar interface. Privacy-focused and fully open-source.';

export const createMetadata = (override: Metadata): Metadata => ({
  ...override,
  openGraph: {
    siteName: shortName,
    ...override.openGraph,
  },
  twitter: {
    creator: '@fen_email',
    ...override.twitter,
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  alternates: {
    canonical: './',
  },
});
