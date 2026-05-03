"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import SearchBox from "./Search";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Browse", href: "/AllPhoto" },
  { label: "Categories", href: "/catagoriPage" },
  { label: "My Shelf", href: "/notFound" },
];

function LandingPage() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ FIXED SESSION
  const { data: session, isLoading } = authClient.useSession();
  const user = session?.user;

  return (
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
                className={`nb-link ${
                  pathname === link.href ? "nb-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <SearchBox></SearchBox>

        {/* Desktop Auth */}
        <div className="nb-actions">
          {isLoading ? null : user ? (
            <>
              <span style={{ color: "#f5a32c", fontSize: "13px" }}>
                👤 {user.name}
              </span>

              <button
                className="nb-btn-primary"
                onClick={() => authClient.signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="nb-btn-ghost">
                Sign In
              </Link>
              <Link href="/register" className="nb-btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="nb-burger" onClick={() => setMenuOpen((p) => !p)}>
          ☰
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
                onClick={() => setMenuOpen(false)}
                className="nb-mobile-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Auth */}
        <div className="nb-actions">
          {isLoading ? null : user ? (
            <>
              <span style={{ color: "#f5a32c" }}>👤 {user.name}</span>

              <button
                className="nb-btn-primary"
                onClick={() => authClient.signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="nb-btn-ghost">
                Sign In
              </Link>
              <Link href="/register" className="nb-btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default LandingPage;
