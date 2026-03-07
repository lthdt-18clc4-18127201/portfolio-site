export default function DashboardLoading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-accent"
          aria-hidden
        />
        <p className="text-sm font-semibold tracking-[0.2em] text-foreground/70">
          Loading
        </p>
      </div>
    </div>
  );
}
