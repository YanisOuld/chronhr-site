import { useEffect, useMemo, useState } from 'react'

function useCountUp(target, duration = 300) {
  const [value, setValue] = useState(target)

  useEffect(() => {
    let frameId
    const start = performance.now()
    const initial = value

    function tick(now) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = initial + (target - initial) * eased
      setValue(next)
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [target])

  return value
}

const CURRENCY_FMT = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const NUMBER_FMT = new Intl.NumberFormat('en-US')

function formatMoney(n) {
  return CURRENCY_FMT.format(n)
}

function formatNumber(n) {
  return NUMBER_FMT.format(n)
}

function roundTo(n, step) {
  return Math.round(n / step) * step
}

function RoiCalculatorSection() {
  const [analysts, setAnalysts] = useState(5)
  const [casesPerAnalystPerMonth, setCasesPerAnalystPerMonth] = useState(80)
  const [hoursPerCase, setHoursPerCase] = useState(2.5)
  const [hourlyCost, setHourlyCost] = useState(55)

  const values = useMemo(() => {
    const workingMonths = 11
    const casesPerYear = casesPerAnalystPerMonth * workingMonths * analysts

    const hoursTodayPerYear = casesPerYear * hoursPerCase
    const costTodayPerYear = hoursTodayPerYear * hourlyCost

    const timeReduction = 0.5
    const hoursSavedPerYear = hoursTodayPerYear * timeReduction
    const hoursWithChronhr = hoursTodayPerYear * (1 - timeReduction)
    const costLaborWithChronhr = hoursWithChronhr * hourlyCost

    const grossLaborSavings = costTodayPerYear - costLaborWithChronhr

    const extraCasesCapacity = Math.round(hoursSavedPerYear / hoursPerCase)

    const analystAnnualHours = 1800
    const analystAnnualCost = hourlyCost * analystAnnualHours
    const analystsEquivalent = (grossLaborSavings / analystAnnualCost).toFixed(1)

    const roiRatio = Math.round((grossLaborSavings / costTodayPerYear) * 100)

    return {
      casesPerYear,
      hoursTodayPerYear,
      costTodayPerYear,
      hoursSavedPerYear,
      costLaborWithChronhr,
      grossLaborSavings,
      extraCasesCapacity,
      analystsEquivalent,
      roiRatio,
    }
  }, [analysts, casesPerAnalystPerMonth, hoursPerCase, hourlyCost])

  const animatedRecovered = useCountUp(roundTo(values.grossLaborSavings, 1000))
  const animatedHoursSaved = useCountUp(values.hoursSavedPerYear)
  const animatedCases = useCountUp(values.extraCasesCapacity)
  const animatedRoi = useCountUp(values.roiRatio)
  const animatedAnalystsEquivalent = useCountUp(Number(values.analystsEquivalent))

  const roundedHoursToday = roundTo(values.hoursTodayPerYear, 10)
  const roundedHoursSaved = roundTo(values.hoursSavedPerYear, 10)

  return (
    <section className="roi-calc">
      <div className="roi-calc-head">
        <div className="section-label">ROI Calculator</div>
        <div className="roi-badge" aria-label="ROI badge">
          <span className="roi-badge-label">ROI</span>
          <strong className="roi-badge-value">{Math.round(animatedRoi)}%</strong>
          <span className="roi-badge-subtext">Of your current AML labor cost recovered</span>
        </div>
      </div>

      <h2>
        AML Compliance <em>ROI Calculator</em>
      </h2>
      <p className="roi-calc-subtitle">
        What your current workflow costs and what Chronhr gives back.
      </p>

      <div className="roi-calc-grid">
        <div className="roi-inputs">
          <label className="roi-input-item">
            <div className="roi-input-top">
              <span className="roi-input-label">Number of AML analysts</span>
              <input
                type="number"
                min={1}
                max={50}
                step={1}
                value={analysts}
                onChange={(e) => setAnalysts(Math.max(1, Math.min(50, Number(e.target.value) || 1)))}
                className="roi-number"
              />
            </div>
            <input
              type="range"
              min={1}
              max={50}
              step={1}
              value={analysts}
              onChange={(e) => setAnalysts(Number(e.target.value))}
              style={{ '--fill': `${((analysts - 1) / (50 - 1)) * 100}%` }}
            />
            <span className="roi-helper">Full-time AML analysts</span>
          </label>

          <label className="roi-input-item">
            <div className="roi-input-top">
              <span className="roi-input-label">Cases per analyst, per month</span>
              <input
                type="number"
                min={10}
                max={300}
                step={5}
                value={casesPerAnalystPerMonth}
                onChange={(e) => setCasesPerAnalystPerMonth(Math.max(10, Math.min(300, Number(e.target.value) || 10)))}
                className="roi-number"
              />
            </div>
            <input
              type="range"
              min={10}
              max={300}
              step={5}
              value={casesPerAnalystPerMonth}
              onChange={(e) => setCasesPerAnalystPerMonth(Number(e.target.value))}
              style={{ '--fill': `${((casesPerAnalystPerMonth - 10) / (300 - 10)) * 100}%` }}
            />
            <span className="roi-helper">Average monthly caseload</span>
          </label>

          <label className="roi-input-item">
            <div className="roi-input-top">
              <span className="roi-input-label">
                Hours per case (today)
                <span
                  className="roi-tip"
                  title="Industry benchmark: 2–4 hours per case (ACAMS / Thomson Reuters Cost of Compliance Report)"
                >
                  ⓘ
                </span>
              </span>
              <input
                type="number"
                min={0.5}
                max={8}
                step={0.5}
                value={hoursPerCase}
                onChange={(e) => setHoursPerCase(Math.max(0.5, Math.min(8, Number(e.target.value) || 0.5)))}
                className="roi-number"
              />
            </div>
            <input
              type="range"
              min={0.5}
              max={8}
              step={0.5}
              value={hoursPerCase}
              onChange={(e) => setHoursPerCase(Number(e.target.value))}
              style={{ '--fill': `${((hoursPerCase - 0.5) / (8 - 0.5)) * 100}%` }}
            />
            <span className="roi-helper">Data pull to report submission</span>
          </label>

          <label className="roi-input-item">
            <div className="roi-input-top">
              <span className="roi-input-label">
                Analyst hourly cost
                <span
                  className="roi-tip"
                  title="Typical range: $40–$80/h for AML analysts in North America. Include management overhead for accuracy."
                >
                  ⓘ
                </span>
              </span>
              <input
                type="number"
                min={20}
                max={120}
                step={5}
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Math.max(20, Math.min(120, Number(e.target.value) || 20)))}
                className="roi-number"
              />
            </div>
            <input
              type="range"
              min={20}
              max={120}
              step={5}
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
              style={{ '--fill': `${((hourlyCost - 20) / (120 - 20)) * 100}%` }}
            />
            <span className="roi-helper">Salary, benefits and overhead</span>
          </label>
        </div>

        <div className="roi-results">
          <article className="roi-card roi-card-primary">
            <div className="roi-card-label">Recovered per year</div>
            <div className="roi-card-value">{formatMoney(Math.round(animatedRecovered))}</div>
            <div className="roi-card-sub">In analyst hours recovered</div>
          </article>

          <div className="roi-cards-row">
            <article className="roi-card">
              <div className="roi-card-label">Hours saved per year</div>
              <div className="roi-card-value">{formatNumber(Math.round(animatedHoursSaved))} h</div>
              <div className="roi-card-sub">Freed from manual prep</div>
            </article>

            <article className="roi-card">
              <div className="roi-card-label">Additional cases</div>
              <div className="roi-card-value">+{formatNumber(Math.round(animatedCases))} cases</div>
              <div className="roi-card-sub">No additional headcount</div>
            </article>
          </div>

          <article className="roi-card">
            <div className="roi-card-label">Analyst salaries recovered</div>
            <div className="roi-card-value">
              {animatedAnalystsEquivalent.toFixed(1)} analyst{Number(animatedAnalystsEquivalent.toFixed(1)) > 1 ? 's' : ''}
            </div>
            <div className="roi-card-sub">Equivalent headcount cost recovered</div>
          </article>
        </div>
      </div>

      <p className="roi-insight">
        {formatNumber(analysts)} analysts, {formatNumber(Math.round(values.casesPerYear))} cases/year.
        {' '}{formatNumber(roundedHoursSaved)} hours recovered, equivalent to {values.analystsEquivalent} analyst{Number(values.analystsEquivalent) > 1 ? 's' : ''}.
      </p>

      <p className="roi-footnote">
        Based on a 2× faster case closure benchmark. Actual results vary. Ref: ACAMS Cost of Compliance Report, Datos Insights 2024.
      </p>

      <div className="roi-cta-group">
        <a
          href="#contact"
          className="roi-cta-primary"
          aria-label="Book a Chronhr demo"
          onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById('contact')
            if (target) {
              const y = target.getBoundingClientRect().top + window.scrollY - 78
              window.scrollTo({ top: y, behavior: 'smooth' })
            }
          }}
        >
          See it on a real case. Book a 30 min demo.
        </a>
      </div>
    </section>
  )
}

export default RoiCalculatorSection
