'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="onesignal-init"
          strategy="afterInteractive"
        >
          {`
            try {
              window.OneSignal = window.OneSignal || [];
              OneSignal.push(function() {
                console.log("[OneSignal] Initializing...");

                OneSignal.init({
                  appId: "4757bad8-5f4b-4b59-b2ef-fdd3de694379", // your real appId
                  notifyButton: { enable: true }
                });

                console.log("[OneSignal] Notification.permission =", Notification.permission);

                if (Notification.permission === 'default') {
                  console.log("[OneSignal] Prompting user for notification permission...");
                  OneSignal.showSlidedownPrompt();
                } else if (Notification.permission === 'granted') {
                  console.log("[OneSignal] Notifications already allowed.");
                } else if (Notification.permission === 'denied') {
                  console.log("[OneSignal] Notifications have been blocked by the user.");
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
