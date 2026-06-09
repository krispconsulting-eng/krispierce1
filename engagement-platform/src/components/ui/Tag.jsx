import { TAG_COLORS } from '../../data/tools'

export default function Tag({ label, variant, className = '' }) {
  const colour = variant ? variant : TAG_COLORS[label] || 'bg-[#1E3A6E]/10 text-[#1E3A6E]'
  return (
    <span
      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${colour} ${className}`}
    >
      {label}
    </span>
  )
}
