import type { Status } from './case-studies'

// ---------------------------------------------------------------------------
// The archive: everything that isn't a full case study, newest first.
// These render as a compact grid under "More work" on the home page.
// ---------------------------------------------------------------------------

export interface ArchiveProject {
  name: string
  /** One sentence — what it is and the one detail that makes it interesting. */
  description: string
  tech: string[]
  year: number
  status: Status
  /** GitHub repo URL ('' to hide the code link) */
  repo: string
  /** Live URL ('' to hide) */
  live?: string
}

export const archive: ArchiveProject[] = [
  {
    name: 'TaskManager25',
    description:
      'A task manager with synced desktop and web interfaces sharing one real-time Firestore backend, plus recurring tasks and Discord reminders.',
    tech: ['Python', 'Firebase', 'Firestore'],
    year: 2026,
    status: 'open-source',
    repo: 'https://github.com/JHanna-2020/TaskManager25',
  },
  {
    name: 'Aarva Inventory',
    description:
      'An inventory management system for tracking stock, items, and quantities.',
    tech: ['Python'],
    year: 2025,
    status: 'open-source',
    repo: 'https://github.com/JHanna-2020/aarvainventory',
  },
  {
    name: 'Book Reviews',
    description:
      'A book review web app where users search a catalog and leave ratings and reviews.',
    tech: ['Python', 'Flask', 'SQL'],
    year: 2025,
    status: 'open-source',
    repo: 'https://github.com/JHanna-2020/BookReviews',
  },
  {
    name: 'Food App',
    description: 'A food-ordering web app for browsing a menu and placing orders.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    year: 2025,
    status: 'open-source',
    repo: 'https://github.com/JHanna-2020/FoodApp',
  },
  {
    name: 'Job Portal',
    description:
      'A job portal where listings can be posted and browsed by job seekers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: 2025,
    status: 'open-source',
    repo: 'https://github.com/JHanna-2020/JobPortal',
  },
  {
    name: 'AARSDS',
    description:
      'A student data management system for storing and managing records, built with PHP and MySQL.',
    tech: ['PHP', 'MySQL'],
    year: 2025,
    status: 'open-source',
    repo: 'https://github.com/JHanna-2020/AARSDS',
  },
  {
    name: 'Coptic Hymns Website',
    description: 'A website for learning and browsing Coptic Orthodox hymns.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: 2023,
    status: 'live',
    repo: 'https://github.com/JHanna-2020/Coptic-Hymns-Website',
    live: 'https://jhanna-2020.github.io/Coptic-Hymns-Website/',
  },
  {
    name: 'Web Development Service',
    description:
      'The first website I ever built — rough around the edges, kept online on purpose. Everything else on this page is the distance traveled since.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: 2020,
    status: 'live',
    repo: 'https://github.com/JHanna-2020/webdevelopmentservice',
    live: 'https://jhanna-2020.github.io/webdevelopmentservice/',
  },
]
