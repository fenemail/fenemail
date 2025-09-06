import './globals.css';
import localFont from 'next/font/local';
import { createMetadata, siteMetadata } from '@/config/metadata';
import { cn } from '@/lib/utils';

const satoshiFont = localFont({
  src: '../assets/fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
});

const jetBrainsMonoFont = localFont({
  src: '../assets/fonts/JetBrainsMono-Variable.ttf',
  variable: '--font-jetbrains-mono',
});

export const metadata = createMetadata({
  title: {
    template: `%s | ${siteMetadata.shortName}`,
    default: `${siteMetadata.shortName} | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(satoshiFont.variable, jetBrainsMonoFont.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
