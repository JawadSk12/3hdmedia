import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'

const serviceDropdown = [
  { label: '📱 Social Media',        href: '/services/social-media',          sub: 'Content, strategy & management' },
  { label: '🌐 Websites & Web Pages', href: '/services/websites',              sub: 'Design & development' },
  { label: '📖 eBooks & Publications',href: '/services/ebooks-publications',   sub: 'Digital books & guides' },
  { label: '🎙️ Podcasts & Audio',    href: '/services/podcasts-audio',        sub: 'Production & distribution' },
  { label: '✉️ Email & Blogs',       href: '/services/email-marketing-blogs', sub: 'Campaigns & content' },
  { label: '📲 Mobile Apps',          href: '/services/mobile-apps',           sub: 'iOS & Android development' },
]

const navLinks = [
  { to: '/',         label: 'Home',     end: true },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services', hasDropdown: true },
  { to: '/work',     label: 'Work' },
  { to: '/insights', label: 'Insights' },
  { to: '/learning', label: 'Learning' },
  { to: '/careers',  label: 'Careers' },
]

export default function Header() {
  const [scrolled, setScrolled]             = useState(false)
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [servicesOpen, setServicesOpen]     = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollY }                         = useScroll()
  const location                            = useLocation()

  // Detect dark hero pages where nav starts transparent
  const isDarkPage = ['/', '/about', '/work', '/insights'].includes(location.pathname)

  useEffect(() => { setMobileOpen(false); setServicesOpen(false) }, [location.pathname])

  useEffect(() => {
    const unsub = scrollY.on('change', v => {
      setScrolled(v > 40)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (v / max) * 100 : 0)
    })
    return unsub
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled
    ? 'rgba(255,255,255,0.96)'
    : isDarkPage
    ? 'rgba(8,8,16,0.20)'
    : 'rgba(255,255,255,0.96)'

  const navBorder = scrolled
    ? '1px solid rgba(37,99,235,0.08)'
    : isDarkPage
    ? '1px solid rgba(255,255,255,0.06)'
    : '1px solid rgba(37,99,235,0.08)'

  const linkColor = (isActive: boolean) => {
    if (isActive) return scrolled || !isDarkPage ? 'var(--blue-600)' : 'rgba(255,255,255,1)'
    return scrolled || !isDarkPage ? 'var(--slate-700)' : 'rgba(255,255,255,0.85)'
  }

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
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          inset: '0 0 auto 0',
          zIndex: 1000,
          height: 'var(--nav-h)',
          background: navBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: navBorder,
          boxShadow: scrolled ? '0 8px 30px rgba(0,0,0,0.06)' : 'none',
          transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        <nav
          className="container"
          style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
            aria-label="3HD Media — Home"
          >
            <img
              src={logo}
              alt="3HD Media"
              className="header-logo-img"
              style={{ height: '54px', width: 'auto', minWidth: '120px', objectFit: 'contain', transition: 'transform 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Link>

          {/* Desktop Nav */}
          <ul
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', flex: 1, justifyContent: 'center' }}
            role="menubar"
          >
            {navLinks.map(link => (
              <li key={link.to} style={{ position: 'relative' }} role="none">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={servicesOpen}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.5rem 0.85rem',
                        fontSize: '0.87rem',
                        fontWeight: 700,
                        color: linkColor(isActive),
                        borderRadius: '10px',
                        background: isActive
                          ? (scrolled || !isDarkPage) ? 'rgba(37,99,235,0.06)' : 'rgba(255,255,255,0.10)'
                          : 'transparent',
                        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                        whiteSpace: 'nowrap',
                      })}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        style={{ transition: 'transform 0.3s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </NavLink>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'rgba(255,255,255,0.98)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(37,99,235,0.10)',
                            borderRadius: '16px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
                            padding: '0.75rem',
                            minWidth: '240px',
                            zIndex: 100,
                          }}
                          role="menu"
                        >
                          {serviceDropdown.map(item => (
                            <Link
                              key={item.href}
                              to={item.href}
                              role="menuitem"
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                padding: '0.65rem 1rem',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: 'var(--slate-700)',
                                borderRadius: '10px',
                                transition: 'all 0.2s',
                                gap: '0.1rem',
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(37,99,235,0.06)'
                                e.currentTarget.style.color = 'var(--blue-600)'
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.color = 'var(--slate-700)'
                              }}
                            >
                              <span>{item.label}</span>
                              <span style={{ fontSize: '0.75rem', color: 'var(--slate-400)', fontWeight: 500 }}>{item.sub}</span>
                            </Link>
                          ))}
                          <div style={{ borderTop: '1px solid var(--slate-100)', margin: '0.5rem 0.25rem 0.25rem', paddingTop: '0.5rem' }}>
                            <Link
                              to="/services"
                              role="menuitem"
                              style={{
                                display: 'flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.65rem 1rem', fontSize: '0.85rem',
                                fontWeight: 700, color: 'var(--blue-600)', borderRadius: '10px',
                                transition: 'all 0.2s',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,99,235,0.06)' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                              All Services <ArrowRight size={13} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.end}
                    role="menuitem"
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '0.5rem 0.85rem',
                      fontSize: '0.87rem',
                      fontWeight: 700,
                      color: linkColor(isActive),
                      borderRadius: '10px',
                      background: isActive
                        ? (scrolled || !isDarkPage) ? 'rgba(37,99,235,0.06)' : 'rgba(255,255,255,0.10)'
                        : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                      whiteSpace: 'nowrap',
                    })}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link
              to="/contact"
              className="btn btn-primary btn-sm btn-arrow header-cta-btn"
              style={{ whiteSpace: 'nowrap', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Let's Talk <ArrowRight size={14} className="arrow-icon" />
            </Link>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="mobile-toggle"
              style={{
                display: 'none',
                border: 'none',
                background: scrolled || !isDarkPage ? 'rgba(37,99,235,0.06)' : 'rgba(255,255,255,0.10)',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '10px',
                color: scrolled || !isDarkPage ? 'var(--slate-800)' : 'white',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-h)',
              left: 0, right: 0,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(37,99,235,0.08)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
              zIndex: 999,
              padding: '1.5rem 1.5rem 2rem',
              maxHeight: 'calc(100vh - var(--nav-h))',
              overflowY: 'auto',
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.25rem' }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '0.9rem 1.25rem',
                      fontSize: '1.05rem', fontWeight: 700,
                      color: isActive ? 'var(--blue-600)' : 'var(--slate-700)',
                      background: isActive ? 'rgba(37,99,235,0.05)' : 'transparent',
                      borderRadius: '12px',
                      transition: 'all 0.2s ease',
                    })}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <div style={{ borderTop: '1px solid var(--slate-100)', paddingTop: '1.25rem' }}>
              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center', borderRadius: '14px', gap: '0.5rem' }}
                onClick={() => setMobileOpen(false)}
              >
                Let's Talk <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1050px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (max-width: 640px) {
          .header-logo-img { height: 42px !important; min-width: 95px !important; }
        }
        @media (max-width: 520px) {
          .header-cta-btn { display: none !important; }
        }
        @media (min-width: 1051px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  )
}
