function HowItWorks() {
  return (
    <div className="how" id="how">
      <div className="section-label">Overview</div>
      <h2>
        Three steps. <em>One platform.</em>
      </h2>
      <div className="how-grid">
        <div className="how-item">
          <div className="how-title">Data Ingestion</div>
          <div className="how-desc">
            <div className="how-tags" aria-label="Connected systems">
              <span className="how-tag">KYC</span>
              <span className="how-tag">Transactions</span>
              <span className="how-tag">Sanctions lists</span>
              <span className="how-tag">OSINT</span>
              <span className="how-tag">LexisNexis</span>
              <span className="how-tag">Actimize</span>
              <span className="how-tag">Snowflake</span>
            </div>
            Connect to all required systems in one place. Structured, normalized and ready for
            analysis. No manual prep.
          </div>
        </div>
        <div className="how-item">
          <div className="how-title">Analysis</div>
          <div className="how-desc">
            <div className="how-tags" aria-label="Analysis highlights">
              <span className="how-tag">Relational graph</span>
              <span className="how-tag">AI chatbot</span>
              <span className="how-tag">Case timeline</span>
              <span className="how-tag">Entity resolution</span>
              <span className="how-tag">Risk scoring</span>
            </div>
            Purpose-built tools to simplify and standardize your AML workflow, including a
            relational graph, AI chatbot assistance, case timelines, and entity-level risk scoring.
            Less noise, more clarity on every case.
          </div>
        </div>
        <div className="how-item">
          <div className="how-title">Report Writing</div>
          <div className="how-desc">
            <div className="how-tags" aria-label="Report writing highlights">
              <span className="how-tag">AI drafting assistant</span>
              <span className="how-tag">STR/LCTR templates</span>
              <span className="how-tag">Auto-filled fields</span>
              <span className="how-tag">Audit trail</span>
              <span className="how-tag">Regulator-ready export</span>
            </div>
            Assisted drafting for STRs, LCTRs and case files with standardized templates,
            auto-filled data, and full traceability. Compliant, consistent and ready to submit.
          </div>
        </div>
      </div>

      <div className="how-signals" aria-label="Detection signals">
        <div className="how-signals-title">Signals we detect and explain</div>

        <div className="how-signal-row" aria-label="High-risk signals">
          <span className="how-signal how-signal-risk">⚠ Structuring</span>
          <span className="how-signal how-signal-risk">⚠ Layering</span>
          <span className="how-signal how-signal-risk">⚠ PEP exposed</span>
          <span className="how-signal how-signal-risk">⚠ Sanctions hit</span>
          <span className="how-signal how-signal-risk">⚠ KYC mismatch</span>
          <span className="how-signal how-signal-risk">⚠ High velocity</span>
          <span className="how-signal how-signal-risk">⚠ Negative media</span>
        </div>

        <div className="how-signal-row" aria-label="Low-risk signals">
          <span className="how-signal how-signal-safe">✓ Verified KYC</span>
          <span className="how-signal how-signal-safe">✓ Clear sanctions</span>
          <span className="how-signal how-signal-safe">✓ Documented SOF</span>
          <span className="how-signal how-signal-safe">✓ Valid business</span>
          <span className="how-signal how-signal-safe">✓ Real address</span>
          <span className="how-signal how-signal-safe">✓ Stable pattern</span>
          <span className="how-signal how-signal-safe">✓ Known vendor</span>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

