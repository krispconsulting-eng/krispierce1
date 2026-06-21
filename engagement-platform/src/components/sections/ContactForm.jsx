import { useState } from 'react'
import Footer from '../layout/Footer'

const INITIAL = { name: '', org: '', email: '', interest: '' }

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID
const FORMSPREE_URL = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please add your name.'
  if (!values.email.trim()) errors.email = 'Please add your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'That email does not look right.'
  return errors
}

async function submitForm(values) {
  if (FORMSPREE_URL) {
    const res = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
    })
    if (!res.ok) throw new Error('Submission failed')
    return
  }

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || 'Submission failed')
  }
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | submitted | error
  const [errorMessage, setErrorMessage] = useState('')

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validate(values)
    if (Object.keys(validation).length) {
      setErrors(validation)
      return
    }

    setStatus('submitting')
    setErrorMessage('')
    try {
      await submitForm(values)
      setStatus('submitted')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please email info@krispierce.com.au directly.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0D1B2A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #4A7EC7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8E3B5E 0%, transparent 40%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#4A7EC7] text-xs font-semibold uppercase tracking-wider mb-4">
            Get in touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Together, we discover what works
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            No prescribed scope. No locked-in methodology. Tell me what you're working on and we'll find the right approach.
          </p>
        </div>

        {status === 'submitted' ? (
          <div className="text-center bg-white/5 rounded-2xl p-12 border border-white/10">
            <div className="text-4xl mb-4">✓</div>
            <div className="text-white font-semibold text-lg mb-2">Message received.</div>
            <div className="text-white/50 text-sm">I'll be in touch shortly. Best regards, Kris.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Field
                label="Name"
                required
                value={values.name}
                onChange={update('name')}
                placeholder="Your name"
                error={errors.name}
              />
              <Field
                label="Organisation"
                value={values.org}
                onChange={update('org')}
                placeholder="Your organisation"
              />
              <Field
                label="Email"
                type="email"
                required
                value={values.email}
                onChange={update('email')}
                placeholder="your@email.com"
                error={errors.email}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
                  What are you working on?
                </label>
                <textarea
                  rows={5}
                  value={values.interest}
                  onChange={update('interest')}
                  placeholder="Tell me about your project, challenge, or what you're trying to discover..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#4A7EC7]/50 transition-colors resize-none h-full min-h-[120px]"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#8E3B5E] hover:bg-[#8E3B5E]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all text-sm shadow-lg shadow-[#8E3B5E]/30 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? 'Sending…' : (<>Send message <span>→</span></>)}
              </button>
              {status === 'error' && (
                <div role="alert" className="text-xs text-[#8E3B5E] bg-[#8E3B5E]/10 border border-[#8E3B5E]/30 rounded-lg px-3 py-2">
                  {errorMessage}
                </div>
              )}
            </div>
          </form>
        )}

        <Footer />
      </div>
    </section>
  )
}

function Field({ label, error, required, type = 'text', ...rest }) {
  return (
    <div>
      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
        {label}{required && <span aria-hidden="true" className="text-[#8E3B5E] ml-1">*</span>}
      </label>
      <input
        type={type}
        aria-invalid={Boolean(error)}
        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none transition-colors ${
          error ? 'border-[#8E3B5E]/60 focus:border-[#8E3B5E]' : 'border-white/10 focus:border-[#4A7EC7]/50'
        }`}
        {...rest}
      />
      {error && <div role="alert" className="text-[11px] text-[#8E3B5E] mt-1.5">{error}</div>}
    </div>
  )
}
