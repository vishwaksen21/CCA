'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    OneSignal: any;
  }
}

export function useOneSignal() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Wait for OneSignal to be loaded
    const checkOneSignal = setInterval(() => {
      if (window.OneSignal) {
        clearInterval(checkOneSignal);
        
        window.OneSignal.push(function() {
          setIsInitialized(true);

          // Get subscription status
          window.OneSignal.isPushNotificationsEnabled(function(isEnabled: boolean) {
            setIsSubscribed(isEnabled);
          });

          // Get user ID
          window.OneSignal.getUserId(function(id: string) {
            setUserId(id);
          });

          // Listen for subscription changes
          window.OneSignal.on('subscriptionChange', function(isEnabled: boolean) {
            setIsSubscribed(isEnabled);
          });
        });
      }
    }, 100);

    return () => clearInterval(checkOneSignal);
  }, []);

  const promptForPushNotifications = () => {
    if (window.OneSignal) {
      window.OneSignal.showNativePrompt();
    }
  };

  const sendNotification = (title: string, message: string) => {
    if (window.OneSignal && userId) {
      // This would typically be done from your backend
      console.log('[OneSignal] Send notification:', { title, message, userId });
    }
  };

  return {
    isInitialized,
    isSubscribed,
    userId,
    promptForPushNotifications,
    sendNotification,
  };
}
