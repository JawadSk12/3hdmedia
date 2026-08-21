import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { company } from '../data/company'

const internshipDomains = [
  { emoji: '📱', title: 'Social Media Marketing',    desc: 'Content creation, scheduling, community management and paid ads.' },
  { emoji: '🌐', title: 'Web Design & Development',  desc: 'Design and build websites, landing pages and digital experiences.' },
  { emoji: '🎙️', title: 'Podcast & Audio Production', desc: 'Record, edit and distribute podcast episodes and audio content.' },
  { emoji: '✍️', title: 'Content Writing & Blogging', desc: 'Write SEO articles, email copy, ebooks and social captions.' },
  { emoji: '📲', title: 'Mobile App Development',    desc: 'Work on iOS and Android app projects alongside our dev team.' },
  { emoji: '📧', title: 'Email Marketing',           desc: 'Design campaigns, write copy, set up automations and analyse results.' },
  { emoji: '🎨', title: 'Graphic Design',             desc: 'Create social posts, ebook layouts, ad creatives and brand assets.' },
  { emoji: '📊', title: 'Digital Marketing Analytics', desc: 'Track performance, build reports and generate data insights.' },
  { emoji: '💼', title: 'Sales & Business Development', desc: 'Learn B2B sales in the digital media industry.' },
  { emoji: '📖', title: 'eBook & Publication Design', desc: 'Layout and design digital books, guides and interactive PDFs.' },
]

const courses = [
  {
    emoji: '📱',
    title: 'Social Media Marketing',
    duration: 'Short-term certificate programme',
    gradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 100%)',
    desc: 'A practical guide to social media strategy, content creation, paid advertising and community management across Instagram, Facebook, LinkedIn and YouTube.',
    modules: ['Platform strategy', 'Content creation & scheduling', 'Paid social advertising', 'Analytics & reporting', 'Reels & short-form video'],
  },
  {
    emoji: '✉️',
    title: 'Email Marketing & Blogs',
    duration: 'Beginner to intermediate',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
    desc: 'Learn to build email campaigns that get results — from strategy and design through to automation and analytics. Includes blog writing for SEO.',
    modules: ['Email strategy & planning', 'Template design', 'Copywriting for email', 'Automation & sequences', 'Blog SEO writing'],
  },
  {
    emoji: '🌐',
    title: 'Website & Digital Presence',
    duration: 'Beginner programme',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    desc: 'Understand how websites work, how to design them effectively and how to make them rank in search engines. Practical and hands-on.',
    modules: ['Web design basics', 'UX principles', 'SEO fundamentals', 'Content management systems', 'Google Analytics'],
  },
]

export default function Learning() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-hero)', minHeight: '60vh', display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.10, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          style={{ width: '350px', height: '350px', bottom: '-60px', left: '-60px', background: 'rgba(20,184,166,0.14)' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Learning</span>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ maxWidth: '760px' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.5rem' }}>
              Internships · Courses · Placements
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem,5vw,3.8rem)',
              fontWeight: 900, color: 'white',
              lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.5rem',
            }}>
              Learn Digital Media<br />
              <span className="text-gradient-brand">With the Experts.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.80, maxWidth: '600px', marginBottom: '2.5rem' }}>
              Internship programmes, digital media certification courses, and campus placement drives for students and freshers across India.
            </p>

            {/* Jump links */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {[
                { label: '🎓 Internships', href: '#internships' },
                { label: '📚 Courses',     href: '#courses' },
                { label: '🏫 Placements',  href: '#placements' },
              ].map(l => (
                <a key={l.href} href={l.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.5rem 1.1rem', borderRadius: '999px', fontSize: '0.83rem', fontWeight: 700,
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
                  color: 'rgba(255,255,255,0.82)', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.82)' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INTERNSHIPS ──────────────────────────────────────────── */}
      <section className="section" id="internships">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }} className="internship-grid">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                🎓 Internship Programme
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Real Projects. Real Experience.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                Our internship programme gives students hands-on experience working on live digital media projects — social media campaigns, websites, podcasts, ebooks, email campaigns and apps.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '1.75rem' }}>
                Suitable for students from MBA, BMS, BMM, BCA, MCA, B.Com, BSc, BBA and all other streams. Work from home available. Certificate issued on completion.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {[
                  'Available across all digital media domains',
                  'Work from home option available',
                  'Certificate issued on completion',
                  'Freshers and students welcome',
                  'Guidance from industry professionals',
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--slate-600)', fontWeight: 600 }}>
                    <CheckCircle size={15} style={{ color: 'var(--blue-600)', flexShrink: 0 }} />
                    {point}
                  </div>
                ))}
              </div>

              <a href={company.contact.phoneHref} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> Apply: {company.contact.phone}
              </a>
            </motion.div>

            {/* Right: domain grid */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '1rem' }}>
                Available Domains
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {internshipDomains.map((domain, i) => (
                  <motion.div
                    key={domain.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    style={{
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      borderRadius: '16px', padding: '1.1rem',
                      transition: 'all 0.25s ease',
                    }}
                    whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
                  >
                    <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{domain.emoji}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--slate-900)', marginBottom: '0.2rem', lineHeight: 1.3 }}>{domain.title}</div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--slate-500)', lineHeight: 1.5 }}>{domain.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.internship-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── COURSES (dark) ───────────────────────────────────────── */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }} id="courses">
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.2, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '450px', height: '450px', top: '-80px', right: '-80px' }}
        />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.14, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-80px', background: 'rgba(20,184,166,0.12)' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading section-heading--dark" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>📚 Courses & Certification</span>
            <h2 style={{ color: 'white' }}>Digital Media Courses.</h2>
            <p>Practical, industry-focused certification courses for students and professionals looking to build in-demand digital media skills.</p>
          </div>

          <div className="grid-3">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '22px', overflow: 'hidden',
                  transition: 'background 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(-5px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Course header */}
                <div style={{
                  background: course.gradient, padding: '2rem', position: 'relative',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <div style={{ fontSize: '2.5rem', zIndex: 1 }}>{course.emoji}</div>
                  <div style={{ zIndex: 1 }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.70)', marginBottom: '0.25rem' }}>
                      {course.duration}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Course body */}
                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.70, marginBottom: '1.25rem' }}>
                    {course.desc}
                  </p>
                  <p style={{ fontSize: '0.70rem', fontWeight: 800, letterSpacing: '0.10em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginBottom: '0.6rem' }}>
                    What You'll Learn
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {course.modules.map(m => (
                      <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.815rem', color: 'rgba(255,255,255,0.58)' }}>
                        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href={company.contact.phoneHref} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} /> Enquire About Courses
            </a>
          </div>
        </div>
      </section>

      {/* ── CAMPUS PLACEMENTS ─────────────────────────────────────── */}
      <section className="section section--alt" id="placements">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="placements-grid">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>
                🏫 Campus Placements
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.4rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Bringing Digital Media Careers to Your Campus.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '1.25rem' }}>
                We partner with colleges and universities across India to conduct campus placement drives — connecting digital media opportunities with students from all streams.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--slate-500)', lineHeight: 1.80, marginBottom: '2rem' }}>
                Whether you're looking for digital media roles in social media, web, audio, apps or content — we can bring on-campus drives, guest lectures and placement opportunities to your institution.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-arrow">
                  Connect With Us <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <a href={company.contact.phoneHref} className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} /> Call Us
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  { emoji: '🎓', title: 'All academic streams welcome',         sub: 'MBA, BMS, BMM, BCA, MCA, B.Com, BSc, Engineering and more' },
                  { emoji: '🌟', title: 'Freshers actively welcome',            sub: 'No prior experience required — we train and develop' },
                  { emoji: '🚌', title: 'On-campus drives available',           sub: 'We come to your college for placement presentations' },
                  { emoji: '📱', title: 'Digital media roles across all formats', sub: 'Social, web, audio, video, apps, content and more' },
                  { emoji: '📜', title: 'Certificate of placement provided',    sub: 'Official documentation for all placed students' },
                  { emoji: '📞', title: 'Direct access to our team',           sub: `Call ${company.contact.phone} to arrange a campus visit` },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 + i * 0.07 }}
                    style={{
                      display: 'flex', gap: '1rem', alignItems: 'flex-start',
                      padding: '1rem 1.25rem', background: 'var(--white)',
                      border: '1px solid var(--border-light)', borderRadius: '14px',
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <div style={{ fontSize: '1.35rem', flexShrink: 0, marginTop: '0.05rem' }}>{f.emoji}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--slate-900)', fontSize: '0.90rem' }}>{f.title}</div>
                      <div style={{ fontSize: '0.80rem', color: 'var(--slate-500)', marginTop: '0.1rem' }}>{f.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.placements-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem,3.5vw,2.65rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Learn, Intern or Get Placed?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Call us or drop an email — we'll discuss the right learning programme for you.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={company.contact.phoneHref} className="btn btn-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> {company.contact.phone}
              </a>
              <a href={`mailto:${company.contact.email}`} className="btn btn-ghost-light btn-lg">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
