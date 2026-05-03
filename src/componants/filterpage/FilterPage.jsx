"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/componants/TopCard.jsx/Card";

const CATEGORIES = [
  { label: "All Books", icon: "📚", slug: "all" },
  { label: "Tech", icon: "💻", slug: "Tech" },
  { label: "Science", icon: "🔬", slug: "Science" },
  { label: "Story", icon: "📖", slug: "Story" },
  { label: "History", icon: "📜", slug: "History" },
  { label: "Self Help", icon: "🧠", slug: "Self Help" },
];

function FilterPage({ photos }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <div
      className="flex min-h-screen"
      style={{
        background: "#0c0f1a",
        fontFamily: "-apple-system, Arial, sans-serif",
      }}
    >
      {/* ════════ SIDEBAR ════════ */}
      <aside
        className="shrink-0 sticky top-0 overflow-y-auto"
        style={{
          width: "220px",
          background: "#0b0e1a",
          borderRight: "1px solid rgba(245,163,44,0.08)",
          padding: "28px 14px",
          height: "100vh",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-3 px-2"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Categories
        </p>

        {CATEGORIES.map((cat) => {
          const isActive = active === cat.slug;
          return (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className="w-full flex items-center justify-between rounded-xl mb-1"
              style={{
                padding: "10px 12px",
                background: isActive ? "rgba(245,163,44,0.1)" : "transparent",
                border: isActive
                  ? "1px solid rgba(245,163,44,0.22)"
                  : "1px solid transparent",
                cursor: "pointer",
              }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="flex items-center justify-center rounded-lg shrink-0 text-sm"
                  style={{
                    width: "30px",
                    height: "30px",
                    background: isActive
                      ? "rgba(245,163,44,0.15)"
                      : "rgba(255,255,255,0.05)",
                  }}
                >
                  {cat.icon}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{
                    color: isActive ? "#f5a32c" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {cat.label}
                </span>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: isActive
                    ? "rgba(245,163,44,0.15)"
                    : "rgba(255,255,255,0.06)",
                  color: isActive ? "#f5a32c" : "rgba(255,255,255,0.3)",
                }}
              >
                {cat.slug === "all"
                  ? photos.length
                  : photos.filter((p) => p.category === cat.slug).length}
              </span>
            </button>
          );
        })}

        {/* Divider */}
        <div
          className="my-4"
          style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}
        />

        {/* Price Range */}
        <p
          className="text-xs uppercase tracking-widest mb-3 px-2"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Price Range
        </p>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="50"
            defaultValue="50"
            className="w-full accent-yellow-400"
          />
          <div
            className="flex justify-between text-xs mt-1.5"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <span>$0</span>
            <span style={{ color: "#f5a32c" }}>$50</span>
          </div>
        </div>
      </aside>

      {/* ════════ MAIN ════════ */}
      <main className="flex-1 p-7">
        {/* Header */}
        <div className="mb-6">
          <h1
            className="font-bold mb-1"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "24px",
              color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            {active === "all" ? (
              <>
                All{" "}
                <em style={{ fontStyle: "italic", color: "#f5a32c" }}>Books</em>
              </>
            ) : (
              <>
                <em style={{ fontStyle: "italic", color: "#f5a32c" }}>
                  {active}
                </em>{" "}
                Books
              </>
            )}
          </h1>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            {filtered.length} books found
          </p>
        </div>

        {/* Book Grid — তোমার existing Card component */}
        {filtered.length === 0 ? (
          <div
            className="text-center py-16 text-sm"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            No books found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((photo) => (
              <Card key={photo.id} photo={photo}></Card>
            ))}
          </div>
        )}

        {/* Show More Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/AllPhoto"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm"
            style={{ background: "#f5a32c", color: "#0c0f1a" }}
          >
            Show All Books
            <span>⌄</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
export default FilterPage;
