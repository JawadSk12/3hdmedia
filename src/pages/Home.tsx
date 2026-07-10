import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  MonitorPlay, Wifi, Globe, MapPin, Share2,
  ArrowRight, TrendingUp, Award, Zap,
  Briefcase, GraduationCap, BookMarked,
  CheckCircle,
} from 'lucide-react'

/* ── Custom Social SVGs ───────────────────────────────────────── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.507 9.388.507 9.388.507s7.517 0 9.389-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.338 5.393 0 11.95 0c3.178.001 6.164 1.24 8.41 3.49a11.83 11.83 0 0 1 3.486 8.417c-.004 6.556-5.338 11.953-11.897 11.953-2.002-.001-3.967-.505-5.714-1.46L0 24zm6.337-1.658c1.68.997 3.56 1.523 5.482 1.524H11.9c5.65 0 10.25-4.606 10.252-10.264 0-2.739-1.066-5.313-3.004-7.256A10.165 10.165 0 0 0 11.9 3.47c-5.655 0-10.26 4.607-10.262 10.265-.001 1.96.512 3.878 1.488 5.56l-.328 1.2.366 1.332-1.393-.365zm11.135-7.96c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  </svg>
)

/* ── Animated counter ────────────────────────────────────────── */
function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true })
  const mv    = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 14 })
  const [display, setDisplay] = useState(0)

  useEffect(() => { if (inView) mv.set(target) }, [inView, target, mv])
  useEffect(() => spring.on('change', v => setDisplay(Math.round(v))), [spring])

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>
}

/* ── Service marquee ─────────────────────────────────────────── */
const SERVICES = [
  'Mobile Video Streaming', 'WiFi Advertising', 'Internet Advertising',
  'Regional Voice SMS', 'Location Advertising', 'Product Launches',
  'Video SMS', 'Mobile Video Training', 'Bluetooth Advertising',
  'Social Media', 'Video Emails',
]

function Marquee() {
  const items = [...SERVICES, ...SERVICES]
  return (
    <div className="marquee-wrap" style={{ borderBottom: '1px solid var(--slate-200)', background: 'var(--white)' }}>
      <div className="marquee-track" style={{ padding: '.85rem 0' }}>
        {items.map((s, i) => (
          <span key={i} className="marquee-item" style={{ color: 'var(--slate-400)', fontSize: '.78rem', fontWeight: 800 }}>
            {s}
            <span className="marquee-dot" style={{ background: 'var(--slate-300)' }} />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Platform Infinite Marquee Ticker ────────────────────────── */
function PlatformMarquee() {
  const platforms = [
    { icon: <InstagramIcon />, name: 'Instagram', color: '#E1306C', glow: 'rgba(225,48,108,0.15)' },
    { icon: <FacebookIcon />, name: 'Facebook', color: '#1877F2', glow: 'rgba(24,119,242,0.15)' },
    { icon: <YoutubeIcon />, name: 'YouTube', color: '#FF0000', glow: 'rgba(255,0,0,0.15)' },
    { icon: <WhatsappIcon />, name: 'WhatsApp', color: '#25D366', glow: 'rgba(37,211,102,0.15)' },
    { icon: <LinkedinIcon />, name: 'LinkedIn', color: '#0077B5', glow: 'rgba(0,119,181,0.15)' },
  ]
  const doublePlatforms = [...platforms, ...platforms, ...platforms, ...platforms]
  
  return (
    <div className="marquee-container" style={{ background: 'var(--slate-50)', borderBottom: '1px solid var(--slate-200)', padding: '1.25rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <span style={{ fontSize: '.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--slate-400)', flexShrink: 0 }}>
          Platforms:
        </span>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="marquee-scroll">
            {doublePlatforms.map((p, i) => (
              <div
                key={i}
                className="marquee-badge"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.25rem',
                  background: 'white',
                  border: '1px solid var(--slate-200)',
                  borderRadius: '9999px',
                  marginRight: '2rem',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = p.color;
                  e.currentTarget.style.color = p.color;
                  e.currentTarget.style.boxShadow = `0 4px 12px ${p.glow}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--slate-200)';
                  e.currentTarget.style.color = 'inherit';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>{p.icon}</span>
                <span style={{ fontWeight: 700, fontSize: '.86rem' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── High-Fidelity Phone Mockup ─────────────────────────────── */
function PhoneMockup() {
  return (
    <div style={{
      width: '290px',
      height: '570px',
      background: '#090F24',
      border: '12px solid #233156',
      borderRadius: '40px',
      position: 'relative',
      boxShadow: 'var(--shadow-xl), 0 0 50px rgba(42,169,242,.25)',
      overflow: 'hidden',
    }}>
      {/* Notch / Speaker */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '110px',
        height: '24px',
        background: '#233156',
        borderRadius: '0 0 15px 15px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ width: '40px', height: '4px', background: '#090F24', borderRadius: '2px' }} />
      </div>

      {/* Screen Frame */}
      <div style={{
        padding: '36px 12px 12px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#F8FAFC',
        color: '#0F172A',
        fontFamily: 'var(--font-body)',
      }}>
        {/* Mock Social Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #E2E8F0', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0B3FA0, #2AA9F2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '900',
              fontSize: '9px',
              letterSpacing: '-0.05em'
            }}>3HD</div>
            <div>
              <div style={{ fontSize: '10px', fontWeight: '800', lineHeight: 1, color: '#0F172A' }}>3hdmedia</div>
              <div style={{ fontSize: '8px', color: '#64748B', fontWeight: '600', marginTop: '1px' }}>Sponsored</div>
            </div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748B', cursor: 'pointer' }}>•••</div>
        </div>

        {/* Ad Mock Image/Graphic */}
        <div style={{
          width: '100%',
          height: '210px',
          background: 'linear-gradient(135deg, #0B3FA0 0%, #2AA9F2 100%)',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset 0 0 40px rgba(0,0,0,.25)',
        }}>
          {/* Decorative network grid overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.15) 1px, transparent 1px)', backgroundSize: '16px 16px', pointerEvents: 'none' }} />

          {/* Campaign graphics mockup */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: 'white', textAlign: 'center', padding: '15px', zIndex: 1 }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>🚀</div>
            <div style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.08em', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>3HD Media</div>
            <div style={{ fontSize: '8px', opacity: 0.9, marginTop: '3px', fontWeight: '600', letterSpacing: '0.04em' }}>SOCIAL ADVERTISING HUB</div>
          </motion.div>

          <div style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'rgba(0,0,0,.65)', color: 'white', fontSize: '8px', padding: '2px 6px', borderRadius: '4px', fontWeight: '700', backdropFilter: 'blur(2px)' }}>
            Live Preview
          </div>
        </div>

        {/* Mock Like / Share Action Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 4px 6px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontSize: '13px', cursor: 'pointer', transition: 'transform 0.2s' }} className="mock-feed-btn">❤️</span>
            <span style={{ fontSize: '13px', cursor: 'pointer', transition: 'transform 0.2s' }} className="mock-feed-btn">💬</span>
            <span style={{ fontSize: '13px', cursor: 'pointer', transition: 'transform 0.2s' }} className="mock-feed-btn">✈️</span>
          </div>
          <span style={{ fontSize: '13px', cursor: 'pointer' }}>🔖</span>
        </div>

        {/* High Conversion CTA Link */}
        <Link to="/contact" style={{
          background: 'linear-gradient(135deg, #0B3FA0, #1C72DC)',
          color: 'white',
          textAlign: 'center',
          padding: '9px',
          borderRadius: '8px',
          fontSize: '11px',
          fontWeight: '700',
          marginBottom: '8px',
          display: 'block',
          boxShadow: '0 4px 12px rgba(11,63,160,.2)',
          transition: 'transform 0.2s, background 0.2s',
          textDecoration: 'none',
        }} className="mock-cta-btn">
          Get in Touch
        </Link>

        {/* Ad Caption text */}
        <div style={{ fontSize: '9px', lineHeight: '1.4', padding: '0 4px', color: '#334155' }}>
          <strong>3hdmedia</strong> Reach millions of active users in India with our mobile video streaming, WiFi network, and social media advertising services! 🚀 #socialmedia #digitalads #roi
        </div>

        {/* Mock Comments Link */}
        <div style={{ fontSize: '8px', color: '#94A3B8', marginTop: '6px', padding: '0 4px', borderTop: '1px solid #F1F5F9', paddingTop: '6px' }}>
          View all 48 comments
        </div>
      </div>

      {/* Mock Home indicator bar */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100px',
        height: '4px',
        background: '#233156',
        borderRadius: '2px',
      }} />

      <style>{`
        .mock-feed-btn:hover { transform: scale(1.18); }
        .mock-cta-btn:hover { transform: translateY(-1px); background: #0B3FA0 !important; }
      `}</style>
    </div>
  )
}

/* ── Flag service card (for preview section) ─────────────────── */
interface FlagService { icon: React.ReactNode; title: string; desc: string; color: string }
function ServicePreviewCard({ icon, title, desc, color }: FlagService) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--white)',
        border: '1px solid var(--slate-200)',
        borderRadius: 'var(--radius-xl)',
        padding: '2.25rem 2rem',
        cursor: 'default',
        transition: 'box-shadow .25s, border-color .25s',
        position: 'relative', overflow: 'hidden',
      }}
      className="svc-card-hover"
    >
      <div style={{
        width: '54px', height: '54px', borderRadius: '14px',
        background: `${color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color, marginBottom: '1.25rem',
        boxShadow: `0 4px 12px ${color}22`,
      }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '.5rem' }}>{title}</h3>
      <p style={{ fontSize: '.875rem', color: 'var(--slate-500)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{desc}</p>
    </motion.div>
  )
}

const flagServices: FlagService[] = [
  { icon: <Share2 size={22} />,     title: 'Social Media',            desc: 'Targeted campaigns across Facebook, Instagram, LinkedIn & more — built to grow your brand and drive engagement.', color: 'var(--accent-magenta)' },
  { icon: <MonitorPlay size={22} />, title: 'Mobile Video Streaming', desc: 'High-impact video ads delivered directly to mobile audiences at scale across India.', color: 'var(--blue-500)' },
  { icon: <Wifi size={22} />,        title: 'WiFi & Internet Advertising', desc: 'Reach audiences through WiFi hotspot and internet-based ad networks for location-aware campaigns.', color: 'var(--accent-teal)' },
  { icon: <MapPin size={22} />,      title: 'Location Advertising',   desc: 'Hyper-local geo-targeted advertising — reach the right people in the right place at the right time.', color: 'var(--accent-coral)' },
]

/* ── Talent Program Teaser List ──────────────────────────────── */
const talentCards = [
  {
    icon: <Briefcase size={20} />,
    title: 'Careers at 3HD Media',
    desc: 'Join the pioneers in digital media. We have various openings across Sales, Marketing, IT, Servicing, and Journalism. Freshers welcome!',
    to: '/career',
    ctaText: 'View Openings',
  },
  {
    icon: <GraduationCap size={20} />,
    title: 'Internships & Live Projects',
    desc: 'Gain real-world industry experience. Live projects all over India for undergraduates, graduates, and post-graduates in multiple domains.',
    to: '/internships',
    ctaText: 'Apply for Internship',
  },
  {
    icon: <BookMarked size={20} />,
    title: 'Courses & Campus Placements',
    desc: 'Get certified with our Social Media programmes. We also provide final campus placement assistance for MBA students.',
    links: [
      { to: '/courses', label: 'Our Courses' },
      { to: '/placements', label: 'Campus Placements' }
    ]
  }
]

/* ── Main export ─────────────────────────────────────────────── */
export default function Home() {
  const mgmtRef    = useRef(null)
  const statsRef   = useRef(null)
  const mgmtInView = useInView(mgmtRef, { once: true, margin: '-80px' })
  useInView(statsRef, { once: true, margin: '-80px' })

  const floatingIcons = [
    { icon: <InstagramIcon />, color: '#E1306C', size: 48, top: '10%', left: '-50px', delay: 0 },
    { icon: <FacebookIcon />, color: '#1877F2', size: 42, top: '40%', right: '-45px', delay: 1 },
    { icon: <YoutubeIcon />, color: '#FF0000', size: 46, bottom: '15%', left: '-40px', delay: 0.5 },
    { icon: <WhatsappIcon />, color: '#25D366', size: 40, top: '70%', right: '-65px', delay: 1.5 },
    { icon: <LinkedinIcon />, color: '#0077B5', size: 44, top: '15%', right: '-80px', delay: 0.8 },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'var(--g-hero)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--nav-h)',
        overflow: 'hidden',
      }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,.055) 1px, transparent 1px)',
          backgroundSize: '30px 30px', pointerEvents: 'none',
        }} />

        {/* Background gradient blur orbs */}
        <motion.div className="hero-orb" animate={{ scale: [1, 1.12, 1], opacity: [.18, .26, .18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px', background: 'rgba(42,169,242,.22)' }} />
        <motion.div className="hero-orb" animate={{ scale: [1, 1.15, 1], opacity: [.08, .14, .08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '360px', height: '360px', bottom: '-60px', left: '-60px', background: 'rgba(232,115,95,.15)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}
            className="hero-grid">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Badge chip */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.12)',
                borderRadius: '999px',
                padding: '.4rem 1.15rem',
                fontSize: '.72rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,.85)',
                marginBottom: '1.75rem',
              }}>
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, .5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-teal)', display: 'block' }}
                />
                Mumbai's Digital Advertising Pioneers
              </div>

              {/* Headline */}
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 900, color: 'white',
                lineHeight: 1.1, letterSpacing: '-.03em',
                marginBottom: '1.5rem',
              }}>
                Social Media &{' '}
                <span className="text-gradient-blue" style={{ display: 'inline-block' }}>
                  Digital Advertising
                </span>{' '}
                That Gets You Noticed
              </h1>

              <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,.72)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '540px' }}>
                From mobile video streaming to WiFi, location, and social media advertising — 3HD Media powers brands across every digital touchpoint.
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.85rem', marginBottom: '3rem' }}>
                <Link to="/services" className="btn btn-white btn-lg">Explore Our Services</Link>
                <Link to="/contact"  className="btn btn-ghost-light btn-lg">Get in Touch</Link>
              </div>

              {/* Trust badges */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { icon: <TrendingUp size={16} />, label: '₹5,000 Cr+ India Digital Spend' },
                  { icon: <Globe size={16} />,      label: '11 Core Media Services' },
                  { icon: <Award size={16} />,      label: 'Pan-India Delivery' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '8px',
                      background: 'rgba(255,255,255,.07)',
                      border: '1px solid rgba(255,255,255,.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--blue-300)', flexShrink: 0,
                    }}>
                      {s.icon}
                    </div>
                    <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.65)' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column – CSS Phone Mockup & Floating Social Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              {/* Floating Social Icons */}
              {floatingIcons.map((fi, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -12, 12, 0],
                    x: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: fi.delay,
                  }}
                  style={{
                    position: 'absolute',
                    top: fi.top,
                    left: fi.left,
                    right: fi.right,
                    width: `${fi.size}px`,
                    height: `${fi.size}px`,
                    borderRadius: '50%',
                    background: 'white',
                    boxShadow: '0 8px 24px rgba(0,0,0,.15), 0 0 1px rgba(0,0,0,.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: fi.color,
                    zIndex: 3,
                    cursor: 'default',
                  }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                >
                  {fi.icon}
                </motion.div>
              ))}

              {/* Central Phone Mockup */}
              <PhoneMockup />
            </motion.div>

          </div>
        </div>

        <style>{`
          @media(max-width:900px){
            .hero-grid{ grid-template-columns:1fr!important; text-align:center; gap: 3rem !important; }
            .hero-grid>div:last-child{ transform: scale(0.9) !important; margin-top: 1.5rem; }
          }
        `}</style>
      </section>

      {/* ── PLATFORMS STRIP (INFINITE SCROLLING MARQUEE) ─────────── */}
      <PlatformMarquee />

      {/* ── SERVICE MARQUEE ──────────────────────────────────────── */}
      <Marquee />

      {/* ── SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="section">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.9rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', opacity: .6 }} />
              Our Core Services
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.85rem' }}>
              Advertising Solutions That Drive Real Results
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-500)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
              Our <strong style={{ color: 'var(--accent-coral)' }}>experienced</strong> and <strong style={{ color: 'var(--accent-teal)' }}>dedicated</strong> staff deliver digital media solutions designed to maximise your brand's reach and ROI.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
            {flagServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .08, duration: .5 }}
              >
                <ServicePreviewCard {...s} />
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              Explore Our Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <style>{`
          .svc-card-hover:hover{ box-shadow: var(--shadow-lg); border-color: rgba(11,63,160,.15)!important; }
        `}</style>
      </section>

      {/* ── MANAGEMENT TEAM ──────────────────────────────────────── */}
      <section className="section section--alt" ref={mgmtRef}>
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="mgmt-grid">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={mgmtInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .65 }}
            >
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', opacity: .6 }} />
                Leadership
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3.5vw,2.6rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.9rem' }}>
                Management Team
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Since the world is changing faster than we can imagine, the CLO (Chief Learning Officer) post has recently been created so that the CLO could impart knowledge to the Management Team whenever required.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
                Our leadership brings deep expertise in digital media, advertising technology, and professional education — guiding 3HD Media as one of India's foremost digital advertising and media companies.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
                <Link to="/services" className="btn btn-primary">Our Services</Link>
                <Link to="/contact"  className="btn btn-outline">Get in Touch</Link>
              </div>
            </motion.div>

            {/* Right Column – feature cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={mgmtInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .65, delay: .12 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}
            >
              {[
                { icon: <CheckCircle size={18} />, title: 'Expert Leadership Team',         sub: 'Specialists in digital media & ad-tech' },
                { icon: <TrendingUp size={18} />,  title: 'Data-Driven Ad Strategies',      sub: 'Performance-focused advertising campaigns' },
                { icon: <Zap size={18} />,         title: 'Continuous Innovation',           sub: 'CLO-led knowledge transfer & upskilling' },
                { icon: <Globe size={18} />,        title: 'Pan-India Network',               sub: 'Mumbai HQ, serving all of India' },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={mgmtInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: .2 + i * .08 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1.1rem 1.35rem',
                    background: 'var(--white)',
                    border: '1px solid var(--slate-200)',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'default',
                    transition: 'box-shadow .25s, border-color .25s',
                  }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: 'var(--shadow-blue)' }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '.975rem' }}>{f.title}</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--slate-500)', marginTop: '.1rem' }}>{f.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.mgmt-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── STATS DARK BAND ──────────────────────────────────────── */}
      <section style={{ background: 'var(--g-hero)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }} ref={statsRef}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(255,255,255,.08)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}
            className="stats-grid">
            {[
              { num: 5000, suffix: ' Cr+', label: 'India Digital Media Spend (₹)',  icon: <TrendingUp size={20} /> },
              { num: 11,   suffix: '+',    label: 'Core Digital Services',           icon: <MonitorPlay size={20} /> },
              { num: 7,    suffix: '',     label: 'Career Domains',                  icon: <Briefcase size={20} /> },
              { num: 9,    suffix: '+',    label: 'Internship Disciplines',          icon: <GraduationCap size={20} /> },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,.04)', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ color: 'var(--blue-300)', marginBottom: '.75rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, lineHeight: 1, marginBottom: '.4rem', background: 'var(--g-blue-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  <AnimatedNumber target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* ── TALENT & CAMPUS PROGRAMS (3-card layout) ──────────────── */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', opacity: .6 }} />
              Talent & Campus Programs
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.7rem' }}>
              Supporting the Next Generation of Digital Professionals
            </h2>
            <p style={{ fontSize: '.975rem', color: 'var(--slate-500)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.75 }}>
              Beyond our advertising services, 3HD Media runs internships, professional courses, and campus placement programmes to develop India's digital talent.
            </p>
          </div>

          <div className="grid-3" style={{ maxWidth: '1080px', margin: '0 auto' }}>
            {talentCards.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * .07 }}
                style={{ height: '100%' }}
              >
                <div
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--slate-200)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform .25s, box-shadow .25s, border-color .25s',
                  }}
                  className="talent-card-hover"
                >
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(11,63,160,.06), rgba(42,169,242,.12))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--blue-600)', marginBottom: '1.25rem', flexShrink: 0
                  }}>
                    {t.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--slate-900)', marginBottom: '.65rem' }}>
                    {t.title}
                  </h3>
                  <p style={{ fontSize: '.875rem', color: 'var(--slate-500)', lineHeight: 1.65, marginBottom: '1.75rem', flex: 1 }}>
                    {t.desc}
                  </p>

                  {t.to ? (
                    <Link to={t.to} className="btn btn-outline btn-sm" style={{ width: 'fit-content' }}>
                      {t.ctaText}
                    </Link>
                  ) : (
                    <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                      {t.links?.map(l => (
                        <Link key={l.to} to={l.to} className="btn btn-outline btn-sm">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .talent-card-hover:hover{ transform: translateY(-5px); box-shadow: var(--shadow-md); border-color: rgba(11,63,160,.15)!important; }
        `}</style>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontWeight: 900, color: 'white', marginBottom: '.75rem' }}>
              Ready to Grow Your Brand with 3HD Media?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.7)', marginBottom: '2.25rem', maxWidth: '500px', margin: '0 auto 2.25rem' }}>
              Whether you're a business seeking digital reach or a brand looking to dominate social media — we're ready to deliver results.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact"  className="btn btn-white btn-lg">Get in Touch</Link>
              <Link to="/services" className="btn btn-ghost-light btn-lg">Explore Our Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
