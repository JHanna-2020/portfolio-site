import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export function Footer() {
  const { links } = profile
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-md text-pretty text-slate-400">
            Let’s build something. Reach out and I’ll get back to you.
          </p>
          <div className="flex items-center gap-5">
            {links.github && (
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition hover:text-cyan-300">
                <GitHubIcon className="h-6 w-6" />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-cyan-300">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            )}
            {links.email && (
              <a href={`mailto:${links.email}`} aria-label="Email" className="text-slate-400 transition hover:text-cyan-300">
                <MailIcon className="h-6 w-6" />
              </a>
            )}
          </div>
          <p className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} {profile.name} · built with React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
