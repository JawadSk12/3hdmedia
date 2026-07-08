import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MonitorPlay, BookMarked, GraduationCap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const contactCards = [
  {
    icon: <Mail size={26} />,
    label: 'Email Address',
    value: <a href="mailto:info@3hdmedia.com" style={{ color: 'var(--blue-500)', fontWeight: 700, fontSize: '1rem' }}>info@3hdmedia.com</a>,
    sub: 'We respond within 48 hours',
    href: 'mailto:info@3hdmedia.com',
  },
  {
    icon: <Phone size={26} />,
    label: 'Phone',
    value: <a href="tel:02266661314" style={{ color: 'var(--blue-500)', fontWeight: 700, fontSize: '1rem' }}>022-66661314</a>,
    sub: 'Mon–Sat, 9 AM – 6 PM IST',
    href: 'tel:02266661314',
  },
  {
    icon: <MapPin size={26} />,
    label: 'Office Address',
    value: (
      <p style={{ color: 'var(--slate-700)', fontSize: '.95rem', lineHeight: 1.6 }}>
        3HD Media, 54, Mamta 'A' Wing,<br />
        A.M. Marg, Prabhadevi,<br />
        Mumbai — 400 025
      </p>
    ),
    sub: '',
    href: 'https://maps.google.com/?q=Prabhadevi,Mumbai,400025',
  },
]

const contactFields = [
  { name: 'name',    label: 'Full Name',    placeholder: 'Your full name', required: true,  half: true },
  { name: 'email',   label: 'Email',        placeholder: 'you@email.com',  required: true,  type: 'email', half: true },
  { name: 'phone',   label: 'Phone Number', placeholder: '+91 XXXXX XXXXX', required: true, type: 'tel' },
  { name: 'subject', label: 'Subject / Topic',
    options: ['Services Enquiry', 'Social Media Courses', 'Internship Application', 'Campus Placements', 'Career / Job Opening', 'General Enquiry', 'Other'] },
  { name: 'message', label: 'Message', placeholder: 'How can we help you?', required: true, type: 'textarea' },
]

const quickLinks = [
  { icon: <MonitorPlay size={22} />, title: 'Services',    desc: 'Digital advertising & media solutions',        to: '/services' },
  { icon: <BookMarked size={22} />,  title: 'Courses',     desc: 'Social media certification training',           to: '/courses' },
  { icon: <GraduationCap size={22} />, title: 'Internships', desc: 'Live projects for students across India',   to: '/internships' },
  { icon: <Users size={22} />,       title: 'Placements',  desc: 'Campus placement solutions for colleges',      to: '/placements' },
]

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="We're Here to Help"
        title="Contact Us"
        subtitle="Reach out for services, courses, career opportunities, placements, or any other enquiry. We respond within 48 hours."
        breadcrumb="Contact Us"
      />

      {/* Info cards */}
      <section className="section--tight" style={{ background: 'var(--white)', paddingTop: '3rem', paddingBottom: '0' }}>
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '0' }}>
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className="info-card"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="info-icon-wrap">{card.icon}</div>
                <div style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '.6rem' }}>
                  {card.label}
                </div>
                <div style={{ marginBottom: '.4rem' }}>{card.value}</div>
                {card.sub && <p style={{ fontSize: '.82rem', color: 'var(--slate-400)' }}>{card.sub}</p>}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section" id="contact-form">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'start' }} className="contact-grid">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Drop Us a Line</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Send a Message
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '.975rem', color: 'var(--slate-500)', marginBottom: '2rem', lineHeight: 1.8 }}>
                Fill in the form and our team will get back to you within 48 hours. For urgent queries, please call us directly at{' '}
                <a href="tel:02266661314" style={{ color: 'var(--blue-500)', fontWeight: 700 }}>022-66661314</a>.
              </p>

              <div style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '2.25rem', boxShadow: 'var(--shadow-md)' }}>
                <ContactForm
                  fields={contactFields}
                  submitLabel="Send Message"
                  successMessage="Your message has been sent! We'll get back to you within 48 hours."
                />
              </div>
            </motion.div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Find Us</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Our Location
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '.975rem', color: 'var(--slate-500)', marginBottom: '1.75rem', lineHeight: 1.8 }}>
                Conveniently located in Prabhadevi, Mumbai — easily accessible by road, rail, and local bus.
              </p>
              <div className="map-wrap" style={{ marginBottom: '1.5rem' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.042!2d72.8224!3d19.0081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4117153%3A0x715eb9eeaeedd6b8!2sPrabhadevi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="3HD Media location — Prabhadevi, Mumbai"
                />
              </div>

              <div style={{ background: 'var(--slate-50)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white', boxShadow: 'var(--shadow-blue)' }}>
                  <MapPin size={17} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--slate-900)', marginBottom: '.25rem', fontSize: '.95rem' }}>3HD Media</div>
                  <div style={{ fontSize: '.875rem', color: 'var(--slate-500)', lineHeight: 1.6 }}>
                    54, Mamta 'A' Wing, A.M. Marg<br />
                    Prabhadevi, Mumbai — 400 025<br />
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Quick links */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>Explore 3HD Media</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 900, color: 'var(--slate-900)' }}>
              Other Ways We Can Help
            </h2>
          </div>
          <div className="grid-4">
            {quickLinks.map((l, i) => (
              <motion.div key={l.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
                <Link
                  to={l.to}
                  style={{ display: 'block', textDecoration: 'none', background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '1.75rem', textAlign: 'center', transition: 'box-shadow .25s, transform .25s, border-color .25s' }}
                  className="ql-card"
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 1.1rem', boxShadow: 'var(--shadow-blue)' }}>
                    {l.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '.4rem' }}>{l.title}</h3>
                  <p style={{ fontSize: '.82rem', color: 'var(--slate-500)', lineHeight: 1.5 }}>{l.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`.ql-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-lg);border-color:rgba(29,78,216,.15)!important;}`}</style>
      </section>
    </motion.div>
  )
}
