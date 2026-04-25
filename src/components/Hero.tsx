import { useState } from "react";

type WorkflowStep = {
  id: string;
  stage: string;
  focusTitle: string;
  summary: string;
  what: string;
  why: string;
  next: string;
  status: "running" | "ready";
  metrics: Array<{ label: string; value: string }>;
  leftPanelTitle: string;
  leftPanelRows: Array<{ label: string; width: string }>;
  rightPanelTitle: string;
  rightPanelRows: Array<{ name: string; tag: string }>;
};

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "alerts",
    stage: "Alerts",
    focusTitle: "Alerts triage focus",
    summary:
      "The analyst starts from the global alert queue, filters by priority, and opens the most actionable alert to begin investigation.",
    what: "A high-risk adverse-media + sanctions-adjacent alert is prioritized from the pending queue.",
    why: "Starting from ranked alerts ensures the team addresses the highest potential regulatory exposure first.",
    next: "Open the selected alert and launch full case analysis workflow.",
    status: "running",
    metrics: [
      { label: "Open alerts", value: "124" },
      { label: "Pending review", value: "37" },
      { label: "Critical", value: "6" },
    ],
    leftPanelTitle: "Queue health",
    leftPanelRows: [
      { label: "Critical", width: "76%" },
      { label: "High", width: "54%" },
      { label: "Medium", width: "33%" },
    ],
    rightPanelTitle: "Top priorities",
    rightPanelRows: [
      { name: "Noventis Exchange hit", tag: "Open" },
      { name: "Arcadia transfer cluster", tag: "Open" },
      { name: "BO media mention", tag: "Review" },
    ],
  },
  {
    id: "kyc",
    stage: "KYC Ingestion",
    focusTitle: "KYC focus",
    summary:
      "Identity files are normalized, missing fields are flagged, and customer profile risk is recalculated before transaction review.",
    what: "Beneficial owner differs from onboarding declaration and source-of-funds proof is outdated.",
    why: "Incomplete KYC increases uncertainty on control and expected activity profile.",
    next: "Request BO evidence + refresh source-of-funds before final risk sign-off.",
    status: "running",
    metrics: [
      { label: "Profiles parsed", value: "3 entities" },
      { label: "KYC completeness", value: "92%" },
      { label: "Critical gaps", value: "2" },
    ],
    leftPanelTitle: "KYC checks",
    leftPanelRows: [
      { label: "ID", width: "96%" },
      { label: "BO", width: "58%" },
      { label: "SOF", width: "49%" },
    ],
    rightPanelTitle: "Entity status",
    rightPanelRows: [
      { name: "Primary customer KYC", tag: "Verified" },
      { name: "Beneficial owner evidence", tag: "Missing" },
      { name: "Source of funds refresh", tag: "Required" },
    ],
  },
  {
    id: "transactions",
    stage: "Transactions Analysis",
    focusTitle: "Transactions focus",
    summary:
      "Velocity, structuring and corridor anomalies are ranked to isolate what should be escalated first.",
    what: "14 sub-threshold transfers are followed by rapid outbound wires to a repeated high-risk corridor.",
    why: "The sequence is consistent with structuring and layering behavior.",
    next: "Prioritize transaction chain review and attach chronology to escalation package.",
    status: "running",
    metrics: [
      { label: "Transactions reviewed", value: "847" },
      { label: "Flagged ratio", value: "14.8%" },
      { label: "Structuring alerts", value: "14" },
    ],
    leftPanelTitle: "Country exposure",
    leftPanelRows: [
      { label: "CA", width: "64%" },
      { label: "NG", width: "36%" },
      { label: "GH", width: "22%" },
    ],
    rightPanelTitle: "Counterparties",
    rightPanelRows: [
      { name: "Arcadia Relief Org", tag: "Layering" },
      { name: "Blueline Logistics Ltd", tag: "Monitor" },
      { name: "Noventis Exchange", tag: "Escalate" },
    ],
  },
  {
    id: "osint",
    stage: "OSINT Screening",
    focusTitle: "OSINT focus",
    summary:
      "Adverse media and sanctions-adjacent references are deduplicated and linked to the exact entities involved.",
    what: "Two adverse-media clusters reference the same beneficiary network seen in transactional outflows.",
    why: "Independent sources strengthen risk confidence and reduce false-positive likelihood.",
    next: "Link evidence IDs to summary narrative and mark confidence level for reviewer.",
    status: "running",
    metrics: [
      { label: "Articles scanned", value: "126" },
      { label: "Relevant hits", value: "4" },
      { label: "Corroborated entities", value: "2" },
    ],
    leftPanelTitle: "Source confidence",
    leftPanelRows: [
      { label: "Tier 1", width: "74%" },
      { label: "Tier 2", width: "48%" },
      { label: "Tier 3", width: "18%" },
    ],
    rightPanelTitle: "Media entities",
    rightPanelRows: [
      { name: "Noventis Exchange", tag: "Confirmed" },
      { name: "Adoria Holdings", tag: "Linked" },
      { name: "Aster NGO Route", tag: "Context" },
    ],
  },
  {
    id: "summary",
    stage: "Case Summary",
    focusTitle: "Case summary focus",
    summary:
      "Chronhr builds a clear narrative of what happened, why it matters, and what evidence supports each conclusion.",
    what: "The case timeline ties KYC gaps, transaction patterns and OSINT matches into one coherent story.",
    why: "Reviewer can validate conclusions quickly with direct evidence references.",
    next: "Approve escalation path and finalize recommendation language.",
    status: "ready",
    metrics: [
      { label: "Key findings", value: "6" },
      { label: "Evidence refs", value: "19" },
      { label: "Open questions", value: "2" },
    ],
    leftPanelTitle: "Narrative blocks",
    leftPanelRows: [
      { label: "Context", width: "80%" },
      { label: "Findings", width: "74%" },
      { label: "Rationale", width: "68%" },
    ],
    rightPanelTitle: "Decision support",
    rightPanelRows: [
      { name: "Escalate to L2 review", tag: "Primary" },
      { name: "Request source of funds", tag: "Action" },
      { name: "Monitor 30 days", tag: "Action" },
    ],
  },
  {
    id: "graph",
    stage: "Relational Graph",
    focusTitle: "Relational graph focus",
    summary:
      "Entity-to-entity links reveal hidden paths between counterparties, jurisdictions and suspicious transaction clusters.",
    what: "Graph centrality highlights Noventis as the bridge between customer flows and high-risk counterparties.",
    why: "The bridge node explains how seemingly separate events belong to one risk chain.",
    next: "Export graph snapshot with critical path labels for audit trail.",
    status: "ready",
    metrics: [
      { label: "Nodes", value: "42" },
      { label: "Risk links", value: "11" },
      { label: "Communities", value: "5" },
    ],
    leftPanelTitle: "Graph density",
    leftPanelRows: [
      { label: "Tier A", width: "70%" },
      { label: "Tier B", width: "46%" },
      { label: "Tier C", width: "30%" },
    ],
    rightPanelTitle: "Critical paths",
    rightPanelRows: [
      { name: "Customer → Noventis", tag: "Direct" },
      { name: "BO → Arcadia Route", tag: "Indirect" },
      { name: "CA → NG corridor", tag: "Repeated" },
    ],
  },
  {
    id: "report",
    stage: "Report Writing",
    focusTitle: "Report drafting focus",
    summary:
      "STR sections are drafted with citations, chronology, and regulator-ready language so analysts review instead of rewrite.",
    what: "Draft includes facts, rationale and recommendation with source citations auto-inserted.",
    why: "Standardized language improves consistency and reduces submission rework.",
    next: "Reviewer approves draft and exports regulator-ready package.",
    status: "ready",
    metrics: [
      { label: "Draft status", value: "Ready" },
      { label: "Citations", value: "23" },
      { label: "Est. review", value: "4 min" },
    ],
    leftPanelTitle: "Report sections",
    leftPanelRows: [
      { label: "Facts", width: "88%" },
      { label: "Risk logic", width: "82%" },
      { label: "Recommendation", width: "76%" },
    ],
    rightPanelTitle: "Output",
    rightPanelRows: [
      { name: "FINTRAC fields", tag: "Filled" },
      { name: "Timeline annex", tag: "Attached" },
      { name: "Analyst handoff", tag: "Ready" },
    ],
  },
];

type AlertFilter = "all" | "pending" | "confirmed" | "dismissed";

type DemoAlert = {
  id: string;
  score: number;
  name: string;
  details: string;
  status: Exclude<AlertFilter, "all">;
  riskClass: "risk-high" | "risk-med" | "risk-low";
};

const DEMO_ALERTS: DemoAlert[] = [
  {
    id: "noventis",
    score: 92,
    name: "Noventis Exchange",
    details: "Adverse Media · Sanction-adjacent · CAD 182,000",
    status: "pending",
    riskClass: "risk-high",
  },
  {
    id: "arcadia",
    score: 78,
    name: "Arcadia Relief Org",
    details: "Warning · Corridor anomaly · CAD 94,500",
    status: "pending",
    riskClass: "risk-med",
  },
  {
    id: "adoria",
    score: 61,
    name: "Adoria Holdings",
    details: "PEP proximity · Profile mismatch · CAD 43,000",
    status: "confirmed",
    riskClass: "risk-low",
  },
  {
    id: "orion",
    score: 44,
    name: "Orion Trade SARL",
    details: "Name similarity false positive · CAD 12,900",
    status: "dismissed",
    riskClass: "risk-low",
  },
];

const ALERT_FILTERS: AlertFilter[] = ["all", "pending", "confirmed", "dismissed"];

function Hero() {
  const [stepIndex, setStepIndex] = useState(0);
  const [alertFilter, setAlertFilter] = useState<AlertFilter>("all");
  const [selectedAlertId, setSelectedAlertId] = useState(DEMO_ALERTS[0].id);

  const currentStep = WORKFLOW_STEPS[stepIndex];
  const isSummaryStep = currentStep.id === "summary";
  const isGraphStep = currentStep.id === "graph";
  const isReportStep = currentStep.id === "report";
  const isAlertsStep = currentStep.id === "alerts";

  const filteredAlerts = DEMO_ALERTS.filter((alert) => alertFilter === "all" || alert.status === alertFilter);
  const selectedAlert = DEMO_ALERTS.find((alert) => alert.id === selectedAlertId) ?? DEMO_ALERTS[0];

  const countByFilter = (filter: AlertFilter) => {
    if (filter === "all") return DEMO_ALERTS.length;
    return DEMO_ALERTS.filter((alert) => alert.status === filter).length;
  };

  const openSelectedAlert = () => {
    setStepIndex(1);
  };

  return (
    <div className="hero">
      <div className="hero-top hero-reveal-stage">
        <div className="hero-left">
          <div className="hero-eyebrow hero-reveal-item">AML Intelligence Platform</div>
          <h1>
            Your analysts spend 60% of their time gathering data.
            <br />
            Not analyzing it.
          </h1>

          <p className="hero-body hero-reveal-item">
            Chronhr gives them back that time with a single workspace that ingests,
            analyzes and files. From case intake to regulator-ready report, without the
            manual work.
          </p>

          <div className="hero-actions hero-reveal-item">
            <a
              href="#contact"
              className="btn-primary"
              aria-label="Book a Chronhr demo"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("contact");
                if (target) {
                  const y = target.getBoundingClientRect().top + window.scrollY - 78;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              Book a demo
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-workspace" aria-label="Chronhr AML case analysis workspace preview">
            <aside className="hero-workspace-sidebar" aria-hidden="true">
              <div className="hero-workspace-logo">C</div>
              <div className="hero-workspace-nav">
                <span className="hero-workspace-nav-item is-active" />
                <span className="hero-workspace-nav-item" />
                <span className="hero-workspace-nav-item" />
              </div>
              <div className="hero-workspace-user">ST</div>
            </aside>

            <div className="hero-workspace-content">
              <div className="hero-workspace-head">
                <div>
                  <div className="hero-workspace-case">CASE #AML-2847</div>
                  <div className="hero-workspace-sub">{currentStep.stage}</div>
                </div>
                <div className={`hero-workspace-pill ${currentStep.status === "ready" ? "hero-workspace-pill-live" : "hero-workspace-pill-running"}`}>
                  <span className="hero-workspace-live-dot" />
                  {currentStep.status === "ready" ? "Analysis ready" : "Workflow running"}
                </div>
              </div>

              <div className="hero-workspace-flow" aria-label="Case workflow progression">
                {WORKFLOW_STEPS.map((step, idx) => (
                  <button
                    type="button"
                    key={step.id}
                    className={`hero-workspace-flow-step ${idx === stepIndex ? "is-current" : ""} ${idx < stepIndex ? "is-done" : ""}`}
                    onClick={() => setStepIndex(idx)}
                  >
                    {step.id}
                  </button>
                ))}
              </div>

              <div className="hero-workspace-focus">
                <div className="hero-workspace-focus-title">{currentStep.focusTitle}</div>
                <p>{currentStep.summary}</p>
                <div className="hero-workspace-insights">
                  <div>
                    <span>What happened</span>
                    <b>{currentStep.what}</b>
                  </div>
                  <div>
                    <span>Why it matters</span>
                    <b>{currentStep.why}</b>
                  </div>
                  <div>
                    <span>Next best action</span>
                    <b>{currentStep.next}</b>
                  </div>
                </div>
              </div>

              <div className="hero-workspace-section">{currentStep.stage}</div>

              {isAlertsStep ? (
                <div className="hero-alerts-scene">
                  <div className="hero-alerts-tabs">
                    {ALERT_FILTERS.map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        className={alertFilter === filter ? "is-active" : ""}
                        onClick={() => setAlertFilter(filter)}
                      >
                        {filter}
                        <b>{countByFilter(filter)}</b>
                      </button>
                    ))}
                  </div>

                  <div className="hero-alerts-list">
                    {filteredAlerts.map((alert) => (
                      <button
                        key={alert.id}
                        type="button"
                        className={`hero-alerts-row ${selectedAlertId === alert.id ? "is-selected" : ""}`}
                        onClick={() => setSelectedAlertId(alert.id)}
                      >
                        <i className={alert.riskClass}>{alert.score}</i>
                        <div>
                          <strong>{alert.name}</strong>
                          <p>{alert.details}</p>
                        </div>
                        <b>{alert.status}</b>
                      </button>
                    ))}
                  </div>

                  <div className="hero-alerts-hint">
                    Selected alert: <strong>{selectedAlert.name}</strong>
                    <button type="button" onClick={openSelectedAlert}>Open alert</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="hero-workspace-metrics">
                    {currentStep.metrics.map((metric) => (
                      <div className="hero-workspace-card" key={metric.label}>
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="hero-workspace-panels">
                    <div className="hero-workspace-panel">
                      <div className="hero-workspace-panel-title">{currentStep.leftPanelTitle}</div>

                      {isGraphStep ? (
                        <div className="hero-workspace-graph" aria-label="Relational graph preview">
                          <svg viewBox="0 0 280 130" role="img" aria-label="Entity relational graph">
                            <line x1="36" y1="64" x2="112" y2="36" />
                            <line x1="36" y1="64" x2="112" y2="96" />
                            <line x1="112" y1="36" x2="184" y2="64" />
                            <line x1="112" y1="96" x2="184" y2="64" />
                            <line x1="184" y1="64" x2="246" y2="44" />
                            <line x1="184" y1="64" x2="246" y2="90" />

                            <circle cx="36" cy="64" r="12" className="core" />
                            <circle cx="112" cy="36" r="9" />
                            <circle cx="112" cy="96" r="9" />
                            <circle cx="184" cy="64" r="10" className="risk" />
                            <circle cx="246" cy="44" r="8" />
                            <circle cx="246" cy="90" r="8" />

                            <text x="20" y="86">Client</text>
                            <text x="84" y="28">BO</text>
                            <text x="76" y="118">Arcadia</text>
                            <text x="154" y="58">Noventis</text>
                            <text x="224" y="36">NG</text>
                            <text x="224" y="110">CA</text>
                          </svg>
                        </div>
                      ) : isSummaryStep ? (
                        <div className="hero-workspace-summary-box">
                          <p>
                            Multiple sub-threshold transfers to two linked entities between May 14 and Jun 02 suggest structuring behavior.
                          </p>
                          <ul>
                            <li>Velocity spike vs 90-day baseline: +3.2×</li>
                            <li>Indirect PEP exposure found via beneficial owner</li>
                            <li>OSINT references corroborate corridor risk</li>
                          </ul>
                        </div>
                      ) : isReportStep ? (
                        <div className="hero-workspace-report-box">
                          <div className="hero-workspace-report-line"><span>Facts</span><b>Done</b></div>
                          <div className="hero-workspace-report-line"><span>Risk rationale</span><b>Done</b></div>
                          <div className="hero-workspace-report-line"><span>Recommendation</span><b>Done</b></div>
                          <div className="hero-workspace-report-cta">Generate regulator-ready narrative</div>
                        </div>
                      ) : (
                        currentStep.leftPanelRows.map((row) => (
                          <div className="hero-workspace-bar-row" key={row.label}>
                            <span>{row.label}</span>
                            <div><i style={{ width: row.width }} /></div>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="hero-workspace-panel">
                      <div className="hero-workspace-panel-title">{currentStep.rightPanelTitle}</div>
                      {currentStep.rightPanelRows.map((row) => (
                        <div className="hero-workspace-list-row" key={row.name}>
                          <span>{row.name}</span>
                          <b>{row.tag}</b>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats-wrap">
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-kicker">2×</div>
            <div className="hero-stat-num">Faster case closure</div>
            <div className="hero-stat-label">From intake to submission, not just analysis</div>
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
  );
}

export default Hero;


