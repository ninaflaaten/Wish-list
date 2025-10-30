"use client";
import Link from "next/link";

type Props = {
  title: string;
  imageSrc: string;
  link: string;
  className?: string;
  imageBoxClassName?: string;
  imageClassName?: string;
};

export function WishItem({
  title,
  imageSrc,
  link,
  className,
  imageBoxClassName,
  imageClassName,
}: Props) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center gap-4 rounded-2xl border 
      border-gray-200 dark:border-white/10 
      bg-gradient-to-br from-white/70 to-pink-50/30 dark:from-white/5 dark:to-white/0
      shadow-sm hover:shadow-[0_0_25px_rgba(255,182,193,0.4)]
      transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm
      ${className ?? ""}`}
    >
      <div
        className={`relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center overflow-hidden rounded-xl bg-white/40 dark:bg-white/10 p-2 ${
          imageBoxClassName ?? ""
        }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`max-h-full max-w-full object-contain drop-shadow-md ${
            imageClassName ?? ""
          }`}
          loading="lazy"
        />
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
