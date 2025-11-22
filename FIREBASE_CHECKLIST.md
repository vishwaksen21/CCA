# 🔥 Firebase Configuration Checklist

Use this checklist to ensure your Firebase setup is complete.

## ☑️ Firebase Console Setup

### 1. Create Project
- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Click "Add Project"
- [ ] Name: `CCA-CMRIT` (or your choice)
- [ ] Disable Google Analytics (optional)
- [ ] Click "Create Project"

### 2. Enable Authentication
- [ ] Navigate to **Authentication** in sidebar
- [ ] Click **Get Started**
- [ ] Enable **Email/Password**
  - [ ] Click on "Email/Password" provider
  - [ ] Toggle "Enable"
  - [ ] Click "Save"
- [ ] Enable **Google**
  - [ ] Click on "Google" provider
  - [ ] Toggle "Enable"
  - [ ] Add support email
  - [ ] Click "Save"

### 3. Create Admin Users
- [ ] Go to **Authentication** > **Users** tab
- [ ] Click **Add User**
- [ ] Enter admin email: `admin@cmrit.ac.in`
- [ ] Enter strong password (save it securely!)
- [ ] Click **Add User**
- [ ] Repeat for additional admins

### 4. Get Firebase Config
- [ ] Click **Settings** gear icon > **Project Settings**
- [ ] Scroll to "Your apps" section
- [ ] Click **Web** icon (`</>`)
- [ ] Register app name: `CCA Admin`
- [ ] Copy the `firebaseConfig` object
- [ ] Click "Continue to console"

### 5. Set Up Firestore (Optional - for future)
- [ ] Navigate to **Firestore Database**
- [ ] Click **Create Database**
- [ ] Choose **Start in production mode**
- [ ] Select location (prefer closer to users)
- [ ] Click **Enable**

---

## ☑️ Local Environment Setup

### 1. Environment Variables
- [ ] Copy `.env.example` to `.env.local`
- [ ] Paste Firebase config values:
  ```env
  NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
  NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
  ```
- [ ] Add admin emails (comma-separated):
  ```env
  NEXT_PUBLIC_ADMIN_EMAILS=admin@cmrit.ac.in,cca@cmrit.ac.in,your@email.com
  ```

### 2. Verify Setup
- [ ] Restart development server: `npm run dev`
- [ ] Open browser: http://localhost:3000/admin
- [ ] Should see login page (not errors)

---

## ☑️ Test Authentication

### Email/Password Login
- [ ] Enter admin email created in Firebase
- [ ] Enter password
- [ ] Click "Sign In"
- [ ] Should redirect to admin dashboard
- [ ] See user email in header
- [ ] Click "Logout"
- [ ] Should return to login page

### Google Sign-In
- [ ] Click "Sign in with Google"
- [ ] Select Google account
- [ ] If email in whitelist → Login successful
- [ ] If email NOT in whitelist → "Unauthorized" error
- [ ] Click "Logout"

---

## ☑️ Production Deployment

### Netlify (or your hosting platform)
- [ ] Add environment variables in Netlify dashboard
- [ ] Go to Site settings > Environment variables
- [ ] Add all `NEXT_PUBLIC_*` variables
- [ ] Deploy site

### Firebase Production Config
- [ ] Go to Firebase Console > Authentication > Settings
- [ ] Click **Authorized domains** tab
- [ ] Add your production domain:
  - `cca-cmrit.netlify.app` (or your domain)
- [ ] Click "Add domain"

---

## ☑️ Security Review

- [ ] `.env.local` is in `.gitignore`
- [ ] Admin emails list is up to date
- [ ] Strong passwords used for all admin accounts
- [ ] Only trusted users have admin access
- [ ] Firebase security rules configured (for Firestore)

---

## ☑️ Documentation Review

- [ ] Read `ADMIN_SETUP.md`
- [ ] Review `ADMIN_LOGIN_REFERENCE.md`
- [ ] Check `IMPLEMENTATION_SUMMARY.md`
- [ ] Bookmark Firebase Console URL

---

## 🎉 All Done!

Once all items are checked:
- ✅ Firebase is configured
- ✅ Admin login works locally
- ✅ Ready for production deployment
- ✅ Team can access admin dashboard

---

## 📞 Get Help

Having issues? Check:
1. Browser console for errors
2. Firebase Console for service status
3. Environment variables are correct
4. Admin email is in whitelist
5. `ADMIN_SETUP.md` troubleshooting section

---

**Last Updated**: Setup complete  
**Status**: ✅ Ready to configure
