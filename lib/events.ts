export type Event = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  price: string;
  description: string;
  tag: "weekly" | "special";
};

export const UPCOMING_EVENTS: Event[] = [
  {
    id: "open-mic-jun-13",
    title: "Open Mic Night",
    subtitle: "Every Friday Evening",
    date: "Fri, Jun 13",
    time: "7:00 PM – 10:00 PM",
    price: "₹200 cover",
    description:
      "Grab your drink, find a spot, and watch what happens when people actually show up for each other. Live music, spoken word, the occasional set that'll genuinely surprise you. All genres, all skill levels, zero judgement.",
    tag: "weekly",
  },
  {
    id: "coffee-tasting-jun-14",
    title: "Coffee Tasting Session",
    subtitle: "Every Saturday Morning",
    date: "Sat, Jun 14",
    time: "10:00 AM – 12:00 PM",
    price: "₹800 per person",
    description:
      "Our head roaster takes you through five single-origin coffees — from a bright Ethiopian natural to something that'll make you rethink every cup you've ever had. Tasting notes included. Rabbit holes encouraged.",
    tag: "weekly",
  },
  {
    id: "open-mic-jun-20",
    title: "Open Mic Night",
    subtitle: "Every Friday Evening",
    date: "Fri, Jun 20",
    time: "7:00 PM – 10:00 PM",
    price: "₹200 cover",
    description:
      "Back again, because it keeps filling up. Whether you've been performing for years or this is your very first time holding a mic — the Cannabrew crowd is the most welcoming room in Silchar. Probably in Assam, honestly.",
    tag: "weekly",
  },
  {
    id: "coffee-tasting-jun-21",
    title: "Coffee Tasting Session",
    subtitle: "Every Saturday Morning",
    date: "Sat, Jun 21",
    time: "10:00 AM – 12:00 PM",
    price: "₹800 per person",
    description:
      "This week we're featuring a rare Gesha from a small farm in Coorg alongside our rotating house single-origins. If that sentence didn't mean anything to you yet — it will by the end of the session.",
    tag: "weekly",
  },
  {
    id: "pour-over-masterclass",
    title: "Pour-Over Masterclass",
    subtitle: "Special Event",
    date: "Sat, Jun 28",
    time: "11:00 AM – 1:00 PM",
    price: "₹1,500 per person",
    description:
      "Maya leads this one herself. Grind size, water temperature, bloom technique, pour rhythm — all of it, hands-on. You'll leave knowing exactly what you're doing and take home a 250g bag of our house blend. Seats are limited, so don't sit on it.",
    tag: "special",
  },
];
