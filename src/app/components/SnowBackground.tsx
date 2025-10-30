"use client";

import React, { useEffect, useState } from "react";

export default function SnowBackground() {
  const [flakes, setFlakes] = useState<
    { id: number; left: string; size: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // tilfeldig horisontal posisjon
      size: Math.random() * 30 + 20, // 20–50px størrelse
      delay: Math.random() * 8, // tilfeldig startforsinkelse
      duration: Math.random() * 10 + 10, // fallhastighet (10–20s)
    }));
    setFlakes(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10 opacity-50">
      {flakes.map((flake) => (
        <img
          key={flake.id}
          src="/snow.png"
          alt="Snowflake"
          className="absolute animate-snow-fall opacity-80"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        />
      ))}
    </div>
  );
}