# Deploying with API Routes Enabled

This project originally used static export (for GitHub Pages). To run the `/api/newsletter` server route in production, deploy to a serverful host.

## Recommended: Vercel

1) Create project on Vercel and link this repository.
2) Set Environment Variables in the Vercel dashboard (Project Settings → Environment Variables):
   - `NEWSLETTER_DESTINATION_EMAIL=info@vaultmont.com`
   - `SMTP_HOST=smtp.hostinger.com`
   - `SMTP_PORT=465`
   - `SMTP_USER=info@vaultmont.com`
   - `SMTP_PASS=***` (your Hostinger mailbox password)
   - `EMAIL_FROM=info@vaultmont.com`
3) Deploy. Vercel will build and host both the app and the API routes.

## Alternative: Node Server (Any VPS/Host)

1) Ensure Node 18+.
2) Set environment variables on your server (or use a `.env` file with a process manager like PM2).
3) Build and start:
   - `npm install`
   - `npm run build`
   - `npm start`
4) Put it behind a reverse proxy (NGINX) if needed.

## Notes
- Static export is disabled in `next.config.mjs` so API routes will be available.
- If you still need a static export for a different target, use a separate branch or config profile.
