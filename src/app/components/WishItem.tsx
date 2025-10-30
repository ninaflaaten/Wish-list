'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = { title: string; imageSrc: string; link: string };

export function WishItem({ title, imageSrc, link }: Props) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full">
      <article className="flex gap-4 rounded-2xl border p-4 hover:shadow-md">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="112px"
            className="object-cover"
            priority={false}
            unoptimized
          />
        </div>
        <div className="min-w-0 self-center">
          <h3 className="truncate text-lg font-medium">{title}</h3>
          <p className="text-sm opacity-70">Trykk for å se produktet</p>
        </div>
      </article>
    </Link>
  );
}
