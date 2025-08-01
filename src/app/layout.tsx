import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  title: 'CCA - Centre for Cognitive Activities',
  description: 'Your partner in building a successful career in the defense sector and beyond.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased flex flex-col',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
