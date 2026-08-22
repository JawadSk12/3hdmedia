import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home          from './pages/Home'
import About         from './pages/About'
import Services      from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Work          from './pages/Work'
import Insights      from './pages/Insights'
import Career        from './pages/Career'
import Learning      from './pages/Learning'
import Contact       from './pages/Contact'
import NotFound      from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content" style={{ minHeight: '100vh' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Core pages */}
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/services"          element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/work"     element={<Work />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/careers"  element={<Career />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact"  element={<Contact />} />

            {/* Legacy redirects */}
            <Route path="/career"      element={<Navigate to="/careers"  replace />} />
            <Route path="/internships" element={<Navigate to="/learning" replace />} />
            <Route path="/courses"     element={<Navigate to="/learning" replace />} />
            <Route path="/placements"  element={<Navigate to="/learning" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
