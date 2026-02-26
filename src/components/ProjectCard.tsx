type ProjectCardProps = {
  title: string;
  summary: string;
};

export function ProjectCard({ title, summary }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-foreground/10 bg-background p-6 transition-transform hover:-translate-y-1 hover:border-accent focus-within:border-accent">
      <div
        className="mb-4 aspect-[16/9] w-full rounded-xl border border-dashed border-foreground/20"
        aria-hidden="true"
      >
        <div className="flex h-full items-center justify-center text-[0.65rem] font-semibold tracking-[0.26em] text-foreground/40">
          {/* REPLACE_ME: Replace with a real project image or thumbnail. */}
          PROJECT IMAGE
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-display tracking-[0.16em]">{title}</h3>
        <p className="text-sm leading-relaxed text-foreground/80">{summary}</p>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* REPLACE_ME: Wire this button to a real project detail page or external link. */}
          View Project
        </button>
      </div>
    </article>
  );
}

