# Notification Debugging Guide

## 🔍 How to Check What's Wrong

### **Step 1: Verify Environment Variable in Vercel**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your **CCA** project
3. Click **Settings** → **Environment Variables**
4. You should see:
   ```
   ONESIGNAL_REST_API_KEY
   Value: os_v2_app_i5l3vwc7jnfv... (hidden)
   Environments: ✓ Production ✓ Preview ✓ Development
   ```

**If missing or wrong:**
- Click **"Add New"**
- Name: `ONESIGNAL_REST_API_KEY`
- Value: `os_v2_app_i5l3vwc7jnfvtmxp7xj542kdphnzbz5kzjauc2f6m6eglrcrmovtw4etpwfqgrmhxs6eqzolsowkrxychltcrlfwphmchs3zf5g23by`
- Select all 3 environments
- Click **Save**
- Then go to **Deployments** → **Redeploy** latest

### **Step 2: Check Browser Console for Errors**

1. Open your site: `https://cca-cmrit.vercel.app/admin`
2. Open browser DevTools (F12 or Right-click → Inspect)
3. Go to **Console** tab
4. Try sending a notification
5. Look for messages starting with `[Admin]` or `[Send Notification]`

**What to look for:**
- ✅ `[Admin] Sending notification: {...}` - Request started
- ✅ `[Admin] Response status: 200` - Success
- ❌ `[Admin] Response status: 500` - Server error (API key issue)
- ❌ `[Admin] Response status: 400` - Validation error
- ❌ Error message in red - Problem details

### **Step 3: Check Vercel Function Logs**

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your **CCA** project
3. Click **Logs** tab (or **Deployments** → Click latest → **Functions**)
4. Try sending a notification
5. Refresh logs to see real-time output

**What to look for:**
```
✅ [Send Notification] Request received: { title: '...', message: '...' }
✅ [Send Notification] API key found, length: 140
✅ [Send Notification] Sending to OneSignal: {...}
✅ [Send Notification] OneSignal response status: 200
✅ [Send Notification] Success! Recipients: 5
```

**Common errors:**
```
❌ [Send Notification] API key not found in environment variables
   → Fix: Add ONESIGNAL_REST_API_KEY in Vercel
   
❌ [Send Notification] OneSignal response status: 401
   → Fix: Wrong API key, get correct one from OneSignal
   
❌ [Send Notification] OneSignal response status: 400
   → Fix: Check OneSignal response data for details
```

### **Step 4: Verify OneSignal Configuration**

1. Go to [app.onesignal.com](https://app.onesignal.com)
2. Click your **CCA** app
3. Go to **Settings** → **Keys & IDs**
4. Verify:
   - **App ID**: `4757bad8-5f4b-4b59-b2ef-fdd3de694379` ✓
   - **REST API Key**: Copy it and compare with what you added to Vercel

5. Check **Audience** → **All Users**
   - You should see at least 1 subscriber (yourself)
   - If 0 subscribers, notifications won't send!

### **Step 5: Test with OneSignal Dashboard**

To verify OneSignal works at all:

1. Go to [app.onesignal.com](https://app.onesignal.com)
2. Click **Messages** → **New Push**
3. Fill in title and message
4. Click **Review** → **Send Message**
5. Check if you receive it

**If this works:**
- ✅ OneSignal is configured correctly
- ✅ You're subscribed to notifications
- ❌ Problem is with the API integration

**If this doesn't work:**
- ❌ Check notification permissions in browser
- ❌ Make sure you subscribed on the website first

## 🚨 Common Issues & Solutions

### Issue 1: "API key not configured"
**Solution:**
```bash
# In Vercel Dashboard:
Settings → Environment Variables → Add New
Name: ONESIGNAL_REST_API_KEY
Value: os_v2_app_i5l3vwc7jnfvtmxp7xj542kdphnzbz5kzjauc2f6m6eglrcrmovtw4etpwfqgrmhxs6eqzolsowkrxychltcrlfwphmchs3zf5g23by
Environments: All 3 checked
Save → Redeploy
```

### Issue 2: "No recipients" or "0 sent"
**Solution:**
- You need at least 1 subscribed user
- Visit your site and enable notifications first
- Then try sending again

### Issue 3: "401 Unauthorized"
**Solution:**
- Your API key is wrong
- Go to OneSignal → Settings → Keys & IDs
- Copy the correct **REST API Key**
- Update in Vercel environment variables
- Redeploy

### Issue 4: Works locally but not on Vercel
**Solution:**
- Environment variable not set in Vercel
- OR didn't redeploy after setting it
- Check: Vercel → Settings → Environment Variables
- Then: Deployments → Redeploy

### Issue 5: Button says "Sending..." forever
**Solution:**
- Check browser console for errors
- API route might be failing
- Check Vercel function logs
- Verify API key is set

## ✅ Quick Checklist

Before sending notification, verify:
- [ ] Environment variable `ONESIGNAL_REST_API_KEY` exists in Vercel
- [ ] All 3 environments are checked (Production, Preview, Development)
- [ ] You've redeployed after adding the variable
- [ ] At least 1 user is subscribed (check OneSignal dashboard)
- [ ] Your browser allows notifications from the site
- [ ] You're logged into admin with correct credentials

## 📊 Expected Behavior

**When working correctly:**

1. Fill notification form
2. Click "Send Notification to All Users"
3. Button shows "Sending..." with spinner
4. After 1-3 seconds: Green success message appears
5. Message says: "✅ Notification sent successfully to X subscribers!"
6. Form clears automatically
7. Notification appears on all subscribed devices

**Browser console shows:**
```
[Admin] Sending notification: { title: '...', message: '...', url: '...' }
[Admin] Response status: 200
[Admin] Response data: { success: true, recipients: 5, id: '...' }
```

## 🆘 Still Not Working?

1. **Share the error message**: Copy the exact error from browser console
2. **Check Vercel logs**: Share what you see in function logs
3. **Verify subscriber count**: Go to OneSignal → Audience → check count
4. **Test OneSignal directly**: Send from OneSignal dashboard

## 📞 Need Help?

Provide these details:
1. Error message from browser console
2. Screenshot of Vercel environment variables page
3. Number of subscribers in OneSignal dashboard
4. Whether sending from OneSignal dashboard works

---

**Remember:** After any changes to environment variables in Vercel, you MUST redeploy for changes to take effect!
