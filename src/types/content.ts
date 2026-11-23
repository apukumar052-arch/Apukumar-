export type Language = 'en' | 'bn';

export interface LocalizedText {
  en: string;
  bn: string;
}

export type ServiceId =
  | 'wedding-photo-editing'
  | 'professional-photo-editing'
  | 'amazon-product-design'
  | 'graphic-design'
  | 'video-editing';

export type PortfolioCategory =
  | 'all'
  | 'wedding'
  | 'retouching'
  | 'amazon'
  | 'graphic'
  | 'youtube'
  | 'video'
  | 'canvas';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  portfolioCategory: PortfolioCategory;
  iconName: 'camera' | 'layers' | 'shoppingBag' | 'palette' | 'film';
  image: string;
  imageAlt: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
}

export interface PortfolioProject {
  id: string;
  title: LocalizedText;
  category: Exclude<PortfolioCategory, 'all'>;
  categoryLabel: LocalizedText;
  serviceId: ServiceId;
  image: string;
  imageAlt: LocalizedText;
  aspect: 'wide' | 'standard' | 'portrait';
  summary: LocalizedText;
  deliverables: LocalizedText[];
  tools: string[];
  /**
   * Set to `false` once you replace this demonstration item with your own real client work.
   */
  isDemo: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: LocalizedText;
  author: LocalizedText;
  role: LocalizedText;
  projectType: LocalizedText;
  /**
   * Set to `false` once replaced with a real verified client review.
   */
  isDemo: boolean;
}

export interface ContactChannel {
  id: 'whatsapp' | 'email' | 'fiverr' | 'upwork';
  label: LocalizedText;
  handle: string;
  href: string;
  description: LocalizedText;
  isPlaceholder: boolean;
}
