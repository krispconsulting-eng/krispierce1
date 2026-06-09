export default function MetricCard({ val, label }) {
  return (
    <div className="text-center p-6 bg-[#F8F7F4] rounded-2xl border border-[#1E3A6E]/8">
      <div className="text-3xl font-bold text-[#1E3A6E] mb-2">{val}</div>
      <div className="text-xs text-[#0D1B2A]/50 leading-tight">{label}</div>
    </div>
  )
}
