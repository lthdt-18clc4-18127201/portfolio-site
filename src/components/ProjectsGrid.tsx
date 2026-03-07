import { ProjectCard } from "@/components/ProjectCard";
import type { projects as projectsType } from "@/lib/projects";

type Project = (typeof projectsType)[number];

type ProjectsGridProps = {
  projects: readonly Project[];
  /** First N cards get priority image loading (e.g. 1 for above-the-fold). */
  priorityCount?: number;
};

export function ProjectsGrid({
  projects,
  priorityCount = 0,
}: ProjectsGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          role={project.role}
          highlights={project.highlights}
          imageSrc={project.imageSrc}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
