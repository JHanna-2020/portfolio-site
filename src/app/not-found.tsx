import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-start px-5 py-32 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        This page doesn’t exist.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-accent"
      >
        ← Back to the home page
      </Link>
    </section>
  )
}
