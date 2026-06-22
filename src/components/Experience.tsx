import { internships, fmtMonth, isCurrent } from '../data/experience'
import { Reveal } from './Reveal'

export function Experience() {
  if (internships.length === 0) return null

  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 pt-24">
      <div className="mb-10">
        <span className="font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
          Experience
        </span>
        <h2 className="font-display mt-2 text-4xl font-semibold tracking-[-0.02em] text-bone sm:text-5xl">
          Internships
        </h2>
      </div>

      <div className="border-t border-hair">
        {internships.map((job, i) => {
          const current = isCurrent(job)
          const range = `${fmtMonth(job.start)} — ${job.end ? fmtMonth(job.end) : 'Present'}`
          return (
            <Reveal key={`${job.company}-${job.start}`} delay={i * 60}>
              <div className="grid gap-3 border-b border-hair py-7 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold text-bone">
                      {job.role}
                    </h3>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:color-mix(in_oklab,var(--gold)_50%,transparent)] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-gold uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-muted">
                    {job.company}
                    {job.location && (
                      <span className="text-faint"> · {job.location}</span>
                    )}
                  </p>
                  {job.summary && (
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {job.summary}
                    </p>
                  )}
                </div>
                <p className="font-mono text-xs text-faint sm:text-right">{range}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
