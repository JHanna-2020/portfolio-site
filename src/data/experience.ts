export interface Internship {
  /** Job title */
  role: string
  /** Company / organization */
  company: string
  /** ISO start date, e.g. '2026-06-01' */
  start: string
  /** ISO end date, e.g. '2026-08-30' (omit if ongoing with no set end) */
  end?: string
  /** Optional location */
  location?: string
  /** Optional short blurb about the work */
  summary?: string
}

// ---------------------------------------------------------------------------
// Internships & experience, newest first. A "Current" badge shows
// automatically while today's date falls inside the start–end range.
// ---------------------------------------------------------------------------
export const internships: Internship[] = [
  {
    role: 'Computer Science Intern',
    company: 'Sports Media Inc.',
    start: '2026-06-01',
    end: '2026-08-30',
  },
]

/** Formats an ISO date as e.g. "Jun 2026". */
export function fmtMonth(iso: string): string {
  const [y, m] = iso.split('-').map(Number)
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  return `${months[m - 1]} ${y}`
}

/** True when today is within [start, end] (inclusive). */
export function isCurrent(job: Internship): boolean {
  const now = new Date()
  const start = new Date(job.start)
  const end = job.end ? new Date(job.end) : null
  return now >= start && (!end || now <= end)
}
