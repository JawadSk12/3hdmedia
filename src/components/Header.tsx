import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/services',    label: 'Services' },
  { to: '/courses',     label: 'Courses' },
  { to: '/career',      label: 'Career' },
  { to: '/internships', label: 'Internships' },
  { to: '/placements',  label: 'Placements' },
  { to: '/contact',     label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled]             = useState(false)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollY }                         = useScroll()
  const location                            = useLocation()

  /* Close mobile menu when route changes */
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  /* Scroll progress and background state listener */
  useEffect(() => {
    const unsub = scrollY.on('change', v => {
      setScrolled(v > 30)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (v / max) * 100 : 0)
    })
    return unsub
  }, [scrollY])

  /* Body scroll lock on mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 1000,
          height: 'var(--nav-h)',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(4, 13, 33, 0.35)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(11, 63, 160, 0.08)' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: scrolled ? '0 8px 30px rgba(11, 63, 160, 0.04)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        <nav className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Logo */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0, transition: 'transform 0.3s ease' }}
            aria-label="3HD Media Home"
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={logo} alt="3HD Media" style={{ height: '62px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '.2rem', flex: 1, justifyContent: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <motion.li key={link.to} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '.5rem .8rem',
                    fontSize: '.86rem',
                    fontWeight: 700,
                    color: isActive
                      ? 'var(--blue-600)'
                      : scrolled ? 'var(--slate-700)' : 'rgba(255,255,255,.9)',
                    borderRadius: '10px',
                    background: isActive ? (scrolled ? 'rgba(11, 63, 160, 0.06)' : 'rgba(255, 255, 255, 0.12)') : 'transparent',
                    border: isActive ? (scrolled ? '1px solid rgba(11, 63, 160, 0.1)' : '1px solid rgba(255, 255, 255, 0.15)') : '1px solid transparent',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    whiteSpace: 'nowrap',
                  })}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ whiteSpace: 'nowrap', borderRadius: '10px' }}>
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{
                display: 'none',
                border: 'none',
                background: scrolled ? 'rgba(11, 63, 160, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
                padding: '.5rem',
                borderRadius: '10px',
                color: scrolled ? 'var(--slate-800)' : 'white',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="mobile-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)',
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(11, 63, 160, 0.08)',
              boxShadow: '0 12px 40px rgba(11, 63, 160, 0.08)',
              zIndex: 999,
              padding: '1.25rem 1.5rem 1.75rem',
              maxHeight: 'calc(100vh - var(--nav-h))',
              overflowY: 'auto',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '.85rem 1.25rem',
                      fontSize: '1.025rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--blue-600)' : 'var(--slate-700)',
                      background: isActive ? 'rgba(11, 63, 160, 0.05)' : 'transparent',
                      borderRadius: '12px',
                      transition: 'all .25s ease',
                      border: isActive ? '1px solid rgba(11, 63, 160, 0.08)' : '1px solid transparent',
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}

              <li style={{ marginTop: '1rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '12px' }} onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1050px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 1051px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  )
}
