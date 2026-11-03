import { about, profile } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import { ArrowUpRightIcon } from './Icons.jsx'

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineering business-critical systems with precision.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <Reveal className="space-y-6 text-lg leading-relaxed text-pretty text-muted">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={i === 0 ? 'text-ink' : undefined}>
              {paragraph}
            </p>
          ))}
          <p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1">
              Connect with me on LinkedIn
              <ArrowUpRightIcon size={16} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
        </Reveal>

        <Reveal as="dl" delay={120} className="card divide-y divide-line self-start">
          {about.facts.map((fact) => (
            <div key={fact.label} className="flex items-baseline gap-5 p-6">
              <dt className="min-w-34 shrink-0 font-display whitespace-nowrap text-4xl leading-none">
                {fact.value}
                <span className="ml-1.5 font-mono text-xs tracking-wide text-accent-text">{fact.unit}</span>
              </dt>
              <dd className="text-sm leading-relaxed text-muted">{fact.label}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
