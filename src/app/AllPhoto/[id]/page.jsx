import Image from "next/image";
import photos from "../../../data/data.json";

const page = async ({ params }) => {
  const resolvedParams = await params;

  const item = photos.find((i) => String(i.id) === String(resolvedParams.id));

  return (
    <div style={{ background: "#0c0f1a", minHeight: "100vh" }}>
      <div className="w-11/12 md:w-9/12 mx-auto py-10">
        <div
          className="text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6"
          style={{
            background: "#111520",
            border: "1px solid rgba(245,163,44,0.12)",
          }}
        >
          {/* ── LEFT: Image ── */}
          <div
            className="rounded-2xl p-6 flex flex-col items-center md:w-1/3"
            style={{
              background: "#0e1219",
              border: "1px solid rgba(245,163,44,0.08)",
            }}
          >
            {/* Book cover */}
            <div className="w-40 h-52 overflow-hidden rounded-xl mb-5 relative">
              <Image
                src={item.img}
                width={500}
                height={400}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(245,163,44,0.1) 100%)",
                }}
              />
            </div>

            {/* Title */}
            <h2
              className="text-lg font-bold text-center text-white tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {item.title}
            </h2>

            {/* Author */}
            <p
              className="text-xs mt-1 text-center"
              style={{
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.5px",
              }}
            >
              {item.author}
            </p>

            {/* Badges */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <span
                className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide"
                style={{ background: "#22c55e", color: "#052e0f" }}
              >
                {item.category}
              </span>
              <span
                className="px-5 py-1.5 rounded-full text-xs font-bold tracking-wide"
                style={{ background: "#f5a32c", color: "#0c0f1a" }}
              >
                {item.discount}% OFF
              </span>
            </div>

            {/* Add to Cart */}
            <button
              className="mt-6 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-150"
              style={{ background: "#ffffff", color: "#0c0f1a" }}
            >
              Add to Cart
            </button>
          </div>

          {/* ── RIGHT: Details ── */}
          <div className="flex-1 space-y-4">
            {/* Stats */}
            <div className="flex gap-3">
              <div
                className="flex-1 p-4 rounded-xl text-center"
                style={{
                  background: "#0e1219",
                  border: "1px solid rgba(245,163,44,0.08)",
                }}
              >
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.pages}
                </h2>
                <p
                  className="text-xs mt-1 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Pages
                </p>
              </div>

              <div
                className="flex-1 p-4 rounded-xl text-center"
                style={{
                  background: "#0e1219",
                  border: "1px solid rgba(245,163,44,0.08)",
                }}
              >
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.sales}
                </h2>
                <p
                  className="text-xs mt-1 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Sales
                </p>
              </div>

              <div
                className="flex-1 p-4 rounded-xl text-center"
                style={{
                  background: "#0e1219",
                  border: "1px solid rgba(245,163,44,0.08)",
                }}
              >
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <span style={{ color: "#f5a32c" }}>$</span>
                  {item.price}
                </h2>
                <p
                  className="text-xs mt-1 uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Price
                </p>
              </div>
            </div>

            {/* Description */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "#0e1219",
                border: "1px solid rgba(245,163,44,0.08)",
              }}
            >
              <h3
                className="font-bold mb-3 flex items-center gap-2"
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "16px",
                    background: "#f5a32c",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                Description
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: "13.5px",
                  lineHeight: 1.8,
                }}
              >
                {item.description}
              </p>
            </div>

            {/* History */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "#0e1219",
                border: "1px solid rgba(245,163,44,0.08)",
              }}
            >
              <h3
                className="font-bold mb-4 flex items-center gap-2"
                style={{
                  fontFamily: "Georgia, serif",
                  color: "#fff",
                  fontSize: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "16px",
                    background: "#f5a32c",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}
                />
                History
              </h3>

              <ul className="space-y-3">
                {/* Added */}
                <li
                  className="flex items-center gap-3"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
                >
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.18)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  Added:{" "}
                  <span
                    style={{ color: "rgba(255,255,255,0.78)", fontWeight: 500 }}
                  >
                    Jan 10, 2024
                  </span>
                </li>

                {/* Last Sold */}
                <li
                  className="flex items-center gap-3"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
                >
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0"
                    style={{
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.18)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </span>
                  Last Sold:{" "}
                  <span
                    style={{ color: "rgba(255,255,255,0.78)", fontWeight: 500 }}
                  >
                    Feb 2, 2024
                  </span>
                </li>

                {/* Stock */}
                <li
                  className="flex items-center gap-3"
                  style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}
                >
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0"
                    style={{
                      background: "rgba(245,163,44,0.1)",
                      border: "1px solid rgba(245,163,44,0.18)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f5a32c"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                    </svg>
                  </span>
                  Stock Left:{" "}
                  <span
                    style={{ color: "rgba(255,255,255,0.78)", fontWeight: 500 }}
                  >
                    3 remaining
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
