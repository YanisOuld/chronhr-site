import { Fragment } from 'react'

function ComparisonTable() {
  const sections = [
    {
      title: 'Agentic Architecture',
      rows: [
        {
          criterion: 'Active data ingestion',
          detail: 'Agents automatically fetch & consolidate data',
          chronhr: '✓ Agents pull from core banking, TMS, CSV, any API',
          roe: '◐ Passive connectors only',
          unit21: '◐ Passive connectors',
          flagright: '✕ Manual import or API',
          lucinity: '◐ Third-party integrations',
          hawk: '◐ API overlay on existing TMS',
        },
        {
          criterion: 'End-to-end investigation',
          detail: 'Alert triage → analysis → SAR filing in one platform',
          chronhr: '✓ Full lifecycle — no tool switching',
          roe: '✓ KYC, L1 TM, fraud, onboarding',
          unit21: '✓ Full AML + fraud stack',
          flagright: '◐ TM + narrative, not full workflow',
          lucinity: '◐ Case management focused',
          hawk: '◐ Overlay — not standalone',
        },
        {
          criterion: 'No-code rule builder',
          detail: 'Custom detection logic without engineers',
          chronhr: '✓ Drag-and-drop + sandbox testing',
          roe: '✕ Fixed rule sets',
          unit21: '✓ Configurable thresholds',
          flagright: '✓ Advanced no-code TM',
          lucinity: '◐ Limited rule config',
          hawk: '✓ Low-code policy upload',
        },
      ],
    },
    {
      title: 'Regulatory Reporting',
      rows: [
        {
          criterion: 'SAR / STR narrative generation',
          detail: 'AI-drafted, citation-backed regulatory reports',
          chronhr: '✓ Multi-jurisdiction templates, cited evidence',
          roe: '✓ SAR narrative for L2 review',
          unit21: '✓ Regulator-ready narrative',
          flagright: '✓ 75% faster SAR drafting',
          lucinity: '✓ Via Luci AI agent',
          hawk: '✓ AML Analyst Agent',
        },
        {
          criterion: 'Multi-jurisdiction support',
          detail: 'FinCEN, FINTRAC, FCA, FATF-aligned workflows',
          chronhr: '✓ Global by design — US, CA, EU, FATF',
          roe: '✕ FinCEN / US only',
          unit21: '✕ US primary',
          flagright: '◐ Global generic, limited localisation',
          lucinity: '◐ EU / UK / US',
          hawk: '◐ EU / US, limited elsewhere',
        },
        {
          criterion: 'Full audit trail',
          detail: 'Every AI decision documented for regulators',
          chronhr: '✓ Traceable, exportable, regulator-ready',
          roe: '✓ Cited evidence per case',
          unit21: '✓ Full agent work log',
          flagright: '✓ Decision audit trail',
          lucinity: '✓ Case history + audit',
          hawk: '✓ Explainable AI decisions',
        },
      ],
    },
    {
      title: 'Data & Infrastructure',
      rows: [
        {
          criterion: 'Data sovereignty options',
          detail: 'Client-selected cloud region (US, CA, EU)',
          chronhr: '✓ Client chooses region — CA, US, EU',
          roe: '✕ US cloud only',
          unit21: '◐ US-primary, limited regions',
          flagright: '◐ Multi-region, not client-selectable',
          lucinity: '◐ EU / Iceland hosted',
          hawk: '◐ EU / US hosted',
        },
        {
          criterion: 'On-premise / hybrid deployment',
          detail: 'For institutions with strict data residency policies',
          chronhr: '✓ Private cloud or on-premise available',
          roe: '✕ SaaS only',
          unit21: '✕ SaaS only',
          flagright: '✕ SaaS only',
          lucinity: '✕ SaaS only',
          hawk: '✕ SaaS only',
        },
      ],
    },
    {
      title: 'Deployment & Pricing',
      rows: [
        {
          criterion: 'Time-to-value',
          detail: 'Weeks to first productive investigation',
          chronhr: '✓ 2–4 weeks',
          roe: '◐ 4–8 weeks',
          unit21: '✕ 3–6 months',
          flagright: '◐ 4–8 weeks',
          lucinity: '✕ 6–12 months (enterprise)',
          hawk: '✕ 3–6 months integration',
        },
        {
          criterion: 'No heavy IT dependency',
          detail: 'Onboard via CSV — no core integration required upfront',
          chronhr: '✓ CSV onboarding available day one',
          roe: '◐ Tech integration required',
          unit21: '✕ Enterprise integration required',
          flagright: '◐ Import possible',
          lucinity: '✕ Enterprise integration',
          hawk: '◐ Overlay approach — faster',
        },
        {
          criterion: 'Mid-market pricing',
          detail: 'No six-figure enterprise contract required',
          chronhr: '✓ Flat fee + per-case model, no minimums',
          roe: '◐ Mid-market accessible',
          unit21: '✕ Enterprise pricing ($200k+)',
          flagright: '◐ Usage-based, accessible',
          lucinity: '✕ Enterprise contracts',
          hawk: '✕ Enterprise pricing',
        },
      ],
    },
  ]

  return (
    <section className="comparison" id="comparison">
      <div className="section-label">Benchmark</div>
      <h2>
        Why teams choose <em>Chronhr</em>
      </h2>
      <p className="comparison-subtitle">
        A new generation of agentic AML — built for compliance teams that need to move faster,
        investigate deeper, and file with confidence. Anywhere in the world.
      </p>

      <div className="comparison-table-wrap" role="region" aria-label="Chronhr comparison table">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Criterion</th>
              <th>
                Chronhr
                <span className="comparison-head-note">✦ Agentic · End-to-end</span>
              </th>
              <th>
                Roe AI
                <span className="comparison-head-note">Investigation platform</span>
              </th>
              <th>
                Unit21
                <span className="comparison-head-note">AI risk infrastructure</span>
              </th>
              <th>
                Flagright
                <span className="comparison-head-note">TM + narrative AI</span>
              </th>
              <th>
                Lucinity
                <span className="comparison-head-note">Case management AI</span>
              </th>
              <th>
                Hawk AI
                <span className="comparison-head-note">AML overlay platform</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <Fragment key={section.title}>
                <tr className="comparison-section-row">
                  <td colSpan={7}>{section.title}</td>
                </tr>
                {section.rows.map((row) => (
                  <tr key={`${section.title}-${row.criterion}`}>
                    <td>
                      <div className="comparison-criterion">{row.criterion}</div>
                      <div className="comparison-detail">{row.detail}</div>
                    </td>
                    <td className="comparison-cell comparison-cell-chronhr">{row.chronhr}</td>
                    <td className="comparison-cell">{row.roe}</td>
                    <td className="comparison-cell">{row.unit21}</td>
                    <td className="comparison-cell">{row.flagright}</td>
                    <td className="comparison-cell">{row.lucinity}</td>
                    <td className="comparison-cell">{row.hawk}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ComparisonTable
