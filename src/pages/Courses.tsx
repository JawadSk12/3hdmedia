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
  { icon: <BookOpen size={16} />, text: 'Introduction to Social Media',             sub: 'Foundations, platforms, and digital landscape overview', color: 'var(--accent-coral)' },
  { icon: <Target size={16} />,   text: 'Creating a Social Media Strategy',          sub: 'Goal-setting, audience targeting, and campaign planning', color: 'var(--blue-500)' },
  { icon: <PieChart size={16} />, text: 'Understanding Paid, Earned, and Owned Social Media', sub: 'The three pillars of a complete social media presence', color: 'var(--accent-teal)' },
  { icon: <Share2 size={16} />,   text: 'Social Sharing',                           sub: 'Virality, engagement, and content distribution tactics', color: 'var(--accent-magenta)' },
  { icon: <Edit3 size={16} />,    text: 'Blogging for Business',                    sub: 'SEO writing, content calendars, and brand storytelling', color: 'var(--accent-green)' },
  { icon: <Users size={16} />,    text: 'Finding & Communicating with Influencers', sub: 'Identifying, outreaching, and collaborating with influencers', color: 'var(--blue-600)' },
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

            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Programme Details</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Flexible Learning,<br />Certified Results
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.35rem' }}>
                3HDMedia offers Part-Time, Full-time and special weekend Certification courses in Social Media. We also offer special in-house training that incorporates during or after working hours. Duration of the Training: The duration and fee structure will depend on the topics selected. The topics covered will be the following.
              </p>
              <a href="#course-enquiry" className="btn btn-primary btn-lg">Enquire About Courses</a>
            </motion.div>

            {/* Right Column: format cards */}
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
                <div style={{
                  width: '32px', height: '32px',
                  borderRadius: '50%',
                  background: `${t.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: t.color,
                  boxShadow: `0 2px 6px ${t.color}20`
                }}>
                  {t.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '.975rem' }}>{t.text}</div>
                  <div style={{ fontSize: '.82rem', color: 'var(--slate-500)', marginTop: '.2rem' }}>{t.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Included in all batches */}
          <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(11,63,160,.05), rgba(42,169,242,.08))', border: '1px solid rgba(11,63,160,.12)', borderRadius: 'var(--radius-xl)', padding: '2rem', maxWidth: '900px', margin: '3rem auto 0' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1rem', fontSize: '1rem' }}>Included in All Batches</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.7rem' }} className="includes-grid">
              {['Certification on Completion', 'Expert Faculty', 'Live Case Studies', 'Industry Projects', 'Post-Course Support', 'Placement Guidance'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
                  <Check size={15} style={{ color: 'var(--blue-500)', flexShrink: 0 }} />
                  <span style={{ fontSize: '.87rem', color: 'var(--slate-700)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .course-grid,.int-grid{grid-template-columns:1fr 1fr!important;}
          .format-hover:hover{box-shadow:var(--shadow-lg);border-color:rgba(11,63,160,.2)!important;}
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
              Kindly fill-up the form below and we shall revert to you within 48 hours
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
