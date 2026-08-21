// ================================================================
// 3HD Media — Work / Portfolio Data
// Digital media project showcase (sample structure)
// ================================================================

export interface WorkItem {
  id: string
  title: string
  category: string
  tags: string[]
  coverGradient: string
  emoji: string
  challenge: string
  solution: string
  technology: string[]
  resultsPlaceholder: boolean
}

export const workItems: WorkItem[] = [
  {
    id: 'social-campaign-01',
    title: 'Brand Social Media Presence',
    category: 'Social Media',
    tags: ['Instagram', 'Facebook', 'Content Strategy'],
    coverGradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)',
    emoji: '📱',
    challenge: 'Build a consistent, engaging social media presence from scratch across Instagram and Facebook — with original content, reels, stories and a clear brand voice.',
    solution: 'Developed a monthly content calendar, produced original video reels and static posts, managed community engagement and ran targeted paid social campaigns.',
    technology: ['Instagram', 'Facebook Ads', 'Canva Pro', 'Reels', 'Stories'],
    resultsPlaceholder: true,
  },
  {
    id: 'website-01',
    title: 'Business Website Design & Development',
    category: 'Website',
    tags: ['Web Design', 'Development', 'SEO'],
    coverGradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    emoji: '🌐',
    challenge: 'Design and build a professional website that reflects the brand identity, loads fast, ranks in search results and converts visitors into enquiries.',
    solution: 'Custom UI/UX design followed by full development — mobile-first, SEO-optimised, CMS-integrated and performance-tested before launch.',
    technology: ['React', 'HTML/CSS', 'SEO', 'CMS', 'Google Analytics'],
    resultsPlaceholder: true,
  },
  {
    id: 'podcast-01',
    title: 'Brand Podcast Series',
    category: 'Podcast',
    tags: ['Audio Production', 'Spotify', 'Apple Podcasts'],
    coverGradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)',
    emoji: '🎙️',
    challenge: 'Launch a branded podcast series — from concept through to production and distribution on major streaming platforms.',
    solution: 'Developed the podcast format, recorded and professionally edited episodes, designed artwork and set up distribution across Spotify, Apple Podcasts and Google Podcasts.',
    technology: ['Podcast Editing', 'Spotify', 'Apple Podcasts', 'Anchor', 'Audio Mixing'],
    resultsPlaceholder: true,
  },
  {
    id: 'ebook-01',
    title: 'Industry eBook & Lead Magnet',
    category: 'eBook',
    tags: ['eBook Design', 'PDF', 'Lead Generation'],
    coverGradient: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
    emoji: '📖',
    challenge: 'Create a professionally designed eBook to serve as a lead magnet — establishing thought leadership and generating qualified email sign-ups.',
    solution: 'Wrote and designed a comprehensive industry guide with editorial layout, infographics, interactive PDF elements and a promotional landing page.',
    technology: ['InDesign', 'Figma', 'PDF', 'Landing Page', 'Email Capture'],
    resultsPlaceholder: true,
  },
  {
    id: 'email-campaign-01',
    title: 'Email Marketing Campaign',
    category: 'Email Marketing',
    tags: ['Email Design', 'Automation', 'Copywriting'],
    coverGradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
    emoji: '✉️',
    challenge: 'Design and execute a multi-stage email marketing campaign to re-engage an existing audience and drive conversions.',
    solution: 'Designed branded email templates, wrote conversion-focused copy, set up automation sequences and A/B tested subject lines for maximum open rate.',
    technology: ['Mailchimp', 'Email Design', 'A/B Testing', 'Automation', 'Analytics'],
    resultsPlaceholder: true,
  },
  {
    id: 'mobile-app-01',
    title: 'Mobile App Design & Development',
    category: 'Mobile App',
    tags: ['iOS', 'Android', 'UX Design'],
    coverGradient: 'linear-gradient(135deg, #DB2777 0%, #F472B6 100%)',
    emoji: '📲',
    challenge: 'Design and build an intuitive mobile app for iOS and Android — with seamless UX, clean visual design and backend integration.',
    solution: 'Conducted UX research and wireframing, built a complete UI design system, developed the app for both platforms and managed the App Store submission process.',
    technology: ['React Native', 'iOS', 'Android', 'Figma', 'Firebase'],
    resultsPlaceholder: true,
  },
]

export const workCategories = ['All', 'Social Media', 'Website', 'Podcast', 'eBook', 'Email Marketing', 'Mobile App']
