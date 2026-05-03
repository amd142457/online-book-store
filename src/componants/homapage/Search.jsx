"use client";

import React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/AllPhoto?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 rounded-xl px-3 py-2 nb-search"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        minWidth: "220px",
      }}
    >
      {/* Search icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="shrink-0"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books..."
        className="flex-1 bg-transparent outline-none text-white text-xs placeholder:text-white/25"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0"
        style={{
          background: query.trim() ? "#f5a32c" : "rgba(245,163,44,0.15)",
          color: query.trim() ? "#0c0f1a" : "#f5a32c",
        }}
      >
        Search
      </button>
    </form>
  );
}
