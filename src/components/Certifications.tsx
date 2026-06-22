import { certifications } from '../data/certifications'
import { AwardIcon, ExternalIcon } from './icons'

export function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span className="font-mono text-xs tracking-[0.3em] text-cyan-600 uppercase dark:text-cyan-300/80">
          // credentials
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-strong sm:text-4xl">
          Certifications
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => {
          // Resolve a hosted file against the deploy base URL, or use an external link.
          const href = cert.file
            ? import.meta.env.BASE_URL + cert.file
            : cert.url
          const inner = (
            <>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-base bg-surface text-cyan-600 dark:text-cyan-300">
                <AwardIcon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-strong">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-faint">{cert.date}</span>
                {href && (
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-cyan-600 transition group-hover:gap-1.5 dark:text-cyan-300">
                    View <ExternalIcon className="h-3 w-3" />
                  </span>
                )}
              </div>
            </>
          )

          const base = 'group relative flex flex-col rounded-2xl glass card-hover p-6'

          return href ? (
            <a
              key={cert.name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={base}
            >
              {inner}
            </a>
          ) : (
            <article key={cert.name} className={base}>
              {inner}
            </article>
          )
        })}
      </div>
    </section>
  )
}
