"use client";

import React from "react";

export default function Header() {
  // Beregn dager igjen til jul 🎅
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 24);
  const diffTime = christmas.getTime() - today.getTime();
  const daysLeft =
    diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : 0;

  return (
    <header className="relative flex flex-col w-full">
      {/* 🎄 Dager igjen til jul */}
      <div className="absolute top-2 left-5">
        <h1 className="text-xs sm:text-sm font-semibold opacity-80">
          {daysLeft > 0
            ? `${daysLeft} dager igjen til jul 🎄`
            : "God jul! 🎅"}
        </h1>
      </div>

      {/* 💚 Grinch */}
      <div className="absolute top-0 right-0">
        <img
          src="/grinch.gif"
          alt="Grinch"
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* 🎁 Midtstilt tittel */}
      <div className="text-center text-2xl font-semibold mt-16">
        Ninas ønskeliste
      </div>
    </header>
  );
}