import { Fragment } from 'react'

function ComparisonTable() {
  const providers = [
    {
      key: 'chronhr',
      name: 'Chronhr',
      note: '✦ Analyst-first · End-to-end',
      isPrimary: true,
    },
    { key: 'roe', name: 'Roe AI', note: 'Investigation platform' },
    { key: 'unit21', name: 'Unit21', note: 'AI risk infrastructure' },
    { key: 'flagright', name: 'Flagright', note: 'TM + narrative AI' },
    { key: 'lucinity', name: 'Lucinity', note: 'Case management AI' },
    { key: 'hawk', name: 'Hawk AI', note: 'AML overlay platform' },
  ]

  const sections = [
    {
      title: 'Investigation Workflow',
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
          criterion: 'Analyst-native workspace',
          detail: 'Investigation tools generated automatically — no configuration, no data team required',
          chronhr: '✓ Case-specific tools generated on open — graph, timeline, cash flow, ready instantly',
          roe: '◐ Investigation UI exists but requires manual tool selection',
          unit21: '✕ Built for data and risk ops teams, not frontline analysts',
          flagright: '✕ TM-focused — no analyst investigation workspace',
          lucinity: '◐ Case manager UI exists but tools are not auto-generated per case',
          hawk: '✕ Overlay platform — no native investigation workspace',
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
        Most platforms were built for data engineers. Chronhr was built for the analyst sitting in
        front of a case at 9am, with 40 alerts in the queue and a filing deadline this week. Here
        is how we compare.
      </p>

      <div className="comparison-table-wrap" role="region" aria-label="Chronhr comparison table">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Criterion</th>
              {providers.map((provider) => (
                <th key={`head-${provider.key}`}>
                  {provider.name}
                  <span className="comparison-head-note">{provider.note}</span>
                </th>
              ))}
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
                    {providers.map((provider) => (
                      <td
                        key={`${section.title}-${row.criterion}-${provider.key}`}
                        className={`comparison-cell ${provider.isPrimary ? 'comparison-cell-chronhr' : ''}`}
                      >
                        {row[provider.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="comparison-mobile" aria-label="Chronhr comparison mobile cards">
        {sections.map((section) => (
          <div className="comparison-mobile-section" key={`mobile-${section.title}`}>
            <div className="comparison-mobile-section-title">{section.title}</div>

            {section.rows.map((row) => (
              <article className="comparison-mobile-card" key={`mobile-${section.title}-${row.criterion}`}>
                <h3 className="comparison-mobile-criterion">{row.criterion}</h3>
                <p className="comparison-mobile-detail">{row.detail}</p>

                <div className="comparison-mobile-primary">
                  <div className="comparison-mobile-label">Chronhr</div>
                  <div className="comparison-mobile-value">{row.chronhr}</div>
                </div>

                <details className="comparison-mobile-more">
                  <summary>Compare with other platforms</summary>
                  <div className="comparison-mobile-list">
                    {providers
                      .filter((provider) => !provider.isPrimary)
                      .map((provider) => (
                        <div className="comparison-mobile-item" key={`mobile-item-${section.title}-${row.criterion}-${provider.key}`}>
                          <div className="comparison-mobile-item-name">{provider.name}</div>
                          <div className="comparison-mobile-item-value">{row[provider.key]}</div>
                        </div>
                      ))}
                  </div>
                </details>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComparisonTable
