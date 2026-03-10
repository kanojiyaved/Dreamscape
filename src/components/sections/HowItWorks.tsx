"use client";

const steps = [
  {
    num: "01",
    icon: "📡",
    title: "Neural Capture",
    text: "Direct neural link or high-latency textual transcription of subconscious imagery.",
  },
  {
    num: "02",
    icon: "⚙️",
    title: "Processing",
    text: "Vortical diffusion models reconstruct spatial data into rendered frames.",
  },
  {
    num: "03",
    icon: "🎭",
    title: "Synthesis",
    text: "Temporal consistency checks and neural audio integration for cinematic depth.",
  },
  {
    num: "04",
    icon: "🌌",
    title: "Projection",
    text: "Final high-fidelity output delivered to the user's secure digital vault.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-label">Protocol</div>
      <h2 className="section-title">
        The <em>Pipeline.</em>
      </h2>
      <div className="divider"></div>

      <div className="steps">
        {steps.map((step, idx) => (
          <div key={idx} className="step">
            <div className="step-num">{step.num}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        #how {
          position: relative;
          z-index: 1;
          padding: 120px 5%;
          max-width: 1600px;
          margin: 0 auto;
          text-align: center;
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 80px;
        }
        .step {
          background: linear-gradient(
            135deg,
            rgba(19, 10, 46, 0.5),
            rgba(10, 5, 32, 0.7)
          );
          border: 1px solid rgba(123, 79, 255, 0.1);
          padding: 60px 40px;
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          backdrop-filter: blur(5px);
        }
        .step:hover {
          border-color: rgba(192, 132, 252, 0.3);
          background: rgba(123, 79, 255, 0.05);
          transform: translateY(-5px);
        }
        .step-num {
          font-family: "Cormorant Garamond", serif;
          font-size: 100px;
          font-weight: 300;
          color: rgba(123, 79, 255, 0.08);
          line-height: 1;
          position: absolute;
          top: 20px;
          right: 32px;
          pointer-events: none;
        }
        .step-icon {
          font-size: 36px;
          margin-bottom: 32px;
        }
        .step h3 {
          font-size: 22px;
          font-weight: 400;
          color: var(--shimmer);
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }
        .step p {
          font-size: 16px;
          color: rgba(226, 196, 255, 0.55);
          line-height: 1.7;
        }
        @media (max-width: 1200px) {
          .steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
