 
import './globals.css'

export const metadata = {
  title: 'Sentinel – The Silent Guardian of Your Codebase',
  description: 'Automated AI-driven vulnerability scanning that integrates deeply into your CI/CD pipeline.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sentinel-dark antialiased">{children}</body>
    </html>
  )
}
