export interface Certification {
  /** Certification title */
  name: string
  /** Issuing organization */
  issuer: string
  /** Date earned, e.g. "2025" or "May 2025" */
  date: string
  /** Optional verification/credential URL ('' or omit to hide) */
  url?: string
}

// ---------------------------------------------------------------------------
// Add your certifications here. The section automatically hides while empty.
// Example:
//   { name: 'CS50x: Introduction to Computer Science', issuer: 'HarvardX',
//     date: '2024', url: 'https://certificates.cs50.io/...' },
// ---------------------------------------------------------------------------
export const certifications: Certification[] = []
