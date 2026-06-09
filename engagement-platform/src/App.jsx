import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import PlatformOverview from './components/sections/PlatformOverview'
import ToolsSection from './components/sections/ToolsSection'
import IndustriesSection from './components/sections/IndustriesSection'
import Testimonials from './components/sections/Testimonials'
import AboutKris from './components/sections/AboutKris'
import ContactForm from './components/sections/ContactForm'

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <html lang="en-AU" />
        <title>Community Engagement for Health and Research | KrispConsulting</title>
        <meta
          name="description"
          content="Participatory research, co-design, and patient-centred insights for not-for-profit, pharma, biotech, and research organisations. Kris Pierce, KrispConsulting."
        />
        <link rel="canonical" href="https://krispierce.com.au/engage" />
      </Helmet>

      <div className="min-h-screen bg-[#F8F7F4] text-[#0D1B2A] font-sans">
        <Navbar />
        <Hero />
        <TrustBar />
        <PlatformOverview />
        <ToolsSection />
        <IndustriesSection />
        <Testimonials />
        <AboutKris />
        <ContactForm />
      </div>
    </HelmetProvider>
  )
}
