"use client";

import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { WishGallery } from "./components/WishGallery";
import WishlistHeader from "./components/Header";
import SnowBackground from "./components/SnowBackground";
import Footer from "./components/Footer";


export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen">
      <SnowBackground />
      {/* Overlay gift */}
      {!opened && (
        <div
          className="fixed inset-0 z-50 grid place-items-center
                bg-white/75 text-black
                dark:bg-black/75 dark:text-white
                backdrop-blur-sm"
        >
          <button
            onClick={() => setOpened(true)}
            aria-label="Åpne ønskelista"
            className="flex flex-col items-center gap-4 focus:outline-none"
          >
            <span className="text-9xl" style={{ animationDuration: "2s" }}>
              <div className="flex items-center justify-center">
                <img src="/gift.gif" alt="Gave" className="w-32 h-32" />
              </div>
              <div className="flex items-center justify-center pt-5">
                <img src="/point.gif" alt="Point" className="w-20 h-20" />
              </div>
            </span>
          </button>
        </div>
      )}

      {/* Selve siden/innholdet */}
      <main className="min-h-screen flex flex-col items-center ">
        <div className="flex w-full items-center justify-end p-5">
          <ThemeSwitch />
        </div>

        {/* Header */}
        <div className="w-full">
          <WishlistHeader />
        </div>

        {/* Ønskeliste */}
        <section className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 mt-6 w-full lg:w-[800px] mx-auto">
          {" "}
          <WishGallery />
          <Footer />
        </section>
      </main>
    </div>
  );
}
