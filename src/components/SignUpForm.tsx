"use client";

import { signup } from "@/app/actions/auth";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Toast from "@/components/Toast";

export default function SignUpForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error" | "info">(
    "info"
  );

  useEffect(() => {
    if (state?.message) {
      setToastMessage(state.message);
      setSeverity(state.success ? "success" : "error");
      setOpen(true);

      if (state.success) {
        setTimeout(() => {
          router.push("/scan");
        }, 1500);
      }
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="text-gray-500">Sign up to get started.</p>

        <form className="space-y-1" action={action}>
          <>
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              required
              className="w-full border border-gray-300 px-4 py-2 mt-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {state?.errors?.firstName && (
              <p className="text-red-500 text-sm">{state.errors.firstName}</p>
            )}
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              required
              className="w-full border border-gray-300 px-4 py-2 mt-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            {state?.errors?.lastName && (
              <p className="text-red-500 text-sm">{state.errors.lastName}</p>
            )}
          </>

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 px-4 py-2 mt-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          {state?.errors?.email && (
            <p className="text-red-500 text-sm">{state.errors.email}</p>
          )}

          <div className="relative mt-4 ">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full border border-gray-300 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {state?.errors?.password && (
            <div>
              <p>Password must:</p>
              <ul className="text-red-500 text-sm">
                {state.errors.password.map((error: string) => (
                  <li key={error}>- {error}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className={`w-full ${
              pending
                ? "bg-red-400 hover:bg-red-400"
                : "bg-red-500 hover:bg-red-600"
            } text-white py-2 rounded cursor-pointer mt-4`}
          >
            Sign up
          </button>
        </form>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="text-red-500 hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
      <Toast
        open={open}
        setOpen={setOpen}
        message={toastMessage}
        severity={severity}
      />
    </div>
  );
}
