import { certifications } from '../data/certifications'
import { AwardIcon, ExternalIcon } from './icons'
import { Reveal } from './Reveal'

export function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="relative mx-auto max-w-5xl px-6 pb-24">
      <div className="mb-8">
        <span className="font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
          Credentials
        </span>
        <h2 className="font-display mt-2 text-4xl font-semibold tracking-[-0.02em] text-bone sm:text-5xl">
          Certifications
        </h2>
      </div>

      <div className="divide-y divide-[color:var(--hair)] border-y border-hair">
        {certifications.map((cert, i) => {
          const href = cert.file
            ? import.meta.env.BASE_URL + cert.file
            : cert.url

          const row = (
            <div className="group flex items-center gap-4 py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hair text-gold">
                <AwardIcon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-medium text-bone">
                  {cert.name}
                </h3>
                <p className="font-mono text-xs text-muted">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              {href && (
                <span className="inline-flex items-center gap-1 font-mono text-[11px] text-faint transition group-hover:text-gold">
                  View <ExternalIcon className="h-3 w-3" />
                </span>
              )}
            </div>
          )

          return (
            <Reveal key={cert.name} delay={i * 60}>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer" className="block">
                  {row}
                </a>
              ) : (
                row
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
