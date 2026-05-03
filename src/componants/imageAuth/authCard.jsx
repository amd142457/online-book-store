import React from "react";

import Image from "next/image";

const AUTHORS = [
  { name: "বিভূতিভূষণ", image: "https://picsum.photos/id/64/200/200" },
  { name: "শরৎচন্দ্র", image: "https://picsum.photos/id/91/200/200" },
  { name: "রবীন্দ্রনাথ", image: "https://picsum.photos/id/177/200/200" },
  { name: "জহির রায়হান", image: "https://picsum.photos/id/40/200/200" },
  { name: "জসীমউদ্দীন", image: "https://picsum.photos/id/338/200/200" },
  { name: "James Clear", image: "https://picsum.photos/id/1005/200/200" },
  { name: "Robert Martin", image: "https://picsum.photos/id/1006/200/200" },
  { name: "Yuval Harari", image: "https://picsum.photos/id/1012/200/200" },
  { name: "হুমায়ূন আহমেদ", image: "https://picsum.photos/id/1025/200/200" },
  {
    name: "সুনীল গঙ্গোপাধ্যায়",
    image: "https://picsum.photos/id/1074/200/200",
  },
];

function AuthCard() {
  // duplicate for seamless loop
  const doubled = [...AUTHORS, ...AUTHORS];

  return (
    <>
      <style>{`
        .marquee-track {
          display: flex;
          gap: 32px;
          animation: marquee-scroll 28s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .author-circle {
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          width: 80px;
          height: 80px;
          border: 2px solid rgba(245,163,44,0.25);
          transition: border-color 0.3s, transform 0.3s;
          flex-shrink: 0;
        }
        .author-circle:hover {
          border-color: #f5a32c;
          transform: scale(1.1);
        }
      `}</style>

      <div
        style={{
          background: "#0c0f1a",
          borderBottom: "1px solid rgba(245,163,44,0.08)",
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        {/* heading */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontFamily: "-apple-system, Arial, sans-serif",
          }}
        >
          Featured Authors
        </p>

        {/* marquee */}
        <div style={{ overflow: "hidden", padding: "4px 0" }}>
          <div className="marquee-track">
            {doubled.map((author, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                {/* circle image */}
                <div className="author-circle">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  {/* amber glow overlay on hover */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(245,163,44,0.15) 100%)",
                    }}
                  />
                </div>

                {/* name */}
                <span
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "-apple-system, Arial, sans-serif",
                    whiteSpace: "nowrap",
                    maxWidth: "80px",
                    textAlign: "center",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {author.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default AuthCard;
