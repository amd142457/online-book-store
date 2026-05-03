import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[#0c0f1a]">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,163,44,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,163,44,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow circle */}
      <div className="fixed w-[500px] h-[500px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(245,163,44,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8 bg-[rgba(245,163,44,0.1)] border border-[rgba(245,163,44,0.22)] text-[#f5a32c]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5a32c] animate-pulse" />
          Page Not Found
        </div>

        {/* 404 */}
        <h1
          className="font-bold leading-none mb-4 text-[clamp(80px,20vw,160px)] tracking-[-8px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="text-[#f5a32c]">4</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px rgba(245,163,44,0.2)" }}
          >
            0
          </span>
          <span className="text-[#f5a32c]">4</span>
        </h1>

        {/* Title */}
        <h2
          className="font-bold mb-4 text-[28px] text-white tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Oops! This page is <em className="italic text-[#f5a32c]">missing</em>
        </h2>

        {/* Description */}
        <p className="mb-10 max-w-sm text-sm leading-relaxed text-white/40">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to the library.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#f5a32c] text-[#0c0f1a] hover:bg-[#fbbf50] transition-all"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Home
          </Link>

          <Link
            href="/AllPhoto"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/60 border border-white/[0.13] hover:text-white hover:border-white/30 transition-all"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
            Browse Books
          </Link>
        </div>

        {/* Book spines illustration */}
        <div className="mt-14 flex items-end gap-2 opacity-30">
          <div className="w-[18px] h-[60px] rounded-[3px] bg-[#4f46e5]" />
          <div className="w-[18px] h-[80px] rounded-[3px] bg-[#d97706]" />
          <div className="w-[18px] h-[50px] rounded-[3px] bg-[#0d9488]" />
          <div className="w-[18px] h-[70px] rounded-[3px] bg-[#b91c1c]" />
          <div className="w-[18px] h-[55px] rounded-[3px] bg-[#1d4ed8]" />
        </div>
      </div>
    </div>
  );
}
