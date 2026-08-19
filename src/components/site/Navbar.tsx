import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { PHONE, PHONE_HREF } from "./constants";
import logoAsset from "@/assets/tirupati-logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "border-border shadow-soft" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Shri Tirupati Plumbing Contractor logo"
            width={40}
            height={40}
            className="size-10 shrink-0 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-charcoal uppercase sm:text-xl">
              Shri Tirupati
            </span>
            <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-primary uppercase">
              Plumbing Contractor
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-colors hover:bg-primary-dark sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {PHONE}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-charcoal lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-semibold text-charcoal last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" /> Call {PHONE}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
