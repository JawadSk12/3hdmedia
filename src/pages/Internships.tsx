import { motion } from 'framer-motion'
import { Map, RefreshCw, UserCheck, GraduationCap, TrendingUp, Landmark, Users, Share2, Megaphone, Radio, PenLine, Calendar, FileText, PlusCircle, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const disciplines = [
  { icon: <TrendingUp size={14} />, label: 'Marketing' },
  { icon: <Landmark size={14} />,   label: 'Finance' },
  { icon: <Users size={14} />,      label: 'Human Resources' },
  { icon: <Share2 size={14} />,     label: 'Social Media' },
  { icon: <Megaphone size={14} />,  label: 'Advertising' },
  { icon: <Radio size={14} />,      label: 'Public Relations' },
  { icon: <PenLine size={14} />,    label: 'Journalism' },
  { icon: <Calendar size={14} />,   label: 'Events' },
  { icon: <FileText size={14} />,   label: 'Content Writing' },
  { icon: <PlusCircle size={14} />, label: '& Many More' },
]

const features = [
  { icon: <Map size={17} />, text: 'Pan-India opportunities — available in all cities' },
  { icon: <RefreshCw size={17} />, text: 'Projects updated regularly based on current needs' },
  { icon: <UserCheck size={17} />, text: 'Dedicated monitoring and mentorship for all interns' },
  { icon: <GraduationCap size={17} />, text: 'Open to UG, Graduates, and Post-Graduates (all streams)' },
]

const applyFields = [
  { name: 'name',          label: 'Full Name',        placeholder: 'Your full name',      required: true,  half: true },
  { name: 'email',         label: 'Email',            placeholder: 'you@email.com',       required: true,  type: 'email', half: true },
  { name: 'phone',         label: 'Phone Number',     placeholder: '+91 XXXXX XXXXX',     required: true,  type: 'tel', half: true },
  { name: 'qualification', label: 'Qualification',    required: true,  half: true,
    options: ['Undergraduate (currently pursuing)', 'Graduate', 'Post Graduate / MBA'] },
  { name: 'area',          label: 'Area of Interest', required: true,
    options: disciplines.slice(0, 9).map(d => d.label).concat(['Other']) },
  { name: 'city',          label: 'City / Location',  placeholder: 'Your city' },
  { name: 'message',       label: 'Tell Us About Yourself', placeholder: 'Share your interests and what you hope to gain…', required: true, type: 'textarea' },
]

/* ── Minimal CSS Collaboration illustration ─────────────────── */
function CollabIllustration() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '320px',
      height: '180px',
      background: 'linear-gradient(135deg, rgba(11,63,160,.03), rgba(42,169,242,.08))',
      border: '1px dashed rgba(11,63,160,.2)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      margin: '1.5rem auto 0',
      overflow: 'hidden',
    }}>
      {/* Network Nodes */}
      <div style={{ position: 'absolute', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(42,169,242,.1)', top: '15px', left: '15px' }} />
      <div style={{ position: 'absolute', width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(232,115,95,.08)', bottom: '20px', right: '30px' }} />

      <div style={{ display: 'flex', gap: '1.5rem', zIndex: 1, alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '5px' }}>👥</div>
          <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--slate-500)', textTransform: 'uppercase' }}>Active Mentoring</div>
        </div>
        <div style={{ fontSize: '20px', color: 'var(--blue-400)' }}>➔</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '5px' }}>💼</div>
          <div style={{ fontSize: '10px', fontWeight: '700', color: 'var(--slate-500)', textTransform: 'uppercase' }}>Live Projects</div>
        </div>
      </div>
    </div>
  )
}

export default function Internships() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="Student Opportunities"
        title="Internships & Live Projects"
        subtitle="Real-world experience across India for undergraduates, graduates, and post-graduates in a wide range of disciplines."
        breadcrumb="Internships"
      />

      {/* About section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'start' }} className="int-grid">

            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>About the Programme</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Learn. Apply. Grow.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.35rem' }}>
                3HDMedia offers Internships and Live Projects all over India for Undergraduates, Graduates, and Post Graduates in Marketing, Finance, Human Resources, Social Media, Advertising, Public Relations, Journalism, Events, Content writing, etc.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '2rem' }}>
                We have a team that constantly changes the projects and internships depending on the need of the hour and monitors the students who undertake such projects and internships.
              </p>

              {/* Features list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem', marginBottom: '2.25rem' }}>
                {features.map((f, i) => (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .07 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '.85rem', padding: '1rem 1.2rem', background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-lg)' }}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: 'var(--g-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white', boxShadow: 'var(--shadow-blue)' }}>
                      {f.icon}
                    </div>
                    <span style={{ fontSize: '.93rem', fontWeight: 600, color: 'var(--slate-800)' }}>{f.text}</span>
                  </motion.div>
                ))}
              </div>

              <a href="#apply" className="btn btn-primary btn-lg">Apply for Internship</a>
            </motion.div>

            {/* Right Column: tag list + illustration */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
              <p style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '1.1rem' }}>
                Disciplines Offered
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', marginBottom: '1.5rem' }}>
                {disciplines.map(d => (
                  <span key={d.label} className="tag-pill">
                    {d.icon}
                    {d.label}
                  </span>
                ))}
              </div>

              {/* Supporting Graphic */}
              <CollabIllustration />

              {/* Who can apply card */}
              <div style={{ background: 'linear-gradient(135deg, rgba(11,63,160,.05), rgba(42,169,242,.08))', border: '1px solid rgba(11,63,160,.12)', borderRadius: 'var(--radius-xl)', padding: '2rem', marginTop: '2rem' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '1.1rem' }}>
                  Who Can Apply?
                </h4>
                {[
                  'Undergraduates (all streams)',
                  'Graduates (all disciplines)',
                  'Post Graduates / MBA',
                  'Students from anywhere in India',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.65rem', marginBottom: '.7rem' }}>
                    <Check size={17} style={{ color: 'var(--blue-500)', flexShrink: 0 }} />
                    <span style={{ fontSize: '.9rem', color: 'var(--slate-700)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.int-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* Apply form */}
      <section className="section section--alt" id="apply">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="label-chip label-chip-blue" style={{ marginBottom: '.85rem' }}>Applications</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.3rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.6rem' }}>
              Apply for an Internship
            </h2>
            <p style={{ fontSize: '.975rem', color: 'var(--slate-500)' }}>Fill in your details and our team will match you with the right opportunity.</p>
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}
            >
              <ContactForm
                fields={applyFields}
                submitLabel="Submit Application"
                successMessage="Application submitted! Our team will review it and get back to you soon."
                accentColor="var(--blue-600)"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
