# John Hanna — Portfolio

Freelance-positioned portfolio: three deep case studies, a project archive,
services, and contact. Built with **Next.js (App Router) + TypeScript +
Tailwind CSS v4**, statically exported — hosts free on **Vercel** or
**GitHub Pages**. Light and dark themes are both fully designed and follow
the system preference with zero JavaScript.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## Edit the content

Everything is data-driven — no need to touch the components:

- **`src/data/profile.ts`** — name, availability lines, bio, links.
  Fields marked `[SWAP]` are placeholders: replace them.
- **`src/data/case-studies.ts`** — the three deep case studies at
  `/work/<slug>/`. Each `placeholder` / `assetsNeeded` entry renders as a
  visible amber "TO SUPPLY" box on the page; delete each one as you fold the
  real detail into the copy.
- **`src/data/projects.ts`** — the compact archive grid.
- **`src/data/services.ts`** — the three freelance service lines.
- **`src/data/experience.ts`** — internships (a "Current" badge shows
  automatically while the date range includes today).
- **`src/data/certifications.ts`** — drop the PDF in `public/certificates/`
  and add an entry.

## Deploy

### Option A — Vercel (recommended: clean URL, per-page metadata previews)

Import the repo at [vercel.com/new](https://vercel.com/new) — the Next.js
preset is detected automatically. Or: `npm i -g vercel && vercel --prod`.

### Option B — GitHub Pages (current setup, no extra account)

Push to `main`; `.github/workflows/deploy.yml` builds the static export with
the `/portfolio-site` base path and publishes it automatically.

> After deploying, update `metadataBase` in `src/app/layout.tsx` if the
> site's canonical URL changes.
