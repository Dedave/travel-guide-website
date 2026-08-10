// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";
import { sendContactEmail } from "@/lib/email";

/* ─── POST /api/contact ──────────────────────────────────────────────────────
   Body: { name: string, email: string, subject?: string, message: string }
   Stores the submission to a local JSON file (best-effort) and forwards it to
   the site owner by email via Resend. Storage/logging always succeeds so a
   message is never lost even if email delivery isn't configured.
──────────────────────────────────────────────────────────────────────────── */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface StoredMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

function candidatePaths(): string[] {
  return [
    path.join(process.cwd(), "data", "contact-messages.json"),
    path.join(os.tmpdir(), "wanderlust-contact-messages.json"),
  ];
}

function persist(entry: StoredMessage): boolean {
  for (const filePath of candidatePaths()) {
    try {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      let list: StoredMessage[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const parsed = JSON.parse(fs.readFileSync(filePath, "utf-8"));
          if (Array.isArray(parsed)) list = parsed as StoredMessage[];
        } catch {
          /* start fresh on corrupt file */
        }
      }
      list.push(entry);
      fs.writeFileSync(filePath, JSON.stringify(list, null, 2), "utf-8");
      return true;
    } catch {
      continue;
    }
  }
  return false;
}

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name) {
    return NextResponse.json(
      { success: false, error: "Please enter your name." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!message) {
    return NextResponse.json(
      { success: false, error: "Please enter a message." },
      { status: 400 }
    );
  }

  const entry: StoredMessage = {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  };

  const stored = persist(entry);
  console.log("[contact]", JSON.stringify(entry), { stored });

  const emailResult = await sendContactEmail({ name, email, subject, message });
  if (!emailResult.sent && !emailResult.skipped) {
    console.error("[contact] delivery failed:", emailResult.error);
  }

  return NextResponse.json({
    success: true,
    emailSent: emailResult.sent,
    message: "Thanks for reaching out! We'll get back to you as soon as we can.",
  });
}
