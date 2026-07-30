import type { Status } from '@/data/case-studies'

const LABELS: Record<Status, string> = {
  live: 'Live',
  'app-store': 'App Store',
  'open-source': 'Open source',
  private: 'Private',
  archived: 'Archived',
}

/** Statuses that mean "running in production right now" get the accent dot. */
const IN_PRODUCTION: Status[] = ['live', 'app-store']

export function StatusBadge({ status }: { status: Status }) {
  const shipped = IN_PRODUCTION.includes(status)
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
      <span
        aria-hidden
        className={`size-1.5 rounded-full ${shipped ? 'dot-live bg-accent' : 'bg-line'}`}
      />
      {LABELS[status]}
    </span>
  )
}
