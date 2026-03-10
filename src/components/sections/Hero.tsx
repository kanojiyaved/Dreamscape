"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">Neural Visualizer v4.2</div>
      <h1>
        Witness your <em>subconscious.</em>
      </h1>
      <p>
        Turn your tonight's dream into tomorrow's cinematic masterpiece. 
        High-fidelity neural rendering from text or voice prompts.
      </p>
      <div className="hero-btns">
        <a href="#create" className="btn-primary">
          Begin Session
        </a>
        <a href="#featured" className="btn-ghost">
          Explore Archive
        </a>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 120px 5% 80px;
          z-index: 1;
          width: 100%;
        }
        .hero::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vw;
          max-width: 1200px;
          max-height: 1200px;
          background: radial-gradient(
            circle,
            rgba(123, 79, 255, 0.15) 0%,
            transparent 70%
          );
          pointer-events: none;
          animation: breathe 8s ease-in-out infinite;
        }
        @keyframes breathe {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }
        .eyebrow {
          font-family: "Space Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.5em;
          color: var(--glow);
          text-transform: uppercase;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.3s;
        }
        .hero h1 {
          font-size: clamp(64px, 12vw, 140px);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.6s;
          max-width: 1400px;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--pulse);
          display: block;
        }
        .hero p {
          font-size: 22px;
          font-weight: 300;
          color: rgba(226, 196, 255, 0.7);
          max-width: 600px;
          line-height: 1.6;
          margin: 32px auto 60px;
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.9s;
        }
        .hero-btns {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUp 1s ease forwards 1.2s;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
