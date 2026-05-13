// src/app/api/bookvault/orders/route.ts
import { NextRequest, NextResponse } from "next/server";

const BV_BASE = "https://api.bookvault.app/v3";
const BV_KEY  = process.env.BOOKVAULT_API_KEY;

/* ─── POST /api/bookvault/orders ────────────────────────────────────────────
   Body expected from the client:
   {
     externalReference: string,          // your own order ID (e.g. "WL-1234")
     customerEmail:     string,
     shippingAddress: {
       firstName:    string,
       lastName:     string,
       addressLine1: string,
       addressLine2?: string,
       city:         string,
       county?:      string,             // state / county
       postcode:     string,
       countryCode:  string,             // ISO 3166-1 alpha-2 e.g. "GB", "US"
       phone?:       string,
     },
     items: [
       { productId: string, quantity: number }
     ]
   }
──────────────────────────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  if (!BV_KEY) {
    return NextResponse.json({ error: "BookVault API key not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Basic validation
  const { externalReference, customerEmail, shippingAddress, items } = body as Record<string, unknown>;
  if (!shippingAddress || !items || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Missing required fields: shippingAddress, items" }, { status: 400 });
  }

  const payload = {
    externalReference: externalReference ?? `WL-${Date.now()}`,
    customerEmail,
    shippingAddress,
    items,
  };

  try {
    const res = await fetch(`${BV_BASE}/orders`, {
      method: "POST",
      headers: {
        Authorization: `basic ${BV_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: `BookVault order error: ${res.status}`, detail: data },
        { status: res.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create order", detail: String(err) }, { status: 500 });
  }
}

/* ─── GET /api/bookvault/orders?id=BV_ORDER_ID ──────────────────────────── */
export async function GET(req: NextRequest) {
  if (!BV_KEY) {
    return NextResponse.json({ error: "BookVault API key not configured" }, { status: 500 });
  }

  const orderId = req.nextUrl.searchParams.get("id");
  if (!orderId) {
    return NextResponse.json({ error: "Missing order id query param" }, { status: 400 });
  }

  try {
    const res = await fetch(`${BV_BASE}/orders/${orderId}`, {
      headers: {
        Authorization: `basic ${BV_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 }, // always fresh for order status
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: `BookVault error: ${res.status}`, detail: data },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch order", detail: String(err) }, { status: 500 });
  }
}