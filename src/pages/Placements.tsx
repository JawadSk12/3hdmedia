import { motion } from 'framer-motion'
import { Network, Award, ShieldCheck, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const steps = [
  { num: '01', title: 'College Registers with 3HD Media', desc: 'Fill the form below. Our team reviews your request and confirms the partnership details.' },
  { num: '02', title: 'Our Team Engages HR Personnel',   desc: 'We contact our corporate network to match the right companies to your MBA specialisations.' },
  { num: '03', title: 'Corporates Attend Campus Drive',   desc: 'HR teams visit your campus for interviews and selection — fully coordinated by our team.' },
  { num: '04', title: 'Students Get Placed',              desc: 'Offers extended, students placed — your placement statistics improve meaningfully.' },
]

const benefits = [
  { icon: <Network size={22} />, title: 'Corporate Network Access', text: 'Tap into our wide network of HR professionals and corporate partners across multiple industries.' },
  { icon: <Award size={22} />,   title: 'All MBA Specialisations',  text: 'Finance, Marketing, HR, Operations, IT, and more — we support placements across all MBA disciplines.' },
  { icon: <ShieldCheck size={22} />, title: 'Dedicated Placement Team', text: 'A specialised team solely focused on ensuring successful campus placement drives for registered colleges.' },
]

const placementFields = [
  { name: 'college',  label: 'College / Institute Name', placeholder: 'Full institution name', required: true,  half: true },
  { name: 'city',     label: 'City',                     placeholder: 'City',                  required: true,  half: true },
  { name: 'contact',  label: 'Contact Person Name',       placeholder: 'Your full name',        required: true,  half: true },
  { name: 'role',     label: 'Designation',               placeholder: 'e.g. Placement Officer',              half: true },
  { name: 'email',    label: 'Email Address',             placeholder: 'official@college.edu',  required: true,  type: 'email', half: true },
  { name: 'phone',    label: 'Phone Number',              placeholder: '+91 XXXXX XXXXX',       required: true,  type: 'tel',   half: true },
  { name: 'students', label: 'Approx. Number of MBA Students',
    options: ['Under 50', '50 – 100', '100 – 200', '200 – 500', '500+'] },
  { name: 'message',  label: 'Message / Requirements',   placeholder: 'Tell us about your placement requirements, preferred timeline, and MBA specialisations offered…', required: true, type: 'textarea' },
]

export default function Placements() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="For Colleges & Universities"
        title="Campus Placement Solutions"
        subtitle="Bridging the gap between MBA talent and India's top corporates — a dedicated placement team at your service."
        breadcrumb="Placements"
      />

      {/* Main */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', marginBottom: '5rem' }} className="plc-grid">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>The Challenge & Our Solution</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Solving India's Biggest Placement Problem
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                These days, getting students placed is the biggest problem faced by colleges, and this is because of the enormous competition existing in the corporate world.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Hence, 3HD Media has created a solution for all colleges across India. 3HD Media has a special team dedicated to final placements for MBA students across all specializations.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '2.25rem' }}>
                This team liaises with various HR personnel from the corporate world and makes sure they attend the campus placements of the colleges who register with us for a particular fee.
              </p>

              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                <a href="#placement-form" className="btn btn-primary btn-lg">Register Your College</a>
                <a href="tel:9820108341" className="btn btn-outline btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                  <Phone size={17} />9820108341
                </a>
              </div>
            </motion.div>

            {/* Right: how it works */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
              <p style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '1.1rem' }}>How It Works</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
                {steps.map((s, i) => (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .15 + i * .09 }}
                    className="step-card"
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: 'var(--g-blue)', color: 'white',
                      fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '.9rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, boxShadow: 'var(--shadow-blue)',
                    }}>
                      {s.num}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--slate-900)', marginBottom: '.25rem' }}>{s.title}</div>
                      <div style={{ fontSize: '.85rem', color: 'var(--slate-500)', lineHeight: 1.55 }}>{s.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Benefits */}
          <div className="grid-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1 }}
                whileHover={{ y: -5 }}
                style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '2rem', transition: 'box-shadow .25s, border-color .25s' }}
                className="benefit-hover"
              >
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1.25rem', boxShadow: 'var(--shadow-blue)' }}>
                  {b.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '.5rem' }}>{b.title}</h3>
                <p style={{ fontSize: '.875rem', color: 'var(--slate-500)', lineHeight: 1.65 }}>{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .plc-grid{grid-template-columns:1fr 1fr!important;}
          .benefit-hover:hover{box-shadow:var(--shadow-lg);border-color:rgba(29,78,216,.15)!important;}
          @media(max-width:900px){.plc-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Form */}
      <section className="section section--alt" id="placement-form">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>Partner With Us</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.6rem' }}>
              Register Your College
            </h2>
            <p style={{ fontSize: '.975rem', color: 'var(--slate-500)' }}>
              Fill up this form and we shall get back to you shortly. For clarifications, call{' '}
              <a href="tel:9820108341" style={{ color: 'var(--blue-500)', fontWeight: 700 }}>9820108341</a>.
            </p>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <ContactForm fields={placementFields} submitLabel="Submit Registration"
                successMessage="Thank you! Our placement team will contact you shortly to discuss next steps." />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 900, color: 'white', marginBottom: '.75rem' }}>
              Need More Information?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.7)', marginBottom: '2rem', maxWidth: '440px', margin: '0 auto 2rem' }}>
              Speak directly to our placements team for any clarification or urgent requirement.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:9820108341" className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                <Phone size={18} />9820108341
              </a>
              <a href="mailto:info@3hdmedia.com" className="btn btn-ghost-light btn-lg">Email Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
