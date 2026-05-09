export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[220] focus:rounded-lg focus:bg-[var(--surface)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--brand-deep)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
    >
      {label}
    </a>
  );
}
