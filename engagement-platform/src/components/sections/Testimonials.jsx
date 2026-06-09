import { TESTIMONIAL_CARDS, METRICS } from '../../data/testimonials'
import MetricCard from '../ui/MetricCard'

export default function Testimonials() {
  return (
    <section id="insights" className="py-20 bg-white border-y border-[#1E3A6E]/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#1E3A6E] text-xs font-semibold uppercase tracking-wider mb-4">
            The proof
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-4">
            What genuine engagement delivers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {TESTIMONIAL_CARDS.map((t, i) => (
            <div key={i} className="bg-[#F8F7F4] rounded-2xl p-6 border border-[#1E3A6E]/8">
              <div className="text-[#8E3B5E] text-3xl font-serif mb-4 leading-none">"</div>
              <p className="text-[#0D1B2A]/70 text-sm leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div>
                <div className="font-semibold text-[#0D1B2A] text-sm">{t.name}</div>
                <div className="text-xs text-[#0D1B2A]/40">{t.org}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS.map((m) => (
            <MetricCard key={m.label} val={m.val} label={m.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
