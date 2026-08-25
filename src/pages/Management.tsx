import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Crown, Shield, Compass, Briefcase, Sparkles, Megaphone, TrendingUp,
  DollarSign, Users, Cpu, Layers, Scale, Palette, Target, FileText,
  UserPlus, Code, HeartHandshake, PhoneCall, Star, Settings, GitBranch,
  Flame, BarChart3, MessageSquare, Search, X, ArrowRight, CheckCircle2,
  ChevronDown, LayoutGrid, Network, Info
} from 'lucide-react'
import { company } from '../data/company'

// Icon mapping helper
const ICON_MAP: Record<string, React.ReactNode> = {
  Crown: <Crown size={20} />,
  Shield: <Shield size={20} />,
  Compass: <Compass size={20} />,
  Briefcase: <Briefcase size={20} />,
  Sparkles: <Sparkles size={20} />,
  Megaphone: <Megaphone size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  DollarSign: <DollarSign size={20} />,
  Users: <Users size={20} />,
  Cpu: <Cpu size={20} />,
  Layers: <Layers size={20} />,
  Scale: <Scale size={20} />,
  Palette: <Palette size={20} />,
  Target: <Target size={20} />,
  FileText: <FileText size={20} />,
  UserPlus: <UserPlus size={20} />,
  Code: <Code size={20} />,
  HeartHandshake: <HeartHandshake size={20} />,
  PhoneCall: <PhoneCall size={20} />,
  Star: <Star size={20} />,
  Settings: <Settings size={20} />,
  GitBranch: <GitBranch size={20} />,
  Flame: <Flame size={20} />,
  BarChart3: <BarChart3 size={20} />,
  MessageSquare: <MessageSquare size={20} />,
}

// Color schemes for tiers
const BADGE_STYLES: Record<string, { bg: string; text: string; border: string; glow: string; dot: string }> = {
  amber: { bg: 'rgba(245,158,11,0.10)', text: '#F59E0B', border: 'rgba(245,158,11,0.25)', glow: 'rgba(245,158,11,0.20)', dot: '#F59E0B' },
  blue: { bg: 'rgba(37,99,235,0.10)', text: '#2563EB', border: 'rgba(37,99,235,0.25)', glow: 'rgba(37,99,235,0.20)', dot: '#2563EB' },
  purple: { bg: 'rgba(124,58,237,0.10)', text: '#7C3AED', border: 'rgba(124,58,237,0.25)', glow: 'rgba(124,58,237,0.20)', dot: '#7C3AED' },
  teal: { bg: 'rgba(20,184,166,0.10)', text: '#0D9488', border: 'rgba(20,184,166,0.25)', glow: 'rgba(20,184,166,0.20)', dot: '#0D9488' },
  indigo: { bg: 'rgba(79,70,229,0.10)', text: '#4F46E5', border: 'rgba(79,70,229,0.25)', glow: 'rgba(79,70,229,0.20)', dot: '#4F46E5' },
  cyan: { bg: 'rgba(6,182,212,0.10)', text: '#0891B2', border: 'rgba(6,182,212,0.25)', glow: 'rgba(6,182,212,0.20)', dot: '#0891B2' },
  rose: { bg: 'rgba(225,29,72,0.10)', text: '#E11D48', border: 'rgba(225,29,72,0.25)', glow: 'rgba(225,29,72,0.20)', dot: '#E11D48' },
}

export default function Management() {
  const { cloHighlight, tiers } = company.managementTeam
  const [activeView, setActiveView] = useState<'tree' | 'grid'>('tree')
  const [selectedTier, setSelectedTier] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeRoleModal, setActiveRoleModal] = useState<any | null>(null)

  // Filtered roles for grid view
  const filteredTiers = useMemo(() => {
    return tiers.map(t => {
      const isTierMatched = selectedTier === 'all' || t.id === selectedTier
      if (!isTierMatched) return null

      const matchedRoles = t.roles.filter(r => {
        if (!searchQuery.trim()) return true
        const q = searchQuery.toLowerCase()
        return (
          r.title.toLowerCase().includes(q) ||
          r.fullTitle.toLowerCase().includes(q) ||
          r.category.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q)
        )
      })

      if (matchedRoles.length === 0) return null
      return { ...t, roles: matchedRoles }
    }).filter(Boolean)
  }, [tiers, selectedTier, searchQuery])

  // Count total positions
  const totalPositions = useMemo(() => {
    return tiers.reduce((acc, t) => acc + t.roles.length, 0)
  }, [tiers])

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-hero)', minHeight: '52vh', display: 'flex', alignItems: 'center',
        paddingTop: 'var(--nav-h)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="dot-grid-dark" />
        <motion.div className="hero-orb hero-orb-blue"
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '500px', height: '500px', top: '-100px', right: '-80px' }}
        />
        <motion.div className="hero-orb hero-orb-purple"
          animate={{ scale: [1, 1.12, 1], opacity: [0.10, 0.18, 0.10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ width: '380px', height: '380px', bottom: '-80px', left: '-60px' }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem 4rem' }}>
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><Link to="/about">About</Link><span>/</span><span>Management Team</span>
          </div>

          <div style={{ maxWidth: '820px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow eyebrow-dark" style={{ marginBottom: '1.25rem' }}>
                <span className="dot-pulse" style={{ background: '#60A5FA' }} /> Leadership & Governance
              </span>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem,5vw,3.6rem)', fontWeight: 900, color: 'white', lineHeight: 1.08, letterSpacing: '-0.035em', marginBottom: '1.25rem' }}>
                Management Team & <br />
                <span className="text-gradient-brand">Organizational Structure</span>
              </h1>
              <p style={{ fontSize: '1.08rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.80, marginBottom: '2rem' }}>
                At 3HD Media, our organizational framework brings together apex governance, visionary executive leadership, and specialized execution units — powered by an integrated learning infrastructure.
              </p>
            </motion.div>

            {/* Metric pill bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '0.6rem 1.1rem', borderRadius: '14px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#60A5FA' }}>7</div>
                <div style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.3 }}>Strategic<br />Tiers</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '0.6rem 1.1rem', borderRadius: '14px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#A78BFA' }}>{totalPositions}</div>
                <div style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.3 }}>Key Management<br />Positions</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '0.6rem 1.1rem', borderRadius: '14px', backdropFilter: 'blur(10px)' }}>
                <Sparkles size={18} style={{ color: '#2DD4BF' }} />
                <div style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Active CLO Knowledge Bridge</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLO SPOTLIGHT CARD SECTION ─────────────────────────────── */}
      <section style={{ padding: '4rem 0 3rem', background: 'var(--slate-50)', position: 'relative' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
              borderRadius: '28px',
              border: '1px solid rgba(124,58,237,0.30)',
              boxShadow: '0 20px 50px rgba(124,58,237,0.15), 0 10px 20px rgba(0,0,0,0.20)',
              padding: '2.75rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ambient glow in background */}
            <div style={{
              position: 'absolute', top: '-60px', right: '-60px', width: '320px', height: '320px',
              background: 'radial-gradient(circle, rgba(124,58,237,0.30) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px',
              background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="clo-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(236,72,153,0.15)', border: '1px solid rgba(236,72,153,0.35)',
                    color: '#F472B6', fontSize: '0.75rem', fontWeight: 800,
                    letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.35rem 0.85rem', borderRadius: '999px',
                  }}>
                    <Sparkles size={14} /> NEW STRATEGIC INITIATIVE
                  </span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.30)',
                    color: '#93C5FD', fontSize: '0.75rem', fontWeight: 700, padding: '0.35rem 0.85rem', borderRadius: '999px',
                  }}>
                    {cloHighlight.role}
                  </span>
                </div>

                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: 'white', marginBottom: '1rem', lineHeight: 1.25 }}>
                  {cloHighlight.headline}
                </h2>

                <blockquote style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderLeft: '4px solid #A78BFA',
                  borderRadius: '0 16px 16px 0',
                  padding: '1.25rem 1.5rem',
                  fontSize: '1.02rem',
                  color: 'rgba(255,255,255,0.92)',
                  fontStyle: 'italic',
                  lineHeight: 1.70,
                  marginBottom: '1.25rem',
                }}>
                  "{cloHighlight.quote}"
                </blockquote>

                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.70 }}>
                  {cloHighlight.details}
                </p>
              </div>

              {/* CLO Impact Highlights */}
              <div style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '20px', padding: '1.75rem', backdropFilter: 'blur(12px)',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <div style={{ fontWeight: 800, color: 'white', fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#2DD4BF' }} /> CLO Core Responsibilities
                </div>

                {[
                  { title: 'Executive Upskilling', desc: 'Imparts emerging tech, AI, and strategic insights directly to CEO, MD, VPs, and Department Heads.' },
                  { title: 'Future-Proof Operations', desc: 'Monitors global media trends to adapt agency workflows before industry shifts happen.' },
                  { title: 'Cross-Departmental Knowledge', desc: 'Ensures seamless communication of best practices between technology, creative, and sales teams.' },
                ].map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '0.85rem 1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontWeight: 700, color: '#A78BFA', fontSize: '0.86rem', marginBottom: '0.15rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.60)', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <style>{`@media(max-width:900px){.clo-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── INTERACTIVE VIEW SWITCHER & FILTERING BAR ───────────────── */}
      <section style={{ padding: '2rem 0 1rem', background: 'var(--slate-50)', borderBottom: '1px solid var(--slate-200)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
            
            {/* View Mode Toggle */}
            <div style={{ display: 'flex', gap: '0.4rem', background: 'var(--white)', border: '1px solid var(--slate-200)', borderRadius: '14px', padding: '0.3rem', boxShadow: 'var(--shadow-sm)' }}>
              <button
                onClick={() => setActiveView('tree')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 1.1rem', borderRadius: '10px', border: 'none',
                  fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer',
                  background: activeView === 'tree' ? 'var(--blue-600)' : 'transparent',
                  color: activeView === 'tree' ? 'white' : 'var(--slate-600)',
                  transition: 'all 0.25s ease',
                }}
              >
                <Network size={16} /> Interactive Hierarchy Tree
              </button>
              <button
                onClick={() => setActiveView('grid')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 1.1rem', borderRadius: '10px', border: 'none',
                  fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer',
                  background: activeView === 'grid' ? 'var(--blue-600)' : 'transparent',
                  color: activeView === 'grid' ? 'white' : 'var(--slate-600)',
                  transition: 'all 0.25s ease',
                }}
              >
                <LayoutGrid size={16} /> Tier Directory Grid
              </button>
            </div>

            {/* Search and Tier Filter */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end', maxWidth: '600px' }}>
              
              {/* Search input */}
              <div style={{ position: 'relative', minWidth: '220px', flex: 1 }}>
                <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--slate-400)' }} />
                <input
                  type="text"
                  placeholder="Search role e.g. CLO, CTO, Sales..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%', padding: '0.55rem 0.9rem 0.55rem 2.4rem',
                    fontSize: '0.875rem', borderRadius: '12px', border: '1px solid var(--slate-300)',
                    background: 'var(--white)', color: 'var(--slate-800)', outline: 'none',
                    transition: 'all 0.2s',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue-500)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--slate-300)')}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--slate-400)' }}>
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Tier Selector for Grid view */}
              {activeView === 'grid' && (
                <div style={{ position: 'relative' }}>
                  <select
                    value={selectedTier}
                    onChange={e => setSelectedTier(e.target.value)}
                    style={{
                      padding: '0.55rem 2.2rem 0.55rem 1rem', fontSize: '0.875rem', fontWeight: 600,
                      borderRadius: '12px', border: '1px solid var(--slate-300)', background: 'var(--white)',
                      color: 'var(--slate-700)', cursor: 'pointer', appearance: 'none', outline: 'none',
                    }}
                  >
                    <option value="all">All 7 Tiers</option>
                    {tiers.map(t => (
                      <option key={t.id} value={t.id}>{t.title}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--slate-500)' }} />
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ─────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--slate-50)', paddingTop: '2.5rem' }}>
        <div className="container">

          {/* VIEW 1: INTERACTIVE HIERARCHY TREE */}
          {activeView === 'tree' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <span className="eyebrow eyebrow-blue" style={{ marginBottom: '0.5rem' }}>Top-Down Corporate Flow</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--slate-900)' }}>Visual Governance Tree</h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--slate-500)', maxWidth: '540px', margin: '0.4rem auto 0' }}>
                  Click any role card to view detailed responsibilities. Notice the **CLO** post connected directly to Executive Leadership to impart continuous learning across all departments.
                </p>
              </div>

              {/* Tree Container */}
              <div style={{
                background: 'var(--white)', border: '1px solid var(--border-light)',
                borderRadius: '24px', padding: '3rem 1.5rem', boxShadow: 'var(--shadow-md)',
                overflowX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem',
              }}>

                {tiers.map((tier, tIdx) => {
                  const style = BADGE_STYLES[tier.badgeColor] || BADGE_STYLES.blue

                  return (
                    <div key={tier.id} style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                      
                      {/* Flow Connector Line from previous tier */}
                      {tIdx > 0 && (
                        <div style={{
                          width: '2px', height: '2.5rem', background: 'linear-gradient(180deg, var(--slate-300) 0%, var(--blue-400) 100%)',
                          margin: '-2.5rem 0 1.25rem 0', position: 'relative',
                        }}>
                          {/* Pulse animation along connection line */}
                          <motion.div
                            animate={{ y: [0, 40, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue-600)', position: 'absolute', left: '-2px' }}
                          />
                        </div>
                      )}

                      {/* Tier Label */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.35rem 1rem', borderRadius: '999px',
                        background: style.bg, border: `1px solid ${style.border}`,
                        fontSize: '0.78rem', fontWeight: 800, color: style.text,
                        letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem',
                        boxShadow: `0 4px 12px ${style.glow}`,
                      }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: style.dot }} />
                        Tier {tIdx + 1}: {tier.title}
                      </div>

                      {/* Role Cards Row */}
                      <div style={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem',
                        width: '100%', position: 'relative',
                      }}>

                        {tier.roles.map(role => {
                          const isMatch = !searchQuery || role.title.toLowerCase().includes(searchQuery.toLowerCase()) || role.fullTitle.toLowerCase().includes(searchQuery.toLowerCase())
                          const isCLO = role.isSpecial

                          return (
                            <motion.div
                              key={role.id}
                              whileHover={{ y: -5, scale: 1.02 }}
                              onClick={() => setActiveRoleModal(role)}
                              style={{
                                opacity: isMatch ? 1 : 0.35,
                                background: isCLO
                                  ? 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)'
                                  : 'var(--white)',
                                color: isCLO ? 'white' : 'var(--slate-900)',
                                border: isCLO
                                  ? '2px solid #8B5CF6'
                                  : `1px solid ${style.border}`,
                                borderRadius: '16px',
                                padding: '1.1rem 1.25rem',
                                minWidth: '180px',
                                maxWidth: '240px',
                                flex: '1 1 180px',
                                cursor: 'pointer',
                                boxShadow: isCLO ? '0 10px 30px rgba(139,92,246,0.30)' : 'var(--shadow-sm)',
                                transition: 'all 0.25s ease',
                                position: 'relative',
                              }}
                            >
                              {/* Special CLO Badge */}
                              {isCLO && (
                                <div style={{
                                  position: 'absolute', top: '-10px', right: '12px',
                                  background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                                  color: 'white', fontSize: '0.65rem', fontWeight: 900,
                                  padding: '0.2rem 0.6rem', borderRadius: '999px', letterSpacing: '0.05em',
                                  boxShadow: '0 4px 10px rgba(236,72,153,0.4)',
                                }}>
                                  KNOWLEDGE BRIDGE
                                </div>
                              )}

                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
                                <div style={{
                                  width: '36px', height: '36px', borderRadius: '10px',
                                  background: isCLO ? 'rgba(255,255,255,0.15)' : style.bg,
                                  color: isCLO ? '#A78BFA' : style.text,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  flexShrink: 0,
                                }}>
                                  {ICON_MAP[role.icon] || <Briefcase size={18} />}
                                </div>

                                <div>
                                  <div style={{ fontWeight: 800, fontSize: '0.92rem', lineHeight: 1.25 }}>
                                    {role.title}
                                  </div>
                                  <div style={{ fontSize: '0.72rem', color: isCLO ? 'rgba(255,255,255,0.65)' : 'var(--slate-500)', marginTop: '0.1rem' }}>
                                    {role.category}
                                  </div>
                                </div>
                              </div>

                              <p style={{
                                fontSize: '0.78rem',
                                color: isCLO ? 'rgba(255,255,255,0.80)' : 'var(--slate-600)',
                                lineHeight: 1.45,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              }}>
                                {role.desc}
                              </p>

                              <div style={{
                                marginTop: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
                                fontSize: '0.70rem', fontWeight: 700, color: isCLO ? '#93C5FD' : 'var(--blue-600)'
                              }}>
                                <Info size={12} /> Click to expand details
                              </div>
                            </motion.div>
                          )
                        })}

                      </div>
                    </div>
                  )
                })}

              </div>
            </motion.div>
          )}

          {/* VIEW 2: TIER DIRECTORY GRID */}
          {activeView === 'grid' && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              
              {filteredTiers.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 1.5rem', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
                  <Search size={36} style={{ color: 'var(--slate-400)', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--slate-800)' }}>No matching roles found</h3>
                  <p style={{ color: 'var(--slate-500)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Try refining your search terms or clearing tier filters.</p>
                  <button onClick={() => { setSearchQuery(''); setSelectedTier('all') }} className="btn btn-outline btn-sm" style={{ marginTop: '1.25rem' }}>
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                  {filteredTiers.map(t => {
                    if (!t) return null
                    const style = BADGE_STYLES[t.badgeColor] || BADGE_STYLES.blue

                    return (
                      <div key={t.id}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                          <span style={{
                            width: '10px', height: '10px', borderRadius: '50%', background: style.dot,
                            boxShadow: `0 0 10px ${style.glow}`
                          }} />
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: 'var(--slate-900)' }}>
                            {t.title}
                          </h3>
                          <span style={{ fontSize: '0.80rem', color: 'var(--slate-500)', fontWeight: 500 }}>
                            ({t.roles.length} {t.roles.length === 1 ? 'position' : 'positions'})
                          </span>
                        </div>

                        <div className="grid-3" style={{ gap: '1.25rem' }}>
                          {t.roles.map(role => (
                            <motion.div
                              key={role.id}
                              whileHover={{ y: -4 }}
                              onClick={() => setActiveRoleModal(role)}
                              style={{
                                background: role.isSpecial ? 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)' : 'var(--white)',
                                color: role.isSpecial ? 'white' : 'var(--slate-900)',
                                border: role.isSpecial ? '2px solid #8B5CF6' : '1px solid var(--border-light)',
                                borderRadius: '20px', padding: '1.5rem',
                                boxShadow: role.isSpecial ? '0 12px 30px rgba(139,92,246,0.25)' : 'var(--shadow-sm)',
                                cursor: 'pointer', transition: 'all 0.25s ease',
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                              }}
                            >
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                  <div style={{
                                    width: '42px', height: '42px', borderRadius: '12px',
                                    background: role.isSpecial ? 'rgba(255,255,255,0.15)' : style.bg,
                                    color: role.isSpecial ? '#A78BFA' : style.text,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  }}>
                                    {ICON_MAP[role.icon] || <Briefcase size={20} />}
                                  </div>

                                  <span style={{
                                    fontSize: '0.72rem', fontWeight: 800, padding: '0.25rem 0.65rem', borderRadius: '999px',
                                    background: role.isSpecial ? 'rgba(236,72,153,0.20)' : style.bg,
                                    color: role.isSpecial ? '#F472B6' : style.text,
                                    border: `1px solid ${role.isSpecial ? 'rgba(236,72,153,0.4)' : style.border}`,
                                  }}>
                                    {role.category}
                                  </span>
                                </div>

                                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.25rem', lineHeight: 1.3 }}>
                                  {role.title}
                                </h4>
                                <div style={{ fontSize: '0.80rem', color: role.isSpecial ? 'rgba(255,255,255,0.65)' : 'var(--slate-500)', marginBottom: '0.85rem' }}>
                                  {role.fullTitle}
                                </div>

                                <p style={{ fontSize: '0.86rem', color: role.isSpecial ? 'rgba(255,255,255,0.80)' : 'var(--slate-600)', lineHeight: 1.6 }}>
                                  {role.desc}
                                </p>
                              </div>

                              <div style={{
                                marginTop: '1.25rem', paddingTop: '0.85rem',
                                borderTop: role.isSpecial ? '1px solid rgba(255,255,255,0.10)' : '1px solid var(--slate-100)',
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                fontSize: '0.78rem', fontWeight: 700, color: role.isSpecial ? '#93C5FD' : 'var(--blue-600)'
                              }}>
                                <span>View Responsibilities</span>
                                <ArrowRight size={14} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

            </motion.div>
          )}

        </div>
      </section>

      {/* ── ROLE DETAIL MODAL ──────────────────────────────────────── */}
      <AnimatePresence>
        {activeRoleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveRoleModal(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 2000,
              background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: activeRoleModal.isSpecial ? 'linear-gradient(145deg, #0F172A 0%, #1E1B4B 100%)' : 'var(--white)',
                color: activeRoleModal.isSpecial ? 'white' : 'var(--slate-900)',
                border: activeRoleModal.isSpecial ? '2px solid #8B5CF6' : '1px solid var(--slate-200)',
                borderRadius: '24px', padding: '2.25rem', maxWidth: '560px', width: '100%',
                boxShadow: '0 25px 60px rgba(0,0,0,0.35)', position: 'relative',
              }}
            >
              <button
                onClick={() => setActiveRoleModal(null)}
                style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  border: 'none', background: activeRoleModal.isSpecial ? 'rgba(255,255,255,0.12)' : 'var(--slate-100)',
                  color: activeRoleModal.isSpecial ? 'white' : 'var(--slate-600)',
                  width: '32px', height: '32px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: activeRoleModal.isSpecial ? 'rgba(255,255,255,0.15)' : 'rgba(37,99,235,0.10)',
                  color: activeRoleModal.isSpecial ? '#A78BFA' : 'var(--blue-600)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {ICON_MAP[activeRoleModal.icon] || <Briefcase size={24} />}
                </div>

                <div>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '999px',
                    background: activeRoleModal.isSpecial ? 'rgba(236,72,153,0.25)' : 'rgba(37,99,235,0.10)',
                    color: activeRoleModal.isSpecial ? '#F472B6' : 'var(--blue-600)',
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>
                    {activeRoleModal.category}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginTop: '0.2rem' }}>
                    {activeRoleModal.title}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: activeRoleModal.isSpecial ? 'rgba(255,255,255,0.65)' : 'var(--slate-500)' }}>
                    {activeRoleModal.fullTitle}
                  </div>
                </div>
              </div>

              <div style={{
                background: activeRoleModal.isSpecial ? 'rgba(255,255,255,0.06)' : 'var(--slate-50)',
                borderRadius: '16px', padding: '1.25rem', marginBottom: '1.5rem',
                border: activeRoleModal.isSpecial ? '1px solid rgba(255,255,255,0.10)' : '1px solid var(--slate-200)',
              }}>
                <div style={{ fontSize: '0.80rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: activeRoleModal.isSpecial ? '#A78BFA' : 'var(--blue-600)', marginBottom: '0.4rem' }}>
                  Role Overview
                </div>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: activeRoleModal.isSpecial ? 'rgba(255,255,255,0.90)' : 'var(--slate-700)' }}>
                  {activeRoleModal.desc}
                </p>
              </div>

              {activeRoleModal.isSpecial && (
                <div style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.4)', borderRadius: '16px', padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F472B6', marginBottom: '0.25rem' }}>
                    Special Strategic Post
                  </div>
                  <div style={{ fontSize: '0.80rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    The CLO bridges high-level executive strategy and continuous employee learning, guaranteeing that 3HD Media rapidly adopts new media formats, AI technologies, and data-driven methodologies.
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveRoleModal(null)}
                  className={activeRoleModal.isSpecial ? 'btn btn-white btn-sm' : 'btn btn-primary btn-sm'}
                  style={{ borderRadius: '12px' }}
                >
                  Close Detail View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA SECTION ───────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Want to Collaborate with Our Leadership Team?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Whether you want to launch a major digital campaign, build custom media solutions, or join our growing team — we are ready.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg btn-arrow">
                Contact Leadership <ArrowRight size={18} className="arrow-icon" />
              </Link>
              <Link to="/careers" className="btn btn-ghost-light btn-lg">Explore Open Careers</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
