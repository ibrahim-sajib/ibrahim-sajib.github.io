import { profile } from '../data/content.js'
import ContactForm from './ContactForm.jsx'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './Icons.jsx'

const channels = [
  {
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: MailIcon, external: true },
  { label: 'GitHub', value: profile.githubHandle, href: profile.github, icon: GitHubIcon, external: true },
  {
    label: 'WhatsApp',
    value: profile.whatsappNumber,
    href: profile.whatsapp,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: PhoneIcon,
    external: false,
  },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Let’s connect and build."
      lead="Have an engineering role, a software project, or an inquiry? Send a message and it comes straight to my inbox."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-10">
        <Reveal as="ul" className="card divide-y divide-line self-start">
          {channels.map(({ label, value, href, icon: ChannelIcon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex items-center gap-4 p-5 transition-colors first:rounded-t-2xl last:rounded-b-2xl hover:bg-accent-soft sm:p-6"
              >
                <span className="grid size-10 shrink-0 place-items-center text-muted transition-colors group-hover:text-accent-text">
                  <ChannelIcon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="eyebrow block">{label}</span>
                  <span className="mt-1 block truncate font-medium">{value}</span>
                </span>
                <ArrowUpRightIcon
                  size={17}
                  className="shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-text"
                />
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  )
}
