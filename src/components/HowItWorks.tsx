function HowItWorks() {
  return (
    <div className="how" id="how">
      <div className="section-label">Overview</div>
      <h2>
        Three Steps. <em>One AML Platform.</em>
      </h2>
      <div className="how-grid">
        <div className="how-item">
          <h3 className="how-title">Data Ingestion</h3>
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
            Every source your case needs: transactions, KYC, sanctions, OSINT, pulled
            automatically into one normalized workspace. Your analysts open a case. The data is
            already there.
          </div>
        </div>
        <div className="how-item">
          <h3 className="how-title">AI-Assisted Analysis</h3>
          <div className="how-desc">
            <div className="how-tags" aria-label="Analysis highlights">
              <span className="how-tag">Relational graph</span>
              <span className="how-tag">AI chatbot</span>
              <span className="how-tag">Case timeline</span>
              <span className="how-tag">Entity resolution</span>
              <span className="how-tag">Risk scoring</span>
            </div>
            Purpose-built investigation tools that surface what matters: a relational graph, AI
            chatbot, case timeline and risk scoring, all pre-loaded with your case data. No
            dashboard setup. No context switching. Just the analysis.
          </div>
        </div>
        <div className="how-item">
          <h3 className="how-title">Regulator-Ready Report Writing</h3>
          <div className="how-desc">
            <div className="how-tags" aria-label="Report writing highlights">
              <span className="how-tag">AI drafting assistant</span>
              <span className="how-tag">STR/LCTR templates</span>
              <span className="how-tag">Auto-filled fields</span>
              <span className="how-tag">Audit trail</span>
              <span className="how-tag">Regulator-ready export</span>
            </div>
            Chronhr drafts the STR or LCTR from your case findings automatically. Standardized
            templates, auto-filled fields, full audit trail. Analysts review and submit. No blank
            page. No formatting errors. No rejections.
          </div>
        </div>
      </div>

      <div className="how-signals" aria-label="Detection signals">
        <div className="how-signals-title">Every escalation decision is explainable.</div>
        <p className="how-signals-intro">
          Chronhr doesn&apos;t just flag cases. It shows its work. Every escalation and clearance is
          backed by documented signals, so your team can defend any decision in front of a
          regulator.
        </p>

        <div className="how-signal-table">
          <div className="how-signal-col-header how-signal-col-header--risk">Escalation signals (red flags)</div>
          <div className="how-signal-col-header how-signal-col-header--safe">Clearance signals (confidence checks)</div>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>Structuring</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Verified KYC</span>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>Layering</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Clear sanctions</span>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>PEP exposed</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Documented SOF</span>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>Sanctions hit</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Valid business</span>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>KYC mismatch</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Real address</span>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>High velocity</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Stable pattern</span>

          <span className="how-signal how-signal-risk"><span className="how-signal-icon" aria-hidden="true">!</span>Negative media</span>
          <span className="how-signal how-signal-safe"><span className="how-signal-icon" aria-hidden="true">✓</span>Known vendor</span>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
