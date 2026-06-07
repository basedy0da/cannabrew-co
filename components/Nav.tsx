"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReserveTableButton from "./ReserveTableButton";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-5xl">
      <nav
        className={`flex items-center justify-between h-14 px-5 md:px-7 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#143d29] shadow-xl"
            : "bg-[#1a4d34]/95 backdrop-blur-md shadow-lg"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 group"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#e8c93a] transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          >
            <path
              d="M12 2C9.5 4.5 6 7.5 6 11a6 6 0 0 0 5 5.91V22h2v-5.09A6 6 0 0 0 18 11c0-3.5-3.5-6.5-6-9z"
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d="M12 11 Q10 14 8 13 Q10 10 12 11z M12 11 Q14 14 16 13 Q14 10 12 11z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
          <span className="font-display font-bold text-lg text-white tracking-tight leading-none">
            Cannabrew<span className="text-[#e8c93a] font-normal"> Co.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                  pathname === href
                    ? "bg-white/20 text-white"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ReserveTableButton variant="ghost" label="Reserve a Table" />
      </nav>
    </header>
  );
}
