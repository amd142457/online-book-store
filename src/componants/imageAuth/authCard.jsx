import React from "react";

import Image from "next/image";

const AUTHORS = [
  {
    image:
      "https://images.unsplash.com/photo-1581344895000-b5deedbd1660?w=500&q=80",
    author: "William Shakespeare",
  },
  {
    image:
      "https://images.unsplash.com/photo-1719257727556-e68b4aa5582d?w=500&q=80",
    author: "Jane Austen",
  },
  {
    image:
      "https://images.unsplash.com/photo-1719257727556-e68b4aa5582d?w=500&q=80",
    author: "Charles Dickens",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567273948088-86fb7c53e6ed?w=500&q=80",
    author: "Leo Tolstoy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?w=500&q=80",
    author: "Fyodor Dostoevsky",
  },
  {
    image:
      "https://images.unsplash.com/photo-1643296783622-87d9160020df?w=500&q=80",
    author: "Ernest Hemingway",
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
          animation: marquee-scroll 20s linear infinite;
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
                    alt={author.author}
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
