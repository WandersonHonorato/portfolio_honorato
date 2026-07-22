import { useState } from 'react'
import { experience } from '../data/content.js'
import { BriefcaseIcon, ChevronDownIcon } from './Icons.jsx'

export default function Experience() {
  const [openMap, setOpenMap] = useState({})

  function toggle(id) {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="experiencia">
      <div className="eyebrow">Experiência</div>
      <h2>Trajetória</h2>

      {experience.map((exp) => {
        const isOpen = !!openMap[exp.id]
        return (
          <div className={'exp-item' + (isOpen ? ' open' : '')} key={exp.id}>
            <button
              className="exp-main"
              onClick={() => toggle(exp.id)}
              aria-expanded={isOpen}
            >
              <div className="exp-icon">
                <BriefcaseIcon width="19" height="19" />
              </div>
              <div className="exp-info">
                <div className="exp-role-row">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-org">{exp.org}</span>
                </div>
                <div className="exp-highlight">
                  <span className="exp-time">{exp.period}</span>
                  <div className="tag-row">
                    {exp.highlightTags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <span className="exp-toggle">
                <ChevronDownIcon width="16" height="16" />
              </span>
            </button>

            <div
              className="exp-details"
              style={{ maxHeight: isOpen ? '600px' : '0px' }}
            >
              <div className="exp-details-inner">
                <ul className="exp-desc">
                  {exp.details.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
