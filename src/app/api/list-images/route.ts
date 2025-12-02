import { NextResponse } from 'next/server';

// This API route is not needed for client-side Firebase Storage
// Image listing is handled directly from the client
export async function GET() {
  return NextResponse.json(
    { error: 'Use client-side Firebase Storage list instead' },
    { status: 400 }
  );
}
