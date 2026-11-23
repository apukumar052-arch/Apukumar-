import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Camera,
  Check,
  Film,
  Layers,
  Palette,
  ShoppingBag,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_DATA } from '../data/services';
import type { PortfolioCategory, ServiceId, ServiceItem } from '../types/content';
import { ResilientImage } from './ResilientImage';

interface ServicesProps {
  onViewProjects: (category: PortfolioCategory) => void;
  onGetStarted: (serviceId: ServiceId) => void;
}

const ICON_MAP = {
  camera: Camera,
  layers: Layers,
  shoppingBag: ShoppingBag,
  palette: Palette,
  film: Film,
} as const;

export function Services({ onViewProjects, onGetStarted }: ServicesProps) {
  const { t, pick } = useLanguage();

  const featuredServices = SERVICES_DATA.slice(0, 2);
  const secondaryServices = SERVICES_DATA.slice(2);

  const renderCard = (service: ServiceItem, index: number, isFeatured: boolean) => {
    const Icon = ICON_MAP[service.iconName];

    return (
      <motion.article
        key={service.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.45,
          delay: (index % 3) * 0.06,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group flex flex-col rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-[#FF6B35]/40 transition-colors duration-200 overflow-hidden"
      >
        {/* Visual Header */}
        <div
          className={`relative overflow-hidden ${
            isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'
          }`}
        >
          <ResilientImage
            src={service.image}
            alt={pick(service.imageAlt)}
            fallbackTitle={pick(service.title)}
            loading="lazy"
            className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141419] via-[#141419]/35 to-transparent" />

          {/* Clean Index & Icon Overlay */}
          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
            <span className="font-display text-xs font-semibold tracking-[0.14em] text-[#F5B544] tabular-nums">
              {service.number}
            </span>
            <div
              aria-hidden="true"
              className="w-9 h-9 rounded-lg bg-[#0B0B0D]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#FF6B35]"
            >
              <Icon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-1 p-6 sm:p-7">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.015em]">
              {pick(service.title)}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-[#F5B544]/90">
              {pick(service.subtitle)}
            </p>
            <p className="mt-3.5 text-sm text-[#A5A5AD] leading-relaxed">
              {pick(service.description)}
            </p>
          </div>

          {/* Structured Capability List */}
          <ul
            className={`mt-6 pt-6 border-t border-white/[0.07] grid gap-2.5 text-sm text-white/85 ${
              isFeatured ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {service.features.map((feature) => (
              <li
                key={feature.en}
                className="flex items-start gap-2.5 leading-snug"
              >
                <Check
                  className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{pick(feature)}</span>
              </li>
            ))}
          </ul>

          {/* Action Row */}
          <div className="mt-auto pt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onGetStarted(service.id)}
              className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] text-[#0B0B0D] font-semibold text-sm whitespace-nowrap transition-colors duration-150 cursor-pointer"
            >
              <span>{t.services.getStarted}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => onViewProjects(service.portfolioCategory)}
              className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0B0B0D] hover:bg-white/[0.06] border border-white/12 hover:border-white/25 text-white font-medium text-sm whitespace-nowrap transition-colors duration-150 cursor-pointer"
            >
              <span>{t.services.viewProjects}</span>
            </button>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 border-b border-white/[0.06] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#FF6B35] mb-3">
            {t.services.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A5A5AD] leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* Balanced 2 + 3 Editorial Grid (Zero Orphan Gaps on Desktop) */}
        <div className="mt-12 lg:mt-14 space-y-6 lg:space-y-7">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
            {featuredServices.map((service, idx) => renderCard(service, idx, true))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {secondaryServices.map((service, idx) => renderCard(service, idx + 2, false))}
          </div>
        </div>
      </div>
    </section>
  );
}
