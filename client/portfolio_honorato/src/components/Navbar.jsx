import { SearchIcon, GithubIcon, MoonIcon, SunIcon } from './Icons.jsx'
import { profile } from '../data/content.js'

export default function Navbar({ theme, onToggleTheme, onOpenPalette }) {
  return (
    <nav className="topnav">
      <div className="nav-left">
        <span className="nav-title nav-initials">WH</span>
      </div>
      <div className="nav-right">
        <button className="search-btn" onClick={onOpenPalette} aria-haspopup="dialog">
          <SearchIcon width="15" height="15" />
          <span className="nav-title">Buscar</span>
          <kbd>Ctrl K</kbd>
        </button>
        <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          <GithubIcon width="15" height="15" />
        </a>
        <button
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'dark' ? <MoonIcon width="16" height="16" /> : <SunIcon width="16" height="16" />}
        </button>
      </div>
    </nav>
  )
}
