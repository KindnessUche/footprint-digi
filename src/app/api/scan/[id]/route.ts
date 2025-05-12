import { cookies } from "next/headers";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session");
  if (!token)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const scanId = params.id;

  const res = await fetch(
    `https://digital-footprint-backend.onrender.com/scan/results/${scanId}`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: res.status });
}
