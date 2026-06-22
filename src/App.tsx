import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
