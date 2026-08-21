import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  eyebrow: string
  title: string
  subtitle?: React.ReactNode
  breadcrumb?: string
}

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section style={{
      background: 'var(--g-hero)',
      paddingTop: 'calc(var(--nav-h) + 4rem)',
      paddingBottom: '4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,.055) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      {/* Gradient orbs */}
      <div className="hero-orb" style={{
        width: '360px', height: '360px',
        top: '-80px', right: '10%',
        background: 'rgba(29,78,216,.18)',
      }} />
      <div className="hero-orb" style={{
        width: '240px', height: '240px',
        bottom: '-40px', left: '5%',
        background: 'rgba(239,68,68,.1)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/" style={{ color: 'rgba(255,255,255,.5)' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,.6)' }}>{breadcrumb}</span>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            background: 'rgba(255,255,255,.08)',
            border: '1px solid rgba(255,255,255,.15)',
            borderRadius: '999px',
            padding: '.3rem 1rem',
            fontSize: '.7rem',
            fontWeight: 700,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.7)',
            marginBottom: '1.1rem',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#60A5FA',
            }} />
            {eyebrow}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-.025em',
            marginBottom: '1.1rem',
          }}>
            {title}
          </h1>

          {subtitle && (
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,.7)',
              maxWidth: '600px',
              lineHeight: 1.75,
            }}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
