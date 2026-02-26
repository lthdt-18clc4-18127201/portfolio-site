"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Project A",
    summary:
      // REPLACE_ME: Swap this text with a real project summary.
      "A placeholder project description focused on a memorable web experience.",
  },
  {
    title: "Project B",
    summary:
      "Another sample project exploring clean layouts, motion, and typography.",
  },
  {
    title: "Project C",
    summary:
      "A concept piece combining bold visuals with a minimal interaction model.",
  },
  {
    title: "Project D",
    summary:
      "A prototype interface designed to keep complex workflows simple and clear.",
  },
  {
    title: "Project E",
    summary:
      "An experiment in storytelling-driven product pages with focused CTAs.",
  },
  {
    title: "Project F",
    summary:
      "A small utility tool that turns repetitive tasks into a smooth flow.",
  },
];

export default function Home() {
  const handleHeroMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();

    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    const maxOffset = 18; // Maximum movement in pixels for subtle parallax

    const offsetX = relativeX * maxOffset;
    const offsetY = relativeY * maxOffset;

    container.style.setProperty(
      "--hero-bg-translate",
      `translate3d(${offsetX}px, ${offsetY}px, 0)`,
    );
  };

  const handleHeroMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty(
      "--hero-bg-translate",
      "translate3d(0px, 0px, 0)",
    );
  };

  return (
    <>
      <section
        className="relative overflow-hidden"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            // backgroundImage: 'url("/foreground_bg.webp")',
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            transform: "var(--hero-bg-translate, translate3d(0px, 0px, 0))",
            transition: "transform 200ms ease-out",
          }}
        />

        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-8 md:py-24">
          <div className="flex-1 space-y-6">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
              {/* REPLACE_ME: Update this role line. */}
              Designer &amp; developer
            </p>
            <h1 className="text-5xl leading-tight tracking-[0.12em] sm:text-6xl md:text-7xl">
              {/* REPLACE_ME: Update hero headline copy. */}
              Hi, I&apos;m Su Pham.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
              {/* REPLACE_ME: Update this short description. */}
              Designer &amp; developer. I make clean, useful web experiences
              that people remember.
            </p>
          </div>

          <div className="w-full max-w-md">
            <div
              id="subscribe"
              className="rounded-3xl border border-foreground/10 bg-background px-5 py-6 shadow-sm"
            >
              <h2 className="text-sm font-display tracking-[0.2em]">
                Weekly newsletter
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-foreground/80">
                {/* REPLACE_ME: Update newsletter pitch. */}
                One short email each week with new projects, ideas, and small
                experiments.
              </p>
              <div className="mt-4">
                <NewsletterForm idSuffix="hero" layout="stacked" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <div className="space-y-4">
            <h2 className="text-md font-display tracking-[0.8em]">My Stacks</h2>
            <p className="max-w-xl text-xs leading-relaxed text-foreground/80">
              Core tools I use to ship modern, production-ready web experiences.
            </p>
            <ul className="mt-2 flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em]">
              <li className="rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-foreground/80">
                Next.js (App Router)
              </li>
              <li className="rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-foreground/80">
                React
              </li>
              <li className="rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-foreground/80">
                TypeScript
              </li>
              <li className="rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-foreground/80">
                Tailwind CSS v4
              </li>
              <li className="rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-foreground/80">
                Modern CSS / Animations
              </li>
              <li className="rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-foreground/80">
                ESLint &amp; Best Practices
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-display tracking-[0.18em]">
              Selected projects
            </h2>
            <Link
              href="/projects"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                summary={project.summary}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
