import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { company } from '../data/company'
import ContactForm from '../components/ContactForm'

const serviceOptions = [
  'Social Media',
  'Website / Web Page',
  'eBook & Digital Publication',
  'Podcast & Audio Production',
  'Email Marketing & Blogs',
  'Mobile App',
  'Internship',
  'Courses',
  'Campus Placement',
  'Multiple Services',
  'Not sure — need guidance',
]

const formFields = [
  { name: 'name',    label: 'Full Name',       placeholder: 'Your full name',    required: true,  half: true },
  { name: 'company', label: 'Company / Brand', placeholder: 'Optional',          required: false, half: true },
  { name: 'email',   label: 'Email Address',   placeholder: 'you@email.com',     required: true,  type: 'email' as const },
  { name: 'phone',   label: 'Phone Number',    placeholder: '+91 XXXXX XXXXX',   required: true,  type: 'tel' as const },
  { name: 'service', label: 'I\'m interested in…', required: false, options: serviceOptions },
  { name: 'message', label: 'Tell Us More',    placeholder: 'What can we help you with?', required: true, type: 'textarea' as const },
]

const contactInfo = [
  {
    icon: <Phone size={20} />,
    title: 'Call Us',
    lines: [company.contact.phone],
    href: company.contact.phoneHref,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    emoji: '📞',
  },
  {
    icon: <Mail size={20} />,
    title: 'Email Us',
    lines: [company.contact.email],
    href: `mailto:${company.contact.email}`,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
    emoji: '📧',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Visit Us',
    lines: [company.contact.address.line1, company.contact.address.line2],
    href: company.contact.address.mapUrl,
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.08)',
    gradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)',
    emoji: '📍',
  },
  {
    icon: <Clock size={20} />,
    title: 'Working Hours',
    lines: [company.contact.hours, `Response within ${company.contact.responseTime}`],
    href: null,
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
    emoji: '🕘',
  },
]

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-hero)',
        minHeight: '55vh',
        display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-120px', right: '-80px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-60px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Contact</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ maxWidth: '680px' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>
              <span className="dot-pulse" /> Get in Touch
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5vw,3.8rem)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem',
            }}>
              Let's Build Your<br />
              <span className="text-gradient-brand">Digital Presence.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '540px' }}>
              Whether you need social media content, a website, a podcast, an ebook, email marketing or a mobile app — we'd love to hear from you.
            </p>

            {/* Quick service badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '2rem' }}>
              {['📱 Social Media', '🌐 Websites', '🎙️ Podcasts', '📖 eBooks', '✉️ Email', '📲 Mobile Apps', '🎓 Internships', '📚 Courses'].map(s => (
                <span key={s} style={{
                  padding: '0.3rem 0.8rem', borderRadius: '999px',
                  fontSize: '0.73rem', fontWeight: 700,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.72)',
                }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ────────────────────────────────────── */}
      <section style={{ background: 'var(--dark-900)', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'block', background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px',
                      padding: '1.75rem', textDecoration: 'none',
                      transition: 'all 0.28s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = info.color + '40' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                  >
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '14px',
                      background: info.gradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', marginBottom: '1.1rem',
                      boxShadow: `0 4px 16px ${info.bg}`,
                    }}>
                      {info.icon}
                    </div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginBottom: '0.4rem' }}>
                      {info.title}
                    </p>
                    {info.lines.map((line, j) => (
                      <p key={j} style={{ fontSize: j === 0 ? '0.92rem' : '0.80rem', fontWeight: j === 0 ? 700 : 500, color: j === 0 ? 'white' : 'rgba(255,255,255,0.50)', lineHeight: 1.45 }}>
                        {line}
                      </p>
                    ))}
                  </a>
                ) : (
                  <div style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px',
                    padding: '1.75rem',
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '14px',
                      background: info.gradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', marginBottom: '1.1rem',
                    }}>
                      {info.icon}
                    </div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginBottom: '0.4rem' }}>
                      {info.title}
                    </p>
                    {info.lines.map((line, j) => (
                      <p key={j} style={{ fontSize: j === 0 ? '0.92rem' : '0.80rem', fontWeight: j === 0 ? 700 : 500, color: j === 0 ? 'white' : 'rgba(255,255,255,0.50)', lineHeight: 1.45 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT LAYOUT ──────────────────────────────────── */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '5rem', alignItems: 'start' }} className="contact-main-grid">

            {/* Left: info */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" /> Start a Conversation
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                We'd Love to Hear From You.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                Tell us about your brand and what you need. We'll come back to you within 48 hours with a tailored solution and pricing.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2rem' }}>
                Whether it's a social media retainer, a new website, a podcast series, an ebook, an email campaign, a mobile app — or you're simply not sure what you need yet — just reach out and let's talk.
              </p>

              {/* Services we offer */}
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '0.75rem' }}>
                  What We Can Help With
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {[
                    { emoji: '📱', label: 'Social Media' },
                    { emoji: '🌐', label: 'Websites' },
                    { emoji: '📖', label: 'eBooks' },
                    { emoji: '🎙️', label: 'Podcasts' },
                    { emoji: '✉️', label: 'Email Marketing' },
                    { emoji: '📲', label: 'Mobile Apps' },
                    { emoji: '🎓', label: 'Internships' },
                    { emoji: '📚', label: 'Courses' },
                  ].map(s => (
                    <span key={s.label} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.35rem 0.85rem', borderRadius: '999px',
                      fontSize: '0.78rem', fontWeight: 700,
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      color: 'var(--slate-700)',
                    }}>
                      {s.emoji} {s.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Address block */}
              <div style={{
                background: 'var(--white)', border: '1px solid var(--border-light)',
                borderRadius: '18px', padding: '1.5rem',
              }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '0.85rem' }}>
                  Our Office
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { icon: '📍', text: company.contact.address.line1 },
                    { icon: '🏙️', text: company.contact.address.line2 },
                    { icon: '📞', text: company.contact.phone },
                    { icon: '📧', text: company.contact.email },
                    { icon: '🕘', text: company.contact.hours },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--slate-600)' }}>
                      <span style={{ fontSize: '0.95rem', flexShrink: 0, marginTop: '0.05rem' }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
                <a
                  href={company.contact.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--blue-600)' }}
                >
                  View on Google Maps <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{
                background: 'var(--white)', border: '1px solid var(--border-light)',
                borderRadius: '28px', padding: '2.75rem',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.4rem' }}>
                  Send Us a Message
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate-500)', marginBottom: '2rem' }}>
                  Fill in the form and we'll get back to you within 48 hours.
                </p>
                <ContactForm fields={formFields} submitLabel="Send Message" />
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.contact-main-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── MAP ──────────────────────────────────────────────────── */}
      <section style={{ padding: '0', lineHeight: 0 }}>
        <div className="map-wrap" style={{ height: '400px', borderRadius: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.042!2d72.8224!3d19.0081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4117153%3A0x715eb9eeaeedd6b8!2sPrabhadevi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000"
            width="100%" height="400" style={{ border: 0, display: 'block' }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="3HD Media — Prabhadevi, Mumbai"
          />
        </div>
      </section>

    </motion.div>
  )
}
