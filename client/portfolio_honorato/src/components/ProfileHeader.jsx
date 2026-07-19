import avatarSrc from '../assets/foto-perfil.jpg'
import { VerifiedBadge, PinIcon, MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from './Icons.jsx'
import { profile } from '../data/content.js'

export default function ProfileHeader() {
  return (
    <>
      <div className="avatar-row">
        <img className="avatar" src={avatarSrc} alt={`Foto de perfil de ${profile.name}`} />
        <div className="status-chip">
          <span className="status-dot"></span>
          disponível para novos projetos
        </div>
      </div>

      <div className="name-block fade-in">
        <div className="name-line">
          <h1>{profile.name}</h1>
          <VerifiedBadge className="badge" />
        </div>
        <p className="tagline">{profile.tagline}</p>
        <p className="role">
          <b>{profile.role}</b> · {profile.roleSecondary}
        </p>

        <div className="meta-row">
          <span>
            <PinIcon width="15" height="15" />
            {profile.location}
          </span>
          <span>
            <MailIcon width="15" height="15" />
            {profile.email}
          </span>
          <span>
            <PhoneIcon width="15" height="15" />
            {profile.phone}
          </span>
        </div>

        <div className="socials">
          <a className="social-pill" href={profile.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon width="16" height="16" />
            <span className="handle">{profile.githubHandle}</span>
          </a>
          <a className="social-pill" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon width="16" height="16" />
            <span className="handle">{profile.linkedinHandle}</span>
          </a>
          <a className="social-pill" href={`mailto:${profile.email}`}>
            <MailIcon width="16" height="16" />
            <span className="handle">E-mail</span>
          </a>
        </div>
      </div>
    </>
  )
}
