"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const STACKS = [
  {
    name: "Next.js (App Router)",
    icon: "nextdotjs",
    docs: "https://nextjs.org/docs",
  },
  { name: "React", icon: "react", docs: "https://react.dev" },
  {
    name: "TypeScript",
    icon: "typescript",
    docs: "https://www.typescriptlang.org/docs",
  },
  {
    name: "Tailwind CSS v4",
    icon: "tailwindcss",
    docs: "https://tailwindcss.com/docs",
  },
  {
    name: "Modern CSS / Animations",
    icon: "css",
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "ESLint & Best Practices",
    icon: "eslint",
    docs: "https://eslint.org/docs",
  },
  { name: "Vercel", icon: "vercel", docs: "https://vercel.com/docs" },
  {
    name: "NodeJS",
    icon: "nodedotjs",
    docs: "https://nodejs.org/docs/latest/api/",
  },
] as const;

const ICON_COLOR = "f8fafc";

function StackCapsule({ name, icon, docs }: (typeof STACKS)[number]) {
  return (
    <li className="shrink-0">
      <a
        href={docs}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/80 transition-transform hover:scale-105 hover:border-foreground/40"
      >
        <Image
          src={`https://cdn.simpleicons.org/${icon}/${ICON_COLOR}`}
          alt=""
          width={20}
          height={20}
          aria-hidden
          className="h-5 w-5"
          unoptimized
        />
        {name}
      </a>
    </li>
  );
}

export function StacksMarquee() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className={`marquee mt-2 ${!isVisible ? "marquee--paused" : ""}`}>
      <ul className="marquee__track">
        {STACKS.map((stack) => (
          <StackCapsule key={stack.name} {...stack} />
        ))}
        {STACKS.map((stack) => (
          <StackCapsule key={`${stack.name}-dup`} {...stack} />
        ))}
      </ul>
    </div>
  );
}
