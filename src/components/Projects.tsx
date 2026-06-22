import { useMemo, useState } from 'react'
import { projects, type Category } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Web App',
  'Mobile',
  'Full-Stack',
  'Backend',
]

// Stable catalog number per project, independent of the active filter.
const indexOf = new Map(projects.map((p, i) => [p.name, i]))

export function Projects() {
  const [filter, setFilter] = useState<Category | 'All'>('All')
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects
      .filter((p) => filter === 'All' || p.category === filter)
      .filter(
        (p) =>
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tech.some((t) => t.toLowerCase().includes(q)),
      )
      .sort((a, b) => Number(b.featured) - Number(a.featured) || b.year - a.year)
  }, [filter, query])

  return (
    <section id="work" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <span className="font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
          The catalog
        </span>
        <h2 className="font-display mt-2 text-4xl font-semibold tracking-[-0.02em] text-bone sm:text-5xl">
          Selected work
        </h2>
      </div>

      {/* Controls */}
      <div className="mb-10 flex flex-col gap-4 border-y border-hair py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-xs transition ${
                filter === c
                  ? 'bg-[var(--gold)] text-[var(--ink)]'
                  : 'text-muted hover:text-bone'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search…"
          className="w-full rounded-full border border-hair bg-surface px-4 py-2 font-mono text-sm text-bone placeholder:text-faint outline-none transition focus:border-[var(--gold)] sm:w-52"
        />
      </div>

      {/* Catalog grid */}
      {visible.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i, 6) * 60}>
              <ProjectCard project={p} index={indexOf.get(p.name) ?? i} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="py-16 text-center font-mono text-sm text-faint">
          Nothing in the catalog matches “{query}”.
        </p>
      )}
    </section>
  )
}
