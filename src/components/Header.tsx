"use client";

import Link from "next/link";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#subscribe", label: "Subscribe" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 mt-0 shrink-0 glass-bar">
      <div className="mx-auto max-w-5xl px-6 py-5 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xs font-display tracking-[0.24em] md:text-sm"
            aria-label="Go to home page"
          >
            Su&apos;s Portfolio
          </Link>

          <nav aria-label="Main" className="flex-1">
            <ul className="flex items-center justify-center gap-6 text-[0.7rem] font-semibold tracking-[0.22em]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-full px-2 py-1 text-foreground/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
