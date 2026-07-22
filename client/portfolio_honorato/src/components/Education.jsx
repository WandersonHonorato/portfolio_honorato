import { education } from '../data/content.js'
import { CapIcon } from './Icons.jsx'

export default function Education() {
  return (
    <section id="formacao">
      <div className="eyebrow">Formação Acadêmica</div>
      <h2>Graduações</h2>
      <div className="course-list">
        {education.map((item) => (
          <div className="course-item" key={item.course}>
            <div className="course-icon">
              <CapIcon width="17" height="17" />
            </div>
            <div>
              <div className="course-name">{item.course}</div>
              <div className="course-meta">
                <span className="org">{item.org} — {item.location}</span>
                <span className="period">{item.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
