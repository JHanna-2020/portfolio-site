/**
 * A clearly-marked gap in the content — something John still needs to supply.
 * Rendered loudly on purpose: these must be impossible to ship by accident.
 * Remove each one by folding the real detail into the surrounding copy.
 */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-md border border-dashed border-amber-600/60 bg-amber-500/5 px-4 py-3 dark:border-amber-400/50">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-amber-700 dark:text-amber-400">
        To supply
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  )
}
