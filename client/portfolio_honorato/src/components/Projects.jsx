import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projetos">
      <div className="eyebrow">Projetos</div>
      <h2>Projetos Finalizados</h2>

      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <div className="project-top">
            <div className="project-title">{project.title}</div>
            {project.link && (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel}
              </a>
            )}
          </div>
          <p className="project-desc">{project.description}</p>
          {project.modules && (
            <div className="modules">
              {project.modules.map((mod) => (
                <div className="module-chip" key={mod}>{mod}</div>
              ))}
            </div>
          )}
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
