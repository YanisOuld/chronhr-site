import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Case intake & data fetch',
    desc: `A new case is opened. Chronhr automatically fetches all related data across your connected sources: transactions, account history, counterparties and sanctions lists all centralizes it in one workspace. No manual export, no copy-paste.`,
    tools: ['CSV / SWIFT ingestion', 'SQL connectors', 'REST APIs', 'Auto-normalization', 'Duplicate detection'],
  },
  {
    num: '02',
    title: 'Automatic tool generation',
    desc: `Based on the data fetched, Chronhr generates the relevant analysis tools automatically. Each tool is tailored to the case. No configuration required. Analysts can focus on interpreting results, not building dashboards.`,
    tools: ['Relationship graph', 'Cash flow analysis', 'User card', 'Transaction timeline', 'Network map', 'Counterparty breakdown', 'Sanctions screening'],
  },
  {
    num: '03',
    title: 'Annotation & collaboration',
    desc: `As the analysis progresses, analysts can annotate directly on the data, flag entities, add notes and communicate with teammates in context. Every decision is logged with a full audit trail.`,
    tools: ['Inline annotations', 'Team comments', 'Case timeline', 'Audit trail', 'Entity flagging'],
  },
  {
    num: '04',
    title: 'AI assistant',
    desc: `A built-in chatbot lets analysts ask questions directly about the case: summarize activity, identify anomalies, compare patterns. It understands the data already loaded and responds in context.`,
    tools: ['Case Q&A', 'Anomaly detection', 'Pattern comparison', 'Natural language queries'],
  },
  {
    num: '05',
    title: 'Assisted report writing',
    desc: `When the analysis is complete, Chronhr drafts the STR or LCTR automatically. It pulls from the case data, annotations and findings. Analysts review, adjust and submit directly to FINTRAC. No blank page, no formatting errors.`,
    tools: ['STR generation', 'LCTR generation', 'FINTRAC compliance check', 'One-click submission', 'Version history'],
  },
]

export default function WorkflowTimeline() {
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches
  const timelineRef = useRef(null)
  const stepRefs = useRef([])
  const [fillPct, setFillPct] = useState(isMobile ? 100 : 0)
  const [activeSteps, setActiveSteps] = useState(isMobile ? steps.map(() => true) : [])

  useEffect(() => {
    if (isMobile) {
      return undefined
    }

    const onScroll = () => {
      const el = timelineRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const start = windowH * 0.75
      const end   = windowH * 0.15
      const raw   = (start - rect.top) / (rect.height - (start - end))
      const pct   = Math.min(100, Math.max(0, raw * 100))
      setFillPct(pct)

      const active = stepRefs.current.map((ref) => {
        if (!ref) return false
        const r = ref.getBoundingClientRect()
        return r.top < windowH * 0.65
      })
      setActiveSteps(active)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  return (
    <div className="workflow">
      <div className="section-label">How Chronhr works</div>
      <h2>
        From case intake
        <br />
        <em>to submission.</em>
      </h2>

      <div className="timeline" ref={timelineRef}>
        <svg
          className="timeline-snake"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="timeline-snake-path"
            d="M50 24 C50 98 16 142 16 212 C16 292 84 334 84 406 C84 486 16 530 16 602 C16 678 84 724 84 804 C84 886 50 928 50 978"
          />
          <path
            className="timeline-snake-glow"
            d="M50 24 C50 98 16 142 16 212 C16 292 84 334 84 406 C84 486 16 530 16 602 C16 678 84 724 84 804 C84 886 50 928 50 978"
          />
        </svg>

        {/* background track */}
        <div className="timeline-track" />

        {/* filled progress line */}
        <div
          className="timeline-fill"
          style={{ height: `${fillPct}%` }}
        />

        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`step step--n${i + 1} ${i % 2 === 0 ? 'step--left' : 'step--right'} ${i === steps.length - 1 ? 'step--last' : ''} ${activeSteps[i] ? 'step--active' : ''}`}
            ref={(el) => (stepRefs.current[i] = el)}
          >
            <div className="step-node" aria-hidden="true">
              <div className="step-dot" />
            </div>

            <article className="step-content">
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
              <div className="tools" role="list" aria-label={`${step.title} capabilities`}>
                {step.tools.map((t) => (
                  <span key={t} className="tool-item" role="listitem">
                    <span className="tool-bullet" aria-hidden="true" />
                    <span className="tool-text">{t}</span>
                  </span>
                ))}
              </div>
            </article>
          </div>
        ))}

        <div className="timeline-cta" aria-label="Timeline actions">
          <Link to="/get-started" className="timeline-cta-btn timeline-cta-btn-primary">
            Book a demo
          </Link>
          <Link to="/roi" className="timeline-cta-btn timeline-cta-btn-ghost">
            ROI Calculator
          </Link>
        </div>
      </div>
    </div>
  )
}