'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const passwordStrength = () => {
    const p = form.password
    if (!p) return null
    const has12 = p.length >= 12
    const hasUpper = /[A-Z]/.test(p)
    const hasSymbol = /[^a-zA-Z0-9]/.test(p)
    const score = [has12, hasUpper, hasSymbol].filter(Boolean).length
    return score
  }

  const strength = passwordStrength()

  return (
    <div className="min-h-screen bg-[#0D0F14] text-white flex flex-col">

      {/* Top navbar */}
      <header className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 border-b border-[#1E2330]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#4A9EFF] rounded-md flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">Sentinel</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="text-[#4A5578] tracking-widest uppercase hidden sm:inline">Already have an account?</span>
          <Link
            href="/login"
            className="text-[#4A9EFF] font-bold tracking-widest uppercase hover:text-blue-300 transition-colors"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Main split layout */}
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* ── Left panel ── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:w-1/2 gap-10">

          {/* Protocol badge */}
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#4A9EFF] uppercase">
              Security Protocol Alpha
            </span>
          </div>

          {/* Hero copy */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight">
              Deploy your{' '}
              <span className="text-[#4A9EFF]">Silent<br />Guardian.</span>
            </h1>
            <p className="text-[#6B7A99] text-base sm:text-lg leading-relaxed max-w-md">
              Enterprise-grade intelligence orchestration. Secure your infrastructure with the world's most sophisticated threat detection engine.
            </p>
          </div>

          {/* Social proof cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {/* Testimonial card */}
            <div className="bg-[#13161D] border border-[#1E2330] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['#1E3A5F', '#2D1F3F', '#1A3030'].map((bg, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#13161D]"
                      style={{ background: bg }}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">
                  Join <span className="text-[#4A9EFF]">5,000+ teams</span>
                </span>
              </div>
              <p className="text-xs text-[#6B7A99] italic leading-relaxed">
                "The transition to Sentinel was seamless. Our MTTD dropped by 40% in the first quarter."
              </p>
            </div>

            {/* Uptime card */}
            <div className="bg-[#13161D] border border-[#1E2330] rounded-xl p-5 flex flex-col items-center justify-center text-center gap-1">
              <span className="text-4xl font-bold text-white tracking-tight">99.9%</span>
              <span className="text-[11px] tracking-widest text-[#4A5578] uppercase font-semibold">Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-12 lg:w-1/2 border-t lg:border-t-0 lg:border-l border-[#1E2330] bg-[#0F1117] gap-6">
          <div className="w-full max-w-md">
            {/* Card */}
            <div className="bg-[#13161D] border border-[#1E2330] rounded-2xl p-8 space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Create Account</h2>
                <p className="mt-1.5 text-sm text-[#6B7A99]">Configure your secure access credentials</p>
              </div>

              {/* Fields */}
              <div className="space-y-5">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold tracking-widest text-[#6B7A99] uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#0D0F14] border border-[#1E2330] rounded-lg px-4 py-3.5 text-sm text-white placeholder-[#3A4055] focus:outline-none focus:border-[#4A9EFF]/60 focus:ring-1 focus:ring-[#4A9EFF]/30 transition-colors"
                  />
                </div>

                {/* Work email */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold tracking-widest text-[#6B7A99] uppercase">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-[#0D0F14] border border-[#1E2330] rounded-lg px-4 py-3.5 text-sm text-white placeholder-[#3A4055] focus:outline-none focus:border-[#4A9EFF]/60 focus:ring-1 focus:ring-[#4A9EFF]/30 transition-colors"
                  />
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-semibold tracking-widest text-[#6B7A99] uppercase">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-[#0D0F14] border border-[#1E2330] rounded-lg px-4 pr-12 py-3.5 text-sm text-white placeholder-[#3A4055] focus:outline-none focus:border-[#4A9EFF]/60 focus:ring-1 focus:ring-[#4A9EFF]/30 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A5578] hover:text-white transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Password hint / strength */}
                  {form.password ? (
                    <div className="flex items-center gap-2 mt-2">
                      {[1, 2, 3].map(i => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            strength >= i
                              ? strength === 1 ? 'bg-red-500' : strength === 2 ? 'bg-yellow-500' : 'bg-green-500'
                              : 'bg-[#1E2330]'
                          }`}
                        />
                      ))}
                      <span className={`text-[10px] font-medium ${
                        strength === 1 ? 'text-red-400' : strength === 2 ? 'text-yellow-400' : 'text-green-400'
                      }`}>
                        {strength === 1 ? 'Weak' : strength === 2 ? 'Fair' : 'Strong'}
                      </span>
                    </div>
                  ) : (
                    <p className="text-[11px] text-[#4A5578] mt-1.5">
                      Must include 12+ characters, 1 uppercase, and 1 symbol.
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#4A9EFF] to-blue-400 text-white font-semibold py-3.5 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Initialize Deployment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Legal */}
              <p className="text-center text-xs text-[#4A5578] leading-relaxed">
                By registering, you agree to the{' '}
                <a href="#" className="text-[#4A9EFF] underline underline-offset-2 hover:text-blue-300">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[#4A9EFF] underline underline-offset-2 hover:text-blue-300">Data Protection Agreement</a>.
              </p>
            </div>

            {/* Encrypted badge */}
            <div className="flex items-center justify-center gap-2 mt-5">
              <svg className="w-3.5 h-3.5 text-[#3A4055]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-[11px] tracking-[0.2em] text-[#3A4055] uppercase font-medium">End-to-end encrypted session</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1E2330] px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex gap-6 order-2 sm:order-1">
          {['Privacy Policy', 'Terms of Service', 'Security Disclosure'].map(link => (
            <a key={link} href="#" className="text-[11px] tracking-widest text-[#3A4055] uppercase hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-[11px] tracking-widest text-[#3A4055] uppercase order-1 sm:order-2">
          © 2024 Sentinel Security. All rights reserved.
        </p>
      </footer>
    </div>
  )
}