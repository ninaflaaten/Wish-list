import Image from "next/image";

export const WishItem = ({
  title,
  imageSrc,
  link,
}: {
  title: string;
  imageSrc: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p>{title}</p>
      <Image
        className="dark:invert"
        src={imageSrc}
        alt={title}
        width={100}
        height={20}
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 
        text-white hover:border-transparent hover:bg-black/[.04] 
        dark:text-white dark:border-white/[.145] dark:hover:bg-[#1a1a1a] 
        md:w-[158px]"
      >
        Gå til ønsket
      </a>
    </div>
  );
};