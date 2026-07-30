import type { Metadata } from 'next'
import { Schibsted_Grotesk, Spline_Sans_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { profile } from '@/data/profile'
import './globals.css'

const display = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

const mono = Spline_Sans_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-spline-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jhanna-2020.github.io/portfolio-site'),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description:
    'Full-stack and mobile developer in Houston, TX. Web apps in React/Next.js, native iOS and Android, shipped end to end.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
