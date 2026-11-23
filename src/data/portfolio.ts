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
    image: '/assets/aistudio/Sample4_efa31a64.jpg',
    imageAlt: {
      en: 'Golden-hour wedding couple portrait with flowing veil color graded in Adobe Lightroom and Photoshop',
      bn: 'লাইটরুম ও ফটোশপে কালার গ্রেডিং করা গোল্ডেন-আওয়ার ওয়েডিং কাপল পোর্ট্রেট',
    },
    aspect: 'wide',
    summary: {
      en: 'Warm filmic Lightroom color grading, highlight recovery on bridal lace, balanced skin tones, and cohesive full-gallery preset styling.',
      bn: 'লাইটরুমে উষ্ণ সিনেমাটিক কালার গ্রেডিং, প্রাকৃতিক স্কিন টোন সমন্বয় এবং পুরো ওয়েডিং গ্যালারির ধারাবাহিক স্টাইলিং।',
    },
    deliverables: [
      { en: 'RAW Color Grading & Exposure Balance', bn: 'RAW কালার গ্রেডিং ও এক্সপোজার ব্যালেন্স' },
      { en: 'Natural Skin & Stray-Hair Cleanup', bn: 'প্রাকৃতিক স্কিন ও সূক্ষ্ম রিটাচিং' },
      { en: 'Consistent Album Export Profile', bn: 'অ্যালবাম-রেডি কনসিস্টেন্ট এক্সপোর্ট' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'wedding-skyline-prism-edit',
    title: {
      en: 'Editorial Sky & Prism Wedding Grade',
      bn: 'এডিটোরিয়াল স্কাই ও প্রিজম ওয়েডিং গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/Sample2_90c7e417.jpg',
    imageAlt: {
      en: 'Editorial wedding couple portrait framed through meadow grass with dramatic sky tones and prism flare',
      bn: 'মেঘলা আকাশ ও প্রিজম ফ্লেয়ারের সাথে এডিটোরিয়াল ওয়েডিং কাপল পোর্ট্রেট এডিটিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Moody blue-slate sky toning balanced with warm skin luminosity, beaded bridal gown detail enhancement, and dreamy foreground light-flare preservation.',
      bn: 'নীলাভ মেঘলা আকাশের সাথে উষ্ণ স্কিন টোনের সমন্বয়, ব্রাইডাল গাউনের সূক্ষ্ম ডিটেইল ফুটিয়ে তোলা এবং প্রাকৃতিক ফ্লেয়ার ব্যালেন্সিং।',
    },
    deliverables: [
      { en: 'Moody Sky & Skin Tone Balance', bn: 'স্কাই ও স্কিন টোন কালার ব্যালেন্স' },
      { en: 'Gown Detail & Clarity Refinement', bn: 'ব্রাইডাল পোশাকের সূক্ষ্ম ডিটেইল এনহ্যান্সমেন্ট' },
      { en: 'Natural Portrait Skin Retouching', bn: 'প্রাকৃতিক পোর্ট্রেট স্কিন রিটাচিং' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    isDemo: false,
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
    id: 'amazon-kitchenware-listing-suite',
    title: {
      en: 'Kitchenware Amazon Product Listing Suite',
      bn: 'কিচেনওয়্যার অ্যামাজন প্রোডাক্ট লিস্টিং স্যুট',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image: '/assets/aistudio/Apukumar___d972676a.jpg',
    imageAlt: {
      en: 'Amazon product listing image suite for stainless steel spice grinders, pizza cutter, and wooden serving tray with German feature infographics',
      bn: 'স্টেইনলেস স্টিল স্পাইস গ্রাইন্ডার, পিজ্জা কাটার ও সার্ভিং ট্রের জন্য অ্যামাজন প্রোডাক্ট লিস্টিং ও ইনফোগ্রাফিক ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Complete Amazon product listing visuals for European kitchenware—featuring clean main shots, dimension and feature infographics, lifestyle staging, and comparison layouts.',
      bn: 'ইউরোপীয় কিচেনওয়্যার ব্র্যান্ডের জন্য সম্পূর্ণ অ্যামাজন লিস্টিং ডিজাইন—মেইন ইমেজ, ডাইমেনশন ও ফিচার ইনফোগ্রাফিক, লাইফস্টাইল স্টেজিং এবং কম্প্যারিসন লেআউট।',
    },
    deliverables: [
      { en: 'Main Hero & Feature Callout Infographics', bn: 'মেইন হিরো ও ফিচার কলআউট ইনফোগ্রাফিক' },
      { en: 'Lifestyle Staging & Comparison Charts', bn: 'লাইফস্টাইল স্টেজিং ও কম্প্যারিসন চার্ট' },
      { en: 'Marketplace-Compliant High-Res Exports', bn: 'অ্যামাজন-স্ট্যান্ডার্ড হাই-রেজোলিউশন এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
  },
  {
    id: 'amazon-quercetin-supplement-suite',
    title: {
      en: 'Supplement Brand Amazon Listing & Infographics',
      bn: 'সাপ্লিমেন্ট ব্র্যান্ড অ্যামাজন লিস্টিং ও ইনফোগ্রাফিক',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image: '/assets/aistudio/Apukumar__09c5305e.jpg',
    imageAlt: {
      en: 'Amazon product listing images for VIODIS Quercetin supplement including main bottle shot, lifestyle scene, benefit infographic, and comparison chart',
      bn: 'সাপ্লিমেন্ট ব্র্যান্ডের অ্যামাজন প্রোডাক্ট লিস্টিং ডিজাইন—মেইন ইমেজ, লাইফস্টাইল, বেনিফিট ইনফোগ্রাফিক ও কম্প্যারিসন চার্ট',
    },
    aspect: 'standard',
    summary: {
      en: 'Conversion-driven Amazon listing image suite for a Quercetin dietary supplement—combining crisp main renders, benefit infographics, lifestyle scenes, and a competitor comparison chart.',
      bn: 'ডায়েটারি সাপ্লিমেন্টের জন্য কনভার্সন-ফোকাসড অ্যামাজন লিস্টিং ইমেজ—ক্লিন মেইন ইমেজ, বেনিফিট ইনফোগ্রাফিক, লাইফস্টাইল ভিজ্যুয়াল এবং কম্প্যারিসন চার্ট।',
    },
    deliverables: [
      { en: 'Clean Studio Main Product Image', bn: 'ক্লিন স্টুডিও মেইন প্রোডাক্ট ইমেজ' },
      { en: 'Benefit Infographics & Lifestyle Visuals', bn: 'হেলথ বেনিফিট ইনফোগ্রাফিক ও লাইফস্টাইল ভিজ্যুয়াল' },
      { en: 'Competitor Comparison Chart Module', bn: 'কম্পিটিটর কম্প্যারিসন চার্ট মডিউল' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
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
  {
    id: 'demo-video-fragrance-reel',
    title: {
      en: 'Luxury Fragrance Commercial & Reel Cut',
      bn: 'লাক্সারি ফ্র্যাগ্র্যান্স কমার্শিয়াল ও রিল এডিট',
    },
    category: 'video',
    categoryLabel: {
      en: 'Video Editing',
      bn: 'ভিডিও এডিটিং',
    },
    serviceId: 'video-editing',
    image: '/src/assets/images/video_reel_sample_1795458642919.jpg',
    imageAlt: {
      en: 'Demonstration frame of a luxury amber fragrance commercial edit with slow-motion water ripples and golden mist lighting',
      bn: 'লাক্সারি পারফিউম কমার্শিয়াল ভিডিও এডিট ও সিনেমাটিক কালার গ্রেডিংয়ের ডেমো ফ্রেম',
    },
    aspect: 'standard',
    summary: {
      en: 'Demonstration of slow-motion product spot editing, speed-ramp transitions, sound design layering, and rich amber-obsidian film grading for social and brand campaigns.',
      bn: 'স্লো-মোশন প্রোডাক্ট বিজ্ঞাপন এডিটিং, স্মুথ স্পিড-র‍্যাম্প ট্রানজিশন, সাউন্ড ডিজাইন এবং সিনেমাটিক কালার গ্রেডিংয়ের ডেমো নমুনা।',
    },
    deliverables: [
      { en: 'Speed-Ramp & Slow-Motion Product Cut', bn: 'স্পিড-র‍্যাম্প ও স্লো-মোশন প্রোডাক্ট এডিট' },
      { en: 'Atmospheric Sound Design & Color Grade', bn: 'অ্যাটমোস্ফিয়ারিক সাউন্ড ডিজাইন ও কালার গ্রেড' },
      { en: '9:16 Reels, Shorts & 16:9 Ad Masters', bn: '9:16 রিলস, শর্টস ও 16:9 বিজ্ঞাপন মাস্টার' },
    ],
    tools: ['Adobe Premiere Pro', 'AI Creative Tools'],
    isDemo: true,
  },
  {
    id: 'demo-canvas-abstract-wallart',
    title: {
      en: 'Gallery-Grade Abstract Wall Canvas Design',
      bn: 'গ্যালারি-গ্রেড অ্যাবস্ট্রাক্ট ওয়াল ক্যানভাস ডিজাইন',
    },
    category: 'canvas',
    categoryLabel: {
      en: 'Canvas Design',
      bn: 'ক্যানভাস ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/src/assets/images/canvas_design_sample_1795458788207.jpg',
    imageAlt: {
      en: 'Demonstration sample of a luxury gallery-wrapped abstract gold and terracotta wall canvas design mounted on a dark architectural wall',
      bn: 'আধুনিক ইন্টেরিয়রের জন্য গোল্ড ও টেরাকোটা টেক্সচার্ড ওয়াল ক্যানভাস ডিজাইনের ডেমো নমুনা',
    },
    aspect: 'standard',
    summary: {
      en: 'Demonstration of high-resolution custom wall canvas artwork, gallery-wrap bleed setup, realistic interior staging mockups, and print-ready CMYK preparation for home decor and e-commerce brands.',
      bn: 'হোম ডেকর ও ই-কমার্স ব্র্যান্ডের জন্য হাই-রেজোলিউশন কাস্টম ক্যানভাস আর্টওয়ার্ক, গ্যালারি-র‍্যাপ ব্লিড সেটআপ, ইন্টেরিয়র মকআপ এবং প্রিন্ট-রেডি CMYK ফাইল প্রস্তুতির ডেমো নমুনা।',
    },
    deliverables: [
      { en: '300 DPI Print-Ready Canvas Artwork', bn: '300 DPI প্রিন্ট-রেডি ক্যানভাস আর্টওয়ার্ক' },
      { en: 'Gallery-Wrap Bleed & Multi-Size Ratios', bn: 'গ্যালারি-র‍্যাপ ব্লিড ও বিভিন্ন সাইজ রেশিও' },
      { en: 'Photorealistic Interior Wall Mockups', bn: 'রিয়েলিস্টিক ইন্টেরিয়র ওয়াল মকআপ' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'AI Creative Tools'],
    isDemo: true,
  },
];
