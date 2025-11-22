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
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-in slide-in-from-bottom-4">
      <Card className="border-2 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Stay Updated!</CardTitle>
          </div>
          <CardDescription>
            Enable push notifications to receive updates about new events, announcements, and important information from CCA.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button onClick={handleEnable} className="flex-1" size="sm">
            <Bell className="mr-2 h-4 w-4" />
            Enable Notifications
          </Button>
          <Button onClick={handleDismiss} variant="outline" size="sm">
            <BellOff className="mr-2 h-4 w-4" />
            Maybe Later
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
      className="gap-2"
    >
      {isSubscribed ? (
        <>
          <Check className="h-4 w-4" />
          <span className="hidden sm:inline">Notifications Enabled</span>
        </>
      ) : (
        <>
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Enable Notifications</span>
        </>
      )}
    </Button>
  );
}
