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
import { NotificationPrompt } from '@/components/shared/notification-prompt';

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
        {/* ✅ OneSignal Push Notifications */}
        <Script 
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" 
          strategy="afterInteractive"
        />
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              console.log("[OneSignal] Initializing with App ID: 4757bad8-5f4b-4b59-b2ef-fdd3de694379");
              
              OneSignal.init({
                appId: "4757bad8-5f4b-4b59-b2ef-fdd3de694379",
                safari_web_id: "web.onesignal.auto.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                notifyButton: {
                  enable: true,
                },
                allowLocalhostAsSecureOrigin: true,
              });

              // Log subscription status
              OneSignal.getUserId(function(userId) {
                console.log("[OneSignal] User ID:", userId);
              });

              OneSignal.isPushNotificationsEnabled(function(isEnabled) {
                if (isEnabled) {
                  console.log("[OneSignal] Push notifications are enabled!");
                } else {
                  console.log("[OneSignal] Push notifications are not enabled yet.");
                  // Auto-prompt for permission if not enabled
                  if (Notification.permission === 'default') {
                    console.log("[OneSignal] Showing native prompt...");
                    OneSignal.showNativePrompt();
                  }
                }
              });

              // Listen for subscription changes
              OneSignal.on('subscriptionChange', function(isSubscribed) {
                console.log("[OneSignal] Subscription changed:", isSubscribed);
              });

              // Listen for permission changes
              OneSignal.on('notificationPermissionChange', function(permissionChange) {
                console.log("[OneSignal] Permission changed from", permissionChange.from, "to", permissionChange.to);
              });
            });
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
          <NotificationPrompt />
        </Providers>
      </body>
    </html>
  );
}
