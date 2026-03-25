import { useState, useEffect, useRef } from 'react'
import '../styles/pricing.css'
import CtaBand from '../components/CtaBand.tsx'
import Slider from '../components/Slider'
import ResultItem from '../components/ResultItem'

const CASE_PERIOD_OPTIONS = [
  { key: 'day', label: 'Per day', factorToMonth: 22 },
  { key: 'week', label: 'Per week', factorToMonth: 4.33 },
  { key: 'month', label: 'Per month', factorToMonth: 1 },
]

export default function Roi() {
  // sliders state
  const [analysts, setAnalysts] = useState(5)
  const [cases, setCases] = useState(120)
  const [casePeriod, setCasePeriod] = useState('month')
  const [hours, setHours] = useState(1)
  const [cost, setCost] = useState(40)

  const selectedPeriod = CASE_PERIOD_OPTIONS.find((option) => option.key === casePeriod)
    ?? CASE_PERIOD_OPTIONS[2]

  // derived values
  const casesPerAnalystPerMonth = cases * selectedPeriod.factorToMonth
  const totalHoursMonth = analysts * casesPerAnalystPerMonth * hours
  const totalHoursYear = totalHoursMonth * 12
  const savedHoursMonth = totalHoursMonth / 2
  const savedHoursYear = totalHoursYear / 2
  const costCurrentMonth = totalHoursMonth * cost
  const costCurrentYear = totalHoursYear * cost
  const costAfterMonth = savedHoursMonth * cost
  const costAfterYear = savedHoursYear * cost
  const savingsMonth = costCurrentMonth - costAfterMonth
  const savingsYear = costCurrentYear - costAfterYear

  const savingsRef = useRef(null)

  useEffect(() => {
    // simple pulse animation when savings changes
    const el = savingsRef.current
    if (el) {
      el.style.transform = 'scale(1.03)'
      const id = setTimeout(() => (el.style.transform = 'scale(1)'), 200)
      return () => clearTimeout(id)
    }
  }, [savingsYear])

  const fmt = (n) => Math.round(n).toLocaleString('en-CA')

  return (
    <div className="roi-page">
      {/* header copied from HTML snippet */}
      <div className="page-header">
        <div>
          <div className="eyebrow">Pricing</div>
          <h1>
            Know your ROI
            <br />
            <em>before you sign.</em>
          </h1>
        </div>
        <p className="header-desc">
          AML analysis is expensive. Between analyst hours, manual data prep and
          report rework, the costs add up fast. See exactly how much Chronhr
          saves your team.
        </p>
      </div>

      {/* calculator */}
      <div className="calc-section">
        <div className="section-label">ROI Calculator</div>
        <h2>
          How much are you
          <br />
          <em>leaving on the table?</em>
        </h2>

        <div className="calc-grid">
          {/* inputs */}
          <div className="calc-inputs">
            <Slider
              label="Number of analysts"
              value={analysts}
              min={1}
              max={50}
              step={1}
              unit="analysts"
              desc="Full-time AML analysts on your team"
              onChange={setAnalysts}
            />

            <div className="cases-period-control">
              <div className="cases-period-label">Cases unit</div>
              <div className="cases-period-options" role="tablist" aria-label="Cases period">
                {CASE_PERIOD_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    className={`cases-period-btn ${casePeriod === option.key ? 'cases-period-btn-active' : ''}`}
                    onClick={() => setCasePeriod(option.key)}
                    aria-pressed={casePeriod === option.key}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <Slider
              label={`Cases per analyst / ${casePeriod}`}
              value={cases}
              min={1}
              max={300}
              step={1}
              unit="cases"
              desc="Choose average volume handled by one analyst for the selected period"
              onChange={setCases}
            />
            <Slider
              label="Hours per case (today)"
              value={hours}
              min={0.5}
              max={10}
              step={0.5}
              unit="h / case"
              desc="Average time to complete one full analysis today"
              onChange={setHours}
            />
            <Slider
              label="Analyst hourly cost"
              value={cost}
              min={25}
              max={100}
              step={1}
              unit="$ / h"
              desc="Fully loaded cost including salary and overhead"
              onChange={setCost}
            />
          </div>

          {/* results */}
          <div className="calc-results">
            <div className="results-label">Your numbers</div>
            <div className="result-items">
                <div className="results-group">
                  <div className="results-group-title">Time</div>
                  <ResultItem name="Hours spent on analysis / year" value={`${fmt(totalHoursYear)} h`} />
                  <ResultItem name="Hours saved with Chronhr / year" value={`${fmt(savedHoursYear)} h`} />
                </div>

                {/* Cost */}
                <div className="results-group">
                  <div className="results-group-title">Cost</div>
                  <ResultItem name="Current cost / year" value={`$${fmt(costCurrentYear)}`} />
                  <ResultItem name="Cost with Chronhr / year" value={`$${fmt(costAfterYear)}`} />
                  <ResultItem name="Cost with Chronhr / month" value={`$${fmt(costAfterMonth)}`} />
                </div>
            </div>
            <div className="savings-block">
              <div className="savings-pretitle">Estimated savings / year</div>
              <div className="savings-amount" ref={savingsRef}>
                <span className="currency">$</span>
                <span>{fmt(savingsYear)}</span>
              </div>
              <div className="savings-sub">
                Approx. ${fmt(savingsMonth)} per month, assuming a 2x faster analysis workflow.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reuse existing CtaBand for consistency */}
      <CtaBand />
    </div>
  )
}
