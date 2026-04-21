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
            Every source your case needs — transactions, KYC, sanctions, OSINT — pulled
            automatically into one normalized workspace. Your analysts open a case. The data is
            already there.
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
            Purpose-built investigation tools that surface what matters: a relational graph, AI
            chatbot, case timeline and risk scoring — all pre-loaded with your case data. No
            dashboard setup. No context switching. Just the analysis.
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
            Chronhr drafts the STR or LCTR from your case findings automatically. Standardized
            templates, auto-filled fields, full audit trail. Analysts review and submit. No blank
            page. No formatting errors. No rejections.
          </div>
        </div>
      </div>

      <div className="how-signals" aria-label="Detection signals">
        <div className="how-signals-title">Every escalation decision is explainable.</div>
        <p className="how-signals-intro">
          Chronhr doesn&apos;t just flag cases — it shows its work. Every escalation and clearance is
          backed by documented signals, so your team can defend any decision in front of a
          regulator.
        </p>

        <div className="how-signal-group">
          <div className="how-signal-group-title">Escalation signals (red flags)</div>
          <div className="how-signal-row" aria-label="High-risk signals">
            <span className="how-signal how-signal-risk">⚠ Structuring</span>
            <span className="how-signal how-signal-risk">⚠ Layering</span>
            <span className="how-signal how-signal-risk">⚠ PEP exposed</span>
            <span className="how-signal how-signal-risk">⚠ Sanctions hit</span>
            <span className="how-signal how-signal-risk">⚠ KYC mismatch</span>
            <span className="how-signal how-signal-risk">⚠ High velocity</span>
            <span className="how-signal how-signal-risk">⚠ Negative media</span>
          </div>
        </div>

        <div className="how-signal-group">
          <div className="how-signal-group-title">Clearance signals (confidence checks)</div>
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
    </div>
  )
}

export default HowItWorks

