export const profile = {
  name: 'John Hanna',
  // Short headline shown under your name in the hero.
  role: 'Software Developer',
  // Current studies — shown in the hero.
  education: {
    degree: 'B.S. Computer Science',
    school: 'University of Houston–Clear Lake',
    status: 'Student',
  },
  tagline:
    'I am currently a junior pursuing a Computer Science degree at the University of Houston – Clear Lake, with hands-on experience developing and deploying iOS and web applications using Swift, JavaScript, and SQL. I’m passionate about using technology to serve my community and am actively growing my skills in full-stack development and mobile engineering.',
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
