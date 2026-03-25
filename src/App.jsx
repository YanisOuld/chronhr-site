import { useEffect } from 'react'
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
    title: 'Chronhr - AML & Anti-Fraud Intelligence Platform',
    description:
      'Chronhr helps AML and compliance teams investigate cases faster, detect anomalies, and draft reports with AI assistance.',
    canonical: 'https://chronhr.com/',
  },
  '/get-started': {
    title: 'Get Started | Chronhr',
    description:
      'Request a tailored Chronhr demo and see how your team can accelerate AML investigations and reporting workflows.',
    canonical: 'https://chronhr.com/get-started',
  },
  '/roi': {
    title: 'ROI Calculator | Chronhr',
    description:
      'Estimate analyst hours and cost savings with Chronhr using our AML workflow ROI calculator.',
    canonical: 'https://chronhr.com/roi',
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

  return (
    <>
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