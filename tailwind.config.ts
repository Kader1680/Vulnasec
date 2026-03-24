import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sentinel-dark': '#0a0a0a',
        'sentinel-blue': '#4A9EFF',
        'sentinel-border': '#2A2D3A',
        'sentinel-muted': '#8B93A5',
        'sentinel-card': '#141820',
        'terminal-bg': '#0A0C10',
        'terminal-chrome': '#0F1117',
        'terminal-border': '#1E2330',
        'github-mockup': '#0D0F14',
        'input-bg': '#1A1D26',
        'cta-bg': '#151820',
        'gradient-from': '#1A1D2E',
        'gradient-to': '#0D0F14',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-up-delay-1': 'fadeInUp 0.6s ease-out 0.1s backwards',
        'fade-in-up-delay-2': 'fadeInUp 0.6s ease-out 0.2s backwards',
        'fade-in-up-delay-3': 'fadeInUp 0.6s ease-out 0.3s backwards',
        'scan-pulse': 'scanPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scanPulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        blink: {
          '0%, 49%, 100%': { opacity: '1' },
          '50%, 99%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
