// ---------------------------------------------------------------------------
// What you take on as freelance work. Three entries; keep it three.
// ---------------------------------------------------------------------------

export interface Service {
  name: string
  description: string
  tech: string[]
}

export const services: Service[] = [
  {
    name: 'Web applications',
    description:
      'Full products, not just pages: auth, data models, dashboards, and deployment. I work in React and Next.js with TypeScript, backed by Postgres via Supabase or Firebase.',
    tech: ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    name: 'iOS & Android apps',
    description:
      'Native on both platforms — SwiftUI on iOS, Jetpack Compose on Android — sharing one backend. Push notifications, store submission, and the maintenance after launch included.',
    tech: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    name: 'Backends & integrations',
    description:
      'The plumbing that makes the front end trustworthy: APIs, authentication, real-time sync, scheduled jobs, and integrations with the services you already use.',
    tech: ['Python', 'Firebase', 'PostgreSQL', 'REST APIs'],
  },
]
