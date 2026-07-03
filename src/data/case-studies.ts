// ---------------------------------------------------------------------------
// The three deep case studies. Each renders at /work/<slug>/.
// Copy follows problem → approach → decisions → outcome.
//
// `placeholder` fields render as clearly-marked "TO SUPPLY" boxes on the page
// so nothing here quietly pretends to be a fact you haven't confirmed.
// Delete a placeholder once you've folded the real detail into the copy.
// ---------------------------------------------------------------------------

export type Status =
  | 'live'
  | 'app-store'
  | 'open-source'
  | 'private'
  | 'archived'

export interface CaseSection {
  heading: string
  paragraphs: string[]
  /** Optional "TO SUPPLY" note rendered after the paragraphs. */
  placeholder?: string
}

export interface CaseStudy {
  slug: string
  title: string
  /** Shown above the title when the work was for a named client. */
  client?: string
  year: string
  status: Status
  /** One-sentence hook used on the home-page work index. */
  summary: string
  role: string
  stack: string[]
  links: { label: string; href: string }[]
  /** Opening paragraph on the case-study page — the thesis of the project. */
  lede: string
  sections: CaseSection[]
  /** Page-level assets still needed (screenshots, metrics …). */
  assetsNeeded: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'pacemint',
    title: 'PaceMint',
    year: '2026',
    status: 'live',
    summary:
      'A multi-user budgeting dashboard where the server never sees a number — every financial record is encrypted in the browser before it leaves.',
    role: 'Design, engineering, and deployment — solo',
    stack: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    links: [
      { label: 'Live app', href: 'https://pacemint.vercel.app/' },
      { label: 'Source', href: 'https://github.com/JHanna-2020/pacemint' },
    ],
    lede:
      'Budgeting apps ask for the most complete picture of your life that exists — every account, every transaction — and store it in someone else’s database. PaceMint is built on a different contract: the database only ever holds ciphertext, so even the person operating it (me) cannot read a user’s finances.',
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Households that want to budget together face a bad trade: either share spreadsheets manually, or hand their combined financial picture to a third-party service and trust its security posture forever. The interesting engineering question was whether a shared, synced, multi-user budgeting tool could work without that trust requirement at all.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'The encryption boundary is the browser. Financial records are encrypted client-side before any network request, and decrypted only after they arrive back. Supabase provides auth, Postgres storage, and row-level security for per-account isolation — but the rows it protects are opaque blobs plus the minimal metadata needed to sync.',
          'That one decision shapes everything downstream. The server can’t compute a monthly total over data it can’t read, so aggregation, search, and category math all run client-side over decrypted data. It’s a real cost, and accepting it deliberately — instead of quietly weakening the encryption story — was the core design call of the project.',
        ],
        placeholder:
          'Confirm the crypto specifics for the write-up: cipher and mode (e.g. AES-GCM via the Web Crypto API), how keys are derived and stored, and what happens when a user loses their passphrase.',
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'PaceMint is live in production and in day-to-day use, with the code public. It is the project I point to when someone asks whether I can carry a product from a blank repo to a deployed, security-conscious system alone.',
        ],
        placeholder:
          'Add one or two honest numbers: how many users/households, how long it has been running, anything measurable.',
      },
    ],
    assetsNeeded: [
      'Two or three screenshots: the dashboard, and ideally one shot that makes the encryption story visible (e.g. what a row looks like in the database).',
    ],
  },
  {
    slug: 'st-julitta',
    title: 'St. Julitta church apps',
    client: 'St. Julitta Coptic Orthodox Church',
    year: '2026',
    status: 'app-store',
    summary:
      'The official iOS app for a church congregation — announcements with push notifications, a Coptic calendar, and member registration — live on the App Store, with a native Android companion built and on the way.',
    role: 'Sole developer — iOS, Android, and backend',
    stack: ['Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/st-julitta-pearland/id6761444244',
      },
    ],
    lede:
      'A real client, a real congregation, and two platforms to ship on. St. Julitta needed one official channel for parish life — announcements people actually see, the Coptic liturgical calendar, and member registration — and trusted a single developer to deliver it: first on iOS, now live on the App Store, with Android next.',
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Parish communication lived in group chats and word of mouth: announcements missed the people who needed them, and there was no single place for the liturgical calendar or member records. The church wanted an official app its whole congregation could rely on — which meant both app stores, not one.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'I built native on both platforms rather than reaching for a cross-platform framework: SwiftUI on iOS, and Jetpack Compose on Android with an MVVM + Hilt architecture. For an app whose main job is reliable push notifications and a calendar people check weekly, platform-native delivery and long-term maintainability beat a shared codebase.',
          'Both clients share one Firebase backend — Auth for member accounts, Firestore for announcements and calendar data, and Cloud Messaging for push. Writing the same features twice against one backend was also a forcing function: the data model had to be clean enough that neither client needed special cases.',
        ],
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'The iOS app is live on the App Store as St. Julitta Pearland — the parish’s official channel, built and maintained end to end by one developer. The Android companion is built with Jetpack Compose and headed for release next. This is the engagement I point to when a client asks what working with me looks like: requirements from non-technical stakeholders, two platforms, and software their community depends on.',
        ],
        placeholder:
          'Add the congregation or install count, the Android release timeline once it’s set, and a quote from the church if you can get one — a client quote is worth more than any metric here.',
      },
    ],
    assetsNeeded: [
      'Phone screenshots of the iOS app (announcements + calendar screens), ideally framed on device; add Android shots when it ships.',
    ],
  },
  {
    slug: 'nil-sports-media',
    title: 'NIL Sports Media',
    year: '2026',
    status: 'live',
    summary:
      'A web platform connecting student-athletes with brands for name, image, and likeness deals — built with Next.js and TypeScript, live in production.',
    role: 'Full-stack development', // [SWAP] confirm your exact role
    stack: ['Next.js', 'TypeScript', 'React'],
    links: [{ label: 'Live site', href: 'https://sm-nil.vercel.app' }],
    lede:
      'Since the NCAA’s NIL rules changed, student-athletes can earn from their name, image, and likeness — but the matchmaking between athletes and the brands that want them is still mostly DMs and luck. NIL Sports Media puts that discovery on a platform.',
    sections: [
      {
        heading: 'Problem',
        paragraphs: [
          'Brands want to find athletes whose audience fits their product; athletes want deals without an agent taking the relationship off-platform. Both sides need profiles, discovery, and a credible middle layer — which is a marketplace problem, and marketplaces live or die on how quickly each side finds the other.',
        ],
      },
      {
        heading: 'Approach',
        paragraphs: [
          'The platform is built with Next.js and TypeScript and deployed on Vercel — server-rendered pages where discovery and sharing matter, typed end to end.',
        ],
        placeholder:
          'Describe what you actually built: which features exist (athlete profiles? brand accounts? deal flow? messaging?), what the data model looks like, and one technical decision you’d defend in an interview.',
      },
      {
        heading: 'Outcome',
        paragraphs: [
          'The platform is live in production.',
        ],
        placeholder:
          'Clarify the engagement: how this relates to your Sports Media Inc. internship (same company? separate client?), who uses it today, and any traction worth stating.',
      },
    ],
    assetsNeeded: [
      'Screenshots of the athlete-facing and brand-facing views.',
      'Confirmation of how to credit the client/company, and whether you can share details publicly.',
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
