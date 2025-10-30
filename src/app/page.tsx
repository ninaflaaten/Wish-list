"use client";

import { useState } from "react";
import { WishItem } from "./components/WishItem";
import ThemeSwitch from "./ThemeSwitch";
import { WishGallery } from "./components/WishGallery";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Overlay/landing */}
      {!opened && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white text-black">
          <button
            onClick={() => setOpened(true)}
            aria-label="Åpne ønskelista"
            className="flex flex-col items-center gap-4 focus:outline-none"
          >
            <span
              className="text-9xl animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              🎁
            </span>
            <span className="text-lg opacity-80">Åpne meg</span>
          </button>
        </div>
      )}

      {/* Selve siden/innholdet */}
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center gap-6 p-8">
        <div className="flex w-full items-center justify-end">
          <ThemeSwitch />
        </div>
        <h1 className="mt-10 text-2xl font-semibold">Ninas ønskeliste</h1>
        <WishGallery/>
       
        {/* Legg til flere WishItem ... */}
      </main>
    </div>
  );
}
/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */

//  <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           ></a>
