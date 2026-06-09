import { useState } from 'react'
import { TOOLS, TAG_COLORS } from '../../data/tools'

export default function ToolsSection() {
  const [activeTool, setActiveTool] = useState(null)

  return (
    <section id="tools" className="py-20 bg-[#1E3A6E] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #4A7EC7 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8E3B5E 0%, transparent 40%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#4A7EC7] text-xs font-semibold uppercase tracking-wider mb-4">
            Engagement tools
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tools for every stage of engagement
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            A complete set of tools to engage, analyse, and build the community relationships that move projects forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {TOOLS.map((tool, i) => {
            const active = activeTool === i
            return (
              <button
                type="button"
                key={tool.name}
                onClick={() => setActiveTool(active ? null : i)}
                aria-expanded={active}
                className={`text-left rounded-2xl p-5 border cursor-pointer transition-all ${
                  active
                    ? 'bg-white border-white shadow-xl shadow-black/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                      active
                        ? TAG_COLORS[tool.tag] || 'bg-[#1E3A6E]/10 text-[#1E3A6E]'
                        : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {tool.tag}
                  </span>
                </div>
                <div className={`font-semibold mb-2 text-sm ${active ? 'text-[#0D1B2A]' : 'text-white'}`}>
                  {tool.name}
                </div>
                {active ? (
                  <div className="text-xs text-[#0D1B2A]/60 leading-relaxed mt-2">
                    {tool.desc}
                  </div>
                ) : (
                  <div className="text-xs text-white/40 leading-relaxed">
                    {tool.desc.split('.')[0]}.
                  </div>
                )}
              </button>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/40 text-sm">Click any tool to learn more. All tools are configured for your specific engagement context.</p>
        </div>
      </div>
    </section>
  )
}
