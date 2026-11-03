import { skillGroups } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills & Tech Stack"
      title="A focused stack, used deliberately."
      lead="The tools I reach for every day, and the supporting pieces around them."
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.title} delay={i * 70} className="card flex min-w-0 flex-col p-6 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-base font-medium">{group.title}</h3>
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{group.summary}</p>

            <p className="mt-8 flex flex-wrap items-baseline font-display text-3xl leading-tight sm:text-4xl">
              {group.primary.map((skill, j) => (
                <span key={skill}>
                  {j > 0 && <span className="mx-2 text-accent">·</span>}
                  {skill}
                </span>
              ))}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
              {group.items.map((item) => (
                <li key={item} className="badge">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
