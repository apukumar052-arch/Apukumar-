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
    image: '/assets/aistudio/Sample4_efa31a64.jpg',
    imageAlt: {
      en: 'Golden-hour wedding couple portrait with flowing veil color graded for Wedding Photo Editing',
      bn: 'গোল্ডেন-আওয়ার ওয়েডিং কাপল পোর্ট্রেট ও কালার গ্রেডিং নমুনা',
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
    image: '/assets/aistudio/portfolio_photo_retouch_1795434062890_3d6054c5.jpg',
    imageAlt: {
      en: 'Before and after high-end beauty portrait skin retouching comparison preserving natural skin texture',
      bn: 'প্রাকৃতিক স্কিন টেক্সচার বজায় রেখে বিফোর-আফটার হাই-এন্ড বিউটি স্কিন রিটাচিং নমুনা',
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
    image: '/assets/aistudio/Apukumar___d972676a.jpg',
    imageAlt: {
      en: 'Amazon product listing image showcase featuring main images, infographics, lifestyle visuals, and comparison layouts for kitchenware',
      bn: 'কিচেনওয়্যার ব্র্যান্ডের জন্য মেইন ইমেজ, ইনফোগ্রাফিক, লাইফস্টাইল ও কম্প্যারিসনসহ অ্যামাজন প্রোডাক্ট লিস্টিং ডিজাইন নমুনা',
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
    image: '/assets/aistudio/6_bfc76415.jpg',
    imageAlt: {
      en: 'Six-part fitness brand social media graphic design campaign showcasing bold typography and neon lighting',
      bn: 'বোল্ড টাইপোগ্রাফি ও নিয়ন লাইটিংসহ ছয়টি ফিটনেস ব্র্যান্ড সোশ্যাল মিডিয়া গ্রাফিক ডিজাইন নমুনা',
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
    id: 'youtube-thumbnail-design',
    number: '05',
    portfolioCategory: 'youtube',
    iconName: 'play',
    image: '/assets/aistudio/Youtube_Thambnail_Design__b839e30e.jpg',
    imageAlt: {
      en: 'Four high-CTR YouTube thumbnail designs showcasing dramatic lighting, expressive portraits, and bold viral typography',
      bn: 'আকর্ষণীয় লাইটিং, এক্সপ্রেসিভ পোর্ট্রেট ও বোল্ড টাইপোগ্রাফিসহ চারটি হাই-CTR ইউটিউব থাম্বনেইল ডিজাইন নমুনা',
    },
    title: {
      en: 'YouTube Thumbnail Design',
      bn: 'ইউটিউব থাম্বনেইল ডিজাইন',
    },
    subtitle: {
      en: 'High-CTR Visual Hooks & Creator Branding',
      bn: 'হাই-CTR ভিজ্যুয়াল হুক ও ক্রিয়েটর ব্র্যান্ডিং',
    },
    description: {
      en: 'Scroll-stopping, high-contrast YouTube thumbnails engineered for instant mobile legibility, emotional curiosity, and stronger click-through rates across niches.',
      bn: 'মোবাইল ও ডেস্কটপ ফিডে তাৎক্ষণিক নজর কাড়ার জন্য হাই-কনট্রাস্ট, স্পষ্ট টাইপোগ্রাফি এবং উচ্চ ক্লিক-থ্রু রেটের ইউটিউব থাম্বনেইল ডিজাইন।',
    },
    features: [
      { en: 'High-CTR Thumbnail Concepts', bn: 'হাই-CTR থাম্বনেইল কনসেপ্ট' },
      { en: 'Subject Cutout & Rim-Light Relighting', bn: 'সাবজেক্ট কাটআউট ও রিম-লাইট রিলাইটিং' },
      { en: 'Bold, Mobile-Legible Typography', bn: 'বোল্ড ও মোবাইল-বান্ধব টাইপোগ্রাফি' },
      { en: 'Podcast, Tech & Documentary Styles', bn: 'পডকাস্ট, টেক ও ডকুমেন্টারি স্টাইল' },
      { en: 'Before/After & Storytelling Visuals', bn: 'বিফোর/আফটার ও স্টোরিটেলিং ভিজ্যুয়াল' },
      { en: 'Consistent Channel Branding & 16:9 HD', bn: 'চ্যানেল ব্র্যান্ডিং ও 16:9 হাই-রেজোলিউশন এক্সপোর্ট' },
    ],
  },
];
