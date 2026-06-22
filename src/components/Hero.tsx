import { profile } from '../data/profile'
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DocIcon,
} from './icons'

export function Hero() {
  const { links } = profile
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 float">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-400/40 to-fuchsia-500/40 blur-xl" />
            <img
              src={profile.avatar}
              alt={profile.name}
              className="relative h-28 w-28 rounded-full border border-white/10 object-cover"
              loading="eager"
            />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-xs tracking-widest text-cyan-300/90 uppercase">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Available for work
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-3 font-mono text-sm tracking-[0.3em] text-slate-400 uppercase">
            {profile.role}
          </p>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300/90 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <GitHubIcon className="h-4 w-4" /> GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90"
              >
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            )}
            {links.email && (
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <MailIcon className="h-4 w-4" /> Email
              </a>
            )}
            {links.resume && (
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <DocIcon className="h-4 w-4" /> Résumé
              </a>
            )}
          </div>
        </div>

        {/* Tech stack ticker */}
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-ink)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-ink)] to-transparent" />
          <div className="flex w-max marquee-track gap-4">
            {[...profile.stack, ...profile.stack].map((tech, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
