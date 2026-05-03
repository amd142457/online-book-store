import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ photo }) => {
  console.log(photo);

  return (
    <div
      className="group rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        background: "#111520",
        border: "1px solid rgba(245,163,44,0.1)",
      }}
    >
      {/* ── Image ── */}
      <div className="overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1644229945516-bdece78b5939"
          width={500}
          height={400}
          alt={photo.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* amber bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(12,15,26,0.7) 100%)",
          }}
        />
        {/* category badge on image */}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: "rgba(245,163,44,0.15)",
            color: "#f5a32c",
            border: "1px solid rgba(245,163,44,0.25)",
          }}
        >
          {photo.category}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="p-5">
        {/* Title & Author */}
        <h2
          className="text-base font-bold text-white text-center"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.3px" }}
        >
          {photo.title}
        </h2>
        <p
          className="text-xs text-center mt-1 mb-3"
          style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.3px" }}
        >
          by {photo.author}
        </p>

        {/* Description */}
        <p
          className="text-sm text-center mb-4 line-clamp-2"
          style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}
        >
          {photo.description}
        </p>

        {/* divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "14px",
          }}
        />

        {/* Stock row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <span
              className="flex items-center justify-center w-5 h-5 rounded-md"
              style={{
                background: "rgba(245,163,44,0.1)",
                border: "1px solid rgba(245,163,44,0.2)",
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f5a32c"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
              </svg>
            </span>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
              Stock
            </span>
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background:
                photo.available_quantity > 5
                  ? "rgba(34,197,94,0.1)"
                  : "rgba(239,68,68,0.1)",
              color: photo.available_quantity > 5 ? "#22c55e" : "#ef4444",
              border: `1px solid ${photo.available_quantity > 5 ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
            }}
          >
            {photo.available_quantity} left
          </span>
        </div>

        {/* Details Button */}
        <div className="flex gap-2">
          {/* Add to Cart */}
          <button
            className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: "rgba(245,163,44,0.1)",
              color: "#f5a32c",
              border: "1px solid rgba(245,163,44,0.3)",
            }}
          >
            Add to Cart
          </button>

          {/* View Details */}
          <Link
            href={`/AllPhoto/${photo.id}`}
            className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{
              background: "#f5a32c",
              color: "#0c0f1a",
              letterSpacing: "0.3px",
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
//
