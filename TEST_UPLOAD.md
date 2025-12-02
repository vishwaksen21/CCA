# Image Upload Testing Guide

## Changes Made

### 1. Created `/src/app/api/list-images/route.ts`
- API endpoint to list all images in the public folder
- Returns images with filename, URL, size, and timestamp
- Sorted by most recent first

### 2. Updated `/src/app/admin/page.tsx`
- Added `loadImages()` function to fetch images from the API
- Added `isLoadingImages` state for loading indication
- Modified `handleImageUpload()` to reload images after successful upload
- Updated Images tab to:
  - Show all images from public folder on page load
  - Display loading state while fetching images
  - Show refresh button to reload images
  - Show empty state when no images exist

### 3. Upload API (`/src/app/api/upload/route.ts`) - Already Working
- Saves images to `public/` folder
- Validates file types (JPEG, PNG, GIF, WebP)
- Validates file size (max 5MB)
- Returns public URL path

## How It Works Now

1. **On Page Load**: Admin page automatically loads all images from the public folder
2. **Upload Image**: 
   - Select an image file
   - File is uploaded to `/api/upload`
   - Image is saved to `public/` folder with original filename
   - Image list is automatically refreshed to show the new image
3. **Copy Path**: Click "Copy Path" button on any image to copy its URL to clipboard
4. **Use in Events**: Paste the copied path into the "Event Image" field when creating/editing events

## Testing Steps

1. Navigate to `/admin`
2. Click on the "Images" tab
3. You should see all existing images from the public folder
4. Click the file input to upload a new image
5. Select an image (PNG, JPG, GIF, or WebP, max 5MB)
6. Wait for success message
7. Image should appear in the gallery
8. Click "Copy Path" to copy the image URL
9. Go to Events tab and paste the URL in the "Event Image" field

## Features

✅ Upload images to public folder
✅ List all images from public folder
✅ Auto-refresh after upload
✅ Copy image URL to clipboard
✅ Preview uploaded images
✅ Validate file types and sizes
✅ Show loading states
✅ Handle errors gracefully

## Important Notes

- Images are saved with their original filename
- Uploading a file with the same name will overwrite the previous file
- All images are publicly accessible at `/<filename>`
- Images persist across deployments when saved to the public folder
