export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-extrabold gradient-text">Mindflix</span>
            <p className="text-slate-500 text-sm mt-1">Technologies Ltd</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {['Services', 'About', 'Portfolio', 'Products', 'Team', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-slate-600 text-sm">
            © {year} Mindflix Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
