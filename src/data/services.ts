// ================================================================
// 3HD Media — Services Data (DIGITAL MEDIA STUDIO)
// Core digital media services the company provides
// ================================================================

export interface Service {
  id: string
  number: string
  title: string
  shortDesc: string
  longDesc: string
  benefits: string[]
  deliverables: string[]
  icon: string
  color: string
  colorBg: string
  gradient: string
  emoji: string
}

export const services: Service[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media',
    shortDesc: 'Scroll-stopping content, community management and paid campaigns across every major social platform.',
    longDesc: 'We create, manage and grow your brand\'s social media presence across Instagram, Facebook, LinkedIn, YouTube, WhatsApp and more. From content calendars and creative production to paid advertising and community engagement — we handle it all.',
    benefits: [
      'Platform-specific content strategy',
      'Creative design & copywriting',
      'Community management',
      'Paid social advertising',
      'Analytics & performance reporting',
    ],
    deliverables: ['Content calendar', 'Reels, posts & stories', 'Ad creatives', 'Monthly reports'],
    icon: 'Share2',
    color: '#E1306C',
    colorBg: 'rgba(225,48,108,0.08)',
    gradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)',
    emoji: '📱',
  },
  {
    id: 'websites',
    number: '02',
    title: 'Websites & Web Pages',
    shortDesc: 'Beautiful, fast and conversion-optimised websites and landing pages built for impact.',
    longDesc: 'From portfolio sites and corporate websites to high-converting landing pages and e-commerce stores — we design and develop web experiences that look stunning and perform. Mobile-first, SEO-ready and built for results.',
    benefits: [
      'Custom UI/UX design',
      'Mobile-first responsive development',
      'SEO optimisation',
      'Performance & speed optimised',
      'CMS integration',
    ],
    deliverables: ['Design mockups', 'Fully developed website', 'CMS setup', 'Launch support'],
    icon: 'Globe',
    color: '#2563EB',
    colorBg: 'rgba(37,99,235,0.08)',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    emoji: '🌐',
  },
  {
    id: 'ebooks-publications',
    number: '03',
    title: 'eBooks & Digital Publications',
    shortDesc: 'Professionally designed digital books, guides, whitepapers and interactive publications.',
    longDesc: 'We design and produce high-quality digital publications — eBooks, whitepapers, industry guides, look-books and interactive PDFs. Perfect for lead generation, thought leadership, brand storytelling or educational content.',
    benefits: [
      'Professional editorial design',
      'Interactive elements & hyperlinks',
      'Optimised for all devices',
      'Lead magnet strategy',
      'Multi-format delivery (PDF, EPUB, online)',
    ],
    deliverables: ['eBook design', 'Editorial layout', 'Digital-ready files', 'Promotional graphics'],
    icon: 'BookOpen',
    color: '#7C3AED',
    colorBg: 'rgba(124,58,237,0.08)',
    gradient: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
    emoji: '📖',
  },
  {
    id: 'podcasts-audio',
    number: '04',
    title: 'Podcasts & Audio',
    shortDesc: 'End-to-end podcast production, digital audio content and streaming distribution.',
    longDesc: 'From concept to launch — we produce, edit and distribute your podcast or audio content. Whether you\'re starting a brand podcast, creating streaming audio content or producing MP3 series, we handle recording, editing, mixing, artwork, show notes and distribution across all major platforms.',
    benefits: [
      'Concept & format development',
      'Recording & production',
      'Professional audio editing & mixing',
      'Cover art & branding',
      'Distribution to Spotify, Apple, Google & more',
    ],
    deliverables: ['Edited episodes', 'Podcast artwork', 'Show notes', 'Distribution setup'],
    icon: 'Mic',
    color: '#14B8A6',
    colorBg: 'rgba(20,184,166,0.08)',
    gradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)',
    emoji: '🎙️',
  },
  {
    id: 'email-marketing-blogs',
    number: '05',
    title: 'Email Marketing & Blogs',
    shortDesc: 'Strategic email campaigns and SEO-driven blog content that builds audience and drives engagement.',
    longDesc: 'We craft email marketing campaigns that actually get opened — from welcome sequences and newsletters to promotional campaigns and automations. We also produce compelling blog content designed to rank in search, build authority and keep your audience coming back.',
    benefits: [
      'Email strategy & campaign planning',
      'Template design & copywriting',
      'Automation sequences',
      'SEO blog writing',
      'Open rate & conversion optimisation',
    ],
    deliverables: ['Email templates', 'Campaign content', 'Blog articles', 'Analytics reports'],
    icon: 'Mail',
    color: '#F97316',
    colorBg: 'rgba(249,115,22,0.08)',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
    emoji: '✉️',
  },
  {
    id: 'mobile-apps',
    number: '06',
    title: 'Mobile Apps',
    shortDesc: 'Intuitive, high-performance mobile apps for iOS and Android — designed and built for your audience.',
    longDesc: 'We design and develop mobile applications that users love. From early-stage concept and UX design through to development, testing and App Store launch — we build apps that work seamlessly across iOS and Android, with clean code and outstanding user experience.',
    benefits: [
      'UX research & wireframing',
      'UI design system',
      'iOS & Android development',
      'Backend & API integration',
      'App Store submission & support',
    ],
    deliverables: ['App design', 'Developed app (iOS/Android)', 'Backend setup', 'Launch support'],
    icon: 'Smartphone',
    color: '#EC4899',
    colorBg: 'rgba(236,72,153,0.08)',
    gradient: 'linear-gradient(135deg, #DB2777 0%, #F472B6 100%)',
    emoji: '📲',
  },
]

export const coreServices = services
