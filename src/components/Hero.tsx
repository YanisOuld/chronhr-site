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
              Get started
            </Link>
          </div>

          {/* Stats — pinned below actions */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">2× faster</div>
              <div className="hero-stat-label">analysis</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-num" style={{ fontSize: '2rem' }}>Effortless</div>
              <div className="hero-stat-label">Implementation</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero


