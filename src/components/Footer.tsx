import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export function Footer() {
  const { links } = profile
  return (
    <footer className="relative border-t border-hair">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold uppercase">
              Let’s talk
            </p>
            <a
              href={links.email ? `mailto:${links.email}` : undefined}
              className="font-display mt-3 block text-2xl font-semibold tracking-[-0.01em] break-all text-bone transition hover:text-gold sm:text-4xl sm:break-normal"
            >
              {links.email || 'Get in touch'}
            </a>
          </div>

          <div className="flex items-center gap-5">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition hover:text-gold">
                <GitHubIcon className="h-6 w-6" />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition hover:text-gold">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            )}
            {links.email && (
              <a href={`mailto:${links.email}`} aria-label="Email" className="text-muted transition hover:text-gold">
                <MailIcon className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-12 font-mono text-[11px] text-faint">
          © {new Date().getFullYear()} {profile.name} · designed &amp; built with React, Vite &amp; Tailwind
        </p>
      </div>
    </footer>
  )
}
