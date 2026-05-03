"use client";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message || "Invalid email or password!");
      return;
    }

    if (data) {
      router.push("/"); // ← login হলে home এ যাবে
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({ provider: "google" });
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
          Sign In
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
            src="https://images.unsplash.com/photo-1706426629246-2a3c3e3e3ff2?q=80&w=880&auto=format&fit=crop"
            alt="logo"
            width={20}
            height={20}
            className="rounded-full w-5 h-5 object-cover"
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

        {/* Email */}
        <div className="mb-6">
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
        <div className="mb-8">
          <label className="text-xs text-gray-400">Password</label>
          <div className="flex items-center justify-between border-b border-white/20">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
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
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Register link */}
        <p className="text-center text-xs text-gray-500 mt-5">
          Don&apos;t have an account?{" "}
          <a href="/register" style={{ color: "#f5a32c" }}>
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
