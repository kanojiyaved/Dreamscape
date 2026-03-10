"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        Dream<span>scape</span>
      </div>
      <ul>
        <li>
          <Link href="#create">Create</Link>
        </li>
        <li>
          <Link href="#featured">Featured</Link>
        </li>
        <li>
          <Link href="#how">Process</Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 60px;
          background: linear-gradient(
            to bottom,
            rgba(4, 2, 15, 0.95) 0%,
            transparent 100%
          );
          backdrop-filter: blur(2px);
        }
        .logo {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          font-weight: 300;
          letter-spacing: 0.3em;
          color: var(--shimmer);
          text-transform: uppercase;
        }
        .logo span {
          color: var(--pulse);
        }
        nav ul {
          display: flex;
          gap: 40px;
          list-style: none;
        }
        nav ul :global(a) {
          font-family: "Space Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(226, 196, 255, 0.5);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        nav ul :global(a):hover {
          color: var(--pulse);
        }
      `}</style>
    </nav>
  );
}
