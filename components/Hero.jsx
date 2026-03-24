import Terminal from './Terminal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4A9EFF 1px, transparent 1px), linear-gradient(90deg, #4A9EFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-sentinel-blue/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-6">
            {/* Engine badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 border border-sentinel-border bg-sentinel-card rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-sentinel-blue scan-pulse"></span>
              <span className="text-xs text-sentinel-muted font-mono tracking-widest uppercase">V2.4 Engine Live</span>
            </div>

            {/* Heading */}
            <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              The Silent{' '}
              <span className="text-sentinel-blue">Guardian</span>{' '}
              of Your Codebase
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up-delay-2 text-sentinel-muted text-base sm:text-lg leading-relaxed max-w-lg">
              Automated AI-driven vulnerability scanning that integrates deeply into your CI/CD pipeline. Detect, analyze, and patch threats before they reach production.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-sentinel-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-400 transition-colors text-sm">
                Start Free Scan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 border border-sentinel-border text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-sm">
                View Documentation
              </button>
            </div>

            {/* Trusted by */}
            <div className="animate-fade-in-up-delay-4 flex items-center gap-4 pt-2">
              <span className="text-xs text-sentinel-muted uppercase tracking-widest">Trusted by</span>
              <div className="flex items-center gap-4">
                {/* Placeholder logos */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`bg-sentinel-border rounded ${i === 0 ? 'w-8 h-6' : i === 1 ? 'w-12 h-4' : 'w-4 h-4 rounded-full'}`}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column – terminal */}
          <div className="animate-fade-in-up-delay-2 lg:pl-4">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
