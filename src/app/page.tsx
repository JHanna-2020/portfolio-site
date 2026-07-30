import Link from 'next/link'
import { profile } from '@/data/profile'
import { caseStudies } from '@/data/case-studies'
import { archive } from '@/data/projects'
import { services } from '@/data/services'
import { internships, fmtMonth, isCurrent } from '@/data/experience'
import { certifications } from '@/data/certifications'
import { StatusBadge } from '@/components/StatusBadge'
import { withBase } from '@/lib/base'

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Archive />
      <About />
    </>
  )
}

function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid lg:grid-cols-[1fr_auto] lg:gap-16">
      <div>
      <p className="eyebrow rise">
        {profile.name} · {profile.location} · Web, iOS & Android
      </p>
      <h1 className="rise rise-2 mt-5 max-w-3xl font-display text-[clamp(2.75rem,8vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
        Software that <em className="readout">ships</em>.
      </h1>
      <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-muted">
        I design, build, and deploy web apps and native mobile apps for clients
        and communities — and I stay through launch and beyond. Full-stack
        developer and computer science junior at the University of
        Houston–Clear Lake.
      </p>

      <dl className="rise rise-4 mt-10 max-w-xl space-y-2.5 border border-line border-l-2 border-l-accent bg-surface/60 py-4 pl-5 pr-6">
        <div className="flex flex-col gap-x-6 gap-y-0.5 sm:flex-row sm:items-baseline">
          <dt className="w-12 shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
            Now
          </dt>
          <dd className="text-sm text-ink">{profile.availability.now}</dd>
        </div>
        <div className="flex flex-col gap-x-6 gap-y-0.5 sm:flex-row sm:items-baseline">
          <dt className="w-12 shrink-0 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            Next
          </dt>
          <dd className="text-sm text-ink">{profile.availability.next}</dd>
        </div>
      </dl>

      <div className="rise rise-4 mt-10 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.links.email}`}
          className="glow-hover inline-flex items-center rounded-sm bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-contrast hover:opacity-95"
        >
          Tell me about your project
        </a>
        <a
          href={profile.links.linkedin}
          className="glow-hover inline-flex items-center rounded-sm bg-[#0a66c2] px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white hover:opacity-95"
        >
          LinkedIn
        </a>
        <a
          href="#work"
          className="glow-hover inline-flex items-center rounded-sm border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink hover:border-accent"
        >
          See the work
        </a>
      </div>
      </div>

      <figure className="rise rise-3 mt-14 w-44 self-start sm:w-52 lg:mt-2 lg:w-64">
        <div className="ticks ticks-visible border border-line bg-surface/60 p-1.5">
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width={460}
            height={460}
            className="block aspect-square w-full rounded-[1px] object-cover"
          />
        </div>
        <figcaption className="mt-2.5 font-mono text-[0.625rem] tracking-[0.14em] text-muted">
          29.76°N · 95.36°W
        </figcaption>
      </figure>
    </section>
  )
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 sm:px-8">
      <div className="flex items-baseline justify-between">
        <h2 id="work-heading" className="eyebrow">
          Selected work
        </h2>
        <p className="eyebrow hidden sm:block">Case studies</p>
      </div>
      <ul className="mt-6">
        {caseStudies.map((cs) => (
          <li key={cs.slug}>
            <Link
              href={`/work/${cs.slug}/`}
              className="ticks group grid gap-x-8 gap-y-3 border-t border-line px-2 py-10 sm:grid-cols-[8rem_1fr_auto] sm:py-12"
            >
              <div className="flex items-baseline gap-4 sm:flex-col sm:gap-2">
                <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-muted">
                  {cs.year}
                </span>
                <StatusBadge status={cs.status} />
              </div>
              <div>
                {cs.client && (
                  <p className="mb-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                    For {cs.client}
                  </p>
                )}
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                  {cs.title}
                </h3>
                <p className="mt-2.5 max-w-xl leading-relaxed text-muted">
                  {cs.summary}
                </p>
                <p className="mt-3 font-mono text-[0.6875rem] tracking-[0.06em] text-muted">
                  {cs.stack.join(' · ')}
                </p>
              </div>
              <span
                aria-hidden
                className="hidden self-center text-xl text-muted transition-all group-hover:translate-x-1 group-hover:text-accent sm:block"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 pt-24 sm:px-8 sm:pt-32"
    >
      <h2 id="services-heading" className="eyebrow">
        What I take on
      </h2>
      <ul className="mt-6">
        {services.map((s) => (
          <li
            key={s.name}
            className="grid gap-x-8 gap-y-2 border-t border-line py-8 sm:grid-cols-[16rem_1fr]"
          >
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {s.name}
            </h3>
            <div>
              <p className="max-w-xl leading-relaxed text-muted">
                {s.description}
              </p>
              <p className="mt-3 font-mono text-[0.6875rem] tracking-[0.06em] text-muted">
                {s.tech.join(' · ')}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Archive() {
  return (
    <section
      aria-labelledby="archive-heading"
      className="mx-auto w-full max-w-5xl px-5 pt-24 sm:px-8 sm:pt-32"
    >
      <h2 id="archive-heading" className="eyebrow">
        More work, 2020 → today
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {archive.map((p) => (
          <li
            key={p.name}
            className="ticks flex flex-col rounded-sm border border-line bg-bg/60 p-5 transition-colors hover:border-accent/50"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display font-semibold tracking-tight">{p.name}</h3>
              <span className="font-mono text-[0.6875rem] text-muted">{p.year}</span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {p.description}
            </p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <StatusBadge status={p.status} />
              <span className="flex gap-4">
                {p.repo && (
                  <a
                    href={p.repo}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
                  >
                    Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
                  >
                    Visit
                  </a>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <h2 id="about-heading" className="eyebrow">
        About
      </h2>
      <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div className="prose-case max-w-xl">
          {profile.bio.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="eyebrow">Education</h3>
            <p className="mt-2 text-sm font-medium">{profile.education.degree}</p>
            <p className="text-sm text-muted">{profile.education.school}</p>
            <p className="text-sm text-muted">{profile.education.detail}</p>
          </div>
          <div>
            <h3 className="eyebrow">Experience</h3>
            <ul className="mt-2 space-y-3">
              {internships.map((job) => (
                <li key={`${job.company}-${job.start}`}>
                  <p className="text-sm font-medium">
                    {job.role}
                    {isCurrent(job) && (
                      <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-accent">
                        <span aria-hidden className="dot-live size-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted">{job.company}</p>
                  <p className="text-sm text-muted">
                    {fmtMonth(job.start)}
                    {job.end ? ` – ${fmtMonth(job.end)}` : ' – present'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {certifications.length > 0 && (
            <div>
              <h3 className="eyebrow">Certifications</h3>
              <ul className="mt-2 space-y-2">
                {certifications.map((c) => {
                  const href = c.url ?? (c.file ? withBase(c.file) : undefined)
                  return (
                    <li key={c.name} className="text-sm">
                      {href ? (
                        <a
                          href={href}
                          className="font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {c.name}
                        </a>
                      ) : (
                        <span className="font-medium">{c.name}</span>
                      )}
                      <span className="text-muted">
                        {' '}
                        — {c.issuer}, {c.date}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
