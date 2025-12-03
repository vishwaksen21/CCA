import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, GIF, and WebP are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 5MB.' },
        { status: 400 }
      );
    }

    // Get file extension and sanitize filename
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Sanitize filename - remove special characters and spaces
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filename = originalName;

    // Save to public folder
    const publicPath = path.join(process.cwd(), 'public', filename);
    await writeFile(publicPath, buffer);

    // Auto-push to GitHub (development/local only)
    let gitPushed = false;
    try {
      const cwd = process.cwd();
      
      // Only auto-push in development (not production)
      if (process.env.NODE_ENV !== 'production') {
        await execAsync(`git add public/${filename}`, { cwd });
        await execAsync(`git commit -m "Auto-upload: ${filename}"`, { cwd });
        await execAsync('git push', { cwd });
        gitPushed = true;
        console.log(`✅ Image ${filename} automatically pushed to GitHub`);
      }
    } catch (gitError) {
      console.log('Git auto-push skipped or failed:', gitError);
      // Continue without failing the upload
    }

    // Return the public URL
    const url = `/${filename}`;

    return NextResponse.json({
      success: true,
      url,
      filename,
      message: gitPushed 
        ? `✅ Image uploaded and auto-pushed to GitHub! Vercel will deploy.` 
        : `✅ Image uploaded to /public/${filename}`,
      autoPushed: gitPushed
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
