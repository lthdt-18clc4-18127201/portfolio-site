import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  // REPLACE_ME: Update the Projects page title and description for SEO.
  title: "Projects — Su Pham",
  description:
    "A selection of projects by Su Pham — focused on clean, useful, and memorable web experiences.",
};

const projects = [
  {
    title: "Project A",
    summary:
      // REPLACE_ME: Replace with a real project description.
      "A concept for a calm, focused dashboard that stays out of the way.",
  },
  {
    title: "Project B",
    summary:
      "A marketing site for a small product, built around one clear CTA.",
  },
  {
    title: "Project C",
    summary:
      "An exploration of long-form storytelling layouts on the web.",
  },
  {
    title: "Project D",
    summary:
      "A compact tool that trims a multi-step workflow into a single screen.",
  },
  {
    title: "Project E",
    summary:
      "A concept library of interaction patterns for product teams to borrow.",
  },
  {
    title: "Project F",
    summary:
      "A small experiment in pairing bold typography with subtle motion.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
      <header className="max-w-2xl space-y-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
          {/* REPLACE_ME: Update or localize this label. */}
          Selected work
        </p>
        <h1 className="text-4xl leading-tight tracking-[0.14em] md:text-5xl">
          {/* REPLACE_ME: Update projects headline. */}
          Projects that stay simple.
        </h1>
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {/* REPLACE_ME: Replace with a real intro to your projects. */}
          This is a placeholder overview of projects. Swap this copy with a
          short description of the kind of work you like to do — client work,
          experiments, or long-term products.
        </p>
      </header>

      <section className="mt-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              summary={project.summary}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

