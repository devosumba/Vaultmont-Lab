// Google Sheets integration via webhook (e.g., Google Apps Script Web App)
// This avoids adding server-side Google API SDK dependencies. If the webhook
// is configured, we POST subscription data for appending to a Sheet.

const SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.SHEETS_WEBHOOK_URL;
const SHEETS_WEBHOOK_TOKEN = process.env.SHEETS_WEBHOOK_TOKEN; // optional simple auth

export type SheetsAppendResult = { success: boolean };

export async function appendSubscriberToSheet(
  email: string
): Promise<SheetsAppendResult> {
  try {
    if (!SHEETS_WEBHOOK_URL) {
      return { success: false };
    }

    const payload = {
      event: 'newsletter_subscription',
      email,
      timestamp: new Date().toISOString(),
      source: 'vaultmont_website',
    };

    const res = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(SHEETS_WEBHOOK_TOKEN ? { 'X-Webhook-Token': SHEETS_WEBHOOK_TOKEN } : {}),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.warn('⚠️ Sheets webhook returned non-OK:', res.status);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error('❌ Sheets webhook error:', err);
    return { success: false };
  }
}

export function getSheetsSetupInstructions(): string {
  return `
  📄 Google Sheets (Webhook) Setup
  ================================

  Create a simple Google Apps Script Web App that appends rows to a Sheet.

  1) In Google Drive: New -> Google Sheets -> name it (e.g., Vaultmont Subscribers)
  2) Extensions -> Apps Script. Replace Code.gs with:

  function doPost(e) {
    try {
      var data = JSON.parse(e.postData.contents);
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheets()[0];
      sheet.appendRow([
        new Date(),
        data.email || '',
        data.source || '',
        data.event || ''
      ]);
      return ContentService.createTextOutput(JSON.stringify({ ok: true }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  3) Deploy -> New deployment -> Type: Web app
     - Execute as: Me
     - Who has access: Anyone with the link
     - Copy the Web app URL

  4) In .env.local, set:
     GOOGLE_SHEETS_WEBHOOK_URL=your_web_app_url_here
     # Optional simple token (also check for it in your Apps Script if desired)
     SHEETS_WEBHOOK_TOKEN=optional_shared_secret

  That's it. The API will attempt to POST each new subscriber to your Sheet.
  `;
}
