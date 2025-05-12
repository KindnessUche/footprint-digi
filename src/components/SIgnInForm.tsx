"use client";
import Link from "next/link";
import { useState, useEffect, useActionState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { signin } from "@/app/actions/auth";
export default function SignInForm() {
  const [state, action, pending] = useActionState(signin, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      console.log("User logged in successfully:", state.user);
      router.push("/scan");
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Welcome</h2>
        <p className="text-gray-500">Please enter your details to sign in.</p>

        <form action={action} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="relative">
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

          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`w-full ${
              pending
                ? "bg-red-400 hover:bg-red-400"
                : "bg-red-500 hover:bg-red-600"
            }  text-white py-2 rounded cursor-pointer`}
          >
            Sign in
          </button>
          {state && (
            <p
              className={`text-sm ${
                state.success ? "text-green-500" : "text-red-500"
              } `}
            >
              {state.message}
            </p>
          )}

          <button className="w-full border py-2 rounded flex justify-center items-center space-x-2">
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
        </form>

        <div className="text-center text-sm">
          Don't have an account?
          <Link
            href="/auth/sign-up"
            className="text-red-500 hover:underline font-medium"
          >
            Sign up free!
          </Link>
        </div>
      </div>
    </div>
  );
}
