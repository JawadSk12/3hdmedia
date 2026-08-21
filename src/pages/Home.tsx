import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react'
import { services } from '../data/services'

/* ── Rotating headline words ───────────────────────────────────── */
const ROTATING_WORDS = [
  { text: 'Social Media',     color: '#E1306C' },
  { text: 'Websites',        color: '#2563EB' },
  { text: 'eBooks',          color: '#7C3AED' },
  { text: 'Podcasts',        color: '#14B8A6' },
  { text: 'Email Marketing', color: '#F97316' },
  { text: 'Mobile Apps',     color: '#EC4899' },
]

function RotatingWord() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % ROTATING_WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])
  const w = ROTATING_WORDS[idx]
  return (
    <span style={{ display: 'inline-block', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          style={{
            display: 'inline-block',
            color: w.color,
            fontStyle: 'italic',
          }}
        >
          {w.text}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ── Platform badge ticker ─────────────────────────────────────── */
const platforms = [
  { name: 'Instagram', icon: '📸', color: '#E1306C' },
  { name: 'Facebook',  icon: '👤', color: '#1877F2' },
  { name: 'YouTube',   icon: '▶️', color: '#FF0000' },
  { name: 'LinkedIn',  icon: '💼', color: '#0077B5' },
  { name: 'WhatsApp',  icon: '💬', color: '#25D366' },
  { name: 'Spotify',   icon: '🎵', color: '#1DB954' },
  { name: 'Apple',     icon: '🎙️', color: '#000000' },
  { name: 'WordPress', icon: '📝', color: '#21759B' },
  { name: 'Shopify',   icon: '🛒', color: '#96BF48' },
  { name: 'iOS',       icon: '📱', color: '#007AFF' },
  { name: 'Android',   icon: '🤖', color: '#3DDC84' },
  { name: 'Mailchimp', icon: '✉️', color: '#FFE01B' },
]

/* ── Process steps ─────────────────────────────────────────────── */
const processSteps = [
  {
    num: '01', emoji: '🔍', title: 'Discover',
    desc: 'We learn about your brand, audience, goals and the digital landscape you operate in.',
  },
  {
    num: '02', emoji: '📐', title: 'Strategize',
    desc: 'We build a content and media strategy aligned with your objectives and chosen platforms.',
  },
  {
    num: '03', emoji: '🎨', title: 'Create',
    desc: 'Our team produces the content, design and digital assets — built for your audience.',
  },
  {
    num: '04', emoji: '🚀', title: 'Publish',
    desc: 'We launch and distribute across all relevant platforms, on schedule and on brand.',
  },
  {
    num: '05', emoji: '📊', title: 'Grow',
    desc: 'We track, optimise and improve — growing your digital presence continuously.',
  },
]

/* ── Why 3HD pillars ───────────────────────────────────────────── */
const pillars = [
  { emoji: '🎯', title: 'Full-Service Studio',   desc: 'Social media, websites, apps, podcasts, ebooks, email — everything you need in one place.' },
  { emoji: '✨', title: 'Content That Works',     desc: 'We create digital media that captures attention, communicates clearly and drives real results.' },
  { emoji: '⚡', title: 'Fast Turnaround',        desc: 'Efficient workflows and dedicated teams mean your projects get done without unnecessary delays.' },
  { emoji: '📈', title: 'Growth Focused',         desc: 'Everything we create is built with one purpose — growing your digital audience and impact.' },
  { emoji: '🤝', title: 'Freshers Welcome',       desc: 'We actively train the next generation through internships, courses and campus placements.' },
]

/* ── Floating media format cards (hero visual) ─────────────────── */
const floatingCards = [
  { emoji: '📱', label: 'Social Post',   top: '8%',  left: '0%',   delay: 0,   color: '#E1306C' },
  { emoji: '🌐', label: 'Website',       top: '28%', right: '0%',  delay: 0.6, color: '#2563EB' },
  { emoji: '🎙️', label: 'Podcast',       top: '55%', left: '2%',   delay: 1.0, color: '#14B8A6' },
  { emoji: '📖', label: 'eBook',         top: '72%', right: '2%',  delay: 0.3, color: '#7C3AED' },
  { emoji: '✉️', label: 'Email',         top: '42%', left: '-4%',  delay: 1.4, color: '#F97316' },
  { emoji: '📲', label: 'Mobile App',    top: '15%', right: '-2%', delay: 0.8, color: '#EC4899' },
]

/* ── Stats ─────────────────────────────────────────────────────── */
const stats = [
  { val: '6+',       label: 'Digital Media Services' },
  { val: 'Pan-India', label: 'Client Reach' },
  { val: '48hr',     label: 'Response Time' },
  { val: '100%',     label: 'Digital-First Approach' },
]

/* ── Sample work items ─────────────────────────────────────────── */
const sampleWork = [
  {
    emoji: '📱', title: 'Social Media Campaign',
    tag: 'Social Media', gradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 100%)',
    desc: 'Monthly social media management with original content, reels, stories and paid promotion.',
  },
  {
    emoji: '🌐', title: 'Business Website',
    tag: 'Web Design', gradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    desc: 'Custom website design and development — responsive, fast and SEO-optimised.',
  },
  {
    emoji: '🎙️', title: 'Brand Podcast Series',
    tag: 'Podcast', gradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)',
    desc: 'End-to-end podcast production: recording, editing, artwork and multi-platform distribution.',
  },
  {
    emoji: '📲', title: 'Mobile Application',
    tag: 'Mobile App', gradient: 'linear-gradient(135deg, #DB2777 0%, #F472B6 100%)',
    desc: 'iOS and Android app designed for a seamless, intuitive user experience.',
  },
]

/* ══════════════════════════════════════════════════════════════════
   MAIN HOME PAGE
   ══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const doublePlatforms = [...platforms, ...platforms, ...platforms]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 01 — HERO
          ═══════════════════════════════════════════════════════════ */}
      <section
        style={{
          minHeight: '100vh',
          background: 'var(--g-hero)',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--nav-h)',
          overflow: 'hidden',
        }}
        aria-label="Hero"
      >
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.15, 1], opacity: [0.20, 0.30, 0.20] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '600px', height: '600px', top: '-160px', right: '-120px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.20, 0.12] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '400px', height: '400px', bottom: '-100px', left: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.10, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{ width: '300px', height: '300px', bottom: '15%', right: '15%', background: 'rgba(225,48,108,0.12)' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginBottom: '1.75rem' }}>
                <span className="eyebrow eyebrow-dark">
                  <span className="dot-pulse" />
                  Full-Service Digital Media Studio · Mumbai
                </span>
              </motion.div>

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '0.6rem',
              }}>
                We Create
              </h1>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '0.6rem',
                color: 'white',
              }}>
                <RotatingWord />
              </h1>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                marginBottom: '1.75rem',
              }}>
                For Your Brand.
              </h1>

              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.80,
                marginBottom: '2.75rem',
                maxWidth: '530px',
              }}>
                3HD Media is a full-service digital media studio — we create social media content, websites, apps, podcasts, ebooks, email marketing and more. Your complete digital partner, all under one roof.
              </p>

              {/* Service quick pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                {services.map(s => (
                  <span
                    key={s.id}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.4rem 0.95rem', borderRadius: '999px',
                      fontSize: '0.79rem', fontWeight: 700,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.80)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {s.emoji} {s.title}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
                <Link to="/services" className="btn btn-primary btn-lg btn-arrow">
                  Explore Services <ArrowRight size={18} className="arrow-icon" />
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">
                  Get a Quote
                </Link>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {stats.map(s => (
                  <div key={s.label} style={{ borderLeft: '2px solid rgba(255,255,255,0.12)', paddingLeft: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.48)', marginTop: '0.3rem', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Floating cards visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              style={{ position: 'relative', height: '540px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="hero-visual"
            >
              {/* Central hub */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '160px', height: '160px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.25) 0%, rgba(124,58,237,0.25) 100%)',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 60px rgba(37,99,235,0.25), 0 0 120px rgba(124,58,237,0.12)',
                  zIndex: 2,
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, color: 'white', letterSpacing: '-0.04em' }}>3HD</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: '0.25rem' }}>MEDIA</div>
              </motion.div>

              {/* Floating service cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -14, 10, 0], x: [0, 6, -6, 0] }}
                  transition={{ duration: 6 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
                  style={{
                    position: 'absolute',
                    top: card.top,
                    left: card.left as string | undefined,
                    right: card.right as string | undefined,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    padding: '0.85rem 1.15rem',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.24)',
                    cursor: 'default',
                    zIndex: 3,
                    minWidth: '130px',
                  }}
                  whileHover={{ scale: 1.06 }}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: `${card.color}22`,
                    border: `1px solid ${card.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', flexShrink: 0,
                  }}>
                    {card.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{card.label}</div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.2rem', fontWeight: 600 }}>3HD Media</div>
                  </div>
                </motion.div>
              ))}

              {/* Connecting lines SVG */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.15 }} xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" r="140" fill="none" stroke="white" strokeWidth="1" strokeDasharray="6 8" />
                <circle cx="50%" cy="50%" r="220" fill="none" stroke="white" strokeWidth="0.75" strokeDasharray="4 10" />
              </svg>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PLATFORM TICKER
          ═══════════════════════════════════════════════════════════ */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--slate-100)', padding: '1.1rem 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '1.5rem', animation: 'scroll-left 24s linear infinite', width: 'max-content' }}>
          {doublePlatforms.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 1.2rem', borderRadius: '999px',
              background: 'var(--slate-50)', border: '1px solid var(--slate-200)',
              fontSize: '0.82rem', fontWeight: 700, color: 'var(--slate-600)',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              <span style={{ fontSize: '0.95rem' }}>{p.icon}</span>
              {p.name}
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll-left{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}`}</style>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 02 — WHAT WE DO (Services)
          ═══════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div className="section-heading">
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>
              <span className="dot-pulse" /> What We Do
            </span>
            <h2>Everything Your Brand Needs,<br />In Digital Media.</h2>
            <p>We are a full-service digital media studio — creating every kind of digital content, from social media posts to mobile apps. One studio. Infinite possibilities.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '24px', padding: '2.25rem 2rem',
                  transition: 'all 0.32s ease', cursor: 'default', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-7px)'
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.05)'
                  e.currentTarget.style.borderColor = service.color + '30'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                {/* Top gradient strip */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: service.gradient, opacity: 0.7,
                }} />

                {/* Icon */}
                <div style={{
                  width: '60px', height: '60px', borderRadius: '18px',
                  background: service.colorBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.35rem', fontSize: '1.75rem',
                  boxShadow: `0 4px 16px ${service.colorBg}`,
                }}>
                  {service.emoji}
                </div>

                {/* Number */}
                <div style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', color: 'var(--slate-300)', marginBottom: '0.55rem', textTransform: 'uppercase' }}>
                  {service.number}
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.65rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', lineHeight: 1.70, marginBottom: '1.5rem' }}>
                  {service.shortDesc}
                </p>

                {/* Deliverables */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {service.deliverables.map(d => (
                    <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.79rem', color: 'var(--slate-500)', fontWeight: 600 }}>
                      <CheckCircle size={12} style={{ color: service.color, flexShrink: 0 }} />
                      {d}
                    </div>
                  ))}
                </div>

                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.84rem', fontWeight: 700, color: service.color,
                  transition: 'gap 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary btn-lg btn-arrow">
              View All Services <ArrowRight size={18} className="arrow-icon" />
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:1024px){.services-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:640px){.services-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 03 — PROCESS (dark)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.14, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{ width: '400px', height: '400px', bottom: '-100px', left: '-80px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading section-heading--dark" style={{ marginBottom: '4.5rem' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>How We Work</span>
            <h2 style={{ color: 'white' }}>From Brief to Live.<br />Here's How We Do It.</h2>
            <p>Our simple five-step process takes your digital media from strategy to results — efficiently and professionally.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }} className="process-grid">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.10, duration: 0.5 }}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'center',
                  transition: 'background 0.3s, transform 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Number badge */}
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.72rem', fontWeight: 900, color: 'white', fontFamily: 'var(--font-display)',
                  boxShadow: 'var(--shadow-blue)',
                }}>
                  {i + 1}
                </div>

                <div style={{ fontSize: '2.2rem', marginBottom: '1rem', marginTop: '0.5rem' }}>{step.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'white', marginBottom: '0.6rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.845rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.process-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:540px){.process-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 04 — WHY 3HD
          ═══════════════════════════════════════════════════════════ */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-purple" style={{ marginBottom: '1rem' }}>Why 3HD Media</span>
            <h2>Why Brands Choose Us.</h2>
          </div>

          <div className="grid-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'center',
                  transition: 'all 0.28s ease', cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{p.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.6rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.845rem', color: 'var(--slate-500)', lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 05 — SAMPLE WORK
          ═══════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>What We Deliver</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.75rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em' }}>
                Digital Media Across Every Format.
              </h2>
            </div>
            <Link to="/services" className="btn btn-outline btn-arrow">
              All Services <ArrowRight size={15} className="arrow-icon" />
            </Link>
          </div>

          <div className="grid-4">
            {sampleWork.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.09 }}
              >
                <div style={{
                  borderRadius: '20px', overflow: 'hidden',
                  background: item.gradient,
                  position: 'relative',
                  aspectRatio: '4/3',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.18)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  {/* Large emoji center */}
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
                    {item.emoji}
                  </div>
                  {/* Bottom overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem',
                  }}>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)',
                      padding: '0.2rem 0.6rem', borderRadius: '6px', backdropFilter: 'blur(8px)',
                      display: 'inline-block', marginBottom: '0.5rem',
                    }}>
                      {item.tag}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'white', lineHeight: 1.25 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.3rem', lineHeight: 1.50 }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 06 — LEARNING / INTERNSHIPS TEASER
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.20, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-80px', left: '-80px', background: 'rgba(20,184,166,0.15)' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.14, 1], opacity: [0.10, 0.16, 0.10] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', right: '-60px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="learning-grid">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>
                <span className="dot-pulse" />
                Internships, Courses & Placements
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '1.25rem', lineHeight: 1.12 }}>
                Learn Digital Media.<br />
                <span className="text-gradient-brand">With the Experts.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.82, marginBottom: '2rem' }}>
                Beyond our client services, we run internship programmes, social media & digital marketing courses, and campus placement drives across India. Freshers welcome across all domains.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { emoji: '🎓', label: 'Internship Programme', sub: 'Live digital media projects — work from anywhere' },
                  { emoji: '📚', label: 'Digital Media Courses', sub: 'Social media, email marketing, content & more' },
                  { emoji: '🏫', label: 'Campus Placements',     sub: 'On-campus drives for colleges across India' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.09 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '14px', padding: '1rem 1.25rem',
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: '0.935rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.815rem', color: 'rgba(255,255,255,0.50)', marginTop: '0.15rem' }}>{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/learning" className="btn btn-primary btn-lg btn-arrow">
                  Explore Learning <ArrowRight size={18} className="arrow-icon" />
                </Link>
                <Link to="/careers" className="btn btn-ghost-light btn-lg">
                  Join the Team
                </Link>
              </div>
            </motion.div>

            {/* Right: highlight cards */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { emoji: '🌐', title: 'Social Media',       tag: 'Course', color: '#E1306C' },
                  { emoji: '📧', title: 'Email Marketing',    tag: 'Course', color: '#F97316' },
                  { emoji: '🎙️', title: 'Podcast Production', tag: 'Course', color: '#14B8A6' },
                  { emoji: '📲', title: 'Mobile App Dev',     tag: 'Internship', color: '#7C3AED' },
                  { emoji: '✍️', title: 'Blog & Content',     tag: 'Internship', color: '#2563EB' },
                  { emoji: '🎨', title: 'Web Design',         tag: 'Internship', color: '#EC4899' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    style={{
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px', padding: '1.35rem 1.25rem',
                      transition: 'background 0.25s, transform 0.25s',
                    }}
                    whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <div style={{ fontSize: '1.6rem', marginBottom: '0.65rem' }}>{item.emoji}</div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: '0.88rem', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: item.color, background: `${item.color}15`,
                      padding: '0.2rem 0.5rem', borderRadius: '5px', display: 'inline-block',
                    }}>
                      {item.tag}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.learning-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 07 — ABOUT SNIPPET
          ═══════════════════════════════════════════════════════════ */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-snap-grid">

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> About 3HD Media
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.65rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.12 }}>
                Your Complete Digital Media Partner.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1.02rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                3HD Media is a full-service digital media studio based in Prabhadevi, Mumbai. We create every kind of digital content — from Instagram posts and websites to podcasts, ebooks, email campaigns and mobile apps.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2.5rem' }}>
                Our team of content creators, designers, developers and strategists work together to help brands establish a powerful, professional digital presence — across every platform and every format.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary btn-arrow">
                  Our Story <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { emoji: '🎨', title: 'Content Studio',     desc: 'Creative team for every format' },
                  { emoji: '⚡', title: 'Fast Delivery',       desc: 'Efficient workflows and quick turnaround' },
                  { emoji: '📊', title: 'Results Focused',    desc: 'Content built to drive growth' },
                  { emoji: '🏫', title: 'Learning Hub',       desc: 'Internships, courses and placements' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 + i * 0.07 }}
                    style={{
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      borderRadius: '20px', padding: '1.75rem',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.16)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
                  >
                    <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.35rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--slate-500)', lineHeight: 1.55 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.about-snap-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 08 — CTA BANNER
          ═══════════════════════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🚀</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Level Up Your<br />Digital Presence?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.75rem', maxWidth: '520px', margin: '0 auto 2.75rem', lineHeight: 1.78 }}>
              Tell us about your brand. We'll create the digital media content and strategy that gets you noticed.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-xl btn-arrow">
                Start a Project <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/services" className="btn btn-ghost-light btn-xl">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;text-align:center;gap:3rem!important;}
          .hero-visual{display:none!important;}
        }
      `}</style>
    </motion.div>
  )
}
