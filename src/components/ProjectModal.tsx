import { useEffect, useRef } from 'react'
import type { Category, Project } from '../data/projects'
import { ExternalIcon, LockIcon } from './icons'

const CODE: Record<Category, string> = {
  'Web App': 'WEB',
  Mobile: 'MOB',
  'Full-Stack': 'FUL',
  Backend: 'BCK',
}

export function ProjectModal({
  project,
  index,
  onClose,
}: {
  project: Project
  index: number
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // Lock scroll, focus the close button, and wire up Escape to dismiss.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const callNo = `${CODE[project.category]} · ${String(index + 1).padStart(2, '0')}`

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="modal-panel relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl p-7 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-hair text-muted transition hover:border-[var(--gold)] hover:text-gold"
        >
          <span aria-hidden className="text-lg leading-none">×</span>
        </button>

        {/* Catalog header */}
        <div className="flex items-center gap-3 pr-10">
          <span className="font-mono text-[11px] tracking-[0.18em] text-gold">
            {callNo}
          </span>
          <span className="font-mono text-[11px] text-faint">{project.category}</span>
          {project.private && (
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-iris">
              <LockIcon className="h-3 w-3" /> private
            </span>
          )}
        </div>

        <h2
          id="project-modal-title"
          className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-bone"
        >
          {project.name}
        </h2>
        <p className="font-mono text-xs text-faint">{project.year}</p>

        <p className="mt-5 text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-6 border-t border-hair pt-5">
          <p className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
            Built with
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-hair bg-surface px-3 py-1 font-mono text-xs text-bone"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:brightness-105"
          >
            <ExternalIcon className="h-4 w-4" /> Visit live demo
          </a>
        )}
      </div>
    </div>
  )
}
