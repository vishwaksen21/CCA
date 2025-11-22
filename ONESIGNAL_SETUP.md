# OneSignal Push Notifications - Setup Guide

## ✅ Installation Status

OneSignal push notifications are **FULLY CONFIGURED** and ready to use!

## 🔑 Current Configuration

- **App ID**: `4757bad8-5f4b-4b59-b2ef-fdd3de694379`
- **Service Workers**: Properly configured in `/public/`
- **SDK Version**: Latest (loaded from CDN)
- **Localhost Support**: Enabled for development

## 📁 Files Added/Modified

### New Files Created:
1. **`src/hooks/use-onesignal.ts`** - React hook for OneSignal integration
2. **`src/components/shared/notification-prompt.tsx`** - User-facing notification prompt & status button
3. **`ONESIGNAL_SETUP.md`** - This documentation file

### Modified Files:
1. **`src/app/layout.tsx`** - OneSignal SDK initialization with enhanced configuration
2. **`src/components/shared/header.tsx`** - Added notification status button in header
3. **`src/app/admin/page.tsx`** - Added "Push Notifications" tab in admin dashboard

### Existing Files (Already Present):
1. **`public/OneSignalSDKWorker.js`** - Service worker for push notifications
2. **`public/OneSignalSDKUpdaterWorker.js`** - Service worker updater
3. **`public/site.webmanifest`** - PWA manifest configuration

## 🎯 Features Implemented

### User-Facing Features:
- ✅ **Automatic Notification Prompt** - Shows after 3 seconds on first visit
- ✅ **Header Status Button** - Shows subscription status in navigation
- ✅ **Smart Prompting** - Doesn't re-prompt after user interaction
- ✅ **Visual Feedback** - Clear indication of enabled/disabled state
- ✅ **Responsive Design** - Works on all screen sizes

### Admin Features:
- ✅ **Dedicated Notifications Tab** - In admin dashboard
- ✅ **Quick Access Links** - Direct links to OneSignal dashboard
- ✅ **Notification Templates** - Pre-written message templates
- ✅ **API Documentation** - Quick access to OneSignal API docs
- ✅ **Configuration Info** - Displays current App ID and setup details

### Technical Features:
- ✅ **Event Listeners** - Tracks subscription and permission changes
- ✅ **Console Logging** - Detailed logs for debugging
- ✅ **Error Handling** - Graceful fallbacks for unsupported browsers
- ✅ **Localhost Support** - Works in development environment
- ✅ **Type Safety** - Full TypeScript support

## 🚀 How to Use

### For Users (Visitors):

1. **Visit the website** - The site will load normally
2. **Notification prompt appears** - After 3 seconds, a card will slide in asking to enable notifications
3. **Click "Enable Notifications"** - Browser will show native permission dialog
4. **Grant permission** - User is now subscribed to push notifications
5. **Check status** - Bell icon in header shows subscription status

### For Admins:

#### Method 1: OneSignal Dashboard (Recommended)
1. Go to admin dashboard
2. Click "Push Notifications" tab
3. Click "Open OneSignal Dashboard"
4. Log in to OneSignal
5. Navigate to "Messages" → "New Push"
6. Compose your notification:
   - **Heading**: Short, attention-grabbing title
   - **Message**: Main content (can be longer)
   - **URL**: Optional link when notification is clicked
   - **Image**: Optional notification image
7. Select audience (All Users or segments)
8. Send immediately or schedule for later

#### Method 2: OneSignal REST API
```javascript
// Example API call (use from backend/server)
const API_KEY = 'YOUR_REST_API_KEY'; // Get from OneSignal Settings
const APP_ID = '4757bad8-5f4b-4b59-b2ef-fdd3de694379';

const response = await fetch('https://onesignal.com/api/v1/notifications', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${API_KEY}`
  },
  body: JSON.stringify({
    app_id: APP_ID,
    included_segments: ['All'], // Send to all subscribed users
    headings: { en: 'Your Notification Title' },
    contents: { en: 'Your notification message here' },
    url: 'https://your-website.com/events', // Optional
  })
});
```

## 📊 Monitoring & Analytics

### View Subscriber Count:
1. Visit [OneSignal Dashboard](https://app.onesignal.com)
2. Navigate to "Audience" → "Overview"
3. See total subscribers, active users, and more

### View Notification Performance:
1. Go to "Delivery" in OneSignal dashboard
2. See sent, delivered, clicked metrics
3. Analyze best times to send notifications

## 🔧 Configuration Options

### Current Settings (in layout.tsx):
```javascript
OneSignal.init({
  appId: "4757bad8-5f4b-4b59-b2ef-fdd3de694379",
  safari_web_id: "web.onesignal.auto.xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  notifyButton: {
    enable: true, // Shows OneSignal bell button
  },
  allowLocalhostAsSecureOrigin: true, // Enables testing on localhost
});
```

### Available Customizations:
- **Notification Bell**: Can be customized or disabled
- **Prompt Timing**: Adjust delay in `notification-prompt.tsx`
- **Prompt Appearance**: Modify styling in notification component
- **Welcome Notification**: Can be enabled in OneSignal dashboard

## 🎨 Notification Templates

### New Event:
```
Title: New Event: [Event Name]
Message: Join us for [Event Name] on [Date]. Register now!
URL: https://your-site.com/events
```

### Reminder:
```
Title: Reminder: [Event Name] Tomorrow!
Message: Don't forget about [Event Name] tomorrow at [Time].
URL: https://your-site.com/events
```

### General Update:
```
Title: Important CCA Update
Message: [Your update message here]
URL: https://your-site.com/updates
```

## 🔐 Security Notes

### API Keys:
- **Rest API Key**: Required for sending notifications programmatically
  - Get from: OneSignal Dashboard → Settings → Keys & IDs
  - **NEVER** expose in frontend code
  - Use only in backend/server code
- **App ID**: Safe to use in frontend (already in code)

### Service Workers:
- Located in `/public/` folder
- Automatically registered by OneSignal SDK
- Required for push notifications to work

## 🧪 Testing

### Test in Development:
1. Run `npm run dev`
2. Open `http://localhost:3000`
3. Wait for notification prompt
4. Accept notifications
5. Check browser console for "[OneSignal]" logs

### Test Notifications:
1. Subscribe to notifications (as above)
2. Go to OneSignal dashboard
3. Send test notification to yourself
4. Check if notification appears (even with browser in background)

### Browser Support:
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge
- ✅ Safari (macOS 13+, iOS 16.4+)
- ✅ Opera
- ❌ IE (not supported)

## 📱 Mobile App Support

OneSignal also supports native mobile apps. If you create iOS/Android apps:
1. Same App ID can be used across web + mobile
2. Follow OneSignal's native SDK setup guides
3. Users get notifications on all their devices

## 🐛 Troubleshooting

### Notifications not showing?
1. Check browser console for errors
2. Verify permission is "granted" (not "denied" or "default")
3. Check if Do Not Disturb is enabled on device
4. Try in incognito/private mode
5. Clear browser cache and try again

### Can't send from dashboard?
1. Verify you're logged into correct OneSignal account
2. Check if App ID matches
3. Ensure you have at least one subscribed user
4. Check OneSignal status page for outages

### Service worker errors?
1. Ensure files exist: `/public/OneSignalSDKWorker.js`
2. Check browser console for 404 errors
3. Clear service worker cache: Chrome DevTools → Application → Service Workers

## 📚 Additional Resources

- [OneSignal Documentation](https://documentation.onesignal.com)
- [OneSignal Web Push Quickstart](https://documentation.onesignal.com/docs/web-push-quickstart)
- [OneSignal REST API Reference](https://documentation.onesignal.com/reference/create-notification)
- [OneSignal Dashboard](https://app.onesignal.com)

## 🎉 Quick Summary

Your OneSignal push notifications are **100% ready to use**! Here's what happens:

1. **User visits site** → OneSignal initializes automatically
2. **After 3 seconds** → Notification prompt appears
3. **User clicks "Enable"** → Browser asks for permission
4. **User grants permission** → They're subscribed!
5. **You send notification** → All subscribers receive it instantly

**You can start sending notifications right now** via the OneSignal dashboard!
