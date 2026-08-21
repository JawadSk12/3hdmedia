// ================================================================
// 3HD Media — Insights / Blog Data
// Digital media articles and resources (sample structure)
// ================================================================

export interface Insight {
  id: string
  title: string
  category: string
  excerpt: string
  readTime: string
  coverGradient: string
  emoji: string
  tags: string[]
}

export const insights: Insight[] = [
  {
    id: 'social-media-strategy-2026',
    title: 'How to Build a Social Media Strategy That Actually Works in 2026',
    category: 'Social Media',
    excerpt: 'Social media algorithms have changed dramatically. Here\'s how to build a strategy focused on genuine engagement, consistent content and platform-specific formats — from Instagram Reels to LinkedIn articles.',
    readTime: '6 min read',
    coverGradient: 'linear-gradient(135deg, #833AB4 0%, #E1306C 100%)',
    emoji: '📱',
    tags: ['Instagram', 'Facebook', 'Strategy', 'Content'],
  },
  {
    id: 'website-design-principles',
    title: 'What Makes a Great Business Website in 2026?',
    category: 'Web Design',
    excerpt: 'A great website is more than good looks — it\'s speed, clarity, SEO and conversion. We break down the 7 principles of effective business website design that turn visitors into customers.',
    readTime: '5 min read',
    coverGradient: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    emoji: '🌐',
    tags: ['Website', 'UX Design', 'SEO', 'Conversion'],
  },
  {
    id: 'podcasting-for-brands',
    title: 'Why Your Brand Needs a Podcast in 2026',
    category: 'Podcast',
    excerpt: 'Podcasting is no longer just for media companies. Brands using audio content are seeing deeper audience relationships and longer engagement. Here\'s how to start your brand podcast the right way.',
    readTime: '7 min read',
    coverGradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)',
    emoji: '🎙️',
    tags: ['Podcast', 'Audio', 'Spotify', 'Brand Content'],
  },
  {
    id: 'email-marketing-comeback',
    title: 'Email Marketing Is More Powerful Than Ever — Here\'s Why',
    category: 'Email Marketing',
    excerpt: 'While social media reach declines, email open rates are climbing. We explore why email marketing remains the highest-ROI digital channel and how to craft campaigns that get results.',
    readTime: '5 min read',
    coverGradient: 'linear-gradient(135deg, #EA580C 0%, #FB923C 100%)',
    emoji: '✉️',
    tags: ['Email', 'Marketing', 'ROI', 'Newsletter'],
  },
  {
    id: 'ebook-lead-generation',
    title: 'Using eBooks and Digital Publications for Lead Generation',
    category: 'Content',
    excerpt: 'A well-designed eBook can generate hundreds of qualified leads for your business. We break down how to choose the right topic, design it professionally and promote it effectively online.',
    readTime: '6 min read',
    coverGradient: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
    emoji: '📖',
    tags: ['eBook', 'Lead Generation', 'Content Marketing'],
  },
  {
    id: 'mobile-app-ux-tips',
    title: '5 UX Principles Every Mobile App Needs to Follow',
    category: 'Mobile App',
    excerpt: 'Most apps fail because of poor UX — not bad technology. We share the five UX principles that separate successful, user-loved apps from the ones that get deleted after the first launch.',
    readTime: '4 min read',
    coverGradient: 'linear-gradient(135deg, #DB2777 0%, #F472B6 100%)',
    emoji: '📲',
    tags: ['Mobile App', 'UX Design', 'iOS', 'Android'],
  },
  {
    id: 'digital-media-trends-2026',
    title: 'The Biggest Digital Media Trends of 2026',
    category: 'Trends',
    excerpt: 'Short-form video, AI-assisted content, audio-first strategies and hyper-personalised email — we round up the biggest shifts shaping digital media this year and what they mean for your brand.',
    readTime: '8 min read',
    coverGradient: 'linear-gradient(135deg, #0F172A 0%, #1D4ED8 50%, #7C3AED 100%)',
    emoji: '🚀',
    tags: ['Trends', 'Digital Media', '2026', 'Strategy'],
  },
  {
    id: 'blog-content-seo',
    title: 'How to Write Blog Content That Ranks on Google',
    category: 'Content',
    excerpt: 'Great blog content serves two audiences — your readers and Google. Learn how to structure articles for maximum SEO impact, write for intent and build authority in your niche.',
    readTime: '6 min read',
    coverGradient: 'linear-gradient(135deg, #14532D 0%, #16A34A 100%)',
    emoji: '✍️',
    tags: ['Blog', 'SEO', 'Content Writing', 'Google'],
  },
]

export const insightCategories = ['All', 'Social Media', 'Web Design', 'Podcast', 'Email Marketing', 'Content', 'Mobile App', 'Trends']
