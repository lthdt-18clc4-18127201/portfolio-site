"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types";

const INTERVAL_MS = 4000;

type ProjectsSliderProps = {
  projects: readonly Project[];
};

function getIndices(center: number, total: number) {
  const prev = (center - 1 + total) % total;
  const next = (center + 1) % total;
  return { prev, center, next };
}

export function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const [current, setCurrent] = useState(0);
  const n = projects.length;
  const { prev, center, next } = getIndices(current, n);

  useEffect(() => {
    if (n <= 1) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % n);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [n]);

  if (n === 0) return null;

  const renderSlot = (index: number, isCenter: boolean) => {
    const project = projects[index];
    return (
      <div
        key={isCenter ? `center-${current}` : `side-${index}`}
        className={`flex shrink-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isCenter
            ? "z-10 scale-100 opacity-100 slider-card-enter"
            : "z-0 scale-[0.88] opacity-60"
        }`}
      >
        <div className="w-full min-w-[260px] max-w-[340px] mx-auto">
          <ProjectCard
            title={project.title}
            role={project.role}
            highlights={project.highlights}
            imageSrc={project.imageSrc}
            priority={isCenter}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex items-center justify-center gap-4 overflow-hidden px-2 py-4">
      {renderSlot(prev, false)}
      {renderSlot(center, true)}
      {renderSlot(next, false)}
    </div>
  );
}
