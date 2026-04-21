function CtaBand() {
  return (
    <div className="cta-band">
      <div className="cta-inner">
        <div className="cta-title">
          <span className="cta-title-accent">Ready to see it</span>
          <br />
          <em>in action?</em>
        </div>
        <a
          href="#contact"
          className="btn-primary"
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
          Book a demo
        </a>
      </div>
    </div>
  )
}

export default CtaBand
