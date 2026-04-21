import Hero from '../components/Hero'
import AboutHeader from '../components/AboutHeader'
import HowItWorks from '../components/HowItWorks'
import Roles from '../components/Roles'
import WhyDifferent from '../components/WhyDifferent'
import ComparisonTable from '../components/ComparisonTable'
import WorkflowTimeline from '../components/WorkflowTimeline'
import RoiCalculatorSection from '../components/RoiCalculatorSection'
import FoundersGrid from '../components/FoundersGrid'
import SupportedBy from '../components/SupportedBy'
import AdvisoryBoard from '../components/AdvisoryBoard'
import ContactBlock from '../components/ContactBlock'
import CtaBand from '../components/CtaBand.tsx'

export default function SinglePage() {
  return (
    <div className="single-page">
      <section id="home" className="single-page-section">
        <Hero />
      </section>

      <section id="how" className="single-page-section">
        <HowItWorks />
      </section>

      <section id="roles" className="single-page-section">
        <Roles />
      </section>

      <section id="tech" className="single-page-section single-page-tech">
        <WorkflowTimeline />
      </section>

      <section id="roi-calculator" className="single-page-section">
        <RoiCalculatorSection />
      </section>

      <section id="comparison" className="single-page-section">
        <ComparisonTable />
      </section>

      <section id="team" className="single-page-section single-page-team">
        <FoundersGrid />
      </section>

      <section id="partners" className="single-page-section supported single-page-supported">
        <div className="supported-inner">
          <SupportedBy />
          <AdvisoryBoard />
        </div>
      </section>

      <section id="contact" className="single-page-section single-page-contact-wrap">
        <div className="single-page-contact">
          <div className="single-page-contact-label">Contact</div>
          <h2>
            See it on a real case. <em>In 30 minutes.</em>
          </h2>
          <p className="single-page-contact-desc">
            Tell us your current workflow. We will show you exactly where Chronhr fits — using
            your case types, your sources, your reporting requirements.
          </p>
          <ContactBlock />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}