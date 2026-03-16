import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import SiteFooter from './components/SiteFooter'
import SinglePage from './pages/SinglePage'
import GetStarted from './pages/GetStarted'
import Background from './components/Background'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Background />
      <ScrollToTop />
      <Nav />

      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      <SiteFooter />
    </>
  )
}

export default App