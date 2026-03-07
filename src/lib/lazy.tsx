import dynamic from "next/dynamic";
import { LazyFallback } from "@/components/LazyFallback";

type DynamicOptions = {
  ssr?: boolean;
  /** Min height for the loading placeholder (reduces layout shift). */
  minHeight?: string | number;
  /** Use compact fallback. */
  compact?: boolean;
  /** Render nothing while loading (e.g. for decorative/background components). */
  noFallback?: boolean;
};

/**
 * Lazy-load a component with a consistent fallback. Use this across the app
 * for below-the-fold or heavy components so the project scales with one pattern.
 *
 * @example
 * const LazyWorkSection = lazyComponent(
 *   () => import("@/components/WorkExperienceSection").then((m) => ({ default: m.WorkExperienceSection })),
 *   { ssr: true, minHeight: "280px" }
 * );
 */
export function lazyComponent(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  importFn: () => Promise<{ default: React.ComponentType<any> }>,
  options: DynamicOptions = {},
) {
  const {
    ssr = true,
    minHeight,
    compact = false,
    noFallback = false,
  } = options;
  return dynamic(importFn, {
    ssr,
    loading: noFallback
      ? () => null
      : () => <LazyFallback minHeight={minHeight} compact={compact} />,
  });
}
