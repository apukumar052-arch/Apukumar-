import type { ContactChannel } from '../types/content';

/**
 * ============================================================================
 * CENTRALIZED SITE & CONTACT CONFIGURATION — APU KUMAR PORTFOLIO
 * ============================================================================
 * Edit this file to update your personal profile image, contact links,
 * Fiverr/Upwork profiles, WhatsApp number, email, and live contact form endpoint.
 * No need to edit UI components when updating your details.
 */

export const SITE_CONFIG = {
  brand: {
    name: 'APU KUMAR',
    shortMonogram: 'AK',
    role: {
      en: 'Professional Photo Editor, Graphic Designer & Video Editor',
      bn: 'পেশাদার ফটো এডিটর, গ্রাফিক ডিজাইনার ও ভিডিও এডিটর',
    },
    /**
     * REPLACE PROFILE IMAGE:
     * Put your portrait photo inside `public/images/` (e.g. `/images/apu-profile.jpg`)
     * or `src/assets/images/` and update the path below.
     */
    profileImage: '/assets/aistudio/apu_profile_portrait_1795434062443_85c76ee2.jpg',
    profileImageAlt: {
      en: 'Apu Kumar — Graphic Designer portrait',
      bn: 'অপু কুমার — গ্রাফিক ডিজাইনার পোর্ট্রেট',
    },
    profileImageIsPlaceholder: false,
  },

  /**
   * LIVE CONTACT FORM SUBMISSION ENDPOINT (OPTIONAL — RECOMMENDED FOR PRODUCTION)
   * ----------------------------------------------------------------------------
   * To receive contact form messages directly in your inbox on Cloudflare Pages:
   * 1. Create a free form at https://formspree.io or https://web3forms.com
   * 2. Paste your endpoint URL below, e.g.:
   *    formEndpoint: 'https://formspree.io/f/your_form_id'
   *
   * When left empty (`''`), the form validates every field and opens an honest
   * Direct Dispatch panel letting clients send their pre-filled inquiry via
   * Email (`mailto:`), WhatsApp, or Copy Brief — never showing a fake success message.
   */
  contactForm: {
    formEndpoint: '',
  },

  /**
   * DIRECT CONTACT DETAILS & FREELANCE PLATFORMS
   * ----------------------------------------------------------------------------
   * Replace the placeholder handles & URLs below with your real links before launch.
   */
  contact: {
    emailAddress: 'your.email@example.com', // Replace with your real email address
    whatsappNumber: '8801XXXXXXXXX', // Replace with your country code + WhatsApp number (digits only, no +)
    whatsappDisplay: '+880 1XXX-XXXXXX', // Replace with formatted display number
    fiverrUrl: 'https://www.fiverr.com/', // Replace with https://www.fiverr.com/your_username
    fiverrHandle: 'fiverr.com/your-username',
    upworkUrl: 'https://www.upwork.com/', // Replace with https://www.upwork.com/freelancers/~your_id
    upworkHandle: 'upwork.com/freelancers/your-profile',
  },
} as const;

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'whatsapp',
    label: {
      en: 'WhatsApp Direct',
      bn: 'হোয়াটসঅ্যাপ ডিরেক্ট',
    },
    handle: SITE_CONFIG.contact.whatsappDisplay,
    href: `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
      'Hello Apu Kumar, I would like to discuss a creative project.'
    )}`,
    description: {
      en: 'Fast project discussion & file sharing',
      bn: 'দ্রুত প্রজেক্ট আলোচনা ও ফাইল শেয়ারিং',
    },
    isPlaceholder: SITE_CONFIG.contact.whatsappNumber.includes('X'),
  },
  {
    id: 'email',
    label: {
      en: 'Email Inquiry',
      bn: 'ইমেইল যোগাযোগ',
    },
    handle: SITE_CONFIG.contact.emailAddress,
    href: `mailto:${SITE_CONFIG.contact.emailAddress}?subject=${encodeURIComponent(
      'Creative Project Inquiry — Apu Kumar'
    )}`,
    description: {
      en: 'Detailed briefs, RAW galleries & brand guidelines',
      bn: 'বিস্তারিত ব্রিফ, RAW গ্যালারি ও ব্র্যান্ড গাইডলাইন',
    },
    isPlaceholder: SITE_CONFIG.contact.emailAddress === 'your.email@example.com',
  },
  {
    id: 'fiverr',
    label: {
      en: 'Hire on Fiverr',
      bn: 'ফাইভারে হায়ার করুন',
    },
    handle: SITE_CONFIG.contact.fiverrHandle,
    href: SITE_CONFIG.contact.fiverrUrl,
    description: {
      en: 'Structured packages with escrow protection',
      bn: 'নির্দিষ্ট প্যাকেজ ও নিরাপদ পেমেন্ট সিস্টেম',
    },
    isPlaceholder: SITE_CONFIG.contact.fiverrHandle.includes('your-username'),
  },
  {
    id: 'upwork',
    label: {
      en: 'Hire on Upwork',
      bn: 'আপওয়ার্কে হায়ার করুন',
    },
    handle: SITE_CONFIG.contact.upworkHandle,
    href: SITE_CONFIG.contact.upworkUrl,
    description: {
      en: 'Long-term contracts & recurring creative retainers',
      bn: 'দীর্ঘমেয়াদী চুক্তি ও নিয়মিত ক্রিয়েটিভ সাপোর্ট',
    },
    isPlaceholder: SITE_CONFIG.contact.upworkHandle.includes('your-profile'),
  },
];
