import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
    <defs>
      <linearGradient id="footer-logo" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
    <circle cx="22" cy="22" r="19.5" stroke="url(#footer-logo)" strokeWidth="2.5" fill="none" />
    <circle cx="22" cy="22" r="12" stroke="url(#footer-logo)" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="22" cy="22" r="5.5" fill="url(#footer-logo)" />
    <line x1="22" y1="2"  x2="22" y2="10" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <line x1="22" y1="34" x2="22" y2="42" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
    <line x1="2"  y1="22" x2="10" y2="22" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
    <line x1="34" y1="22" x2="42" y2="22" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const quickLinks = [
  { to: '/',            label: 'Home' },
  { to: '/services',    label: 'Services' },
  { to: '/career',      label: 'Career' },
  { to: '/internships', label: 'Internships' },
  { to: '/courses',     label: 'Courses' },
  { to: '/placements',  label: 'Placements' },
  { to: '/contact',     label: 'Contact Us' },
]

const serviceLinks = [
  'Mobile Video Streaming',
  'WiFi Advertising',
  'Internet Advertising',
  'Social Media',
  'Location Advertising',
  'Video Emails',
  'Product Launches',
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-main">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1.1rem' }}>
              <Logo />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem' }}>
                <span style={{ color: '#EF4444' }}>3HD</span>{' '}
                <span style={{ color: 'var(--blue-200)' }}>Media</span>
              </span>
            </div>
            <p style={{ fontSize: '.875rem', color: 'var(--slate-500)', lineHeight: '1.65', marginBottom: '1.5rem', maxWidth: '230px' }}>
              Pioneers in digital media, advertising & professional training. Serving clients and students across India.
            </p>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {[
                { icon: <FacebookIcon />, label: 'Facebook' },
                { icon: <TwitterIcon />, label: 'Twitter' },
                { icon: <LinkedinIcon />, label: 'LinkedIn' },
                { icon: <InstagramIcon />, label: 'Instagram' },
              ].map(s => (
                <a key={s.label} href="#" className="social-btn" aria-label={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <Link to="/services" className="footer-link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">Contact Us</h3>
            {[
              { icon: <Mail size={14} />, content: <a href="mailto:info@3hdmedia.com" style={{ color: 'var(--slate-500)', transition: 'color .2s' }}>info@3hdmedia.com</a> },
              { icon: <Phone size={14} />, content: <a href="tel:02266661314" style={{ color: 'var(--slate-500)', transition: 'color .2s' }}>022-66661314</a> },
              {
                icon: <MapPin size={14} />,
                content: <span style={{ color: 'var(--slate-500)', lineHeight: 1.5 }}>54, Mamta 'A' Wing, A.M. Marg,<br />Prabhadevi, Mumbai — 400 025</span>
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '30px', height: '30px',
                  borderRadius: '8px',
                  background: 'rgba(96,165,250,.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--blue-200)',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '.875rem', paddingTop: '.2rem' }}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p style={{ fontSize: '.85rem', color: 'var(--slate-600)' }}>© 2020 3HD Media. All rights reserved.</p>
          <p style={{ fontSize: '.78rem', color: 'var(--slate-700)', fontStyle: 'italic' }}>Developed by Harsha & Pavitra for 3HD Media</p>
        </div>
      </div>
    </footer>
  )
}
