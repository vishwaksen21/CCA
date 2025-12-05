import { NextRequest, NextResponse } from 'next/server';

// This API route is not needed for client-side Firebase Storage uploads
// Image uploads are handled directly from the client to Firebase Storage
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'Use client-side Firebase Storage upload instead' },
    { status: 400 }
  );
}
