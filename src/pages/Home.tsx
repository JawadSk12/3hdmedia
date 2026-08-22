import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, CheckCircle, TrendingUp, Target, Layers, Zap } from 'lucide-react'

/* ── Rotating headline phrases ─────────────────────────────────── */
const ROTATING_PHRASES = [
  { text: 'Digital Strategy',     color: '#2563EB' },
  { text: 'Social Media',         color: '#E1306C' },
  { text: 'Content & Creative',   color: '#7C3AED' },
  { text: 'Digital Campaigns',    color: '#14B8A6' },
  { text: 'Performance Marketing',color: '#F97316' },
  { text: 'Mobile & Web',         color: '#EC4899' },
]

function RotatingPhrase() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % ROTATING_PHRASES.length), 2400)
    return () => clearInterval(t)
  }, [])
  const p = ROTATING_PHRASES[idx]
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={idx}
        initial={{ y: 44, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -44, opacity: 0 }}
        transition={{ duration: 0.30, ease: [0.4, 0, 0.2, 1] }}
        style={{ display: 'inline-block', color: p.color, fontStyle: 'italic' }}
      >
        {p.text}
      </motion.span>
    </AnimatePresence>
  )
}

/* ── Platform ticker ───────────────────────────────────────────── */
const platforms = [
  'Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'WhatsApp', 'Spotify',
  'Apple Podcasts', 'Google', 'Mailchimp', 'iOS App Store', 'Google Play', 'WordPress',
  'Shopify', 'Meta Ads', 'Google Ads', 'Canva', 'Adobe',
]

/* ── Agency pillars ────────────────────────────────────────────── */
const pillars = [
  {
    icon: <Target size={22} />,
    title: 'Strategy First',
    desc: 'Every campaign starts with a clear strategy — audience, platform, objective and KPIs — before a single pixel is produced.',
    color: '#2563EB',
  },
  {
    icon: <Layers size={22} />,
    title: 'Full-Service',
    desc: 'Social, web, content, audio, email, apps — we handle every channel and format in-house, so your brand stays consistent everywhere.',
    color: '#7C3AED',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Performance Driven',
    desc: 'We optimise for outcomes — reach, engagement, leads and conversions — not just creative output.',
    color: '#14B8A6',
  },
  {
    icon: <Zap size={22} />,
    title: 'Agile Delivery',
    desc: 'Fast turnaround, direct communication, no unnecessary layers. You work with specialists, not account managers.',
    color: '#F97316',
  },
]

/* ── Process steps ─────────────────────────────────────────────── */
const process = [
  { num: '01', title: 'Discovery & Brief',   desc: 'We learn your brand, audience, competition and goals inside-out before recommending anything.' },
  { num: '02', title: 'Strategy & Planning', desc: 'We define the right channels, formats, messaging and campaign structure for your objectives.' },
  { num: '03', title: 'Creative Production', desc: 'Our in-house team creates the content, design and digital assets — built for each platform.' },
  { num: '04', title: 'Launch & Distribute', desc: 'We publish, run and manage campaigns across all relevant platforms on schedule and on brand.' },
  { num: '05', title: 'Optimise & Report',   desc: 'We track results, report on KPIs and continuously improve performance.' },
]

/* ── What we handle (agency services grid) ─────────────────────── */
const agencyServices = [
  { emoji: '📱', title: 'Social Media Management',    desc: 'Strategy, content creation, community management and paid campaigns across all major platforms.', color: '#E1306C' },
  { emoji: '🌐', title: 'Website & Digital Presence', desc: 'Fast, SEO-optimised websites, landing pages and digital experiences that convert.', color: '#2563EB' },
  { emoji: '🎙️', title: 'Content & Audio Production', desc: 'Branded podcasts, audio content, streaming distribution and editorial content across formats.', color: '#14B8A6' },
  { emoji: '📧', title: 'Email Marketing & Blogs',    desc: 'Campaign strategy, email design, automation sequences and SEO-driven blog content.', color: '#F97316' },
  { emoji: '📖', title: 'Digital Publications',       desc: 'eBooks, whitepapers, industry guides and interactive digital content for authority and lead generation.', color: '#7C3AED' },
  { emoji: '📲', title: 'Mobile App Development',     desc: 'UX design and development for iOS and Android — from concept to App Store launch.', color: '#EC4899' },
]

/* ══════════════════════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const doubled = [...platforms, ...platforms, ...platforms]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ═══════════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Hero"
        style={{
          minHeight: '100vh',
          background: 'var(--g-hero)',
          position: 'relative',
          display: 'flex', alignItems: 'center',
          paddingTop: 'var(--nav-h)',
          overflow: 'hidden',
        }}
      >
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.16, 1], opacity: [0.20, 0.30, 0.20] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '700px', height: '700px', top: '-200px', right: '-160px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '450px', height: '450px', bottom: '-100px', left: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.10, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{ width: '300px', height: '300px', bottom: '20%', right: '18%', background: 'rgba(20,184,166,0.12)' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem 4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

            {/* ── Copy ── */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, ease: [0.4,0,0.2,1] }}>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginBottom: '1.75rem' }}>
                <span className="eyebrow eyebrow-dark">
                  <span className="dot-pulse" />
                  Digital Media Agency · Mumbai, India
                </span>
              </motion.div>

              {/* Headline */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.04,
                letterSpacing: '-0.038em',
                marginBottom: '1.75rem',
              }}>
                <div>We Drive</div>
                <div style={{ overflow: 'hidden', height: 'clamp(3rem, 6vw, 5.2rem)', display: 'flex', alignItems: 'center' }}>
                  <RotatingPhrase />
                </div>
                <div>For Your Brand.</div>
              </div>

              <p style={{
                fontSize: '1.1rem', color: 'rgba(255,255,255,0.68)',
                lineHeight: 1.80, marginBottom: '2.5rem', maxWidth: '540px',
              }}>
                3HD Media is a full-service digital media agency based in Mumbai. We plan, create and execute digital strategy, social media, content, email marketing, websites and mobile apps — everything your brand needs to dominate online.
              </p>

              {/* Key capabilities as tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.75rem' }}>
                {[
                  '📊 Digital Strategy',
                  '📱 Social Media',
                  '🎨 Content & Creative',
                  '🌐 Web & SEO',
                  '📧 Email Marketing',
                  '🎙️ Podcasts & Audio',
                  '📖 eBooks',
                  '📲 Mobile Apps',
                ].map(tag => (
                  <span key={tag} style={{
                    padding: '0.38rem 0.9rem', borderRadius: '999px',
                    fontSize: '0.78rem', fontWeight: 700,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.78)',
                    backdropFilter: 'blur(8px)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
                <Link to="/services" className="btn btn-primary btn-lg btn-arrow">
                  Our Services <ArrowRight size={18} className="arrow-icon" />
                </Link>
                <Link to="/contact" className="btn btn-outline-white btn-lg">
                  Get a Proposal
                </Link>
              </div>

              {/* Trust strip */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {[
                  { val: 'Full-Service', label: 'Digital Agency' },
                  { val: 'Pan-India',    label: 'Client Reach' },
                  { val: '48hr',         label: 'Response Time' },
                  { val: '6+',           label: 'Digital Channels' },
                ].map(s => (
                  <div key={s.label} style={{ borderLeft: '2px solid rgba(255,255,255,0.12)', paddingLeft: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.3rem', fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Visual: Agency metrics card cluster ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.22 }}
              style={{ position: 'relative', height: '520px' }}
              className="hero-visual"
            >
              {/* Central card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1.5px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  padding: '1.75rem',
                  textAlign: 'center',
                  boxShadow: '0 0 80px rgba(37,99,235,0.20)',
                  zIndex: 3,
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 900, color: 'white', lineHeight: 1, letterSpacing: '-0.04em' }}>3HD</div>
                <div style={{ fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginTop: '0.35rem' }}>MEDIA</div>
                <div style={{ marginTop: '0.85rem', fontSize: '0.68rem', fontWeight: 700, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>Digital Media Agency</div>
              </motion.div>

              {/* Floating metric cards */}
              {[
                { title: 'Social Media',    sub: 'Strategy & Content',  emoji: '📱', color: '#E1306C', top: '4%',  left: '-4%',  delay: 0    },
                { title: 'Websites',        sub: 'Design & Dev',        emoji: '🌐', color: '#2563EB', top: '8%',  right: '-2%', delay: 0.5  },
                { title: 'Email Campaigns', sub: 'Marketing Automation', emoji: '✉️', color: '#F97316', top: '42%', left: '-8%', delay: 1.0  },
                { title: 'Podcasts',        sub: 'Audio Production',    emoji: '🎙️', color: '#14B8A6', top: '40%', right: '-6%', delay: 0.7  },
                { title: 'eBooks',          sub: 'Digital Publications', emoji: '📖', color: '#7C3AED', top: '72%', left: '-2%', delay: 1.3  },
                { title: 'Mobile Apps',     sub: 'iOS & Android',       emoji: '📲', color: '#EC4899', top: '70%', right: '-4%', delay: 0.3  },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -12, 8, 0], x: [0, 5, -5, 0] }}
                  transition={{ duration: 6 + i * 0.8, repeat: Infinity, ease: 'easeInOut', delay: card.delay }}
                  style={{
                    position: 'absolute',
                    top: card.top,
                    left: (card as any).left,
                    right: (card as any).right,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '16px',
                    padding: '0.85rem 1.1rem',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    minWidth: '155px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
                    zIndex: 2,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{
                    width: '34px', height: '34px', borderRadius: '10px',
                    background: `${card.color}20`, border: `1px solid ${card.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>{card.emoji}</div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{card.title}</div>
                    <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.42)', marginTop: '0.18rem', fontWeight: 600 }}>{card.sub}</div>
                  </div>
                </motion.div>
              ))}

              {/* Dashed orbit rings */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.12 }}>
                <circle cx="50%" cy="50%" r="130" fill="none" stroke="white" strokeWidth="1" strokeDasharray="5 9" />
                <circle cx="50%" cy="50%" r="210" fill="none" stroke="white" strokeWidth="0.75" strokeDasharray="3 12" />
              </svg>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Platform ticker */}
      <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--slate-100)', padding: '1rem 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '1.25rem', animation: 'scroll-left 28s linear infinite', width: 'max-content' }}>
          {doubled.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.45rem',
              padding: '0.4rem 1rem', borderRadius: '999px',
              background: 'var(--slate-50)', border: '1px solid var(--slate-200)',
              fontSize: '0.80rem', fontWeight: 700, color: 'var(--slate-600)',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              {p}
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll-left{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}}`}</style>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION — WHAT WE DO (Agency services)
          ═══════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div className="section-heading">
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>
              <span className="dot-pulse" /> Our Services
            </span>
            <h2>Full-Service Digital Media.<br />All Channels. All Formats.</h2>
            <p>From digital strategy and social media to websites, podcasts, email campaigns and mobile apps — we manage every aspect of your brand's digital presence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="services-grid">
            {agencyServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '22px', padding: '2.25rem 2rem',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.30s ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-7px)'
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.09)'
                  e.currentTarget.style.borderColor = svc.color + '30'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${svc.color}00, ${svc.color}, ${svc.color}00)` }} />
                <div style={{ fontSize: '2rem', marginBottom: '1.1rem' }}>{svc.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.6rem' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', lineHeight: 1.70, marginBottom: '1.25rem' }}>
                  {svc.desc}
                </p>
                <Link to="/services" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.83rem', fontWeight: 700, color: svc.color,
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
        <style>{`
          @media(max-width:1024px){.services-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:640px){.services-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION — WHY 3HD (dark)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-100px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.14, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{ width: '400px', height: '400px', bottom: '-100px', left: '-80px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading section-heading--dark" style={{ marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>Why 3HD Media</span>
            <h2 style={{ color: 'white' }}>A Digital Media Agency<br />Built Differently.</h2>
            <p>We combine the strategic thinking of a large agency with the speed, directness and craft of a specialist team.</p>
          </div>

          <div className="grid-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '22px', padding: '2.25rem 1.75rem',
                  transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = p.color + '30' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: p.color + '15', border: `1px solid ${p.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: p.color, marginBottom: '1.25rem',
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'white', marginBottom: '0.6rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.865rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.70 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION — HOW WE WORK
          ═══════════════════════════════════════════════════════════ */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" style={{ marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>How We Work</span>
            <h2>From Strategy to Results.<br />Here's Our Process.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }} className="process-grid">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '20px', padding: '1.75rem 1.5rem', textAlign: 'center',
                  position: 'relative', transition: 'all 0.28s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.18)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
              >
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'var(--g-blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.70rem', fontWeight: 900, color: 'white',
                  fontFamily: 'var(--font-display)', boxShadow: 'var(--shadow-blue)',
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.55rem', marginTop: '0.35rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--slate-500)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.process-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:540px){.process-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION — ABOUT SNAP
          ═══════════════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="about-snap-grid">

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> About 3HD Media
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.65rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.12 }}>
                A Full-Service Digital<br />Media Agency. Mumbai.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1.02rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                3HD Media is a full-service digital media agency based in Prabhadevi, Mumbai. We help brands plan, produce and distribute digital content across every channel — social media, web, audio, email and mobile.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2.25rem' }}>
                Our team of strategists, creatives and developers work together on briefs big and small — giving your brand the kind of integrated digital presence that modern audiences expect.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '2.25rem' }}>
                {[
                  'Full-service digital media — strategy to execution',
                  'In-house creative, content, design and development',
                  'Social, web, audio, email, apps and digital publications',
                  'Direct working relationships — no unnecessary layers',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--slate-600)', fontWeight: 600 }}>
                    <CheckCircle size={14} style={{ color: 'var(--blue-600)', flexShrink: 0, marginTop: '0.15rem' }} />
                    {point}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary btn-arrow">
                  About Us <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <Link to="/contact" className="btn btn-outline">Work With Us</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              {/* Agency capability matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { emoji: '📊', title: 'Strategy',       desc: 'Channel planning, audience research, KPI setting' },
                  { emoji: '🎨', title: 'Creative',        desc: 'Content production, design, copywriting' },
                  { emoji: '📡', title: 'Distribution',    desc: 'Platform management, scheduling, publishing' },
                  { emoji: '📈', title: 'Performance',     desc: 'Analytics, reporting, optimisation' },
                  { emoji: '🛠️', title: 'Development',     desc: 'Web, app and digital product builds' },
                  { emoji: '🎙️', title: 'Audio & Content', desc: 'Podcasts, ebooks, email, blogs' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    style={{
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      borderRadius: '18px', padding: '1.5rem',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.16)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
                  >
                    <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{item.emoji}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.90rem', color: 'var(--slate-900)', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--slate-500)', lineHeight: 1.5 }}>{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
        <style>{`@media(max-width:900px){.about-snap-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION — INDUSTRIES (dark accent)
          ═══════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--dark-900)', padding: '5.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div>
              <span className="eyebrow eyebrow-dark" style={{ marginBottom: '0.75rem' }}>Who We Work With</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem,3vw,2.25rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>
                Brands Across Every Industry.
              </h2>
            </div>
            <Link to="/contact" className="btn btn-primary btn-arrow" style={{ flexShrink: 0 }}>
              Work With Us <ArrowRight size={15} className="arrow-icon" />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }} className="industry-grid">
            {[
              { emoji: '🏪', name: 'Retail & E-commerce' },
              { emoji: '🏥', name: 'Healthcare' },
              { emoji: '🎓', name: 'Education & EdTech' },
              { emoji: '🏠', name: 'Real Estate' },
              { emoji: '🍽️', name: 'Food & Hospitality' },
              { emoji: '💻', name: 'Technology & SaaS' },
              { emoji: '💰', name: 'Finance & BFSI' },
              { emoji: '🎨', name: 'Fashion & Lifestyle' },
            ].map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px', padding: '1.1rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '0.65rem',
                  transition: 'all 0.25s ease',
                }}
                whileHover={{ background: 'rgba(255,255,255,0.09)', y: -2 }}
              >
                <span style={{ fontSize: '1.25rem' }}>{ind.emoji}</span>
                <span style={{ fontSize: '0.835rem', fontWeight: 700, color: 'rgba(255,255,255,0.72)' }}>{ind.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.industry-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:480px){.industry-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>🚀</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Grow Your Brand<br />Through Digital Media?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.62)', maxWidth: '500px', margin: '0 auto 2.75rem', lineHeight: 1.78 }}>
              Tell us about your brand and goals. We'll put together a tailored digital media strategy and proposal.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-xl btn-arrow">
                Get a Free Proposal <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/services" className="btn btn-ghost-light btn-xl">
                Our Services
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
