import { motion } from 'framer-motion'
import { Code2, TrendingUp, Megaphone, Landmark, Headphones, PenLine, Zap, Phone, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'

const jobs = [
  { icon: <Code2 size={20} />,       title: 'Technical (IT)',      sub: 'Web, app, and digital infrastructure roles',        color: 'var(--blue-500)' },
  { icon: <TrendingUp size={20} />,  title: 'Sales',               sub: 'Business development and client acquisition',        color: 'var(--accent-teal)' },
  { icon: <Megaphone size={20} />,   title: 'Marketing',           sub: 'Digital campaigns, brand and social strategy',       color: 'var(--accent-magenta)' },
  { icon: <Landmark size={20} />,    title: 'Finance',             sub: 'Accounting, analysis, and financial planning',       color: '#9333EA' },
  { icon: <Headphones size={20} />,  title: 'Client Servicing',    sub: 'Account management and client success',              color: '#0891B2' },
  { icon: <PenLine size={20} />,     title: 'Journalism',          sub: 'Content creation, reporting, and digital media',     color: 'var(--accent-coral)' },
  { icon: <Zap size={20} />,         title: 'Excitement Manager',  sub: 'Energy, events, and brand experience',               color: '#EF4444' },
]

const stats = [
  { num: '₹5K Cr+', label: 'Current Industry Size' },
  { num: '2× Growth', label: 'Expected Size by 2024' },
  { num: 'Top 3',   label: "India's Fastest-Growing Sector" },
]

export default function Career() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .4 }}>
      <PageHero
        eyebrow="Join Our Team"
        title="Career at 3HD Media"
        subtitle="Step into India's fastest-growing digital media industry. Freshers welcome — multiple openings across all domains."
        breadcrumb="Career"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', gap: '5rem', alignItems: 'start' }} className="career-grid">

            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="label-chip label-chip-blue" style={{ marginBottom: '1rem' }}>Opportunity Awaits</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)', marginBottom: '.8rem' }}>
                Be Part of the Digital Revolution
              </h2>
              <div className="divider-blue" />

              <div style={{ background: 'var(--blue-10)', border: '1px solid var(--blue-50)', borderLeft: '4px solid var(--blue-400)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '.975rem', color: 'var(--slate-700)', lineHeight: 1.8 }}>
                  Here comes an opportunity to join hands with 3HD Media, the pioneers in digital media. The digital media is a fast-growing industry & today the total digital media spend in India is approximately five thousand Crores & this is expected to become ten thousand Crores by the year 2024.
                </p>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Just to give you an example, if Facebook was a country, it could be the 3rd largest country in the world with the highest per capita income. Aren't you excited about this?
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.85, marginBottom: '2rem' }}>
                So come join us — we have various openings in the following categories. We also accept freshers for all the below mentioned job categories, so what are you waiting for? Call us for an appointment on <a href="tel:02266661314" style={{ fontWeight: 700, color: 'var(--blue-600)', borderBottom: '1px dashed currentColor' }}>022-66661314</a>.
              </p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '2.25rem' }}>
                {stats.map(s => (
                  <div key={s.label} style={{ background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 900, color: 'var(--blue-600)', lineHeight: 1, marginBottom: '.35rem' }}>{s.num}</div>
                    <div style={{ fontSize: '.78rem', color: 'var(--slate-500)', lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Freshers badge */}
              <div style={{ background: 'rgba(34,197,94,.07)', border: '1px solid rgba(34,197,94,.2)', borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '2rem' }}>
                <CheckCircle size={20} style={{ color: '#16A34A', flexShrink: 0 }} />
                <p style={{ fontSize: '.9rem', fontWeight: 600, color: '#166534' }}>Freshers are welcome for <em>all</em> the job categories listed!</p>
              </div>

              <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                <a href="tel:02266661314" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                  <Phone size={18} />
                  Call 022-66661314
                </a>
                <a href="mailto:info@3hdmedia.com" className="btn btn-outline btn-lg">
                  Send Your CV
                </a>
              </div>
            </motion.div>

            {/* Right Column: job categories tags/grid */}
            <div>
              <p style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '1.1rem' }}>
                Job Categories
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .07 }}
                    whileHover={{ x: 4 }}
                    style={{
                      display: 'flex', gap: '1rem', alignItems: 'center',
                      background: 'var(--white)',
                      border: '1px solid var(--slate-200)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.1rem 1.35rem',
                      cursor: 'default',
                      transition: 'box-shadow .25s, border-color .25s',
                    }}
                    className="job-card-hover"
                  >
                    <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: `${job.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: job.color, flexShrink: 0 }}>
                      {job.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '.975rem' }}>{job.title}</div>
                      <div style={{ fontSize: '.82rem', color: 'var(--slate-500)', marginTop: '.1rem' }}>{job.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .career-grid{grid-template-columns:1.12fr 0.88fr!important;}
          .job-card-hover:hover{box-shadow:var(--shadow-md);border-color:rgba(11,63,160,.15)!important;}
          @media(max-width:900px){.career-grid{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,3.5vw,2.2rem)', fontWeight: 900, color: 'white', marginBottom: '.75rem' }}>
              Ready to Kickstart Your Career?
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.7)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
              Call us to schedule an appointment. We're excited to meet driven, passionate individuals.
            </p>
            <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:02266661314" className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
                <Phone size={18} />
                022-66661314
              </a>
              <a href="mailto:info@3hdmedia.com" className="btn btn-ghost-light btn-lg">Send an Email</a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
