"use client";

import { useState, useEffect } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const TIME_SLOTS: string[] = [];
for (let h = 8; h <= 21; h++) {
  TIME_SLOTS.push(`${h % 12 === 0 ? 12 : h % 12}:00 ${h < 12 ? "AM" : "PM"}`);
  if (h < 21)
    TIME_SLOTS.push(
      `${h % 12 === 0 ? 12 : h % 12}:30 ${h < 12 ? "AM" : "PM"}`
    );
}

export default function ReservationModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("2");
  const [date, setDate] = useState("");
  const [time, setTime] = useState(TIME_SLOTS[0]);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setSubmitted(false), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[400] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        {submitted ? (
          <div className="flex flex-col items-center text-center gap-4 p-10">
            <div className="text-5xl">☕</div>
            <h2 className="font-display font-bold text-2xl text-[#1a4d34]">
              Booking Confirmed!
            </h2>
            <p className="text-[#5a5a5a] leading-relaxed">
              We&apos;ve got a table reserved for{" "}
              <strong>{name}</strong>, party of <strong>{partySize}</strong> on{" "}
              <strong>{date}</strong> at <strong>{time}</strong>. See you soon!
            </p>
            <button
              onClick={onClose}
              className="mt-2 h-11 px-7 rounded-full bg-[#1a4d34] text-white font-semibold hover:bg-[#143d29] transition-colors duration-150"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="bg-[#1a4d34] px-8 py-6 flex items-center justify-between">
              <h2
                id="modal-title"
                className="font-display font-bold text-2xl text-white"
              >
                Reserve a Table
              </h2>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="res-name"
                  className="text-sm font-medium text-[#1a1a1a]"
                >
                  Name
                </label>
                <input
                  id="res-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 px-4 rounded-full border border-black/10 text-base text-[#1a1a1a] placeholder:text-[#8a8a8a] outline-none focus:border-[#1a4d34] focus:ring-2 focus:ring-[#1a4d34]/20 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="res-party"
                  className="text-sm font-medium text-[#1a1a1a]"
                >
                  Party Size
                </label>
                <select
                  id="res-party"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="h-11 px-4 rounded-full border border-black/10 text-base text-[#1a1a1a] outline-none focus:border-[#1a4d34] focus:ring-2 focus:ring-[#1a4d34]/20 transition-colors bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "person" : "people"}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="res-date"
                    className="text-sm font-medium text-[#1a1a1a]"
                  >
                    Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="h-11 px-4 rounded-full border border-black/10 text-base text-[#1a1a1a] outline-none focus:border-[#1a4d34] focus:ring-2 focus:ring-[#1a4d34]/20 transition-colors bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="res-time"
                    className="text-sm font-medium text-[#1a1a1a]"
                  >
                    Time
                  </label>
                  <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="h-11 px-4 rounded-full border border-black/10 text-base text-[#1a1a1a] outline-none focus:border-[#1a4d34] focus:ring-2 focus:ring-[#1a4d34]/20 transition-colors bg-white"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 h-12 rounded-full bg-[#1a4d34] text-white font-semibold text-base hover:bg-[#143d29] active:bg-[#0e2f20] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1a4d34]"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
