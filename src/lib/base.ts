/**
 * Prefixes a public-asset path with the deploy base path.
 * Next.js applies `basePath` to routes automatically, but not to plain
 * `<a href>` / `<img src>` pointing at files in `public/`.
 */
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`
}
