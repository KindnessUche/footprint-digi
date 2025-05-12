"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token.value);
    console.log(decoded);
    return decoded; // contains userId, email, etc
  } catch (err) {
    return null;
  }
}
