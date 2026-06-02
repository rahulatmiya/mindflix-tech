const testimonials = [
  {
    name: 'David Lim',
    company: 'FinTrack Pte Ltd',
    role: 'CEO',
    quote:
      "Mindflix delivered our dashboard on time and under budget. The code quality was exceptional and the team's communication was seamless throughout.",
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    company: 'MediConnect Health',
    role: 'Product Manager',
    quote:
      "We went from concept to app store in 4 months. Mindflix's expertise in React Native saved us months of iteration and their proactive feedback was invaluable.",
    rating: 5,
  },
  {
    name: 'Rajiv Bose',
    company: 'LogiFlow Systems',
    role: 'CTO',
    quote:
      'Our supply chain errors dropped 40% after deployment. Mindflix took the time to truly understand our operational pain points before writing a single line of code.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Client Love</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-glow bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-slate-300 leading-relaxed text-sm flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
