import { useEffect, useMemo, useRef, useState } from 'react'
import { SearchIcon, ChevronRightIcon } from './Icons.jsx'

export default function CommandPalette({ isOpen, onClose, sections, onNavigate }) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)

  const filtered = useMemo(
    () => sections.filter((s) => s.label.toLowerCase().includes(query.toLowerCase())),
    [query, sections]
  )

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setActiveIndex(0)
      const t = setTimeout(() => inputRef.current?.focus(), 30)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    if (activeIndex > filtered.length - 1) setActiveIndex(Math.max(filtered.length - 1, 0))
  }, [filtered, activeIndex])

  useEffect(() => {
    function handleKeyDown(e) {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter' && filtered[activeIndex]) {
        onNavigate(filtered[activeIndex].id)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filtered, activeIndex, onNavigate, onClose])

  if (!isOpen) return null

  return (
    <div
      className="palette-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="palette" role="dialog" aria-modal="true" aria-label="Buscar seções">
        <div className="palette-input-row">
          <SearchIcon width="17" height="17" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite um comando ou seção..."
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="palette-list">
          {filtered.map((sec, i) => (
            <button
              key={sec.id}
              className={'palette-item' + (i === activeIndex ? ' active' : '')}
              onClick={() => onNavigate(sec.id)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <ChevronRightIcon width="16" height="16" />
              <span>{sec.label}</span>
            </button>
          ))}
        </div>
        <div className="palette-footer">
          <span><kbd>&#8593;&#8595;</kbd> navegar</span>
          <span><kbd>&#9166;</kbd> ir</span>
          <span><kbd>Esc</kbd> fechar</span>
        </div>
      </div>
    </div>
  )
}
