# John Hanna — Portfolio

A futuristic, single-page portfolio of my web, mobile, and full-stack projects.
Built with **React + Vite + TypeScript + Tailwind CSS** as a static site, so it
hosts for free on either **Vercel** or **GitHub Pages**.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

## Edit the content

Everything is data-driven — no need to touch the components:

- **`src/data/profile.ts`** — your name, role, tagline, and links.
  👉 Paste your **LinkedIn URL** into `links.linkedin` to show the LinkedIn button.
- **`src/data/projects.ts`** — the project list. Add, remove, or reorder freely.
  Set `private: true` for private repos (shows a lock badge, no broken link);
  set `featured: true` to pin a project to the top with a neon highlight.

## Deploy

### Option A — Vercel (recommended, gives a clean URL for LinkedIn)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects **Vite** — just click **Deploy**.
4. You get a URL like `https://your-project.vercel.app`. Add it to LinkedIn.

Or from the CLI:

```bash
npm i -g vercel
vercel --prod
```

### Option B — GitHub Pages (free, no extra account)

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) builds
   and publishes automatically.
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

> The workflow sets the correct base path automatically. If you instead use a
> custom domain or a `username.github.io` repo, the base is `/` — no change needed
> on Vercel.

## Add to LinkedIn

Profile → **Contact info** (or the **Featured** section) → add the deployed URL.
