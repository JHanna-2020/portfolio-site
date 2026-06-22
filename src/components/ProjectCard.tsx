import type { Project } from '../data/projects'
import { GitHubIcon, ExternalIcon, LockIcon } from './icons'

export function ProjectCard({ project }: { project: Project }) {
  const { featured } = project
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl glass card-hover p-6 ${
        featured ? 'glow-ring scanline' : ''
      }`}
    >
      {/* HUD header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-wider text-cyan-300/90 uppercase">
          {project.category}
        </span>
        <span className="font-mono text-[11px] text-slate-500">
          {project.private && (
            <span className="mr-2 inline-flex items-center gap-1 text-fuchsia-300/90">
              <LockIcon className="h-3 w-3" /> private
            </span>
          )}
          {project.year}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-slate-100 transition group-hover:text-white">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-4 text-sm">
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-cyan-300"
          >
            <GitHubIcon className="h-4 w-4" /> Code
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-slate-500">
            <LockIcon className="h-4 w-4" /> Private repo
          </span>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 transition hover:text-fuchsia-300"
          >
            <ExternalIcon className="h-4 w-4" /> Live
          </a>
        )}
      </div>
    </article>
  )
}
