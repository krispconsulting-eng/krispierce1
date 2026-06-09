export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#1E3A6E]/8 hover:border-[#1E3A6E]/20 hover:shadow-md transition-all">
      <div className="text-2xl mb-3">{icon}</div>
      <div className="font-semibold text-[#0D1B2A] text-sm mb-2">{title}</div>
      <div className="text-xs text-[#0D1B2A]/55 leading-relaxed">{desc}</div>
    </div>
  )
}
