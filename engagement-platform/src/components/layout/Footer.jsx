export default function Footer() {
  return (
    <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
      <span>© 2026 KrispConsulting. Kris Pierce.</span>
      <div className="flex gap-6">
        <a href="https://krispierce.com.au" className="hover:text-white/60 transition-colors">krispierce.com.au</a>
        <a href="https://www.linkedin.com/in/krispierce" className="hover:text-white/60 transition-colors">LinkedIn</a>
      </div>
    </div>
  )
}
