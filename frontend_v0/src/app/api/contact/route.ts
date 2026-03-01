// frontend_v0/src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const firstName = String(body?.firstName ?? '').trim()
    const lastName = String(body?.lastName ?? '').trim()
    const email = String(body?.email ?? '').trim()
    const country = String(body?.country ?? '').trim()
    const message = String(body?.message ?? '').trim()

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Very basic email format check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Ensure env is present
    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT
    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS
    const EMAIL_TO = process.env.EMAIL_TO

    if (!SMTP_HOST || !SMTP_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return NextResponse.json({ error: 'Server is not configured for email' }, { status: 500 })
    }

    const port = Number(SMTP_PORT)
    const secure = port === 465 // 465 = implicit TLS, 587 = STARTTLS

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    const safeMessageHtml = escapeHtml(message).replaceAll('\n', '<br/>')

    await transporter.sendMail({
      from: `"Bext Solutions Website" <${EMAIL_USER}>`,
      to: EMAIL_TO, // can be same as EMAIL_USER
      subject: `New inquiry: ${firstName} ${lastName}`,
      replyTo: email,
      text: [
        'New contact form submission:',
        '',
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Country: ${country || '(not provided)'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Country:</strong> ${escapeHtml(country || '(not provided)')}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessageHtml}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}