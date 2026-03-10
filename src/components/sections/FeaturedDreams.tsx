"use client";

const dreams = [
  {
    rank: "RANK_01",
    title: "Liquid Neon Cathedral",
    author: "User_882",
    type: "video",
    votes: 4280,
    emoji: "🏛️",
    isFeatured: true,
  },
  {
    rank: "RANK_02",
    title: "The Whispering Desert",
    author: "Oracle_X",
    type: "images",
    votes: 3912,
    emoji: "🏜️",
  },
  {
    rank: "RANK_03",
    title: "Mechanical Orchids",
    author: "CyberFlorist",
    type: "images",
    votes: 3450,
    emoji: "🌸",
  },
];

export default function FeaturedDreams() {
  return (
    <section id="featured">
      <div className="section-label">Gallery</div>
      <h2 className="section-title">
        The <em>Archive.</em>
      </h2>
      <div className="divider"></div>

      <div className="dreams-grid">
        {dreams.map((dream, idx) => (
          <div
            key={idx}
            className={`dream-card ${dream.isFeatured ? "featured-card" : ""}`}
          >
            <div className="card-thumb">
              {dream.emoji}
              <div className="card-overlay"></div>
              <div className="card-rank">{dream.rank}</div>
              <div
                className={`card-type-badge ${
                  dream.type === "video" ? "type-video" : "type-images"
                }`}
              >
                {dream.type === "video" ? "SEQUENCE" : "SNAPSHOT"}
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">{dream.title}</h4>
              <p className="card-excerpt">
                A visual reconstruction of the subconscious manifested through 
                high-fidelity neural rendering.
              </p>
              <div className="card-meta">
                <span className="card-author">BY {dream.author}</span>
                <div className="card-votes">
                  <button className="vote-btn">
                    <span>▲</span> {dream.votes}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        #featured {
          position: relative;
          z-index: 1;
          padding: 120px 5%;
          max-width: 1600px;
          margin: 0 auto;
          text-align: center;
        }
        .dreams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
          margin-top: 80px;
          text-align: left;
        }
        .dream-card {
          background: linear-gradient(
            135deg,
            rgba(19, 10, 46, 0.75),
            rgba(10, 5, 32, 0.85)
          );
          border: 1px solid rgba(123, 79, 255, 0.12);
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          position: relative;
          backdrop-filter: blur(5px);
        }
        .dream-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(192, 132, 252, 0.4);
          box-shadow: 0 30px 80px rgba(123, 79, 255, 0.25);
          z-index: 2;
        }
        .featured-card {
          grid-column: span 2;
        }
        .card-thumb {
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, var(--murk), var(--deep));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 56px;
          position: relative;
          overflow: hidden;
        }
        .featured-card .card-thumb {
          aspect-ratio: 21/9;
          font-size: 80px;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(4, 2, 15, 0.9) 0%, transparent 50%);
        }
        .card-rank {
          position: absolute;
          top: 16px;
          left: 16px;
          font-family: "Space Mono", monospace;
          font-size: 11px;
          padding: 6px 12px;
          background: rgba(4, 2, 15, 0.85);
          border: 1px solid rgba(192, 132, 252, 0.2);
          color: var(--pulse);
          letter-spacing: 0.1em;
        }
        .card-type-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          font-family: "Space Mono", monospace;
          font-size: 10px;
          padding: 4px 10px;
          letter-spacing: 0.1em;
        }
        .type-images {
          background: rgba(80, 200, 120, 0.1);
          color: #80ffa0;
          border: 1px solid rgba(80, 200, 120, 0.25);
        }
        .type-video {
          background: rgba(240, 192, 96, 0.1);
          color: var(--gold);
          border: 1px solid rgba(240, 192, 96, 0.25);
        }
        .card-body {
          padding: 28px;
        }
        .card-title {
          font-size: 24px;
          font-style: italic;
          margin-bottom: 12px;
          color: var(--shimmer);
          letter-spacing: -0.01em;
        }
        .card-excerpt {
          font-size: 16px;
          color: rgba(226, 196, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(123, 79, 255, 0.1);
          padding-top: 20px;
        }
        .card-author {
          font-family: "Space Mono", monospace;
          font-size: 11px;
          color: rgba(226, 196, 255, 0.4);
          letter-spacing: 0.1em;
        }
        .vote-btn {
          background: transparent;
          border: 1px solid rgba(123, 79, 255, 0.2);
          color: rgba(226, 196, 255, 0.6);
          padding: 8px 16px;
          font-family: "Space Mono", monospace;
          font-size: 12px;
          transition: all 0.3s ease;
          cursor: none;
        }
        .vote-btn:hover {
          border-color: var(--glow);
          color: var(--pulse);
          background: rgba(123, 79, 255, 0.05);
        }
        @media (max-width: 768px) {
          .featured-card {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
