import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest, { params }: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const scanId = await params.scanId;

  const res = await fetch(
    `https://digital-footprint-backend.onrender.com/report/generate/${scanId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    return NextResponse.json(
      { error: "Report generation failed", detail: errorText },
      { status: res.status }
    );
  }

  const result = await res.json();
  return NextResponse.json(result);
}
