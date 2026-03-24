export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-cta-bg border border-sentinel-border rounded-3xl px-6 sm:px-12 py-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-48 bg-sentinel-blue/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Secure Your Code <span className="text-sentinel-blue">Today</span>
            </h2>
            <p className="text-sentinel-muted text-base sm:text-lg max-w-lg mx-auto">
              Join 5,000+ engineering teams who trust Sentinel to protect their production environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                Get Started Free
              </button>
              <button className="border border-sentinel-border text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors text-sm">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
