import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Research from './components/Research.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useTilt } from './hooks/useTilt.js'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const SplashCursor = lazy(() => import('./components/SplashCursor.jsx'))

function usePointerInUse() {
  const [inUse, setInUse] = useState(false)

  useEffect(() => {
    const canRun =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canRun) return

    const onMove = () => setInUse(true)
    window.addEventListener('mousemove', onMove, { once: true, passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return inUse
}

export default function App() {
  useTilt()
  const pointerInUse = usePointerInUse()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
      {pointerInUse && (
        <Suspense fallback={null}>
          <SplashCursor />
        </Suspense>
      )}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
