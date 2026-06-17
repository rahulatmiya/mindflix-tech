import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import Groq from 'groq-sdk'
import 'dotenv/config'

const SYSTEM_PROMPT = `You are a friendly and knowledgeable assistant for Mindflix Technologies, a software development company with offices in Singapore, Mumbai, and London.

ABOUT MINDFLIX:
- Global software development company with offices in Singapore, Mumbai, and London
- 5+ years experience, 50+ projects delivered, 30+ happy clients
- Email: support@mindflix.in | Response time: within 24 hours
- Currently accepting new clients

SERVICES:
1. Web Development – Full-stack apps with React, Next.js, Node.js
2. Mobile Apps – iOS & Android using React Native and Flutter
3. Cloud & DevOps – AWS, Azure, GCP; Docker, Kubernetes, CI/CD pipelines
4. AI Integration – Chatbots, recommendation engines, automation workflows
5. Cybersecurity – Security audits and penetration testing
6. API & Integrations – REST/GraphQL APIs, Stripe, Twilio, Salesforce

SAAS PRODUCTS:
1. FlowDesk (Live) – AI helpdesk, smart ticket routing, reduces support load ~60%. From $29/mo
2. LaunchPad CRM (Live) – Sales pipeline, email automation, lead scoring, deal forecasting. From $49/mo
3. InvoiceFlow (Live) – Auto invoicing, subscription billing, Stripe/PayPal/accounting integrations. From $19/mo
4. TeamPulse (Beta) – HR platform: onboarding, leave management, performance reviews, pulse surveys. From $39/mo
5. DataLens (Coming Soon) – No-code BI dashboards, 50+ data connectors, scheduled reports. From $59/mo
6. SecureVault (Coming Soon) – Zero-knowledge enterprise password manager, SOC 2 compliant. From $9/mo

HOW TO GET STARTED:
- For custom projects: fill in the Contact form on the website or email support@mindflix.in
- For products: click "Get Started" on any Live product card
- Custom SaaS built from scratch is also available on request

GUIDELINES:
- Keep answers concise and helpful (2-4 sentences max unless detail is needed)
- Be warm and professional
- For pricing or specific technical questions you can't answer, invite them to contact the team
- Never make up information not listed above`

const app = express()
app.use(cors())
//app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    status: 'running',
    service: 'Mindflix API'
  })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, company, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.office365.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  })

  try {
    await transporter.sendMail({
      from: `"Mindflix Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#7c3aed">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px"><strong>Name</strong></td><td style="padding:8px 0">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#666"><strong>Company</strong></td><td style="padding:8px 0">${company}</td></tr>` : ''}
          </table>
          <h3 style="color:#7c3aed;margin-top:24px">Message</h3>
          <p style="background:#f3f0ff;padding:16px;border-radius:8px;line-height:1.6">${message.replace(/\n/g, '<br>')}</p>
          <p style="color:#999;font-size:12px;margin-top:24px">Sent from mindflix.com contact form</p>
        </div>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err.message)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' })
  }

  try {
    const client = new Groq({ apiKey: process.env.GROQ_API_KEY })
    const response = await client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 512,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
    })
    res.json({ content: response.choices[0].message.content })
  } catch (err) {
    console.error('Chat error:', err.message)
    res.status(500).json({ error: 'Failed to get response' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
