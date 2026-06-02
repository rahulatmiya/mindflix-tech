const team = [
  {
    name: 'Armaan Yadav',
    role: 'CEO & Co-Founder',
    bio: '10+ years in software architecture and product strategy. Ex-Google engineer.',
    initials: 'AY',
    color: 'from-purple-600 to-blue-600',
  },
  {
    name: 'Sahaj Yadav',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack engineer and cloud architect with expertise in distributed systems.',
    initials: 'SY',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    name: 'James Tan',
    role: 'Lead Designer',
    bio: 'UX/UI specialist who transforms complex flows into delightful user experiences.',
    initials: 'JT',
    color: 'from-violet-600 to-purple-600',
  },
  {
    name: 'Aisha Patel',
    role: 'Head of Engineering',
    bio: 'Drives engineering excellence with a passion for clean code and mentorship.',
    initials: 'AP',
    color: 'from-fuchsia-600 to-pink-600',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">The People</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 tracking-tight">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Passionate engineers, designers, and strategists united by a love of building great software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="card-glow bg-white/5 border border-white/10 rounded-2xl p-7 text-center backdrop-blur-sm"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-5 shadow-lg`}
              >
                {m.initials}
              </div>
              <h3 className="text-white font-bold text-lg">{m.name}</h3>
              <p className="text-purple-400 text-sm font-medium mt-1 mb-3">{m.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
