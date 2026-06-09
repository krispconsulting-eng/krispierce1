const HERO_TAGS = [
  'NFP & Rare Disease',
  'Pharma & Biotech',
  'Research Teams',
  'HTA & Policy',
  'Genomics',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A6E]/5 via-transparent to-[#8E3B5E]/5 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #1E3A6E 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#8E3B5E]/10 text-[#8E3B5E] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Patient-centred engagement
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#0D1B2A] leading-[1.1] mb-6">
            Community engagement that{' '}
            <span className="text-[#8E3B5E]">generates real insight.</span>
          </h1>

          <p className="text-xl text-[#0D1B2A]/60 leading-relaxed mb-10 max-w-2xl">
            Reach beyond the loudest voices. Gather richer feedback. Turn community input into patient-centred outcomes that actually shape decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1E3A6E] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#1E3A6E]/90 transition-all text-base shadow-lg shadow-[#1E3A6E]/20"
            >
              Book a conversation
              <span>→</span>
            </a>
            <a
              href="#tools"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1E3A6E]/20 text-[#1E3A6E] font-semibold px-7 py-3.5 rounded-xl hover:border-[#1E3A6E]/40 transition-colors text-base"
            >
              See the tools
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-[#0D1B2A]/50">
            {HERO_TAGS.map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8E3B5E] opacity-60" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
