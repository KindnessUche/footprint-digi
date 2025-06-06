"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  console.log(token.value);
  const backendRes = await fetch(
    "https://digital-footprint-backend.onrender.com/scan/start",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`, // Attach JWT from cookie
      },
      body: JSON.stringify({
        scan_type: body.scan_type,
        scan_value: body.scan_value,
      }),
    }
  );

  if (!backendRes.ok) {
    const errorText = await backendRes.text();
    console.error("Backend error:", backendRes.status, errorText);
    return NextResponse.json(
      { error: "Scan failed", detail: errorText },
      { status: backendRes.status }
    );
  }

  // Safe to parse now
  const result = await backendRes.json();
  return NextResponse.json(result);
}
