import type { Language } from '../types/content';

/**
 * ============================================================================
 * CENTRALIZED BILINGUAL COPY (ENGLISH & BENGALI)
 * ============================================================================
 * Update headings, descriptions, button labels, and UI text here for both
 * English (`en`) and Bengali (`bn`).
 */

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      hireMe: 'Hire Me',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      switchToBengali: 'Switch language to Bengali',
      switchToEnglish: 'Switch language to English',
    },
    hero: {
      disciplines: [
        'Photo Editing',
        'Graphic Design',
        'Amazon A+ Design',
        'Video Editing',
      ],
      headline: 'Turning Creative Ideas Into Extraordinary Visual Experiences.',
      supportingText:
        "I'm Apu Kumar, a Professional Photo Editor, Graphic Designer & Video Editor. I help businesses, photographers and brands create stunning visual content that stands out.",
      ctaWork: 'View My Work',
      ctaHire: 'Hire Me',
      globalClientsLabel: 'Available Worldwide',
      globalClientsRegions: 'USA · UK · Canada · Australia · Europe',
      portraitCaptionTitle: 'Apu Kumar',
      portraitCaptionSubtitle: 'Photo Retouching · Brand Design · Post-Production',
      portraitPlaceholderNote: 'Demo Portrait — Replace in siteConfig.ts',
      marqueeItems: [
        'Wedding Color Grading',
        'High-End Photo Retouching',
        'Amazon A+ Content Design',
        'YouTube Thumbnail Art',
        'Brand Graphic Design',
        'Cinematic Video Editing',
        'AI-Enhanced Production',
      ],
    },
    about: {
      sectionLabel: 'About Me',
      heading: 'The Creative Mind Behind the Work',
      paragraph1:
        "I'm Apu Kumar, a passionate creative professional specializing in professional photo editing, graphic design and video editing. With years of hands-on experience, I help photographers, brands, businesses and content creators transform their ideas into professional visual content.",
      paragraph2:
        'My focus is quality, creativity, attention to detail and client satisfaction. I believe every image and design has a story worth telling.',
      approachHeading: 'Creative Approach',
      approachPoints: [
        {
          title: 'Editorial Consistency',
          description:
            'Every wedding gallery, product catalog, and brand asset follows cohesive color science, clean hierarchy, and reliable export standards.',
        },
        {
          title: 'Conversion-Minded Visuals',
          description:
            'From Amazon A+ modules to high-CTR thumbnails and commercial video edits, visuals are crafted to capture attention and earn trust.',
        },
        {
          title: 'Global Remote Workflow',
          description:
            'Structured file handoffs, clear milestone updates, and dependable turnaround built for international clients across time zones.',
        },
      ],
      toolkitHeading: 'Core Software & Creative Stack',
      toolkitSubtext: 'Industry-standard post-production tools paired with modern AI workflows.',
      software: [
        {
          code: 'Ps',
          name: 'Adobe Photoshop',
          role: 'Retouching, Compositing, Amazon Graphics & Manipulation',
        },
        {
          code: 'Lr',
          name: 'Adobe Lightroom',
          role: 'Wedding Color Grading, Batch Culling & Custom Presets',
        },
        {
          code: 'Pr',
          name: 'Adobe Premiere Pro',
          role: 'Commercial Editing, Pacing, Sound & Cinematic Color',
        },
        {
          code: 'AI',
          name: 'AI-Powered Creative Tools',
          role: 'Next-Gen Ad Visuals, Generative Cleanup & Smart Workflows',
        },
      ],
    },
    services: {
      sectionLabel: 'Professional Services',
      heading: 'Tailored Visual Craft for Brands, Photographers & Creators',
      subheading:
        'Five specialized creative disciplines engineered to elevate your photography, e-commerce listings, brand identity, and video storytelling.',
      viewProjects: 'View Projects',
      getStarted: 'Get Started',
    },
    portfolio: {
      sectionLabel: 'Selected Portfolio',
      heading: 'Visual Craft Across Disciplines',
      subheading:
        'Browse curated sample showcases across photo retouching, wedding grading, Amazon A+ graphics, brand design, and cinematic post-production.',
      demoDisclaimer:
        'Demonstration showcase — placeholder visuals are shown for layout preview and are easily replaceable in src/data/portfolio.ts.',
      demoTag: 'Demo Sample',
      viewDetails: 'Inspect Project',
      categories: {
        all: 'All Projects',
        wedding: 'Wedding Editing',
        retouching: 'Photo Retouching',
        amazon: 'Amazon Design',
        graphic: 'Graphic Design',
        youtube: 'YouTube Thumbnails',
        video: 'Video Editing',
      },
      lightbox: {
        close: 'Close preview',
        previous: 'Previous project',
        next: 'Next project',
        deliverables: 'Key Deliverables',
        toolsUsed: 'Software & Workflow',
        demoNotice:
          'Demonstration visual for portfolio presentation — replace this entry with real client work in src/data/portfolio.ts.',
        requestSimilar: 'Request Similar Project',
      },
    },
    whyChooseMe: {
      sectionLabel: 'Why Choose Me',
      heading: 'Built on Precision, Reliability & International Standards',
      subheading:
        'Partnering with international photographers, e-commerce founders, and agencies requires more than technical skill—it requires dependable execution.',
      items: [
        {
          number: '01',
          title: 'Professional Quality',
          description:
            'Agency-caliber retouching, balanced color grading, and crisp design geometry tailored for web, print, and marketplace specifications.',
        },
        {
          number: '02',
          title: 'Attention to Detail',
          description:
            'Pixel-level masking, natural skin texture preservation, consistent lighting, and disciplined typography without shortcuts.',
        },
        {
          number: '03',
          title: 'Creative Solutions',
          description:
            'Visual storytelling that solves real business goals—higher listing clarity, cohesive wedding galleries, and scroll-stopping video edits.',
        },
        {
          number: '04',
          title: 'On-Time Delivery',
          description:
            'Predictable turnaround schedules and milestone check-ins so your product launches, client galleries, and uploads stay on track.',
        },
        {
          number: '05',
          title: 'Clear Communication',
          description:
            'Responsive, straightforward English and Bengali communication designed for smooth collaboration with clients across global time zones.',
        },
        {
          number: '06',
          title: 'Client Satisfaction',
          description:
            'Collaborative revision rounds focused on making sure every final export aligns with your brand vision and project brief.',
        },
      ],
    },
    process: {
      sectionLabel: 'My Work Process',
      heading: 'A Structured Four-Step Creative Workflow',
      subheading:
        'From initial project inquiry to final high-resolution delivery, every engagement follows a transparent, stress-free process.',
      steps: [
        {
          step: '01',
          title: 'Discuss Your Project',
          description:
            'Share your goals, reference examples, raw files, and timeline via Email, WhatsApp, Fiverr, or Upwork.',
        },
        {
          step: '02',
          title: 'Understand Your Requirements',
          description:
            'We align on visual style, color direction, platform dimensions, deliverables, and revision expectations before work begins.',
        },
        {
          step: '03',
          title: 'Creative Work & Editing',
          description:
            'Hands-on retouching, color grading, graphic composition, or video editing executed with precision and quality checks.',
        },
        {
          step: '04',
          title: 'Final Delivery',
          description:
            'Organized, ready-to-publish high-resolution files delivered on schedule—with refined revisions handled smoothly.',
        },
      ],
    },
    testimonials: {
      sectionLabel: 'Client Testimonials',
      heading: 'Client Feedback & Partnership Notes',
      subheading:
        'Ready to showcase verified reviews from international photographers, Amazon sellers, and creative teams.',
      demoBannerTitle: 'Editable Demonstration Content',
      demoBannerText:
        'The cards below are clearly marked sample entries for layout preview only—no client reviews or ratings have been invented. Replace them with verified testimonials in src/data/testimonials.ts.',
      demoEntryTag: 'Sample Demo Entry',
    },
    contact: {
      sectionLabel: 'Start a Project',
      heading: "Have a Project in Mind? Let's Create Something Amazing.",
      subheading:
        'Tell me about your photos, brand graphics, Amazon listing, or video edit. Reach out through the inquiry brief below or connect directly on your preferred platform.',
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'you@company.com',
        serviceLabel: 'Select a Service',
        servicePlaceholder: 'Choose the service you need',
        detailsLabel: 'Project Details',
        detailsPlaceholder:
          'Share your project scope, image/video count, desired turnaround, or reference links...',
        submitEndpoint: 'Send Project Inquiry',
        submitDirect: 'Prepare Direct Inquiry',
        submitting: 'Sending inquiry...',
        endpointModeNote:
          'Connected to a live form endpoint. Your inquiry will be delivered directly.',
        directModeNote:
          'Static hosting mode: submitting validates your brief and unlocks instant Email, WhatsApp, and Copy-Brief dispatch (or connect Formspree in siteConfig.ts for direct inbox delivery).',
        validation: {
          nameRequired: 'Please enter your name (at least 2 characters).',
          emailRequired: 'Please enter a valid email address.',
          serviceRequired: 'Please select the service you are interested in.',
          detailsRequired: 'Please share a brief description of your project (at least 15 characters).',
        },
        endpointSuccessTitle: 'Inquiry Delivered',
        endpointSuccessText:
          'Thank you for reaching out. Your project brief was received by the configured form service.',
        endpointErrorTitle: 'Submission Failed',
        endpointErrorText:
          'The form endpoint could not process your request right now. You can retry or send your prepared brief directly via Email or WhatsApp below.',
        dispatchReadyTitle: 'Project Brief Validated & Ready to Send',
        dispatchReadyText:
          'No backend form endpoint is configured yet, so nothing was automatically emailed. Use one of the verified direct actions below to send your formatted inquiry right now:',
        openEmailBtn: 'Open Pre-Filled Email',
        openWhatsappBtn: 'Send via WhatsApp',
        copyBriefBtn: 'Copy Formatted Brief',
        copiedBtn: 'Brief Copied',
        editBriefBtn: 'Edit Details',
      },
      channelsHeading: 'Direct Channels & Freelance Platforms',
      channelsSubtext:
        'Prefer messaging directly or hiring through a trusted marketplace? Choose the channel that fits your workflow.',
      placeholderNote: 'Editable placeholder link — update in src/config/siteConfig.ts',
    },
    footer: {
      description:
        'Independent Photo Editor, Graphic Designer & Video Editor crafting high-impact visual content for photographers, e-commerce brands, and international clients.',
      quickLinksTitle: 'Navigation',
      servicesTitle: 'Services',
      connectTitle: 'Connect',
      backToTop: 'Back to Top',
      rightsReserved: 'All rights reserved.',
    },
  },

  bn: {
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      services: 'সেবাসমূহ',
      portfolio: 'পোর্টফোলিও',
      contact: 'যোগাযোগ',
      hireMe: 'হায়ার করুন',
      openMenu: 'মেনু খুলুন',
      closeMenu: 'মেনু বন্ধ করুন',
      switchToBengali: 'বাংলা ভাষায় পরিবর্তন করুন',
      switchToEnglish: 'ইংরেজি ভাষায় পরিবর্তন করুন',
    },
    hero: {
      disciplines: [
        'ফটো এডিটিং',
        'গ্রাফিক ডিজাইন',
        'অ্যামাজন A+ ডিজাইন',
        'ভিডিও এডিটিং',
      ],
      headline: 'সৃজনশীল ভাবনাকে অসাধারণ ভিজ্যুয়াল অভিজ্ঞতায় রূপান্তর করছি।',
      supportingText:
        'আমি অপু কুমার—একজন পেশাদার ফটো এডিটর, গ্রাফিক ডিজাইনার এবং ভিডিও এডিটর। আমি ব্যবসা, ফটোগ্রাফার ও ব্র্যান্ডগুলোকে নজরকাড়া ও মানসম্পন্ন ভিজ্যুয়াল কনটেন্ট তৈরিতে সহায়তা করি।',
      ctaWork: 'আমার কাজ দেখুন',
      ctaHire: 'আমাকে হায়ার করুন',
      globalClientsLabel: 'বিশ্বব্যাপী ক্লায়েন্টদের জন্য উন্মুক্ত',
      globalClientsRegions: 'যুক্তরাষ্ট্র · যুক্তরাজ্য · কানাডা · অস্ট্রেলিয়া · ইউরোপ',
      portraitCaptionTitle: 'অপু কুমার',
      portraitCaptionSubtitle: 'ফটো রিটাচিং · ব্র্যান্ড ডিজাইন · ভিডিও এডিটিং',
      portraitPlaceholderNote: 'ডেমো পোর্ট্রেট — siteConfig.ts থেকে পরিবর্তনযোগ্য',
      marqueeItems: [
        'ওয়েডিং কালার গ্রেডিং',
        'প্রফেশনাল ফটো রিটাচিং',
        'অ্যামাজন A+ কনটেন্ট ডিজাইন',
        'ইউটিউব থাম্বনেইল ডিজাইন',
        'ব্র্যান্ড গ্রাফিক ডিজাইন',
        'সিনেমাটিক ভিডিও এডিটিং',
        'এআই-সমৃদ্ধ ক্রিয়েটিভ ওয়ার্কফ্লো',
      ],
    },
    about: {
      sectionLabel: 'আমার সম্পর্কে',
      heading: 'কাজের পেছনের সৃজনশীল মানুষটি',
      paragraph1:
        'আমি অপু কুমার, একজন নিবেদিতপ্রাণ ক্রিয়েটিভ পেশাদার যিনি পেশাদার ফটো এডিটিং, গ্রাফিক ডিজাইন এবং ভিডিও এডিটিংয়ে বিশেষজ্ঞ। দীর্ঘদিনের বাস্তব অভিজ্ঞতা নিয়ে আমি ফটোগ্রাফার, ব্র্যান্ড, ব্যবসা ও কনটেন্ট ক্রিয়েটরদের ভাবনাকে মানসম্পন্ন ভিজ্যুয়াল কনটেন্টে রূপান্তর করি।',
      paragraph2:
        'আমার মূল লক্ষ্য হলো নিখুঁত মান, সৃজনশীলতা, সূক্ষ্ম যত্ন এবং ক্লায়েন্টের পূর্ণ সন্তুষ্টি। আমি বিশ্বাস করি প্রতিটি ছবি ও ডিজাইনের নিজস্ব একটি গল্প আছে।',
      approachHeading: 'আমার কাজের দৃষ্টিভঙ্গি',
      approachPoints: [
        {
          title: 'নিখুঁত ভিজ্যুয়াল সামঞ্জস্য',
          description:
            'প্রতিটি ওয়েডিং অ্যালবাম, প্রোডাক্ট ক্যাটালগ এবং ব্র্যান্ড ডিজাইনে ধারাবাহিক কালার টোন ও আন্তর্জাতিক মান বজায় রাখা হয়।',
        },
        {
          title: 'বিক্রয় ও দর্শকবান্ধব ডিজাইন',
          description:
            'অ্যামাজন A+ লিস্টিং থেকে শুরু করে ইউটিউব থাম্বনেইল ও প্রোমো ভিডিও—প্রতিটি কাজ দর্শকের মনোযোগ ও আস্থা অর্জনের লক্ষ্যে তৈরি।',
        },
        {
          title: 'আন্তর্জাতিক রিমোট ওয়ার্কফ্লো',
          description:
            'সুবিন্যস্ত ফাইল আদান-প্রদান, নিয়মিত আপডেট এবং বিভিন্ন টাইম-জোনের ক্লায়েন্টদের সাথে সময়নিষ্ঠ সমন্বয়।',
        },
      ],
      toolkitHeading: 'প্রধান সফটওয়্যার ও ক্রিয়েটিভ টুলস',
      toolkitSubtext: 'ইন্ডাস্ট্রি-স্ট্যান্ডার্ড সফটওয়্যার এবং আধুনিক এআই-চালিত ক্রিয়েটিভ টুলসের সমন্বয়।',
      software: [
        {
          code: 'Ps',
          name: 'Adobe Photoshop',
          role: 'ফটো রিটাচিং, ম্যানিপুলেশন, অ্যামাজন গ্রাফিক্স ও ব্যাকগ্রাউন্ড রিমুভাল',
        },
        {
          code: 'Lr',
          name: 'Adobe Lightroom',
          role: 'ওয়েডিং কালার গ্রেডিং, ব্যাচ এডিটিং ও কাস্টম প্রিসেট',
        },
        {
          code: 'Pr',
          name: 'Adobe Premiere Pro',
          role: 'প্রোমোশনাল ও সিনেমাটিক ভিডিও এডিটিং এবং কালার কারেকশন',
        },
        {
          code: 'AI',
          name: 'AI-Powered Creative Tools',
          role: 'আধুনিক এআই বিজ্ঞাপন ভিডিও, স্মার্ট রিস্টোরেশন ও দ্রুত প্রোডাকশন',
        },
      ],
    },
    services: {
      sectionLabel: 'পেশাদার সেবাসমূহ',
      heading: 'ব্র্যান্ড, ফটোগ্রাফার ও ক্রিয়েটরদের জন্য বিশেষায়িত সেবা',
      subheading:
        'আপনার ফটোগ্রাফি, ই-কমার্স প্রোডাক্ট, ব্র্যান্ড পরিচিতি এবং ভিডিও কনটেন্টকে আলাদা মাত্রায় নিয়ে যেতে পাঁচটি বিশেষায়িত সেবা।',
      viewProjects: 'প্রজেক্ট দেখুন',
      getStarted: 'শুরু করুন',
    },
    portfolio: {
      sectionLabel: 'নির্বাচিত পোর্টফোলিও',
      heading: 'বিভিন্ন মাধ্যমে ভিজ্যুয়াল কাজের নমুনা',
      subheading:
        'ওয়েডিং এডিটিং, ফটো রিটাচিং, অ্যামাজন ডিজাইন, গ্রাফিক ডিজাইন, ইউটিউব থাম্বনেইল এবং ভিডিও এডিটিংয়ের ডেমো প্রদর্শনী দেখুন।',
      demoDisclaimer:
        'ডেমোনস্ট্রেশন গ্যালারি — এখানে লেআউট প্রদর্শনের জন্য নমুনা ভিজ্যুয়াল রাখা হয়েছে, যা src/data/portfolio.ts থেকে সহজেই নিজের কাজে পরিবর্তন করা যাবে।',
      demoTag: 'ডেমো নমুনা',
      viewDetails: 'বিস্তারিত দেখুন',
      categories: {
        all: 'সব প্রজেক্ট',
        wedding: 'ওয়েডিং এডিটিং',
        retouching: 'ফটো রিটাচিং',
        amazon: 'অ্যামাজন ডিজাইন',
        graphic: 'গ্রাফিক ডিজাইন',
        youtube: 'ইউটিউব থাম্বনেইল',
        video: 'ভিডিও এডিটিং',
      },
      lightbox: {
        close: 'প্রিভিউ বন্ধ করুন',
        previous: 'আগের প্রজেক্ট',
        next: 'পরের প্রজেক্ট',
        deliverables: 'প্রধান আউটপুটসমূহ',
        toolsUsed: 'ব্যবহৃত সফটওয়্যার',
        demoNotice:
          'এটি পোর্টফোলিও প্রদর্শনের জন্য ডেমো ভিজ্যুয়াল — src/data/portfolio.ts ফাইল থেকে আপনার আসল কাজের ছবি যোগ করুন।',
        requestSimilar: 'এমন কাজের জন্য যোগাযোগ করুন',
      },
    },
    whyChooseMe: {
      sectionLabel: 'কেন আমাকে বেছে নেবেন',
      heading: 'নিখুঁত মান, আস্থা ও আন্তর্জাতিক পেশাদারিত্ব',
      subheading:
        'আন্তর্জাতিক ফটোগ্রাফার, ই-কমার্স ব্র্যান্ড ও এজেন্সিগুলোর সাথে কাজ করতে শুধু দক্ষতা নয়—প্রয়োজন নির্ভরযোগ্যতা ও সময়ানুবর্তিতা।',
      items: [
        {
          number: '01',
          title: 'পেশাদার গুণগত মান',
          description:
            'ওয়েব, প্রিন্ট এবং মার্কেটপ্লেস গাইডলাইন অনুযায়ী এজেন্সি মানের ফটো রিটাচিং, কালার গ্রেডিং ও গ্রাফিক ডিজাইন।',
        },
        {
          number: '02',
          title: 'সূক্ষ্ম মনোযোগ ও নিখুঁত যত্ন',
          description:
            'প্রাকৃতিক স্কিন টেক্সচার বজায় রাখা, নিখুঁত মাস্কিং, ব্যালেন্সড লাইটিং এবং পরিচ্ছন্ন টাইপোগ্রাফির প্রতি পূর্ণ মনোযোগ।',
        },
        {
          number: '03',
          title: 'সৃজনশীল সমাধান',
          description:
            'প্রতিটি ব্র্যান্ডের লক্ষ্য অনুযায়ী দৃষ্টি-আকর্ষণকারী অ্যামাজন লিস্টিং, ওয়েডিং গ্যালারি এবং আধুনিক ভিডিও এডিট।',
        },
        {
          number: '04',
          title: 'সময়মতো ডেলিভারি',
          description:
            'নির্ধারিত সময়সীমা মেনে কাজ সম্পন্ন করা, যাতে আপনার প্রজেক্ট বা লঞ্চ কখনো বিলম্বিত না হয়।',
        },
        {
          number: '05',
          title: 'স্পষ্ট ও দ্রুত যোগাযোগ',
          description:
            'ইংরেজি ও বাংলা—উভয় ভাষায় সহজ ও স্পষ্ট যোগাযোগ, যা বিশ্বজুড়ে ক্লায়েন্টদের সাথে কাজকে মসৃণ করে।',
        },
        {
          number: '06',
          title: 'ক্লায়েন্ট সন্তুষ্টি',
          description:
            'চূড়ান্ত ফাইল আপনার প্রত্যাশা অনুযায়ী নিখুঁত না হওয়া পর্যন্ত আন্তরিক রিভিশন ও সহযোগিতা।',
        },
      ],
    },
    process: {
      sectionLabel: 'আমার কাজের ধাপ',
      heading: 'স্বচ্ছ ও সুশৃঙ্খল চার-ধাপের ওয়ার্কফ্লো',
      subheading:
        'প্রাথমিক আলোচনা থেকে চূড়ান্ত হাই-রেজোলিউশন ডেলিভারি পর্যন্ত প্রতিটি প্রজেক্ট সহজ ও নির্ভুল প্রক্রিয়ায় সম্পন্ন হয়।',
      steps: [
        {
          step: '01',
          title: 'প্রজেক্ট নিয়ে আলোচনা',
          description:
            'ইমেইল, হোয়াটসঅ্যাপ, ফাইভার বা আপওয়ার্কের মাধ্যমে আপনার লক্ষ্য, রেফারেন্স, মূল ফাইল ও সময়সীমা শেয়ার করুন।',
        },
        {
          step: '02',
          title: 'প্রয়োজনীয়তা বোঝা',
          description:
            'কাজ শুরুর আগেই স্টাইল, কালার টোন, ফরম্যাট, ডেলিভারেবলস ও রিভিশন পরিকল্পনা পরিষ্কারভাবে চূড়ান্ত করা হয়।',
        },
        {
          step: '03',
          title: 'ক্রিয়েটিভ কাজ ও এডিটিং',
          description:
            'সর্বোচ্চ যত্ন ও মান যাচাইয়ের মাধ্যমে রিটাচিং, কালার গ্রেডিং, ডিজাইন অথবা ভিডিও এডিটিং সম্পন্ন করা হয়।',
        },
        {
          step: '04',
          title: 'চূড়ান্ত ডেলিভারি',
          description:
            'সুবিন্যস্ত ও প্রকাশের জন্য প্রস্তুত হাই-রেজোলিউশন ফাইল সময়মতো হস্তান্তর করা হয়।',
        },
      ],
    },
    testimonials: {
      sectionLabel: 'ক্লায়েন্ট মতামত',
      heading: 'ক্লায়েন্ট রিভিউ ও কাজের অভিজ্ঞতা',
      subheading:
        'আন্তর্জাতিক ফটোগ্রাফার, অ্যামাজন সেলার এবং ব্র্যান্ডগুলোর যাচাইকৃত রিভিউ প্রদর্শনের জন্য প্রস্তুত সেকশন।',
      demoBannerTitle: 'সম্পাদনাযোগ্য ডেমোনস্ট্রেশন কনটেন্ট',
      demoBannerText:
        'নিচের কার্ডগুলো শুধুমাত্র ডিজাইন প্রিভিউয়ের জন্য নমুনা হিসেবে রাখা হয়েছে—কোনো কাল্পনিক ক্লায়েন্ট রিভিউ বা রেটিং যোগ করা হয়নি। src/data/testimonials.ts থেকে আসল ক্লায়েন্ট মতামত যুক্ত করুন।',
      demoEntryTag: 'ডেমো নমুনা এন্ট্রি',
    },
    contact: {
      sectionLabel: 'প্রজেক্ট শুরু করুন',
      heading: 'মনে কোনো প্রজেক্ট আছে? চলুন অসাধারণ কিছু তৈরি করি।',
      subheading:
        'আপনার ফটো এডিটিং, গ্রাফিক ডিজাইন, অ্যামাজন লিস্টিং বা ভিডিও প্রজেক্ট সম্পর্কে জানান। নিচের ফর্মটি পূরণ করুন অথবা সরাসরি পছন্দের মাধ্যমে যোগাযোগ করুন।',
      form: {
        nameLabel: 'আপনার নাম',
        namePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
        emailLabel: 'ইমেইল ঠিকানা',
        emailPlaceholder: 'you@company.com',
        serviceLabel: 'সেবা নির্বাচন করুন',
        servicePlaceholder: 'আপনার প্রয়োজনীয় সেবা বেছে নিন',
        detailsLabel: 'প্রজেক্টের বিবরণ',
        detailsPlaceholder:
          'আপনার প্রজেক্টের ধরন, ছবি বা ভিডিওর সংখ্যা, ডেলিভারি সময় ও রেফারেন্স সম্পর্কে লিখুন...',
        submitEndpoint: 'প্রজেক্ট বার্তা পাঠান',
        submitDirect: 'সরাসরি বার্তা প্রস্তুত করুন',
        submitting: 'বার্তা পাঠানো হচ্ছে...',
        endpointModeNote:
          'লাইভ ফর্ম এন্ডপয়েন্ট সংযুক্ত রয়েছে। আপনার বার্তা সরাসরি ইনবক্সে পৌঁছাবে।',
        directModeNote:
          'স্ট্যাটিক হোস্টিং মোড: ফর্ম যাচাইয়ের পর সরাসরি ইমেইল, হোয়াটসঅ্যাপ বা কপি-ব্রিফ অপশন চালু হবে (অথবা siteConfig.ts-এ Formspree যুক্ত করুন)।',
        validation: {
          nameRequired: 'অনুগ্রহ করে আপনার নাম লিখুন (কমপক্ষে ২ অক্ষর)।',
          emailRequired: 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা লিখুন।',
          serviceRequired: 'অনুগ্রহ করে একটি সেবা নির্বাচন করুন।',
          detailsRequired: 'অনুগ্রহ করে আপনার প্রজেক্ট সম্পর্কে সংক্ষেপে লিখুন (কমপক্ষে ১৫ অক্ষর)।',
        },
        endpointSuccessTitle: 'বার্তা সফলভাবে পৌঁছেছে',
        endpointSuccessText:
          'যোগাযোগ করার জন্য ধন্যবাদ। আপনার প্রজেক্ট বিবরণ কনফিগার করা ফর্ম সার্ভিসে গৃহীত হয়েছে।',
        endpointErrorTitle: 'পাঠাতে সমস্যা হয়েছে',
        endpointErrorText:
          'এই মুহূর্তে ফর্ম সার্ভিসে সংযোগ করা যায়নি। পুনরায় চেষ্টা করুন অথবা নিচের ইমেইল বা হোয়াটসঅ্যাপ অপশন ব্যবহার করুন।',
        dispatchReadyTitle: 'প্রজেক্ট ব্রিফ যাচাই ও পাঠানোর জন্য প্রস্তুত',
        dispatchReadyText:
          'এখনো ব্যাকএন্ড ফর্ম এন্ডপয়েন্ট যুক্ত করা হয়নি, তাই স্বয়ংক্রিয়ভাবে ইমেইল পাঠানো হয়নি। নিচের যেকোনো সরাসরি মাধ্যম ব্যবহার করে আপনার বার্তাটি পাঠান:',
        openEmailBtn: 'ইমেইল অ্যাপে খুলুন',
        openWhatsappBtn: 'হোয়াটসঅ্যাপে পাঠান',
        copyBriefBtn: 'ব্রিফ কপি করুন',
        copiedBtn: 'কপি হয়েছে',
        editBriefBtn: 'তথ্য সম্পাদনা করুন',
      },
      channelsHeading: 'সরাসরি যোগাযোগ ও ফ্রিল্যান্স প্ল্যাটফর্ম',
      channelsSubtext:
        'সরাসরি মেসেজ করতে চান অথবা বিশ্বস্ত মার্কেটপ্লেসে অর্ডার করতে চান? আপনার পছন্দের মাধ্যম বেছে নিন।',
      placeholderNote: 'সম্পাদনাযোগ্য লিংক — src/config/siteConfig.ts থেকে আপডেট করুন',
    },
    footer: {
      description:
        'ফটোগ্রাফার, ই-কমার্স ব্র্যান্ড এবং আন্তর্জাতিক ক্লায়েন্টদের জন্য প্রিমিয়াম ফটো এডিটিং, গ্রাফিক ডিজাইন ও ভিডিও এডিটিং সেবা।',
      quickLinksTitle: 'নেভিগেশন',
      servicesTitle: 'সেবাসমূহ',
      connectTitle: 'যোগাযোগ',
      backToTop: 'উপরে ফিরে যান',
      rightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
    },
  },
} as const;

export type TranslationSchema = (typeof TRANSLATIONS)[Language];
