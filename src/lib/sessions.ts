"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function createSession(jwt: string) {
  const decoded = jwtDecode(jwt);
  const expiryInSeconds =
    decoded.exp && decoded.iat && decoded.exp - decoded.iat;
  const cookieStore = await cookies();

  cookieStore.set({
    name: "session",
    value: jwt,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",

    maxAge: expiryInSeconds,
  });
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
