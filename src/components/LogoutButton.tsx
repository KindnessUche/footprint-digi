"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { logout } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import Toast from "@/components/Toast";

export default function LogoutButton({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter();
  const [open, setOpen] = useState(false); // Controls Snackbar
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error" | "info">(
    "info"
  );

  const handleLogout = async () => {
    try {
      await logout();
      setMessage("Logged out successfully!");
      setSeverity("success");
      setOpen(true);
      // Delay redirect slightly to let the toast show
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      setMessage("Logout failed. Please try again.");
      setSeverity("error");
      setOpen(true);
    }
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
      {/* Toast Component */}
      <Toast
        open={open}
        setOpen={setOpen}
        message={message}
        severity={severity}
      />
    </>
  );
}
