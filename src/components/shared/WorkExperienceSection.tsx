"use client";

import { workExperiences } from "@/lib/work-experience";
import { WorkExperienceRow } from "@/components/ui/WorkExperienceRow";

export function WorkExperienceSection() {
  return (
    <section id="experience" className="content-visibility-auto">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
        <h2 className="section-title mb-10 text-center text-4xl font-display tracking-[0.18em]">
          Work <span className="section-title-accent">Experience</span>
        </h2>

        <div className="flex flex-col gap-6">
          {workExperiences.map((exp) => (
            <WorkExperienceRow
              key={exp.company + exp.period}
              period={exp.period}
              company={exp.company}
              role={exp.role}
              logo={exp.logo}
              mainResponsibility={exp.mainResponsibility}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
