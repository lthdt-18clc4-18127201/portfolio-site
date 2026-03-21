import Image from "next/image";

type WorkExperienceRowProps = {
  period: string;
  company: string;
  role: string;
  logo: string;
  mainResponsibility: string;
};

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.5 3a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h2.25a.75.75 0 0 0 .53-.22l4.72-4.72 2.47 2.47a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 0 0 0-1.06l-2.47-2.47 4.72-4.72a.75.75 0 0 0 .22-.53V3.75A.75.75 0 0 0 16.5 3H4.5Z" />
    </svg>
  );
}

export function WorkExperienceRow({
  period,
  company,
  role,
  logo,
  mainResponsibility,
}: WorkExperienceRowProps) {
  return (
    <article className="relative flex min-w-0 flex-col gap-6 overflow-hidden py-4 lg:flex-row lg:items-center lg:gap-8">
      <div className="relative flex flex-1 flex-col justify-center space-y-4 text-left">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent/90">
          {period}
        </p>
        <h3 className="text-2xl font-bold text-white sm:text-3xl">{company}</h3>
        <p className="text-sm font-medium text-white/70">{role}</p>

        <div
          className="relative z-10 max-w-xl rounded-2xl px-5 py-4 lg:-mr-16 lg:pr-20"
          style={{
            background: "rgba(28, 0, 43, 0.72)",
            border: "1px solid rgba(181, 74, 255, 0.2)",
            boxShadow:
              "0 4px 24px rgba(0, 0, 0, 0.25), 0 0 20px rgba(181, 74, 255, 0.08)",
            backdropFilter: "blur(12px) saturate(1.2)",
            WebkitBackdropFilter: "blur(12px) saturate(1.2)",
          }}
        >
          <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
            {mainResponsibility}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-2 text-white/50">
            <CursorIcon className="h-5 w-5" />
            <CursorIcon className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="relative order-first shrink-0 lg:order-last lg:w-[45%] lg:min-w-[320px]">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
          <Image
            src={logo}
            alt={`${company} logo`}
            fill
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, transparent 50%, rgba(0,0,0,0.15) 100%)",
            }}
          />
        </div>
      </div>
    </article>
  );
}
