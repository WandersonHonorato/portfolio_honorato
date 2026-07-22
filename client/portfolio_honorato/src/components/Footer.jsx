import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <span>{profile.name} — feito com café e Spring Boot.</span>
      <div className="foot-socials">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>E-mail</a>
      </div>
    </footer>
  )
}
