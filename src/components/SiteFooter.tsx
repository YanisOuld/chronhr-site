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

          {/* Partners & contact */}
          <div>
            <div className="footer-col-title">Partners</div>
            <ul className="footer-links">
              {/*<li><a href="https://www.nextai.com" target="_blank" rel="noopener noreferrer">NextAI</a></li>*/}
              <li><a href="https://www.polymtl.ca/propolys/entreprises-en-cybersecurite" target="_blank" rel="noopener noreferrer">Propolys</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="mailto:contact@chronhr.com">Contact us</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="https://www.linkedin.com/company/chronhr/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
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