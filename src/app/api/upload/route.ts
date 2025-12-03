import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

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

    // Check if we have GitHub token
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = 'vishwaksen21/CCA'; // Your repo
    
    if (githubToken) {
      // Upload directly to GitHub via API
      try {
        const base64Content = buffer.toString('base64');
        
        // Check if file exists to get SHA (for updates)
        let sha: string | undefined;
        try {
          const checkResponse = await fetch(
            `https://api.github.com/repos/${githubRepo}/contents/public/${filename}`,
            {
              headers: {
                'Authorization': `token ${githubToken}`,
                'Accept': 'application/vnd.github.v3+json',
              },
            }
          );
          if (checkResponse.ok) {
            const existingFile = await checkResponse.json();
            sha = existingFile.sha;
          }
        } catch (e) {
          // File doesn't exist, which is fine
        }

        // Create or update file on GitHub
        const githubResponse = await fetch(
          `https://api.github.com/repos/${githubRepo}/contents/public/${filename}`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `token ${githubToken}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: `Add uploaded image: ${filename}`,
              content: base64Content,
              ...(sha && { sha }), // Include SHA if updating existing file
            }),
          }
        );

        if (!githubResponse.ok) {
          const errorData = await githubResponse.json();
          throw new Error(`GitHub API error: ${errorData.message}`);
        }

        const result = await githubResponse.json();
        
        return NextResponse.json({
          success: true,
          url: `/${filename}`,
          filename,
          message: '✅ Image uploaded and pushed to GitHub! Vercel will auto-deploy.',
          githubUrl: result.content.html_url
        });
        
      } catch (githubError) {
        console.error('GitHub API error:', githubError);
        return NextResponse.json({
          success: false,
          error: 'Failed to upload to GitHub',
          details: githubError instanceof Error ? githubError.message : 'Unknown error',
          suggestion: 'Make sure GITHUB_TOKEN is set in environment variables'
        }, { status: 500 });
      }
    } else {
      // Fallback: Save locally (development only)
      try {
        const publicPath = path.join(process.cwd(), 'public', filename);
        await writeFile(publicPath, buffer);
        
        return NextResponse.json({
          success: true,
          url: `/${filename}`,
          filename,
          message: '⚠️ Image saved locally. Add GITHUB_TOKEN env variable to auto-push to GitHub.',
        });
      } catch (fsError) {
        return NextResponse.json({
          success: false,
          error: 'Failed to save image',
          details: fsError instanceof Error ? fsError.message : 'Unknown error'
        }, { status: 500 });
      }
    }

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload image', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
