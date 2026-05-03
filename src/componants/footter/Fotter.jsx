"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="mt-20 py-10 px-6"
      style={{
        background: "#0c0f1a",
        borderTop: "1px solid rgba(245,163,44,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2
            className="text-2xl font-bold mb-3"
            style={{ color: "#f5a32c", fontFamily: "Georgia, serif" }}
          >
            BookBorrow
          </h2>
          <p className="text-sm text-gray-400 leading-6">
            Discover, read and borrow beautiful books online. A modern library
            experience for everyone.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#f5a32c]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/AllPhoto" className="hover:text-[#f5a32c]">
                Browse
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[#f5a32c]">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/shelf" className="hover:text-[#f5a32c]">
                My Shelf
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">Email: support@bookborrow.com</p>
          <p className="text-sm text-gray-400 mt-2">Riyadh, Saudi Arabia</p>

          {/* Social */}
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: "rgba(245,163,44,0.1)",
                border: "1px solid rgba(245,163,44,0.2)",
                color: "#f5a32c",
              }}
            >
              f
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: "rgba(245,163,44,0.1)",
                border: "1px solid rgba(245,163,44,0.2)",
                color: "#f5a32c",
              }}
            >
              in
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: "rgba(245,163,44,0.1)",
                border: "1px solid rgba(245,163,44,0.2)",
                color: "#f5a32c",
              }}
            >
              x
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} BookBorrow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
