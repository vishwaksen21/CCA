import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = process.env.ONESIGNAL_REST_API_KEY || '';
  
  return NextResponse.json({
    hasApiKey: !!apiKey,
    keyLength: apiKey.length,
    keyStart: apiKey.substring(0, 20),
    keyEnd: apiKey.substring(apiKey.length - 10),
    expectedLength: 113,
    isCorrectLength: apiKey.length === 113,
  });
}
