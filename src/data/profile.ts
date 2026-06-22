export const profile = {
  name: 'John Hanna',
  // Short headline shown under your name in the hero.
  role: 'Software Developer',
  tagline:
    'I build web, mobile, and full-stack applications — from end-to-end encrypted dashboards to native iOS & Android apps.',
  avatar: 'https://avatars.githubusercontent.com/u/66224091?v=4',
  location: '',
  // Links — leave a value empty ('') to hide that button.
  links: {
    github: 'https://github.com/JHanna-2020',
    linkedin: 'https://www.linkedin.com/in/john-hanna-299ba3341',
    email: 'hannnajohn0615@gmail.com',
    phone: '2815708089', // digits only; formatted for display automatically
    resume: '', // optional: link to a hosted résumé PDF
  },
  // Skills shown in the hero marquee.
  stack: [
    'React',
    'TypeScript',
    'Next.js',
    'Python',
    'Swift',
    'Kotlin',
    'PHP',
    'Firebase',
    'Supabase',
    'Tailwind CSS',
  ],
} as const

/** Formats a 10-digit US number as (XXX) XXX-XXXX; returns input otherwise. */
export function formatPhone(digits: string): string {
  const d = digits.replace(/\D/g, '')
  return d.length === 10 ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}` : digits
}
