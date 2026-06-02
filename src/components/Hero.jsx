export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8 text-sm text-purple-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now accepting new clients
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
          Building{' '}
          <span className="gradient-text">Intelligent</span>
          <br />
          Software Solutions
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mindflix Technologies crafts cutting-edge web apps, mobile solutions,
          and custom software that transforms your vision into a competitive
          advantage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-full text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-700/30"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all"
          >
            View Our Work
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '30+', label: 'Happy Clients' },
            { num: '5+', label: 'Years Experience' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold gradient-text">{num}</div>
              <div className="text-slate-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span>Scroll down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent animate-bounce" />
      </div> */}
    </section>
  )
}
