import { motion } from 'motion/react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Film,
  Globe,
  PenTool,
  Play,
  ShoppingBag,
  Sparkles,
  Wand2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';
import { ResilientImage } from './ResilientImage';

const MARQUEE_ICONS = [
  Camera,
  Wand2,
  ShoppingBag,
  Play,
  PenTool,
  Film,
  Sparkles,
] as const;

interface HeroProps {
  onViewWork: () => void;
  onHireMe: () => void;
}

export function Hero({ onViewWork, onHireMe }: HeroProps) {
  const { t, pick } = useLanguage();

  const marqueeItems = [...t.hero.marqueeItems, ...t.hero.marqueeItems];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-white/[0.06]"
    >
      {/* Subtle Animated Luxury Gradient Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-ambient-drift absolute -top-24 right-[6%] w-[480px] h-[480px] rounded-full blur-[130px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,107,53,0.16) 0%, rgba(245,181,68,0.08) 45%, rgba(11,11,13,0) 72%)',
          }}
        />
        <div
          className="absolute bottom-12 -left-24 w-[420px] h-[420px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(245,181,68,0.12) 0%, rgba(20,20,25,0) 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 lg:py-6">
            <div>
              {/* Clean Unboxed Service Disciplines Metadata */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-[#F5B544] mb-6"
              >
                {t.hero.disciplines.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-2.5">
                    <span>{item}</span>
                    {idx < t.hero.disciplines.length - 1 && (
                      <span className="text-white/25" aria-hidden="true">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </motion.div>

              {/* Main Display Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.25rem,4.3vw,3.95rem)] font-bold tracking-[-0.025em] leading-[1.08] text-white max-w-2xl"
              >
                {t.hero.headline}
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 text-base sm:text-lg text-[#A5A5AD] leading-relaxed max-w-[58ch]"
              >
                {t.hero.supportingText}
              </motion.p>

              {/* Primary & Secondary Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={onViewWork}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] text-[#0B0B0D] font-semibold text-sm sm:text-base whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer"
                >
                  <span>{t.hero.ctaWork}</span>
                  <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onHireMe}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#141419] hover:bg-[#1d1d24] border border-white/15 hover:border-white/30 text-white font-semibold text-sm sm:text-base whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer"
                >
                  <span>{t.hero.ctaHire}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F5B544]" aria-hidden="true" />
                </button>
              </motion.div>
            </div>

            {/* Quiet Global Availability Footer Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#A5A5AD]"
            >
              <span className="inline-flex items-center gap-2 text-white font-medium whitespace-nowrap">
                <Globe className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                <span>{t.hero.globalClientsLabel}</span>
              </span>
              <span className="hidden sm:inline text-white/20" aria-hidden="true">
                ·
              </span>
              <span>{t.hero.globalClientsRegions}</span>
            </motion.div>
          </div>

          {/* Right Column: Full-Height Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative flex-1 min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-[#141419] group">
              <ResilientImage
                src={SITE_CONFIG.brand.profileImage}
                alt={pick(SITE_CONFIG.brand.profileImageAlt)}
                fallbackTitle={t.hero.portraitCaptionTitle}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Subtle Editorial Viewfinder Framing Accents (Floating Creative Elements) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-4 left-4 w-5 h-5 border-t border-l border-[#F5B544]/60"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-4 right-4 w-5 h-5 border-t border-r border-[#F5B544]/60"
              />

              {/* Measured Contrast Scrim for Legible Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0B0D]/95 via-[#0B0B0D]/55 to-transparent pt-20 pb-5 px-5 sm:px-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {t.hero.portraitCaptionTitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A5A5AD] mt-0.5">
                      {t.hero.portraitCaptionSubtitle}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-[#F5B544]/90 tabular-nums shrink-0">
                    RAW · PSD · 4K
                  </span>
                </div>
                {SITE_CONFIG.brand.profileImageIsPlaceholder && (
                  <p className="mt-2.5 pt-2.5 border-t border-white/10 text-[11px] text-[#A5A5AD]/80">
                    {t.hero.portraitPlaceholderNote}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Editorial Marquee Divider Ribbon */}
      <div
        aria-hidden="true"
        className="mt-14 lg:mt-20 border-t border-white/[0.06] pt-6 overflow-hidden select-none"
      >
        <div className="flex w-max animate-marquee items-center gap-8 text-xs sm:text-sm font-medium tracking-wide text-[#A5A5AD]/90">
          {marqueeItems.map((item, index) => {
            const Icon = MARQUEE_ICONS[index % MARQUEE_ICONS.length];
            return (
              <span
                key={`${item}-${index}`}
                className="inline-flex items-center gap-8 whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] text-[#FF6B35] shrink-0">
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </span>
                <span className="text-[#FF6B35]/60">·</span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
