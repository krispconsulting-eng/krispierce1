import { FEATURES } from '../../data/features'
import FeatureCard from '../ui/FeatureCard'

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-20 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[#1E3A6E] text-xs font-semibold uppercase tracking-wider mb-4">
            The platform
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] leading-tight mb-6">
            Scattered voices into real-world impact
          </h2>
          <p className="text-[#0D1B2A]/60 leading-relaxed mb-8">
            Reaching your entire community and turning feedback into real insights should be straightforward. Too often, engagement is fragmented across tools, teams, and processes, making it hard to see the full picture and even harder to act.
          </p>
          <p className="text-[#0D1B2A]/60 leading-relaxed mb-8">
            This platform brings together participation tools, facilitation methodology, and built-in reporting in one place. Run meaningful engagement, foster two-way conversations, and turn community feedback into insights that shape better decisions.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#8E3B5E] font-semibold text-sm hover:gap-3 transition-all">
            Start a conversation <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
