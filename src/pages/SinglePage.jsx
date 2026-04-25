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
      <section id="hero" aria-label="Hero" className="single-page-section">
        <Hero />
      </section>

      <section id="how" aria-label="Overview" className="single-page-section">
        <HowItWorks />
      </section>

      <section id="roles" aria-label="Who it's for" className="single-page-section">
        <Roles />
      </section>

      <section id="tech" aria-label="How Chronhr works" className="single-page-section single-page-tech">
        <WorkflowTimeline />
      </section>

      <section id="roi" aria-label="ROI Calculator" className="single-page-section">
        <RoiCalculatorSection />
      </section>

      <section id="comparison" aria-label="Benchmark" className="single-page-section">
        <ComparisonTable />
      </section>

      <section id="team" aria-label="Team" className="single-page-section single-page-team">
        <FoundersGrid />
      </section>

      <section id="partners" aria-label="Supported by" className="single-page-section supported single-page-supported">
        <div className="supported-inner">
          <SupportedBy />
          <AdvisoryBoard />
        </div>
      </section>

      <section id="contact" aria-label="Contact" className="single-page-section single-page-contact-wrap">
        <div className="single-page-contact">
          <div className="single-page-contact-left">
            <div className="single-page-contact-label">Contact</div>
            <h2>
              Book an <em>AML Platform Demo</em>
            </h2>
            <p className="single-page-contact-desc">
              Tell us your current workflow. We will show you exactly where Chronhr fits, using
              your case types, your sources, your reporting requirements.
            </p>
            <ContactBlock />
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}