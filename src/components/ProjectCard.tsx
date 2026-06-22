import { useLayoutEffect, useRef, useState } from 'react'
import type { Category, Project } from '../data/projects'
import { ExternalIcon, LockIcon, ChevronIcon } from './icons'

const CODE: Record<Category, string> = {
  'Web App': 'WEB',
  Mobile: 'MOB',
  'Full-Stack': 'FUL',
  Backend: 'BCK',
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [open, setOpen] = useState(false)
  const [overflows, setOverflows] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  // Only show the expand control when the summary is actually clipped.
  useLayoutEffect(() => {
    const measure = () => {
      const el = textRef.current
      if (!el || open) return
      setOverflows(el.scrollHeight - el.clientHeight > 1)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (textRef.current) ro.observe(textRef.current)
    return () => ro.disconnect()
  }, [open])

  const callNo = `${CODE[project.category]} · ${String(index + 1).padStart(2, '0')}`

  return (
    <article
      className={`group relative flex flex-col rounded-xl card p-6 ${
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

      {/* One-line summary, expandable */}
      <p
        ref={textRef}
        className={`mt-2 text-sm leading-relaxed text-muted ${
          open ? '' : 'line-clamp-1'
        }`}
      >
        {project.description}
      </p>
      {(overflows || open) && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-1 inline-flex w-fit items-center gap-1 font-mono text-[11px] text-faint transition hover:text-gold"
          aria-expanded={open}
        >
          {open ? 'Less' : 'More'}
          <ChevronIcon
            className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      )}

      {/* Tech */}
      <div className="mt-auto pt-5">
        <p className="font-mono text-[11px] text-faint">
          {project.tech.join('  ·  ')}
        </p>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-bone transition hover:text-gold"
          >
            <ExternalIcon className="h-4 w-4" /> Live demo
          </a>
        )}
      </div>
    </article>
  )
}
