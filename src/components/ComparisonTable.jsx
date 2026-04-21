import { Fragment } from 'react'

function ComparisonTable() {
  const providers = [
    {
      key: 'chronhr',
      name: 'Chronhr',
      note: '✦ Investigation workspace · End-to-end',
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
      title: 'Investigation Workspace',
      rows: [
        {
          criterion: 'Active data ingestion',
          detail: 'Agents automatically fetch & consolidate data',
          chronhr: '✓ Pulls from any source — core banking, TMS, CSV, APIs. Built for investigation, not just monitoring.',
          roe: '◐ 20+ native connectors, agent-driven — but built for data teams, not frontline analysts.',
          unit21: '◐ Flexible integrations — requires API setup by engineering team.',
          flagright: '◐ API-first no-code ingestion — TM-focused, no investigation workspace.',
          lucinity: '◐ Third-party integrations via connectors.',
          hawk: '◐ Overlay on existing TMS — not standalone ingestion.',
        },
        {
          criterion: 'End-to-end investigation',
          detail: 'Alert triage → analysis → SAR filing in one platform',
          chronhr: '✓ Full lifecycle in one workspace — data, analysis, report. No tool switching.',
          roe: '◐ KYC, L1 TM, fraud, onboarding covered — no analyst investigation workspace.',
          unit21: '◐ Full AML + fraud detection stack — investigation workspace not analyst-native.',
          flagright: '✕ TM + narrative generation — no end-to-end investigation workflow.',
          lucinity: '◐ Case management focused — not a full investigation workspace.',
          hawk: '✕ Overlay platform — not a standalone end-to-end workflow.',
        },
        {
          criterion: 'Analyst-native workspace',
          detail: 'Investigation tools generated automatically — no configuration, no data team required',
          chronhr: '✓ Case-specific tools generated on open — graph, timeline, cash flow, AI chatbot, ready instantly.',
          roe: '✕ Agent-driven platform built for risk ops teams — not designed around the frontline analyst workflow.',
          unit21: '✕ Built for data and risk ops teams — analysts are not the primary user.',
          flagright: '✕ TM-focused platform — no analyst investigation workspace.',
          lucinity: '◐ Case manager UI exists — but tools are not auto-generated per case.',
          hawk: '✕ Overlay platform — no native investigation workspace.',
        },
      ],
    },
    {
      title: 'Regulatory Reporting',
      rows: [
        {
          criterion: 'SAR / STR narrative generation',
          detail: 'AI-drafted, citation-backed regulatory reports',
          chronhr: '✓ STR and LCTR templates, auto-filled from case data, multi-jurisdiction, full audit trail.',
          roe: '◐ SAR narrative drafted for L2 review — US/FinCEN format only.',
          unit21: '◐ Regulator-ready narrative — US/FinCEN format only.',
          flagright: '◐ AI-generated SAR narratives — FinCEN-aligned, no STR/LCTR templates.',
          lucinity: '◐ Report generation via Luci AI agent — EU/UK/US formats.',
          hawk: '◐ AML Analyst Agent drafts narratives — EU/US formats, overlay only.',
        },
        {
          criterion: 'Multi-jurisdiction support',
          detail: 'FinCEN, FINTRAC, FCA, FATF-aligned workflows',
          chronhr: '✓ STR (FINTRAC), SAR (FinCEN), FCA-aligned — built for global deployment.',
          roe: '✕ FinCEN / US only.',
          unit21: '✕ US primary — FinCEN/BSA focused.',
          flagright: '◐ 30+ countries — strong on TM, limited on report localisation.',
          lucinity: '◐ EU / UK / US — limited outside these jurisdictions.',
          hawk: '◐ EU / US — limited elsewhere.',
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
          chronhr: '✓ Client chooses their region — CA, US or EU. Enforced at infrastructure level.',
          roe: '✕ US cloud only — no regional data residency option.',
          unit21: '◐ US-primary — limited regional options, not client-selectable.',
          flagright: '✕ SaaS only — no client-selectable data residency.',
          lucinity: '◐ EU / Iceland hosted — not client-selectable.',
          hawk: '◐ EU / US hosted — not client-selectable.',
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
          chronhr: '✓ 2–4 weeks — CSV onboarding available day one.',
          roe: '◐ ~4 weeks — native connectors require integration setup.',
          unit21: '◐ 4–8 weeks — data-agnostic but API integration required.',
          flagright: '◐ ~2 weeks for TM — but no investigation workspace included.',
          lucinity: '✕ 3–6 months — enterprise contracts and implementation.',
          hawk: '✕ 2–4 months — overlay integration on existing TMS required.',
        },
        {
          criterion: 'No heavy IT dependency',
          detail: 'Onboard via CSV — no core integration required upfront',
          chronhr: '✓ CSV onboarding available day one — no core integration required upfront.',
          roe: '◐ Requires connector setup — engineering involvement needed.',
          unit21: '◐ Data-agnostic — but API integration requires engineering.',
          flagright: '◐ No-code CSV import available — TM only, no investigation tooling.',
          lucinity: '✕ Enterprise implementation required.',
          hawk: '✕ Overlay integration on existing TMS — engineering dependency.',
        },
        {
          criterion: 'Mid-market pricing',
          detail: 'No six-figure enterprise contract required',
          chronhr: '✓ Flat fee + per-case model — transparent, no minimums.',
          roe: '◐ Custom pricing — not publicly disclosed.',
          unit21: '◐ From ~$33k/year — scales to $160k+ average.',
          flagright: '◐ Usage-based pricing — accessible for fintechs and mid-market.',
          lucinity: '✕ Enterprise contracts only.',
          hawk: '✕ Enterprise pricing.',
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
