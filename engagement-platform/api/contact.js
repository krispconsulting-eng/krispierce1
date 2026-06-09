// Vercel serverless function — POST /api/contact
// Forwards the enquiry to Resend so it lands in Kris's inbox.
//
// Required env vars on Vercel:
//   RESEND_API_KEY      — Resend API key
//   CONTACT_TO_EMAIL    — destination address, eg hello@krispierce.com.au
//   CONTACT_FROM_EMAIL  — verified sender, eg engage@krispierce.com.au

const MAX_LENGTH = 5000

function escape(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return res.status(500).json({ error: 'Contact endpoint is not configured.' })
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {}
  const name = (body.name || '').trim()
  const org = (body.org || '').trim()
  const email = (body.email || '').trim()
  const interest = (body.interest || '').trim()

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please supply a valid email address.' })
  }
  if (name.length > 200 || org.length > 200 || email.length > 200 || interest.length > MAX_LENGTH) {
    return res.status(400).json({ error: 'Submission too long.' })
  }

  const subject = `KrispConsulting enquiry: ${name}${org ? ` (${org})` : ''}`
  const text = [
    `Name: ${name}`,
    `Organisation: ${org || '(not supplied)'}`,
    `Email: ${email}`,
    '',
    'Message:',
    interest || '(no message supplied)',
  ].join('\n')

  const html = `
    <div style="font-family: 'DM Sans', system-ui, sans-serif; color: #0D1B2A;">
      <h2 style="color:#1E3A6E;">New enquiry from the engagement platform</h2>
      <p><strong>Name:</strong> ${escape(name)}</p>
      <p><strong>Organisation:</strong> ${escape(org) || '<em>(not supplied)</em>'}</p>
      <p><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escape(interest) || '<em>(no message)</em>'}</p>
    </div>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject,
        text,
        html,
      }),
    })

    if (!response.ok) {
      const detail = await response.text().catch(() => '')
      console.error('Resend error', response.status, detail)
      return res.status(502).json({ error: 'Could not send message right now. Please try again shortly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact handler exception', err)
    return res.status(500).json({ error: 'Unexpected server error.' })
  }
}

function safeParse(input) {
  try { return JSON.parse(input) } catch { return {} }
}
