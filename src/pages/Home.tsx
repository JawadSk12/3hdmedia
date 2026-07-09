import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  MonitorPlay, Wifi, Globe, MapPin, Share2,
  ArrowRight, TrendingUp, Award, Zap,
  Briefcase, GraduationCap, BookMarked, Users,
  CheckCircle,
} from 'lucide-react'

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
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Dashboard illustration (advertising-themed) ─────────────── */
function DashIllustration() {
  const bars   = [45, 72, 58, 88, 63, 40, 78]
  const colors = [
    'rgba(96,165,250,.9)', 'rgba(239,68,68,.85)', 'rgba(96,165,250,.9)',
    'rgba(110,231,183,.85)', 'rgba(96,165,250,.9)', 'rgba(239,68,68,.7)',
    'rgba(96,165,250,.9)',
  ]
  return (
    <div className="glass-card" style={{ padding: '1.75rem', width: '100%', maxWidth: '420px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '.38rem' }}>
          {['#FF6B6B', '#FFD93D', '#6BCB77'].map(c => (
            <span key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{ flex: 1, height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,.12)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.75rem' }}>
        <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em' }}>Ad Performance</span>
        <span style={{ fontSize: '.75rem', color: 'rgba(96,165,250,.8)', fontWeight: 700 }}>+34% ↑ ROI</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '.55rem', height: '90px', marginBottom: '1.25rem' }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: .3 + i * .1, duration: .5, ease: [0.4, 0, 0.2, 1] }}
            style={{ flex: 1, height: `${h}%`, borderRadius: '4px 4px 0 0', background: colors[i], transformOrigin: 'bottom' }}
          />
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.65rem' }}>
        {[
          { num: '98%',  lbl: 'Reach' },
          { num: '24×',  lbl: 'ROI' },
          { num: '4.9★', lbl: 'Rating' },
        ].map(s => (
          <div key={s.lbl} style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '10px', padding: '.6rem .5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.45)', marginTop: '.2rem' }}>{s.lbl}</div>
          </div>
        ))}
      </div>
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
        padding: '2rem 1.75rem',
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
  { icon: <Share2 size={22} />,     title: 'Social Media',            desc: 'Targeted campaigns across Facebook, Instagram, LinkedIn & more — built to grow your brand and drive engagement.', color: '#DB2777' },
  { icon: <MonitorPlay size={22} />, title: 'Mobile Video Streaming', desc: 'High-impact video ads delivered directly to mobile audiences at scale across India.', color: '#2563EB' },
  { icon: <Wifi size={22} />,        title: 'WiFi & Internet Advertising', desc: 'Reach audiences through WiFi hotspot and internet-based ad networks for location-aware campaigns.', color: '#16A34A' },
  { icon: <MapPin size={22} />,      title: 'Location Advertising',   desc: 'Hyper-local geo-targeted advertising — reach the right people in the right place at the right time.', color: '#E11D48' },
]

/* ── Talent program teaser cards ─────────────────────────────── */
interface TalentCard { icon: React.ReactNode; title: string; desc: string; to: string }
function TalentTeaser({ icon, title, desc, to }: TalentCard) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <motion.div
        whileHover={{ y: -4 }}
        style={{
          background: 'var(--white)',
          border: '1px solid var(--slate-200)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.4rem 1.5rem',
          display: 'flex', gap: '1rem', alignItems: 'flex-start',
          transition: 'box-shadow .25s, border-color .25s',
          height: '100%',
        }}
        className="talent-card-hover"
      >
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px',
          background: 'linear-gradient(135deg, rgba(29,78,216,.07), rgba(96,165,250,.12))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--blue-500)', flexShrink: 0,
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--slate-900)', fontSize: '.975rem', marginBottom: '.3rem' }}>{title}</div>
          <div style={{ fontSize: '.82rem', color: 'var(--slate-500)', lineHeight: 1.6 }}>{desc}</div>
        </div>
      </motion.div>
    </Link>
  )
}

const talentCards: TalentCard[] = [
  { icon: <Briefcase size={18} />,      title: 'Career',      desc: 'Openings in Sales, Marketing, IT, Finance, Journalism & more. Freshers welcome.', to: '/career' },
  { icon: <GraduationCap size={18} />,  title: 'Internships', desc: 'Live projects across India for UG, PG & MBA students in multiple disciplines.',   to: '/internships' },
  { icon: <BookMarked size={18} />,     title: 'Courses',     desc: 'Part-time, full-time & weekend Social Media certification programmes.',             to: '/courses' },
  { icon: <Users size={18} />,          title: 'Placements',  desc: 'Dedicated team connecting MBA graduates with top corporates for campus drives.',    to: '/placements' },
]

/* ── Main export ─────────────────────────────────────────────── */
export default function Home() {
  const mgmtRef    = useRef(null)
  const statsRef   = useRef(null)
  const mgmtInView = useInView(mgmtRef, { once: true, margin: '-80px' })
  useInView(statsRef, { once: true, margin: '-80px' })

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
          backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px', pointerEvents: 'none',
        }} />

        {/* Orbs */}
        <motion.div className="hero-orb" animate={{ scale: [1, 1.15, 1], opacity: [.18, .28, .18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px', background: 'rgba(29,78,216,.2)' }} />
        <motion.div className="hero-orb" animate={{ scale: [1, 1.2, 1], opacity: [.08, .15, .08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '360px', height: '360px', bottom: '-60px', left: '-60px', background: 'rgba(239,68,68,.12)' }} />
        <motion.div className="hero-orb" animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ width: '280px', height: '280px', top: '30%', left: '40%', background: 'rgba(96,165,250,.07)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
            className="hero-grid">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.15)',
                borderRadius: '999px',
                padding: '.38rem 1.1rem',
                fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,.85)',
                marginBottom: '1.75rem',
              }}>
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [1, .5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#6EF0A8', display: 'block' }}
                />
                Mumbai's Digital Media Pioneers
              </div>

              {/* Headline */}
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                fontWeight: 900, color: 'white',
                lineHeight: 1.08, letterSpacing: '-.03em',
                marginBottom: '1.5rem',
              }}>
                Social Media &{' '}
                <span className="text-gradient-blue" style={{ display: 'inline-block' }}>
                  Digital Advertising
                </span>{' '}
                That Delivers
              </h1>

              <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '520px' }}>
                From mobile video streaming to location-based and social media advertising — 3HD Media powers brands with data-driven digital media solutions.
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginBottom: '3rem' }}>
                <Link to="/services" className="btn btn-white btn-lg">Our Services</Link>
                <Link to="/contact"  className="btn btn-ghost-light btn-lg">Get a Quote</Link>
              </div>

              {/* Trust signals */}
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { icon: <TrendingUp size={16} />, label: '₹5,000 Cr+ Digital Spend' },
                  { icon: <Globe size={16} />,      label: '11+ Core Services' },
                  { icon: <Award size={16} />,      label: 'Pan-India Reach' },
                ].map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '8px',
                      background: 'rgba(255,255,255,.1)',
                      border: '1px solid rgba(255,255,255,.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,.75)', flexShrink: 0,
                    }}>
                      {s.icon}
                    </div>
                    <span style={{ fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.65)' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right – illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            >
              {/* Floating chips */}
              {[
                { text: '📈 +34% Campaign ROI',     style: { top: '-20px', right: '-10px' },  delay: 0 },
                { text: '📍 Location-Based Ads',    style: { bottom: '20px', left: '-20px' }, delay: 1.5 },
                { text: '📱 Mobile Video Reach',    style: { top: '45%', right: '-30px' },    delay: .8 },
              ].map(chip => (
                <motion.div
                  key={chip.text}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
                  style={{
                    position: 'absolute', ...chip.style,
                    background: 'rgba(255,255,255,.1)',
                    border: '1px solid rgba(255,255,255,.2)',
                    borderRadius: '12px',
                    padding: '.55rem 1rem',
                    fontSize: '.78rem', fontWeight: 600, color: 'white',
                    backdropFilter: 'blur(10px)',
                    zIndex: 2, whiteSpace: 'nowrap',
                  }}
                >
                  {chip.text}
                </motion.div>
              ))}
              <DashIllustration />
            </motion.div>

          </div>
        </div>

        <style>{`
          @media(max-width:900px){
            .hero-grid{ grid-template-columns:1fr!important; text-align:center; }
            .hero-grid>div:last-child{ display:none; }
          }
        `}</style>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <Marquee />

      {/* ── SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.9rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', opacity: .6 }} />
              Our Core Services
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.85rem' }}>
              Advertising Solutions That Drive Real Results
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-500)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
              Our <strong style={{ color: 'var(--slate-700)' }}>experienced</strong> and <strong style={{ color: 'var(--slate-700)' }}>dedicated</strong> staff deliver digital media solutions designed to maximise your brand's reach and ROI.
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
              View All 11 Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <style>{`
          .svc-card-hover:hover{ box-shadow: var(--shadow-lg); border-color: rgba(29,78,216,.18)!important; }
        `}</style>
      </section>

      {/* ── MANAGEMENT TEAM ──────────────────────────────────────── */}
      <section className="section section--alt" ref={mgmtRef}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="mgmt-grid">

            {/* Left */}
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

            {/* Right – feature cards */}
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
                <div style={{ color: 'var(--blue-200)', marginBottom: '.75rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
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

      {/* ── TALENT & CAMPUS PROGRAMS (secondary) ─────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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

          <div className="grid-4">
            {talentCards.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * .07 }}
                style={{ height: '100%' }}
              >
                <TalentTeaser {...t} />
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .talent-card-hover:hover{ box-shadow: var(--shadow-md); border-color: rgba(29,78,216,.15)!important; }
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
              <Link to="/contact"  className="btn btn-white btn-lg">Request a Proposal</Link>
              <Link to="/services" className="btn btn-ghost-light btn-lg">View Our Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
