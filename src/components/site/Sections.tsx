import {
  Award,
  CheckCircle2,
  Droplets,
  Handshake,
  Hammer,
  Mail,
  MessageSquare,
  Phone,
  PhoneCall,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS, EMAIL, EMAIL_HREF, OWNER, PHONE, PHONE_HREF } from "./constants";
import heroImg from "@/assets/hero-plumber.jpg";
import hero2Img from "@/assets/hero-2.jpg";
import hero3Img from "@/assets/hero-3.jpg";
import ownerImg from "@/assets/about-owner.jpg";
import pipesImg from "@/assets/pipes-work.jpg";
import logoAsset from "@/assets/tiru.jpeg";

const heroSlides = [
  {
    img: heroImg,
    tag: "Trusted Local Plumbing Contractor",
    title: (
      <>
        Reliable Plumbing <span className="text-primary">Solutions</span> You Can Trust
      </>
    ),
    text: `${BUSINESS} delivers professional plumbing services with dependable workmanship — from everyday repairs and pipe fitting to complete bathroom and water supply installations.`,
  },
  {
    img: hero2Img,
    tag: "Bathroom & Fixture Specialists",
    title: (
      <>
        Expert <span className="text-primary">Bathroom</span> Plumbing & Repairs
      </>
    ),
    text: "Complete bathroom plumbing, tap and shower fitting, and leak repairs finished neatly with genuine, long-lasting materials.",
  },
  {
    img: hero3Img,
    tag: "Water Supply & Tank Solutions",
    title: (
      <>
        Steady <span className="text-primary">Water Supply</span> For Every Home
      </>
    ),
    text: "Tank connections, motor lines and pipeline work laid accurately so your water supply keeps running without trouble.",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active] ?? heroSlides[0]!;

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      <div
        className="absolute inset-0 flex transition-transform duration-[900ms] ease-in-out"
        style={{
          width: `${heroSlides.length * 100}%`,
          transform: `translateX(-${(active * 100) / heroSlides.length}%)`,
        }}
        aria-hidden="true"
      >
        {heroSlides.map((s) => (
          <div key={s.tag} className="relative h-full" style={{ width: `${100 / heroSlides.length}%` }}>
            <img
              src={s.img}
              alt=""
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/80 to-charcoal/45" />
          </div>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase">
            <Droplets className="size-3.5" aria-hidden="true" /> {slide.tag}
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold text-charcoal-foreground uppercase sm:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-foreground/80 sm:text-lg">
            {slide.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              <Phone className="size-4" aria-hidden="true" /> Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal-foreground/30 px-7 py-3.5 text-sm font-bold text-charcoal-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Get a Quote
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-charcoal-foreground/20 pt-6">
            {[
              ["10+", "Years Experience"],
              ["24/7", "Quick Response"],
              ["100%", "Quality Work"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-bold text-primary">{k}</dt>
                <dd className="text-xs font-medium text-charcoal-foreground/70">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.tag}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-primary" : "w-2.5 bg-charcoal-foreground/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 right-4 hidden items-center gap-3 rounded-2xl bg-background/95 px-4 py-3 shadow-soft backdrop-blur lg:flex">
          <ShieldCheck className="size-8 text-primary" aria-hidden="true" />
          <p className="text-sm leading-tight font-semibold text-charcoal">
            Neat, honest work
            <span className="block text-xs font-medium text-muted-foreground">Guided by {OWNER}</span>
          </p>
        </div>
      </div>
    </section>
  );
}


export function About() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal order-2 lg:order-1">
          <img
            src={ownerImg}
            alt={`${OWNER}, owner of ${BUSINESS}`}
            loading="lazy"
            width={1008}
            height={1008}
            className="aspect-square w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div className="reveal order-1 lg:order-2">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal uppercase sm:text-4xl">
            A Plumbing Contractor Your Family Can Rely On
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {BUSINESS} is led by <strong className="text-charcoal">{OWNER}</strong>, a hands-on
            contractor known for careful, long-lasting plumbing work. Every job — big or small — is
            treated with the same attention: proper materials, tidy fitting and a clean site when we
            leave.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From homes and shops to new construction, we focus on clear pricing, honest advice and
            solutions that don't come back as problems.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Personally supervised jobs",
              "Genuine fittings & materials",
              "Transparent, fair pricing",
              "On-time, tidy service",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm font-semibold text-charcoal">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const services: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Wrench,
    title: "General Plumbing Services",
    text: "Everyday plumbing help for homes, shops and offices — taps, valves, fixtures and quick fixes.",
  },
  {
    icon: Hammer,
    title: "Plumbing Installation & Repair",
    text: "New fittings installed correctly and existing systems repaired to work like new again.",
  },
  {
    icon: Waves,
    title: "Pipe Fitting & Pipe Repair",
    text: "Accurate pipe laying, joint fitting and durable repairs using quality-grade materials.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Plumbing & Maintenance",
    text: "Complete bathroom plumbing, fixture setup and regular maintenance for trouble-free use.",
  },
  {
    icon: Droplets,
    title: "Water Supply & Leakage Solutions",
    text: "Leak detection, tank and line connections, and steady water supply across your property.",
  },
  {
    icon: Sparkles,
    title: "Drainage & Blockage Solutions",
    text: "Fast clearing of blocked drains and proper drainage work that prevents repeat problems.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel center>Our Services</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal uppercase sm:text-4xl">
            Complete Plumbing Services Under One Contractor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Practical, professional plumbing work handled end to end by {BUSINESS}.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="reveal group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lift"
            >
              <span className="inline-flex size-13 items-center justify-center rounded-2xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-charcoal">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Award, title: "Experienced Service", text: "Years of on-site plumbing experience across homes and commercial spaces." },
  { icon: ShieldCheck, title: "Reliable Solutions", text: "Fixes that hold up — proper diagnosis instead of temporary patchwork." },
  { icon: Hammer, title: "Quality Work", text: "Genuine materials, neat finishing and workmanship we stand behind." },
  { icon: Handshake, title: "Customer Satisfaction", text: "Clear communication, fair rates and respect for your home and time." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div className="reveal">
          <img
            src={pipesImg}
            alt="Neatly installed water pipes and fittings by Shri Tirupati Plumbing Contractor"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover shadow-soft"
          />
        </div>
        <div>
          <div className="reveal">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold text-charcoal uppercase sm:text-4xl">
              Professional Service, Every Single Job
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="reveal rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
              >
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold text-charcoal">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: PhoneCall, title: "Contact Us", text: "Call or send an enquiry with your plumbing issue." },
  { icon: MessageSquare, title: "Discuss Your Requirement", text: "We understand the work and share honest guidance." },
  { icon: Wrench, title: "Get the Solution", text: "A clear plan, timeline and fair estimate for the job." },
  { icon: CheckCircle2, title: "Complete the Work", text: "Work finished neatly, checked and handed over clean." },
];

export function Process() {
  return (
    <section className="bg-secondary/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel center>How It Works</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal uppercase sm:text-4xl">
            Getting Service Is Simple
          </h2>
        </header>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="reveal relative rounded-2xl border border-border bg-card p-7 text-center shadow-soft"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 font-display text-sm font-bold text-primary-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="mx-auto mt-3 size-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-charcoal">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="reveal mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold text-primary-foreground uppercase sm:text-4xl">
          Need a Reliable Plumbing Service?
        </h2>
        <p className="max-w-2xl text-primary-foreground/90">
          Talk to {OWNER} directly and get your plumbing problem solved the right way.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <Phone className="size-5" aria-hidden="true" /> Call {PHONE}
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="reveal mx-auto max-w-2xl text-center">
          <SectionLabel center>Contact</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal uppercase sm:text-4xl">
            Get a Quote or Book a Visit
          </h2>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <div className="reveal space-y-4">
            <a
              href={PHONE_HREF}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-primary/50"
            >
              <Phone className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Call Us
                </span>
                <span className="mt-1 block text-xl font-bold text-charcoal">{PHONE}</span>
              </span>
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-primary/50"
            >
              <Mail className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  Email Us
                </span>
                <span className="mt-1 block truncate text-base font-bold text-charcoal">
                  {EMAIL}
                </span>
              </span>
            </a>
            <div className="rounded-2xl bg-accent p-6">
              <p className="text-sm leading-relaxed font-semibold text-charcoal">
                {BUSINESS}
                <span className="mt-1 block font-medium text-muted-foreground">
                  Contact person: {OWNER}
                </span>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form
      className="reveal rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const body = [
          `Name: ${data.get("name")}`,
          `Phone: ${data.get("phone")}`,
          `Email: ${data.get("email")}`,
          `Service Required: ${data.get("service")}`,
          "",
          String(data.get("message") ?? ""),
        ].join("\n");
        window.location.href = `${EMAIL_HREF}?subject=${encodeURIComponent(
          "Plumbing Service Request",
        )}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your full name" required />
        <Field label="Phone" name="phone" type="tel" placeholder="Mobile number" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-semibold text-charcoal">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="h-11 rounded-xl border border-input bg-background px-3 text-sm text-charcoal outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about the plumbing work you need"
          className="rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition-colors hover:bg-primary-dark"
      >
        Submit Request
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-charcoal">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm text-charcoal outline-none placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="flex items-center gap-3 font-display text-xl font-bold uppercase">
            <img
              src={logoAsset.url}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="size-10 shrink-0 rounded-lg bg-background object-contain p-1"
            />
            {BUSINESS}
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-foreground/70">
            Professional plumbing installation, repair and maintenance services delivered with
            dependable workmanship.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-bold tracking-widest uppercase">Quick Links</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-charcoal-foreground/70">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Why Choose Us", "#why-us"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="transition-colors hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-charcoal-foreground/70">
            <li>{OWNER}</li>
            <li>
              <a href={PHONE_HREF} className="transition-colors hover:text-primary">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={EMAIL_HREF} className="break-all transition-colors hover:text-primary">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10 px-4 py-5 text-center text-xs text-charcoal-foreground/60">
        © 2026 Shri Tirupati Plumbing Contractor. All Rights Reserved.
      </div>
    </footer>
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-accent-foreground uppercase ${
        center ? "mx-auto" : ""
      }`}
    >
      {children}
    </span>
  );
}
