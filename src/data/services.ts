import type { ServiceItem } from '../types/content';

/**
 * ============================================================================
 * CENTRALIZED SERVICES DATA — APU KUMAR PORTFOLIO
 * ============================================================================
 * Update service images, descriptions, or capability bullet lists here.
 * Each service maps directly to a portfolio category and contact form option.
 */

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wedding-photo-editing',
    number: '01',
    portfolioCategory: 'wedding',
    iconName: 'camera',
    image: '/src/assets/images/portfolio_wedding_editorial_1795434062566.jpg',
    imageAlt: {
      en: 'Warm golden-hour editorial wedding couple color grading showcase',
      bn: 'গোল্ডেন-আওয়ার ওয়েডিং কাপল কালার গ্রেডিং নমুনা',
    },
    title: {
      en: 'Wedding Photo Editing',
      bn: 'ওয়েডিং ফটো এডিটিং',
    },
    subtitle: {
      en: 'Timeless Color Grading & Editorial Consistency',
      bn: 'সিনেমাটিক কালার গ্রেডিং ও এডিটোরিয়াল সামঞ্জস্য',
    },
    description: {
      en: 'Cohesive gallery-wide editing for wedding photographers who demand natural skin tones, luminous highlights, and reliable turnaround during peak season.',
      bn: 'ওয়েডিং ফটোগ্রাফারদের জন্য সম্পূর্ণ গ্যালারিতে একই মানের কালার টোন, প্রাকৃতিক স্কিন রিটাচিং এবং দ্রুত ডেলিভারি।',
    },
    features: [
      { en: 'Professional Wedding Photo Editing', bn: 'প্রফেশনাল ওয়েডিং ফটো এডিটিং' },
      { en: 'Lightroom Color Grading', bn: 'লাইটরুম কালার গ্রেডিং' },
      { en: 'Wedding Retouching', bn: 'ওয়েডিং রিটাচিং' },
      { en: 'Skin Retouching', bn: 'প্রাকৃতিক স্কিন রিটাচিং' },
      { en: 'Wedding Album Editing', bn: 'ওয়েডিং অ্যালবাম এডিটিং' },
      { en: 'Professional Wedding Presets', bn: 'প্রফেশনাল ওয়েডিং প্রিসেট' },
      { en: 'Consistent Wedding Photography Style', bn: 'ধারাবাহিক ওয়েডিং ফটোগ্রাফি স্টাইল' },
    ],
  },
  {
    id: 'professional-photo-editing',
    number: '02',
    portfolioCategory: 'retouching',
    iconName: 'layers',
    image: '/src/assets/images/portfolio_photo_retouch_1795434062890.jpg',
    imageAlt: {
      en: 'Commercial luxury chronograph wristwatch retouching on dark obsidian stone',
      bn: 'লাক্সারি ঘড়ির হাই-এন্ড কমার্শিয়াল ফটো রিটাচিং নমুনা',
    },
    title: {
      en: 'Professional Photo Editing',
      bn: 'প্রফেশনাল ফটো এডিটিং',
    },
    subtitle: {
      en: 'High-Precision Photoshop Retouching & Restoration',
      bn: 'নিখুঁত ফটোশপ রিটাচিং ও ইমেজ রিস্টোরেশন',
    },
    description: {
      en: 'Pixel-accurate commercial post-production for e-commerce brands, apparel studios, real estate agencies, and fine archival photo restoration.',
      bn: 'ই-কমার্স, ফ্যাশন, রিয়েল এস্টেট এবং পুরনো ছবি পুনরুদ্ধারের জন্য নিখুঁত ফটোশপ এডিটিং ও রিটাচিং।',
    },
    features: [
      { en: 'Photoshop Photo Editing', bn: 'ফটোশপ ফটো এডিটিং' },
      { en: 'Background Removal', bn: 'নিখুঁত ব্যাকগ্রাউন্ড রিমুভাল' },
      { en: 'Image Retouching', bn: 'হাই-এন্ড ইমেজ রিটাচিং' },
      { en: 'Old Photo Restoration', bn: 'পুরনো ছবি রিস্টোরেশন' },
      { en: 'Photo Manipulation', bn: 'ক্রিয়েটিভ ফটো ম্যানিপুলেশন' },
      { en: 'Product Photo Editing', bn: 'প্রোডাক্ট ফটো এডিটিং' },
      { en: 'Real Estate Photo Editing', bn: 'রিয়েল এস্টেট ফটো এডিটিং' },
      { en: 'Clothing Photo Editing', bn: 'ক্লদিং ও অ্যাপারেল ফটো এডিটিং' },
    ],
  },
  {
    id: 'amazon-product-design',
    number: '03',
    portfolioCategory: 'amazon',
    iconName: 'shoppingBag',
    image: '/src/assets/images/portfolio_amazon_product_1795434063234.jpg',
    imageAlt: {
      en: 'Premium matte black wireless headphones staged for Amazon A+ content',
      bn: 'অ্যামাজন A+ কনটেন্টের জন্য প্রিমিয়াম প্রোডাক্ট ভিজ্যুয়াল নমুনা',
    },
    title: {
      en: 'Amazon Product Design',
      bn: 'অ্যামাজন প্রোডাক্ট ডিজাইন',
    },
    subtitle: {
      en: 'High-Converting Listing Images & A+ / EBC Modules',
      bn: 'হাই-কনভার্টিং লিস্টিং ইমেজ ও A+ / EBC ডিজাইন',
    },
    description: {
      en: 'Strategic e-commerce visual systems built to clarify product benefits at a glance, elevate brand authority, and improve marketplace conversion rates.',
      bn: 'পণ্যের বৈশিষ্ট্য স্পষ্টভাবে তুলে ধরা এবং অ্যামাজন ব্র্যান্ড স্টোরের বিক্রয় বাড়াতে আধুনিক লিস্টিং ও ইনফোগ্রাফিক ডিজাইন।',
    },
    features: [
      { en: 'Amazon Product Listing Images', bn: 'অ্যামাজন প্রোডাক্ট লিস্টিং ইমেজ' },
      { en: 'Amazon A+ Content / EBC Design', bn: 'অ্যামাজন A+ কনটেন্ট / EBC ডিজাইন' },
      { en: 'Product Infographics', bn: 'প্রোডাক্ট ইনফোগ্রাফিক্স' },
      { en: 'Lifestyle Product Graphics', bn: 'লাইফস্টাইল প্রোডাক্ট গ্রাফিক্স' },
      { en: 'Amazon Store Graphics', bn: 'অ্যামাজন স্টোর গ্রাফিক্স' },
      { en: 'Product Feature Images', bn: 'প্রোডাক্ট ফিচার হাইলাইট ইমেজ' },
    ],
  },
  {
    id: 'graphic-design',
    number: '04',
    portfolioCategory: 'graphic',
    iconName: 'palette',
    image: '/src/assets/images/portfolio_graphic_design_1795434063708.jpg',
    imageAlt: {
      en: 'Minimal luxury brand stationery and packaging flat-lay graphic design showcase',
      bn: 'প্রিমিয়াম ব্র্যান্ড আইডেন্টিটি ও গ্রাফিক ডিজাইন নমুনা',
    },
    title: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    subtitle: {
      en: 'Distinctive Brand Assets, Thumbnails & Ad Visuals',
      bn: 'আকর্ষণীয় ব্র্যান্ড পরিচিতি, থাম্বনেইল ও বিজ্ঞাপন গ্রাফিক্স',
    },
    description: {
      en: 'Sharp, memorable visual identities and campaign graphics designed with intentional typography, clean hierarchy, and instant visual impact.',
      bn: 'আধুনিক টাইপোগ্রাফি ও নিখুঁত কম্পোজিশনে লোগো, সোশ্যাল মিডিয়া, থাম্বনেইল ও প্রিন্ট-রেডি বিজ্ঞাপন ডিজাইন।',
    },
    features: [
      { en: 'Logo Design', bn: 'লোগো ডিজাইন' },
      { en: 'YouTube Thumbnail Design', bn: 'ইউটিউব থাম্বনেইল ডিজাইন' },
      { en: 'Social Media Post Design', bn: 'সোশ্যাল মিডিয়া পোস্ট ডিজাইন' },
      { en: 'Flyer Design', bn: 'ফ্লায়ার ডিজাইন' },
      { en: 'Poster Design', bn: 'পোস্টার ডিজাইন' },
      { en: 'T-Shirt Design', bn: 'টি-শার্ট ডিজাইন' },
      { en: 'Premium Dispersion Effect', bn: 'প্রিমিয়াম ডিসপারশন ইফেক্ট' },
      { en: 'Advertising Graphics', bn: 'বিজ্ঞাপন ও ক্যাম্পেইন গ্রাফিক্স' },
    ],
  },
  {
    id: 'video-editing',
    number: '05',
    portfolioCategory: 'video',
    iconName: 'film',
    image: '/src/assets/images/portfolio_video_editing_1795434061964.jpg',
    imageAlt: {
      en: 'Cinematic twilight commercial film frame with warm reflection grading',
      bn: 'সিনেমাটিক কমার্শিয়াল ভিডিও এডিটিং ও কালার গ্রেডিং ফ্রেম',
    },
    title: {
      en: 'Video Editing',
      bn: 'ভিডিও এডিটিং',
    },
    subtitle: {
      en: 'Cinematic Cuts, AI Commercials & Marketing Video',
      bn: 'সিনেমাটিক এডিটিং, এআই বিজ্ঞাপন ও মার্কেটিং ভিডিও',
    },
    description: {
      en: 'Rhythm-driven video editing, sound pacing, color grading, and AI-powered ad production tailored for social feeds, commercial campaigns, and brand stories.',
      bn: 'সোশ্যাল মিডিয়া, প্রোমোশনাল ক্যাম্পেইন ও ব্র্যান্ড স্টোরিটেলিংয়ের জন্য গতিশীল এডিটিং, কালার গ্রেডিং ও এআই বিজ্ঞাপন ভিডিও।',
    },
    features: [
      { en: 'Professional Video Editing', bn: 'প্রফেশনাল ভিডিও এডিটিং' },
      { en: 'AI Advertisement Videos', bn: 'এআই বিজ্ঞাপন ভিডিও' },
      { en: 'Promotional Video Editing', bn: 'প্রোমোশনাল ভিডিও এডিটিং' },
      { en: 'Social Media Video Editing', bn: 'সোশ্যাল মিডিয়া ভিডিও এডিটিং' },
      { en: 'Cinematic Video Editing', bn: 'সিনেমাটিক ভিডিও এডিটিং' },
      { en: 'Marketing Video Content', bn: 'মার্কেটিং ভিডিও কনটেন্ট' },
    ],
  },
];
