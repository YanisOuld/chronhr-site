import { useState } from 'react'

const countDecimals = (n) => {
  const text = String(n)
  const decimalPart = text.split('.')[1]
  return decimalPart ? decimalPart.length : 0
}

const clamp = (n, min, max) => Math.min(max, Math.max(min, n))

const normalizeToStep = (n, min, max, step) => {
  const clamped = clamp(n, min, max)
  const steps = Math.round((clamped - min) / step)
  const snapped = min + steps * step
  const precision = countDecimals(step)
  return Number(snapped.toFixed(precision))
}

export default function Slider({ label, value, min, max, step = 1, unit, desc, onChange }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draftValue, setDraftValue] = useState('')

  const commitDraft = () => {
    const parsed = Number(draftValue.replace(',', '.'))
    if (Number.isFinite(parsed)) {
      onChange(normalizeToStep(parsed, min, max, step))
    } else {
      setDraftValue('')
    }
    setIsEditing(false)
  }

  return (
    <div className="slider-group">
      <div className="slider-header">
        <div className="slider-label">{label}</div>
        <div className="slider-value">
          {isEditing ? (
            <div className="slider-value-editor">
              <input
                type="number"
                className="slider-value-input"
                value={draftValue}
                min={min}
                max={max}
                step={step}
                inputMode={step < 1 ? 'decimal' : 'numeric'}
                autoFocus
                onChange={(e) => setDraftValue(e.target.value)}
                onBlur={commitDraft}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') commitDraft()
                  if (e.key === 'Escape') {
                    setDraftValue(String(value))
                    setIsEditing(false)
                  }
                }}
                aria-label={`Edit ${label}`}
              />
              <span>{unit}</span>
            </div>
          ) : (
            <button
              type="button"
              className="slider-value-trigger"
              onClick={() => {
                setDraftValue(String(value))
                setIsEditing(true)
              }}
              aria-label={`Edit ${label}`}
            >
              {value} <span>{unit}</span>
            </button>
          )}
        </div>
      </div>
      <div className="slider-desc">{desc}</div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  )
}