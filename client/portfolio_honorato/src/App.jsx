import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Cover from './components/Cover.jsx'
import ProfileHeader from './components/ProfileHeader.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Courses from './components/Courses.jsx'
import Footer from './components/Footer.jsx'
import { sections } from './data/content.js'

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const navigateTo = useCallback((id) => {
    setPaletteOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  useEffect(() => {
    function handleGlobalKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        sections={sections}
        onNavigate={navigateTo}
      />

      <Cover />

      <div className="identity">
        <ProfileHeader />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Courses />
        <Footer />
      </div>
    </>
  )
}
