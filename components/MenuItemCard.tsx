import Image from "next/image";
import StrengthBadge from "./StrengthBadge";
import type { MenuItem } from "@/lib/menu";

type Props = {
  item: MenuItem;
  imageSrc: string;
};

export default function MenuItemCard({ item, imageSrc }: Props) {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden group transition-shadow duration-200 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={imageSrc}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <h3 className="text-base font-semibold text-[#1a1a1a] leading-snug">
          {item.name}
        </h3>
        <p className="text-sm text-[#5a5a5a] leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>
        <div className="flex flex-wrap items-center gap-1.5 mt-1">
          <StrengthBadge thcMg={item.thcMg} />
          {item.vegan && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold leading-none bg-[#f5e69b] text-[#c49a0a]">
              🌱 Vegan
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5">
          <span className="font-mono text-base font-semibold text-[#1a1a1a]">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-xs text-[#8a8a8a]">{item.servingSize}</span>
        </div>
      </div>
    </article>
  );
}
