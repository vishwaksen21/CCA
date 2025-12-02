# Firebase Storage Setup Guide

## Issue: Image Upload Not Working

If image upload is stuck loading or showing errors, Firebase Storage needs to be enabled and configured.

## Steps to Fix:

### 1. Enable Firebase Storage

1. Go to [Firebase Console](https://console.firebase.google.com/project/cca-website-9da00/storage)
2. Click on **"Storage"** in the left menu
3. If not enabled, click **"Get Started"**
4. Choose **"Start in test mode"** (we'll secure it later)
5. Click **"Next"** and **"Done"**

### 2. Configure Storage Rules

1. In Firebase Console, go to **Storage** → **Rules** tab
2. Replace the rules with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /uploads/{allPaths=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

3. Click **"Publish"**

### 3. Deploy Rules from Terminal (Alternative)

If you have Firebase CLI installed:

```bash
firebase deploy --only storage
```

If Firebase CLI is not installed:

```bash
npm install -g firebase-tools
firebase login
firebase init storage  # Select your project
firebase deploy --only storage
```

### 4. Verify Storage Bucket

Check that your `.env.local` has the correct storage bucket:

```
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=cca-website-9da00.firebasestorage.app
```

This should match what's shown in the Firebase Console under Storage settings.

### 5. Test Upload

1. Push the latest code:
   ```bash
   git add .
   git commit -m "Added upload error handling"
   git push
   ```

2. Go to `https://cca-cmrit.vercel.app/admin`
3. Navigate to **Images** tab
4. Try uploading an image
5. Check browser console (F12) for detailed logs

## Error Messages Guide

### "Storage not configured"
- Firebase Storage not enabled in Console
- Go to Firebase Console and enable Storage

### "storage/unauthorized"
- Storage rules not deployed
- Deploy rules as shown above

### "storage/unknown"
- Check Firebase Storage is enabled
- Verify storage bucket name in `.env.local`

### Upload stuck/loading forever
- Check browser console for errors
- Verify internet connection
- Check Firebase Console for any service disruptions

## What Gets Uploaded

- Images are saved to: `uploads/TIMESTAMP_filename.ext`
- Public URLs like: `https://storage.googleapis.com/cca-website-9da00.appspot.com/uploads/...`
- Files are accessible globally via these URLs
- Use these URLs in event images, team member profiles, etc.

## Next Steps After Setup

Once upload works:

1. Test uploading an image
2. Copy the image URL
3. Use it in Events → Event Image field
4. Verify image displays correctly

## Security (TODO Later)

Current rules allow anyone to upload. To restrict to admins only:

```
match /uploads/{allPaths=**} {
  allow read: if true;
  allow write: if request.auth != null && 
    request.auth.token.email in [
      'cca.club@cmrit.ac.in',
      'chilukurvishwak21@gmail.com'
    ];
}
```

This requires Firebase Authentication to be fully set up (not just mock auth).
