import { courses } from '../data/content.js'
import { CapIcon } from './Icons.jsx'

export default function Courses() {
  return (
    <section id="cursos">
      <div className="eyebrow">Cursos &amp; Certificações</div>
      <h2>Formação contínua</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div className="course-item" key={course.name}>
            <div className="course-icon">
              <CapIcon width="17" height="17" />
            </div>
            <div>
              <div className="course-name">{course.name}</div>
              <div className="course-meta">
                <span className="org">@ {course.org}</span>
                <span className="period">{course.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
