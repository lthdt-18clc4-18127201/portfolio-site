"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { workExperiences } from "@/lib/work-experience";
import { WorkExperienceCard } from "@/components/ui/WorkExperienceCard";

export function WorkExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleSwitch = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndex) return;
      setFading(true);
      setActiveIndex(newIndex);
      timeoutRef.current = setTimeout(() => {
        setDisplayIndex(newIndex);
        setFading(false);
      }, 300);
    },
    [activeIndex],
  );

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % workExperiences.length;
        setFading(true);
        setTimeout(() => {
          setDisplayIndex(next);
          setFading(false);
        }, 300);
        return next;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startAutoPlay]);

  function handleClick(index: number) {
    handleSwitch(index);
    startAutoPlay();
  }

  const displayed = workExperiences[displayIndex];

  return (
    <section id="experience" className="content-visibility-auto">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <h2 className="section-title mb-10 text-center text-4xl font-display tracking-[0.18em]">
          Work <span className="section-title-accent">Experience</span>
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-6">
          <div
            className="flex flex-1 flex-col justify-center space-y-4 text-left lg:h-[220px]"
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 300ms ease-in-out",
            }}
          >
            <p className="text-lg font-semibold text-accent">
              {displayed.company}
            </p>
            <p className="text-lg font-semibold text-accent">
              {displayed.role}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {displayed.mainResponsibility}
            </p>
          </div>

          <div
            className="relative shrink-0 lg:w-[420px]"
            style={{ perspective: "800px" }}
          >
            <div className="relative h-72 w-full">
              {workExperiences.map((exp, index) => {
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                const direction = index > activeIndex ? 1 : -1;
                const scale = isActive ? 1 : 1 - distance * 0.06;
                const yShift = isActive ? 0 : direction * distance * 20;
                const xShift = isActive ? 0 : -distance * 16;
                return (
                  <button
                    key={exp.company + exp.period}
                    type="button"
                    onClick={() => handleClick(index)}
                    className="absolute inset-x-0 top-1/2 w-full cursor-pointer appearance-none border-0 bg-transparent p-0 transition-all duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    style={{
                      zIndex: isActive ? 20 : 10 - distance,
                      transform: `translate(${xShift}px, calc(-50% + ${yShift}px)) scale(${scale})`,
                      opacity: isActive ? 1 : 0.25 - distance * 0.05,
                    }}
                  >
                    <WorkExperienceCard
                      period={exp.period}
                      company={exp.company}
                      role={exp.role}
                      logo={exp.logo}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
