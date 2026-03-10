"use client";

export default function Comparison() {
  const features = [
    { label: "Rendering Resolution", image: "1024x1024px", video: "2K Cinema" },
    { label: "Neural Fidelity", image: "Standard", video: "Ultra High" },
    { label: "Temporal Motion", image: "None", video: "Fluid 24fps" },
    { label: "Spatial Audio", image: "❌", video: "✅" },
    { label: "Secure Vault Storage", image: "Limited", video: "Unlimited" },
  ];

  return (
    <section id="compare">
      <div className="section-label">Capabilities</div>
      <h2 className="section-title">
        Choose your <em>Depth.</em>
      </h2>
      <div className="divider"></div>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th className="col-images">Snapshot</th>
            <th className="col-video">Cinematic</th>
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={i}>
              <td>{f.label}</td>
              <td className={f.image === "✅" ? "check" : ""}>{f.image}</td>
              <td className={f.video === "✅" ? "check" : "neutral"}>
                {f.video}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        #compare {
          position: relative;
          z-index: 1;
          padding: 120px 5%;
          max-width: 1600px;
          margin: 0 auto;
          text-align: center;
        }
        .compare-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 60px;
          text-align: left;
          background: rgba(4, 2, 15, 0.3);
          backdrop-filter: blur(10px);
        }
        .compare-table th {
          font-family: "Space Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(123, 79, 255, 0.2);
          background: rgba(19, 10, 46, 0.5);
        }
        .compare-table th:first-child {
          color: rgba(226, 196, 255, 0.5);
        }
        .compare-table th.col-images {
          color: #80ffa0;
        }
        .compare-table th.col-video {
          color: var(--gold);
        }
        .compare-table td {
          padding: 24px 32px;
          font-size: 17px;
          color: rgba(226, 196, 255, 0.7);
          border-bottom: 1px solid rgba(123, 79, 255, 0.1);
          vertical-align: middle;
        }
        .compare-table td:first-child {
          font-family: "Space Mono", monospace;
          font-size: 12px;
          color: rgba(226, 196, 255, 0.4);
          letter-spacing: 0.1em;
          width: 300px;
        }
        .compare-table tr:hover td {
          background: rgba(123, 79, 255, 0.05);
          color: #fff;
        }
        .check {
          color: #80ffa0;
          font-size: 20px;
        }
        .neutral {
          color: var(--gold);
        }
        @media (max-width: 768px) {
           .compare-table td, .compare-table th {
             padding: 16px;
             font-size: 14px;
           }
           .compare-table td:first-child {
             width: auto;
           }
        }
      `}</style>
    </section>
  );
}
