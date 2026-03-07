"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ScrollFadeSectionProps = PropsWithChildren<
  Omit<ComponentPropsWithoutRef<typeof motion.section>, "children">
>;

export function ScrollFadeSection({
  children,
  className,
  ...props
}: ScrollFadeSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.24,
  });

  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.75, 1],
    [0, 1, 1, 0],
  );
  const y = useTransform(smoothProgress, [0, 0.2, 1], [36, 0, -24]);

  return (
    <motion.section
      ref={sectionRef}
      className={className}
      style={
        prefersReducedMotion
          ? undefined
          : { opacity, y, willChange: "transform, opacity" }
      }
      {...props}
    >
      {children}
    </motion.section>
  );
}
