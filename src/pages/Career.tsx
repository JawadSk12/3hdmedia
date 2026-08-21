import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { company } from '../data/company'

const jobRoles = [
  { emoji: '📱', title: 'Social Media Manager',      domain: 'Marketing',    desc: 'Plan, create and manage content across Instagram, Facebook, YouTube and more.' },
  { emoji: '🎨', title: 'Graphic Designer / Illustrator', domain: 'Design',  desc: 'Design social posts, web graphics, ebook layouts and brand visuals.' },
  { emoji: '🌐', title: 'Web Designer / Developer',  domain: 'Development',  desc: 'Build websites, landing pages and digital experiences for clients.' },
  { emoji: '🎙️', title: 'Podcast Producer',          domain: 'Audio',        desc: 'Record, edit, mix and distribute podcast content for clients.' },
  { emoji: '✍️', title: 'Content Writer / Blogger',  domain: 'Content',      desc: 'Write SEO blog articles, email copy, ebooks and digital content.' },
  { emoji: '📲', title: 'Mobile App Developer',       domain: 'Development',  desc: 'Build and maintain iOS and Android apps using React Native or native code.' },
  { emoji: '📊', title: 'Digital Marketing Analyst', domain: 'Analytics',    desc: 'Analyse campaign data, track KPIs and produce insights reports.' },
  { emoji: '💼', title: 'Sales Executive',            domain: 'Sales',        desc: 'Acquire new clients and grow business relationships across India.' },
  { emoji: '🎓', title: 'Trainer / Course Facilitator', domain: 'Education', desc: 'Conduct digital media workshops, courses and internship programmes.' },
  { emoji: '📧', title: 'Email Marketing Specialist', domain: 'Marketing',   desc: 'Design and execute email campaigns, automations and newsletters.' },
]

const whyJoin = [
  { emoji: '🚀', title: 'Work on Real Projects',  desc: 'From day one you work on live digital media — not just internal tasks.' },
  { emoji: '📚', title: 'Learn & Grow Fast',      desc: 'Digital media moves fast. We move with it — and bring our team along for the ride.' },
  { emoji: '🌐', title: 'All Formats Covered',    desc: 'Work across social, web, audio, video, apps — develop skills across every digital channel.' },
  { emoji: '🤝', title: 'Freshers Welcome',        desc: 'No experience? No problem. We hire attitude and train skills — across all roles.' },
]

export default function Career() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-hero)', minHeight: '58vh', display: 'flex', alignItems: 'center',
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
            <Link to="/">Home</Link><span>/</span><span>Careers</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ maxWidth: '720px' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>Join the Team</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5vw,3.8rem)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem',
            }}>
              Build Your Career in<br />
              <span className="text-gradient-brand">Digital Media.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '580px', marginBottom: '2rem' }}>
              3HD Media is a full-service digital media studio — and we're always looking for creative, driven people to join us. Freshers welcome across all departments.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href={company.contact.phoneHref} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> Call to Apply
              </a>
              <a href={`mailto:${company.contact.email}`} className="btn btn-outline-white btn-lg">
                Send Your CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ROLES GRID ───────────────────────────────────────────── */}
      <section className="section">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }} className="careers-grid">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> Open Positions
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.5rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Roles Across Every Digital Channel.
              </h2>
              <div className="divider-blue" />

              <div style={{
                background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.12)',
                borderLeft: '4px solid var(--blue-500)', borderRadius: '0 14px 14px 0',
                padding: '1.25rem 1.5rem', marginBottom: '1.5rem',
              }}>
                <p style={{ fontSize: '0.975rem', color: 'var(--slate-700)', lineHeight: 1.80, fontWeight: 600 }}>
                  Digital media is one of the fastest growing industries in India. At 3HD Media, you'll work across social media, websites, podcasts, apps and more — building skills that are in demand everywhere.
                </p>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                We're a full-service studio — which means there are opportunities in design, development, content, audio production, sales, analytics and education. <strong>Freshers are welcome for all categories.</strong>
              </p>

              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2rem' }}>
                Call us to schedule an appointment at{' '}
                <a href={company.contact.phoneHref} style={{ fontWeight: 700, color: 'var(--blue-600)' }}>
                  {company.contact.phone}
                </a>{' '}or send your CV to{' '}
                <a href={`mailto:${company.contact.email}`} style={{ fontWeight: 700, color: 'var(--blue-600)' }}>
                  {company.contact.email}
                </a>
              </p>

              <div style={{
                background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.20)',
                borderRadius: '14px', padding: '1rem 1.25rem',
                display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem',
              }}>
                <CheckCircle size={20} style={{ color: '#16A34A', flexShrink: 0 }} />
                <p style={{ fontSize: '0.90rem', fontWeight: 700, color: '#166534' }}>
                  Freshers are welcome for <em>all</em> job roles listed.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={company.contact.phoneHref} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={18} /> {company.contact.phone}
                </a>
                <Link to="/learning" className="btn btn-outline btn-lg">
                  Internships & Courses
                </Link>
              </div>
            </motion.div>

            {/* Right: roles list */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {jobRoles.map((role, i) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.06 }}
                    style={{
                      display: 'flex', gap: '1rem', alignItems: 'flex-start',
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      borderRadius: '16px', padding: '1.1rem 1.35rem',
                      transition: 'all 0.25s ease',
                    }}
                    whileHover={{ x: 4, boxShadow: 'var(--shadow-md)' }}
                  >
                    <div style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: '0.1rem' }}>{role.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                        <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.95rem' }}>{role.title}</div>
                        <span style={{
                          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
                          color: 'var(--blue-600)', background: 'rgba(37,99,235,0.07)',
                          padding: '0.15rem 0.5rem', borderRadius: '4px',
                        }}>
                          {role.domain}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--slate-500)', lineHeight: 1.5 }}>{role.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.careers-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── WHY JOIN (dark) ──────────────────────────────────────── */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '450px', height: '450px', top: '-80px', right: '-80px' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading section-heading--dark" style={{ marginBottom: '4rem' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>Why 3HD Media</span>
            <h2 style={{ color: 'white' }}>Why Build Your Career With Us?</h2>
            <p>A fast-moving, creative studio where you work on real digital media — across every format and platform.</p>
          </div>
          <div className="grid-4">
            {whyJoin.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '22px', padding: '2rem 1.75rem', textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '1.1rem' }}>{w.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'white', marginBottom: '0.55rem' }}>
                  {w.title}
                </h3>
                <p style={{ fontSize: '0.855rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.68 }}>
                  {w.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>👋</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.65rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Start Your Digital Media Career?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Call or email us to schedule an appointment. We'd love to meet you.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={company.contact.phoneHref} className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> {company.contact.phone}
              </a>
              <a href={`mailto:${company.contact.email}`} className="btn btn-ghost-light btn-lg">
                Send an Email
              </a>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/learning"
                style={{ color: 'rgba(255,255,255,0.50)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
              >
                Looking for internships or courses instead? <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
