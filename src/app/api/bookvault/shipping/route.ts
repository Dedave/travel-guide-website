// src/app/api/bookvault/shipping/route.ts
import { NextRequest, NextResponse } from "next/server";

const BV_BASE = "https://api.bookvault.app/v3";
const BV_KEY  = process.env.BOOKVAULT_API_KEY;

/* ─── GET /api/bookvault/shipping?country=GB&productId=xxx ─────────────── */
export async function GET(req: NextRequest) {
  if (!BV_KEY) {
    return NextResponse.json({ error: "BookVault API key not configured" }, { status: 500 });
  }

  const country   = req.nextUrl.searchParams.get("country");
  const productId = req.nextUrl.searchParams.get("productId");

  if (!country) {
    return NextResponse.json({ error: "Missing country query param" }, { status: 400 });
  }

  try {
    const params = new URLSearchParams({ country });
    if (productId) params.set("productId", productId);

    const res = await fetch(`${BV_BASE}/shipping?${params.toString()}`, {
      headers: {
        Authorization: `basic ${BV_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 }, // cache 5 min
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: `BookVault shipping error: ${res.status}`, detail: data },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch shipping rates", detail: String(err) }, { status: 500 });
  }
}