"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  image: string;
  description: string;
};

export default function ProjectCard({
  title,
  href,
  image,
  description,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        transition-all
        duration-500
        hover:scale-[1.03]
      "
    >
      {/* IMAGE */}
      <div className="relative h-32 transition-all duration-500 group-hover:h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            opacity-80
            group-hover:opacity-100
            transition
            duration-500
          "
        />
      </div>

      {/* TEXT */}
      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-zinc-400 mt-2 opacity-0 group-hover:opacity-100 transition">
          {description}
        </p>
      </div>
    </Link>
  );
}