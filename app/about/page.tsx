import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ReserveTableButton from "@/components/ReserveTableButton";

export const metadata: Metadata = {
  title: "About Us — Cannabrew Co.",
  description:
    "Meet Maya and James, the two slightly obsessed people behind Cannabrew Co. A story about really good coffee, found community, and Park Road, Silchar.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
          <Image
            src="/images/hero-about.webp"
            alt="Inside Cannabrew Co. café"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e2f20]/90 via-[#0e2f20]/40 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
            <p className="text-[#e8c93a] text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h1 className="font-display font-black text-white text-5xl md:text-6xl leading-tight max-w-xl">
              Two obsessives, one very good idea.
            </h1>
          </div>
        </section>

        {/* Founders */}
        <section className="bg-[#f7f2e8] py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#225e3f]">
                The Humans Behind It
              </p>
              <h2 className="font-display font-bold text-4xl text-[#1a1a1a] leading-tight">
                Maya & James
              </h2>
              <div className="flex flex-col gap-4 text-[#5a5a5a] text-base leading-relaxed">
                <p>
                  Maya grew up in Chikmagalur — the coffee heartland of
                  Karnataka, where the air genuinely smells of roasted beans if
                  the wind is right. She trained as a Q-grader, spent years
                  hunting down interesting single-origins across India, and
                  eventually followed an odd gut feeling all the way to Silchar.
                  She still hasn&apos;t left, and she doesn&apos;t seem too bothered about it.
                </p>
                <p>
                  James is from Silchar. Born here, raised here, and — despite
                  what everyone kept telling him about leaving — still very much
                  here. He spent years in kitchens across Northeast India
                  quietly perfecting the food side of things: the kind of dish
                  that makes you forget your own name, the pastry that causes
                  actual silence at the table. He and Maya crossed paths at a
                  coffee tasting in Guwahati in 2019, and by 2020 they were
                  arguing over floor plans on napkins.
                </p>
                <p>
                  Cannabrew Co. opened on a rainy Thursday in March 2021.
                  The neighbourhood showed up before they&apos;d even figured out
                  the WiFi password. Four years on, it still feels like the best
                  thing to happen to Park Road — part café, part collective,
                  entirely its own thing.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/founder-maya.webp"
                  alt="Maya Chen, co-founder of Cannabrew Co."
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">Maya Chen</p>
                  <p className="text-white/70 text-xs">Coffee Director</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/founder-james.webp"
                  alt="James O'Brien, co-founder of Cannabrew Co."
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">James O&apos;Brien</p>
                  <p className="text-white/70 text-xs">Culinary Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-[#1a4d34] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span className="text-[#e8c93a] text-4xl font-display font-black leading-none">
              &ldquo;
            </span>
            <blockquote className="font-display font-bold text-white text-3xl md:text-4xl leading-snug">
              We didn&apos;t want to open just another café. We wanted somewhere
              you&apos;d actually want to spend a Tuesday afternoon — where
              the coffee is taken seriously, but nobody ever makes you feel
              like an outsider.
            </blockquote>
            <cite className="text-white/60 text-sm not-italic tracking-widest uppercase">
              — Maya, Co-founder
            </cite>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#225e3f]">
                What we actually care about
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a]">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🌱",
                  title: "Quality",
                  body: "We chase down the best single-origin beans we can find, roast small, and refuse to cut corners — even when it would be much easier and cheaper to do so. Your cup deserves the effort.",
                },
                {
                  emoji: "🤝",
                  title: "Community",
                  body: "Open mics, tasting sessions, random pop-ups, people who've become regulars and then friends. This space belongs to whoever walks through the door. We just make the drinks.",
                },
                {
                  emoji: "♻️",
                  title: "Sustainability",
                  body: "Compostable packaging, food-waste tie-ups, and a second life for spent grounds. We're not perfect at this — but we're genuinely, actively trying.",
                },
              ].map(({ emoji, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 p-8 bg-[#f7f2e8] rounded-2xl"
                >
                  <span className="text-4xl">{emoji}</span>
                  <h3 className="font-display font-bold text-2xl text-[#1a1a1a]">
                    {title}
                  </h3>
                  <p className="text-[#5a5a5a] text-base leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#f7f2e8] py-20 px-6">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="font-display font-bold text-4xl text-[#1a1a1a]">
              Come say hi. Or just come.
            </h2>
            <p className="text-[#5a5a5a] text-lg leading-relaxed">
              We&apos;re open seven days a week. No agenda needed — pull up a
              chair, order something you&apos;ve never tried before, and let the
              afternoon go wherever it wants.
            </p>
            <ReserveTableButton
              variant="primary"
              label="Reserve a Table"
              className="h-12 px-8 text-base"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
