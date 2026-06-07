import MenuItemCard from "./MenuItemCard";
import type { MenuItem } from "@/lib/menu";
import Link from "next/link";

const FEATURED_IMAGES: Record<string, string> = {
  "Velvet Haze Latte":       "/images/velvet-haze-latte.webp",
  "Aurora Horchata Brew":    "/images/aurora-horchata-brew.webp",
  "Wanderer's Waffle":       "/images/wanderers-waffle.webp",
  "Afterglow Truffle Fries": "/images/afterglow-truffle-fries.webp",
  "Prism Almond Tart":       "/images/prism-almond-tart.webp",
  "Ember & Dew Affogato":    "/images/ember-dew-affogato.webp",
};

type Props = { items: MenuItem[] };

export default function FeaturedItems({ items }: Props) {
  return (
    <section className="bg-[#f7f2e8] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#225e3f]">
              The stuff people keep coming back for
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
              Crowd-Approved Hits
            </h2>
          </div>
          <Link
            href="/menu"
            className="text-sm font-semibold text-[#1a4d34] hover:underline underline-offset-4"
          >
            Browse the full menu →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((item) => (
            <MenuItemCard
              key={item.name}
              item={item}
              imageSrc={FEATURED_IMAGES[item.name] ?? "/images/section-drinks.webp"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
