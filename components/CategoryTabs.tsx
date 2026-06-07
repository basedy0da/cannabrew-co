"use client";

import { useState, useEffect, useRef } from "react";
import type { DisplaySection } from "@/lib/menu";

type Props = { sections: DisplaySection[] };

export default function CategoryTabs({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 120;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="sticky top-[72px] z-[100] bg-white/95 backdrop-blur-sm border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
          {sections.map(({ id, label, emoji }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex-shrink-0 flex items-center gap-1.5 h-9 px-4 rounded-full text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                active === id
                  ? "bg-[#1a4d34] text-white"
                  : "text-[#5a5a5a] hover:text-[#1a4d34] hover:bg-[#edf7f1]"
              }`}
            >
              <span>{emoji}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
