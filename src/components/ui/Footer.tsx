"use client";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        Dream<span>scape</span>
      </div>
      <p>© 2026 Dreamscape Research Group. All rights reserved.</p>
      <style jsx>{`
        footer {
          position: relative;
          z-index: 1;
          padding: 60px 60px 40px;
          border-top: 1px solid rgba(123, 79, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        footer .logo {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          font-weight: 300;
          letter-spacing: 0.3em;
          color: var(--shimmer);
          text-transform: uppercase;
        }
        footer .logo span {
          color: var(--pulse);
        }
        footer p {
          font-family: "Space Mono", monospace;
          font-size: 10px;
          color: rgba(226, 196, 255, 0.2);
          letter-spacing: 0.1em;
        }
      `}</style>
    </footer>
  );
}
