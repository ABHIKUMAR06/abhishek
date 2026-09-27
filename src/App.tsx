import { About } from './components/About'
import { Contact } from './components/Contact'
import { ExperienceSection } from './components/ExperienceSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { FloatingActions } from './components/FloatingActions'
import { Work } from './components/Work'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#about"
        className="focus:bg-accent-500 sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Nav />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
