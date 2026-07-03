// ---------------------------------------------------------------------------
// Who you are. Every page reads from this file — edit here, not in components.
// Anything marked [SWAP] is a guess or placeholder: replace with the real value.
// ---------------------------------------------------------------------------
export const profile = {
  name: 'John Hanna',
  role: 'Full-stack & mobile developer',
  location: 'Houston, TX', // [SWAP] confirm the city you want to publish
  /** Hero portrait. Swap for a real photo in public/ (e.g. '/portrait.jpg'). */
  avatar: 'https://avatars.githubusercontent.com/u/66224091?v=4',
  education: {
    degree: 'B.S. Computer Science',
    school: 'University of Houston–Clear Lake',
    detail: 'Junior — expected 2028', // [SWAP] confirm your graduation year
  },
  // The two-line availability readout in the hero. Keep these honest and
  // current — they are the strongest trust signal on the page.
  availability: {
    now: 'Computer Science Intern, Sports Media Inc.',
    next: 'Taking freelance projects from September 2026', // [SWAP] confirm date
  },
  // Short bio for the About section, in first person.
  bio: [
    'I’m a computer science junior at the University of Houston–Clear Lake who has been building for the web since 2020 — long enough to have a first project I keep around to stay humble.',
    'Outside coursework I take on real engagements: an end-to-end encrypted budgeting product, official iOS and Android apps for a church congregation, and a platform connecting student-athletes with brands. I care about the unglamorous parts — deployment, notifications that actually arrive, data models that survive contact with real users.',
  ],
  links: {
    github: 'https://github.com/JHanna-2020',
    linkedin: 'https://www.linkedin.com/in/john-hanna-299ba3341',
    email: 'hannnajohn0615@gmail.com',
    phone: '2815708089', // digits only; formatted for display automatically
    resume: '', // optional: path or URL to a hosted résumé PDF ('' hides it)
    /** This site's own repo — linked in the footer as a work sample. */
    source: 'https://github.com/JHanna-2020/portfolio-site',
  },
} as const

/** Formats a 10-digit US number as (XXX) XXX-XXXX; returns input otherwise. */
export function formatPhone(digits: string): string {
  const d = digits.replace(/\D/g, '')
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : digits
}
