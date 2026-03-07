import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { lazyComponent } from "@/lib/lazy";

const ProjectsGrid = lazyComponent(
  () =>
    import("@/components/shared/ProjectsGrid").then((m) => ({
      default: m.ProjectsGrid,
    })),
  { ssr: true, minHeight: "400px" },
);

export const metadata: Metadata = {
  // REPLACE_ME: Update the Projects page title and description for SEO.
  title: "Projects — Su Pham",
  description:
    "A selection of projects by Su Pham — focused on clean, useful, and memorable web experiences.",
};

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
        <ProjectsGrid projects={projects} />
      </section>
    </div>
  );
}

