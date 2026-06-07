'use client';

import { useState } from 'react';
import Image from 'next/image';
import StrengthBadge from './StrengthBadge';
import type { MenuItem } from '@/lib/menu';

type Props = {
  item: MenuItem;
  imageSrc: string;
};

export default function MenuItemCard({ item, imageSrc }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden group transition-shadow duration-200 hover:shadow-lg cursor-pointer"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); }}
        aria-label={`View details for ${item.name}`}
      >
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
              ₹{item.price}
            </span>
            <span className="text-xs text-[#8a8a8a]">{item.servingSize}</span>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className="relative aspect-[4/3] w-full shrink-0">
              <Image
                src={imageSrc}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, 512px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1a1a] hover:bg-white transition-colors shadow-md"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-4 p-6 overflow-y-auto">
              <span className="self-start text-xs font-semibold uppercase tracking-widest text-[#225e3f] bg-[#edf7f1] px-3 py-1 rounded-full">
                {item.category}
              </span>

              <h2 className="font-display font-bold text-2xl text-[#1a1a1a] leading-tight">
                {item.name}
              </h2>

              <p className="text-[#5a5a5a] text-base leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                <StrengthBadge thcMg={item.thcMg} />
                {item.vegan && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold leading-none bg-[#f5e69b] text-[#c49a0a]">
                    🌱 Vegan
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/5">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-[#8a8a8a] uppercase tracking-widest font-medium">Price</span>
                  <span className="font-mono font-bold text-lg text-[#1a1a1a]">₹{item.price}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-[#8a8a8a] uppercase tracking-widest font-medium">Serving</span>
                  <span className="font-semibold text-sm text-[#1a1a1a]">{item.servingSize}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-[#8a8a8a] uppercase tracking-widest font-medium">Prep Time</span>
                  <span className="font-semibold text-sm text-[#1a1a1a]">{item.prepTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
