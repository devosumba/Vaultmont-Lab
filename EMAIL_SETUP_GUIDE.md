# 🚀 Quick Email Setup Guide

## Why Emails Might Not Be Arriving Yet

We now support sending emails directly via SMTP (Nodemailer) with no third‑party provider required. If SMTP isn’t configured, the system falls back to Web3Forms/Formspree/EmailJS (if configured), and otherwise logs to the console so users still see success.

## ✅ Recommended: Direct SMTP (No provider)

Works with your domain mail server or Gmail (with App Password).

1) Add these to `.env.local` in your project root:
```env
NEWSLETTER_DESTINATION_EMAIL=info@vaultmont.com

# SMTP (choose your provider)
SMTP_HOST=smtp.yourmailserver.com
SMTP_PORT=587
SMTP_USER=your-mailbox@yourdomain.com
SMTP_PASS=your_smtp_or_app_password

# Optional: what shows in the From header
EMAIL_FROM=info@vaultmont.com
```

2) If using Gmail, enable 2FA on the account and create an “App password,” then use:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_gmail_app_password
```

3) Run the app and submit the footer form. You should receive an email at `info@vaultmont.com`.

Notes:
- SMTP is now the first method attempted. If any of `SMTP_HOST/PORT/USER/PASS` are missing, the code automatically tries other configured providers and finally logs to console with setup tips.
- No extra install needed—Nodemailer is already in dependencies.

---

## ⚡ Alternative: Web3Forms (FREE & 5-minute setup)

### Step 1: Get Web3Forms Access Key
1. Go to **https://web3forms.com/**
2. Click "**Get Started for Free**"
3. Sign up with your email
4. Copy your **Access Key**

### Step 2: Configure Your Project
1. Create a `.env.local` file in your project root:
```env
NEWSLETTER_DESTINATION_EMAIL=info@vaultmont.com
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

2. Replace `your_access_key_here` with your actual Web3Forms access key

### Step 3: Test It!
1. Go to your website footer
2. Enter an email and submit
3. Check `info@vaultmont.com` for the notification email! 📧

---

## 🎯 Other Options

### Option 2: Formspree (FREE - 50 emails/month)
```env
NEWSLETTER_DESTINATION_EMAIL=info@vaultmont.com
FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

1. Go to **https://formspree.io/**
2. Create a new form
3. Use the endpoint URL in your `.env.local`

### Option 3: EmailJS (FREE - 200 emails/month)
```env
NEWSLETTER_DESTINATION_EMAIL=info@vaultmont.com
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id  
EMAILJS_PUBLIC_KEY=your_public_key
```

1. Go to **https://emailjs.com/**
2. Set up email service and template
3. Add all three keys to `.env.local`

---

## 📧 What Happens After Setup

Once configured, when someone subscribes:

1. **Real email sent** to `info@vaultmont.com` with:
   - Subject: "Newsletter Subscription"
   - Subscriber's email address
   - Date and time
   - Source information

2. **Professional email template** with:
   - Vaultmont branding
   - Clear subscriber details
   - Next steps recommendations

3. **Console logging** continues for debugging

---

## 🚨 Current Status Check

Run this to see what's happening:
```bash
npm run dev
```

Then check your terminal/console when someone subscribes. You'll see:
- ✅ If email service is configured and working
- ⚠️ If only console logging is happening (no email service)
- ❌ If there are configuration errors

---

## 💡 Pro Tips

- **Web3Forms** is recommended for simplicity and reliability
- All services have FREE tiers perfect for starting
- You can always upgrade or switch services later
- The system gracefully falls back to console logging if email fails

---

## 🆘 Need Help?

1. Check the browser console for errors
2. Check your server terminal for logs  
3. Verify your `.env.local` file exists and has correct values
4. Test with a simple email like `test@example.com`

The system is designed to work even if email isn't configured - users will still get success messages, and you'll see all subscriptions in your console logs!