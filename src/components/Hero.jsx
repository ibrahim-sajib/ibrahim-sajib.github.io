import { profile } from '../data/content.js'
import HeroBackdrop from './HeroBackdrop.jsx'
import {
  ArrowRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from './Icons.jsx'

// Sizes differ because the outline icons have padding inside their viewBox; these render at the same visual size.
const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon, size: 19 },
  { label: 'GitHub', href: profile.github, icon: GitHubIcon, size: 20 },
  { label: 'Email', href: `mailto:${profile.email}`, icon: MailIcon, size: 24 },
  { label: 'WhatsApp', href: profile.whatsapp, icon: WhatsAppIcon, size: 26 },
]

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative -mt-16 flex min-h-svh items-center overflow-hidden pt-16"
    >
      <HeroBackdrop />

      <div className="container-page relative py-20">
        <p className="rise eyebrow flex flex-wrap items-center gap-x-3 gap-y-2" style={{ '--i': 0 }}>
          <span className="inline-block size-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-ink">{profile.role}</span>
          {/* Hidden on narrow screens, where the stack wraps onto its own line. */}
          <span aria-hidden="true" className="hidden text-line-strong sm:inline">
            —
          </span>
          <span>{profile.stack.join(' · ')}</span>
        </p>

        <h1
          id="hero-title"
          className="mt-6 font-display text-[clamp(3.5rem,13vw,8rem)] leading-[0.92] tracking-tight"
          style={{ '--i': 1 }}
        >
          {profile.firstName} <span className="text-accent-text">{profile.lastName}</span>
        </h1>

        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl"
          style={{ '--i': 2 }}
        >
          {profile.tagline}
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ '--i': 3 }}>
          <a href="#contact" className="btn btn-primary group">
            Contact Me
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <DownloadIcon size={16} />
            Download Resume
          </a>
        </div>

        <ul className="rise mt-8 -ml-2.5 flex items-center gap-1" style={{ '--i': 4 }}>
          {socials.map(({ label, href, icon: SocialIcon, size }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                title={label}
                className="grid size-11 place-items-center text-muted transition-colors hover:text-accent-text"
              >
                <SocialIcon size={size} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
