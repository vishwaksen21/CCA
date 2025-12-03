#!/bin/bash
# Quick script to commit and push all uploaded images to GitHub

echo "📸 Committing uploaded images..."
git add public/*.png public/*.jpg public/*.jpeg public/*.gif public/*.webp 2>/dev/null
git commit -m "Add uploaded images from admin panel"
git push

echo "✅ Images pushed to GitHub! Vercel will auto-deploy."
