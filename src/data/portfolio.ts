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
    id: 'wedding-gothic-arch-raw-grade',
    title: {
      en: 'Gothic Archway RAW Wedding Color Grading',
      bn: 'গথিক আর্চওয়ে RAW ওয়েডিং কালার গ্রেডিং',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image:
      '/assets/aistudio/Moody_Style_Wedding_Colour_Grading_Preset___Photo_Feaver_50aff31c.jpg',
    imageAlt: {
      en: 'Before and after Sony RAW wedding couple color grading under Gothic stone arches showing lifted shadows, warm golden foliage, and luminous bridal gown whites',
      bn: 'গথিক পাথরের আর্চের নিচে ওয়েডিং কাপলের বিফোর-আফটার RAW কালার গ্রেডিং ও উষ্ণ সোনালি লাইটিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Before-and-after Sony RAW (.ARW) wedding color grading under ivy-draped Gothic stone arches—recovering shadow detail, warming foliage into golden-amber tones, and preserving luminous bridal whites.',
      bn: 'গথিক আর্চওয়েতে তোলা ওয়েডিং কাপলের বিফোর-আফটার RAW কালার গ্রেডিং—শ্যাডো রিকভারি, উষ্ণ সোনালি পাতার টোন এবং উজ্জ্বল ব্রাইডাল গাউন ব্যালেন্সিং।',
    },
    deliverables: [
      { en: 'RAW Dynamic Range & Shadow Recovery', bn: 'RAW ডাইনামিক রেঞ্জ ও শ্যাডো রিকভারি' },
      { en: 'Warm Golden Foliage & Skin Tone Balance', bn: 'সোনালি প্রকৃতি ও প্রাকৃতিক স্কিন টোন ব্যালেন্স' },
      { en: 'Consistent Lightroom Wedding Preset Grade', bn: 'ধারাবাহিক লাইটরুম ওয়েডিং কালার গ্রেড' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'wedding-luxury-bridal-garden-grade',
    title: {
      en: 'Luxury Editorial Bridal Lightroom Grade',
      bn: 'লাক্সারি এডিটোরিয়াল ব্রাইডাল লাইটরুম গ্রেড',
    },
    category: 'wedding',
    categoryLabel: {
      en: 'Wedding Editing',
      bn: 'ওয়েডিং এডিটিং',
    },
    serviceId: 'wedding-photo-editing',
    image: '/assets/aistudio/LUXURY_LIGHTROOM_PRESETS___Thelutbay_afdb810c.jpg',
    imageAlt: {
      en: 'Before and after luxury editorial bridal portrait edited in Adobe Lightroom with crisp pure-white lace gown highlights, desaturated emerald foliage, and radiant skin tones',
      bn: 'অ্যাডোবি লাইটরুমে এডিট করা বিফোর-আফটার লাক্সারি ব্রাইডাল পোর্ট্রেট—উজ্জ্বল সাদা গাউন, এডিটোরিয়াল গ্রিন টোন ও নিখুঁত স্কিন কালার',
    },
    aspect: 'standard',
    summary: {
      en: 'Before-and-after luxury bridal Lightroom grading transforming flat daylight into crisp editorial contrast—brightening pure-white lace detail, refining foliage to cool sage-emerald, and illuminating natural skin tones.',
      bn: 'বিফোর-আফটার লাক্সারি ব্রাইডাল লাইটরুম গ্রেডিং—সাদা লেস গাউনের উজ্জ্বলতা বৃদ্ধি, এডিটোরিয়াল সবুজ টোন এবং প্রাণবন্ত স্কিন কালার কারেকশন।',
    },
    deliverables: [
      { en: 'Luminous Pure-White Bridal Lace Exposure', bn: 'উজ্জ্বল ও নিখুঁত সাদা ব্রাইডাল গাউন এক্সপোজার' },
      { en: 'Editorial Desaturated Foliage Color Grade', bn: 'এডিটোরিয়াল সবুজ পাতার কালার গ্রেডিং' },
      { en: 'Crisp Contrast & Radiant Skin Calibration', bn: 'নিখুঁত কনট্রাস্ট ও প্রাকৃতিক স্কিন ক্যালিব্রেশন' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
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
    id: 'retouching-editorial-beauty-honeycomb',
    title: {
      en: 'Editorial Beauty & Dodge-and-Burn Retouch',
      bn: 'এডিটোরিয়াল বিউটি ও ডজ-অ্যান্ড-বার্ন রিটাচিং',
    },
    category: 'retouching',
    categoryLabel: {
      en: 'Photo Retouching',
      bn: 'ফটো রিটাচিং',
    },
    serviceId: 'professional-photo-editing',
    image:
      '/assets/aistudio/High_end_Retouch___Beauty_Retouch__1____Images____Behance_e64ecc26.jpg',
    imageAlt: {
      en: 'Before and after high-end editorial beauty portrait retouching showing natural skin texture preservation, temple tape removal, sculpted lighting, and refined terracotta lip and nail color grading',
      bn: 'প্রাকৃতিক স্কিন টেক্সচার সংরক্ষণ, ডজ অ্যান্ড বার্ন কন্টুরিং এবং কালার গ্রেডিংসহ বিফোর-আফটার হাই-এন্ড এডিটোরিয়াল বিউটি রিটাচিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Magazine-grade before-and-after beauty retouching featuring micro dodge-and-burn contouring, non-destructive pore preservation, temple tape and stray hair cleanup, and cohesive terracotta lip and nail color grading.',
      bn: 'ম্যাগাজিন মানের বিফোর-আফটার বিউটি রিটাচিং—মাইক্রো ডজ অ্যান্ড বার্ন কন্টুরিং, প্রাকৃতিক স্কিন টেক্সচার সংরক্ষণ, সূক্ষ্ম ক্লিনআপ এবং উষ্ণ এডিটোরিয়াল কালার গ্রেডিং।',
    },
    deliverables: [
      { en: 'Micro Dodge & Burn & Pore-Preserving Skin', bn: 'মাইক্রো ডজ অ্যান্ড বার্ন ও প্রাকৃতিক স্কিন টেক্সচার' },
      { en: 'Temple Tape, Blemish & Stray Hair Cleanup', bn: 'অবাঞ্ছিত অংশ, দাগ ও হেয়ার ক্লিনআপ' },
      { en: 'Editorial Makeup, Lip & Nail Color Grading', bn: 'এডিটোরিয়াল মেকআপ, লিপ ও কালার গ্রেডিং' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'retouching-ecommerce-handbag-amazon',
    title: {
      en: 'E-Commerce Handbag Retouching & Reflection',
      bn: 'ই-কমার্স হ্যান্ডব্যাগ রিটাচিং ও রিফ্লেকশন',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image:
      '/assets/aistudio/Do_professional_ecommerce_product_photo_retouching_and_enhancement_by_Kamruzzaman_up1___Fiverr_ca65a34d.jpg',
    imageAlt: {
      en: 'Before and after e-commerce product photo retouching of a turquoise handbag with pure white background removal, vibrant color correction, and soft reflection shadow',
      bn: 'ই-কমার্স ও অ্যামাজনের জন্য হ্যান্ডব্যাগের বিফোর-আফটার ব্যাকগ্রাউন্ড রিমুভাল, কালার কারেকশন ও রিফ্লেকশন শ্যাডো রিটাচিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Amazon-ready before-and-after e-commerce product retouching featuring precision clipping path background removal, vibrant color enhancement, metallic hardware polish, and a clean studio reflection.',
      bn: 'অ্যামাজন ও ই-কমার্সের জন্য বিফোর-আফটার প্রোডাক্ট রিটাচিং—নিখুঁত ক্লিপিং পাথ ব্যাকগ্রাউন্ড রিমুভাল, উজ্জ্বল কালার কারেকশন এবং প্রাকৃতিক স্টুডিও রিফ্লেকশন।',
    },
    deliverables: [
      { en: 'Pure White Background Removal & Clipping Path', bn: 'পিওর হোয়াইট ব্যাকগ্রাউন্ড রিমুভাল ও ক্লিপিং পাথ' },
      { en: 'True-to-Life Color & Hardware Polish', bn: 'নিখুঁত কালার কারেকশন ও ডিটেইল পলিশ' },
      { en: 'Custom Mirror Reflection & Amazon-Ready Export', bn: 'কাস্টম রিফ্লেকশন শ্যাডো ও অ্যামাজন-রেডি এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'retouching-real-estate-living-room',
    title: {
      en: 'Real Estate Living Room HDR & Staging Edit',
      bn: 'রিয়েল এস্টেট লিভিং রুম HDR ও এডিটিং',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image:
      '/assets/aistudio/How_to_Edit_Real_Estate_Photos_to_Boost_Listings_and_Increase_Sales_0f065972.jpg',
    imageAlt: {
      en: 'Before and after real estate living room photo editing transforming a dim interior into a bright airy listing with clean white walls, blue sky window pull, and refreshed staging',
      bn: 'অন্ধকার লিভিং রুমকে উজ্জ্বল সাদা দেয়াল, পরিষ্কার জানালার দৃশ্য ও আধুনিক স্টেজিংয়ে রূপান্তরিত বিফোর-আফটার রিয়েল এস্টেট ফটো এডিটিং',
    },
    aspect: 'standard',
    summary: {
      en: 'Before-and-after real estate interior enhancement converting an underexposed living room into a listing-ready showcase with balanced HDR exposure, clean white walls, crisp blue-sky window pulls, and polished hardwood floors.',
      bn: 'কম আলোর লিভিং রুমকে লিস্টিং-রেডি উজ্জ্বল ইন্টেরিয়রে রূপান্তর—ব্যালেন্সড HDR এক্সপোজার, পরিষ্কার সাদা দেয়াল, জানালার নীল আকাশ এবং উজ্জ্বল কাঠের ফ্লোর এডিটিং।',
    },
    deliverables: [
      { en: 'HDR Exposure Lift & White Balance Correction', bn: 'HDR এক্সপোজার লিফট ও হোয়াইট ব্যালেন্স কারেকশন' },
      { en: 'Window Pull & Blue Sky Replacement', bn: 'উইন্ডো পুল ও প্রাকৃতিক নীল আকাশ সংযোজন' },
      { en: 'Clutter Removal & Bright Interior Enhancement', bn: 'অপ্রয়োজনীয় বস্তু রিমুভাল ও উজ্জ্বল ইন্টেরিয়র ফিনিশ' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
  {
    id: 'retouching-ecommerce-plush-teddy',
    title: {
      en: 'E-Commerce Plush Toy Background & Shadow Edit',
      bn: 'ই-কমার্স প্রোডাক্ট ব্যাকগ্রাউন্ড ও শ্যাডো এডিটিং',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image: '/assets/aistudio/E-commerce_Product_photo_editing____Behance_b34cb865.jpg',
    imageAlt: {
      en: 'Before and after e-commerce product photo editing of a London hoodie teddy bear showcasing fur-edge background removal, proper color correction, and realistic soft shadows',
      bn: 'ই-কমার্স প্রোডাক্ট ফটো এডিটিং—ব্যাকগ্রাউন্ড রিমুভাল, নিখুঁত কালার কারেকশন ও রিয়ালিস্টিক শ্যাডোসহ বিফোর-আফটার নমুনা',
    },
    aspect: 'standard',
    summary: {
      en: 'Detailed before-and-after e-commerce product editing with fine plush-fur edge masking on pure white, accurate color correction on warm fur and red fabric, and soft realistic contact shadows.',
      bn: 'সূক্ষ্ম ফার-এজ মাস্কিংসহ পিওর হোয়াইট ব্যাকগ্রাউন্ড রিমুভাল, সঠিক কালার কারেকশন এবং স্বাভাবিক রিয়ালিস্টিক শ্যাডোসহ ই-কমার্স প্রোডাক্ট ফটো এডিটিং।',
    },
    deliverables: [
      { en: 'Complex Fur-Edge Masking & Pure White Backdrop', bn: 'সূক্ষ্ম ফার-এজ মাস্কিং ও পিওর হোয়াইট ব্যাকগ্রাউন্ড' },
      { en: 'Accurate Product Color & Contrast Correction', bn: 'সঠিক প্রোডাক্ট কালার ও কনট্রাস্ট কারেকশন' },
      { en: 'Natural Contact & Drop Shadow Creation', bn: 'প্রাকৃতিক কন্টাক্ট ও রিয়ালিস্টিক শ্যাডো তৈরি' },
    ],
    tools: ['Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'retouching-real-estate-interior-hdr',
    title: {
      en: 'Real Estate Interior Color & Light Correction',
      bn: 'রিয়েল এস্টেট ইন্টেরিয়র কালার ও লাইট কারেকশন',
    },
    category: 'amazon',
    categoryLabel: {
      en: 'Amazon Design',
      bn: 'অ্যামাজন ডিজাইন',
    },
    serviceId: 'amazon-product-design',
    image:
      '/assets/aistudio/Fai_editing_di_foto_immobiliari_e_correzione_del_colore_088d5dd8.jpg',
    imageAlt: {
      en: 'Dual before and after real estate interior photo editing for a modern lounge and timber kitchen featuring color cast removal, balanced daylight exposure, and shadow recovery',
      bn: 'আধুনিক লাউঞ্জ ও কিচেন ইন্টেরিয়রের বিফোর-আফটার রিয়েল এস্টেট কালার কারেকশন, ডেলাইট ব্যালেন্স ও শ্যাডো রিকভারি',
    },
    aspect: 'standard',
    summary: {
      en: 'Dual-room before-and-after architectural interior retouching removing harsh color casts, lifting deep shadows across living and kitchen spaces, and delivering natural, inviting MLS-ready lighting.',
      bn: 'লিভিং রুম ও আধুনিক কিচেনের বিফোর-আফটার আর্কিটেকচারাল ফটো এডিটিং—কালার কাস্ট রিমুভাল, ডিপ শ্যাডো লিফট এবং প্রাকৃতিক লিস্টিং-রেডি লাইটিং।',
    },
    deliverables: [
      { en: 'Neutral White Balance & Color Cast Removal', bn: 'নিখুঁত হোয়াইট ব্যালেন্স ও কালার কাস্ট রিমুভাল' },
      { en: 'Multi-Room Shadow Lift & Exposure Blending', bn: 'শ্যাডো রিকভারি ও প্রাকৃতিক এক্সপোজার ব্লেন্ডিং' },
      { en: 'Straight Verticals & MLS-Ready Clarity', bn: 'নিখুঁত ভার্টিক্যাল লাইন ও লিস্টিং-রেডি ক্ল্যারিটি' },
    ],
    tools: ['Adobe Lightroom', 'Adobe Photoshop'],
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
    id: 'youtube-viral-creator-pack',
    title: {
      en: 'High-CTR Creator & Podcast YouTube Thumbnails',
      bn: 'হাই-CTR ক্রিয়েটর ও পডকাস্ট ইউটিউব থাম্বনেইল',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/Youtube_Thambnail_Design__b839e30e.jpg',
    imageAlt: {
      en: 'Four viral YouTube thumbnail designs covering tech, graphic design tutorials, creator growth before-and-after, and freelancing podcasts',
      bn: 'টেক, গ্রাফিক ডিজাইন টিউটোরিয়াল, ক্রিয়েটর গ্রোথ এবং ফ্রিল্যান্সিং পডকাস্টের জন্য চারটি হাই-CTR ইউটিউব থাম্বনেইল ডিজাইন',
    },
    aspect: 'wide',
    summary: {
      en: 'Scroll-stopping YouTube thumbnails built for tech commentary, design tutorials, growth milestones, and podcast interviews—engineered with crisp subject rim-lighting and instant mobile readability.',
      bn: 'টেক, ডিজাইন টিউটোরিয়াল, গ্রোথ স্টোরি ও পডকাস্ট চ্যানেলের জন্য হাই-কনট্রাস্ট লাইটিং ও স্পষ্ট টাইপোগ্রাফিসহ হাই-CTR ইউটিউব থাম্বনেইল ডিজাইন।',
    },
    deliverables: [
      { en: 'Subject Extraction & Dramatic Rim-Lighting', bn: 'সাবজেক্ট কাটআউট ও ড্রামাটিক রিম-লাইটিং' },
      { en: 'Bold 3D & High-Contrast Mobile Typography', bn: 'বোল্ড ও মোবাইল-বান্ধব হাই-কনট্রাস্ট টাইপোগ্রাফি' },
      { en: '16:9 Crisp YouTube-Ready HD Exports', bn: '16:9 ইউটিউব-রেডি হাই-রেজোলিউশন এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-gaming-thumbnails-suite',
    title: {
      en: 'YouTube Gaming & Esports Thumbnail Collection',
      bn: 'ইউটিউব গেমিং ও ই-স্পোর্টস থাম্বনেইল কালেকশন',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/YouTube-Gaming-Thumbnail_ace3b8d4.jpg',
    imageAlt: {
      en: 'Nine high-energy YouTube gaming thumbnail designs featuring Apex Legends, Call of Duty MW3, PUBG, eFootball, and Minecraft Dungeons',
      bn: 'অ্যাপেক্স লিজেন্ডস, কল অব ডিউটি, পাবজি, ই-ফুটবল ও মাইনক্রাফটের জন্য নয়টি হাই-এনার্জি ইউটিউব গেমিং থাম্বনেইল',
    },
    aspect: 'wide',
    summary: {
      en: 'Nine-piece gaming thumbnail showcase spanning FPS, battle royale, football, and sandbox channels—combining expressive gamer reactions, glowing item callouts, and explosive color grading.',
      bn: 'এফপিএস, ব্যাটল রয়্যাল, ফুটবল ও গেমিং চ্যানেলের জন্য নয়টি হাই-এনার্জি থাম্বনেইল—এক্সপ্রেসিভ রিঅ্যাকশন, গ্লোয়িং আইটেম হাইলাইট ও ড্রামাটিক কালার গ্রেডিং।',
    },
    deliverables: [
      { en: 'Expressive Creator & In-Game Scene Compositing', bn: 'ক্রিয়েটর রিঅ্যাকশন ও গেম-সিন কম্পোজিটিং' },
      { en: 'Neon Glow, Particle FX & Item Callouts', bn: 'নিয়ন গ্লো, পার্টিকেল ইফেক্ট ও আইটেম হাইলাইট' },
      { en: 'High-Impact Gaming Display Typography', bn: 'হাই-ইমপ্যাক্ট গেমিং ডিসপ্লে টাইপোগ্রাফি' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-finance-podcast-pack',
    title: {
      en: 'Finance, Education & Documentary Thumbnail Suite',
      bn: 'ফাইন্যান্স, এডুকেশন ও ডকুমেন্টারি থাম্বনেইল স্যুট',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/Youtube-Thambnail-Design1-_00460db3.jpg',
    imageAlt: {
      en: 'Nine YouTube thumbnail designs for business, finance, study hacks, documentary commentary, and freelancing podcast videos',
      bn: 'বিজনেস, ফাইন্যান্স, স্টাডি হ্যাকস, ডকুমেন্টারি ও পডকাস্ট ভিডিওর জন্য নয়টি ইউটিউব থাম্বনেইল ডিজাইন',
    },
    aspect: 'wide',
    summary: {
      en: 'Versatile nine-thumbnail creator suite tailored for finance, self-improvement, study guides, and investigative podcasts—balancing curiosity hooks, clean facial retouching, and bold color separation.',
      bn: 'ফাইন্যান্স, এডুকেশন, স্টাডি গাইড ও ডকুমেন্টারি পডকাস্ট চ্যানেলের জন্য নয়টি বৈচিত্র্যময় ইউটিউব থাম্বনেইল—কিউরিওসিটি হুক, ক্লিন পোর্ট্রেট রিটাচ ও স্পষ্ট কালার সেপারেশন।',
    },
    deliverables: [
      { en: 'Curiosity-Driven Visual Storytelling Hooks', bn: 'দর্শকের কৌতূহল জাগানো ভিজ্যুয়াল স্টোরিটেলিং' },
      { en: 'Clean Portrait Retouch & Color Separation', bn: 'ক্লিন পোর্ট্রেট রিটাচ ও কালার সেপারেশন' },
      { en: 'A/B Testable Thumbnail Variants in 16:9 HD', bn: '16:9 HD ফরম্যাটে A/B টেস্ট-রেডি থাম্বনেইল' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-freelancing-podcast-thumb',
    title: {
      en: 'Freelancing Podcast Interview Thumbnail',
      bn: 'ফ্রিল্যান্সিং পডকাস্ট ইন্টারভিউ থাম্বনেইল',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/4_07ed9d6d.png',
    imageAlt: {
      en: 'Podcast YouTube thumbnail titled Freelancing Turn Your Skills Into Income with dual studio hosts, warm-cool lighting, and brush-stroke typography',
      bn: 'ফ্রিল্যান্সিং পডকাস্টের জন্য ডুয়াল হোস্ট, ব্রাশ-স্ট্রোক টাইপোগ্রাফি ও উজ্জ্বল কালার গ্রেডিংসহ ইউটিউব থাম্বনেইল',
    },
    aspect: 'wide',
    summary: {
      en: 'Conversational podcast YouTube thumbnail combining warm-and-cool studio rim lighting, dynamic brush-stroke headline banners, hand-drawn doodle icons, and clean facial retouching.',
      bn: 'পডকাস্ট ও ইন্টারভিউ ভিডিওর জন্য ডুয়াল-টোন স্টুডিও লাইটিং, আকর্ষণীয় ব্রাশ-স্ট্রোক টাইপোগ্রাফি এবং ক্লিন পোর্ট্রেট রিটাচিংসহ ইউটিউব থাম্বনেইল।',
    },
    deliverables: [
      { en: 'Dual-Subject Lighting & Skin Enhancement', bn: 'ডুয়াল-হোস্ট লাইটিং ও স্কিন এনহ্যান্সমেন্ট' },
      { en: 'Brush-Stroke Headline & Doodle Icon Art', bn: 'ব্রাশ-স্ট্রোক হেডলাইন ও কাস্টম আইকন' },
      { en: 'High-CTR 16:9 Podcast Export', bn: 'হাই-CTR 16:9 পডকাস্ট থাম্বনেইল এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-epic-dungeons-gaming-thumb',
    title: {
      en: 'Epic Dungeons Gaming Reaction Thumbnail',
      bn: 'এপিক ডাঞ্জন্স গেমিং রিঅ্যাকশন থাম্বনেইল',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/18_1723a0af.jpeg',
    imageAlt: {
      en: 'High-energy gaming YouTube thumbnail for Epic Dungeons with expressive gamer portrait, glowing fiery rim light, voxel dungeon battle, and 3D pixel typography',
      bn: 'এপিক ডাঞ্জন্স গেমিং ভিডিওর জন্য এক্সপ্রেসিভ গেমার পোর্ট্রেট, ফায়ারি রিম লাইট ও 3D পিক্সেল টাইপোগ্রাফিসহ থাম্বনেইল',
    },
    aspect: 'wide',
    summary: {
      en: 'Vibrant gaming channel thumbnail pairing an expressive creator portrait with fiery lava rim lighting, dynamic voxel dungeon action, ember particles, and custom 3D gaming lettering.',
      bn: 'গেমিং চ্যানেলের জন্য এক্সপ্রেসিভ রিঅ্যাকশন পোর্ট্রেট, ফায়ারি রিম লাইট, অ্যাকশন সিন এবং 3D গেমিং টাইপোগ্রাফিসহ ইউটিউব থাম্বনেইল।',
    },
    deliverables: [
      { en: 'Expressive Creator Cutout & Fire Rim-Light', bn: 'ক্রিয়েটর কাটআউট ও ফায়ার রিম-লাইট ইফেক্ট' },
      { en: 'Custom 3D Block Gaming Title Design', bn: 'কাস্টম 3D গেমিং টাইটেল ডিজাইন' },
      { en: 'High-Contrast Action Scene Blending', bn: 'হাই-কনট্রাস্ট অ্যাকশন সিন ব্লেন্ডিং' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-subscriber-growth-thumb',
    title: {
      en: 'Before & After Viral Channel Growth Thumbnail',
      bn: 'বিফোর-আফটার ভাইরাল চ্যানেল গ্রোথ থাম্বনেইল',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/6_bfc2481a.jpg',
    imageAlt: {
      en: 'Split-contrast YouTube thumbnail comparing Before 50 Subscribers in fiery orange against After 1.2M Subscribers in electric neon blue',
      bn: '৫০ থেকে ১.২ মিলিয়ন সাবস্ক্রাইবার গ্রোথ দেখানো ফায়ার ও নিয়ন-ব্লু স্প্লিট-কনট্রাস্ট ইউটিউব থাম্বনেইল',
    },
    aspect: 'wide',
    summary: {
      en: 'High-curiosity creator growth thumbnail built around dramatic fire-versus-neon split contrast, metallic milestone plaques, and an instantly readable shocked focal expression.',
      bn: 'আগুন ও নিয়ন-ব্লু স্প্লিট কনট্রাস্ট, মেটালিক মাইলস্টোন কার্ড এবং তাৎক্ষণিক নজরকাড়া এক্সপ্রেশনসহ চ্যানেল গ্রোথ ইউটিউব থাম্বনেইল।',
    },
    deliverables: [
      { en: 'Fire-vs-Neon Split Energy Background', bn: 'ফায়ার বনাম নিয়ন স্প্লিট ব্যাকগ্রাউন্ড' },
      { en: 'Textured Metallic Comparison Plaques', bn: 'টেক্সচার্ড মেটালিক কম্প্যারিসন প্লেট' },
      { en: 'Dual-Color Subject Rim Relighting', bn: 'ডুয়াল-কালার সাবজেক্ট রিম রিলাইটিং' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-trillionaire-tech-thumb',
    title: {
      en: 'Trillionaire Tech & Finance Documentary Thumbnail',
      bn: 'টেক ও ফাইন্যান্স ডকুমেন্টারি ইউটিউব থাম্বনেইল',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/10_45dd4c38.jpeg',
    imageAlt: {
      en: 'Cinematic tech and finance YouTube thumbnail titled Trillionaire The Next with metallic cyan lettering, rocket launch, AI and crypto graphics, and dramatic portrait lighting',
      bn: 'রকেট লঞ্চ, এআই ও ক্রিপ্টো গ্রাফিক্স এবং মেটালিক সায়ান টাইপোগ্রাফিসহ টেক ও ফাইন্যান্স ডকুমেন্টারি ইউটিউব থাম্বনেইল',
    },
    aspect: 'wide',
    summary: {
      en: 'Cinematic business and tech commentary thumbnail combining metallic cyan headline depth, warm rocket-flame contrast, futuristic AI and crypto visual cues, and sharp editorial portrait lighting.',
      bn: 'বিজনেস ও টেক ডকুমেন্টারি চ্যানেলের জন্য মেটালিক সায়ান হেডলাইন, রকেট ফ্লেম কনট্রাস্ট, এআই ও ফাইন্যান্স আইকন এবং সিনেমাটিক পোর্ট্রেট লাইটিং।',
    },
    deliverables: [
      { en: 'Cinematic Multi-Element Scene Compositing', bn: 'সিনেমাটিক মাল্টি-এলিমেন্ট সিন কম্পোজিটিং' },
      { en: 'Metallic 3D Headline & Neon Callout Ring', bn: 'মেটালিক 3D হেডলাইন ও নিয়ন কলআউট' },
      { en: 'Warm-vs-Cool Editorial Portrait Grade', bn: 'ওয়ার্ম-ভার্সেস-কুল পোর্ট্রেট কালার গ্রেড' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'youtube-pubg-season-meta-thumb',
    title: {
      en: 'PUBG New Season Meta Action Thumbnail',
      bn: 'পাবজি নিউ সিজন মেটা গেমিং থাম্বনেইল',
    },
    category: 'youtube',
    categoryLabel: {
      en: 'YouTube Thumbnails',
      bn: 'ইউটিউব থাম্বনেইল',
    },
    serviceId: 'youtube-thumbnail-design',
    image: '/assets/aistudio/25_94a0e8e0.jpeg',
    imageAlt: {
      en: 'Battle royale gaming YouTube thumbnail for PUBG New Season Meta featuring tactical soldier close-up, muzzle flash action, red airdrop smoke, and distressed gold-green typography',
      bn: 'পাবজি নিউ সিজন মেটা গেমিং ভিডিওর জন্য সিনেমাটিক অ্যাকশন, রেড এয়ারড্রপ স্মোক ও গোল্ড-গ্রিন টাইপোগ্রাফিসহ থাম্বনেইল',
    },
    aspect: 'wide',
    summary: {
      en: 'Gritty battle-royale gaming thumbnail crafted with dramatic ember-lit foreground focus, live combat background depth, vivid red airdrop smoke, and distressed metallic game title lettering.',
      bn: 'ব্যাটল রয়্যাল গেমিং ভিডিওর জন্য ড্রামাটিক ফোরগ্রাউন্ড ফোকাস, অ্যাকশন ব্যাকগ্রাউন্ড, লাল এয়ারড্রপ স্মোক এবং মেটালিক টাইটেল ডিজাইন।',
    },
    deliverables: [
      { en: 'Tactical Action Foreground & Depth Layering', bn: 'অ্যাকশন ফোরগ্রাউন্ড ও ডেপথ লেয়ারিং' },
      { en: 'Ember Sparks, Smoke FX & Color Grading', bn: 'স্পার্কস, স্মোক ইফেক্ট ও কালার গ্রেডিং' },
      { en: 'Distressed Metallic Gaming Typography', bn: 'ডিস্ট্রেসড মেটালিক গেমিং টাইপোগ্রাফি' },
    ],
    tools: ['Adobe Photoshop', 'AI Creative Tools'],
    isDemo: false,
  },
  {
    id: 'canvas-dark-birthday-calendar',
    title: {
      en: 'Editorial Black Birthday Collage & Calendar Canvas',
      bn: 'ব্ল্যাক বার্থডে কোলাজ ও ক্যালেন্ডার ক্যানভাস ডিজাইন',
    },
    category: 'canvas',
    categoryLabel: {
      en: 'Canvas Design',
      bn: 'ক্যানভাস ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/tttttt_a5f2dde9.jpg',
    imageAlt: {
      en: 'Custom birthday canvas print design on a sleek black background featuring a primary portrait, color and monochrome inset photo collage, and October heart-marked calendar',
      bn: 'কালো ব্যাকগ্রাউন্ডে কালার ও সাদাকালো ফটো কোলাজ এবং অক্টোবর ক্যালেন্ডারসহ কাস্টম বার্থডে ক্যানভাস ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Personalized black-canvas birthday gift layout pairing a vibrant hero portrait with alternating color and black-and-white polaroid insets, a custom heart-marked month calendar, and refined serif typography.',
      bn: 'উজ্জ্বল মূল পোর্ট্রেট, কালার ও সাদাকালো কোলাজ ফ্রেম, তারিখ-চিহ্নিত ক্যালেন্ডার এবং মার্জিত টাইপোগ্রাফিসহ কাস্টম বার্থডে ক্যানভাস ডিজাইন।',
    },
    deliverables: [
      { en: 'Custom Multi-Photo Collage & B&W Styling', bn: 'কাস্টম ফটো কোলাজ ও মনোক্রোম স্টাইলিং' },
      { en: 'Personalized Date-Highlighted Calendar Grid', bn: 'তারিখ-হাইলাইট করা কাস্টম ক্যালেন্ডার' },
      { en: '300 DPI Print-Ready Canvas Master File', bn: '300 DPI প্রিন্ট-রেডি ক্যানভাস মাস্টার ফাইল' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
  },
  {
    id: 'canvas-march-birthday-frame',
    title: {
      en: 'Multi-Portrait Birthday & Calendar Framed Canvas',
      bn: 'মাল্টি-পোর্ট্রেট বার্থডে ও ক্যালেন্ডার ফ্রেমড ক্যানভাস',
    },
    category: 'canvas',
    categoryLabel: {
      en: 'Canvas Design',
      bn: 'ক্যানভাস ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/ttttt_6ea94655.jpg',
    imageAlt: {
      en: 'White framed birthday canvas design combining three diagonal background portraits, a blended foreground cutout, March calendar, festive balloons, and script message',
      bn: 'সাদা ফ্রেমে তিনটি ব্যাকগ্রাউন্ড পোর্ট্রেট, ফোরগ্রাউন্ড কাটআউট ও মার্চ ক্যালেন্ডারসহ বার্থডে ক্যানভাস ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Warm celebratory canvas gift design combining softly feathered diagonal photo panels, a clean foreground subject blend, custom month calendar, and heartfelt birthday calligraphy.',
      bn: 'সফট ফেদার্ড ডায়াগনাল ফটো প্যানেল, ফোরগ্রাউন্ড পোর্ট্রেট ব্লেন্ড, ক্যালেন্ডার ও বার্থডে ক্যালিগ্রাফিসহ আকর্ষণীয় ফ্রেমড ক্যানভাস ডিজাইন।',
    },
    deliverables: [
      { en: 'Layered Subject Cutout & Soft Feather Blend', bn: 'লেয়ার্ড সাবজেক্ট কাটআউট ও সফট ব্লেন্ডিং' },
      { en: 'Custom Birthday Calligraphy & Calendar', bn: 'কাস্টম বার্থডে ক্যালিগ্রাফি ও ক্যালেন্ডার' },
      { en: 'Print-Ready File & Interior Frame Mockup', bn: 'প্রিন্ট-রেডি ফাইল ও ফ্রেম মকআপ' },
    ],
    tools: ['Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'canvas-anniversary-memory-frame',
    title: {
      en: 'Wedding Anniversary Memory Collage Canvas',
      bn: 'ওয়েডিং অ্যানিভার্সারি মেমোরি কোলাজ ক্যানভাস',
    },
    category: 'canvas',
    categoryLabel: {
      en: 'Canvas Design',
      bn: 'ক্যানভাস ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/tttt_1b20ab6d.jpg',
    imageAlt: {
      en: 'Black framed wedding anniversary memory canvas featuring an ornamental August 2025 calendar wreath, couple hero portrait, eight rounded wedding photos, and couple signature names',
      bn: 'কালো ফ্রেমে অ্যানিভার্সারি ক্যালেন্ডার, কাপল পোর্ট্রেট ও ৮টি ওয়েডিং ছবির কোলাজসহ ক্যানভাস ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Keepsake wedding anniversary canvas design combining an ornate floral calendar emblem, romantic dedication quote, featured couple portrait, and an eight-moment photo story grid on matte black.',
      bn: 'অর্নামেন্টাল ক্যালেন্ডার ফ্রেম, রোমান্টিক বার্তা, মূল কাপল পোর্ট্রেট এবং ৮টি স্মৃতিময় ছবির গ্রিডসহ প্রিমিয়াম অ্যানিভার্সারি ক্যানভাস ডিজাইন।',
    },
    deliverables: [
      { en: '9-Photo Balanced Memory Grid Layout', bn: '৯টি ছবির সুষম মেমোরি কোলাজ লেআউট' },
      { en: 'Ornamental Anniversary Calendar & Script', bn: 'অর্নামেন্টাল ক্যালেন্ডার ও কাস্টম টাইপোগ্রাফি' },
      { en: 'High-Resolution Print & Frame Export', bn: 'হাই-রেজোলিউশন প্রিন্ট ও ফ্রেম এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    isDemo: false,
  },
  {
    id: 'canvas-geometric-diamond-birthday',
    title: {
      en: 'Geometric Diamond Collage Birthday Canvas',
      bn: 'জিওমেট্রিক ডায়মন্ড কোলাজ বার্থডে ক্যানভাস',
    },
    category: 'canvas',
    categoryLabel: {
      en: 'Canvas Design',
      bn: 'ক্যানভাস ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/tt_0433db3e.jpg',
    imageAlt: {
      en: 'Minimalist white framed birthday canvas design with three geometric diamond photo frames, pop-out center portrait, red rose accent, and custom Happy Birthday typography',
      bn: 'সাদা ফ্রেমে জ্যামিতিক ডায়মন্ড ফটো কোলাজ, ফোরগ্রাউন্ড পোর্ট্রেট ও ফ্লোরাল অ্যাকসেন্টসহ বার্থডে ক্যানভাস ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Clean modern gallery canvas built around crisp diamond-masked portrait frames, a pop-out center subject cutout, delicate red floral ornament, and tailored birthday lettering.',
      bn: 'আধুনিক ডায়মন্ড ফটো ফ্রেম, পপ-আউট সেন্টার পোর্ট্রেট কাটআউট, ফ্লোরাল অলংকরণ এবং কাস্টম বার্থডে টাইপোগ্রাফিসহ পরিচ্ছন্ন ক্যানভাস ডিজাইন।',
    },
    deliverables: [
      { en: 'Geometric Masking & Pop-Out Subject Blend', bn: 'জিওমেট্রিক মাস্কিং ও পপ-আউট পোর্ট্রেট ব্লেন্ড' },
      { en: 'Clean White-Space Typography & Floral Art', bn: 'পরিচ্ছন্ন টাইপোগ্রাফি ও ফ্লোরাল অ্যাকসেন্ট' },
      { en: '300 DPI Frame-Ready Canvas Export', bn: '300 DPI ফ্রেম-রেডি ক্যানভাস এক্সপোর্ট' },
    ],
    tools: ['Adobe Photoshop'],
    isDemo: false,
  },
  {
    id: 'canvas-our-love-story-couple',
    title: {
      en: 'Our Love Story Couple Double-Exposure Canvas',
      bn: 'আওয়ার লাভ স্টোরি কাপল ডাবল-এক্সপোজার ক্যানভাস',
    },
    category: 'canvas',
    categoryLabel: {
      en: 'Canvas Design',
      bn: 'ক্যানভাস ডিজাইন',
    },
    serviceId: 'graphic-design',
    image: '/assets/aistudio/ttt_9a02eb0a.jpg',
    imageAlt: {
      en: 'Romantic framed couple canvas artwork titled Our Love Story blending two wedding portraits into a golden sunset double-exposure composition with original source photos shown beside it',
      bn: 'দুটি কাপল ফটোকে সোনালি সূর্যাস্তের ডাবল-এক্সপোজার কম্পোজিশনে রূপান্তরিত আওয়ার লাভ স্টোরি ক্যানভাস ডিজাইন',
    },
    aspect: 'standard',
    summary: {
      en: 'Cinematic couple keepsake canvas seamlessly blending two separate portraits into a warm sunset double-exposure composition with glowing rim light, brushed heart script, and custom quote.',
      bn: 'দুটি আলাদা কাপল ফটোকে সোনালি সূর্যাস্তের ডাবল-এক্সপোজার কম্পোজিশন, উষ্ণ রিম লাইট ও কাস্টম টাইপোগ্রাফিতে রূপান্তরিত রোমান্টিক ক্যানভাস ডিজাইন।',
    },
    deliverables: [
      { en: 'Multi-Photo Double-Exposure Compositing', bn: 'মাল্টি-ফটো ডাবল-এক্সপোজার কম্পোজিটিং' },
      { en: 'Golden Sunset Glow & Color Harmonization', bn: 'সোনালি সূর্যাস্ত গ্লো ও কালার হার্মোনাইজেশন' },
      { en: 'Custom Script Lettering & Print Master', bn: 'কাস্টম স্ক্রিপ্ট টাইপোগ্রাফি ও প্রিন্ট মাস্টার' },
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom'],
    isDemo: false,
  },
];
