"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const RegisterForm = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Something went wrong!");
      return;
    }

    if (data) {
      router.push("/");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await authClient.signIn.social({
        provider: "google",
      });
      console.log({ data, error });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0c0f1a]">
      <form
        onSubmit={onSubmit}
        className="w-[420px] p-10 rounded-2xl"
        style={{
          background: "#111520",
          border: "1px solid rgba(245,163,44,0.25)",
        }}
      >
        {/* Title */}
        <h2
          className="text-center text-3xl font-bold mb-6"
          style={{ color: "#f5a32c", fontFamily: "Georgia, serif" }}
        >
          Register
        </h2>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 py-2.5 mb-6 rounded-xl font-medium text-white"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1678483789107-6402b5848d95?w=500&q=80"
            alt="Google"
            width={30}
            height={30}
            className="rounded-full"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        {/* Error message */}
        {error && (
          <div
            className="text-xs text-center mb-4 py-2 px-3 rounded-lg"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              color: "#ef4444",
            }}
          >
            {error}
          </div>
        )}

        {/* Name */}
        <div className="mb-5">
          <label className="text-xs text-gray-400">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full bg-transparent outline-none py-2 text-white"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="text-xs text-gray-400">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="w-full bg-transparent outline-none py-2 text-white"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="text-xs text-gray-400">Password</label>
          <div className="flex items-center justify-between border-b border-white/20">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              required
              className="w-full bg-transparent outline-none py-2 text-white"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="text-xs ml-2"
              style={{ color: "#f5a32c" }}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-8">
          <label className="text-xs text-gray-400">Confirm Password</label>
          <div className="flex items-center justify-between border-b border-white/20">
            <input
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              required
              className="w-full bg-transparent outline-none py-2 text-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="text-xs ml-2"
              style={{ color: "#f5a32c" }}
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl font-semibold transition-all"
          style={{
            background: loading ? "rgba(245,163,44,0.5)" : "#f5a32c",
            color: "#0c0f1a",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login link */}
        <p className="text-center text-xs text-gray-500 mt-5">
          Already have an account?{" "}
          <a href="/login" style={{ color: "#f5a32c" }}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
