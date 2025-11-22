# Admin Login Setup Guide

This guide will help you set up Firebase Authentication for the CCA Admin Dashboard.

## 🔥 Firebase Setup

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: `CCA-CMRIT` (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create Project"

### Step 2: Enable Authentication

1. In your Firebase project, click on **Authentication** in the left sidebar
2. Click **Get Started**
3. Enable the following sign-in methods:
   - **Email/Password** - Click "Enable" and save
   - **Google** - Click "Enable", add project support email, and save

### Step 3: Create Admin Users

#### For Email/Password Authentication:
1. Go to **Authentication** > **Users** tab
2. Click **Add User**
3. Enter admin email (e.g., `admin@cmrit.ac.in`)
4. Enter a strong password
5. Click **Add User**
6. Repeat for all admin users

#### For Google Authentication:
- Users will be created automatically on first sign-in
- Make sure their Gmail addresses are listed in the authorized admin emails

### Step 4: Get Firebase Configuration

1. Click on the **Settings** (gear icon) > **Project Settings**
2. Scroll down to "Your apps" section
3. Click the **Web** icon (`</>`) to add a web app
4. Register app name: `CCA Admin`
5. Copy the `firebaseConfig` object

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "cca-cmrit.firebaseapp.com",
  projectId: "cca-cmrit",
  storageBucket: "cca-cmrit.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### Step 5: Configure Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values with your Firebase config:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=cca-cmrit.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=cca-cmrit
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=cca-cmrit.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456

# Admin Email (comma-separated list of authorized admin emails)
NEXT_PUBLIC_ADMIN_EMAILS=admin@cmrit.ac.in,cca@cmrit.ac.in,youremail@gmail.com
```

3. **Important**: Add all authorized admin emails to `NEXT_PUBLIC_ADMIN_EMAILS`
   - Separate multiple emails with commas
   - No spaces between emails
   - Include both institutional and personal emails as needed

### Step 6: Set Up Firestore Database (Optional but Recommended)

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Choose **Start in production mode**
4. Select your preferred location
5. Click **Enable**

This will be used for storing announcements, events, and other data in the future.

## 🔒 Security Rules

### Firestore Security Rules (Future Use)

Go to **Firestore Database** > **Rules** and add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is admin
    function isAdmin() {
      return request.auth != null && 
             request.auth.token.email in [
               'admin@cmrit.ac.in',
               'cca@cmrit.ac.in'
             ];
    }
    
    // Only admins can read/write
    match /{document=**} {
      allow read, write: if isAdmin();
    }
  }
}
```

**Note**: Update the email list in the security rules to match your admin emails.

## 🚀 Testing the Admin Login

### Test Email/Password Login

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/admin`

3. You should see the admin login page

4. Enter the email and password you created in Firebase

5. Click "Sign In"

6. If successful, you'll be redirected to the admin dashboard

### Test Google Sign-In

1. Click "Sign in with Google"
2. Select your Google account
3. If the email is in the authorized list, you'll be logged in
4. If not, you'll see an "Unauthorized" error

## 🐛 Troubleshooting

### Error: "Unauthorized: Only admin users can access this area"
- **Solution**: Make sure your email is added to `NEXT_PUBLIC_ADMIN_EMAILS` in `.env.local`
- Restart your development server after changing `.env.local`

### Error: "Firebase: Error (auth/invalid-api-key)"
- **Solution**: Check that your Firebase API key in `.env.local` is correct

### Error: "Firebase: Error (auth/configuration-not-found)"
- **Solution**: Make sure you've enabled Email/Password and Google sign-in methods in Firebase Console

### Google Sign-In popup blocked
- **Solution**: Allow popups for localhost in your browser settings

### Changes to .env.local not reflecting
- **Solution**: Stop the dev server (`Ctrl+C`) and restart with `npm run dev`

## 📧 Adding More Admin Users

### Method 1: Through Firebase Console
1. Go to Firebase Console > Authentication > Users
2. Click "Add User"
3. Enter email and password
4. Add the email to `NEXT_PUBLIC_ADMIN_EMAILS` in `.env.local`

### Method 2: Self-Registration (For Google accounts)
1. Add the user's Gmail to `NEXT_PUBLIC_ADMIN_EMAILS` in `.env.local`
2. They can sign in directly using "Sign in with Google"
3. Their account will be created automatically

## 🔐 Best Practices

1. **Use Strong Passwords**: For email/password auth, use passwords with 12+ characters
2. **Limit Admin Access**: Only add trusted team members to the admin list
3. **Regular Reviews**: Periodically review and remove old admin accounts
4. **Environment Variables**: Never commit `.env.local` to Git (it's in `.gitignore`)
5. **Production Deployment**: Use environment variables in your hosting platform (Netlify, Vercel, etc.)

## 🌐 Production Deployment

When deploying to production (e.g., Netlify):

1. Add all environment variables in your hosting platform's settings
2. Update Firebase Authentication authorized domains:
   - Go to Firebase Console > Authentication > Settings > Authorized domains
   - Add your production domain (e.g., `cca-cmrit.netlify.app`)

## 📝 Features Implemented

✅ Email/Password authentication
✅ Google Sign-In integration
✅ Admin email authorization check
✅ Protected admin dashboard
✅ Logout functionality
✅ User email display in dashboard
✅ Loading states
✅ Error handling
✅ Responsive login UI

## 🎯 Next Steps

- [ ] Integrate Firestore for data persistence
- [ ] Add password reset functionality
- [ ] Implement role-based permissions (super admin, moderator, etc.)
- [ ] Add activity logging
- [ ] Email notifications for admin actions

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Ensure Firebase services are enabled
4. Check Firebase quotas and limits
5. Contact the development team

---

**Made with ❤️ for CCA-CMRIT**
