import { NextRequest, NextResponse } from 'next/server';

const ONESIGNAL_APP_ID = '4757bad8-5f4b-4b59-b2ef-fdd3de694379';
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, message, url } = body;

    console.log('[Send Notification] Request received:', { title, message, url });

    // Validate input
    if (!title || !message) {
      console.error('[Send Notification] Validation failed: Missing title or message');
      return NextResponse.json(
        { error: 'Title and message are required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!ONESIGNAL_REST_API_KEY) {
      console.error('[Send Notification] API key not found in environment variables');
      return NextResponse.json(
        { 
          error: 'OneSignal REST API key not configured. Please add ONESIGNAL_REST_API_KEY to your environment variables.',
          needsConfig: true
        },
        { status: 500 }
      );
    }

    console.log('[Send Notification] API key found, length:', ONESIGNAL_REST_API_KEY.length);

    // Send notification via OneSignal API
    const notificationPayload = {
      app_id: ONESIGNAL_APP_ID,
      included_segments: ['All'],
      headings: { en: title },
      contents: { en: message },
      ...(url && { url }),
    };

    console.log('[Send Notification] Sending to OneSignal:', notificationPayload);

    const response = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`,
      },
      body: JSON.stringify(notificationPayload),
    });

    const data = await response.json();

    console.log('[Send Notification] OneSignal response status:', response.status);
    console.log('[Send Notification] OneSignal response data:', data);

    if (!response.ok) {
      console.error('[Send Notification] OneSignal API Error:', data);
      return NextResponse.json(
        { 
          error: data.errors?.[0] || 'Failed to send notification',
          details: data
        },
        { status: response.status }
      );
    }

    console.log('[Send Notification] Success! Recipients:', data.recipients);

    return NextResponse.json({
      success: true,
      message: 'Notification sent successfully',
      id: data.id,
      recipients: data.recipients,
    });
  } catch (error) {
    console.error('[Send Notification] Exception:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
