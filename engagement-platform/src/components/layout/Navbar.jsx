import { useState } from 'react'
import { NAV_LINKS } from '../../data/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F7F4]/95 backdrop-blur border-b border-[#1E3A6E]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1E3A6E] flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <div>
            <div className="font-bold text-[#0D1B2A] leading-tight text-sm">KrispConsulting</div>
            <div className="text-[10px] text-[#1E3A6E]/60 uppercase tracking-widest leading-tight">Community Engagement</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#0D1B2A]/70 hover:text-[#1E3A6E] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#1E3A6E] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#1E3A6E]/90 transition-colors"
        >
          Book a conversation
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="md:hidden p-2"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <div className="w-5 h-0.5 bg-[#0D1B2A] mb-1" />
          <div className="w-5 h-0.5 bg-[#0D1B2A] mb-1" />
          <div className="w-5 h-0.5 bg-[#0D1B2A]" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#1E3A6E]/10 bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-[#0D1B2A]/80"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1E3A6E] text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Book a conversation
          </a>
        </div>
      )}
    </nav>
  )
}
