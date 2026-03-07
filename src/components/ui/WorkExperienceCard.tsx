import Image from "next/image";

type WorkExperienceCardProps = {
  period: string;
  company: string;
  role: string;
  logo: string;
};

export function WorkExperienceCard({
  period,
  company,
  role,
  logo,
}: WorkExperienceCardProps) {
  return (
    <article className="glass-panel relative flex min-w-0 flex-col overflow-hidden rounded-3xl text-left">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 20% 10%, rgba(0,245,212,0.35), transparent 60%), radial-gradient(ellipse 100% 70% at 80% 30%, rgba(66,182,255,0.3), transparent 55%), radial-gradient(ellipse 90% 60% at 50% 80%, rgba(51,255,154,0.2), transparent 50%)",
          animation: "card-aurora 8s ease-in-out infinite",
        }}
      />
      <div className="relative h-36 w-full shrink-0">
        <Image
          src={logo}
          alt={`${company} logo`}
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, transparent 18%, rgba(5,11,26,0.18) 38%, rgba(5,11,26,0.52) 58%, rgba(5,11,26,0.78) 78%, rgba(5,11,26,0.92) 100%)",
          }}
        />
      </div>

      <div className="flex flex-col gap-3 px-5 pb-5 pt-3">
        <h3 className="text-lg font-bold text-white">{company}</h3>
        <p className="text-xs leading-relaxed text-white/60">{role}</p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.6rem] font-medium text-white/70">
            {period}
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[0.6rem] font-medium text-white/70">
            {role.split("&")[0].trim()}
          </span>
        </div>

        <div className="mt-1">
          <span className="inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#060d1f]">
            View details
          </span>
        </div>
      </div>
    </article>
  );
}
