import Image from "next/image";
import Link from "next/link";
import ReserveTableButton from "./ReserveTableButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <Image
        src="/images/hero-home.webp"
        alt="Cannabrew Co. café interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d34]/60 via-[#1a4d34]/50 to-[#0e2f20]/90" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-32 flex flex-col gap-8 md:max-w-3xl md:mx-0 md:ml-[max(1.5rem,calc((100vw-80rem)/2))]">
        <div className="flex flex-col gap-3">
          <p className="text-[#e8c93a] text-sm font-semibold uppercase tracking-widest">
            Cannabrew Collective · Park Road, Silchar
          </p>
          <h1 className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight">
            Your Café.<br />
            Your Crew.<br />
            Your Vibe.
          </h1>
        </div>
        <p className="text-white/75 text-lg leading-relaxed max-w-md">
          Seriously good coffee and food that&apos;ll make you want to stay way
          longer than planned. Come alone, bring the whole group, or just park
          yourself by the window. No agenda required — this place is yours.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-[#e8c93a] text-[#0a2318] font-semibold text-base hover:bg-[#ddb012] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8c93a]"
          >
            See What&apos;s Brewing
          </Link>
          <ReserveTableButton variant="ghost" className="h-12 px-7 text-base" />
        </div>
      </div>
    </section>
  );
}
