import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ScanParams } from "@/lib/definitions";
export async function GET(req: NextRequest, { params }: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session");

  if (!token) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const scanId = params.scanId;

  const backendRes = await fetch(
    `https://digital-footprint-backend.onrender.com/report/generate/${scanId}`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  if (!backendRes.ok) {
    const errorText = await backendRes.text();
    return NextResponse.json(
      { error: "Report generation failed", detail: errorText },
      { status: backendRes.status }
    );
  }

  const result = await backendRes.json();
  return NextResponse.json(result);
}
