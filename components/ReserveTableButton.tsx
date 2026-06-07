"use client";

import { useState } from "react";
import ReservationModal from "./ReservationModal";

type Props = {
  variant?: "primary" | "outline" | "ghost";
  label?: string;
  className?: string;
};

export default function ReserveTableButton({
  variant = "primary",
  label = "Reserve a Table",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);

  const base =
    "inline-flex items-center justify-center h-11 px-5 rounded-full font-semibold text-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a4d34] cursor-pointer";

  const styles = {
    primary: "bg-[#1a4d34] text-white hover:bg-[#143d29]",
    outline:
      "border border-[#1a4d34] text-[#1a4d34] bg-transparent hover:bg-[#1a4d34]/5",
    ghost: "border border-white/30 text-white bg-transparent hover:bg-white/10",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {label}
      </button>
      <ReservationModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
