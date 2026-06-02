const products = [
  {
    name: 'FlowDesk',
    tagline: 'Customer Support, Reimagined',
    desc: 'AI-powered helpdesk platform with smart ticket routing, canned responses, and real-time analytics. Reduce support load by up to 60%.',
    badge: 'Live',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    price: 'From $29/mo',
    icon: '🎧',
    features: ['AI ticket triage', 'Multi-channel inbox', 'SLA tracking', 'Custom workflows'],
    color: 'from-purple-600/15 to-blue-600/15',
    accentColor: 'text-purple-400',
  },
  {
    name: 'LaunchPad CRM',
    tagline: 'Close Deals Faster',
    desc: 'A lightweight yet powerful CRM built for growing sales teams. Pipeline management, email sequences, and deal forecasting in one place.',
    badge: 'Live',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    price: 'From $49/mo',
    icon: '🚀',
    features: ['Visual pipeline', 'Email automation', 'Lead scoring', 'Revenue forecasting'],
    color: 'from-blue-600/15 to-cyan-600/15',
    accentColor: 'text-blue-400',
  },
  {
    name: 'InvoiceFlow',
    tagline: 'Billing Without the Headache',
    desc: 'Automated invoicing, subscription billing, and payment reminders. Integrates with Stripe, PayPal, and major accounting tools.',
    badge: 'Live',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    price: 'From $19/mo',
    icon: '💳',
    features: ['Auto-invoicing', 'Subscription mgmt', 'Multi-currency', 'Tax compliance'],
    color: 'from-violet-600/15 to-purple-600/15',
    accentColor: 'text-violet-400',
  },
  {
    name: 'TeamPulse',
    tagline: 'HR & People Operations',
    desc: 'All-in-one HR platform covering onboarding, leave management, performance reviews, and employee engagement surveys.',
    badge: 'Beta',
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    price: 'From $39/mo',
    icon: '👥',
    features: ['Digital onboarding', 'Leave tracker', 'Performance reviews', 'Pulse surveys'],
    color: 'from-fuchsia-600/15 to-pink-600/15',
    accentColor: 'text-fuchsia-400',
  },
  {
    name: 'DataLens',
    tagline: 'Business Intelligence for Everyone',
    desc: 'Connect your data sources and build beautiful dashboards without writing SQL. Share insights across your team in minutes.',
    badge: 'Coming Soon',
    badgeColor: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    price: 'From $59/mo',
    icon: '📊',
    features: ['No-code dashboards', '50+ connectors', 'Scheduled reports', 'Role-based access'],
    color: 'from-cyan-600/15 to-blue-600/15',
    accentColor: 'text-cyan-400',
  },
  {
    name: 'SecureVault',
    tagline: 'Enterprise Password & Secrets Manager',
    desc: 'Securely store, share, and rotate credentials across your organization. Zero-knowledge architecture, SOC 2 compliant.',
    badge: 'Coming Soon',
    badgeColor: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    price: 'From $9/mo',
    icon: '🔐',
    features: ['Zero-knowledge', 'Team vaults', 'Secret rotation', 'Audit logs'],
    color: 'from-indigo-600/15 to-violet-600/15',
    accentColor: 'text-indigo-400',
  },
]

export default function SaasProducts() {
  return (
    <section id="products" className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 tracking-tight">
            SaaS <span className="gradient-text">Products</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Beyond client work, we build our own suite of software products — tools designed to solve real pain points for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className={`card-glow bg-gradient-to-br ${p.color} border border-white/10 rounded-2xl p-7 backdrop-blur-sm flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="text-4xl">{p.icon}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-white mb-1">{p.name}</h3>
              <p className={`text-sm font-semibold mb-3 ${p.accentColor}`}>{p.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white font-bold text-sm">{p.price}</span>
                {p.badge === 'Coming Soon' ? (
                  <button
                    className="text-xs font-semibold px-4 py-2 rounded-full border border-white/20 text-slate-400 cursor-default"
                    disabled
                  >
                    Notify Me
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="text-xs font-semibold px-4 py-2 rounded-full border border-transparent gradient-bg text-white hover:opacity-90 transition-all hover:scale-105"
                  >
                    Get Started
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 rounded-2xl p-10">
          <h3 className="text-2xl font-extrabold text-white mb-3">
            Need a custom SaaS built for your business?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            We also build white-label and bespoke SaaS platforms from the ground up — your idea, our engineering.
          </p>
          <a
            href="#contact"
            className="gradient-bg text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all inline-block hover:scale-105"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  )
}
