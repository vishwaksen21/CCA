import { NextRequest, NextResponse } from 'next/server';

const ONESIGNAL_APP_ID = '4757bad8-5f4b-4b59-b2ef-fdd3de694379';
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, message, url } = body;

    // Validate input
    if (!title || !message) {
      return NextResponse.json(
        { error: 'Title and message are required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!ONESIGNAL_REST_API_KEY) {
      return NextResponse.json(
        { 
          error: 'OneSignal REST API key not configured. Please add ONESIGNAL_REST_API_KEY to your environment variables.',
          needsConfig: true
        },
        { status: 500 }
      );
    }

    // Send notification via OneSignal API
    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`,
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        included_segments: ['All'],
        headings: { en: title },
        contents: { en: message },
        ...(url && { url }),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OneSignal API Error:', data);
      return NextResponse.json(
        { 
          error: data.errors?.[0] || 'Failed to send notification',
          details: data
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Notification sent successfully',
      id: data.id,
      recipients: data.recipients,
    });
  } catch (error) {
    console.error('Send notification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
