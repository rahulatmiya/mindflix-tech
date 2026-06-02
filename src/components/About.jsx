const values = [
  { title: 'Innovation First', desc: 'We stay on the cutting edge so your product does too.' },
  { title: 'Client-Centric', desc: "Your goals are our goals. We build what matters, not what's flashy." },
  { title: 'Transparent', desc: 'No hidden costs, no surprises. Clear timelines and open communication.' },
  { title: 'Quality Code', desc: 'Clean, tested, documented code that your team can maintain long-term.' },
]

export default function About() {
  return (
    <section id="about" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 tracking-tight leading-tight">
              Crafting Software <br />
              <span className="gradient-text">That Matters</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Mindflix Technologies is a Singapore-based software company founded
              on the belief that great technology should be accessible to every
              business — not just the giants. We partner with startups and
              enterprises alike to build software that solves real problems.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Our multidisciplinary team of engineers, designers, and strategists
              bring diverse expertise to every project, ensuring you get more than
              just code — you get a product your users will love.
            </p>
            <a
              href="#contact"
              className="gradient-bg text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all inline-block"
            >
              Work With Us
            </a>
          </div>

          {/* Right: values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-white/10 rounded-2xl p-6"
              >
                <div className="w-8 h-1 gradient-bg rounded-full mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
