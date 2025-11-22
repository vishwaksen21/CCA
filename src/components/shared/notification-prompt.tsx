'use client';

import { useEffect, useState } from 'react';
import { Bell, BellOff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useOneSignal } from '@/hooks/use-onesignal';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function NotificationPrompt() {
  const { isInitialized, isSubscribed, promptForPushNotifications } = useOneSignal();
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already interacted with the notification prompt
    const interacted = localStorage.getItem('notification-prompt-interacted');
    if (interacted) {
      setHasInteracted(true);
    } else {
      // Show prompt after 3 seconds if not subscribed
      const timer = setTimeout(() => {
        if (isInitialized && !isSubscribed) {
          setShowPrompt(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isInitialized, isSubscribed]);

  const handleEnable = () => {
    promptForPushNotifications();
    localStorage.setItem('notification-prompt-interacted', 'true');
    setHasInteracted(true);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('notification-prompt-interacted', 'true');
    setHasInteracted(true);
    setShowPrompt(false);
  };

  if (!isInitialized || hasInteracted || isSubscribed) {
    return null;
  }

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-50 sm:max-w-sm animate-in slide-in-from-bottom-4">
      <Card className="border-2 shadow-lg">
        <CardHeader className="pb-3 p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary flex-shrink-0" />
            <CardTitle className="text-base sm:text-lg">Stay Updated!</CardTitle>
          </div>
          <CardDescription className="text-sm">
            Enable push notifications to receive updates about new events, announcements, and important information from CCA.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-2 p-4 sm:p-6 pt-0">
          <Button onClick={handleEnable} className="flex-1 w-full sm:w-auto" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">Enable Notifications</span>
          </Button>
          <Button onClick={handleDismiss} variant="outline" size="sm" className="w-full sm:w-auto">
            <BellOff className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">Maybe Later</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function NotificationStatus() {
  const { isInitialized, isSubscribed, promptForPushNotifications } = useOneSignal();

  if (!isInitialized) {
    return null;
  }

  return (
    <Button
      variant={isSubscribed ? 'outline' : 'default'}
      size="sm"
      onClick={promptForPushNotifications}
      className="gap-2 min-w-0"
      title={isSubscribed ? 'Notifications Enabled' : 'Enable Notifications'}
    >
      {isSubscribed ? (
        <>
          <Check className="h-4 w-4 flex-shrink-0" />
          <span className="hidden lg:inline">Notifications Enabled</span>
        </>
      ) : (
        <>
          <Bell className="h-4 w-4 flex-shrink-0" />
          <span className="hidden lg:inline">Enable Notifications</span>
        </>
      )}
    </Button>
  );
}
