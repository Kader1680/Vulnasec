const GitHubMockup = () => (
  <div className="mt-6 bg-github-mockup border border-sentinel-border rounded-lg overflow-hidden text-xs font-mono">
    <div className="px-3 py-2 border-b border-sentinel-border flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-sentinel-blue/20 flex items-center justify-center">
        <svg className="w-2.5 h-2.5 text-sentinel-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      </div>
      <span className="text-sentinel-muted">Sentinel Bot</span>
      <span className="text-gray-500 ml-auto">commented on PR #142</span>
    </div>
    <div className="p-3 space-y-1.5">
      <div className="bg-red-500/10 border border-red-500/20 rounded px-2.5 py-2">
        <div className="text-red-400 font-semibold text-[11px] mb-0.5">⚠ Vulnerability Detected</div>
        <div className="text-sentinel-muted text-[10px]">Detected 1 critical security risk in <span className="text-white">package-lock.json</span></div>
      </div>
    </div>
  </div>
)

const AIChip = () => (
  <div className="mt-6 relative rounded-lg overflow-hidden bg-gradient-to-br from-gradient-from to-gradient-to border border-sentinel-border h-32 flex items-center justify-center">
    <div className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `linear-gradient(#4A9EFF 1px, transparent 1px), linear-gradient(90deg, #4A9EFF 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}
    />
    <div className="relative z-10 text-center">
      <div className="w-12 h-12 mx-auto bg-sentinel-blue/10 border border-sentinel-blue/30 rounded-xl flex items-center justify-center mb-2">
        <svg className="w-6 h-6 text-sentinel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
        </svg>
      </div>
      <div className="text-sentinel-blue text-xs font-mono scan-pulse">Analyzing patterns...</div>
    </div>
  </div>
)

const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-sentinel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Native GitHub Integration',
    description: 'Every PR is automatically scanned. Get vulnerability reports as code comments, complete with remediation steps and automated fix suggestions.',
    extra: <GitHubMockup />,
    large: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sentinel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'AI-Driven Analysis',
    description: 'Move beyond simple regex. Our AI engine understands code context to eliminate false positives and identify complex logic flaws.',
    extra: <AIChip />,
    large: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sentinel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance Ready',
    description: 'Generate SOC2, ISO27001, and HIPAA compliant reports with a single click. Ideal for audit readiness.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sentinel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Optimized scanning engine that completes full codebase analysis in under 60 seconds. Zero friction for devs.',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sentinel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-time Alerts',
    description: 'Get notified immediately via Slack, Discord, or Email when new vulnerabilities are discovered in your stack.',
  },
]

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Engineered for <span className="text-sentinel-blue">Modern Workflows</span>
          </h2>
          <p className="text-sentinel-muted text-base sm:text-lg leading-relaxed">
            Security shouldn't be a roadblock. Sentinel integrates natively where developers live, providing real-time feedback and actionable intelligence.
          </p>
        </div>

        {/* Top two large cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {features.slice(0, 2).map((f) => (
            <div
              key={f.title}
              className="bg-sentinel-card border border-sentinel-border rounded-2xl p-6 hover:border-sentinel-blue/30 transition-colors"
            >
              <div className="w-10 h-10 bg-sentinel-blue/10 rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sentinel-muted text-sm leading-relaxed">{f.description}</p>
              {f.extra}
            </div>
          ))}
        </div>

        {/* Bottom three smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.slice(2).map((f) => (
            <div
              key={f.title}
              className="bg-sentinel-card border border-sentinel-border rounded-2xl p-6 hover:border-sentinel-blue/30 transition-colors"
            >
              <div className="w-10 h-10 bg-sentinel-blue/10 rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sentinel-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
