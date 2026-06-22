import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}
