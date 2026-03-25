import { Link } from "react-router-dom"

function CtaBand() {
  return (
    <div className="cta-band">
      <div className="cta-inner">
        <div className="cta-title">
          <span className="cta-title-accent">Ready to see it</span>
          <br />
          <em>in action?</em>
        </div>
        <Link
          to="/get-started"
          className="btn-primary"
          onClick={() => window.scrollTo(0, 0)}
        >
          Book a demo
        </Link>
      </div>
    </div>
  )
}

export default CtaBand
