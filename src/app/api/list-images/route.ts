import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const publicPath = path.join(process.cwd(), 'public');
    const files = await readdir(publicPath);
    
    // Filter for image files only and get their stats
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = await Promise.all(
      files
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return imageExtensions.includes(ext);
        })
        .map(async (file) => {
          const filepath = path.join(publicPath, file);
          const stats = await stat(filepath);
          return {
            filename: file,
            url: `/${file}`,
            size: stats.size,
            timestamp: stats.mtimeMs
          };
        })
    );

    // Sort by most recent first
    imageFiles.sort((a, b) => b.timestamp - a.timestamp);

    return NextResponse.json({
      success: true,
      images: imageFiles
    });

  } catch (error) {
    console.error('List images error:', error);
    return NextResponse.json(
      { error: 'Failed to list images' },
      { status: 500 }
    );
  }
}
