const projects = [
  {
    title: 'FinTrack Pro',
    category: 'Web App',
    desc: 'Real-time financial dashboard for SMEs with automated reporting and expense tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: 'from-purple-600/20 to-blue-600/20',
  },
  {
    title: 'MediConnect',
    category: 'Mobile App',
    desc: 'Telemedicine platform connecting patients with doctors via secure video consultations.',
    tech: ['React Native', 'WebRTC', 'AWS'],
    color: 'from-blue-600/20 to-cyan-600/20',
  },
  {
    title: 'LogiFlow',
    category: 'Enterprise SaaS',
    desc: 'Supply chain management system that reduced delivery errors by 40% for a logistics firm.',
    tech: ['Next.js', 'Python', 'Kubernetes'],
    color: 'from-violet-600/20 to-purple-600/20',
  },
  {
    title: 'ShopSpark',
    category: 'E-Commerce',
    desc: 'Multi-vendor marketplace with AI-powered product recommendations and analytics.',
    tech: ['React', 'GraphQL', 'Stripe'],
    color: 'from-fuchsia-600/20 to-pink-600/20',
  },
  {
    title: 'EduLearn LMS',
    category: 'EdTech',
    desc: 'Learning management system serving 10k+ students with live classes and assessments.',
    tech: ['Vue.js', 'Django', 'Redis'],
    color: 'from-indigo-600/20 to-blue-600/20',
  },
  {
    title: 'HRSync',
    category: 'HR Tech',
    desc: 'End-to-end HR platform for onboarding, payroll, and performance management.',
    tech: ['Angular', 'Java Spring', 'MySQL'],
    color: 'from-blue-600/20 to-teal-600/20',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of products we've designed, built, and shipped for clients across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`card-glow bg-gradient-to-br ${p.color} border border-white/10 rounded-2xl p-7 backdrop-blur-sm`}
            >
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest bg-purple-900/40 px-3 py-1 rounded-full">
                {p.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-blue-300 bg-blue-900/30 border border-blue-700/30 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
