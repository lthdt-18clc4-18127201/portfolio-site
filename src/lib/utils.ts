/**
 * Merge class names. Use for conditional or composed Tailwind classes.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
