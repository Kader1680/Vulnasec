'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sentinel-dark/90 backdrop-blur-md border-b border-sentinel-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <span className="text-white font-semibold text-lg tracking-tight">Sentinel</span>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {['Dashboard', 'Repositories', 'Scans', 'Reports'].map((item, i) => (
                <a
                  key={item}
                  href="#"
                  className={`px-3 py-1.5 text-sm rounded transition-colors ${
                    i === 0
                      ? 'text-white border-b-2 border-sentinel-blue'
                      : 'text-sentinel-muted hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center bg-[#1A1D26] border border-sentinel-border rounded-md px-3 py-1.5 gap-2 w-48">
              <svg className="w-3.5 h-3.5 text-sentinel-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sentinel-muted text-xs">Search vulnerabilities...</span>
            </div>

            {/* Bell */}
            <button className="text-sentinel-muted hover:text-white transition-colors p-1.5 relative">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-sentinel-blue rounded-full"></span>
            </button>

            {/* Settings */}
            <button className="text-sentinel-muted hover:text-white transition-colors p-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Upgrade button */}
            <button className="hidden md:block bg-white text-black text-xs font-semibold px-3 py-1.5 rounded hover:bg-gray-100 transition-colors">
              Upgrade
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-sentinel-muted hover:text-white transition-colors p-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-sentinel-border bg-sentinel-dark/95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {['Dashboard', 'Repositories', 'Scans', 'Reports'].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`block px-3 py-2 text-sm rounded transition-colors ${
                  i === 0 ? 'text-white bg-white/5' : 'text-sentinel-muted hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
            {/* Mobile search */}
            <div className="flex items-center bg-[#1A1D26] border border-sentinel-border rounded-md px-3 py-2 gap-2 mt-2">
              <svg className="w-3.5 h-3.5 text-sentinel-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sentinel-muted text-xs">Search vulnerabilities...</span>
            </div>
            <button className="w-full bg-white text-black text-sm font-semibold px-3 py-2 rounded hover:bg-gray-100 transition-colors mt-2">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
