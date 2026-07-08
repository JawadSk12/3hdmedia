import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Smartphone, Wifi, Globe, Mic, MapPin, Rocket, Video, MonitorPlay, Bluetooth, Share2, Mail, Clock, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const services = [
  { icon: <Smartphone size={22} />, name: 'Mobile Video Streaming',  color: ['#EBF8FF', '#1565C7'] },
  { icon: <Wifi size={22} />,       name: 'WiFi Advertising',        color: ['#F0FDF4', '#16A34A'] },
  { icon: <Globe size={22} />,      name: 'Internet Advertising',    color: ['#FFF7ED', '#EA580C'] },
  { icon: <Mic size={22} />,        name: 'Regional Voice SMS',      color: ['#FDF4FF', '#9333EA'] },
  { icon: <MapPin size={22} />,     name: 'Location Advertising',    color: ['#FFF1F2', '#E11D48'] },
  { icon: <Rocket size={22} />,     name: 'Product Launches',        color: ['#FFFBEB', '#D97706'] },
  { icon: <Video size={22} />,      name: 'Video SMS',               color: ['#EFF6FF', '#2563EB'] },
  { icon: <MonitorPlay size={22} />, name: 'Mobile Video Training',  color: ['#F0FDF4', '#15803D'] },
  { icon: <Bluetooth size={22} />,  name: 'Bluetooth Advertising',   color: ['#EFF9FF', '#0891B2'] },
  { icon: <Share2 size={22} />,     name: 'Social Media',            color: ['#FFF1F2', '#DB2777'] },
  { icon: <Mail size={22} />,       name: 'Video Emails',            color: ['#F5F3FF', '#7C3AED'] },
]

const enquiryFields = [
  { name: 'name',    label: 'Full Name',    placeholder: 'Your full name',       required: true,  half: true },
  { name: 'email',   label: 'Email',        placeholder: 'you@email.com',        required: true,  type: 'email', half: true },
  { name: 'phone',   label: 'Phone Number', placeholder: '+91 XXXXX XXXXX',      required: true,  type: 'tel' },
  { name: 'service', label: 'Service of Interest', required: false,
    options: services.map(s => s.name).concat(['Multiple Services']) },
  { name: 'message', label: 'Message', placeholder: 'Tell us about your requirement…', required: true, type: 'textarea' },
]

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Our experienced and dedicated staff provide the following services with a smile."
        breadcrumb="Services"
      />

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', opacity: .6 }} />
              11 Specialised Services
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,3.5vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)' }}>
              Digital Media Solutions
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.15rem' }} className="services-4col">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * .055, duration: .45 }}
                whileHover={{ y: -6, transition: { duration: .2 } }}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem 1.5rem',
                  cursor: 'default',
                  transition: 'box-shadow .25s, border-color .25s',
                  position: 'relative',
                  overflow: 'hidden',
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
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '.975rem', fontWeight: 800, color: 'var(--slate-900)', lineHeight: 1.3 }}>
                  {s.name}
                </h3>
              </motion.div>
            ))}

            {/* Placeholder 12th card = CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .65 }}
              style={{
                background: 'var(--g-blue)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem 1.5rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                boxShadow: 'var(--shadow-blue-lg)',
              }}
            >
              <p style={{ fontSize: '.9rem', fontWeight: 600, color: 'rgba(255,255,255,.9)', marginBottom: '1rem', lineHeight: 1.5 }}>
                Need a custom media strategy?
              </p>
              <a href="#enquiry" className="btn btn-white btn-sm" style={{ display: 'inline-flex', width: 'fit-content' }}>
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
        <style>{`
          .services-4col{grid-template-columns:repeat(4,1fr)!important;}
          .service-card-hover:hover{box-shadow:var(--shadow-lg);border-color:rgba(29,78,216,.18)!important;}
          @media(max-width:1100px){.services-4col{grid-template-columns:repeat(3,1fr)!important;}}
          @media(max-width:700px){.services-4col{grid-template-columns:repeat(2,1fr)!important;}}
          @media(max-width:440px){.services-4col{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Enquiry */}
      <section className="section section--alt" id="enquiry">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'start' }} className="enquiry-grid">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Get in Touch</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Ready to Get Started?
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '.975rem', color: 'var(--slate-500)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Kindly fill up the form and we shall revert to you within <strong>48 hours</strong>.
              </p>
              {[
                { icon: <Clock size={16} />, title: '48-Hour Response', sub: 'Guaranteed reply on all enquiries' },
                { icon: <Phone size={16} />, title: 'Call Us', sub: <a href="tel:02266661314" style={{ color: 'var(--blue-400)', fontWeight: 700 }}>022-66661314</a> },
                { icon: <Mail size={16} />, title: 'Email Us', sub: <a href="mailto:info@3hdmedia.com" style={{ color: 'var(--blue-400)', fontWeight: 700 }}>info@3hdmedia.com</a> },
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

            {/* Right: form */}
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
