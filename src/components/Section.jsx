import Reveal from './Reveal.jsx'

// Shared section shell: numbered eyebrow, display heading, optional lead.
export default function Section({ id, index, eyebrow, title, lead, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="eyebrow mb-4">
            <span className="text-accent-text">{index}</span>
            <span className="mx-2 text-line-strong">/</span>
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl"
          >
            {title}
          </h2>
          {lead && <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
