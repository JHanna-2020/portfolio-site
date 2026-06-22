import type { Category, Project } from '../data/projects'
import { LockIcon } from './icons'

const CODE: Record<Category, string> = {
  'Web App': 'WEB',
  Mobile: 'MOB',
  'Full-Stack': 'FUL',
  Backend: 'BCK',
}

export function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project
  index: number
  onSelect: () => void
}) {
  const callNo = `${CODE[project.category]} · ${String(index + 1).padStart(2, '0')}`

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      aria-label={`Open ${project.name} details`}
      className={`group relative flex cursor-pointer flex-col rounded-xl card p-6 focus:outline-none focus-visible:border-[var(--gold)] ${
        project.featured ? 'card-featured' : ''
      }`}
    >
      {/* Catalog header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-[0.18em] text-gold">
          {callNo}
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[11px] text-faint">
          {project.private && (
            <span className="inline-flex items-center gap-1 text-iris">
              <LockIcon className="h-3 w-3" /> private
            </span>
          )}
          {project.year}
        </span>
      </div>
      {project.featured && <div className="rule-gold mt-3 h-px w-10" />}

      <h3 className="font-display mt-4 text-xl font-semibold tracking-[-0.01em] text-bone">
        {project.name}
      </h3>

      {/* One-line summary — full text lives in the detail view */}
      <p className="mt-2 line-clamp-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-auto flex items-center justify-between pt-5">
        <p className="line-clamp-1 font-mono text-[11px] text-faint">
          {project.tech.join('  ·  ')}
        </p>
        <span className="shrink-0 pl-3 font-mono text-[11px] text-faint transition group-hover:text-gold">
          View →
        </span>
      </div>
    </article>
  )
}
