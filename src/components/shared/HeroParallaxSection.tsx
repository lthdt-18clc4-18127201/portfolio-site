"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useCallback, useMemo, useRef } from "react";
import type { MouseEvent } from "react";
import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { SocialLinkBlock } from "@/components/shared/SocialLinkBlock";

function throttle<A extends unknown[]>(
  fn: (...args: A) => void,
  ms: number,
): (...args: A) => void {
  let last = 0;
  let raf: number | null = null;
  return (...args: A) => {
    const now = Date.now();
    const elapsed = now - last;
    if (elapsed >= ms) {
      last = now;
      fn(...args);
    } else if (!raf) {
      raf = requestAnimationFrame(() => {
        raf = null;
        last = Date.now();
        fn(...args);
      });
    }
  };
}

const THROTTLE_MS = 32;

export function HeroParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.2,
  });

  const applyParallax = useMemo(
    () =>
      throttle((container: HTMLElement, clientX: number, clientY: number) => {
        const rect = container.getBoundingClientRect();
        const relativeX = (clientX - rect.left) / rect.width - 0.5;
        const relativeY = (clientY - rect.top) / rect.height - 0.5;
        const maxOffset = 18;
        const offsetX = relativeX * maxOffset;
        const offsetY = relativeY * maxOffset;
        container.style.setProperty(
          "--hero-bg-translate",
          `translate3d(${offsetX}px, ${offsetY}px, 0)`,
        );
      }, THROTTLE_MS),
    [],
  );

  const handleHeroMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const container = event.currentTarget;
      if (container) {
        applyParallax(container, event.clientX, event.clientY);
      }
    },
    [applyParallax],
  );

  const handleHeroMouseLeave = useCallback((event: MouseEvent<HTMLElement>) => {
    const container = event.currentTarget;
    if (container) {
      container.style.setProperty(
        "--hero-bg-translate",
        "translate3d(0px, 0px, 0)",
      );
    }
  }, []);

  const leftX = useTransform(smoothScrollProgress, [0, 1], [0, -180]);
  const rightX = useTransform(smoothScrollProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.7, 1],
    [1, 0.45, 0],
  );
  const socialOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.55, 1],
    [1, 0.35, 0],
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          transform: "var(--hero-bg-translate, translate3d(0px, 0px, 0))",
          transition: "transform 200ms ease-out",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-8 md:py-24">
        <motion.div
          className="flex-1 space-y-6 transition-[transform,opacity] duration-150 ease-out"
          style={{
            x: leftX,
            opacity: contentOpacity,
            willChange: "transform, opacity",
          }}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-foreground/60">
            Designer &amp; developer
          </p>
          <h1 className="text-5xl leading-tight tracking-[0.12em] sm:text-6xl md:text-7xl">
            Hi, I&apos;m Su Pham.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            Designer &amp; developer. I make clean, useful web experiences that
            people remember.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-md transition-[transform,opacity] duration-150 ease-out"
          style={{
            x: rightX,
            opacity: contentOpacity,
            willChange: "transform, opacity",
          }}
        >
          <div
            id="subscribe"
            className="rounded-3xl border border-foreground/10 bg-background px-5 py-6 shadow-sm"
          >
            <h2 className="section-title text-3xl font-display tracking-[0.2em]">
              Weekly <span className="section-title-accent">newsletter</span>
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-foreground/80">
              One short email each week with new projects, ideas, and small
              experiments.
            </p>
            <div className="mt-4">
              <NewsletterForm idSuffix="hero" layout="stacked" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto flex max-w-5xl flex-wrap justify-center gap-4 px-6 pb-16 transition-opacity duration-150 ease-out md:px-8 md:pb-24"
        style={{ opacity: socialOpacity, willChange: "opacity" }}
      >
        <SocialLinkBlock
          platform="facebook"
          href="https://www.facebook.com/supham1501"
          label="Facebook"
          description="Connect with me"
        />
        <SocialLinkBlock
          platform="zalo"
          href="https://zalo.me"
          label="Zalo"
          description="Chat with me"
          qrCodeSrc="/zalo/QRcode.png"
        />
        <SocialLinkBlock
          platform="linkedin"
          href="https://www.linkedin.com/in/s%E1%BB%B1-ph%E1%BA%A1m-t%E1%BA%A5n-1918a62a3/"
          label="LinkedIn"
          description="See My Work"
        />
        <SocialLinkBlock
          platform="topcv"
          href="/cv/Pham-Tan-Su-CV.pdf"
          label="My CV"
          description="Download Resume"
        />
      </motion.div>
    </section>
  );
}
