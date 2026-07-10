import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Smartphone, Wifi, Globe, Mic, MapPin, Rocket, Video, MonitorPlay,
  Bluetooth, Mail, Clock, Phone,
} from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

/* ── Custom Social SVGs for Card Icons ──────────────────────── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

/* ── Service data grouped into 3 categories ─────────────────── */
const serviceGroups = [
  {
    key:      'mobile',
    emoji:    '🎬',
    label:    'Mobile & Video Advertising',
    desc:     'High-impact video-first ad formats delivered to audiences wherever they are.',
    accentBg: 'rgba(28,114,220,.05)',
    accentBorder: 'rgba(28,114,220,.12)',
    services: [
      {
        icon: <MonitorPlay size={22} />, name: 'Mobile Video Streaming',
        desc: 'Stream targeted video ads directly to mobile audiences at scale across India.',
        color: ['#EFF6FF', 'var(--blue-600)'],
      },
      {
        icon: <Video size={22} />, name: 'Video SMS',
        desc: 'Send engaging video messages via SMS — a direct and impactful mobile channel.',
        color: ['#F0FDF4', 'var(--accent-green)'],
      },
      {
        icon: <Mail size={22} />, name: 'Video Emails',
        desc: 'Embed rich video content inside email campaigns for superior engagement rates.',
        color: ['#FDF4FF', 'var(--accent-magenta)'],
      },
      {
        icon: <Smartphone size={22} />, name: 'Mobile Video Training',
        desc: 'Educate and onboard your audience with mobile-optimised video training content.',
        color: ['#FFFBEB', 'var(--accent-coral)'],
      },
    ],
  },
  {
    key:      'location',
    emoji:    '📡',
    label:    'Location & Network Advertising',
    desc:     'Reach audiences based on where they are — through WiFi, internet, Bluetooth, and proximity signals.',
    accentBg: 'rgba(20,184,166,.05)',
    accentBorder: 'rgba(20,184,166,.12)',
    services: [
      {
        icon: <Wifi size={22} />, name: 'WiFi Advertising',
        desc: 'Serve targeted ads to users connecting via public and private WiFi hotspots.',
        color: ['#F0FDFA', 'var(--accent-teal)'],
      },
      {
        icon: <Globe size={22} />, name: 'Internet Advertising',
        desc: "Display and native ad placements across India's largest internet ad networks.",
        color: ['#EFF6FF', 'var(--blue-500)'],
      },
      {
        icon: <Bluetooth size={22} />, name: 'Bluetooth Advertising',
        desc: 'Proximity marketing via Bluetooth beacons — engage customers in-store and on-site.',
        color: ['#F0FDF4', 'var(--accent-green)'],
      },
      {
        icon: <MapPin size={22} />, name: 'Location Advertising',
        desc: 'Hyper-local geo-targeted campaigns to reach the right people in the right place.',
        color: ['#FFF1F2', 'var(--accent-coral)'],
      },
      {
        icon: <Mic size={22} />, name: 'Regional Voice SMS',
        desc: 'Voice message broadcasts in regional languages — for broad, local audience reach.',
        color: ['#FFF5F5', '#E53E3E'],
      },
    ],
  },
  {
    key:      'social',
    emoji:    '📣',
    label:    'Social & Campaign Services',
    desc:     'Brand-building and launch campaigns powered by social media and experiential marketing.',
    accentBg: 'rgba(236,72,153,.05)',
    accentBorder: 'rgba(236,72,153,.12)',
    services: [
      {
        icon: <InstagramIcon />, name: 'Social Media',
        desc: 'Comprehensive social media management and paid advertising on all major platforms.',
        color: ['#FFF1F2', 'var(--accent-magenta)'],
      },
      {
        icon: <Rocket size={22} />, name: 'Product Launches',
        desc: 'End-to-end campaign planning and execution for impactful product launch moments.',
        color: ['#FFFDF5', '#D97706'],
      },
    ],
  },
]

const enquiryFields = [
  { name: 'name',    label: 'Full Name',          placeholder: 'Your full name',    required: true,  half: true },
  { name: 'company', label: 'Company',            placeholder: 'Your company name', required: false, half: true },
  { name: 'email',   label: 'Email',              placeholder: 'you@email.com',     required: true,  type: 'email' },
  { name: 'phone',   label: 'Phone Number',       placeholder: '+91 XXXXX XXXXX',   required: true,  type: 'tel' },
  {
    name: 'service', label: 'Service Interested In', required: false,
    options: serviceGroups.flatMap(g => g.services.map(s => s.name)).concat(['Multiple Services']),
  },
  { name: 'message', label: 'Message', placeholder: 'Tell us about your requirement…', required: true, type: 'textarea' },
]

export default function Services() {
  const subtitleNode = (
    <span>
      Our{' '}
      <span style={{ color: 'var(--accent-coral)', fontWeight: 700 }}>experienced</span>
      {' '}and{' '}
      <span style={{ color: 'var(--accent-teal)', fontWeight: 700 }}>dedicated</span>
      {' '}staff provide the following services with a smile.
    </span>
  )

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle={subtitleNode}
        breadcrumb="Services"
      />

      {/* ── GROUPED SERVICES ──────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {serviceGroups.map((group, gi) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: .55, delay: gi * .08 }}
              style={{ marginBottom: gi < serviceGroups.length - 1 ? '4.5rem' : 0 }}
            >
              {/* Group header */}
              <div style={{
                background: group.accentBg,
                border: `1px solid ${group.accentBorder}`,
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem 2rem',
                marginBottom: '1.75rem',
                display: 'flex', alignItems: 'center', gap: '1.25rem',
              }}>
                <span style={{ fontSize: '2rem', lineHeight: 1 }}>{group.emoji}</span>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.3rem' }}>
                    {group.label}
                  </h2>
                  <p style={{ fontSize: '.9rem', color: 'var(--slate-500)', lineHeight: 1.6 }}>{group.desc}</p>
                </div>
              </div>

              {/* Services grid */}
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(group.services.length, 4)}, 1fr)`, gap: '1.15rem' }}
                className={`svc-group-grid svc-${group.key}`}>
                {group.services.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ delay: i * .06, duration: .42 }}
                    whileHover={{ y: -6, transition: { duration: .2 } }}
                    style={{
                      background: 'var(--white)',
                      border: '1px solid var(--slate-200)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '1.75rem 1.5rem',
                      cursor: 'default',
                      transition: 'box-shadow .25s, border-color .25s',
                      position: 'relative', overflow: 'hidden',
                    }}
                    className="service-card-hover"
                  >
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: `linear-gradient(135deg, ${s.color[0]}, ${s.color[0]}CC)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: s.color[1],
                      marginBottom: '1.1rem',
                      boxShadow: `0 4px 12px ${s.color[1]}22`,
                      transition: 'transform .2s',
                    }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '.975rem', fontWeight: 800, color: 'var(--slate-900)', lineHeight: 1.3, marginBottom: '.55rem' }}>
                      {s.name}
                    </h3>
                    <p style={{ fontSize: '.845rem', color: 'var(--slate-500)', lineHeight: 1.65 }}>
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          .service-card-hover:hover{ box-shadow: var(--shadow-lg); border-color: rgba(11,63,160,.18)!important; }
          .svc-mobile  { grid-template-columns: repeat(4,1fr)!important; }
          .svc-location{ grid-template-columns: repeat(5,1fr)!important; }
          .svc-social  { grid-template-columns: repeat(2,1fr)!important; }
          @media(max-width:1100px){
            .svc-mobile  { grid-template-columns: repeat(2,1fr)!important; }
            .svc-location{ grid-template-columns: repeat(3,1fr)!important; }
          }
          @media(max-width:700px){
            .svc-mobile,.svc-location,.svc-social{ grid-template-columns: repeat(2,1fr)!important; }
          }
          @media(max-width:440px){
            .svc-mobile,.svc-location,.svc-social{ grid-template-columns: 1fr!important; }
          }
        `}</style>
      </section>

      {/* ── ENQUIRY SECTION ───────────────────────────────────── */}
      <section className="section section--alt" id="enquiry">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }} className="enquiry-grid">

            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Get in Touch</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Ready to Get Started?
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '.975rem', color: 'var(--slate-500)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Kindly fill-up the form below and we shall revert to you within 48 hours
              </p>
              {[
                { icon: <Clock size={16} />,  title: '48-Hour Response', sub: 'Guaranteed reply on all enquiries' },
                { icon: <Phone size={16} />,  title: 'Call Us',          sub: <a href="tel:02266661314" style={{ color: 'var(--blue-600)', fontWeight: 700 }}>022-66661314</a> },
                { icon: <Mail size={16} />,   title: 'Email Us',         sub: <a href="mailto:info@3hdmedia.com" style={{ color: 'var(--blue-600)', fontWeight: 700 }}>info@3hdmedia.com</a> },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.15rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: 'var(--shadow-blue)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--slate-900)' }}>{item.title}</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--slate-500)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}

              <div style={{ borderTop: '1px solid var(--slate-200)', paddingTop: '1.5rem', marginTop: '1.25rem' }}>
                <p style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '.75rem' }}>Also Explore</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
                  <Link to="/internships" className="btn btn-outline btn-sm">Internships</Link>
                  <Link to="/courses"     className="btn btn-outline btn-sm">Courses</Link>
                  <Link to="/placements"  className="btn btn-outline btn-sm">Placements</Link>
                </div>
              </div>
            </motion.div>

            {/* Right Column: form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
              <div style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '2.25rem', boxShadow: 'var(--shadow-md)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '.4rem' }}>
                  Send an Enquiry
                </h3>
                <p style={{ fontSize: '.875rem', color: 'var(--slate-500)', marginBottom: '1.75rem' }}>
                  Fill in your details and we'll get back to you within 48 hours.
                </p>
                <ContactForm fields={enquiryFields} submitLabel="Submit Enquiry" />
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.enquiry-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </motion.div>
  )
}
