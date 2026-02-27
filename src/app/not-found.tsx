import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center gap-6 px-6 py-16">
      <h1 className="text-4xl font-display tracking-[0.14em] text-foreground/90">
        Page not found
      </h1>
      <p className="text-center text-sm leading-relaxed text-foreground/70">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Go home
      </Link>
    </div>
  );
}
