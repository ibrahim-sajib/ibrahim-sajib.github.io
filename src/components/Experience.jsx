import { experience } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section id="experience" index="04" eyebrow="Experience" title="Where I’ve worked.">
      <ol className="relative ml-1.5 border-l border-line">
        {experience.map((role, i) => (
          <Reveal as="li" key={`${role.company}-${role.period}`} delay={i * 80} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[6.5px] size-3 rounded-full border-2 border-bg ring-1 ${
                i === 0 ? 'bg-accent ring-accent' : 'bg-line-strong ring-line-strong'
              }`}
            />
            <div className="grid gap-x-10 gap-y-3 md:grid-cols-[11rem_1fr]">
              <p className="font-mono text-xs leading-6 tracking-wide text-muted uppercase">{role.period}</p>
              <div>
                <h3 className="text-xl font-medium">{role.position}</h3>
                <p className="mt-1 text-muted">
                  {role.company}
                  {role.location && (
                    <>
                      <span aria-hidden="true" className="mx-2 text-line-strong">
                        /
                      </span>
                      {role.location}
                    </>
                  )}
                </p>
                <ul className="mt-5 max-w-2xl space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="relative pl-5 leading-relaxed text-pretty text-muted">
                      <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
