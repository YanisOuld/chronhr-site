import { Fragment } from 'react'

interface Provider {
  key: string
  name: string
  note: string
  isPrimary?: boolean
}

interface Row {
  criterion: string
  detail: string
  [key: string]: string
}

interface Section {
  title: string
  rows: Row[]
}

function ComparisonTable() {
  const providers: Provider[] = [
    {
      key: 'chronhr',
      name: 'Chronhr',
      note: '✦ Investigation workspace · End-to-end',
      isPrimary: true,
    },
    { key: 'roe', name: 'Roe AI', note: 'Investigation platform' },
    // { key: 'unit21', name: 'Unit21', note: 'AI risk infrastructure' },
    { key: 'flagright', name: 'Flagright', note: 'TM + narrative AI' },
    { key: 'lucinity', name: 'Lucinity', note: 'Case management AI' },
    // { key: 'hawk', name: 'Hawk AI', note: 'AML overlay platform' },
  ]

  const sections: Section[] = [
    {
      title: 'Investigation Workspace',
      rows: [
        {
          criterion: 'Active data ingestion',
          detail: 'Core banking, TMS, CSV, APIs',
          chronhr: '✓ Any source: core banking, TMS, CSV, APIs.',
          roe: '◐ 20+ connectors. Built for data teams, not analysts.',
          flagright: '◐ API-first. TM-focused, no investigation workspace.',
          lucinity: '◐ Third-party connectors.',
        },
        {
          criterion: 'End-to-end investigation',
          detail: 'Triage → analysis → filing in one platform',
          chronhr: '✓ Full lifecycle in one workspace.',
          roe: '◐ KYC, TM, fraud covered. No investigation workspace.',
          flagright: '✕ TM + narrative only. No investigation workflow.',
          lucinity: '◐ Case management. Not full investigation.',
        },
        {
          criterion: 'Analyst-native workspace',
          detail: 'Tools generated per case, no configuration needed',
          chronhr: '✓ Graph, timeline, cash flow, AI chatbot. Ready on open.',
          roe: '✕ Built for risk ops teams, not frontline analysts.',
          flagright: '✕ No analyst investigation workspace.',
          lucinity: '◐ Case UI exists. Tools not auto-generated.',
        },
      ],
    },
    {
      title: 'Regulatory Reporting',
      rows: [
        {
          criterion: 'SAR / STR narrative generation',
          detail: 'AI-drafted, citation-backed reports',
          chronhr: '✓ STR, LCTR, SAR. Multi-jurisdiction, full audit trail.',
          roe: '◐ SAR narrative. US/FinCEN only.',
          flagright: '◐ AI-generated SAR. FinCEN only.',
          lucinity: '◐ Report generation. EU/UK/US.',
        },
        {
          criterion: 'Multi-jurisdiction support',
          detail: 'FinCEN, FINTRAC, FCA, FATF',
          chronhr: '✓ FINTRAC, FinCEN, FCA. Global deployment.',
          roe: '✕ US / FinCEN only.',
          flagright: '◐ 30+ countries. Limited report localisation.',
          lucinity: '◐ EU / UK / US only.',
        },
        {
          criterion: 'Full audit trail',
          detail: 'Every decision documented for regulators',
          chronhr: '✓ Traceable, exportable, regulator-ready.',
          roe: '✓ Cited evidence per case.',
          flagright: '✓ Decision audit trail.',
          lucinity: '✓ Case history + audit.',
        },
      ],
    },
    {
      title: 'Data & Infrastructure',
      rows: [
        {
          criterion: 'Data sovereignty',
          detail: 'Client-selected cloud region',
          chronhr: '✓ CA, US or EU. Client choice, enforced at infra level.',
          roe: '✕ US cloud only.',
          flagright: '✕ SaaS only.',
          lucinity: '◐ EU / Iceland. Not client-selectable.',
        },
        {
          criterion: 'On-premise / hybrid',
          detail: 'For strict data residency requirements',
          chronhr: '✓ Private cloud or on-premise available.',
          roe: '✕ SaaS only.',
          flagright: '✕ SaaS only.',
          lucinity: '✕ SaaS only.',
        },
      ],
    },
    {
      title: 'Deployment & Pricing',
      rows: [
        {
          criterion: 'Time-to-value',
          detail: 'Weeks to first investigation',
          chronhr: '✓ 2–4 weeks. CSV onboarding day one.',
          roe: '◐ ~4 weeks. Connector setup required.',
          flagright: '◐ ~2 weeks for TM. No investigation workspace.',
          lucinity: '✕ 3–6 months. Enterprise implementation.',
        },
        {
          criterion: 'Mid-market pricing',
          detail: 'No enterprise contract required',
          chronhr: '✓ Flat fee + per-case. Transparent, no minimums.',
          roe: '◐ Custom pricing. Not disclosed.',
          flagright: '◐ Usage-based. Accessible for fintechs.',
          lucinity: '✕ Enterprise contracts only.',
        },
      ],
    },
  ]

  return (
    <section className="comparison" id="comparison">
      <div className="section-label">Benchmark</div>
      <h2>
        Why Compliance Teams Choose <em>Chronhr</em>
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
                  <td colSpan={5}>{section.title}</td>
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
