"use client";

import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const starCount = 150;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      style: {
        "--delay": `${Math.random() * 5}s`,
        "--d": `${2 + Math.random() * 3}s`,
        "--min-op": Math.random() * 0.2,
        "--max-op": 0.4 + Math.random() * 0.6,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
      } as React.CSSProperties,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div key={star.id} className="star" style={star.style} />
      ))}
    </div>
  );
}
