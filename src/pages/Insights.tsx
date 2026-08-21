import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { insights, insightCategories } from '../data/insights'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? insights
    : insights.filter(item => item.category === activeCategory)

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
          style={{ width: '500px', height: '500px', top: '-120px', right: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.10, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{ width: '350px', height: '350px', bottom: '-60px', left: '-60px', background: 'rgba(20,184,166,0.12)' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Insights</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ maxWidth: '720px' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>Digital Media Insights</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5vw,3.8rem)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem',
            }}>
              Ideas, Tips & Trends for<br />
              <span className="text-gradient-brand">Your Digital Presence.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '560px' }}>
              Guides, insights and advice on social media, websites, podcasts, email marketing, apps and all things digital media — from the 3HD team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {/* Sample notice */}
          <div style={{
            background: 'rgba(20,184,166,0.04)', border: '1px solid rgba(20,184,166,0.14)',
            borderRadius: '14px', padding: '1rem 1.5rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            marginBottom: '3rem', fontSize: '0.875rem', color: 'var(--slate-600)',
          }}>
            <span style={{ fontSize: '1rem' }}>📝</span>
            <span>
              <strong style={{ color: 'var(--slate-800)' }}>Sample Articles:</strong> These articles demonstrate our editorial format. Published content from 3HD Media will be featured here.
            </span>
          </div>

          {/* Category filter */}
          <div className="filter-tabs" style={{ marginBottom: '3.5rem' }}>
            {insightCategories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {activeCategory === 'All' && filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '3.5rem' }}
            >
              <div style={{
                display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '0',
                background: 'var(--white)', border: '1px solid var(--border-light)',
                borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                className="featured-insight"
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-xl)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
              >
                {/* Cover */}
                <div style={{
                  background: filtered[0].coverGradient, minHeight: '320px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', padding: '2rem',
                }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                  <div style={{ fontSize: '5rem', zIndex: 1, marginBottom: '1rem' }}>{filtered[0].emoji}</div>
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span style={{
                      fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.80)',
                      padding: '0.25rem 0.65rem', borderRadius: '6px', backdropFilter: 'blur(8px)',
                    }}>
                      Featured · Sample
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '3rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.70rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'var(--blue-600)', background: 'rgba(37,99,235,0.07)',
                      padding: '0.25rem 0.65rem', borderRadius: '6px',
                    }}>
                      {filtered[0].category}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--slate-400)' }}>{filtered[0].readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.85rem)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem', lineHeight: 1.25 }}>
                    {filtered[0].title}
                  </h2>
                  <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.72, marginBottom: '1.75rem' }}>
                    {filtered[0].excerpt}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {filtered[0].tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.70rem', fontWeight: 600, color: 'var(--slate-500)',
                        background: 'var(--slate-100)', padding: '0.2rem 0.55rem', borderRadius: '5px',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', fontWeight: 700, color: 'var(--blue-600)', cursor: 'pointer' }}>
                    Read article <ArrowRight size={15} />
                  </div>
                </div>
              </div>
              <style>{`@media(max-width:768px){.featured-insight{grid-template-columns:1fr!important;}}`}</style>
            </motion.div>
          )}

          {/* Articles grid */}
          <div className="grid-3">
            {(activeCategory === 'All' ? filtered.slice(1) : filtered).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07 }}
              >
                <div style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '22px', overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {/* Cover */}
                  <div style={{
                    background: item.coverGradient, height: '180px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                    <div style={{ fontSize: '3rem', zIndex: 1 }}>{item.emoji}</div>
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                      <span style={{
                        fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.80)',
                        padding: '0.2rem 0.55rem', borderRadius: '5px', backdropFilter: 'blur(8px)',
                      }}>
                        Sample
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: 'var(--blue-600)', background: 'rgba(37,99,235,0.07)',
                        padding: '0.2rem 0.6rem', borderRadius: '5px',
                      }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: '0.76rem', color: 'var(--slate-400)' }}>{item.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.6rem', lineHeight: 1.30 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.84rem', color: 'var(--slate-500)', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {item.excerpt.slice(0, 115)}…
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--blue-600)' }}>
                      Read more <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── EXPLORE CTA ──────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
              Explore Our Services
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.65rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Need Help With Your Digital Media?
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--slate-500)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              From social media to mobile apps — we create every kind of digital media content for your brand.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn btn-primary btn-lg btn-arrow">
                Explore Services <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Get in Touch</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
