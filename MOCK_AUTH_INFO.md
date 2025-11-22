# 🔐 Mock Authentication Setup

This project is currently using **mock authentication** for development purposes instead of Firebase Auth.

## 📝 Admin Credentials

Use these credentials to access the admin dashboard:

```
Email: chilukurvishwak21@gmail.com
Password: Vishwak@151370
```

## 🚀 How to Login

1. **Navigate to the admin page:**
   - Local: `http://localhost:3000/admin`
   - Production: `https://cca-cmrit.netlify.app/admin`

2. **Enter the credentials above**

3. **Click "Sign In"**

4. **You'll be redirected to the admin dashboard**

## 🔧 Technical Details

### Files Modified:
- ✅ `src/lib/mock-auth.ts` - Mock authentication logic
- ✅ `src/components/admin/AdminLogin.tsx` - Removed Google Sign-In option
- ✅ `src/contexts/AuthContext.tsx` - Updated to use mock auth
- ✅ `src/app/admin/page.tsx` - Updated to use mock sign out

### Features:
- ✅ Session persistence (sessionStorage)
- ✅ Email/Password validation
- ✅ Simulated network delay (800ms)
- ✅ Error handling with meaningful messages
- ✅ Auto-redirect after login
- ✅ Logout functionality

### Security Notes:
⚠️ **This is for DEVELOPMENT ONLY**
- Credentials are hardcoded in `src/lib/mock-auth.ts`
- Session stored in browser sessionStorage (cleared on browser close)
- No actual backend authentication
- **Do not use in production!**

## 🔄 Switching to Firebase (Future)

When ready to use real authentication:

1. Uncomment Firebase imports in:
   - `src/components/admin/AdminLogin.tsx`
   - `src/contexts/AuthContext.tsx`
   - `src/app/admin/page.tsx`

2. Replace mock functions with Firebase functions:
   - `mockSignIn` → `signInWithEmail`
   - `mockSignOut` → `signOut`
   - `getCurrentSession` → Firebase auth state

3. Follow the setup guide in `ADMIN_SETUP.md`

## 🎯 What Works:
- ✅ Login with email/password
- ✅ Session persistence across page reloads
- ✅ Logout functionality
- ✅ Protected admin routes
- ✅ User email display in dashboard
- ✅ All admin CRUD operations

## 📊 Session Storage:
The mock auth system stores the session in `sessionStorage` with key: `cca_admin_session`

You can inspect it in browser DevTools:
```javascript
// In browser console
sessionStorage.getItem('cca_admin_session')
```

---

**Last Updated**: November 22, 2025  
**Status**: ✅ Mock Authentication Active  
**Next Step**: Migrate to Firebase when ready for production
