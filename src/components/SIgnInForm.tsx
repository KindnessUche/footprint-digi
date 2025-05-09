"use client";
import { useUser } from "./UserContext";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const resetForm = () => {
    setFormData({
      ...formData,
      password: "",
    });
  };

  // mockup sign in
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const stored = localStorage.getItem("mockUser");
    if (!stored) return setError("No user found. Sign up first!");

    const savedUser = JSON.parse(stored);

    // Simple check
    if (
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      setUser(savedUser);
      localStorage.setItem("user", JSON.stringify(savedUser));
      router.push("/scan");
    } else {
      setError("Invalid credentials");
    }
  };

  // real sign in
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:3100/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign-in failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      setSuccess("Signup successful! 🎉 You can now log in.");
    } catch (err: any) {
      console.error("Signup error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Welcome</h2>
        <p className="text-gray-500">Please enter your details to sign in.</p>

        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
            disabled={loading}
            className={`w-full ${
              loading ? "bg-red-400" : "bg-red-500"
            } hover:bg-red-600 text-white py-2 rounded`}
          >
            Sign in
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

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
