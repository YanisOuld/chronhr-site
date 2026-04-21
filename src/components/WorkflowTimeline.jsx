import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: 'Case intake & data fetch',
    desc: `A case is opened. Chronhr immediately pulls all related data — transactions, account history, counterparties, sanctions lists — into a single workspace. No manual export. No copy-paste. The analyst arrives to a complete picture.`,
    tools: ['CSV / SWIFT ingestion', 'SQL connectors', 'REST APIs', 'Auto-normalization', 'Duplicate detection'],
  },
  {
    num: '02',
    title: 'Automatic tool generation',
    desc: `Based on the data loaded, Chronhr generates the right analysis tools for that specific case — relationship graph, cash flow view, transaction timeline. No configuration. No setup. The analyst interprets, not builds.`,
    tools: ['Relationship graph', 'Cash flow analysis', 'User card', 'Transaction timeline', 'Network map', 'Counterparty breakdown', 'Sanctions screening'],
  },
  {
    num: '03',
    title: 'Annotation & collaboration',
    desc: `Analysts annotate directly on the data, flag entities, add findings and communicate in context. Every action is timestamped and logged. The audit trail builds itself as the work happens.`,
    tools: ['Inline annotations', 'Team comments', 'Case timeline', 'Audit trail', 'Entity flagging'],
  },
  {
    num: '04',
    title: 'AI assistant',
    desc: `Ask the case anything. The AI chatbot understands the loaded data and responds in context — summarize activity, identify anomalies, surface patterns. It works like a senior analyst who has already read the full file.`,
    tools: ['Case Q&A', 'Anomaly detection', 'Pattern comparison', 'Natural language queries'],
  },
  {
    num: '05',
    title: 'Assisted report writing',
    desc: `The case is ready. Chronhr drafts the STR or LCTR automatically — pulling from the data, annotations and findings. The analyst reviews, adjusts if needed, and submits. No blank page. No formatting errors. Compliant on the first attempt.`,
    tools: ['STR generation', 'LCTR generation', 'FINTRAC compliance check', 'Version history'],
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
      const start = windowH * 0.84
      const end = windowH * 0.1
      const span = rect.height + (start - end) * 0.58
      const raw = (start - rect.top) / span
      const clamped = Math.min(1, Math.max(0, raw))
      const eased = Math.pow(clamped, 1.12)
      const targetPct = eased * 100

      setFillPct((prev) => {
        const next = prev + (targetPct - prev) * 0.24
        return Math.abs(next - targetPct) < 0.08 ? targetPct : next
      })

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
        The workflow your analysts <em>actually need.</em>
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

      </div>
    </div>
  )
}