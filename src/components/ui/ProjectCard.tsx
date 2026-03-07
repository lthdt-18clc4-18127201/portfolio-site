import Image from "next/image";

const PROJECT_CARD_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

type ProjectCardProps = {
  title: string;
  role: string;
  highlights: string;
  imageSrc?: string;
  priority?: boolean;
};

export function ProjectCard({
  title,
  role,
  highlights,
  imageSrc,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 bg-background p-6 transition-transform hover:-translate-y-1 hover:border-accent focus-within:border-accent">
      <div className="mb-4 aspect-video w-full shrink-0" aria-hidden="true" />

      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-2xl transition-[clip-path] duration-300 ease-out [clip-path:inset(0_0_60%_0)] group-hover:[clip-path:inset(0_0_0_0)]"
        aria-hidden="true"
      >
        {imageSrc ? (
          <>
            <div className="absolute inset-4 rounded-xl overflow-hidden transition-[top,right,bottom,left] duration-300 ease-out group-hover:inset-0 group-hover:rounded-2xl">
              <Image
                src={imageSrc}
                alt=""
                fill
                sizes={PROJECT_CARD_SIZES}
                priority={priority}
                className="rounded-xl object-cover"
              />
            </div>
            <div
              className="absolute inset-0 rounded-2xl bg-linear-to-b from-transparent from-40% via-transparent via-50% to-background to-100%"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 rounded-2xl bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-foreground/20 bg-foreground/5 text-[0.65rem] font-semibold tracking-[0.26em] text-foreground/40">
            PROJECT IMAGE
          </div>
        )}
      </div>

      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-display tracking-[0.16em] text-foreground/90 transition-colors duration-300 group-hover:text-foreground group-hover:drop-shadow-[0_0_8px_rgba(248,250,252,0.5)]">
          {title}
        </h3>
        <p className="text-sm font-medium text-foreground/90 transition-colors duration-300 group-hover:text-foreground group-hover:drop-shadow-[0_0_6px_rgba(248,250,252,0.4)]">
          {role}
        </p>
        <p className="text-sm leading-relaxed text-foreground/80 transition-colors duration-300 group-hover:text-foreground group-hover:drop-shadow-[0_0_6px_rgba(248,250,252,0.4)]">
          {highlights}
        </p>
      </div>

      <div className="relative z-10 mt-4">
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent transition-colors hover:border-accent hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          View Project
        </button>
      </div>
    </article>
  );
}
