// src/app/api/email-capture/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";
<<<<<<< HEAD
=======
import { sendLeadMagnetEmail } from "@/lib/email";
>>>>>>> 43f394e294ed03e9765fbf5615ebc94c9d9eade6

/* ─── POST /api/email-capture ────────────────────────────────────────────────
   Body: { email: string, source?: string }
   Stores captured leads to a local JSON file. No external email provider.

   On writable environments (local dev) it appends to <cwd>/data/emails.json.
   On read-only serverless filesystems (e.g. Vercel) it falls back to the OS
   temp directory so the request still succeeds.
──────────────────────────────────────────────────────────────────────────── */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Lead {
  email: string;
  source: string;
  timestamp: string;
}

function candidatePaths(): string[] {
  return [
    path.join(process.cwd(), "data", "emails.json"),
    path.join(os.tmpdir(), "wanderlust-emails.json"),
  ];
}

function readLeads(filePath: string): Lead[] {
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed as Lead[];
    }
  } catch {
    /* ignore corrupt / unreadable file, start fresh */
  }
  return [];
}

function persist(lead: Lead): { stored: boolean; duplicate: boolean } {
  for (const filePath of candidatePaths()) {
    try {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      const leads = readLeads(filePath);
      const duplicate = leads.some(
        (l) => l.email.toLowerCase() === lead.email.toLowerCase()
      );
      if (!duplicate) {
        leads.push(lead);
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
      }
      return { stored: true, duplicate };
    } catch {
      // Try the next candidate path (e.g. read-only FS on serverless).
      continue;
    }
  }
  return { stored: false, duplicate: false };
}

export async function POST(req: NextRequest) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = (body.email ?? "").trim();
  const source = (body.source ?? "homepage-lead-magnet").trim();

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const lead: Lead = {
    email,
    source,
    timestamp: new Date().toISOString(),
  };

  const { stored, duplicate } = persist(lead);

  // Always log so the lead is recoverable from server logs even if the
  // filesystem is read-only.
  console.log("[email-capture]", JSON.stringify(lead), { stored, duplicate });

<<<<<<< HEAD
  return NextResponse.json({
    success: true,
    duplicate,
    message: duplicate
      ? "You're already on the list — your free guide is on its way!"
      : "Success! Check your inbox for your free guide.",
=======
  // Automatically deliver the free guide by email (Resend). New sign-ups
  // always get it; duplicates are re-sent the download link too. Delivery
  // never blocks a successful capture — if it fails or isn't configured yet,
  // the lead is still stored.
  const emailResult = await sendLeadMagnetEmail(email);
  if (!emailResult.sent && !emailResult.skipped) {
    console.error("[email-capture] delivery failed:", emailResult.error);
  }

  // Optional diagnostics: append ?debug=wanderlust to the request URL to see
  // exactly why an email did or didn't send. Safe to leave in — it never
  // exposes secrets, only the delivery status and any Resend error text.
  const wantsDebug =
    new URL(req.url).searchParams.get("debug") === "wanderlust";
  const debug = wantsDebug
    ? {
        emailStatus: emailResult.sent
          ? emailResult.usedFallback
            ? "sent_via_sandbox_fallback"
            : "sent"
          : emailResult.skipped
            ? "skipped_not_configured"
            : "resend_error",
        emailError: emailResult.error ?? null,
        usedFallback: Boolean(emailResult.usedFallback),
        hasApiKey: Boolean(process.env.RESEND_API_KEY),
        hasFrom: Boolean(process.env.EMAIL_FROM),
        // Show only the domain part of EMAIL_FROM so you can confirm it matches
        // a verified Resend domain, without leaking the full address.
        fromDomain: process.env.EMAIL_FROM
          ? process.env.EMAIL_FROM.split("@").pop()?.replace(/>$/, "") ?? null
          : null,
      }
    : undefined;

  return NextResponse.json({
    success: true,
    duplicate,
    emailSent: emailResult.sent,
    message: duplicate
      ? "You're already on the list — we've re-sent your free guide!"
      : "Success! Check your inbox for your free guide.",
    ...(debug ? { debug } : {}),
>>>>>>> 43f394e294ed03e9765fbf5615ebc94c9d9eade6
  });
}
