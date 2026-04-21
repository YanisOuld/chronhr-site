function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">

        {/* LEFT — title */}
        <div>
          <div className="hero-eyebrow">AML Intelligence Platform</div>
          <h1>AML Investigation Platform for Compliance Teams</h1>
        </div>

        {/* RIGHT — body + actions + stats */}
        <div className="hero-right">
          <p className="hero-body">
            Chronhr gives them back that time — with a single workspace that ingests,
            analyzes and files. From case intake to regulator-ready report, without the
            manual work.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn-primary"
              aria-label="Book a Chronhr demo"
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById('contact')
                if (target) {
                  const y = target.getBoundingClientRect().top + window.scrollY - 78
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
            >
              Book a demo
            </a>
          </div>

          {/* Stats — pinned below actions */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-kicker">2×</div>
              <div className="hero-stat-num">Faster case closure</div>
              <div className="hero-stat-label">From intake to submission — not just analysis</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-kicker">100%</div>
              <div className="hero-stat-num">Your data stays with you</div>
              <div className="hero-stat-label">No data leaves your environment</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-kicker">30–40%</div>
              <div className="hero-stat-num">Lower compliance cost</div>
              <div className="hero-stat-label">Without reducing headcount or coverage</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-kicker">&lt; 5 min</div>
              <div className="hero-stat-num">Regulator-ready reports</div>
              <div className="hero-stat-label">Full traceability. Zero rework. No blank page.</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero


