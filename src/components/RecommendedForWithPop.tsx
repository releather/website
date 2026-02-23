"use client";

import Image from "next/image";
import { useState } from "react";
import HomepagePop from "@/components/HomepagePop";

type Item = {
  label: string;
  imgSrc: string;
  titleAttr: string;
  alt: string;
  description: string;
};

const recommendedForItems: Item[] = [
  {
    label: "Pigmented",
    imgSrc: "https://res.cloudinary.com/leathera/image/upload/c_fill,w_115,h_100/b_rgb:000000/r_5/f_webp/leather/Colorful/Colorful_Tan.jpg",
    titleAttr: "Leather Restoration recommended for Pigmented Protected Leather",
    alt: "Leather Restoration recommended for Protected Leather",
    description: "Pigmented leather has a protective top coat and durable finish. It’s the most common type in furniture—tough, easy to clean, and ideal for restoration and redyeing.",
  },
  {
    label: "Aniline",
    imgSrc: "https://res.cloudinary.com/leathera/image/upload/c_fill,w_115,h_100/b_rgb:000000/r_5/f_webp/leather/Restoration/Restoration_Leather_Saddle.jpg",
    titleAttr: "Leather Restoration recommended for Aniline Leather",
    alt: "Leather Restoration recommended for Aniline Leather",
    description: "Pure aniline leather is dyed through with no top coat. It shows natural grain and character and is considered premium. We clean, condition, and restore it with care.",
  },
  {
    label: "Semi-Aniline",
    imgSrc: "https://res.cloudinary.com/leathera/image/upload/c_fill,w_115,h_100/b_rgb:000000/r_5/f_webp/leather/Antique/Antique_Leather_Cashew.jpg",
    titleAttr: "Leather Restoration recommended for Semi Aniline Leather",
    alt: "Leather Restoration recommended for Semi Aniline Leather",
    description: "Semi-aniline leather has a light surface coating for protection while keeping a natural look. We restore color, condition, and repair it for furniture and automotive.",
  },
  {
    label: "Nubuck",
    imgSrc: "https://res.cloudinary.com/leathera/image/upload/c_fill,w_115,h_100/b_rgb:000000/r_5/f_webp/leather/Soft/Soft_Leather_Chestnut.jpg",
    titleAttr: "Leather Restoration recommended for Nubuck Leather",
    alt: "Leather Restoration recommended for Nubuck Leather",
    description: "Nubuck is buffed on the surface for a velvety feel. It’s sensitive and needs specialist cleaning and restoration—we handle it with the right products and techniques.",
  },
];

export default function RecommendedForWithPop() {
  const [openItem, setOpenItem] = useState<Item | null>(null);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {recommendedForItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setOpenItem(item)}
            title={item.titleAttr}
            className="group relative block aspect-[4/3] w-full overflow-hidden border-0 bg-transparent p-0 text-left transition opacity-90 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-releather-orange focus:ring-offset-2 focus:ring-offset-black"
          >
            <Image
              src={item.imgSrc}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              loading="lazy"
              className="object-cover object-center"
            />
            <strong className="absolute bottom-0 left-0 right-0 bg-black/80 px-4 py-3 font-display text-2xl font-black uppercase leading-none tracking-tighter text-white group-hover:bg-releather-orange group-hover:text-black sm:text-3xl lg:text-4xl">
              {item.label}
            </strong>
          </button>
        ))}
      </div>
      <HomepagePop
        isOpen={!!openItem}
        onClose={() => setOpenItem(null)}
        title={openItem?.label ?? ""}
      >
        {openItem?.description}
      </HomepagePop>
    </>
  );
}
