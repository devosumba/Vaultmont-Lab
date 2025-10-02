import { NextRequest, NextResponse } from 'next/server';
import { validateEmail } from '@/utils/validateEmail';
import { sendNewsletterSubscriptionNotification } from '@/lib/webEmailService';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send notification email
    const result = await sendNewsletterSubscriptionNotification(email);

    if (result.success) {
      return NextResponse.json(
        { 
          message: 'Successfully subscribed to newsletter! 🎉',
          email: email,
          messageId: result.messageId
        },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to process subscription');
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}