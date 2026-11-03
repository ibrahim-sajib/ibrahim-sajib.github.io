import { projects } from '../data/content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import { ArrowUpRightIcon, GitHubIcon } from './Icons.jsx'

// Accepts "example.com" or a full URL; returns null for empty or "#" placeholders
// so a link without a real address isn't rendered at all.
function externalUrl(value) {
  const url = value?.trim()
  if (!url || url === '#') return null
  return /^[a-z][a-z\d+.-]*:/i.test(url) ? url : `https://${url.replace(/^\/+/, '')}`
}

function ProjectCard({ project, index }) {
  const demo = externalUrl(project.demo)
  const repo = externalUrl(project.repo)

  return (
    <article data-tilt className="card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift sm:p-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{project.kind}</p>
          <h3 className="mt-3 font-display text-3xl leading-none sm:text-4xl">{project.title}</h3>
        </div>
        <span aria-hidden="true" className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
      </header>

      <p className="mt-5 leading-relaxed text-pretty text-muted">{project.description}</p>

      <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink">{project.highlight}</p>

      <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="badge">
            {tech}
          </li>
        ))}
      </ul>

      {(demo || repo) && (
        <footer className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 text-sm font-medium">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1">
              Live demo
              <span className="sr-only"> of {project.title} (opens in a new tab)</span>
              <ArrowUpRightIcon size={15} />
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
            >
              <GitHubIcon size={15} />
              Source
              <span className="sr-only"> for {project.title} on GitHub (opens in a new tab)</span>
            </a>
          )}
        </footer>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Selected work."
      lead="A few projects that show how I approach a problem — what it needed to do, and the decision that made the difference."
    >
      {projects.length === 0 ? (
        <div className="card border-dashed p-10 text-center">
          <p className="font-display text-3xl">Case studies are on the way.</p>
          <p className="mt-2 text-muted">
            I’m writing these up properly. In the meantime, <a href="#contact" className="link">ask me about recent work</a>.
          </p>
        </div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={(i % 2) * 90}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  )
}
