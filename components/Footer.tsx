import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e2f20] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C9.5 4.5 6 7.5 6 11a6 6 0 0 0 5 5.91V22h2v-5.09A6 6 0 0 0 18 11c0-3.5-3.5-6.5-6-9z" fill="#e8c93a" opacity="0.9"/>
            </svg>
            <span className="font-display font-bold text-2xl text-white">
              Cannabrew<span className="text-[#e8c93a] font-normal"> Co.</span>
            </span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Your neighbourhood café, collective, and favourite excuse to leave
            the house. Park Road&apos;s best-kept (not so secret anymore) secret.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Visit Us
          </h3>
          <address className="not-italic flex flex-col gap-1 text-white/70 text-sm leading-relaxed">
            <span>Park Road</span>
            <span>Silchar, Assam 788001, India</span>
          </address>
          <div className="flex flex-col gap-1 text-white/70 text-sm">
            <span>Mon – Fri: 7:00 AM – 8:00 PM</span>
            <span>Sat – Sun: 8:00 AM – 9:00 PM</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
            Explore
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {[
              { label: "Home", href: "/" },
              { label: "Menu", href: "/menu" },
              { label: "About Us", href: "/about" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Cannabrew Collective. All rights reserved.</span>
          <span>Silchar, Assam</span>
        </div>
      </div>
    </footer>
  );
}
