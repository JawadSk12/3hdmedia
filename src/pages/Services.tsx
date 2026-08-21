import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ChevronRight, Phone, Mail, Clock } from 'lucide-react'
import { services } from '../data/services'
import { company } from '../data/company'
import ContactForm from '../components/ContactForm'

const enquiryOptions = services.map(s => s.title).concat(['Internship', 'Courses', 'Campus Placement', 'Multiple Services', 'Not sure yet'])

const enquiryFields = [
  { name: 'name',    label: 'Full Name',          placeholder: 'Your full name',    required: true,  half: true },
  { name: 'company', label: 'Company / Brand',    placeholder: 'Company name',      required: false, half: true },
  { name: 'email',   label: 'Email',              placeholder: 'you@email.com',     required: true,  type: 'email' as const },
  { name: 'phone',   label: 'Phone Number',       placeholder: '+91 XXXXX XXXXX',   required: true,  type: 'tel' as const },
  { name: 'service', label: 'Service Required',   required: false, options: enquiryOptions },
  { name: 'message', label: 'Tell Us More',       placeholder: 'Describe your requirement…', required: true, type: 'textarea' as const },
]

export default function Services() {
  const [active, setActive] = useState<string | null>(null)

  const categories = [
    { key: null,         label: 'All Services' },
    { key: 'content',    label: 'Content & Media' },
    { key: 'digital',    label: 'Digital Products' },
  ]

  const categoryMap: Record<string, string[]> = {
    content:  ['social-media', 'ebooks-publications', 'podcasts-audio', 'email-marketing-blogs'],
    digital:  ['websites', 'mobile-apps'],
  }

  const filtered = active
    ? services.filter(s => categoryMap[active]?.includes(s.id))
    : services

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
          style={{ width: '500px', height: '500px', top: '-120px', right: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-60px', background: 'rgba(225,48,108,0.12)' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Services</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ maxWidth: '760px' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>What We Create</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5vw,3.8rem)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem',
            }}>
              Digital Media Services<br />
              <span className="text-gradient-brand">Built for Your Brand.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '580px' }}>
              Social media, websites, ebooks, podcasts, email marketing and mobile apps — we create every format of digital media your brand needs to grow online.
            </p>

            {/* Quick stat strips */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {[
                { val: '6', label: 'Core Services' },
                { val: 'All Formats', label: 'Digital Media' },
                { val: 'Pan-India', label: 'Delivery' },
              ].map(s => (
                <div key={s.label} style={{ borderLeft: '2px solid rgba(255,255,255,0.12)', paddingLeft: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 900, color: 'white' }}>{s.val}</div>
                  <div style={{ fontSize: '0.77rem', color: 'rgba(255,255,255,0.48)', marginTop: '0.25rem', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="section">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* Category tabs */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3.5rem', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={String(cat.key)}
                className={`filter-tab ${active === cat.key ? 'active' : ''}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }} className="svc-page-grid">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '24px', padding: '2.5rem 2.25rem',
                  transition: 'all 0.32s ease', position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 32px 80px rgba(0,0,0,0.09)'
                  e.currentTarget.style.borderColor = service.color + '25'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                {/* Top gradient strip */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: service.gradient }} />

                {/* Emoji + Number */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '20px',
                    background: service.colorBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.9rem',
                    boxShadow: `0 4px 16px ${service.colorBg}`,
                  }}>
                    {service.emoji}
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate-300)', paddingTop: '0.3rem' }}>
                    {service.number}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.65rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.895rem', color: 'var(--slate-500)', lineHeight: 1.72, marginBottom: '1.5rem' }}>
                  {service.longDesc}
                </p>

                {/* Benefits */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '0.65rem' }}>
                    What's Included
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {service.benefits.map(b => (
                      <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--slate-600)', fontWeight: 600 }}>
                        <CheckCircle size={13} style={{ color: service.color, flexShrink: 0, marginTop: '0.15rem' }} />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ background: service.colorBg, borderRadius: '12px', padding: '0.85rem 1rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.70rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: service.color, marginBottom: '0.5rem' }}>
                    Deliverables
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {service.deliverables.map(d => (
                      <span key={d} style={{
                        fontSize: '0.76rem', fontWeight: 700, color: service.color,
                        background: 'rgba(255,255,255,0.7)', padding: '0.2rem 0.65rem',
                        borderRadius: '999px',
                      }}>
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#enquiry"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.875rem', fontWeight: 700, color: service.color,
                    borderBottom: `1.5px solid ${service.color}40`, paddingBottom: '0.1rem',
                    transition: 'gap 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '0.65rem'; e.currentTarget.style.borderColor = service.color }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '0.4rem'; e.currentTarget.style.borderColor = `${service.color}40` }}
                >
                  Get a Quote <ChevronRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:1100px){.svc-page-grid{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:640px){.svc-page-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* ── LEARNING CALLOUT ─────────────────────────────────────── */}
      <section style={{ background: 'var(--dark-900)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>Also Offered</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.65rem,3vw,2.35rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                Internships, Courses & Placements
              </h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', maxWidth: '520px', lineHeight: 1.75 }}>
                We also offer internship programmes, digital media certification courses and campus placement drives for students and freshers across India.
              </p>
            </div>
            <Link to="/learning" className="btn btn-primary btn-lg btn-arrow" style={{ flexShrink: 0 }}>
              Explore Learning <ArrowRight size={18} className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY SECTION ───────────────────────────────────────── */}
      <section className="section section--alt" id="enquiry">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '5rem', alignItems: 'start' }} className="enquiry-layout">

            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> Get a Quote
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '0.8rem', letterSpacing: '-0.03em' }}>
                Let's Create Something Together.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2rem' }}>
                Tell us about your brand and what kind of digital media you need. We'll respond within 48 hours with a tailored proposal.
              </p>

              {[
                { icon: <Clock size={15} />,  title: 'Response Time',   sub: 'Within 48 hours' },
                { icon: <Phone size={15} />,  title: 'Call Us',         sub: <a href={company.contact.phoneHref} style={{ color: 'var(--blue-600)', fontWeight: 700 }}>{company.contact.phone}</a> },
                { icon: <Mail size={15} />,   title: 'Email Us',        sub: <a href={`mailto:${company.contact.email}`} style={{ color: 'var(--blue-600)', fontWeight: 700 }}>{company.contact.email}</a> },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: 'var(--shadow-blue)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.90rem', color: 'var(--slate-900)' }}>{item.title}</div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--slate-500)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{ background: 'var(--white)', border: '1px solid var(--border-light)', borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.4rem' }}>
                  Request a Quote
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '2rem' }}>
                  We'll come back with a tailored solution and pricing for your needs.
                </p>
                <ContactForm fields={enquiryFields} submitLabel="Submit Request" />
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.enquiry-layout{grid-template-columns:1fr!important;}}`}</style>
      </section>

    </motion.div>
  )
}
