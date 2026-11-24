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
    id: 'wedding-meadow-prism-flare',
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
    id: 'wedding-alpine-sunset-veil',
    title: {
      en: 'Alpine Sunset & Flowing Veil Wedding Edit',
      bn: 'আলপাইন সানসেট ও ভেইল ওয়েডিং এডিট',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/qqww_05e549dd.jpg',
    imageAlt: {
      en: 'Wedding couple embracing in an alpine meadow at sunset with wind-swept bridal veil enhancement and warm golden-hour lighting',
      bn: 'পাহাড়ি প্রান্তরে সূর্যাস্তের সোনালি আলো ও উড়ন্ত ভেইলসহ ওয়েডিং কাপল পোর্ট্রেট এডিটিং',
    },
    aspect: 'portrait',
    summary: {
      en: 'Cinematic golden-hour sunset lighting, realistic flowing veil compositing, rich earthy meadow grading, and soft background depth for a dramatic mountain wedding portrait.',
      bn: 'সিনেমাটিক সূর্যাস্তের আলো, বাস্তবসম্মত উড়ন্ত ভেইল কম্পোজিটিং, গভীর প্রাকৃতিক কালার গ্রেডিং এবং সফট ব্যাকগ্রাউন্ড ডেপথ।',
    },
    deliverables: [
      { en: 'Flowing Veil Compositing & Blending', bn: 'উড়ন্ত ভেইল কম্পোজিটিং ও ন্যাচারাল ব্লেন্ডিং' },
      { en: 'Golden Sunset Rim-Light Enhancement', bn: 'গোল্ডেন সানসেট রিম-লাইট এনহ্যান্সমেন্ট' },
      { en: 'Moody Editorial Color Grading', bn: 'মুডি এডিটোরিয়াল কালার গ্রেডিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'wedding-tuscan-courtyard-gold',
    title: {
      en: 'Tuscan Courtyard Golden-Hour Wedding Grade',
      bn: 'টাস্কান কোর্টইয়ার্ড গোল্ডেন-আওয়ার ওয়েডিং গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/portfolio_wedding_editorial_1795434062566_cd93c90c.jpg',
    imageAlt: {
      en: 'Bride and groom walking hand-in-hand through a stone courtyard at sunset with luminous sheer veil and warm editorial color grading',
      bn: 'পাথরের কোর্টইয়ার্ডে গোল্ডেন-আওয়ার আলোতে ওয়েডিং কাপল পোর্ট্রেট ও এডিটোরিয়াল কালার গ্রেডিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Timeless warm filmic grading across stone textures, balanced white highlights on sheer bridal fabric, natural skin tones, and soft sunset glow.',
      bn: 'উষ্ণ ফিল্মিক কালার গ্রেডিং, ব্রাইডাল পোশাকের হাইলাইট রিকভারি, প্রাকৃতিক স্কিন টোন এবং সূর্যাস্তের নরম আলোর সমন্বয়।',
    },
    deliverables: [
      { en: 'Timeless Filmic Lightroom Grading', bn: 'টাইমলেস ফিল্মিক লাইটরুম গ্রেডিং' },
      { en: 'Bridal Dress & Veil Highlight Recovery', bn: 'ব্রাইডাল পোশাক ও ভেইল হাইলাইট রিকভারি' },
      { en: 'Natural Skin Tone & Clarity Polish', bn: 'প্রাকৃতিক স্কিন টোন ও ক্ল্যারিটি রিফাইনমেন্ট' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'wedding-autumn-backlit-embrace',
    title: {
      en: 'Autumn Backlit Embrace & Leaf Overlay Edit',
      bn: 'শরতের সোনালি আলো ও ওয়েডিং কালার গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/Sample_7fc5e102.jpg',
    imageAlt: {
      en: 'Backlit autumn wedding couple portrait with golden sun flare and floating amber maple leaves',
      bn: 'শরতের ঝরা পাতা ও সোনালি ব্যাকলাইটের সাথে রোমান্টিক ওয়েডিং কাপল এডিটিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Warm backlit sun-flare grading, atmospheric drifting autumn foliage depth, rich burgundy-amber contrast, and delicate bridal lace detail preservation.',
      bn: 'সোনালি ব্যাকলাইট ফ্লেয়ার, শরতের ভাসমান পাতার ডেপথ ইফেক্ট, উষ্ণ অ্যাম্বার কনট্রাস্ট এবং ব্রাইডাল লেসের সূক্ষ্ম ডিটেইল।',
    },
    deliverables: [
      { en: 'Atmospheric Sun-Flare & Backlight Grade', bn: 'সোনালি ব্যাকলাইট ও ফ্লেয়ার গ্রেডিং' },
      { en: 'Depth-of-Field Autumn Foliage Overlay', bn: 'ন্যাচারাল ডেপথ-অফ-ফিল্ড অটাম ওভারলে' },
      { en: 'Lace Detail & Warm Skin Balance', bn: 'ব্রাইডাল লেস ডিটেইল ও স্কিন ব্যালেন্স' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'wedding-before-after-veil-composite',
    title: {
      en: 'Before & After Veil Compositing & Sunset Grade',
      bn: 'বিফোর-আফটার ভেইল কম্পোজিটিং ও সানসেট গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/eeee_60ad8723.jpg',
    imageAlt: {
      en: 'Side-by-side before and after wedding photo retouching showing dramatic veil extension, golden sunset light, and deep color grading',
      bn: 'ওয়েডিং ফটো এডিটিংয়ের বিফোর-আফটার তুলনা—উড়ন্ত ভেইল সংযোজন, সূর্যাস্তের আলো ও কালার গ্রেডিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Side-by-side transformation turning a flat overcast RAW shot into a glowing sunset editorial—adding a wind-swept bridal veil, sun bloom, shadow richness, and subtle lens blur.',
      bn: 'সাধারণ মেঘলা RAW ছবিকে উড়ন্ত ভেইল, সূর্যাস্তের সোনালি আলো এবং গভীর সিনেমাটিক কালার গ্রেডিংয়ে রূপান্তরের বিফোর-আফটার নমুনা।',
    },
    deliverables: [
      { en: 'Full Before & After Creative Retouch', bn: 'সম্পূর্ণ বিফোর-আফটার ক্রিয়েটিভ রিটাচ' },
      { en: 'Realistic Veil Extension & Lighting Match', bn: 'বাস্তবসম্মত ভেইল এক্সটেনশন ও লাইট ম্যাচিং' },
      { en: 'Dynamic Range & Color Depth Sculpting', bn: 'ডাইনামিক রেঞ্জ ও কালার ডেপথ এনহ্যান্সমেন্ট' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'wedding-sunbeam-meadow-portrait',
    title: {
      en: 'Sunbeam Meadow Wedding Portrait Grade',
      bn: 'সূর্যরশ্মি ও উষ্ণ টোনে ওয়েডিং পোর্ট্রেট এডিট',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/Sample3_08b8ded7.jpg',
    imageAlt: {
      en: 'Bride and groom embracing in an open field enhanced with dramatic golden sunbeams and warm vintage film grading',
      bn: 'খোলা মাঠে সোনালি সূর্যরশ্মি ও উষ্ণ ভিন্টেজ ফিল্ম টোনে ওয়েডিং কাপল পোর্ট্রেট',
    },
    aspect: 'portrait',
    summary: {
      en: 'Dramatic diagonal golden sunbeam lighting, warm vintage film color toning, balanced highlights across the gown and veil, and natural portrait retouching.',
      bn: 'সোনালি সূর্যরশ্মি সংযোজন, উষ্ণ ভিন্টেজ ফিল্ম কালার টোন, ব্রাইডাল গাউনের হাইলাইট ব্যালেন্স এবং প্রাকৃতিক পোর্ট্রেট রিটাচিং।',
    },
    deliverables: [
      { en: 'Directional Golden Sunbeam Lighting', bn: 'ন্যাচারাল গোল্ডেন সূর্যরশ্মি লাইটিং' },
      { en: 'Warm Editorial Film Color Tone', bn: 'উষ্ণ এডিটোরিয়াল ফিল্ম কালার টোন' },
      { en: 'Portrait Skin & Suit Contrast Polish', bn: 'পোর্ট্রেট স্কিন ও কনট্রাস্ট ব্যালেন্সিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'wedding-airy-garden-film-grade',
    title: {
      en: 'Airy Film-Style Garden Wedding Grade',
      bn: 'সফট ফিল্ম-স্টাইল গার্ডেন ওয়েডিং গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/550park-luxury-wedding-films-fOqZzy0SB3w-unsplash_0d81307c.jpg',
    imageAlt: {
      en: 'Sunlit outdoor garden wedding couple portrait with soft dreamy film bloom, natural eucalyptus greens, and creamy highlights',
      bn: 'রোদেলা বাগানে সফট ফিল্ম ব্লুম ও প্রাকৃতিক কালার টোনে ওয়েডিং কাপল পোর্ট্রেট',
    },
    aspect: 'standard',
    summary: {
      en: 'Light-and-airy film aesthetic featuring creamy sunlit highlights, refined botanical greens, subtle analog halation, and soft flattering skin retouching.',
      bn: 'সফট ও উজ্জ্বল ফিল্মি স্টাইল—ক্রিমি হাইলাইট, প্রাকৃতিক সবুজের ভারসাম্য, নরম সানলাইট ব্লুম এবং সূক্ষ্ম স্কিন রিটাচিং।',
    },
    deliverables: [
      { en: 'Light & Airy Film Emulation Grade', bn: 'লাইট অ্যান্ড এয়ারি ফিল্ম কালার গ্রেড' },
      { en: 'Soft Skin Luminosity & Retouching', bn: 'সফট স্কিন লুমিনোসিটি ও রিটাচিং' },
      { en: 'Natural Foliage & White Dress Balance', bn: 'প্রাকৃতিক সবুজ ও সাদা পোশাকের ব্যালেন্স' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'wedding-selective-crimson-manipulation',
    title: {
      en: 'Selective Crimson Color & Wedding Manipulation',
      bn: 'সিলেক্টিভ কালার ও ওয়েডিং ম্যানিপুলেশন এডিট',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/Angela_and_Jason_s_Wedding_-_292_024a2187.jpg',
    imageAlt: {
      en: 'Dramatic selective color wedding portrait with monochrome landscape backdrop, vibrant crimson accents, and wedding calligraphy typography',
      bn: 'সাদাকালো ব্যাকগ্রাউন্ডের সাথে উজ্জ্বল লাল সিলেক্টিভ কালার ও ক্যালিগ্রাফি টাইপোগ্রাফি ওয়েডিং এডিট',
    },
    aspect: 'standard',
    summary: {
      en: 'Creative selective-color isolation highlighting vivid crimson bridal accents against a moody monochrome horizon, paired with warm sky toning and custom wedding calligraphy.',
      bn: 'সাদাকালো আবহের মাঝে উজ্জ্বল লাল রঙের সিলেক্টিভ কালার হাইলাইট, সফট সানসেট গ্লো এবং কাস্টম ওয়েডিং ক্যালিগ্রাফি ডিজাইন।',
    },
    deliverables: [
      { en: 'Precision Selective Color Isolation', bn: 'নিখুঁত সিলেক্টিভ কালার আইসোলেশন' },
      { en: 'Monochrome Backdrop & Depth Grading', bn: 'মনোক্রোম ব্যাকড্রপ ও ডেপথ গ্রেডিং' },
      { en: 'Custom Wedding Calligraphy Overlay', bn: 'কাস্টম ওয়েডিং ক্যালিগ্রাফি টাইপোগ্রাফি' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'demo-retouch-chronograph',
    title: {
      en: 'High-End Beauty Skin Retouching',
      bn: 'হাই-এন্ড বিউটি স্কিন রিটাচিং',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image: '/assets/aistudio/portfolio_photo_retouch_1795434062890_3d6054c5.jpg',
    imageAlt: {
      en: 'Before and after high-end beauty portrait skin retouching showcasing blemish cleanup, natural pore texture, and warm editorial color grading',
      bn: 'প্রাকৃতিক স্কিন টেক্সচার বজায় রেখে বিফোর-আফটার হাই-এন্ড বিউটি স্কিন রিটাচিং ও কালার গ্রেডিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Before-and-after beauty portrait retouching with non-destructive frequency separation, blemish and tape removal, preserved natural pores, and refined makeup and lip color enhancement.',
      bn: 'নন-ডেস্ট্রাক্টিভ ফ্রিকোয়েন্সি সেপারেশন, দাগ ও অবাঞ্ছিত অংশ রিমুভাল, প্রাকৃতিক স্কিন টেক্সচার সংরক্ষণ এবং উষ্ণ কালার এনহ্যান্সমেন্টসহ বিফোর-আফটার বিউটি স্কিন রিটাচিং।',
    },
    deliverables: [
      { en: 'Frequency-Separation Skin & Pore Preservation', bn: 'ফ্রিকোয়েন্সি সেপারেশন ও প্রাকৃতিক স্কিন টেক্সচার' },
      { en: 'Blemish, Stray Hair & Detail Cleanup', bn: 'দাগ, অবাঞ্ছিত অংশ ও সূক্ষ্ম ডিটেইল ক্লিনআপ' },
      { en: 'Dodge & Burn Contour & Tonal Grading', bn: 'ডজ অ্যান্ড বার্ন কন্টুর ও টোনাল গ্রেডিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
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
      en: 'Editorial Portrait Retouching & Color Grade',
      bn: 'এডিটোরিয়াল পোর্ট্রেট রিটাচিং ও কালার গ্রেড',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image: '/assets/aistudio/pooria-shahriari-9l4pbq7fTbY-unsplash_e6880e64.jpg',
    imageAlt: {
      en: 'Close-up editorial portrait retouched in Adobe Photoshop with natural skin texture, balanced tones, and magazine typography',
      bn: 'অ্যাডোবি ফটোশপে প্রাকৃতিক স্কিন টেক্সচার ও এডিটোরিয়াল কালার গ্রেডিং করা পোর্ট্রেট রিটাচিং',
    },
    aspect: 'portrait',
    summary: {
      en: 'High-end Photoshop portrait retouching preserving natural skin texture, refined eye and lip tonal balance, subtle film grain, and editorial cover typography.',
      bn: 'অ্যাডোবি ফটোশপে প্রাকৃতিক স্কিন টেক্সচার বজায় রেখে পোর্ট্রেট রিটাচিং, নিখুঁত কালার ব্যালেন্স, সফট ফিল্ম গ্রেইন এবং এডিটোরিয়াল টাইপোগ্রাফি।',
    },
    deliverables: [
      { en: 'Non-Destructive Skin Texture Retouch', bn: 'প্রাকৃতিক স্কিন টেক্সচার রিটাচিং' },
      { en: 'Natural Eye, Lip & Tonal Balancing', bn: 'চোখ, ঠোঁট ও স্কিন টোন ব্যালেন্সিং' },
      { en: 'Editorial Color Grade & Cover Typography', bn: 'এডিটোরিয়াল কালার গ্রেড ও কভার টাইপোগ্রাফি' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'retouching-meadow-child-portrait',
    title: {
      en: 'Outdoor Child Portrait & Moody Bokeh Retouch',
      bn: 'আউটডোর পোর্ট্রেট ও মুডি বোকেহ রিটাচিং',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image: '/assets/aistudio/7_531c3ed7.jpg',
    imageAlt: {
      en: 'Outdoor child portrait retouched in Adobe Photoshop with creamy background bokeh, muted earthy meadow tones, vibrant red hat accent, and natural skin retouching',
      bn: 'অ্যাডোবি ফটোশপে সফট ব্যাকগ্রাউন্ড বোকেহ, উষ্ণ প্রাকৃতিক কালার টোন ও সূক্ষ্ম স্কিন রিটাচিং করা আউটডোর পোর্ট্রেট',
    },
    aspect: 'standard',
    summary: {
      en: 'Fine-art outdoor portrait retouching combining creamy depth-of-field bokeh, subtle warm sun-haze, muted earthy grass tones, crisp dress clarity, and delicate natural skin retouching.',
      bn: 'সফট ব্যাকগ্রাউন্ড বোকেহ, উষ্ণ সান-হেজ, পরিমিত প্রাকৃতিক কালার টোন, পোশাকের উজ্জ্বল ডিটেইল এবং স্বাভাবিক স্কিন রিটাচিংসহ ফাইন-আর্ট আউটডোর পোর্ট্রেট।',
    },
    deliverables: [
      { en: 'Natural Portrait Skin & Eye Enhancement', bn: 'প্রাকৃতিক স্কিন ও চোখের উজ্জ্বলতা রিটাচ' },
      { en: 'Creamy Background Bokeh & Sun-Haze Glow', bn: 'সফট ব্যাকগ্রাউন্ড বোকেহ ও সান-হেজ গ্লো' },
      { en: 'Muted Earthy Meadow Color Grading', bn: 'প্রাকৃতিক আর্থি কালার গ্রেডিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'retouching-garden-bubbles-portrait',
    title: {
      en: 'Vibrant Garden Portrait & Light Sculpting',
      bn: 'ভাইব্র্যান্ট গার্ডেন পোর্ট্রেট ও লাইট স্কাল্পটিং',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image: '/assets/aistudio/6_cf3b8f4f.jpg',
    imageAlt: {
      en: 'Outdoor children portrait retouched with lush emerald grass color grading, warm golden sunlight glow, crisp floating bubbles, and vibrant floral dress tones',
      bn: 'সজীব সবুজ ঘাসের কালার গ্রেডিং, সোনালি সূর্যের আভা এবং উজ্জ্বল ডিটেইলসহ আউটডোর পোর্ট্রেট রিটাচিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Rich outdoor family portrait retouching featuring lush emerald-green depth, warm directional sunlight bloom, crisp bubble highlights, vibrant purple floral contrast, and clean skin tones.',
      bn: 'সমৃদ্ধ সবুজ কালার ডেপথ, সোনালি সূর্যের আলোর আভা, ভাসমান বুদবুদের নিখুঁত ডিটেইল এবং প্রাকৃতিক স্কিন টোনসহ আউটডোর ফ্যামিলি পোর্ট্রেট রিটাচিং।',
    },
    deliverables: [
      { en: 'Lush Foliage & Floral Color Harmonization', bn: 'প্রাকৃতিক সবুজ ও পোশাকের কালার হার্মোনাইজেশন' },
      { en: 'Warm Sunlight Bloom & Contrast Depth', bn: 'উষ্ণ সানলাইট ব্লুম ও কনট্রাস্ট ডেপথ' },
      { en: 'Natural Skin Tone & Detail Retouching', bn: 'প্রাকৃতিক স্কিন টোন ও ডিটেইল রিটাচিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'graphic-fitness-social-suite',
    title: {
      en: 'Fitness Brand Social Media Ad Suite',
      bn: 'ফিটনেস ব্র্যান্ড সোশ্যাল মিডিয়া অ্যাড স্যুট',
    },
    category: 'graphic',
    categoryLabel: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/6_bfc76415.jpg',
    imageAlt: {
      en: 'Six-part high-impact fitness and gym social media promotional post designs with neon red lighting and bold typography',
      bn: 'নিয়ন লাল লাইটিং ও বোল্ড টাইপোগ্রাফিসহ ছয়টি ফিটনেস ও জিম সোশ্যাল মিডিয়া প্রোমোশনাল পোস্ট ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Cohesive six-post social media campaign designed for a fitness brand—combining neon red lighting effects, before-and-after visuals, bold promotional typography, and strong call-to-action hierarchy.',
      bn: 'ফিটনেস ব্র্যান্ডের জন্য ছয়-পোস্টের সমন্বিত সোশ্যাল মিডিয়া ক্যাম্পেইন—নিয়ন রেড লাইটিং, বিফোর-আফটার ভিজ্যুয়াল, বোল্ড টাইপোগ্রাফি এবং স্পষ্ট কল-টু-অ্যাকশন লেআউট।',
    },
    deliverables: [
      { en: '6-Piece Cohesive Social Media Ad Series', bn: '৬টি সমন্বিত সোশ্যাল মিডিয়া অ্যাড সিরিজ' },
      { en: 'High-Contrast Subject Retouch & Neon Glow', bn: 'হাই-কনট্রাস্ট সাবজেক্ট রিটাচ ও নিয়ন গ্লো' },
      { en: 'Instagram & Facebook Ready Campaign Formats', bn: 'ইনস্টাগ্রাম ও ফেসবুক-রেডি ক্যাম্পেইন ফরম্যাট' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
  },
  {
    id: 'graphic-ozil-sports-poster',
    title: {
      en: 'Golden Football Sports Poster & Manipulation',
      bn: 'গোল্ডেন ফুটবল স্পোর্টস পোস্টার ও ম্যানিপুলেশন',
    },
    category: 'graphic',
    categoryLabel: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/Untitled-1_5e73d74a.jpg',
    imageAlt: {
      en: 'Golden-toned football tribute sports poster framed on a gold-to-black studio backdrop featuring multi-layered athlete photo manipulation and vertical typography',
      bn: 'সোনালি-কালো ব্যাকড্রপে উপস্থাপিত লেয়ার্ড ফটো ম্যানিপুলেশন ও ভার্টিক্যাল টাইপোগ্রাফিসহ ফুটবল স্পোর্টস পোস্টার ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Dynamic multi-exposure sports poster blending action cutouts, stadium architecture, golden volumetric lighting, custom vertical display typography, and signature integration.',
      bn: 'অ্যাকশন কাটআউট, স্টেডিয়াম ব্যাকগ্রাউন্ড, সোনালি ভলিউমেট্রিক লাইটিং, কাস্টম ভার্টিক্যাল টাইপোগ্রাফি ও সিগনেচার ইন্টিগ্রেশনসহ স্পোর্টস পোস্টার ডিজাইন।',
    },
    deliverables: [
      { en: 'Multi-Layer Athlete Cutout & Compositing', bn: 'মাল্টি-লেয়ার সাবজেক্ট কাটআউট ও কম্পোজিটিং' },
      { en: 'Golden Stadium Glow & Color Harmonization', bn: 'গোল্ডেন স্টেডিয়াম গ্লো ও কালার হার্মোনাইজেশন' },
      { en: 'Custom Editorial Poster Typography', bn: 'কাস্টম এডিটোরিয়াল পোস্টার টাইপোগ্রাফি' },
    ],
    tools: ['Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'graphic-saka-matchday-poster',
    title: {
      en: 'Crimson Matchday Sports Collage Poster',
      bn: 'ক্রিমসন ম্যাচডে স্পোর্টস কোলাজ পোস্টার',
    },
    category: 'graphic',
    categoryLabel: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/Untitled-2t_9352c121.jpg',
    imageAlt: {
      en: 'High-contrast crimson and black football matchday collage poster presented on a red-to-black studio backdrop with layered player portraits and bold typography',
      bn: 'লাল-কালো ব্যাকড্রপে উপস্থাপিত লেয়ার্ড প্লেয়ার পোর্ট্রেট ও বোল্ড টাইপোগ্রাফিসহ ফুটবল ম্যাচডে পোস্টার ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'High-energy matchday poster artwork combining dramatic crimson-and-obsidian lighting, precision multi-player collage blending, depth shadows, and impactful typographic layering.',
      bn: 'ড্রামাটিক ক্রিমসন ও কালো লাইটিং, মাল্টি-প্লেয়ার কোলাজ ব্লেন্ডিং, ডেপথ শ্যাডো এবং বোল্ড টাইপোগ্রাফিসহ আধুনিক ম্যাচডে স্পোর্টস পোস্টার।',
    },
    deliverables: [
      { en: 'Precision Multi-Player Collage Compositing', bn: 'নিখুঁত মাল্টি-প্লেয়ার কোলাজ কম্পোজিটিং' },
      { en: 'Crimson Rim-Light & Contrast Grading', bn: 'ক্রিমসন রিম-লাইট ও কনট্রাস্ট গ্রেডিং' },
      { en: 'Layered Display Typography & Print Master', bn: 'লেয়ার্ড ডিসপ্লে টাইপোগ্রাফি ও প্রিন্ট মাস্টার' },
    ],
    tools: ['Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'graphic-rexmane-burgundy-banner',
    title: {
      en: 'Rexmane Premium Polo Apparel Ad Banner',
      bn: 'রেক্সমেন প্রিমিয়াম পোলো অ্যাপারেল অ্যাড ব্যানার',
    },
    category: 'graphic',
    categoryLabel: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/00_0ab581b6.jpg',
    imageAlt: {
      en: 'Burgundy fashion promotional banner design for Rexmane 100% cotton polo T-shirts with model cutout, color swatches, and size guide',
      bn: 'রেক্সমেন ১০০% কটন পোলো টি-শার্টের জন্য বার্গান্ডি প্রোমোশনাল ব্যানার, কালার সোয়াচ ও সাইজ গাইড ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'E-commerce fashion advertising banner crafted for Rexmane—pairing clean model extraction, deep burgundy brand palette, clear fabric callouts, and scannable size and color variant indicators.',
      bn: 'রেক্সমেন ফ্যাশন ব্র্যান্ডের জন্য ই-কমার্স প্রোমোশনাল ব্যানার—ক্লিন মডেল কাটআউট, ডিপ বার্গান্ডি কালার থিম, ফেব্রিক হাইলাইট এবং স্পষ্ট সাইজ ও কালার অপশন।',
    },
    deliverables: [
      { en: 'Clean Model Cutout & Shadow Compositing', bn: 'ক্লিন মডেল কাটআউট ও শ্যাডো কম্পোজিটিং' },
      { en: 'Editorial Typography & Color/Size UI', bn: 'এডিটোরিয়াল টাইপোগ্রাফি ও কালার/সাইজ গাইড' },
      { en: 'Web & Social Campaign Banner Export', bn: 'ওয়েব ও সোশ্যাল ক্যাম্পেইন ব্যানার এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
  },
  {
    id: 'graphic-rexmane-collection-banner',
    title: {
      en: 'Rexmane 2K26 New Collection Campaign Banner',
      bn: 'রেক্সমেন 2K26 নিউ কালেকশন ক্যাম্পেইন ব্যানার',
    },
    category: 'graphic',
    categoryLabel: {
      en: 'Graphic Design',
      bn: 'গ্রাফিক ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/8_876161b8.jpg',
    imageAlt: {
      en: 'Bold modern apparel campaign banner for Rexmane 2K26 New Collection with oversized background typography, product feature callout lines, and terracotta accents',
      bn: 'রেক্সমেন 2K26 নিউ কালেকশনের জন্য বোল্ড ব্যাকগ্রাউন্ড টাইপোগ্রাফি ও ফিচার কলআউটসহ ফ্যাশন ক্যাম্পেইন ব্যানার',
    },
    aspect: 'standard',
    summary: {
      en: 'High-impact seasonal collection hero banner featuring depth-layered oversized typography behind the model, clean pointer callouts for fabric quality, and sharp geometric color blocking.',
      bn: 'মডেলের পেছনে বোল্ড ডেপথ-লেয়ার্ড টাইপোগ্রাফি, কাপড়ের মান নির্দেশক কলআউট লাইন এবং আধুনিক জ্যামিতিক কালার ব্লকিংসহ সিজনাল ফ্যাশন ব্যানার।',
    },
    deliverables: [
      { en: 'Depth-Layered Hero Typography Composition', bn: 'ডেপথ-লেয়ার্ড হিরো টাইপোগ্রাফি কম্পোজিশন' },
      { en: 'Product Feature Pointer Infographics', bn: 'প্রোডাক্ট ফিচার পয়েন্টার ইনফোগ্রাফিক' },
      { en: 'High-Resolution Storefront & Ad Master', bn: 'হাই-রেজোলিউশন স্টোরফ্রন্ট ও অ্যাড মাস্টার' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
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
