"use client";

import { useState } from "react";

export default function DreamForm() {
  const [activeMode, setActiveMode] = useState("images");
  const [isLoading, setIsLoading] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOutput(true);
    }, 2000);
  };

  return (
    <section id="create">
      <div className="section-label">Neural Interface</div>
      <h2 className="section-title">
        Enter the <em>void.</em>
      </h2>
      <div className="divider"></div>

      <div className="dream-form-card">
        <textarea
          className="dream-textarea"
          placeholder="Describe the texture of your subconscious... A neon forest at midnight, a floating city of glass, or perhaps a conversation with a shadow."
        ></textarea>

        <div className="mode-toggle">
          <button
            className={`mode-btn ${activeMode === "images" ? "active" : ""}`}
            onClick={() => setActiveMode("images")}
          >
            Snapshot <span className="badge badge-cheap">Free</span>
          </button>
          <button
            className={`mode-btn ${activeMode === "video" ? "active" : ""}`}
            onClick={() => setActiveMode("video")}
          >
            Cinematic <span className="badge badge-premium">Premium</span>
          </button>
        </div>

        <div className={`mode-info ${activeMode === "images" ? "active" : ""}`}>
          <h4>SNAPSHOT RENDERING</h4>
          <p>4x High-fidelity neural projections. Ideal for environmental study.</p>
          <div className="tech-list">
            <span className="tech-tag">Stable Diff XL</span>
            <span className="tech-tag">1024x1024</span>
          </div>
        </div>

        <div className={`mode-info ${activeMode === "video" ? "active" : ""}`}>
          <h4>CINEMATIC SEQUENCE</h4>
          <p>8-second temporal rendering with spatial audio synthesis.</p>
          <div className="tech-list">
            <span className="tech-tag">SVD-Turbo</span>
            <span className="tech-tag">24FPS</span>
            <span className="tech-tag">Neural Audio</span>
          </div>
        </div>

        <div className="generate-area">
          <button
            id="generateBtn"
            className={`btn-primary ${isLoading ? "loading" : ""}`}
            onClick={handleGenerate}
            disabled={isLoading}
          >
            <span className="btn-text">Initialize Rendering</span>
            <div className="spinner">
              <div className="spin-ring"></div>
            </div>
          </button>
        </div>

        <div id="outputArea" className={showOutput ? "visible" : ""}>
          <div className="output-header">
            <h3>Neural Output</h3>
            <span>LATENCY: 1.8s</span>
          </div>
          <div className="frames-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="dream-frame">
                👁️
                <div className="frame-label">FRAME_00{i}</div>
              </div>
            ))}
          </div>
          <div className="output-actions">
            <button className="btn-primary" style={{ padding: "12px 24px" }}>
              Archive to Vault
            </button>
            <button className="btn-ghost" style={{ padding: "12px 24px" }}>
              Refine Prompt
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        #create {
          position: relative;
          z-index: 1;
          padding: 120px 5%;
          max-width: 1600px;
          margin: 0 auto;
          text-align: center;
        }
        .dream-form-card {
          background: linear-gradient(
            135deg,
            rgba(19, 10, 46, 0.85) 0%,
            rgba(10, 5, 32, 0.9) 100%
          );
          border: 1px solid rgba(123, 79, 255, 0.2);
          padding: 64px 80px;
          position: relative;
          overflow: hidden;
          text-align: left;
          backdrop-filter: blur(10px);
        }
        .dream-textarea {
          width: 100%;
          min-height: 200px;
          background: rgba(4, 2, 15, 0.6);
          border: 1px solid rgba(123, 79, 255, 0.15);
          color: var(--shimmer);
          font-family: "Cormorant Garamond", serif;
          font-size: 20px;
          line-height: 1.6;
          padding: 32px;
          resize: vertical;
          outline: none;
          transition: all 0.4s ease;
          margin-bottom: 32px;
        }
        .dream-textarea:focus {
          border-color: var(--glow);
          box-shadow: 0 0 40px rgba(123, 79, 255, 0.1);
          background: rgba(4, 2, 15, 0.8);
        }
        .mode-toggle {
          display: flex;
          max-width: 600px;
          margin-bottom: 40px;
          border: 1px solid rgba(123, 79, 255, 0.2);
          clip-path: polygon(
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%,
            10px 100%,
            0 calc(100% - 10px)
          );
        }
        .mode-btn {
          flex: 1;
          padding: 16px 24px;
          background: transparent;
          border: none;
          color: rgba(226, 196, 255, 0.4);
          font-family: "Space Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: none;
          transition: all 0.3s;
          border-right: 1px solid rgba(123, 79, 255, 0.2);
        }
        .mode-btn:last-child {
          border-right: none;
        }
        .mode-btn.active {
          background: rgba(123, 79, 255, 0.15);
          color: var(--pulse);
        }
        .badge {
          display: inline-block;
          margin-left: 12px;
          padding: 3px 10px;
          font-size: 9px;
          border-radius: 2px;
          letter-spacing: 0.05em;
        }
        .badge-cheap {
          background: rgba(80, 200, 120, 0.15);
          color: #80ffa0;
          border: 1px solid rgba(80, 200, 120, 0.2);
        }
        .badge-premium {
          background: rgba(240, 192, 96, 0.15);
          color: var(--gold);
          border: 1px solid rgba(240, 192, 96, 0.2);
        }
        .mode-info {
          display: none;
          margin-bottom: 40px;
          padding: 32px;
          background: rgba(4, 2, 15, 0.4);
          border-left: 3px solid var(--glow);
        }
        .mode-info.active {
          display: block;
        }
        .mode-info h4 {
          font-family: "Space Mono", monospace;
          font-size: 13px;
          color: var(--pulse);
          margin-bottom: 12px;
          letter-spacing: 0.2em;
        }
        .mode-info p {
          font-size: 17px;
          color: rgba(226, 196, 255, 0.7);
          line-height: 1.6;
        }
        .tech-tag {
          padding: 6px 16px;
          background: rgba(123, 79, 255, 0.08);
          border: 1px solid rgba(123, 79, 255, 0.15);
          font-family: "Space Mono", monospace;
          font-size: 11px;
          color: var(--glow);
          margin-right: 12px;
          margin-top: 12px;
          display: inline-block;
        }
        #generateBtn {
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 400px;
        }
        .loading .btn-text {
          opacity: 0;
        }
        .spinner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
        }
        .loading .spinner {
          opacity: 1;
        }
        .spin-ring {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        #outputArea {
          display: none;
          margin-top: 60px;
          border-top: 1px solid rgba(123, 79, 255, 0.1);
          padding-top: 40px;
        }
        .visible {
          display: block !important;
        }
        .output-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .output-header h3 {
           font-size: 24px;
           font-weight: 300;
           letter-spacing: 0.1em;
        }
        .frames-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }
        .dream-frame {
          aspect-ratio: 9/16;
          background: linear-gradient(135deg, var(--murk), var(--deep));
          border: 1px solid rgba(123, 79, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          position: relative;
          animation: shimmerFrame 3s ease-in-out infinite;
        }
        @keyframes shimmerFrame {
          0%,
          100% {
            border-color: rgba(123, 79, 255, 0.15);
            background: linear-gradient(135deg, var(--murk), var(--deep));
          }
          50% {
            border-color: rgba(192, 132, 252, 0.3);
            background: linear-gradient(135deg, var(--deep), var(--murk));
          }
        }
        .frame-label {
          position: absolute;
          bottom: 12px;
          left: 12px;
          font-family: "Space Mono", monospace;
          font-size: 10px;
          color: rgba(226, 196, 255, 0.3);
          letter-spacing: 0.1em;
        }
        .output-actions {
          display: flex;
          gap: 16px;
        }
        @media (max-width: 992px) {
           .frames-grid {
             grid-template-columns: repeat(2, 1fr);
           }
           .dream-form-card {
             padding: 48px 40px;
           }
        }
      `}</style>
    </section>
  );
}
