import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const reviews = [
  { name: "Rahul Deshmukh", place: "Pune", text: "Fixed a long-standing leakage in our bathroom within an hour. Very neat work and fair pricing." },
  { name: "Sunita Patil", place: "Nashik", text: "Bandu ji personally supervised the pipe fitting in our new house. Everything is working perfectly." },
  { name: "Amit Jadhav", place: "Sangli", text: "Our drainage was blocked for days. They cleared it properly and explained how to avoid it again." },
  { name: "Meena Kulkarni", place: "Satara", text: "Very polite team. They covered the floor before starting and cleaned everything after finishing." },
  { name: "Prakash Shinde", place: "Kolhapur", text: "Complete bathroom plumbing done at a reasonable rate. Quality fittings were used throughout." },
  { name: "Vishal More", place: "Solapur", text: "Called late evening for a burst pipe and they came quickly. Truly a reliable local contractor." },
  { name: "Anjali Gaikwad", place: "Baramati", text: "Water tank connection and motor line fitted neatly. No leakage even after the monsoon." },
  { name: "Santosh Pawar", place: "Ahmednagar", text: "Honest advice — they repaired instead of pushing me to replace the whole line. Saved a lot." },
  { name: "Kavita Bhosale", place: "Latur", text: "Tap and shower installation was done in one visit. Work quality is genuinely good." },
  { name: "Ganesh Chavan", place: "Beed", text: "Handled plumbing for our shop renovation on time. Very professional and dependable." },
  { name: "Pooja Sawant", place: "Wai", text: "They found a hidden leak that two other plumbers missed. Highly recommended for tough jobs." },
  { name: "Nitin Kadam", place: "Karad", text: "Fair rates, clear estimate before starting, and no extra charges later. Will call them again." },
  { name: "Shubham Salunkhe", place: "Phaltan", text: "Village home water supply line laid perfectly. Strong work that will last for years." },
];

export function Reviews() {
  const isMobile = useIsMobile();
  const perView = isMobile ? 1 : 3;
  const maxIndex = reviews.length - perView;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [perView]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 3500);
    return () => clearInterval(id);
  }, [maxIndex]);

  return (
    <section id="reviews" className="bg-secondary/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-[0.16em] text-accent-foreground uppercase">
            Customer Reviews
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-charcoal uppercase sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by families, shops and builders across Maharashtra.
          </p>
        </header>

        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              width: `${(reviews.length * 100) / perView}%`,
              transform: `translateX(-${(index * 100) / reviews.length}%)`,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="px-3"
                style={{ width: `${100 / reviews.length}%`, flexShrink: 0 }}
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <Quote className="size-8 text-primary/40" aria-hidden="true" />
                  <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{r.text}”
                  </p>
                  <footer className="mt-5 border-t border-border pt-4">
                    <p className="text-sm font-bold text-charcoal">{r.name}</p>
                    <p className="text-xs font-medium text-muted-foreground">{r.place}</p>
                  </footer>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show review set ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-7 bg-primary" : "w-2 bg-charcoal/20 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
