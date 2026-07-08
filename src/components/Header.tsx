import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'



const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/services',    label: 'Services' },
  { to: '/career',      label: 'Career' },
  { to: '/internships', label: 'Internships' },
  { to: '/courses',     label: 'Courses' },
  { to: '/placements',  label: 'Placements' },
  { to: '/contact',     label: 'Contact Us' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', v => {
      setScrolled(v > 30)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (v / max) * 100 : 0)
    })
    return unsub
  }, [scrollY])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
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
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        <nav className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Logo */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
            aria-label="3HD Media Home"
          >
            <img src={logo} alt="3HD Media" style={{ height: '62px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '.1rem', flex: 1, justifyContent: 'center' }} className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '.45rem .8rem',
                    fontSize: '.875rem',
                    fontWeight: 500,
                    color: isActive
                      ? 'var(--blue-400)'
                      : scrolled ? 'var(--slate-700)' : 'rgba(255,255,255,.85)',
                    borderRadius: '8px',
                    background: isActive ? (scrolled ? 'rgba(29,78,216,.07)' : 'rgba(255,255,255,.1)') : 'transparent',
                    transition: 'color 0.25s, background 0.25s',
                    position: 'relative',
                    whiteSpace: 'nowrap',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
            <Link
              to="/contact"
              className="btn btn-primary btn-sm"
              style={{ display: 'none' }}
              id="nav-cta"
            >
              Get in Touch
            </Link>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{
              // visible on desktop
            }}>
              Get in Touch
            </Link>
            <button
              onClick={() => setMobileOpen(v => !v)}
              style={{
                display: 'none',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '.45rem',
                borderRadius: '8px',
                color: scrolled ? 'var(--slate-800)' : 'white',
                alignItems: 'center',
              }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="mobile-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--slate-200)',
              boxShadow: '0 8px 40px rgba(0,0,0,.12)',
              zIndex: 999,
              padding: '1.25rem 1.5rem 1.5rem',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.2rem' }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '.85rem 1.1rem',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--blue-500)' : 'var(--slate-700)',
                      background: isActive ? 'var(--blue-10)' : 'transparent',
                      borderRadius: '10px',
                      transition: 'all .2s',
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li style={{ marginTop: '.75rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          #nav-cta { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  )
}
