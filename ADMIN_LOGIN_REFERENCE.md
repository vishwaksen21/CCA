# 🔑 Quick Admin Login Reference

## Default Login Credentials

**IMPORTANT**: You need to set these up in Firebase first!

### Email/Password Login
- Email: `admin@cmrit.ac.in` (or your configured admin email)
- Password: Set this in Firebase Console > Authentication > Users

### Google Sign-In
- Any Google account listed in `NEXT_PUBLIC_ADMIN_EMAILS`

---

## 🚀 Quick Start (First Time Setup)

1. **Create Firebase project** at https://console.firebase.google.com/
2. **Enable Authentication** (Email/Password + Google)
3. **Add admin user** in Firebase Console
4. **Copy Firebase config** to `.env.local`
5. **Add admin emails** to `NEXT_PUBLIC_ADMIN_EMAILS`
6. **Restart dev server**: `npm run dev`
7. **Visit**: http://localhost:3000/admin

---

## 📋 Environment Variables Template

Copy this to your `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_ADMIN_EMAILS=admin@cmrit.ac.in,cca@cmrit.ac.in
```

---

## 🎯 Access Admin Dashboard

**Local**: http://localhost:3000/admin  
**Production**: https://cca-cmrit.netlify.app/admin

---

## 🔒 Security Notes

✅ Only emails in `NEXT_PUBLIC_ADMIN_EMAILS` can access admin panel  
✅ Firebase handles password security  
✅ Google OAuth for secure sign-in  
✅ Automatic logout on unauthorized access  

---

For detailed setup instructions, see [ADMIN_SETUP.md](./ADMIN_SETUP.md)
