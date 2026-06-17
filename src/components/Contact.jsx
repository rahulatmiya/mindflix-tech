import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 tracking-tight leading-tight">
              Let's Build <br />
              <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Have a project in mind? We'd love to hear about it. Drop us a message
              and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'support@mindflix.in' },
                { icon: '🌏', label: 'Offices', value: 'Singapore • Mumbai ' },
                { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors text-sm resize-none"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gradient-bg text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
