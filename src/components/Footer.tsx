import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { company } from '../data/company'

/* ── Social Icons ───────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.507 9.388.507 9.388.507s7.517 0 9.389-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.338 5.393 0 11.95 0c3.178.001 6.164 1.24 8.41 3.49a11.83 11.83 0 0 1 3.486 8.417c-.004 6.556-5.338 11.953-11.897 11.953-2.002-.001-3.967-.505-5.714-1.46L0 24zm6.337-1.658c1.68.997 3.56 1.523 5.482 1.524H11.9c5.65 0 10.25-4.606 10.252-10.264 0-2.739-1.066-5.313-3.004-7.256A10.165 10.165 0 0 0 11.9 3.47c-5.655 0-10.26 4.607-10.262 10.265-.001 1.96.512 3.878 1.488 5.56l-.328 1.2.366 1.332-1.393-.365zm11.135-7.96c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
)

const socialLinks = [
  { icon: <InstagramIcon />, label: 'Instagram', href: company.social.instagram, hoverColor: '#E1306C', glow: 'rgba(225,48,108,0.35)' },
  { icon: <FacebookIcon />,  label: 'Facebook',  href: company.social.facebook,  hoverColor: '#1877F2', glow: 'rgba(24,119,242,0.35)' },
  { icon: <YoutubeIcon />,   label: 'YouTube',   href: company.social.youtube,   hoverColor: '#FF0000', glow: 'rgba(255,0,0,0.35)' },
  { icon: <WhatsappIcon />,  label: 'WhatsApp',  href: company.social.whatsapp,  hoverColor: '#25D366', glow: 'rgba(37,211,102,0.35)' },
  { icon: <LinkedinIcon />,  label: 'LinkedIn',  href: company.social.linkedin,  hoverColor: '#0077B5', glow: 'rgba(0,119,181,0.35)' },
]

function SocialBtn({ s }: { s: typeof socialLinks[0] }) {
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
        width: '36px', height: '36px', borderRadius: '10px',
        background: hovered ? s.hoverColor : 'rgba(255,255,255,0.04)',
        border: '1px solid',
        borderColor: hovered ? s.hoverColor : 'rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hovered ? 'white' : 'var(--slate-500)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered ? `0 6px 18px ${s.glow}` : 'none',
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
            <Link to="/" aria-label="3HD Media Home">
              <img
                src={logo}
                alt="3HD Media"
                style={{ height: '46px', width: 'auto', objectFit: 'contain', marginBottom: '1.25rem', display: 'block', opacity: 0.9 }}
              />
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', lineHeight: 1.70, marginBottom: '1.5rem', maxWidth: '240px' }}>
              {company.description}
            </p>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {socialLinks.map(s => <SocialBtn key={s.label} s={s} />)}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { to: '/services/social-media',          label: '📱 Social Media' },
                { to: '/services/websites',              label: '🌐 Websites & Web Pages' },
                { to: '/services/ebooks-publications',   label: '📖 eBooks & Publications' },
                { to: '/services/podcasts-audio',        label: '🎙️ Podcasts & Audio' },
                { to: '/services/email-marketing-blogs', label: '✉️ Email & Blogs' },
                { to: '/services/mobile-apps',           label: '📲 Mobile Apps' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { to: '/about',      label: 'About Us' },
                { to: '/management', label: 'Management Team' },
                { to: '/work',       label: 'Our Work' },
                { to: '/insights',   label: 'Insights' },
                { to: '/careers',    label: 'Careers' },
                { to: '/learning',   label: 'Internships & Courses' },
                { to: '/contact',    label: 'Contact Us' },
              ].map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="footer-col-title">Contact Us</h3>
            {[
              {
                icon: <Mail size={13} />,
                content: (
                  <a href={`mailto:${company.contact.email}`} style={{ color: 'var(--slate-500)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-300)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--slate-500)')}>
                    {company.contact.email}
                  </a>
                ),
              },
              {
                icon: <Phone size={13} />,
                content: (
                  <a href={company.contact.phoneHref} style={{ color: 'var(--slate-500)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-300)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--slate-500)')}>
                    {company.contact.phone}
                  </a>
                ),
              },
              {
                icon: <MapPin size={13} />,
                content: (
                  <a href={company.contact.address.mapUrl} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--slate-500)', lineHeight: 1.55, transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-300)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--slate-500)')}>
                    {company.contact.address.line1}<br />
                    {company.contact.address.line2}
                  </a>
                ),
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '28px', height: '28px', borderRadius: '8px',
                  background: 'rgba(96,165,250,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, color: 'var(--blue-300)', marginTop: '0.1rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: '0.875rem', paddingTop: '0.2rem' }}>{item.content}</div>
              </div>
            ))}

            {/* Quick CTA */}
            <div style={{ marginTop: '1.5rem' }}>
              <Link
                to="/contact"
                className="btn btn-outline-white btn-sm btn-arrow"
                style={{ fontSize: '0.80rem', borderRadius: '10px', display: 'inline-flex', gap: '0.4rem' }}
              >
                Start a Project <ArrowRight size={13} className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p style={{ fontSize: '0.84rem', color: 'var(--slate-600)' }}>
            {company.copyright}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: '0.82rem', color: 'var(--slate-600)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue-300)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--slate-600)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
