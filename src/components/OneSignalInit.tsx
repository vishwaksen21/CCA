'use client';

import { useEffect } from 'react';

export default function OneSignalInit() {
  useEffect(() => {
    // Add the OneSignal SDK to the page
    const script = document.createElement('script');
    script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        window.OneSignal = window.OneSignal || [];
        // @ts-ignore
        window.OneSignal.push(function () {
          // @ts-ignore
          window.OneSignal.init({
            appId: '4757bad8-5f4b-4b59-b2ef-fdd3de694379', // replace this
            notifyButton: {
              enable: true,
            },
          });
        });
      }
    };
  }, []);

  return null;
}
