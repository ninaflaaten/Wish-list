'use client';
import Link from "next/link";

type Props = {
  title: string;
  imageSrc: string;
  link: string;
  className?: string;           // <- wrapper
  imageBoxClassName?: string;   // <- boksen rundt bildet
  imageClassName?: string;      // <- selve <img>
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
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 hover:shadow-md transition ${className ?? ""}`}
    >
      <div
        className={`relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-xl p-2 ${imageBoxClassName ?? ""}`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`max-h-full max-w-full object-contain ${imageClassName ?? ""}`}
          loading="lazy"
        />
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-lg font-medium">{title}</h3>
        <p className="text-sm opacity-70">Trykk for å se produktet</p>
      </div>
    </Link>
  );
}