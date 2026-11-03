import { research } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import { ArrowUpRightIcon } from './Icons.jsx'

export default function Research() {
  return (
    <Section
      id="research"
      index="06"
      eyebrow="Research & Contests"
      title="Research & Competitive Programming."
      lead="Academic publications, natural language processing research, and algorithmic problem solving."
    >
      <div className="space-y-10">
        {/* Publications */}
        <div>
          <h3 className="mb-4 text-xs font-mono uppercase tracking-wider text-muted">Publications & Research</h3>
          <ul className="grid gap-4">
            {research.publications.map((pub, i) => (
              <Reveal as="li" key={pub.title} delay={i * 80} className="card p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="badge text-accent-text font-mono text-xs">{pub.badge}</span>
                  {pub.year && <span className="font-mono text-xs text-muted">{pub.year}</span>}
                </div>
                <h4 className="mt-3 font-display text-xl leading-snug sm:text-2xl text-ink">
                  {pub.title}
                </h4>
                <p className="mt-2 text-sm text-muted">
                  <span className="font-medium text-ink">Venue:</span> {pub.conference}
                  {pub.location && ` — ${pub.location}`}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  <span className="font-medium text-ink">Authors:</span> {pub.authors}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Competitive Programming & Contests */}
        <div>
          <h3 className="mb-4 text-xs font-mono uppercase tracking-wider text-muted">Competitive Programming & Contests</h3>
          <Reveal className="card p-6 sm:p-8">
            <p className="text-base text-muted leading-relaxed">
              {research.competitiveProgramming.summary}
            </p>

            {/* Profile Handles */}
            <div className="mt-5 flex flex-wrap gap-3 border-t border-line pt-5">
              {research.competitiveProgramming.profiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs font-medium transition hover:border-line-strong hover:bg-accent-soft"
                >
                  <span className="font-mono text-muted">{profile.name}:</span>
                  <span className="text-ink">{profile.handle}</span>
                  <ArrowUpRightIcon size={13} />
                </a>
              ))}
            </div>

            {/* Achievements List */}
            <ul className="mt-6 divide-y divide-line border-t border-line pt-2">
              {research.competitiveProgramming.highlights.map((item) => (
                <li key={item.title} className="py-4 first:pt-4 last:pb-0 grid gap-1 sm:grid-cols-[14rem_1fr]">
                  <div>
                    <h5 className="font-medium text-ink text-sm">{item.title}</h5>
                    <span className="font-mono text-xs text-accent-text">{item.period}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

