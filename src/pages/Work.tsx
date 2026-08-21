import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { workItems, workCategories } from '../data/work'

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? workItems
    : workItems.filter(w => w.category === activeCategory)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-hero)', minHeight: '55vh', display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-60px', background: 'rgba(225,48,108,0.12)' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Work</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ maxWidth: '720px' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>What We Deliver</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5vw,3.8rem)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem',
            }}>
              Digital Media Across<br />
              <span className="text-gradient-brand">Every Format.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '560px' }}>
              A showcase of our digital media work — social media campaigns, websites, podcasts, ebooks, email campaigns and mobile apps.
            </p>

            {/* Format pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {['📱 Social Media', '🌐 Websites', '🎙️ Podcasts', '📖 eBooks', '✉️ Email', '📲 Mobile Apps'].map(f => (
                <span key={f} style={{
                  padding: '0.35rem 0.85rem', borderRadius: '999px',
                  fontSize: '0.76rem', fontWeight: 700,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.75)',
                }}>
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {/* Sample notice */}
          <div style={{
            background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.14)',
            borderRadius: '14px', padding: '1rem 1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '3rem', fontSize: '0.875rem', color: 'var(--slate-600)',
          }}>
            <span style={{ fontSize: '1rem' }}>📋</span>
            <span>
              <strong style={{ color: 'var(--slate-800)' }}>Sample Portfolio:</strong> These projects demonstrate our capabilities and formats. Real client projects will be featured here as they become available.
            </span>
          </div>

          {/* Category filter */}
          <div className="filter-tabs" style={{ marginBottom: '3rem' }}>
            {workCategories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="work-page-grid">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '22px', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.10)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {/* Cover visual */}
                  <div style={{
                    background: item.coverGradient, aspectRatio: '16/9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                    <div style={{ fontSize: '3.5rem', zIndex: 1 }}>{item.emoji}</div>
                    <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem' }}>
                      <span style={{
                        fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.80)',
                        padding: '0.25rem 0.6rem', borderRadius: '6px', backdropFilter: 'blur(8px)',
                      }}>
                        Sample
                      </span>
                    </div>
                    <div style={{ position: 'absolute', bottom: '0.85rem', right: '0.85rem' }}>
                      <span style={{
                        fontSize: '0.70rem', fontWeight: 700,
                        background: 'rgba(0,0,0,0.45)', color: 'white',
                        padding: '0.25rem 0.65rem', borderRadius: '999px', backdropFilter: 'blur(8px)',
                      }}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.75rem' }}>
                    {/* Tags */}
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                      {item.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize: '0.69rem', fontWeight: 700, letterSpacing: '0.06em',
                          color: 'var(--slate-500)', background: 'var(--slate-100)',
                          padding: '0.2rem 0.55rem', borderRadius: '5px',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>

                    <div style={{ marginBottom: '0.65rem' }}>
                      <p style={{ fontSize: '0.70rem', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '0.4rem' }}>
                        The Challenge
                      </p>
                      <p style={{ fontSize: '0.845rem', color: 'var(--slate-500)', lineHeight: 1.65 }}>
                        {item.challenge}
                      </p>
                    </div>

                    {/* Technology pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                      {item.technology.map(t => (
                        <span key={t} style={{
                          fontSize: '0.72rem', fontWeight: 600,
                          color: 'var(--blue-600)', background: 'rgba(37,99,235,0.07)',
                          padding: '0.2rem 0.55rem', borderRadius: '6px',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.resultsPlaceholder && (
                      <p style={{ fontSize: '0.76rem', color: 'var(--slate-400)', fontStyle: 'italic' }}>
                        Results will be populated with verified campaign data.
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:1024px){.work-page-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:640px){.work-page-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ── WHAT WE CAN DO FOR YOU ───────────────────────────────── */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>Every Format Covered</span>
            <h2>We Create Digital Media Across Every Channel.</h2>
            <p>From a single Instagram post to a full mobile app — we handle every format of digital media for your brand.</p>
          </div>

          <div className="grid-3">
            {[
              { emoji: '📱', title: 'Social Media Posts & Campaigns', desc: 'Reels, stories, carousels, paid ads — original content for every platform.' },
              { emoji: '🌐', title: 'Websites & Landing Pages',        desc: 'Custom-designed, fast, SEO-optimised sites and high-converting pages.' },
              { emoji: '📖', title: 'eBooks & Digital Publications',   desc: 'Professionally designed guides, whitepapers and interactive PDFs.' },
              { emoji: '🎙️', title: 'Podcasts & Streaming Audio',      desc: 'Full production: recording, editing, artwork, show notes and distribution.' },
              { emoji: '✉️', title: 'Email Marketing & Blogs',         desc: 'Campaigns, automations, newsletters and SEO blog content.' },
              { emoji: '📲', title: 'Mobile Apps',                     desc: 'iOS & Android apps — UX design, development and App Store launch.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '20px', padding: '1.75rem',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.16)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
              >
                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.emoji}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.835rem', color: 'var(--slate-500)', lineHeight: 1.60 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.75rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Create Something Great?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Tell us what you need. We'll build the right digital media solution for your brand.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg btn-arrow">
                Start a Project <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/services" className="btn btn-ghost-light btn-lg">View Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
