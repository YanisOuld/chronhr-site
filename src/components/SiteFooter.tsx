import { Link } from "react-router-dom"

const NAV_OFFSET = 78

function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-name">CHRONHR</div>
            <div className="footer-brand-desc">
              AML intelligence platform.<br />Ingest, analyze, report.
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="footer-col-title">Pages</div>
            <ul className="footer-links">
              <li><button type="button" onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button type="button" onClick={() => scrollToSection('tech')}>Technology</button></li>
              <li><button type="button" onClick={() => scrollToSection('team')}>Meet the team</button></li>
              <li><Link to="/get-started">Get started</Link></li>
            </ul>
          </div>

          {/* Partners & contact */}
          <div>
            <div className="footer-col-title">Partners</div>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/company/chronhr/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              {/*<li><a href="https://www.nextai.com" target="_blank" rel="noopener noreferrer">NextAI</a></li>*/}
              <li><a href="https://www.polymtl.ca/propolys/entreprises-en-cybersecurite" target="_blank" rel="noopener noreferrer">Propolys</a></li>
              <li><a href="mailto:contact@chronhr.com">contact@chronhr.com</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <div>© 2025 Chronhr Inc. · Montréal, Québec</div>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default SiteFooter