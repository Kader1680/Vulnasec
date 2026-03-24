'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-[#0D0F14] text-white flex flex-col">
      {/* Main split layout */}
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* ── Left panel ── */}
        <div className="relative flex flex-col justify-between px-8 py-10 lg:w-1/2 lg:px-16 lg:py-14 overflow-hidden">

          {/* Background terminal text */}
          <div
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
            aria-hidden="true"
          >
            {Array.from({ length: 18 }).map((_, row) => (
              <div key={row} className="flex flex-wrap gap-3 px-8 py-1 opacity-[0.07]">
                {Array.from({ length: 12 }).map((_, col) => (
                  <span key={col} className="font-mono text-xs text-sentinel-blue whitespace-nowrap">
                    {['GET', 'POST', 'DELETE', 'PATCH', '200', '404', '500', 'null', 'true', 'void', '0x4f', 'EOF'][
                      (row * 12 + col) % 12
                    ]}
                  </span>
                ))}
              </div>
            ))}
            {/* Gradient fade over text */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F14]/60 via-transparent to-[#0D0F14]/80" />
          </div>

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-2.5">
            <div className="w-8 h-8 bg-sentinel-blue rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">Sentinel</span>
          </div>

          {/* Hero copy */}
          <div className="relative z-10 space-y-5 mt-12 lg:mt-0">
            {/* Faint scan line details */}
            <div className="font-mono text-[11px] text-[#3A4055] space-y-0.5 mb-6">
              <div>INIT_SCAN_ENGINE — v2.4.1</div>
              <div>DEEP_SCAN: <span className="text-[#4A5070]">142</span> DEPS LOADED</div>
              <div>
                <span className="text-red-500/50">CRITICAL</span> — CVE-2024-4068
              </div>
              <div>
                <span className="text-orange-500/50">HIGH</span> — LINE 42
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Intelligence in<br />
              <span className="text-sentinel-blue">every byte.</span>
            </h1>
            <p className="text-[#6B7A99] text-base sm:text-lg leading-relaxed max-w-md">
              Welcome to the command center. Our systems are working silently to ensure your operational integrity is never compromised.
            </p>
          </div>

          {/* Social proof */}
          <div className="relative z-10 mt-12 lg:mt-0 flex items-center gap-4">
            <div className="flex -space-x-2">
              {['JD', 'AS', 'KM'].map((initials, i) => (
                <div
                  key={initials}
                  className="w-9 h-9 rounded-full border-2 border-[#0D0F14] flex items-center justify-center text-[10px] font-bold"
                  style={{ background: ['#1E3A5F', '#1A3030', '#2D1F3F'][i] }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Trusted by <span className="text-sentinel-blue">2,000+ teams</span>
              </div>
              <div className="text-xs text-[#6B7A99]">Securing global digital assets.</div>
            </div>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="flex items-center justify-center px-6 py-12 lg:w-1/2 lg:px-16 bg-[#0D0F14] lg:bg-[#0F1117] border-t lg:border-t-0 lg:border-l border-[#1E2330]">
          <div className="w-full max-w-md space-y-8">
            {/* Form header */}
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Secure Access</h2>
              <p className="mt-2 text-[#6B7A99] text-sm">Provide your credentials to enter the platform.</p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold tracking-widest text-[#6B7A99] uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A5578]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#161920] border border-[#1E2330] rounded-lg pl-11 pr-4 py-3.5 text-sm text-white placeholder-[#3A4055] focus:outline-none focus:border-sentinel-blue/60 focus:ring-1 focus:ring-sentinel-blue/30 transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-semibold tracking-widest text-[#6B7A99] uppercase">
                    Security Key
                  </label>
                  <a href="#" className="text-xs text-sentinel-blue hover:text-blue-400 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A5578]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#161920] border border-[#1E2330] rounded-lg pl-11 pr-12 py-3.5 text-sm text-white placeholder-[#3A4055] focus:outline-none focus:border-sentinel-blue/60 focus:ring-1 focus:ring-sentinel-blue/30 transition-colors"
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
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setRemember(!remember)}
                  className={`w-4 h-4 rounded border flex-shrink-0 transition-colors flex items-center justify-center ${remember ? 'bg-sentinel-blue border-sentinel-blue' : 'border-[#2E3347] bg-transparent'}`}
                >
                  {remember && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span className="text-sm text-[#6B7A99]">Remember this device for 30 days</span>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full relative overflow-hidden bg-gradient-to-r from-sentinel-blue to-blue-400 text-white font-semibold py-3.5 rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm"
              >
                Enter Sentinel
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#1E2330]" />
              <span className="text-[11px] tracking-widest text-[#3A4055] uppercase">Or continue with</span>
              <div className="flex-1 h-px bg-[#1E2330]" />
            </div>

            {/* OAuth */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: 'GitHub',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  ),
                },
                {
                  label: 'Google',
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  ),
                },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  className="flex items-center justify-center gap-2.5 bg-[#161920] border border-[#1E2330] rounded-lg py-3 text-sm text-white hover:border-[#2E3347] hover:bg-[#1A1D26] transition-colors"
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Sign up link */}
            <p className="text-center text-sm text-[#6B7A99]">
              New to the network?{' '}
              <Link href="/register" className="text-sentinel-blue hover:text-blue-400 font-medium transition-colors">
                Request access
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1E2330] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] tracking-widest text-[#3A4055] uppercase">
          © 2024 Sentinel Security. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Security Disclosure'].map(link => (
            <a key={link} href="#" className="text-[11px] tracking-widest text-[#3A4055] uppercase hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --sentinel-blue: #4A9EFF;
        }
        .text-sentinel-blue { color: var(--sentinel-blue); }
        .bg-sentinel-blue { background-color: var(--sentinel-blue); }
        .border-sentinel-blue { border-color: var(--sentinel-blue); }
        .from-sentinel-blue { --tw-gradient-from: var(--sentinel-blue); }
        body { background: #0D0F14; }
      `}</style>
    </div>
  )
}