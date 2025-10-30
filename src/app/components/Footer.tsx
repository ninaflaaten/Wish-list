"use client";

export default function Footer() {
  return (
    <footer className="relative flex w-full overflow-hidden backdrop-blur-md mt-16 h-44">
      <img
        src="/santa-run.gif"
        alt="Santa running"
        className="absolute bottom-0 h-full w-auto animate-run"
      />
    </footer>
  );
}