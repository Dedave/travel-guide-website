// src/lib/email.ts
// Automatic email delivery for lead-magnet sign-ups, powered by Resend.
//
// Required environment variables (set these in Vercel → Project → Settings →
// Environment Variables):
//   RESEND_API_KEY   – your Resend API key (starts with "re_")
//   EMAIL_FROM       – verified sender, e.g. "Wanderlust Travel Guides <hello@wanderlusttravelguides.com>"
// Optional:
//   LEAD_MAGNET_URL  – public URL to the free PDF. If omitted, the email links
//                      to the Italy guide page as a fallback.
//   SITE_URL         – canonical site URL used in links/footer.

import { Resend } from "resend";

const SITE_URL =
  process.env.SITE_URL?.replace(/\/$/, "") ||
  "https://www.wanderlusttravelguides.com";

// The free PDF ships with the site at /downloads/25-hidden-places-in-italy.pdf.
// Override with LEAD_MAGNET_URL if you host it elsewhere (e.g. a CDN).
const LEAD_MAGNET_URL =
  process.env.LEAD_MAGNET_URL ||
  `${SITE_URL}/downloads/25-hidden-places-in-italy.pdf`;

export interface SendResult {
  sent: boolean;
  skipped?: boolean;
  error?: string;
}

function buildHtml(): string {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f4f5;font-family:Helvetica,Arial,sans-serif;color:#1f2937;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
            <tr>
              <td style="background:linear-gradient(135deg,#0e7490,#0891b2);padding:32px 40px;">
                <h1 style="margin:0;color:#ffffff;font-size:24px;line-height:1.3;">Your free Italy guide is here 🇮🇹</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 40px;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Thanks for joining <strong>Wanderlust Travel Guides</strong>!</p>
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;">As promised, here's your free PDF: <strong>25 Hidden Places in Italy Most Tourists Miss</strong> — the little corners of Italy that locals love and guidebooks skip.</p>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 28px;">
                  <tr>
                    <td align="center" style="border-radius:10px;background:#0891b2;">
                      <a href="${LEAD_MAGNET_URL}" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:16px;font-weight:bold;text-decoration:none;border-radius:10px;">Download your free guide →</a>
                    </td>
                  </tr>
                </table>
                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#4b5563;">Over the next few days we'll share more hidden gems, local tips and ready-made itineraries to help you plan an unforgettable trip.</p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#4b5563;">Buon viaggio!<br/>— The Wanderlust team</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#9ca3af;">You're receiving this because you requested a free guide at <a href="${SITE_URL}" style="color:#0891b2;text-decoration:none;">wanderlusttravelguides.com</a>.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildText(): string {
  return [
    "Your free Italy guide is here!",
    "",
    "Thanks for joining Wanderlust Travel Guides.",
    "",
    "As promised, here's your free PDF: 25 Hidden Places in Italy Most Tourists Miss.",
    "",
    `Download it here: ${LEAD_MAGNET_URL}`,
    "",
    "Over the next few days we'll share more hidden gems, local tips and ready-made itineraries.",
    "",
    "Buon viaggio!",
    "— The Wanderlust team",
    "",
    `You're receiving this because you requested a free guide at ${SITE_URL}.`,
  ].join("\n");
}

/**
 * Sends the lead-magnet welcome email via Resend.
 * Never throws — returns a result object so the API route can respond
 * gracefully even if email delivery is misconfigured or fails.
 */
export async function sendLeadMagnetEmail(to: string): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  // If email isn't configured yet, skip silently so lead capture still works.
  if (!apiKey || !from) {
    console.warn(
      "[email] RESEND_API_KEY or EMAIL_FROM not set — skipping email delivery."
    );
    return { sent: false, skipped: true };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: "🇮🇹 Your free guide: 25 Hidden Places in Italy",
      html: buildHtml(),
      text: buildText(),
    });

    if (error) {
      console.error("[email] Resend error:", error);
      return { sent: false, error: String(error) };
    }
    return { sent: true };
  } catch (err) {
    console.error("[email] Unexpected send failure:", err);
    return { sent: false, error: String(err) };
  }
}
