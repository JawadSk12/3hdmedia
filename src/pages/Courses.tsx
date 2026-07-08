import { motion } from 'framer-motion'
import { BookOpen, Target, PieChart, Share2, Edit3, Users, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const formats = [
  { emoji: '🕐', title: 'Part-Time',       sub: 'Flexible schedule for working professionals' },
  { emoji: '📚', title: 'Full-Time',        sub: 'Immersive programme with comprehensive coverage' },
  { emoji: '📅', title: 'Weekend Batches', sub: 'Saturday & Sunday sessions — no work disruption' },
  { emoji: '🏢', title: 'In-House Training', sub: 'During or after working hours at your premises' },
]

const topics = [
  { icon: <BookOpen size={15} />, text: 'Introduction to Social Media',             sub: 'Foundations, platforms, and digital landscape overview' },
  { icon: <Target size={15} />,   text: 'Creating a Social Media Strategy',          sub: 'Goal-setting, audience targeting, and campaign planning' },
  { icon: <PieChart size={15} />, text: 'Understanding Paid, Earned & Owned Social Media', sub: 'The three pillars of a complete social media presence' },
  { icon: <Share2 size={15} />,   text: 'Social Sharing',                           sub: 'Virality, engagement, and content distribution tactics' },
  { icon: <Edit3 size={15} />,    text: 'Blogging for Business',                    sub: 'SEO writing, content calendars, and brand storytelling' },
  { icon: <Users size={15} />,    text: 'Finding & Communicating with Influencers', sub: 'Identifying, outreaching, and collaborating with influencers' },
]

const courseFields = [
  { name: 'name',    label: 'Full Name',    placeholder: 'Your full name', required: true,  half: true },
  { name: 'email',   label: 'Email',        placeholder: 'you@email.com',  required: true,  type: 'email', half: true },
  { name: 'phone',   label: 'Phone Number', placeholder: '+91 XXXXX XXXXX', required: true, type: 'tel' },
  { name: 'format',  label: 'Preferred Format',
    options: ['Part-Time', 'Full-Time', 'Weekend Batch', 'In-House Training', 'Not Sure — Advise Me'] },
  { name: 'topic',   label: 'Primary Topic of Interest',
    options: topics.map(t => t.text).concat(['Full Curriculum (All Topics)']) },
  { name: 'message', label: 'Additional Information', placeholder: 'Tell us about your background and goals…', required: true, type: 'textarea' },
]

export default function Courses() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="Professional Training"
        title="Social Media Courses"
        subtitle="Flexible certification programmes designed for professionals, students, and businesses."
        breadcrumb="Courses"
      />

      {/* Programme */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }} className="course-grid">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Programme Details</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Flexible Learning,<br />Certified Results
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.35rem' }}>
                3HD Media offers Part-Time, Full-time and special weekend Certification courses in Social Media. We also offer special in-house training that incorporates during or after working hours.
              </p>
              <div style={{ background: 'var(--blue-10)', border: '1px solid var(--blue-50)', borderLeft: '4px solid var(--blue-400)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
                <p style={{ fontSize: '.95rem', color: 'var(--slate-700)', lineHeight: 1.7 }}>
                  <strong>Duration & Fee Structure:</strong> The duration and fee structure will depend on the topics selected. Contact us to discuss a customised learning plan tailored to your goals.
                </p>
              </div>
              <a href="#course-enquiry" className="btn btn-primary btn-lg">Enquire About Courses</a>
            </motion.div>

            {/* Right: format cards */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
              <div className="grid-2" style={{ gap: '1rem' }}>
                {formats.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .15 + i * .08 }}
                    whileHover={{ y: -5 }}
                    style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '1.6rem', textAlign: 'center', transition: 'box-shadow .25s, border-color .25s', cursor: 'default' }}
                    className="format-hover"
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{f.emoji}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '.3rem' }}>{f.title}</div>
                    <div style={{ fontSize: '.82rem', color: 'var(--slate-500)', lineHeight: 1.5 }}>{f.sub}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Topics */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>Curriculum</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.75rem' }}>
              Topics Covered
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--slate-500)', maxWidth: '600px', margin: '0 auto' }}>
              Our comprehensive social media curriculum is designed to give you practical, industry-relevant skills from day one.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {topics.map((t, i) => (
              <motion.div
                key={t.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .07 }}
                className="check-item"
              >
                <div className="check-icon">{t.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '.975rem' }}>{t.text}</div>
                  <div style={{ fontSize: '.82rem', color: 'var(--slate-500)', marginTop: '.2rem' }}>{t.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Included in all batches */}
          <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(29,78,216,.05), rgba(96,165,250,.08))', border: '1px solid rgba(29,78,216,.12)', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '900px', margin: '3rem auto 0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem', fontSize: '1rem' }}>Included in All Batches</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.7rem' }} className="includes-grid">
              {['Certification on Completion', 'Expert Faculty', 'Live Case Studies', 'Industry Projects', 'Post-Course Support', 'Placement Guidance'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
                  <Check size={15} style={{ color: 'var(--blue-400)', flexShrink: 0 }} />
                  <span style={{ fontSize: '.87rem', color: 'var(--slate-700)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .course-grid,.int-grid{grid-template-columns:1fr 1fr!important;}
          .format-hover:hover{box-shadow:var(--shadow-lg);border-color:rgba(29,78,216,.2)!important;}
          @media(max-width:900px){.course-grid{grid-template-columns:1fr!important;}}
          @media(max-width:640px){.includes-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* Enquiry form */}
      <section className="section section--alt" id="course-enquiry">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>Get Started</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.6rem' }}>
              Course Enquiry
            </h2>
            <p style={{ fontSize: '.975rem', color: 'var(--slate-500)' }}>
              Kindly fill up the form and we shall revert to you within <strong>48 hours</strong>.
            </p>
          </div>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <ContactForm fields={courseFields} submitLabel="Submit Enquiry"
                successMessage="Thank you! We'll respond within 48 hours with course details and fee structure." />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
