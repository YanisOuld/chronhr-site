import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'
import SinglePage from './pages/SinglePage'
import GetStarted from './pages/GetStarted'
import Roi from './pages/Roi'
import Background from './components/Background'
import ScrollToTop from './components/ScrollToTop'

const SEO_BY_PATH = {
  '/': {
    title: 'Chronhr | AML Investigation Platform for Compliance Teams',
    description:
      'Chronhr helps AML analysts close cases 2× faster automated data ingestion, AI-assisted investigation, and regulator-ready STR/LCTR reports. Trusted by compliance teams. Book a demo.',
    canonical: 'https://www.chronhr.com/',
  },
  '/get-started': {
    title: 'Get Started | Chronhr',
    description:
      'Request a tailored Chronhr demo and see how your team can accelerate AML investigations and reporting workflows.',
    canonical: 'https://www.chronhr.com/get-started',
  },
  '/roi': {
    title: 'ROI Calculator | Chronhr',
    description:
      'Estimate analyst hours and cost savings with Chronhr using our AML workflow ROI calculator.',
    canonical: 'https://www.chronhr.com/roi',
  },
}

function setMetaTag(name, content) {
  if (!content) return
  const selector = `meta[name="${name}"]`
  const meta = document.head.querySelector(selector)
  if (meta) {
    meta.setAttribute('content', content)
  }
}

function setPropertyTag(property, content) {
  if (!content) return
  const selector = `meta[property="${property}"]`
  const meta = document.head.querySelector(selector)
  if (meta) {
    meta.setAttribute('content', content)
  }
}

function App() {
  const { pathname } = useLocation()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const seo = SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/']
    document.title = seo.title
    setMetaTag('description', seo.description)
    setMetaTag('twitter:title', seo.title)
    setMetaTag('twitter:description', seo.description)
    setPropertyTag('og:title', seo.title)
    setPropertyTag('og:description', seo.description)
    setPropertyTag('og:url', seo.canonical)

    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', seo.canonical)
    }
  }, [pathname])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(Math.max(0, Math.min(100, pct)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    sections.forEach((el) => el.classList.add('reveal-base'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Background />
      <ScrollToTop />
      <Nav />

      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/roi" element={<Roi />} />
      </Routes>

      <SiteFooter />
    </>
  )
}

export default App