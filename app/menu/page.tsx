
import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import CategoryTabs from "@/components/CategoryTabs";
import { getMenuBySection, DISPLAY_SECTIONS } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu — Cannabrew Co.",
  description:
    "Browse the full Cannabrew Co. menu — specialty coffees, fresh pastries, brunch plates, and small bites. All made with care and a little extra.",
};

const SECTION_IMAGES: Record<string, string> = {
  drinks:   "/images/section-drinks.webp",
  pastries: "/images/section-pastries.webp",
  brunch:   "/images/section-brunch.webp",
  savory:   "/images/section-savory.webp",
  sweet:    "/images/section-sweet.webp",
};

const ITEM_IMAGES: Record<string, string> = {
  "The Green Awakening":       "/images/the-green-awakening.webp",
  "Velvet Haze Latte":         "/images/velvet-haze-latte.webp",
  "Emerald Tide Cold Brew":    "/images/emerald-tide-cold-brew.webp",
  "Gilded Fog Cortado":        "/images/gilded-fog-cortado.webp",
  "Sundial Matcha":            "/images/sundial-matcha.webp",
  "Midnight Bloom Mocha":      "/images/midnight-bloom-mocha.webp",
  "The Canopy Cappuccino":     "/images/the-canopy-cappuccino.webp",
  "Aurora Horchata Brew":      "/images/aurora-horchata-brew.webp",
  "Solstice Dirty Chai":       "/images/solstice-dirty-chai.webp",
  "Ember & Dew Affogato":      "/images/ember-dew-affogato.webp",
  "Cloudwalker Croissant":     "/images/cloudwalker-croissant.webp",
  "Terra Nova Banana Bread":   "/images/terra-nova-banana-bread.webp",
  "Gossamer Cinnamon Roll":    "/images/gossamer-cinnamon-roll.webp",
  "Dusk Petal Scone":          "/images/dusk-petal-scone.webp",
  "Prism Almond Tart":         "/images/prism-almond-tart.webp",
  "Wanderer's Waffle":         "/images/wanderers-waffle.webp",
  "Greenleaf Avocado Toast":   "/images/greenleaf-avocado-toast.webp",
  "The Ritual Bowl":           "/images/the-ritual-bowl.webp",
  "Fog Catcher Frittata":      "/images/fog-catcher-frittata.webp",
  "Solara French Toast":       "/images/solara-french-toast.webp",
  "Afterglow Truffle Fries":   "/images/afterglow-truffle-fries.webp",
  "Nightshade Flatbread":      "/images/nightshade-flatbread.webp",
  "The Sleepy Grilled Cheese": "/images/the-sleepy-grilled-cheese.webp",
  "Ember Corn Elotes":         "/images/ember-corn-elotes.webp",
  "Haze & Honey Popcorn":      "/images/haze-honey-popcorn.webp",
  "Nimbus Brownie":            "/images/nimbus-brownie.webp",
  "Celestial Blondie":         "/images/celestial-blondie.webp",
  "Lunar Cookie":              "/images/lunar-cookie.webp",
  "Drift Macarons (2pc)":      "/images/drift-macarons.webp",
  "Stardrift Churros":         "/images/stardrift-churros.webp",
};

export default async function MenuPage() {
  const sections = await getMenuBySection();

  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <section className="relative h-72 flex items-end overflow-hidden">
          <Image
            src="/images/hero-home.webp"
            alt="Cannabrew Co. menu"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f20]/90 via-[#0e2f20]/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-12">
            <p className="text-[#e8c93a] text-sm font-semibold uppercase tracking-widest mb-2">
              Cannabrew Co.
            </p>
            <h1 className="font-display font-black text-white text-5xl md:text-6xl leading-none">
              What We&apos;ve Got
            </h1>
          </div>
        </section>

        {/* Sticky category tabs */}
        <CategoryTabs sections={DISPLAY_SECTIONS} />

        {/* Legend */}
        <div className="bg-[#f7f2e8] border-b border-black/5 px-6 py-3">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 text-xs text-[#5a5a5a]">
            <span className="font-semibold text-[#1a1a1a]">A quick guide:</span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#edf7f1] text-[#225e3f] font-semibold">🌿 5mg</span>
              Gentle intro
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#d4edde] text-[#143d29] font-semibold">🌿🌿 10mg</span>
              The full experience
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f5e69b] text-[#c49a0a] font-semibold">🌱 Vegan</span>
              100% plant-based
            </span>
          </div>
        </div>

        {/* Menu sections */}
        <div className="bg-[#f7f2e8]">
          {sections.map(({ section, items }) => (
            <section
              key={section.id}
              id={section.id}
              className="py-16 px-6 border-b border-black/5 last:border-b-0 scroll-mt-32"
            >
              <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {/* Section header */}
                <div className="flex items-center gap-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0">
                    <Image
                      src={SECTION_IMAGES[section.id]}
                      alt={section.label}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#225e3f]">
                      {section.emoji} {section.categories.join(" · ")}
                    </p>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1a1a1a] leading-tight">
                      {section.label}
                    </h2>
                  </div>
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {items.map((item) => (
                    <MenuItemCard
                      key={item.name}
                      item={item}
                      imageSrc={ITEM_IMAGES[item.name] ?? SECTION_IMAGES[section.id]}
                    />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
