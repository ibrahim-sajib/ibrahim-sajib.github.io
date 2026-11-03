import { education } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

// "2021-2023" → "2021 – 2023"; single years pass through unchanged.
const formatPeriod = (period) => period.replace(/\s*[-–—]\s*/, ' – ')

export default function Education() {
  return (
    <Section id="education" index="05" eyebrow="Education" title="Education.">
      <Reveal as="ul" className="card divide-y divide-line">
        {education.map((item) => (
          <li
            key={`${item.title}-${item.year}`}
            className="grid gap-x-8 gap-y-2 p-6 sm:grid-cols-[8.5rem_1fr_auto] sm:items-baseline sm:px-8"
          >
            <p className="font-display text-xl leading-7 whitespace-nowrap text-accent-text tabular-nums">
              {formatPeriod(item.year)}
            </p>
            <div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-1 text-muted">{item.institution}</p>
              {item.highlight && <p className="mt-1.5 text-xs font-mono text-ink">{item.highlight}</p>}
            </div>
            <p className="badge justify-self-start">{item.type}</p>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
