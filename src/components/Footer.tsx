import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] md:items-start">
          <section aria-labelledby="footer-newsletter-heading">
            <h2
              id="footer-newsletter-heading"
              className="text-sm font-display tracking-[0.2em]"
            >
              Weekly newsletter
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/80">
              {/* REPLACE_ME: Update footer newsletter description. */}
              Short, focused notes on design, development, and projects —
              delivered once a week.
            </p>
            <div className="mt-5 max-w-md">
              <NewsletterForm idSuffix="footer" layout="stacked" />
            </div>
          </section>

          <section className="space-y-4 text-xs text-foreground/70">
            <p>
              {/* REPLACE_ME: Update footer copyright or legal text. */}
              © 2026 Su Pham. All rights reserved.
            </p>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-3">
                <li>
                  <Link
                    href="/about"
                    className="underline-offset-4 hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="underline-offset-4 hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </footer>
  );
}

