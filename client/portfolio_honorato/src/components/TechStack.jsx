import { techStack } from '../data/content.js'

export default function TechStack() {
  return (
    <section id="stack">
      <div className="eyebrow">Stack técnica</div>
      <h2>Habilidades Técnicas</h2>
      <div className="stack-grid">
        {techStack.map((group) => (
          <div className="stack-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-row">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
