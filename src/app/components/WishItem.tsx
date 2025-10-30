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
      className={`flex w-full items-center gap-4 rounded-2xl backdrop-blur-md dark:border-white/10 hover:shadow-md transition ${
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

      <div className="min-w-0">
        <h3 className="truncate text-lg font-semibold font-serif">{title}</h3>
      </div>
    </Link>
  );
}
