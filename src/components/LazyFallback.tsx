type LazyFallbackProps = {
  /** Optional min height so layout doesn't shift when content loads. */
  minHeight?: string | number;
  /** Use compact style (e.g. for inline or small components). */
  compact?: boolean;
};

export function LazyFallback({
  minHeight = "200px",
  compact = false,
}: LazyFallbackProps = {}) {
  return (
    <div
      className="animate-pulse rounded-xl bg-foreground/5"
      style={{ minHeight: compact ? undefined : minHeight }}
      aria-hidden
    >
      {compact ? (
        <div className="h-4 w-24 rounded bg-foreground/10" />
      ) : (
        <div className="flex h-full items-center justify-center">
          <div
            className="h-6 w-6 animate-spin rounded-full border-2 border-foreground/20 border-t-accent"
            aria-hidden
          />
        </div>
      )}
    </div>
  );
}
