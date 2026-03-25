import Hero from '../components/Hero'
import AboutHeader from '../components/AboutHeader'
import HowItWorks from '../components/HowItWorks'
import Roles from '../components/Roles'
import WhyDifferent from '../components/WhyDifferent'
import WorkflowTimeline from '../components/WorkflowTimeline'
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
            Let&apos;s discuss your workflow.
            <br />
            <em>Fast and practical.</em>
          </h2>
          <p className="single-page-contact-desc">
            Tell us how your AML team works today and we will show you a tailored demo.
          </p>
          <ContactBlock />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}