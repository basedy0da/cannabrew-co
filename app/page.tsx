import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedItems from "@/components/FeaturedItems";
import EventsSection from "@/components/EventsSection";
import { getFeaturedItems } from "@/lib/menu";
import { UPCOMING_EVENTS } from "@/lib/events";

export default async function HomePage() {
  const featured = await getFeaturedItems();

  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <FeaturedItems items={featured} />
        <EventsSection events={UPCOMING_EVENTS} />
      </main>
      <Footer />
    </>
  );
}
