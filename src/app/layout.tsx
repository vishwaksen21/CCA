import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "CCA",
  description: "Centre for Cognitive Activities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ OneSignal SDK */}
        <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />

        {/* ✅ OneSignal Initialization */}
        <Script id="onesignal-init" strategy="afterInteractive">
          {`
            window.OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
              console.log("[OneSignal] Initializing...");

              OneSignal.init({
                appId: "4757bad8-5f4b-4b59-b2ef-fdd3de694379",
                notifyButton: { enable: true },
                promptOptions: {
                  slidedown: {
                    enabled: true,
                    actionMessage: "We’ve got the tea 🍵 Subscribe so you don’t miss it!",
                    acceptButtonText: "Spill it!",
                    cancelButtonText: "Maybe Later"
                  }
                }
              });

              if (Notification.permission === 'default') {
                OneSignal.showSlidedownPrompt();
              }
            });
          `}
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased flex flex-col",
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
