"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const ROW_1 = [
  { slug: "figma", name: "Figma" },
  { slug: "react", name: "React" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "redux", name: "Redux" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "css", name: "css" },
] as const;

const ROW_2 = [
  { slug: "nextdotjs", name: "Next.js", color: "ffffff" },
  { slug: "typescript", name: "Typescript" },
  { slug: "express", name: "Express.js", color: "ffffff" },
  { slug: "mongodb", name: "MongoDB" },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

function StackIcon({
  slug,
  name,
  color,
}: {
  slug: string;
  name: string;
  color?: string;
}) {
  const iconUrl = color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;
  return (
    <div
      className="group relative flex size-14 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background/90 shadow-[0_0_12px_rgba(181,74,255,0.25)] transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(181,74,255,0.4)] sm:size-16"
      title={name}
    >
      <Image
        src={iconUrl}
        alt=""
        width={28}
        height={28}
        className="h-7 w-7 sm:h-8 sm:w-8"
        unoptimized
      />
    </div>
  );
}

export function StacksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="stacks-section relative mx-auto max-w-3xl rounded-2xl px-6 py-12 md:px-8 md:py-16">
      <div className="space-y-10 text-center">
        <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
          I&apos;m currently looking to join a{" "}
          <span className="font-semibold text-accent">cross-functional</span>{" "}
          team
        </p>
        <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
          that values improving people&apos;s lives through accessible design
        </p>

        <motion.div
          ref={containerRef}
          className="relative mx-auto flex flex-col items-center gap-8 pt-4"
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={
            prefersReducedMotion ? "visible" : isInView ? "visible" : "hidden"
          }
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {ROW_1.map((item) => (
              <motion.div key={item.slug} variants={iconVariants}>
                <StackIcon slug={item.slug} name={item.name} />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {ROW_2.map((item) => (
              <motion.div key={item.slug} variants={iconVariants}>
                <StackIcon
                  slug={item.slug}
                  name={item.name}
                  color={"color" in item ? item.color : undefined}
                />
              </motion.div>
            ))}
          </div>

          <svg
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-full max-w-2xl -translate-x-1/2 translate-y-full opacity-70"
            viewBox="0 0 400 80"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <linearGradient
                id="stacks-line-glow"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="rgb(181,74,255)"
                  stopOpacity="0.9"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(181,74,255)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
            {/* Row 1 lines - 7 icons */}
            <line
              x1="40"
              y1="0"
              x2="180"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="90"
              y1="0"
              x2="185"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="140"
              y1="0"
              x2="190"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="260"
              y1="0"
              x2="210"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="310"
              y1="0"
              x2="215"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="360"
              y1="0"
              x2="220"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Row 2 lines - 6 icons, offset */}
            <line
              x1="70"
              y1="40"
              x2="195"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="130"
              y1="40"
              x2="198"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="190"
              y1="40"
              x2="200"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="250"
              y1="40"
              x2="202"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="310"
              y1="40"
              x2="205"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="330"
              y1="40"
              x2="208"
              y2="75"
              stroke="url(#stacks-line-glow)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
