const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Full-stack web applications built with modern frameworks — React, Next.js, Node.js — optimized for performance and scalability.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android apps using React Native and Flutter. Native feel, shared codebase, faster time-to-market.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'AWS, Azure, and GCP infrastructure setup, CI/CD pipelines, containerization with Docker & Kubernetes.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'Embedding AI capabilities — chatbots, recommendation engines, automation workflows — into your existing products.',
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    desc: 'Security audits, penetration testing, and implementing best practices to protect your data and systems.',
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    desc: 'REST and GraphQL API design, third-party integrations (Stripe, Twilio, Salesforce), and microservices architecture.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            End-to-end software solutions designed to move fast, scale seamlessly, and deliver real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-glow bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
