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

      <section id="stacks">
        <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-12">
          <div className="space-y-4 text-center">
            <h2 className="section-title text-4xl font-display tracking-[0.18em]">
              My <span className="section-title-accent">Stacks</span>
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-foreground/80">
              Core tools I use to ship modern, production-ready web experiences.
            </p>
            <StacksMarquee />
          </div>
        </div>
      </section>

      <section id="projects" className="content-visibility-auto">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
          <div className="relative flex items-baseline justify-center gap-4">
            <h2 className="section-title text-4xl font-display tracking-[0.18em]">
              <span className="section-title-accent">Projects</span> I&apos;ve
              Worked On
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

      <section id="about" className="content-visibility-auto">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
          <header className="space-y-4 text-left md:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
              About Su Pham
            </p>
            <h2 className="text-3xl leading-tight tracking-[0.14em] md:text-4xl">
              I build things people remember.
            </h2>
            <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
              This is a placeholder bio for Su Pham — a designer &amp; developer
              who enjoys working on focused, thoughtful web experiences. Swap
              this copy with a few lines about your background, what you care
              about, and how you like to work.
            </p>
          </header>

          <section className="mt-10 space-y-4">
            <h3 className="section-title text-2xl font-display tracking-[0.18em]">
              <span className="section-title-accent">Highlights</span>
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-foreground/80">
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>
                  Led and shipped multiple small products from first sketch to
                  launch.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>
                  Balances visual design, UX, and implementation for
                  end-to-end projects.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>
                  Comfortable working across interfaces, systems, and tiny
                  interaction details.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>
                  Enjoys turning messy ideas into simple, memorable experiences.
                </span>
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <a
              href="/cv/Pham-Tan-Su-CV.pdf"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Download resume
            </a>
          </section>
        </div>
      </section>
    </>
  );
}
