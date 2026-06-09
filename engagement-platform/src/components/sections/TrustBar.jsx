import { TRUST_BAR } from '../../data/navigation'

export default function TrustBar() {
  return (
    <div className="border-y border-[#1E3A6E]/8 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#0D1B2A]/40 font-medium uppercase tracking-widest">
          <span className="text-[#0D1B2A]/25">Trusted by</span>
          {TRUST_BAR.map((org) => (
            <span key={org} className="text-[#0D1B2A]/50 hover:text-[#1E3A6E] transition-colors cursor-default">
              {org}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
