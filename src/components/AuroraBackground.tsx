"use client";

import { useEffect, useState } from "react";

export function AuroraBackground() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`site-aurora ${!isVisible ? "site-aurora--paused" : ""}`}
    >
      <div className="aurora-sparkle" />
    </div>
  );
}

