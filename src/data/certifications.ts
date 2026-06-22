export interface Certification {
  /** Certification title */
  name: string
  /** Issuing organization */
  issuer: string
  /** Date earned, e.g. "2026" or "June 2026" */
  date: string
  /**
   * Path to the certificate PDF/image you dropped in `public/certificates/`.
   * Use the path *relative to public/* — e.g. 'certificates/my-cert.pdf'.
   * The site prefixes the correct base URL automatically.
   */
  file?: string
  /** Or an external verification URL instead of a hosted file. */
  url?: string
}

// ---------------------------------------------------------------------------
// HOW TO ADD A CERTIFICATION
//   1. Drop the certificate PDF (or image) into  public/certificates/
//   2. Add an entry below pointing `file` at it (newest first).
// The section hides itself automatically while this list is empty.
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  {
    name: 'Introduction to Agent Skills',
    issuer: 'Anthropic',
    date: '2026',
    file: 'certificates/anthropic-intro-to-agent-skills.pdf',
  },
]
