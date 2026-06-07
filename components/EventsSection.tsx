import type { Event } from "@/lib/events";
import ReserveTableButton from "./ReserveTableButton";

type Props = { events: Event[] };

export default function EventsSection({ events }: Props) {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#225e3f]">
            Stuff going down at Cannabrew Co.
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
            What&apos;s On
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="flex flex-col gap-4 bg-[#f7f2e8] rounded-2xl p-6 border border-black/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <span
                    className={`self-start text-xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1 ${
                      event.tag === "special"
                        ? "bg-[#e8c93a] text-[#0a2318]"
                        : "bg-[#d4edde] text-[#143d29]"
                    }`}
                  >
                    {event.tag === "special" ? "Special Event" : "Weekly"}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#1a1a1a] leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[#225e3f] font-medium">
                    {event.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#5a5a5a] leading-relaxed flex-1">
                {event.description}
              </p>

              <div className="flex flex-col gap-1.5 pt-3 border-t border-black/5">
                <div className="flex items-center gap-2 text-sm text-[#1a1a1a] font-medium">
                  <span>📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5a5a5a]">
                  <span>🕖</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5a5a5a]">
                  <span>🎟</span>
                  <span>{event.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#1a4d34] rounded-2xl px-8 py-6">
          <div className="flex-1">
            <p className="text-white font-semibold text-lg">
              Claiming a spot? Smart move.
            </p>
            <p className="text-white/60 text-sm mt-0.5">
              We fill up fast. Lock in a table before someone else does.
            </p>
          </div>
          <ReserveTableButton
            variant="primary"
            label="Reserve a Table"
            className="bg-[#e8c93a] text-[#0a2318] hover:bg-[#ddb012] shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
