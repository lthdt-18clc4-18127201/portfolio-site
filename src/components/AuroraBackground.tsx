 "use client";

import { useEffect } from "react";

export function AuroraBackground() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const maxOffset = 40;
      const offset = Math.max(
        Math.min(window.scrollY * 0.05, maxOffset),
        -maxOffset
      );

      document.documentElement.style.setProperty(
        "--aurora-scroll-y",
        `${offset}px`
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div aria-hidden="true" className="site-aurora" />;
}

