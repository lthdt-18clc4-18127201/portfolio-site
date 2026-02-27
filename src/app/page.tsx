import dynamic from "next/dynamic";
import Link from "next/link";
import { HeroParallaxSection } from "@/components/HeroParallaxSection";
import { ProjectCard } from "@/components/ProjectCard";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { projects } from "@/lib/projects";

const StacksMarquee = dynamic(
  () =>
    import("@/components/StacksMarquee").then((mod) => ({
      default: mod.StacksMarquee,
    })),
  { ssr: true },
);

export default function Home() {
  return (
    <>
      <HeroParallaxSection />

      <section>
        <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-display tracking-[0.18em]">
              My Stacks
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-foreground/80">
              Core tools I use to ship modern, production-ready web experiences.
            </p>
            <StacksMarquee />
          </div>
        </div>
      </section>

      <section className="content-visibility-auto">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
          <div className="relative flex items-baseline justify-center gap-4">
            <h2 className="text-4xl font-display tracking-[0.18em]">
              Projects I&apos;ve Worked On
            </h2>
            <Link
              href="/projects"
              className="absolute right-0 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                role={project.role}
                highlights={project.highlights}
                imageSrc={project.imageSrc}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <WorkExperienceSection />
    </>
  );
}
