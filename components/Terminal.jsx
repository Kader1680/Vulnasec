'use client'
import { useEffect, useState } from 'react'

const lines = [
  { text: '$ sentinel-scan --repo main --branch staging', type: 'cmd' },
  { text: '• Initializing Sentinel Engine v2.4...', type: 'info' },
  { text: '• Deep-scanning 142 dependencies...', type: 'info' },
  { text: "CRITICAL: Prototype Pollution found in 'lodash' (CVE-2024-4068)", type: 'critical' },
  { text: "HIGH: SQL Injection vulnerability in 'auth-service.ts' [Line 42]", type: 'high' },
  { text: 'Analyzing reachability...', type: 'info' },
  { text: 'Suggested Fix: Update lodash to version 4.17.21', type: 'fix' },
]

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(lines.length)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setVisibleLines(0)
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisibleLines(i + 1), 400 + i * 600)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="bg-terminal-bg border border-terminal-border rounded-xl overflow-hidden shadow-2xl shadow-black/60">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-terminal-border bg-terminal-chrome">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
        <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
        <span className="ml-3 text-xs text-sentinel-muted font-mono">sentinel-scan --repo main --branch staging</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-xs sm:text-sm space-y-2 min-h-[220px]">
        {lines.slice(0, mounted ? visibleLines : lines.length).map((line, i) => (
          <div key={i} className={`transition-all duration-300 ${
            line.type === 'cmd' ? 'text-gray-300' :
            line.type === 'info' ? 'text-gray-400' :
            line.type === 'critical' ? 'text-red-400 bg-red-500/10 px-2 py-0.5 rounded' :
            line.type === 'high' ? 'text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded' :
            line.type === 'fix' ? 'text-sentinel-blue' :
            'text-gray-400'
          }`}>
            {line.text}
          </div>
        ))}
        {mounted && visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-sentinel-blue animate-blink align-middle"></span>
        )}
      </div>
    </div>
  )
}
