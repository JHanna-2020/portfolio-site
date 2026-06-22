export type Category =
  | 'Web App'
  | 'Mobile'
  | 'Full-Stack'
  | 'Backend'

export interface Project {
  /** Display name */
  name: string
  /** One-to-two sentence description */
  description: string
  /** Primary grouping for the filter bar */
  category: Category
  /** Tech badges shown on the card */
  tech: string[]
  /** GitHub repo URL ('' to hide the code link) */
  repo: string
  /** Live demo / homepage URL ('' to hide) */
  live?: string
  /** True for private repos — shows a lock badge, no broken link */
  private?: boolean
  /** Pin to the top with a highlight ring */
  featured?: boolean
  /** Year for the HUD timestamp */
  year: number
}

// ---------------------------------------------------------------------------
// Curated from github.com/JHanna-2020 — recent, complete, substantial work.
// Add or remove entries freely; the page updates automatically.
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    name: 'PaceMint',
    description:
      'A private, multi-user budgeting dashboard where every account’s financial data is end-to-end encrypted in the browser — the database only ever stores ciphertext.',
    category: 'Web App',
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    repo: 'https://github.com/JHanna-2020/pacemint',
    live: 'https://pacemint.vercel.app/',
    featured: true,
    year: 2026,
  },
  {
    name: 'TaskManager25',
    description:
      'A task manager with synced desktop and web interfaces sharing one real-time Firestore backend, plus recurring tasks and Discord reminders.',
    category: 'Full-Stack',
    tech: ['Python', 'Firebase', 'Firestore'],
    repo: 'https://github.com/JHanna-2020/TaskManager25',
    featured: true,
    year: 2026,
  },
  {
    name: 'St. Julitta — iOS',
    description:
      'The official iOS app for St. Julitta Coptic Orthodox Church: push-notification announcements, a Coptic calendar, and member registration. Built with SwiftUI and Firebase.',
    category: 'Mobile',
    tech: ['Swift', 'SwiftUI', 'Firebase'],
    repo: '',
    private: true,
    featured: true,
    year: 2026,
  },
  {
    name: 'St. Julitta — Android',
    description:
      'Native Android companion to the St. Julitta church app, built with Jetpack Compose and a clean MVVM + Hilt architecture over Firebase.',
    category: 'Mobile',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt'],
    repo: '',
    private: true,
    year: 2026,
  },
  {
    name: 'NIL Sports Media',
    description:
      'A platform that connects student-athletes with brands for NIL (name, image, and likeness) deals. Built with Next.js and TypeScript.',
    category: 'Web App',
    tech: ['Next.js', 'TypeScript', 'React'],
    repo: '',
    live: 'https://sm-nil.vercel.app',
    private: true,
    year: 2026,
  },
  {
    name: 'Aarva Inventory',
    description:
      'An inventory management system for tracking stock, items, and quantities.',
    category: 'Backend',
    tech: ['Python'],
    repo: 'https://github.com/JHanna-2020/aarvainventory',
    year: 2025,
  },
  {
    name: 'Book Reviews',
    description:
      'A book review web app where users can search a catalog and leave ratings and reviews.',
    category: 'Full-Stack',
    tech: ['Python', 'Flask', 'SQL'],
    repo: 'https://github.com/JHanna-2020/BookReviews',
    year: 2025,
  },
  {
    name: 'Food App',
    description:
      'A food-ordering web app for browsing a menu and placing orders.',
    category: 'Web App',
    tech: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/JHanna-2020/FoodApp',
    year: 2025,
  },
  {
    name: 'Job Portal',
    description:
      'A job portal where listings can be posted and browsed by job seekers.',
    category: 'Web App',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/JHanna-2020/JobPortal',
    year: 2025,
  },
  {
    name: 'AARSDS',
    description:
      'A student data management system for storing and managing records, built with PHP and MySQL.',
    category: 'Full-Stack',
    tech: ['PHP', 'MySQL'],
    repo: 'https://github.com/JHanna-2020/AARSDS',
    year: 2025,
  },
  {
    name: 'Coptic Hymns Website',
    description:
      'A website for learning and browsing Coptic Orthodox hymns.',
    category: 'Web App',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/JHanna-2020/Coptic-Hymns-Website',
    live: 'https://jhanna-2020.github.io/Coptic-Hymns-Website/',
    year: 2023,
  },
  {
    name: 'Web Development Service',
    description:
      'The very first website I ever built — a web development services landing page. Rough around the edges, but it’s where everything started and what got me hooked on building for the web.',
    category: 'Web App',
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/JHanna-2020/webdevelopmentservice',
    live: 'https://jhanna-2020.github.io/webdevelopmentservice/',
    year: 2020,
  },
]
