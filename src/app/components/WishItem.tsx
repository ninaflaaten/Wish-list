"use client";
import Link from "next/link";

type Props = {
  title: string;
  imageSrc: string;
  link: string;
  className?: string; // wrapper
  imageBoxClassName?: string; // boksen rundt bildet
  imageClassName?: string; // <img>
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
      className={`flex w-full items-center gap-4 rounded-2xl backdrop-blur-md dark:border-white/10 hover:shadow-md transition flex-wrap sm:flex-nowrap ${
        className ?? ""
      }`}
    >
      <div
        className={`relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl p-2 ${
          imageBoxClassName ?? ""
        }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`max-h-full max-w-full object-contain ${
            imageClassName ?? ""
          }`}
          loading="lazy"
        />
      </div>

      {/* Tekstblokk som kan wrappe fint på mobil */}
      <div className="flex-1 min-w-[10rem]">
        <h3 className="text-lg font-semibold font-serif break-words">
          {title}
        </h3>
        <p>Klikk på meg</p>
      </div>
    </Link>
  );
}