import { profile, formatPhone } from '@/data/profile'

export function Footer() {
  const { links } = profile
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          Tell me what you’re trying to build and where it needs to run — web,
          iOS, Android, or all three. I’ll reply with how I’d approach it.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${links.email}`}
            className="glow-hover inline-flex items-center gap-2 rounded-sm bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-contrast hover:opacity-95"
          >
            {links.email}
          </a>
          <a
            href={`tel:+1${links.phone}`}
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
          >
            {formatPhone(links.phone)}
          </a>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-end">
          <ul className="flex gap-6">
            {[
              { label: 'GitHub', href: links.github },
              ...(links.resume ? [{ label: 'Résumé', href: links.resume }] : []),
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            Designed and built by {profile.name} with Next.js, TypeScript, and
            Tailwind —{' '}
            <a
              href={links.source}
              className="underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              view the source
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
