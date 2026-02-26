import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#subscribe", label: "Subscribe" },
];

export function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="text-xl font-display tracking-[0.24em]"
          aria-label="Go to home page"
        >
          {/* REPLACE_ME: Update logo text or replace with a real logo. */}
          Su Pham
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-[0.7rem] font-semibold tracking-[0.22em]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-1 py-1 text-foreground/70 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

