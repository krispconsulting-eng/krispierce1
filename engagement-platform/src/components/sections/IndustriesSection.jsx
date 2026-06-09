import { useState } from 'react'
import { INDUSTRIES } from '../../data/industries'

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0)
  const current = INDUSTRIES[activeIndustry]

  return (
    <section id="industries" className="py-20 max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-[#8E3B5E] text-xs font-semibold uppercase tracking-wider mb-4">
          Who we work with
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
          Built for health and research sectors
        </h2>
        <p className="text-[#0D1B2A]/50 max-w-xl mx-auto">
          The methodology adapts. The commitment to genuine, patient-centred outcomes does not.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          {INDUSTRIES.map((ind, i) => {
            const active = activeIndustry === i
            return (
              <button
                type="button"
                key={ind.label}
                onClick={() => setActiveIndustry(i)}
                aria-pressed={active}
                className={`text-left p-4 rounded-xl border transition-all ${
                  active
                    ? 'bg-[#1E3A6E] border-[#1E3A6E] shadow-lg shadow-[#1E3A6E]/15'
                    : 'bg-white border-[#1E3A6E]/10 hover:border-[#1E3A6E]/25'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{ind.icon}</span>
                  <span className={`font-semibold text-sm ${active ? 'text-white' : 'text-[#0D1B2A]'}`}>
                    {ind.label}
                  </span>
                  {active && (
                    <span className="ml-auto text-white/50 text-xs">Selected</span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        <div className="bg-gradient-to-br from-[#1E3A6E]/5 to-[#8E3B5E]/5 rounded-2xl p-8 border border-[#1E3A6E]/10 flex flex-col justify-between">
          <div>
            <div className="text-4xl mb-5">{current.icon}</div>
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">
              {current.label}
            </h3>
            <p className="text-[#0D1B2A]/60 leading-relaxed mb-6">
              {current.desc}
            </p>
            <div className="bg-[#8E3B5E]/8 rounded-xl p-4 border border-[#8E3B5E]/15">
              <p className="text-sm text-[#0D1B2A]/60 italic">
                "The methodology depends on what you need. Together we discover what actually works."
              </p>
              <p className="text-xs text-[#8E3B5E] font-semibold mt-2">Kris Pierce, KrispConsulting</p>
            </div>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-[#1E3A6E] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1E3A6E]/90 transition-colors text-sm self-start"
          >
            Talk about your context <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
