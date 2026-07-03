import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/data/case-studies'
import { StatusBadge } from '@/components/StatusBadge'
import { Placeholder } from '@/components/Placeholder'

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug)
  if (!cs) return {}
  return { title: cs.title, description: cs.summary }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const cs = getCaseStudy((await params).slug)
  if (!cs) notFound()

  const index = caseStudies.findIndex((c) => c.slug === cs.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <article className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/#work"
        className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
      >
        ← All work
      </Link>

      <header className="mt-10">
        {cs.client && (
          <p className="eyebrow mb-3">For {cs.client}</p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.02em] sm:text-6xl">
          {cs.title}
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-muted sm:text-xl">
          {cs.lede}
        </p>
      </header>

      <dl className="mt-12 grid gap-x-8 gap-y-6 border-y border-line py-8 sm:grid-cols-4">
        <div>
          <dt className="eyebrow">Role</dt>
          <dd className="mt-2 text-sm">{cs.role}</dd>
        </div>
        <div>
          <dt className="eyebrow">Year</dt>
          <dd className="mt-2 text-sm">{cs.year}</dd>
        </div>
        <div>
          <dt className="eyebrow">Status</dt>
          <dd className="mt-2">
            <StatusBadge status={cs.status} />
          </dd>
        </div>
        <div>
          <dt className="eyebrow">Stack</dt>
          <dd className="mt-2 font-mono text-[0.6875rem] leading-relaxed tracking-[0.06em] text-muted">
            {cs.stack.join(' · ')}
          </dd>
        </div>
      </dl>

      {cs.links.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-4">
          {cs.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex items-center rounded-md border border-line px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors hover:border-accent hover:text-accent"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-16 max-w-2xl space-y-14">
        {cs.sections.map((section) => (
          <section key={section.heading} aria-label={section.heading}>
            <h2 className="eyebrow">{section.heading}</h2>
            <div className="prose-case mt-4">
              {section.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            {section.placeholder && <Placeholder>{section.placeholder}</Placeholder>}
          </section>
        ))}

        {cs.assetsNeeded.length > 0 && (
          <section aria-label="Assets needed">
            <h2 className="eyebrow">Visuals</h2>
            {cs.assetsNeeded.map((asset) => (
              <Placeholder key={asset}>{asset}</Placeholder>
            ))}
          </section>
        )}
      </div>

      <footer className="mt-20 border-t border-line pt-8">
        <Link href={`/work/${next.slug}/`} className="group inline-block">
          <span className="eyebrow">Next case study</span>
          <span className="mt-2 block font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {next.title} <span aria-hidden>→</span>
          </span>
        </Link>
      </footer>
    </article>
  )
}
