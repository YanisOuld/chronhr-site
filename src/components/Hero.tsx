import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">

        {/* LEFT — title */}
        <div>
          <div className="hero-eyebrow">AML Intelligence Platform</div>
          <h1>
            Simplify analysis.
            <br />
            Standardize work.
            <br />
            <em>Move faster.</em>
          </h1>
        </div>

        {/* RIGHT — body + actions + stats */}
        <div className="hero-right">
          <p className="hero-body">
            Chronhr is an ELT platform built specifically for AML analysts. Bringing
            data ingestion, analysis tools and report writing together in a single,
            analyst‑focused workflow.
          </p>

          <div className="hero-actions">
            <Link
              to="/get-started"
              className="btn-primary"
              onClick={() => window.scrollTo(0, 0)}
            >
              Book a demo
            </Link>
          </div>

          {/* Stats — pinned below actions */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-kicker">Speed</div>
              <div className="hero-stat-num">2x faster analysis</div>
              <div className="hero-stat-label">Compared with traditional workflow</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-kicker">Data control</div>
              <div className="hero-stat-num">Keep data in-house</div>
              <div className="hero-stat-label">Designed for strong data sovereignty</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-kicker">Cost efficiency</div>
              <div className="hero-stat-num">Save 30–40% on compliance costs</div>
              <div className="hero-stat-label">By streamlining end-to-end AML workflows</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-kicker">Audit readiness</div>
              <div className="hero-stat-num">Generate regulator-ready reports in minutes</div>
              <div className="hero-stat-label">With full traceability across every case</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero


