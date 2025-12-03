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

    // Auto-commit and push to GitHub
    try {
      const cwd = process.cwd();
      
      // Add the file to git
      await execAsync(`git add public/${filename}`, { cwd });
      
      // Commit with a message
      const commitMessage = `Add uploaded image: ${filename}`;
      await execAsync(`git commit -m "${commitMessage}"`, { cwd });
      
      // Push to GitHub
      await execAsync('git push', { cwd });
      
      console.log(`✅ Image ${filename} automatically pushed to GitHub`);
    } catch (gitError) {
      console.error('Git push error:', gitError);
      // Don't fail the upload if git push fails, just log it
      return NextResponse.json({
        success: true,
        url: `/${filename}`,
        filename,
        message: 'Image uploaded to public folder, but failed to push to GitHub. Please commit manually.',
        gitError: gitError instanceof Error ? gitError.message : 'Unknown git error'
      });
    }

    // Return the public URL
    const url = `/${filename}`;

    return NextResponse.json({
      success: true,
      url,
      filename,
      message: 'Image uploaded successfully and pushed to GitHub!'
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
