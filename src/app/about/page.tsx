import type { Metadata } from "next";

export const metadata: Metadata = {
  // REPLACE_ME: Update the About page title and description for SEO.
  title: "About — Su Pham",
  description:
    "Learn more about Su Pham — background, highlights, and how the work comes together.",
};

const highlights: string[] = [
  // REPLACE_ME: Swap these with real highlights or achievements.
  "Led and shipped multiple small products from first sketch to launch.",
  "Balances visual design, UX, and implementation for end-to-end projects.",
  "Comfortable working across interfaces, systems, and tiny interaction details.",
  "Enjoys turning messy ideas into simple, memorable experiences.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-20">
      <header className="space-y-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
          {/* REPLACE_ME: Update or localize this label. */}
          About Su Pham
        </p>
        <h1 className="text-4xl leading-tight tracking-[0.14em] md:text-5xl">
          {/* REPLACE_ME: Update About headline. */}
          I build things people remember.
        </h1>
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {/* REPLACE_ME: Replace with a real short bio. */}
          This is a placeholder bio for Su Pham — a designer &amp; developer who
          enjoys working on focused, thoughtful web experiences. Swap this copy
          with a few lines about your background, what you care about, and how
          you like to work.
        </p>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="section-title text-3xl font-display tracking-[0.18em]">
          <span className="section-title-accent">Highlights</span>
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-foreground/80">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* REPLACE_ME: Link this button to a real resume file or external profile. */}
          Download resume
        </button>
      </section>
    </div>
  );
}

