import { useMemo, useState } from 'react'
import { projects, type Category } from '../data/projects'
import { ProjectCard } from './ProjectCard'

const CATEGORIES: (Category | 'All')[] = [
  'All',
  'Web App',
  'Mobile',
  'Full-Stack',
  'Backend',
]

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
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-xs tracking-[0.3em] text-cyan-600 uppercase dark:text-cyan-300/80">
          // selected work
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-strong sm:text-4xl">
          Projects
        </h2>
      </div>

      {/* Controls */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-lg border px-3.5 py-1.5 font-mono text-xs transition ${
                filter === c
                  ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-600 dark:text-cyan-200'
                  : 'border-base bg-surface text-muted hover:border-strong hover:text-strong'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search projects…"
            className="w-full rounded-lg border border-base bg-surface px-4 py-2 font-mono text-sm text-strong placeholder:text-faint outline-none transition focus:border-cyan-500/50 sm:w-64"
          />
        </div>
      </div>

      {/* Grid */}
      {visible.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center font-mono text-sm text-faint">
          No projects match “{query}”.
        </p>
      )}
    </section>
  )
}
