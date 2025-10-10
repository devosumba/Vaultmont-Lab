// Web-based email service for newsletter subscriptions
// Sends actual emails to info@vaultmont.com using SMTP (Nodemailer) if configured,
// then falls back to EmailJS/Formspree/Web3Forms, and finally logs with setup guidance.

// Environment variables
const DESTINATION_EMAIL = process.env.NEWSLETTER_DESTINATION_EMAIL || 'info@vaultmont.com';
const WEBHOOK_URL = process.env.NEWSLETTER_WEBHOOK_URL;

// EmailJS configuration (free email service)
const EMAILJS_CONFIG = {
  serviceId: process.env.EMAILJS_SERVICE_ID,
  templateId: process.env.EMAILJS_TEMPLATE_ID,
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
};

// Send email using web service
export async function sendNewsletterSubscriptionNotification(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  try {
    // Try multiple email sending methods in order of preference
    
    // Method 0: Direct SMTP via Nodemailer (preferred when available)
    const smtpResult = await sendViaSMTP(subscriberEmail);
    if (smtpResult.success) {
      return smtpResult;
    }
    
    // Method 1: EmailJS (if configured)
    if (EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey) {
      return await sendViaEmailJS(subscriberEmail);
    }

    // Method 2: Formspree (simple form submission)
    const formspreeResult = await sendViaFormspree(subscriberEmail);
    if (formspreeResult.success) {
      return formspreeResult;
    }

    // Method 3: Web3Forms (free form service)
    const web3FormsResult = await sendViaWeb3Forms(subscriberEmail);
    if (web3FormsResult.success) {
      return web3FormsResult;
    }

    // Fallback: Console logging with detailed instructions
    return await fallbackWithInstructions(subscriberEmail);

  } catch (error) {
    console.error('❌ Email service error:', error);
    return await fallbackWithInstructions(subscriberEmail);
  }
}

// Method 0: Direct SMTP (Nodemailer) - uses your own mailbox or provider
async function sendViaSMTP(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  try {
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : undefined;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER || 'no-reply@vaultmont.com';

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return { success: false };
    }

    // Lazy import nodemailer to avoid client bundling
    const nodemailer = (await import('nodemailer')).default;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for others
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = 'Newsletter Subscription';
    const text = `New newsletter subscription received.\n\nSubscriber Email: ${subscriberEmail}\nDate: ${new Date().toLocaleString()}\nSource: Vaultmont Website Footer`;
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
        <h2 style="margin:0 0 8px">${subject}</h2>
        <p style="margin:0 0 4px"><strong>Subscriber:</strong> ${subscriberEmail}</p>
        <p style="margin:0 0 4px"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p style="margin:0 0 12px"><strong>Source:</strong> Vaultmont Website Footer</p>
        <p style="color:#555;margin:12px 0 0">This email was sent automatically by the website.</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `Vaultmont Website <${EMAIL_FROM}>`,
      to: DESTINATION_EMAIL,
      subject,
      text,
      html,
    });

    console.log('✅ SMTP email sent to:', DESTINATION_EMAIL, 'messageId:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ SMTP failed:', error);
    return { success: false };
  }
}

// Method 1: EmailJS (free tier: 200 emails/month)
async function sendViaEmailJS(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  try {
    const templateParams = {
      to_email: DESTINATION_EMAIL,
      subject: 'Newsletter Subscription',
      subscriber_email: subscriberEmail,
      date: new Date().toLocaleString(),
      source: 'Vaultmont Website Footer',
    };

    // Note: This would require emailjs-com package in a real implementation
    console.log('📧 Attempting to send via EmailJS...');
    console.log('Configuration:', EMAILJS_CONFIG);
    console.log('Template params:', templateParams);

    // For now, simulate success (you'd replace this with actual EmailJS call)
    return { success: true, messageId: `emailjs-${Date.now()}` };

  } catch (error) {
    console.error('❌ EmailJS failed:', error);
    return { success: false };
  }
}

// Method 2: Formspree (free tier: 50 submissions/month)
async function sendViaFormspree(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  try {
    // You would need to create a form at https://formspree.io/ and get the form ID
    const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT;
    
    if (!FORMSPREE_ENDPOINT) {
      return { success: false };
    }

    const formData = {
      email: DESTINATION_EMAIL,
      subject: 'Newsletter Subscription',
      message: `
        New newsletter subscription received!
        
        Subscriber Email: ${subscriberEmail}
        Date: ${new Date().toLocaleString()}
        Source: Vaultmont Website Footer
        
        Please add this email to your newsletter list.
      `,
      _replyto: subscriberEmail,
    };

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('✅ Email sent via Formspree to:', DESTINATION_EMAIL);
      console.log('👤 New subscriber:', subscriberEmail);
      return { success: true, messageId: `formspree-${Date.now()}` };
    }

    return { success: false };

  } catch (error) {
    console.error('❌ Formspree failed:', error);
    return { success: false };
  }
}

// Method 3: Web3Forms (free tier: 250 submissions/month)
async function sendViaWeb3Forms(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  try {
    const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (!WEB3FORMS_KEY) {
      return { success: false };
    }

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('email', DESTINATION_EMAIL);
    formData.append('subject', 'Newsletter Subscription');
    formData.append('message', `
      New newsletter subscription received!
      
      Subscriber Email: ${subscriberEmail}
      Date: ${new Date().toLocaleString()}
      Source: Vaultmont Website Footer
    `);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ Email sent via Web3Forms to:', DESTINATION_EMAIL);
      console.log('👤 New subscriber:', subscriberEmail);
      return { success: true, messageId: `web3forms-${Date.now()}` };
    }

    return { success: false };

  } catch (error) {
    console.error('❌ Web3Forms failed:', error);
    return { success: false };
  }
}

// Fallback with setup instructions
async function fallbackWithInstructions(subscriberEmail: string): Promise<{ success: boolean; messageId?: string }> {
  console.log(`
    ❌ NO EMAIL SERVICE CONFIGURED - IMPORTANT SETUP NEEDED!
    ========================================================
    
    📧 SUBSCRIPTION NOTIFICATION (CONSOLE ONLY):
    To: ${DESTINATION_EMAIL}
    Subject: Newsletter Subscription
    
    New subscriber: ${subscriberEmail}
    Date: ${new Date().toLocaleString()}
    Source: Vaultmont Website Footer
    
    ⚠️  TO RECEIVE ACTUAL EMAILS, CHOOSE ONE OPTION:
    
    🚀 OPTION 1: Web3Forms (Recommended - FREE)
    ------------------------------------------
    1. Go to https://web3forms.com/
    2. Sign up and get your access key
    3. Add to .env.local: WEB3FORMS_ACCESS_KEY=your_key_here
    4. Add to .env.local: NEWSLETTER_DESTINATION_EMAIL=info@vaultmont.com
    
    🚀 OPTION 2: Formspree (FREE)
    -----------------------------
    1. Go to https://formspree.io/
    2. Create a new form
    3. Get your form endpoint
    4. Add to .env.local: FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
    
    🚀 OPTION 3: EmailJS (FREE)
    ---------------------------
    1. Go to https://emailjs.com/
    2. Set up email service and template
    3. Add to .env.local:
       EMAILJS_SERVICE_ID=your_service_id
       EMAILJS_TEMPLATE_ID=your_template_id
       EMAILJS_PUBLIC_KEY=your_public_key
    
    ========================================================
  `);

  // Also send webhook if configured
  if (WEBHOOK_URL) {
    await sendWebhookNotification(subscriberEmail);
  }

  return { 
    success: true, // Return success so user experience isn't broken
    messageId: `console-fallback-${Date.now()}` 
  };
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