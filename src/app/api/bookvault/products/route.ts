// src/app/api/bookvault/products/route.ts
import { NextResponse } from "next/server";

const BV_BASE = "https://api.bookvault.app/v3";
const BV_KEY  = process.env.BOOKVAULT_API_KEY; // set in .env.local

export async function GET() {
  if (!BV_KEY) {
    return NextResponse.json({ error: "BookVault API key not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(`${BV_BASE}/products`, {
      headers: {
        Authorization: `basic ${BV_KEY}`,
        "Content-Type": "application/json",
      },
      // Cache for 60 seconds — product list rarely changes
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `BookVault error: ${res.status}`, detail: text },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch products", detail: String(err) }, { status: 500 });
  }
}