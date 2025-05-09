// components/AuthForm.tsx
"use client";

import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setShowPassword(false);
  }, [isSignUp]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {isSignUp ? "Create Account" : "Welcome"}
        </h2>
        <p className="text-gray-500">
          {isSignUp
            ? "Sign up to get started."
            : "Please enter your details to sign in."}
        </p>

        <form className="space-y-4">
          {isSignUp && (
            <>
              <input
                type="text"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          {!isSignUp && (
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            {isSignUp ? "Sign up" : "Sign in"}
          </button>

          <button className="w-full border py-2 rounded flex justify-center items-center space-x-2">
            <FcGoogle className="text-xl" />
            <span>
              {isSignUp ? "Sign up with Google" : "Sign in with Google"}
            </span>
          </button>
        </form>

        <div className="text-center text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-red-500 hover:underline font-medium"
          >
            {isSignUp ? "Sign in" : "Sign up free!"}
          </button>
        </div>
      </div>
    </div>
  );
}
