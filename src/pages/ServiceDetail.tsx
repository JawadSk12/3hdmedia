import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ChevronRight, Phone } from 'lucide-react'
import { services } from '../data/services'
import { company } from '../data/company'

/* ── Per-service rich content ──────────────────────────────────── */
const richContent: Record<string, {
  tagline: string
  whatItIs: string
  whoFor: string[]
  process: { step: string; desc: string }[]
  includes: string[]
  faqs: { q: string; a: string }[]
}> = {
  'social-media': {
    tagline: 'Your brand, active on every platform -- every day.',
    whatItIs: 'Social media marketing is the art and science of building your brand\'s presence across platforms like Instagram, Facebook, LinkedIn, YouTube and WhatsApp. Done right, it turns followers into customers, builds community and keeps your brand top-of-mind 24/7.',
    whoFor: ['Brands launching a social media presence', 'Businesses struggling to post consistently', 'Companies running paid social campaigns', 'Anyone who needs content creation + strategy together'],
    process: [
      { step: 'Brand & Platform Audit', desc: 'We analyse your current presence, competitors and audience before deciding on strategy.' },
      { step: 'Content Strategy', desc: 'We define your content pillars, tone of voice, visual style and posting schedule.' },
      { step: 'Creative Production', desc: 'Our team creates reels, carousels, stories and static posts -- original content, every week.' },
      { step: 'Publishing & Management', desc: 'We publish on schedule, respond to comments and manage your community.' },
      { step: 'Paid Campaigns', desc: 'When relevant, we run and optimise targeted paid ad campaigns for reach and conversions.' },
      { step: 'Reporting', desc: 'Monthly performance reports with engagement, reach, follower growth and campaign results.' },
    ],
    includes: ['Content calendar (monthly)', 'Instagram Reels & Stories', 'Facebook posts & ads', 'LinkedIn content', 'YouTube Shorts', 'Paid social campaign management', 'Community management', 'Monthly analytics report'],
    faqs: [
      { q: 'How many posts do you create per month?', a: 'This depends on your plan. We typically start with 12–20 posts per month across platforms and scale from there.' },
      { q: 'Do you manage paid ads too?', a: 'Yes. We handle Meta Ads (Instagram + Facebook), YouTube and LinkedIn campaigns as part of our social media service.' },
      { q: 'Can you manage multiple platforms simultaneously?', a: 'Absolutely -- we manage Instagram, Facebook, LinkedIn, YouTube and WhatsApp simultaneously as part of a unified strategy.' },
    ],
  },
  'websites': {
    tagline: 'Beautiful, fast and built to convert.',
    whatItIs: 'Your website is your most important digital asset. It\'s where customers form their first impression, make decisions and take action. We design and build custom websites that look outstanding, load fast, rank on Google and convert visitors into customers.',
    whoFor: ['Businesses without a website or with an outdated one', 'Brands launching a new product or service', 'Companies that need a high-converting landing page', 'Anyone who needs a fast, SEO-ready digital presence'],
    process: [
      { step: 'Discovery & Brief', desc: 'We understand your business, target audience, goals and competitors.' },
      { step: 'UX Design & Wireframes', desc: 'We map out the site structure, page layouts and user flows before design begins.' },
      { step: 'Visual Design', desc: 'Our designers create a complete visual design -- typography, colour, imagery and components.' },
      { step: 'Development', desc: 'We build the site -- clean code, mobile-first, optimised for performance and accessibility.' },
      { step: 'SEO Setup', desc: 'We configure on-page SEO, meta tags, schema markup and Google Analytics.' },
      { step: 'Launch & Handover', desc: 'We test, launch and hand over the CMS with training so you can manage content yourself.' },
    ],
    includes: ['Custom UI/UX design', 'Responsive mobile-first development', 'SEO on-page setup', 'CMS integration (WordPress, Webflow, or custom)', 'Google Analytics & Search Console setup', 'Speed optimisation', 'Contact forms & integrations', 'Post-launch support'],
    faqs: [
      { q: 'How long does a website take to build?', a: 'A standard business website typically takes 3–6 weeks from brief to launch, depending on complexity.' },
      { q: 'Do you work with WordPress?', a: 'Yes -- we build on WordPress, Webflow and custom React/Next.js depending on your requirements.' },
      { q: 'Will I be able to update the website myself?', a: 'Yes. We set up a CMS and provide training so your team can manage content without technical knowledge.' },
    ],
  },
  'ebooks-publications': {
    tagline: 'Establish authority. Generate leads. Stand out.',
    whatItIs: 'A well-designed eBook or digital publication positions your brand as an industry authority, generates qualified leads and gives your audience real value. We handle everything -- from the initial concept and writing brief through to editorial design and digital distribution.',
    whoFor: ['Businesses building thought leadership', 'Brands looking for premium lead magnets', 'Companies creating industry guides or whitepapers', 'Educators and coaches publishing digital content'],
    process: [
      { step: 'Topic & Brief', desc: 'We define the topic, audience, objective and key messages for your publication.' },
      { step: 'Structure & Outline', desc: 'We map out the chapters, sections and content flow before writing begins.' },
      { step: 'Content Writing', desc: 'Our writers produce clear, engaging, well-researched content aligned to your brief.' },
      { step: 'Editorial Design', desc: 'Our designers lay out the publication with professional typography, visuals and branding.' },
      { step: 'Digital Delivery', desc: 'We produce the final files -- PDF, interactive PDF, EPUB and web-optimised versions.' },
      { step: 'Promotional Graphics', desc: 'We create social media graphics and landing page visuals to promote the publication.' },
    ],
    includes: ['Topic research & content planning', 'Written content (ghostwritten)', 'Professional editorial design', 'Infographics & data visualisation', 'PDF & EPUB formats', 'Cover design', 'Promotional social graphics', 'Landing page design'],
    faqs: [
      { q: 'Do you write the content or do I provide it?', a: 'We can do both. We write from scratch (ghostwritten) or design and layout your existing content.' },
      { q: 'Can you create whitepapers and industry reports?', a: 'Yes -- we produce eBooks, whitepapers, annual reports, look-books, brochures and digital magazines.' },
      { q: 'What formats do you deliver in?', a: 'Standard delivery is PDF and interactive PDF. We can also produce EPUB for e-readers and web-embedded versions.' },
    ],
  },
  'podcasts-audio': {
    tagline: 'Your voice. Every platform. Professional quality.',
    whatItIs: 'Podcasting is one of the most powerful content formats for building deep audience engagement and brand authority. We take your podcast from concept to launch -- and keep it running with regular production, editing and distribution across all major platforms.',
    whoFor: ['Brands wanting to launch a podcast from scratch', 'Businesses with existing shows needing production support', 'Thought leaders and coaches creating audio content', 'Companies creating internal or training audio content'],
    process: [
      { step: 'Concept & Format', desc: 'We develop the show concept, format, episode structure and content pillars.' },
      { step: 'Branding & Artwork', desc: 'We design the podcast artwork, intro/outro and brand identity for your show.' },
      { step: 'Recording Setup', desc: 'We advise on or manage your recording setup -- remote or in-studio.' },
      { step: 'Editing & Mixing', desc: 'Our audio team edits, mixes and masters each episode to broadcast quality.' },
      { step: 'Show Notes & Transcripts', desc: 'We write SEO-optimised show notes and full episode transcripts.' },
      { step: 'Distribution', desc: 'We distribute to Spotify, Apple Podcasts, Google Podcasts, Amazon Music and more.' },
    ],
    includes: ['Show concept & format development', 'Podcast artwork & branding', 'Episode editing & mixing', 'Intro/Outro production', 'Show notes & transcripts', 'Distribution (Spotify, Apple, Google, Amazon)', 'Monthly listener analytics', 'Promotional audiograms'],
    faqs: [
      { q: 'Do I need my own recording equipment?', a: 'Basic equipment is enough to get started. We can advise on a setup that fits your budget and record remotely via high-quality platforms.' },
      { q: 'How long does it take to launch a new podcast?', a: 'A typical new podcast launch takes 3–4 weeks from brief -- including branding, recording, editing and distribution setup.' },
      { q: 'Which platforms do you distribute to?', a: 'Spotify, Apple Podcasts, Google Podcasts, Amazon Music, Pocket Casts, Overcast and all major directories via RSS.' },
    ],
  },
  'email-marketing-blogs': {
    tagline: 'The highest-ROI channel in digital marketing -- done right.',
    whatItIs: 'Email marketing consistently delivers the best return of any digital channel. We design, write and manage campaigns that get opened, read and acted upon -- from welcome sequences and newsletters to promotional campaigns and automated drip flows. We also produce SEO-optimised blog content that ranks on Google and builds long-term audience.',
    whoFor: ['Businesses with an email list not being utilised', 'Brands launching new email campaigns or automations', 'Companies needing consistent blog content for SEO', 'Anyone wanting to build and nurture an email audience'],
    process: [
      { step: 'Audit & Strategy', desc: 'We audit your existing email setup and define a campaign strategy aligned to your goals.' },
      { step: 'List Segmentation', desc: 'We segment your audience for relevant, personalised messaging.' },
      { step: 'Template Design', desc: 'We design branded email templates that look great on every device.' },
      { step: 'Content & Copywriting', desc: 'We write compelling email copy -- subject lines, body copy and CTAs that drive action.' },
      { step: 'Automation Setup', desc: 'We build automation sequences -- welcome flows, abandoned cart, re-engagement and more.' },
      { step: 'Blog Content', desc: 'We produce SEO-optimised blog articles that drive organic traffic and build authority.' },
    ],
    includes: ['Email strategy & planning', 'List segmentation & management', 'Custom email template design', 'Email copywriting', 'Automation sequences (welcome, nurture, re-engagement)', 'A/B testing', 'Campaign analytics & reporting', 'SEO blog articles (monthly)'],
    faqs: [
      { q: 'Which email platforms do you work with?', a: 'We work with Mailchimp, Klaviyo, HubSpot, ActiveCampaign, ConvertKit and most major platforms.' },
      { q: 'How many emails do you send per month?', a: 'This depends on your plan. A typical setup includes 4–8 campaign emails per month, plus automation sequences running continuously.' },
      { q: 'Can you help us grow our email list?', a: 'Yes -- list growth strategy (lead magnets, landing pages, opt-in forms) is part of our email marketing service.' },
    ],
  },
  'mobile-apps': {
    tagline: 'Apps users love. Built to perform.',
    whatItIs: 'A well-built mobile app can transform how your customers interact with your brand -- but only if the UX is right, the performance is solid and the design is outstanding. We design and develop iOS and Android apps from scratch, handling everything from the first wireframe to App Store submission.',
    whoFor: ['Businesses needing a customer-facing mobile app', 'Startups building their first mobile product', 'Companies with an existing app needing a redesign', 'Brands wanting to extend their service to mobile'],
    process: [
      { step: 'Discovery & Requirements', desc: 'We define the app\'s purpose, target users, features and technical requirements.' },
      { step: 'UX Research & Wireframes', desc: 'We map user journeys and create wireframes for every screen before design begins.' },
      { step: 'UI Design', desc: 'Our designers create a complete, pixel-perfect UI with a design system built for the app.' },
      { step: 'Development', desc: 'We build the app using React Native (iOS + Android) or native code -- clean, performant and tested.' },
      { step: 'Backend & API Integration', desc: 'We build or integrate the backend, database and third-party APIs the app depends on.' },
      { step: 'Testing & Launch', desc: 'We test across devices, submit to the App Store and Google Play, and support the launch.' },
    ],
    includes: ['UX research & user journey mapping', 'Wireframes for all screens', 'Full UI design system', 'iOS & Android development (React Native)', 'Backend & API development', 'Third-party integrations', 'QA testing', 'App Store & Google Play submission'],
    faqs: [
      { q: 'Do you build for both iOS and Android?', a: 'Yes. We use React Native to build a single codebase that works on both iOS and Android -- saving time and cost without compromising quality.' },
      { q: 'How long does it take to build a mobile app?', a: 'A standard app typically takes 8–16 weeks from brief to App Store launch, depending on complexity and feature set.' },
      { q: 'Do you handle backend development too?', a: 'Yes -- we build the full stack including backend, database, APIs and third-party integrations as part of our mobile app service.' },
    ],
  },
}

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const navigate = useNavigate()

  const service = services.find(s => s.id === serviceId)
  const content = serviceId ? richContent[serviceId] : null

  useEffect(() => {
    if (!service) navigate('/services', { replace: true })
    window.scrollTo(0, 0)
  }, [service, navigate])

  if (!service || !content) return null

  // Related services (all except current)
  const related = services.filter(s => s.id !== service.id).slice(0, 3)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--dark-900)',
        minHeight: '62vh',
        display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '600px', height: '600px', top: '-150px', right: '-100px', background: service.color + '20' }}
        />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.10, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-60px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb" style={{ marginBottom: '2rem' }}>
            <Link to="/">Home</Link><span>/</span>
            <Link to="/services">Services</Link><span>/</span>
            <span>{service.title}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="service-hero-grid">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              {/* Service badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                background: service.color + '18', border: `1px solid ${service.color}35`,
                borderRadius: '999px', padding: '0.45rem 1.1rem',
                fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
                color: service.color, marginBottom: '1.75rem',
              }}>
                <span style={{ fontSize: '1rem' }}>{service.emoji}</span>
                {service.title}
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 900, color: 'white',
                lineHeight: 1.08, letterSpacing: '-0.035em',
                marginBottom: '1.25rem',
              }}>
                {content.tagline}
              </h1>

              <p style={{
                fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.80, maxWidth: '560px', marginBottom: '2.5rem',
              }}>
                {service.longDesc}
              </p>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg btn-arrow">
                  Get a Proposal <ArrowRight size={18} className="arrow-icon" />
                </Link>
                <a href={company.contact.phoneHref} className="btn btn-outline-white btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} /> {company.contact.phone}
                </a>
              </div>
            </motion.div>

            {/* Right: quick-includes card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="service-hero-card"
            >
              <div style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(20px)', borderRadius: '24px', padding: '2.25rem',
              }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '18px',
                  background: service.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.75rem', marginBottom: '1.5rem',
                  boxShadow: `0 8px 24px ${service.color}35`,
                }}>
                  {service.emoji}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '0.35rem' }}>
                  What's Included
                </h3>
                <p style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.25rem' }}>
                  Core deliverables in our {service.title} service
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {service.deliverables.map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.87rem', color: 'rgba(255,255,255,0.78)', fontWeight: 600 }}>
                      <CheckCircle size={14} style={{ color: service.color, flexShrink: 0 }} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.service-hero-grid{grid-template-columns:1fr!important;}.service-hero-card{display:none!important;}}`}</style>
      </section>

      {/* ── WHAT IT IS ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="service-what-grid">

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>What It Is</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                {service.title} by 3HD Media.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1.02rem', color: 'var(--slate-600)', lineHeight: 1.82, marginBottom: '2rem' }}>
                {content.whatItIs}
              </p>

              {/* Who it\'s for */}
              <div style={{ background: 'var(--slate-50)', border: '1px solid var(--border-light)', borderRadius: '18px', padding: '1.75rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--slate-400)', marginBottom: '1rem' }}>
                  This is for you if…
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {content.whoFor.map((w, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.885rem', color: 'var(--slate-700)', fontWeight: 600 }}>
                      <CheckCircle size={14} style={{ color: service.color, flexShrink: 0, marginTop: '0.15rem' }} />
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>Key Benefits</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
                What You Get.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {service.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '1rem',
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      borderRadius: '16px', padding: '1.25rem',
                      transition: 'all 0.25s',
                    }}
                    whileHover={{ x: 5, borderColor: service.color + '30', boxShadow: `0 4px 20px ${service.color}10` }}
                  >
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '10px', flexShrink: 0,
                      background: service.color + '12', border: `1px solid ${service.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.78rem', color: service.color,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p style={{ fontSize: '0.915rem', color: 'var(--slate-700)', lineHeight: 1.55, fontWeight: 600 }}>{b}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.service-what-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--dark-900)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb"
          animate={{ scale: [1, 1.18, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-100px', background: service.color + '15' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading section-heading--dark" style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>How It Works</span>
            <h2 style={{ color: 'white' }}>Our {service.title} Process.</h2>
            <p>Step by step -- how we plan, produce and deliver your {service.title.toLowerCase()} service.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="process-grid-3">
            {content.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '22px', padding: '2rem',
                  position: 'relative', overflow: 'hidden',
                  transition: 'all 0.3s',
                }}
                whileHover={{ background: 'rgba(255,255,255,0.08)', y: -4 }}
              >
                <div style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900,
                  color: service.color + '18', lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: service.color + '18', border: `1px solid ${service.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.85rem',
                  color: service.color, marginBottom: '1.1rem',
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
                  {step.step}
                </h3>
                <p style={{ fontSize: '0.855rem', color: 'rgba(255,255,255,0.52)', lineHeight: 1.68 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.process-grid-3{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:580px){.process-grid-3{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── FULL INCLUDES ─────────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="includes-grid">

            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1.25rem' }}>Deliverables</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Everything That\'s Included.
              </h2>
              <div className="divider-blue" />
              <p style={{ fontSize: '1rem', color: 'var(--slate-600)', lineHeight: 1.80, marginBottom: '2rem' }}>
                A complete breakdown of what you receive when you work with 3HD Media on {service.title}.
              </p>
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg btn-arrow">
                  Get Started <ArrowRight size={18} className="arrow-icon" />
                </Link>
                <a href={company.contact.phoneHref} className="btn btn-outline btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} /> Call Us
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                {content.includes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.55rem',
                      background: 'var(--white)', border: '1px solid var(--border-light)',
                      borderRadius: '14px', padding: '0.9rem',
                      fontSize: '0.82rem', fontWeight: 600, color: 'var(--slate-700)',
                      lineHeight: 1.4,
                    }}
                  >
                    <CheckCircle size={13} style={{ color: service.color, flexShrink: 0, marginTop: '0.12rem' }} />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:900px){.includes-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-heading" style={{ marginBottom: '3rem' }}>
            <span className="eyebrow eyebrow-blue" style={{ marginBottom: '1rem' }}>FAQs</span>
            <h2>Common Questions About<br />{service.title}.</h2>
          </div>
          <div style={{ maxWidth: '780px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {content.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  background: 'var(--white)', border: '1px solid var(--border-light)',
                  borderRadius: '18px', padding: '1.75rem',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.65rem' }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.905rem', color: 'var(--slate-500)', lineHeight: 1.70 }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="grid-mesh-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow eyebrow-blue" style={{ marginBottom: '0.5rem' }}>More Services</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900, color: 'var(--slate-900)', letterSpacing: '-0.025em' }}>
                Explore Our Other Services.
              </h2>
            </div>
            <Link to="/services" className="btn btn-outline btn-arrow" style={{ flexShrink: 0 }}>
              All Services <ChevronRight size={14} className="arrow-icon" />
            </Link>
          </div>

          <div className="grid-3">
            {related.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${s.id}`}
                  style={{
                    display: 'block', textDecoration: 'none',
                    background: 'var(--white)', border: '1px solid var(--border-light)',
                    borderRadius: '22px', padding: '2rem',
                    transition: 'all 0.28s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = s.color + '30' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
                >
                  <div style={{ position: 'relative', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${s.color}00, ${s.color}, ${s.color}00)`, marginBottom: '1.5rem', borderRadius: '999px' }} />
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.emoji}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--slate-900)', marginBottom: '0.5rem' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.855rem', color: 'var(--slate-500)', lineHeight: 1.65, marginBottom: '1.1rem' }}>
                    {s.shortDesc}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.83rem', fontWeight: 700, color: s.color }}>
                    Learn more <ChevronRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.emoji}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Ready to Get Started with<br />{service.title}?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.78 }}>
              Tell us about your brand and we\'ll put together a proposal tailored to your goals and budget.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-xl btn-arrow">
                Get a Free Proposal <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <a href={company.contact.phoneHref} className="btn btn-ghost-light btn-xl" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} /> {company.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
