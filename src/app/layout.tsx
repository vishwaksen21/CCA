import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';
import Script from 'next/script'; // ✅ import Script

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'CCA',
  description: 'Centre for Cognitive Activities',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ OneSignal SDK */}
        <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
        {/* ✅ OneSignal Initialization with safety checks + fallback */}
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            try {
              window.OneSignal = window.OneSignal || [];
              OneSignal.push(function() {
                console.log("[OneSignal] Initializing...");
                OneSignal.init({
                  appId: "4757bad8-5f4b-4b59-b2ef-fdd3de694379",
                  notifyButton: { enable: true },
                });
                console.log("[OneSignal] Notification.permission =", Notification.permission);
                if (Notification.permission === 'default') {
                  console.log("[OneSignal] Prompting user for notification permission...");
                  OneSignal.showSlidedownPrompt();
                } else if (Notification.permission === 'granted') {
                  console.log("[OneSignal] Notifications already allowed.");
                } else if (Notification.permission === 'denied') {
                  console.log("[OneSignal] Notifications blocked by the user.");
                }
              });
            } catch (e) {
              console.error("[OneSignal] Error initializing:", e);
              // 🔄 Fallback: Use native Notification API if OneSignal fails
              if ("Notification" in window) {
                console.log("[Fallback] Using native Notification.requestPermission()");
                if (Notification.permission === 'default') {
                  Notification.requestPermission().then(permission => {
                    console.log("[Fallback] User selected:", permission);
                  });
                } else {
                  console.log("[Fallback] Notifications already in state:", Notification.permission);
                }
              } else {
                console.warn("[Fallback] Notifications API not supported in this browser.");
              }
            }
          `}
        </Script>
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body text-foreground antialiased flex flex-col',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
