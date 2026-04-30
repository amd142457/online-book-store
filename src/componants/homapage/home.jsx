"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Browse", href: "/AllPhoto" },
  { label: "Categories", href: "/categories" },
  { label: "My Shelf", href: "/shelf" },
];

function LandingPage() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverLink, setHoverLink] = useState(null);

  return (
    <>
      <nav className="nb-nav">
        <div className="nb-inner">
          {/* Logo */}
          <Link href="/" className="nb-logo">
            <span className="nb-logo-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="18" rx="2" fill="#f5a32c" />
                <rect
                  x="12"
                  y="3"
                  width="9"
                  height="12"
                  rx="2"
                  fill="#f5a32c"
                  opacity="0.5"
                />
                <rect
                  x="12"
                  y="17"
                  width="9"
                  height="4"
                  rx="2"
                  fill="#f5a32c"
                  opacity="0.3"
                />
              </svg>
            </span>
            <span className="nb-logo-text">
              Book<em className="nb-logo-accent">Borrow</em>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="nb-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nb-link ${pathname === link.href ? "nb-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search */}
          <button className="nb-search" aria-label="Search books">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className="nb-search-text">Search books...</span>
            <kbd className="nb-kbd">⌘K</kbd>
          </button>

          {/* Buttons */}
          <div className="nb-actions">
            <Link href="/login" className="nb-btn-ghost">
              Sign In
            </Link>
            <Link href="/register" className="nb-btn-primary">
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nb-burger"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <span
              className="nb-bar"
              style={{
                transform: menuOpen
                  ? "translateY(6.8px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="nb-bar"
              style={{
                width: "70%",
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="nb-bar"
              style={{
                transform: menuOpen
                  ? "translateY(-6.8px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className="nb-drawer"
          style={{
            maxHeight: menuOpen ? "400px" : "0px",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <ul className="nb-mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nb-mobile-link ${pathname === link.href ? "nb-mobile-link-active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ padding: "8px 20px" }}>
            <button className="nb-search" style={{ width: "100%" }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="nb-search-text">Search books...</span>
            </button>
          </div>

          <div className="nb-mobile-actions">
            <Link
              href="/login"
              className="nb-btn-ghost"
              style={{ flex: 1, textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="nb-btn-primary"
              style={{ flex: 1, textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default LandingPage;
