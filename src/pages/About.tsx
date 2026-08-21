import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { company } from '../data/company'

export default function About() {
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-hero)', minHeight: '62vh', display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-60px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>About</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="about-hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>About 3HD Media</span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,5vw,3.8rem)', fontWeight: 900, color: 'white', lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem' }}>
                Your Complete<br />
                <span className="text-gradient-brand">Digital Media Partner.</span>
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '540px', marginBottom: '2rem' }}>
                3HD Media is a full-service digital media studio based in Mumbai. We create every kind of digital content and media your brand needs — all under one roof.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary btn-arrow">
                  Our Services <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <Link to="/contact" className="btn btn-outline-white">Get in Touch</Link>
              </div>
            </motion.div>

            {/* Right: What we do pills */}
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {company.whatWeDo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    style={{
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(12px)', borderRadius: '16px', padding: '1.25rem',
                      transition: 'background 0.25s, transform 0.25s',
                    }}
                    whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.10)' }}
                  >
                    <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'white', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.5 }}>{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.about-hero-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────── */}
      <section className="section">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }} className="who-grid">

            {/* Left: text */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> Who We Are
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.65rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                A Full-Service Digital Media Studio.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1.02rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                3HD Media is a digital media studio based in Prabhadevi, Mumbai. We bring together content creators, designers, developers and digital strategists — all under one roof — to deliver complete digital media solutions for brands and businesses.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '1.25rem' }}>
                Whether you need social media content, a new website, an ebook, a podcast, email marketing campaigns or a mobile app — we create it all. We are your single digital partner for every format, every platform.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2rem' }}>
                Beyond our client services, we are committed to education — running internship programmes, social media and digital marketing courses, and campus placement drives to empower the next generation of digital media professionals.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary btn-arrow">
                  Our Services <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <Link to="/learning" className="btn btn-outline">Learning Programmes</Link>
              </div>
            </motion.div>

            {/* Right: facts & capabilities */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { emoji: '🎨', title: 'Creative Studio',         sub: 'Design, copy, production — original content across every digital format' },
                { emoji: '💻', title: 'Web & App Development',   sub: 'Websites, web pages, landing pages and mobile apps for iOS and Android' },
                { emoji: '🎙️', title: 'Audio & Podcast Production', sub: 'Recording, editing, distribution across Spotify, Apple Podcasts and more' },
                { emoji: '📧', title: 'Email & Content Marketing', sub: 'Campaigns, newsletters, blogs and content strategy' },
                { emoji: '📖', title: 'Digital Publications',    sub: 'eBooks, whitepapers, guides and interactive digital publications' },
                { emoji: '🎓', title: 'Education & Internships', sub: 'Courses, internship programmes and campus placements across India' },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '1.1rem 1.35rem', background: 'var(--white)',
                    border: '1px solid var(--border-light)', borderRadius: '16px',
                    transition: 'all 0.25s ease',
                  }}
                  whileHover={{ x: 4, boxShadow: 'var(--shadow-md)' }}
                >
                  <div style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.1rem' }}>{f.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.95rem' }}>{f.title}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)', marginTop: '0.15rem', lineHeight: 1.5 }}>{f.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.who-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── WHAT WE BELIEVE (dark) ───────────────────────────────── */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-100px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading section-heading--dark" style={{ marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>Our Philosophy</span>
            <h2 style={{ color: 'white' }}>What We Believe.</h2>
            <p>The principles that shape how we create digital media — and why our clients trust us.</p>
          </div>

          <div className="grid-4">
            {company.beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '22px', padding: '2.25rem 2rem', textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '2.4rem', marginBottom: '1.25rem' }}>{belief.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '0.65rem' }}>
                  {belief.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.72 }}>
                  {belief.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY (Timeline) ──────────────────────────────────── */}
      <section className="section section--alt" ref={timelineRef}>
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" style={{ marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>Our Story</span>
            <h2>How We Got Here.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="story-card-grid">
            {company.story.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 24 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.10, duration: 0.5 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '22px', padding: '2.25rem',
                  transition: 'all 0.28s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(37,99,235,0.18)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase',
                  color: 'var(--blue-600)', background: 'rgba(37,99,235,0.07)',
                  padding: '0.3rem 0.75rem', borderRadius: '999px', marginBottom: '1.1rem',
                }}>
                  {phase.phase}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.65rem' }}>
                  {phase.headline}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', lineHeight: 1.70 }}>
                  {phase.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.story-card-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="location-grid">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> Based in Mumbai
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.5rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Prabhadevi, Mumbai.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.5rem' }}>
                Our studio is based in the heart of Mumbai — serving clients across India and delivering digital media remotely worldwide.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { emoji: '📍', label: company.contact.address.line1 },
                  { emoji: '🏙️', label: company.contact.address.line2 },
                  { emoji: '📞', label: company.contact.phone },
                  { emoji: '📧', label: company.contact.email },
                  { emoji: '🕘', label: company.contact.hours },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.905rem', color: 'var(--slate-600)' }}>
                    <span style={{ fontSize: '1rem' }}>{item.emoji}</span>
                    {item.label}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Link to="/contact" className="btn btn-primary btn-arrow">
                  Contact Us <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <a href={company.contact.address.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View on Map
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div className="map-wrap" style={{ borderRadius: '24px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.042!2d72.8224!3d19.0081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4117153%3A0x715eb9eeaeedd6b8!2sPrabhadevi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000"
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="3HD Media — Prabhadevi, Mumbai"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.location-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Build Your Digital Presence?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Talk to us about your digital media needs. We'll create the right solution for your brand.
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
