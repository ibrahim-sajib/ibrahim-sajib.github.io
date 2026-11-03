import { useRef, useState } from 'react'
import { profile } from '../data/content.js'
import { ContactError, sendContactMessage } from '../lib/contact.js'
import { AlertIcon, ArrowRightIcon, CheckIcon } from './Icons.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const MESSAGE_MAX = 5000
const emptyValues = { name: '', email: '', message: '', botcheck: false }

const validators = {
  name: (value) => (value.trim().length < 2 ? 'Please enter your name.' : ''),
  email: (value) => (EMAIL_RE.test(value.trim()) ? '' : 'Please enter a valid email address.'),
  message: (value) => {
    const length = value.trim().length
    if (length === 0) return 'Please enter a message.'
    if (length > MESSAGE_MAX) return `Your message is too long (${MESSAGE_MAX} characters max).`
    return ''
  },
}

function validateAll(values) {
  const errors = {}
  for (const [field, validate] of Object.entries(validators)) {
    const error = validate(values[field])
    if (error) errors[field] = error
  }
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-danger">
          <AlertIcon size={14} />
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')
  const formRef = useRef(null)
  const successRef = useRef(null)

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    required: true,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    onChange: (event) => {
      const { value } = event.target
      setValues((current) => ({ ...current, [name]: value }))
      // Once a field has shown an error, re-check it as the visitor types.
      if (errors[name]) setErrors((current) => ({ ...current, [name]: validators[name](value) }))
    },
    onBlur: (event) => {
      const { value } = event.target
      if (value) setErrors((current) => ({ ...current, [name]: validators[name](value) }))
    },
  })

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting') return

    const found = validateAll(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }

    setStatus('submitting')
    setServerError('')

    try {
      // Honeypot: real visitors never tick this hidden box. Pretend it worked.
      if (!values.botcheck) await sendContactMessage(values)

      setValues(emptyValues)
      setStatus('success')
      requestAnimationFrame(() => successRef.current?.focus())
    } catch (error) {
      if (!(error instanceof ContactError)) console.error(error)
      setServerError(
        error instanceof ContactError
          ? error.message
          : 'Something went wrong while sending your message.',
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="card flex h-full min-h-96 flex-col items-start justify-center p-8 outline-none sm:p-10"
      >
        <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-accent-text">
          <CheckIcon size={22} />
        </span>
        <h3 className="mt-6 font-display text-4xl leading-tight">Message sent.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Thanks for reaching out — it’s landed in my inbox and I’ll reply to the address you gave as soon as I can.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-secondary mt-8">
          Send another message
        </button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="contact-name" label="Name" error={errors.name}>
          <input type="text" autoComplete="name" placeholder="Your name" className="field" {...fieldProps('name')} />
        </Field>
        <Field id="contact-email" label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@company.com"
            className="field"
            {...fieldProps('email')}
          />
        </Field>
      </div>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          rows={6}
          placeholder="What are you working on?"
          className="field resize-y"
          {...fieldProps('message')}
        />
      </Field>

      {/* Honeypot - a checkbox, because browser autofill fills hidden text fields but never ticks boxes. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        checked={values.botcheck}
        onChange={(event) => setValues((current) => ({ ...current, botcheck: event.target.checked }))}
      />

      <div aria-live="polite">
        {status === 'error' && (
          <p className="flex items-start gap-2.5 rounded-xl border border-danger/40 bg-danger/5 p-4 text-sm leading-relaxed text-ink">
            <AlertIcon size={17} className="mt-0.5 shrink-0 text-danger" />
            <span>
              {serverError} You can also email me directly at{' '}
              <a href={`mailto:${profile.email}`} className="link">
                {profile.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <p className="text-sm text-muted">I usually reply within a day or two.</p>
        <button type="submit" disabled={submitting} className="btn btn-primary group">
          {submitting ? (
            <>
              <span
                aria-hidden="true"
                className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
              />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
