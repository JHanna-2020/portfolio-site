import { profile } from '../data/profile'
import { projects, type Category } from '../data/projects'
import { GitHubIcon, LinkedInIcon, MailIcon, DocIcon } from './icons'

// Build the "range spectrum" from the real project catalog — proof of breadth,
// not a claim. Ordered widest-first so the bar reads gold → iris.
function buildRange() {
  const counts = new Map<Category, number>()
  for (const p of projects) counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
  const total = projects.length
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, n], i, arr) => ({
      label,
      n,
      pct: (n / total) * 100,
      // position along the gold→iris ramp
      t: arr.length > 1 ? i / (arr.length - 1) : 0,
    }))
}

export function Hero() {
  const { links } = profile
  const range = buildRange()

  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-aurora" />

      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        {/* Identity lockup */}
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-12 w-12 rounded-lg border border-hair-strong object-cover"
            loading="eager"
          />
          <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
            Full-stack · Mobile · Liturgical software
          </p>
        </div>

        <h1 className="font-display mt-8 text-[clamp(3rem,11vw,7rem)] leading-[0.92] font-semibold tracking-[-0.02em] text-bone">
          John
          <br />
          <span className="gold-text">Hanna</span>
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          A developer who ships across the whole stack — from an{' '}
          <span className="text-bone">end-to-end encrypted budgeting dashboard</span> to{' '}
          <span className="text-bone">native iOS &amp; Android apps</span> for my church.
          I like building things people actually use.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-wrap items-center gap-3">
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:brightness-105"
            >
              <LinkedInIcon className="h-4 w-4" /> Connect on LinkedIn
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hair-strong px-5 py-2.5 text-sm font-medium text-bone transition hover:border-[var(--gold)]"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          )}
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-hair-strong px-5 py-2.5 text-sm font-medium text-bone transition hover:border-[var(--gold)]"
            >
              <MailIcon className="h-4 w-4" /> Email
            </a>
          )}
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-hair-strong px-5 py-2.5 text-sm font-medium text-bone transition hover:border-[var(--gold)]"
            >
              <DocIcon className="h-4 w-4" /> Résumé
            </a>
          )}
        </div>

        {/* Signature: the range spectrum */}
        <div className="tick mt-16 border-t border-hair pt-6">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="font-mono text-[11px] tracking-[0.25em] text-faint uppercase">
              Range · what I ship
            </span>
            <span className="font-mono text-[11px] text-faint">
              {projects.length} projects
            </span>
          </div>

          <div className="flex h-3 w-full overflow-hidden rounded-full">
            {range.map((seg, i) => (
              <div
                key={seg.label}
                className="spectrum-seg h-full"
                style={{
                  width: `${seg.pct}%`,
                  background: `color-mix(in oklab, var(--gold), var(--iris) ${seg.t * 100}%)`,
                  animationDelay: `${0.15 + i * 0.12}s`,
                }}
                title={`${seg.label}: ${seg.n}`}
              />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {range.map((seg) => (
              <div key={seg.label} className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: `color-mix(in oklab, var(--gold), var(--iris) ${seg.t * 100}%)` }}
                />
                <span className="font-mono text-xs text-muted">
                  {seg.label}
                  <span className="text-faint"> · {seg.n}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
