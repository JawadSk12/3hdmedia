import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X, ChevronDown, Briefcase, GraduationCap, Users } from 'lucide-react'
import logo from '../assets/logo.png'

const careersDropdown = [
  { to: '/career',      label: 'Career',      icon: <Briefcase size={15} />,      sub: 'Job openings across all domains' },
  { to: '/internships', label: 'Internships', icon: <GraduationCap size={15} />, sub: 'Live projects for students' },
  { to: '/placements',  label: 'Placements',  icon: <Users size={15} />,          sub: 'Campus placement solutions' },
]

const mainLinks = [
  { to: '/',        label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/courses',  label: 'Courses' },
]

export default function Header() {
  const [scrolled, setScrolled]             = useState(false)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [dropOpen, setDropOpen]             = useState(false)
  const dropRef                             = useRef<HTMLLIElement>(null)
  const { scrollY }                         = useScroll()
  const location                            = useLocation()

  /* Close dropdown when route changes */
  useEffect(() => { setDropOpen(false); setMobileOpen(false) }, [location.pathname])

  /* Scroll listener */
  useEffect(() => {
    const unsub = scrollY.on('change', v => {
      setScrolled(v > 30)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (v / max) * 100 : 0)
    })
    return unsub
  }, [scrollY])

  /* Body lock on mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isCareerActive = ['/career', '/internships', '/placements'].includes(location.pathname)

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
            {mainLinks.map(link => (
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
                    whiteSpace: 'nowrap',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            {/* Careers & Campus dropdown */}
            <li ref={dropRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setDropOpen(v => !v)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '.3rem',
                  padding: '.45rem .8rem',
                  fontSize: '.875rem',
                  fontWeight: 500,
                  color: isCareerActive
                    ? 'var(--blue-400)'
                    : scrolled ? 'var(--slate-700)' : 'rgba(255,255,255,.85)',
                  borderRadius: '8px',
                  background: isCareerActive ? (scrolled ? 'rgba(29,78,216,.07)' : 'rgba(255,255,255,.1)') : 'transparent',
                  border: 'none', cursor: 'pointer',
                  transition: 'color 0.25s, background 0.25s',
                  whiteSpace: 'nowrap',
                }}
              >
                Careers & Campus
                <motion.span
                  animate={{ rotate: dropOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: .97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: .97 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      minWidth: '230px',
                      background: 'white',
                      borderRadius: '14px',
                      boxShadow: '0 8px 40px rgba(0,0,0,.13)',
                      border: '1px solid var(--slate-200)',
                      padding: '.5rem',
                      zIndex: 100,
                    }}
                  >
                    {careersDropdown.map(item => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        style={({ isActive }) => ({
                          display: 'flex',
                          alignItems: 'center',
                          gap: '.75rem',
                          padding: '.7rem .9rem',
                          borderRadius: '10px',
                          background: isActive ? 'var(--blue-10)' : 'transparent',
                          color: isActive ? 'var(--blue-600)' : 'var(--slate-700)',
                          transition: 'background .18s, color .18s',
                        })}
                        className="dropdown-item"
                      >
                        <div style={{
                          width: '32px', height: '32px', borderRadius: '8px',
                          background: 'linear-gradient(135deg, rgba(29,78,216,.08), rgba(96,165,250,.13))',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'var(--blue-500)', flexShrink: 0,
                        }}>
                          {item.icon}
                        </div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '.875rem', lineHeight: 1 }}>{item.label}</div>
                          <div style={{ fontSize: '.75rem', color: 'var(--slate-400)', marginTop: '.18rem' }}>{item.sub}</div>
                        </div>
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <NavLink
                to="/contact"
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
                  whiteSpace: 'nowrap',
                })}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ whiteSpace: 'nowrap' }}>
              Request a Proposal
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
              maxHeight: 'calc(100vh - var(--nav-h))',
              overflowY: 'auto',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '.2rem' }}>
              {[...mainLinks, { to: '/contact', label: 'Contact Us' }].map((link, i) => (
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

              {/* Mobile Careers group */}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: mainLinks.length * 0.05 }}
                style={{ marginTop: '.5rem' }}
              >
                <div style={{ padding: '.45rem 1.1rem .35rem', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-400)' }}>
                  Careers & Campus
                </div>
                {careersDropdown.map((item, j) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      display: 'flex', alignItems: 'center', gap: '.65rem',
                      padding: '.7rem 1.1rem',
                      fontSize: '.95rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--blue-500)' : 'var(--slate-700)',
                      background: isActive ? 'var(--blue-10)' : 'transparent',
                      borderRadius: '10px',
                      transition: 'all .2s',
                    })}
                  >
                    <span style={{ color: 'var(--slate-400)' }}>{item.icon}</span>
                    {item.label}
                  </NavLink>
                ))}
              </motion.li>

              <li style={{ marginTop: '.75rem' }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>
                  Request a Proposal
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
        .dropdown-item:hover {
          background: var(--blue-10) !important;
          color: var(--blue-600) !important;
        }
      `}</style>
    </>
  )
}
