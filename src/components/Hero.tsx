import { profile, formatPhone } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon, DocIcon, PhoneIcon } from './icons'

export function Hero() {
  const { links } = profile

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
          <div>
            <p className="font-mono text-xs tracking-[0.25em] text-muted uppercase">
              Full-stack · Mobile · Web
            </p>
            <p className="mt-1.5 font-mono text-xs text-faint">
              <span className="text-gold">{profile.education.degree}</span>
              {' · '}
              {profile.education.school}
            </p>
          </div>
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
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#004182]"
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
          {links.phone && (
            <a
              href={`tel:${links.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-hair-strong px-5 py-2.5 text-sm font-medium text-bone transition hover:border-[var(--gold)]"
            >
              <PhoneIcon className="h-4 w-4" /> {formatPhone(links.phone)}
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

      </div>
    </header>
  )
}
