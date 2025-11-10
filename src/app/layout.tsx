import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';
import { SocialSidebar } from '@/components/shared/social-sidebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'CCA',
  description: 'Centre for Cognitive Activities',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon192.png', sizes: '192x192', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ OneSignal SDK */}
        <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" strategy="afterInteractive" />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            (function () {
              try {
                window.OneSignal = window.OneSignal || [];
                OneSignal.push(function () {
                  console.log("[OneSignal] Initializing...");
                  OneSignal.init({
                    appId: "4757bad8-5f4b-4b59-b2ef-fdd3de694379",
                    notifyButton: { enable: true },
                  });

                  console.log("[OneSignal] Notification.permission =", Notification.permission);
                  if (Notification.permission === 'default') {
                    OneSignal.showSlidedownPrompt();
                  } else if (Notification.permission === 'granted') {
                    console.log("[OneSignal] Notifications already allowed.");
                  } else if (Notification.permission === 'denied') {
                    console.log("[OneSignal] Notifications blocked by user.");
                  }
                });
              } catch (e) {
                console.error("[OneSignal] Error initializing:", e);
                // 🔄 Fallback: Native Notification API
                if ("Notification" in window) {
                  if (Notification.permission === 'default') {
                    Notification.requestPermission().then(permission => {
                      console.log("[Fallback] Permission:", permission);
                    });
                  } else {
                    console.log("[Fallback] Permission state:", Notification.permission);
                  }
                } else {
                  console.warn("[Fallback] Notifications API not supported.");
                }
              }
            })();
          `}
        </Script>
      </head>

      <body
        className={cn(
          'min-h-screen flex flex-col bg-background text-foreground antialiased font-body',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <Providers>
          <SocialSidebar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
