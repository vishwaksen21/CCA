# OneSignal Admin Notification Setup Guide

## 🎯 Send Push Notifications from Admin Dashboard

You can now send push notifications directly from your admin dashboard! This guide will help you set up the OneSignal REST API key.

## 📋 Prerequisites

- OneSignal account with your app configured
- App ID: `4757bad8-5f4b-4b59-b2ef-fdd3de694379` (already configured)
- Access to your project's environment variables

## 🔑 Step 1: Get Your OneSignal REST API Key

### Method 1: Via OneSignal Dashboard
1. Go to [https://app.onesignal.com](https://app.onesignal.com)
2. Log in to your account
3. Select your app (CCA)
4. Click **Settings** in the left sidebar
5. Click **Keys & IDs**
6. Find **REST API Key** section
7. Copy the **REST API Key** (starts with something like `MWZm...`)

### Method 2: Via Settings Page
1. Dashboard → Settings → Keys & IDs
2. Look for "REST API Key" section
3. Click "Show" if key is hidden
4. Copy the entire key

## 🔧 Step 2: Add API Key to Your Project

### For Local Development:

1. **Create `.env.local` file** in your project root (if it doesn't exist):
   ```bash
   touch .env.local
   ```

2. **Add the API key**:
   ```env
   ONESIGNAL_REST_API_KEY=your_actual_rest_api_key_here
   ```

3. **Example**:
   ```env
   ONESIGNAL_REST_API_KEY=MWZmOTU4YTItZjJiYi00YjU5LThlYWItODYwYzQ5YmY3ZmMz
   ```

### For Production (Netlify):

1. Go to your Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Set:
   - **Key**: `ONESIGNAL_REST_API_KEY`
   - **Value**: Your OneSignal REST API Key
6. Click **Save**
7. Trigger a new deploy

### For Production (Vercel):

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `ONESIGNAL_REST_API_KEY`
   - **Value**: Your OneSignal REST API Key
5. Click **Save**
6. Redeploy your site

## 🚀 Step 3: Restart Your Development Server

After adding the API key, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Step 4: Test the Feature

1. **Navigate to Admin Dashboard**
   - Go to `/admin`
   - Log in with your credentials

2. **Open Push Notifications Tab**
   - Click "Push Notifications" tab

3. **Send a Test Notification**
   - Fill in the form:
     - **Title**: "Test Notification"
     - **Message**: "This is a test from the admin dashboard"
     - **URL** (optional): Leave empty or add a link
   - Click **"Send Notification to All Users"**

4. **Check Results**
   - ✅ Success message appears: "Notification sent successfully!"
   - ❌ Error message: Check the troubleshooting section below

## 🎨 How to Use

### Sending a Notification

1. **Enter Title** (max 50 characters)
   - Keep it short and attention-grabbing
   - Example: "New Event: Career Workshop"

2. **Enter Message** (max 200 characters)
   - Provide details
   - Example: "Join us for our Career Workshop on Dec 15. Register now!"

3. **Add URL** (optional)
   - Link users should visit when they click the notification
   - Example: `https://your-site.com/events`

4. **Click Send**
   - Notification goes to all subscribed users instantly

### Using Templates

Click any template button to auto-fill the form:
- **New Event Announcement** - For announcing new events
- **Important Update** - For general updates
- **Event Reminder** - For reminding about upcoming events
- **Welcome Message** - For welcoming new subscribers

Then customize the template text before sending.

## 🔍 Troubleshooting

### Error: "OneSignal API key not configured"
**Solution**: 
- Make sure you've added `ONESIGNAL_REST_API_KEY` to `.env.local`
- Restart your development server
- Check that the variable name is exactly `ONESIGNAL_REST_API_KEY`

### Error: "Failed to send notification"
**Possible causes**:
1. **Invalid API Key**
   - Double-check the API key from OneSignal dashboard
   - Make sure you copied the entire key (no spaces)

2. **No Subscribers**
   - You need at least one user subscribed to notifications
   - Test by subscribing yourself first

3. **OneSignal Account Issue**
   - Verify you're logged into the correct OneSignal account
   - Check if your app is still active

### Success but notification not received?
1. **Check browser permissions**
   - Notifications must be enabled in browser settings

2. **Check Do Not Disturb**
   - Make sure DND is off on your device

3. **Check OneSignal Dashboard**
   - Go to Delivery section
   - Check if notification was delivered

## 📊 Viewing Notification Statistics

After sending notifications, you can:

1. **View in Admin Dashboard**
   - Success message shows number of recipients

2. **View in OneSignal Dashboard**
   - Go to **Delivery** section
   - See detailed metrics:
     - Sent count
     - Delivered count
     - Clicked count
     - Conversion rate

## 🔐 Security Notes

### Important:
- **NEVER** commit `.env.local` to git
- `.env.local` is already in `.gitignore`
- Keep your REST API Key secret
- Only share with trusted team members

### File Structure:
```
your-project/
├── .env.local              ← Create this (gitignored)
├── .env.local.example      ← Template (committed to git)
└── src/
    └── app/
        └── api/
            └── send-notification/
                └── route.ts ← API endpoint
```

## 📝 API Key Permissions

The REST API Key allows:
- ✅ Sending notifications
- ✅ Viewing app statistics
- ✅ Managing segments
- ❌ Deleting the app
- ❌ Modifying app settings

## 🎯 Best Practices

1. **Test First**
   - Send a test notification to yourself
   - Verify it looks good before sending to all users

2. **Keep it Short**
   - Title: 20-30 characters
   - Message: 60-120 characters

3. **Timing Matters**
   - Best times: 9-11 AM, 12-2 PM, 5-7 PM
   - Avoid late night notifications

4. **Don't Over-Send**
   - Max 1-2 notifications per week
   - Users will unsubscribe if annoyed

5. **Always Include a URL**
   - Give users a clear action to take
   - Increases engagement

## 📚 Additional Resources

- [OneSignal Dashboard](https://app.onesignal.com)
- [OneSignal REST API Docs](https://documentation.onesignal.com/reference/create-notification)
- [OneSignal Best Practices](https://documentation.onesignal.com/docs/sending-notifications)

## ✨ Features

✅ **Send notifications directly from admin**
✅ **Character counters for title/message**
✅ **Quick templates** for common notifications
✅ **Optional URL** for click actions
✅ **Success/error feedback**
✅ **Recipient count** after sending
✅ **Link to OneSignal dashboard** for analytics

---

**You're all set!** 🎉 You can now send push notifications directly from your admin dashboard.
