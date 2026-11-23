import type { PortfolioProject } from '../types/content';

/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO DATA — APU KUMAR PORTFOLIO
 * ============================================================================
 * HOW TO REPLACE DEMONSTRATION IMAGES WITH YOUR OWN PROJECTS:
 * 1. Place your optimized JPG/WebP files inside `public/portfolio/`
 *    (e.g. `public/portfolio/wedding-01.webp`).
 * 2. Update the `image` path below (e.g. `'/portfolio/wedding-01.webp'`).
 * 3. Update `title`, `summary`, `deliverables`, and set `isDemo: false`.
 *
 * NOTE: Every entry below currently has `isDemo: true` so the site transparently
 * labels them as demonstration visuals rather than claiming past client work.
 */

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'demo-wedding-tuscan-gold',
    title: {
      en: 'Golden Hour Bridal Editorial Grade',
      bn: 'গোল্ডেন আওয়ার ব্রাইডাল এডিটোরিয়াল গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/src/assets/images/portfolio_wedding_editorial_1795434062566.jpg',
    imageAlt: {
      en: 'Demonstration sample of warm golden-hour wedding couple Lightroom color grading and subtle skin retouching',
      bn: 'গোল্ডেন-আওয়ার ওয়েডিং কাপল লাইটরুম কালার গ্রেডিং ও স্কিন রিটাচিং ডেমো নমুনা',
    },
    aspect: 'wide',
    summary: {
      en: 'Demonstration of warm filmic Lightroom color grading, highlight recovery on bridal lace, balanced skin tones, and cohesive full-gallery preset styling.',
      bn: 'লাইটরুমে উষ্ণ সিনেমাটিক কালার গ্রেডিং, প্রাকৃতিক স্কিন টোন সমন্বয় এবং পুরো ওয়েডিং গ্যালারির ধারাবাহিক স্টাইলিংয়ের ডেমো প্রদর্শনী।',
    },
    deliverables: [
      { en: 'RAW Color Grading & Exposure Balance', bn: 'RAW কালার গ্রেডিং ও এক্সপোজার ব্যালেন্স' },
      { en: 'Natural Skin & Stray-Hair Cleanup', bn: 'প্রাকৃতিক স্কিন ও সূক্ষ্ম রিটাচিং' },
      { en: 'Consistent Album Export Profile', bn: 'অ্যালবাম-রেডি কনসিস্টেন্ট এক্সপোর্ট' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    isDemo: true,
  },
  {
    id: 'demo-retouch-chronograph',
    title: {
      en: 'Luxury Timepiece Commercial Retouch',
      bn: 'লাক্সারি ক্রোনোগ্রাফ কমার্শিয়াল রিটাচ',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image: '/src/assets/images/portfolio_photo_retouch_1795434062890.jpg',
    imageAlt: {
      en: 'Demonstration sample of high-end studio wristwatch retouching with clean specular highlights',
      bn: 'লাক্সারি ঘড়ির প্রিমিয়াম স্টুডিও রিটাচিং ও লাইট ব্যালেন্সিং ডেমো নমুনা',
    },
    aspect: 'standard',
    summary: {
      en: 'Demonstration of dust-free macro cleanup, brushed metal sheen sculpting, reflection control, and high-contrast shadow depth for commercial product photography.',
      bn: 'ম্যাক্রো প্রোডাক্ট ফটোতে ডাস্ট ক্লিনআপ, মেটাল রিফ্লেকশন কন্ট্রোল এবং হাই-কনট্রাস্ট স্টুডিও ফিনিশিংয়ের ডেমো নমুনা।',
    },
    deliverables: [
      { en: 'Dust, Scratch & Reflection Cleanup', bn: 'ডাস্ট, স্ক্র্যাচ ও রিফ্লেকশন ক্লিনআপ' },
      { en: 'Dodge & Burn Specular Sculpting', bn: 'ডজ অ্যান্ড বার্ন লাইটিং রিফাইনমেন্ট' },
      { en: 'Print & Web High-Resolution Masters', bn: 'প্রিন্ট ও ওয়েব হাই-রেজোলিউশন মাস্টার ফাইল' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: true,
  },
  {
    id: 'demo-amazon-audio-aplus',
    title: {
      en: 'Acoustics Series Amazon A+ Visual Suite',
      bn: 'অডিও সিরিজ অ্যামাজন A+ ভিজ্যুয়াল স্যুট',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image: '/src/assets/images/portfolio_amazon_product_1795434063234.jpg',
    imageAlt: {
      en: 'Demonstration sample of matte black and gold wireless headphones staged for Amazon A+ listing visual',
      bn: 'অ্যামাজন A+ লিস্টিংয়ের জন্য প্রিমিয়াম হেডফোন প্রোডাক্ট ডিজাইন ডেমো নমুনা',
    },
    aspect: 'standard',
    summary: {
      en: 'Demonstration of conversion-focused Amazon hero and A+ module composition designed to showcase hardware craftsmanship, acoustic features, and luxury positioning.',
      bn: 'অ্যামাজন প্রোডাক্ট লিস্টিং ও A+ মডিউলের জন্য প্রিমিয়াম প্রোডাক্ট কম্পোজিশন ও ভিজ্যুয়াল স্টোরিটেলিং ডেমো নমুনা।',
    },
    deliverables: [
      { en: 'Main Hero & Feature Callout Graphics', bn: 'মেইন হিরো ও ফিচার কলআউট গ্রাফিক্স' },
      { en: 'Amazon A+ / EBC Banner Modules', bn: 'অ্যামাজন A+ / EBC ব্যানার মডিউল' },
      { en: 'Marketplace-Compliant Color & Sizing', bn: 'মার্কেটপ্লেস স্ট্যান্ডার্ড সাইজিং ও কালার' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: true,
  },
  {
    id: 'demo-fashion-editorial-portrait',
    title: {
      en: 'Editorial Apparel & Portrait Retouching',
      bn: 'এডিটোরিয়াল অ্যাপারেল ও পোর্ট্রেট রিটাচিং',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image: '/src/assets/images/portfolio_fashion_retouch_1795434062362.jpg',
    imageAlt: {
      en: 'Demonstration sample of natural fashion portrait and wool coat apparel retouching in warm window light',
      bn: 'ফ্যাশন পোর্ট্রেট ও পোশাকের ফ্যাব্রিক টেক্সচার রিটাচিং ডেমো নমুনা',
    },
    aspect: 'portrait',
    summary: {
      en: 'Demonstration of frequency-separation skin retouching, fabric wrinkle refinement, and moody architectural color harmonization for fashion lookbooks.',
      bn: 'ফ্যাশন লুকবুকের জন্য প্রাকৃতিক স্কিন রিটাচিং, পোশাকের টেক্সচার ঠিক রাখা এবং এডিটোরিয়াল কালার ব্যালেন্সিংয়ের ডেমো নমুনা।',
    },
    deliverables: [
      { en: 'Non-Destructive Skin Texture Retouch', bn: 'প্রাকৃতিক স্কিন টেক্সচার রিটাচিং' },
      { en: 'Apparel Wrinkle & Seam Cleanup', bn: 'পোশাকের ভাঁজ ও ফ্যাব্রিক ক্লিনআপ' },
      { en: 'Editorial Lookbook Color Grading', bn: 'এডিটোরিয়াল লুকবুক কালার গ্রেডিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: true,
  },
  {
    id: 'demo-graphic-monolith-identity',
    title: {
      en: 'Monolith Luxury Brand Collateral System',
      bn: 'লাক্সারি ব্র্যান্ড আইডেন্টিটি ও প্যাকেজিং সিস্টেম',
    },
    category: 'graphic',
    categoryLabel: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/src/assets/images/portfolio_graphic_design_1795434063708.jpg',
    imageAlt: {
      en: 'Demonstration sample of luxury embossed stationery, minimal box packaging, and editorial print identity',
      bn: 'লাক্সারি বিজনেস কার্ড, প্যাকেজিং বক্স ও এডিটোরিয়াল প্রিন্ট ডিজাইন ডেমো নমুনা',
    },
    aspect: 'standard',
    summary: {
      en: 'Demonstration of minimalist logo architecture, print-ready stationery layout, packaging direction, and tactile typography for premium consumer brands.',
      bn: 'আধুনিক ব্র্যান্ডের জন্য মিনিমাল লোগো, প্রিন্ট-রেডি স্টেশনারি, প্যাকেজিং এবং মার্জিত টাইপোগ্রাফি ডিজাইনের ডেমো নমুনা।',
    },
    deliverables: [
      { en: 'Brand Wordmark & Visual System', bn: 'ব্র্যান্ড লোগো ও ভিজ্যুয়াল গাইড' },
      { en: 'Print-Ready Stationery & Packaging', bn: 'প্রিন্ট-রেডি স্টেশনারি ও প্যাকেজিং' },
      { en: 'Social & Campaign Graphic Templates', bn: 'সোশ্যাল ও বিজ্ঞাপন গ্রাফিক টেমপ্লেট' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: true,
  },
  {
    id: 'demo-youtube-cinema-thumb',
    title: {
      en: 'Creator Studio High-Contrast Thumbnail Art',
      bn: 'ক্রিয়েটর স্টুডিও হাই-কনট্রাস্ট ইউটিউব থাম্বনেইল আর্ট',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'graphic-design',
    image: '/src/assets/images/portfolio_youtube_thumb_1795434064190.jpg',
    imageAlt: {
      en: 'Demonstration sample of high-contrast cinema production studio lighting art for YouTube thumbnail composition',
      bn: 'হাই-কনট্রাস্ট স্টুডিও লাইটিং ও ইউটিউব থাম্বনেইল কম্পোজিশন ডেমো নমুনা',
    },
    aspect: 'wide',
    summary: {
      en: 'Demonstration of focal subject separation, bold warm-vs-cool contrast, and mobile-legible visual composition engineered to lift click-through performance.',
      bn: 'মোবাইল ও ডেস্কটপ স্ক্রিনে তাৎক্ষণিক নজর কাড়ার জন্য সাবজেক্ট সেপারেশন ও হাই-কনট্রাস্ট ইউটিউব থাম্বনেইল আর্ট ডেমো।',
    },
    deliverables: [
      { en: 'Subject Extraction & Rim-Light Relighting', bn: 'সাবজেক্ট কাটআউট ও রিম-লাইট রিলাইটিং' },
      { en: 'High-Contrast Color Pop Grading', bn: 'হাই-কনট্রাস্ট কালার গ্রেডিং' },
      { en: '16:9 Crisp Export for Mobile & TV Feeds', bn: 'মোবাইল ও টিভি ফিডের জন্য 16:9 এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: true,
  },
  {
    id: 'demo-video-twilight-commercial',
    title: {
      en: 'Twilight Motion Commercial & AI Ad Edit',
      bn: 'সিনেমাটিক কমার্শিয়াল ও এআই বিজ্ঞাপন ভিডিও এডিট',
    },
    category: 'video',
    categoryLabel: {
      en: 'Video Editing',
      bn: 'ভিডিও এডিটিং',
    },
    serviceId: 'video-editing',
    image: '/src/assets/images/portfolio_video_editing_1795434061964.jpg',
    imageAlt: {
      en: 'Demonstration frame of a twilight automotive commercial edit with anamorphic reflections and cinematic grading',
      bn: 'সিনেমাটিক কমার্শিয়াল ভিডিও এডিট ও কালার গ্রেডিংয়ের ডেমো ফ্রেম',
    },
    aspect: 'wide',
    summary: {
      en: 'Demonstration of dynamic commercial storytelling, beat-synced cutting, anamorphic color grading, and AI-assisted promotional ad sequences in 4K.',
      bn: 'বিট-সিঙ্কড কাটিং, সিনেমাটিক কালার গ্রেডিং এবং আধুনিক এআই-সহায়তায় 4K কমার্শিয়াল বিজ্ঞাপন ভিডিও এডিটিংয়ের ডেমো নমুনা।',
    },
    deliverables: [
      { en: 'Narrative Cut & Rhythm-Synced Pacing', bn: 'গতিশীল স্টোরিটেলিং ও পেসিং এডিট' },
      { en: 'Cinematic Color Grade & Sound Design', bn: 'সিনেমাটিক কালার গ্রেড ও সাউন্ড ডিজাইন' },
      { en: '16:9 Web & 9:16 Social Reel Exports', bn: '16:9 ওয়েব ও 9:16 সোশ্যাল রিল এক্সপোর্ট' },
    ],
    tools: ['Adobe Premiere Pro', 'AI Creative Tools'],
    isDemo: true,
  },
];
