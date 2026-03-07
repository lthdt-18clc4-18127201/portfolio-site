import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard — Su Pham",
  description: "Portfolio dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-20">
      <h1 className="text-4xl font-display tracking-[0.14em]">
        Dashboard
      </h1>
      <p className="mt-4 text-foreground/80">
        Placeholder for future dashboard content.
      </p>
    </div>
  );
}
