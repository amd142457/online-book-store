"use client";

import { useEffect, useRef } from "react";
import styles from "./BookBorrowingBanner.module.css";
import Link from "next/link";

export default function BookBorrowingBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="main">
      <div className={styles.wrapper} ref={bannerRef}>
        <div className={styles.banner}>
          {/* Background grid */}
          <div className={styles.grid} aria-hidden="true" />
          {/* Decorative circles */}
          <div className={styles.circle1} aria-hidden="true" />
          <div className={styles.circle2} aria-hidden="true" />

          <div className={styles.layout}>
            {/* ── LEFT COPY ── */}
            <div className={styles.copy}>
              <span className={styles.badge}>
                <span className={styles.dot} />
                Digital Library
              </span>

              <h1 className={styles.heading}>
                Online Book
                <br />
                <em className={styles.accent}>Borrowing</em>
                <br />
                Platform
              </h1>

              <p className={styles.desc}>
                Thousands of books, one click away. Borrow, read, and return —
                entirely online, entirely free.
              </p>

              <div className={styles.buttons}>
                <Link href="/browse" className={styles.btnPrimary}>
                  Browse Books
                </Link>
                <button className={styles.btnSecondary}>Sign Up Free</button>
              </div>

              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>
                    50<span className={styles.statAccent}>K+</span>
                  </span>
                  <span className={styles.statLabel}>Books</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>
                    12<span className={styles.statAccent}>K+</span>
                  </span>
                  <span className={styles.statLabel}>Readers</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>
                    100<span className={styles.statAccent}>%</span>
                  </span>
                  <span className={styles.statLabel}>Free</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT ILLUSTRATION ── */}
            <div className={styles.shelfWrap} aria-hidden="true">
              <svg
                viewBox="0 0 230 285"
                xmlns="http://www.w3.org/2000/svg"
                width="230"
                height="285"
                className={styles.shelfSvg}
              >
                <ellipse
                  cx="115"
                  cy="274"
                  rx="88"
                  ry="9"
                  fill="rgba(0,0,0,0.45)"
                />

                {/* Book 1 – purple */}
                <g transform="rotate(-11,75,145)">
                  <rect
                    x="52"
                    y="72"
                    width="50"
                    height="192"
                    rx="3"
                    fill="#4f46e5"
                  />
                  <rect
                    x="52"
                    y="72"
                    width="9"
                    height="192"
                    rx="2"
                    fill="#3730a3"
                  />
                  <rect
                    x="63"
                    y="108"
                    width="35"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.18)"
                  />
                  <rect
                    x="63"
                    y="116"
                    width="24"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <rect
                    x="63"
                    y="124"
                    width="30"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.1)"
                  />
                </g>

                {/* Book 2 – red */}
                <g transform="rotate(9,170,138)">
                  <rect
                    x="152"
                    y="85"
                    width="44"
                    height="172"
                    rx="3"
                    fill="#b91c1c"
                  />
                  <rect
                    x="152"
                    y="85"
                    width="8"
                    height="172"
                    rx="2"
                    fill="#991b1b"
                  />
                  <rect
                    x="162"
                    y="118"
                    width="32"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.18)"
                  />
                  <rect
                    x="162"
                    y="126"
                    width="20"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.1)"
                  />
                </g>

                {/* Book 3 – amber (hero) */}
                <g transform="rotate(-2,115,118)">
                  <rect
                    x="95"
                    y="42"
                    width="60"
                    height="228"
                    rx="4"
                    fill="#d97706"
                  />
                  <rect
                    x="95"
                    y="42"
                    width="11"
                    height="228"
                    rx="3"
                    fill="#b45309"
                  />
                  <rect
                    x="109"
                    y="82"
                    width="42"
                    height="3"
                    rx="1"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <rect
                    x="109"
                    y="92"
                    width="32"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.28)"
                  />
                  <rect
                    x="109"
                    y="100"
                    width="38"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="109"
                    y="108"
                    width="26"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.14)"
                  />
                  <circle
                    cx="125"
                    cy="198"
                    r="13"
                    fill="rgba(255,255,255,0.1)"
                  />
                  <circle
                    cx="125"
                    cy="198"
                    r="8"
                    fill="rgba(255,255,255,0.07)"
                  />
                  <circle
                    cx="125"
                    cy="198"
                    r="3"
                    fill="rgba(255,255,255,0.18)"
                  />
                </g>

                {/* Book 4 – teal */}
                <g transform="rotate(6,88,152)">
                  <rect
                    x="66"
                    y="98"
                    width="46"
                    height="180"
                    rx="3"
                    fill="#0d9488"
                  />
                  <rect
                    x="66"
                    y="98"
                    width="8"
                    height="180"
                    rx="2"
                    fill="#0f766e"
                  />
                  <rect
                    x="76"
                    y="132"
                    width="32"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="76"
                    y="142"
                    width="22"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.12)"
                  />
                </g>

                {/* Book 5 – blue */}
                <g transform="rotate(-7,172,146)">
                  <rect
                    x="154"
                    y="92"
                    width="42"
                    height="178"
                    rx="3"
                    fill="#1d4ed8"
                  />
                  <rect
                    x="154"
                    y="92"
                    width="7"
                    height="178"
                    rx="2"
                    fill="#1e3a8a"
                  />
                  <rect
                    x="163"
                    y="126"
                    width="30"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <rect
                    x="163"
                    y="136"
                    width="20"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.12)"
                  />
                </g>

                {/* Shelf plank */}
                <rect
                  x="22"
                  y="265"
                  width="188"
                  height="8"
                  rx="4"
                  fill="rgba(255,255,255,0.07)"
                />

                {/* Sparkles */}
                <circle cx="212" cy="55" r="2.5" fill="#f5a32c" opacity="0.7">
                  <animate
                    attributeName="cy"
                    values="55;44;55"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;1;0.7"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="18" cy="90" r="2" fill="#f5a32c" opacity="0.45">
                  <animate
                    attributeName="cy"
                    values="90;78;90"
                    dur="4.1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="222" cy="190" r="1.8" fill="#f5a32c" opacity="0.5">
                  <animate
                    attributeName="cy"
                    values="190;178;190"
                    dur="3.7s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="10" cy="210" r="1.4" fill="#fff" opacity="0.25">
                  <animate
                    attributeName="cy"
                    values="210;200;210"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
