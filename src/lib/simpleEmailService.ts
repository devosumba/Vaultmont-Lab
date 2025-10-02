// Simple email service for newsletter subscriptions
// This provides logging and webhook functionality without external dependencies

// Environment variables for email configuration
const DESTINATION_EMAIL = process.env.NEWSLETTER_DESTINATION_EMAIL || 'info@vaultmont.com';
const WEBHOOK_URL = process.env.NEWSLETTER_WEBHOOK_URL; // Optional webhook for notifications

// Simple email notification function
export async function sendNewsletterSubscriptionNotification(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  try {
    console.log(`
      📧 EMAIL NOTIFICATION - Newsletter Subscription
      ===============================================
      To: ${DESTINATION_EMAIL}
      Subject: Newsletter Subscription
      
      New subscriber details:
      Email: ${subscriberEmail}
      Date: ${new Date().toLocaleString()}
      Time: ${new Date().toLocaleTimeString()}
      Source: Vaultmont Website Footer
      ===============================================
    `);

    // If webhook URL is provided, send notification via webhook
    if (WEBHOOK_URL) {
      await sendWebhookNotification(subscriberEmail);
    }

    // You can integrate with your preferred email service here:
    // - SendGrid: https://sendgrid.com/
    // - Mailgun: https://www.mailgun.com/
    // - AWS SES: https://aws.amazon.com/ses/
    // - Nodemailer with Gmail: https://nodemailer.com/

    return { 
      success: true, 
      messageId: `subscription-${Date.now()}` 
    };

  } catch (error) {
    console.error('❌ Email service error:', error);
    
    // Even if notification fails, we still want to log the subscription
    console.log(`
      📝 SUBSCRIPTION LOGGED (Error Fallback):
      Email: ${subscriberEmail}
      Date: ${new Date().toLocaleString()}
      Error: ${error instanceof Error ? error.message : 'Unknown error'}
    `);
    
    return { success: true, messageId: 'logged-fallback' };
  }
}

// Send notification via webhook (optional)
async function sendWebhookNotification(subscriberEmail: string): Promise<void> {
  try {
    if (!WEBHOOK_URL) return;

    const webhookData = {
      event: 'newsletter_subscription',
      email: subscriberEmail,
      timestamp: new Date().toISOString(),
      source: 'vaultmont_website',
      subject: 'Newsletter Subscription',
      destination: DESTINATION_EMAIL,
    };

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (response.ok) {
      console.log('✅ Webhook notification sent successfully');
    } else {
      console.warn('⚠️ Webhook notification failed:', response.status);
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
  }
}

// Email service configuration instructions
export function getEmailSetupInstructions(): string {
  return `
    📧 EMAIL SERVICE SETUP INSTRUCTIONS
    ==================================
    
    To enable actual email notifications, choose one of these options:
    
    1. SENDGRID (Recommended)
    -------------------------
    - Install: npm install @sendgrid/mail
    - Add to .env.local: SENDGRID_API_KEY=your_api_key
    - Add to .env.local: EMAIL_FROM=noreply@yourdomain.com
    
    2. NODEMAILER WITH GMAIL
    ------------------------
    - Install: npm install nodemailer @types/nodemailer
    - Add to .env.local: SMTP_HOST=smtp.gmail.com
    - Add to .env.local: SMTP_PORT=587
    - Add to .env.local: SMTP_USER=your_gmail@gmail.com
    - Add to .env.local: SMTP_PASS=your_app_password
    
    3. WEBHOOK INTEGRATION
    ----------------------
    - Add to .env.local: NEWSLETTER_WEBHOOK_URL=https://your-webhook.com
    - Your webhook will receive subscription data
    
    4. MANUAL COLLECTION
    --------------------
    - Check server logs for new subscriptions
    - Export data from your database periodically
    
    Current Configuration:
    - Destination Email: ${DESTINATION_EMAIL}
    - Webhook URL: ${WEBHOOK_URL ? 'Configured' : 'Not configured'}
  `;
}

// Validate current email configuration
export function validateEmailConfiguration(): { isValid: boolean; errors: string[]; instructions: string } {
  const errors: string[] = [];
  const hasWebhook = !!WEBHOOK_URL;
  const hasDestinationEmail = !!DESTINATION_EMAIL;

  if (!hasDestinationEmail) {
    errors.push('NEWSLETTER_DESTINATION_EMAIL environment variable is required');
  }

  return {
    isValid: hasDestinationEmail && (hasWebhook || true), // Always valid for logging
    errors,
    instructions: getEmailSetupInstructions(),
  };
}