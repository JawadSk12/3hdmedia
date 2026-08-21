import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--g-hero)', position: 'relative', overflow: 'hidden',
        paddingTop: 'var(--nav-h)', paddingBottom: '4rem',
      }}
    >
      <div className="dot-grid-dark" />
      <motion.div className="hero-orb hero-orb-blue"
        animate={{ scale: [1, 1.2, 1], opacity: [0.16, 0.24, 0.16] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: '450px', height: '450px', top: '-100px', right: '-80px' }}
      />
      <motion.div className="hero-orb hero-orb-purple"
        animate={{ scale: [1, 1.14, 1], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ width: '350px', height: '350px', bottom: '-60px', left: '-60px' }}
      />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '2rem' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem,15vw,10rem)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'var(--g-text-brand)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem',
            letterSpacing: '-0.05em',
          }}
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            fontWeight: 900, color: 'white',
            marginBottom: '1rem', letterSpacing: '-0.03em',
          }}>
            Looks Like You've Gone Off-Media.
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.60)', marginBottom: '2.75rem', maxWidth: '440px', margin: '0 auto 2.75rem', lineHeight: 1.75 }}>
            This page doesn't exist — but we've got plenty of great digital media content for you back on the right frequency.
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary btn-lg btn-arrow">
              Back Home <ArrowRight size={18} className="arrow-icon" />
            </Link>
            <Link to="/contact" className="btn btn-ghost-light btn-lg">Contact Us</Link>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Services', to: '/services' },
              { label: 'About', to: '/about' },
              { label: 'Work', to: '/work' },
            ].map(l => (
              <Link key={l.to} to={l.to} style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', fontWeight: 700, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
