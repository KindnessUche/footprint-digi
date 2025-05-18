"use client";
// import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { logout } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
export default async function LogoutButton({
  isLoggedIn,
}: {
  isLoggedIn: boolean;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="px-3 bg-white dark:bg-black border-1 border-slate-200 dark:border-slate-800 rounded-md cursor-pointer"
        >
          <div className="bg-black px-2 py-1 dark:bg-white rounded-md text-white dark:text-black w-fit whitespace-nowrap">
            Log out
          </div>
        </button>
      ) : (
        <Link
          href="/auth/sign-in"
          className="px-3 bg-white dark:bg-black border-1 border-slate-200 dark:border-slate-800 rounded-md"
        >
          <div className="bg-black px-2 py-1 dark:bg-white rounded-md text-white dark:text-black w-fit whitespace-nowrap">
            Sign in
          </div>
        </Link>
      )}
    </>
  );
}
