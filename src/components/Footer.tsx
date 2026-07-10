import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logo.png'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.507 9.388.507 9.388.507s7.517 0 9.389-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.338 5.393 0 11.95 0c3.178.001 6.164 1.24 8.41 3.49a11.83 11.83 0 0 1 3.486 8.417c-.004 6.556-5.338 11.953-11.897 11.953-2.002-.001-3.967-.505-5.714-1.46L0 24zm6.337-1.658c1.68.997 3.56 1.523 5.482 1.524H11.9c5.65 0 10.25-4.606 10.252-10.264 0-2.739-1.066-5.313-3.004-7.256A10.165 10.165 0 0 0 11.9 3.47c-5.655 0-10.26 4.607-10.262 10.265-.001 1.96.512 3.878 1.488 5.56l-.328 1.2.366 1.332-1.393-.365zm11.135-7.96c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
)

const socialPlatforms = [
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com', glowColor: 'rgba(225,48,108,0.38)', hoverColor: '#E1306C' },
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com', glowColor: 'rgba(24,119,242,0.38)', hoverColor: '#1877F2' },
  { icon: <YoutubeIcon />, label: 'YouTube', href: 'https://youtube.com', glowColor: 'rgba(255,0,0,0.38)', hoverColor: '#FF0000' },
  { icon: <WhatsappIcon />, label: 'WhatsApp', href: 'https://wa.me/919820108341', glowColor: 'rgba(37,211,102,0.38)', hoverColor: '#25D366' },
  { icon: <LinkedinIcon />, label: 'LinkedIn', href: 'https://linkedin.com', glowColor: 'rgba(0,119,181,0.38)', hoverColor: '#0077B5' },
]

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

function SocialButton({ s }: { s: typeof socialPlatforms[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '38px', height: '38px',
        borderRadius: '10px',
        background: hovered ? s.hoverColor : 'rgba(255,255,255,.04)',
        border: '1px solid',
        borderColor: hovered ? s.hoverColor : 'rgba(255,255,255,.07)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: hovered ? 'white' : 'var(--slate-500)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered ? `0 6px 18px ${s.glowColor}` : 'none',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      {s.icon}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-main">
          {/* Brand Column */}
          <div>
            <img src={logo} alt="3HD Media" style={{ height: '44px', width: 'auto', objectFit: 'contain', marginBottom: '1.1rem', display: 'block' }} />
            <p style={{ fontSize: '.875rem', color: 'var(--slate-500)', lineHeight: '1.65', marginBottom: '1.5rem', maxWidth: '230px' }}>
              Pioneers in digital media, advertising & professional training. Serving clients and students across India.
            </p>
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {socialPlatforms.map(s => (
                <SocialButton key={s.label} s={s} />
              ))}
            </div>
          </div>

          {/* Quick links Column */}
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

          {/* Services Column */}
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

          {/* Contact Column */}
          <div>
            <h3 className="footer-col-title">Contact Us</h3>
            {[
              { icon: <Mail size={14} />, content: <a href="mailto:info@3hdmedia.com" style={{ color: 'var(--slate-500)', transition: 'color .2s' }}>info@3hdmedia.com</a> },
              { icon: <Phone size={14} />, content: <a href="tel:02266661314" style={{ color: 'var(--slate-500)', transition: 'color .2s' }}>022-66661314</a> },
              {
                icon: <MapPin size={14} />,
                content: <a href="https://maps.google.com/?q=Prabhadevi,Mumbai,400025" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--slate-500)', transition: 'color .2s', lineHeight: 1.5 }}>54, Mamta 'A' Wing, A.M. Marg,<br />Prabhadevi, Mumbai — 400 025</a>
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '30px', height: '30px',
                  borderRadius: '8px',
                  background: 'rgba(96,165,250,.07)',
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

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p style={{ fontSize: '.85rem', color: 'var(--slate-600)' }}>© 2020 3HD Media. All rights reserved.</p>
          <p style={{ fontSize: '.78rem', color: 'var(--slate-700)', fontStyle: 'italic' }}>Developed by Harsha & Pavitra for 3HD Media</p>
        </div>
      </div>
    </footer>
  )
}
