const ROLES = [
  'Deputy Chair, HTACCC',
  'MSAC Evaluation Sub-Committee',
  'Genomics Australia Advisory Council',
  'Rare Diseases NSW',
  'SCN2A Australia Founder',
]

export default function AboutKris() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 text-[#8E3B5E] text-xs font-semibold uppercase tracking-wider mb-4">
            About
          </div>
          <h2 className="text-3xl font-bold text-[#0D1B2A] mb-6">
            Strategic advisor. Carer. Evidence advocate.
          </h2>
          <p className="text-[#0D1B2A]/60 leading-relaxed mb-4">
            I'm a strategic advisor in consumer engagement, rare disease, and health policy. I help health organisations, industry partners, and not-for-profit organisations generate insights and achieve patient-centred outcomes.
          </p>
          <p className="text-[#0D1B2A]/60 leading-relaxed mb-4">
            I've worked across rare disease, research, policy, and NFP sectors for over two decades. I'm Deputy Chair of the HTA Consumer Consultative Committee, a Member of the MSAC Evaluation Sub-Committee, and a Member of the Genomics Australia Advisory Council. I founded SCN2A Australia and co-founded Genetic Epilepsy Team Australia.
          </p>
          <p className="text-[#0D1B2A]/60 leading-relaxed mb-8">
            I'm also a carer in the rare disease space. That perspective informs everything.
          </p>

          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <span key={role} className="text-xs font-medium bg-[#1E3A6E]/8 text-[#1E3A6E] px-3 py-1.5 rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            {/* When a real photo is supplied, drop into /public/images/kris-pierce.jpg
                and replace this placeholder with:
                <img src="/images/kris-pierce.jpg" alt="Kris Pierce" className="w-full aspect-square object-cover rounded-3xl" />
            */}
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-[#1E3A6E] to-[#0D1B2A] flex items-center justify-center overflow-hidden">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-4">KP</div>
                <div className="text-white/60 text-sm">Kris Pierce</div>
                <div className="text-white/40 text-xs mt-1">Principal Consultant</div>
              </div>
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, #4A7EC7 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8E3B5E 0%, transparent 50%)' }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#8E3B5E] text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-xs font-semibold">krispierce.com.au</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
