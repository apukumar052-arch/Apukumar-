import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Expand,
  Info,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PORTFOLIO_PROJECTS } from '../data/portfolio';
import type { PortfolioCategory, PortfolioProject, ServiceId } from '../types/content';
import { ResilientImage } from './ResilientImage';

interface PortfolioProps {
  activeCategory: PortfolioCategory;
  onCategoryChange: (category: PortfolioCategory) => void;
  onRequestSimilar: (serviceId: ServiceId) => void;
}

const CATEGORY_ORDER: PortfolioCategory[] = [
  'all',
  'wedding',
  'retouching',
  'amazon',
  'graphic',
  'youtube',
  'video',
  'canvas',
];

export function Portfolio({
  activeCategory,
  onCategoryChange,
  onRequestSimilar,
}: PortfolioProps) {
  const { t, pick } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<PortfolioCategory, number> = {
      all: PORTFOLIO_PROJECTS.length,
      wedding: 0,
      retouching: 0,
      amazon: 0,
      graphic: 0,
      youtube: 0,
      video: 0,
      canvas: 0,
    };
    PORTFOLIO_PROJECTS.forEach((item) => {
      counts[item.category] += 1;
    });
    return counts;
  }, []);

  const selectedIndex = useMemo(() => {
    if (!selectedProjectId) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProjectId);
  }, [filteredProjects, selectedProjectId]);

  const selectedProject: PortfolioProject | null =
    selectedIndex >= 0 ? filteredProjects[selectedIndex] : null;

  const handleClose = useCallback(() => {
    setSelectedProjectId(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (filteredProjects.length <= 1 || selectedIndex < 0) return;
    const prevIdx =
      (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[prevIdx].id);
  }, [filteredProjects, selectedIndex]);

  const handleNext = useCallback(() => {
    if (filteredProjects.length <= 1 || selectedIndex < 0) return;
    const nextIdx = (selectedIndex + 1) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[nextIdx].id);
  }, [filteredProjects, selectedIndex]);

  // Lock body scroll & enable keyboard controls when Lightbox is open
  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
      if (event.key === 'ArrowLeft') handlePrev();
      if (event.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject, handleClose, handlePrev, handleNext]);

  const hasDemoItems = PORTFOLIO_PROJECTS.some((item) => item.isDemo);

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 border-b border-white/[0.06] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#FF6B35] mb-3">
              {t.portfolio.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
              {t.portfolio.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A5A5AD] leading-relaxed">
              {t.portfolio.subheading}
            </p>
          </div>
        </div>

        {/* Transparent Demo Notice */}
        {hasDemoItems && (
          <div className="mt-6 flex items-start gap-2.5 text-xs sm:text-sm text-[#A5A5AD] max-w-3xl">
            <Info
              className="w-4 h-4 text-[#F5B544] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p>{t.portfolio.demoDisclaimer}</p>
          </div>
        )}

        {/* Interactive Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Portfolio categories"
          className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1"
        >
          {CATEGORY_ORDER.map((categoryKey) => {
            const isActive = activeCategory === categoryKey;
            const count = categoryCounts[categoryKey];
            return (
              <button
                key={categoryKey}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onCategoryChange(categoryKey)}
                className={`relative px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer border ${
                  isActive
                    ? 'bg-[#FF6B35] border-[#FF6B35] text-[#0B0B0D] font-semibold'
                    : 'bg-[#141419] border-white/[0.08] text-[#A5A5AD] hover:text-white hover:border-white/20'
                }`}
              >
                <span>{t.portfolio.categories[categoryKey]}</span>
                <span
                  className={`ml-2 text-xs tabular-nums ${
                    isActive ? 'text-[#0B0B0D]/75' : 'text-white/40'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Media-First Portfolio Gallery Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const spanClass =
                activeCategory === 'all' && idx === 0
                  ? 'md:col-span-2 lg:col-span-2'
                  : '';

              const aspectClass =
                activeCategory === 'all' && idx === 0
                  ? 'aspect-[16/10]'
                  : 'aspect-[4/3]';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={spanClass}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    className="group relative block w-full h-full text-left rounded-2xl overflow-hidden bg-[#141419] border border-white/[0.08] hover:border-[#FF6B35]/50 transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
                  >
                    <div className={`w-full overflow-hidden ${aspectClass}`}>
                      <ResilientImage
                        src={project.image}
                        alt={pick(project.imageAlt)}
                        fallbackTitle={pick(project.title)}
                        loading="lazy"
                        className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                        imgClassName={
                          project.aspect === 'portrait'
                            ? 'object-cover object-top'
                            : 'object-cover'
                        }
                      />
                    </div>

                    {/* Measured Contrast Scrim */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/95 via-[#0B0B0D]/30 to-transparent" />

                    {/* Subtle Expand Affordance Icon */}
                    <div
                      aria-hidden="true"
                      className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#0B0B0D]/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-85 group-hover:opacity-100 group-hover:border-[#FF6B35]/60 group-hover:text-[#FF6B35] transition-all duration-200"
                    >
                      <Expand className="w-4 h-4" />
                    </div>

                    {/* Clean Unboxed Metadata & Title */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#F5B544]">
                        <span>{pick(project.categoryLabel)}</span>
                        {project.isDemo && (
                          <>
                            <span className="text-white/30" aria-hidden="true">
                              ·
                            </span>
                            <span className="text-[#A5A5AD]">
                              {t.portfolio.demoTag}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#FF6B35] transition-colors duration-150">
                        {pick(project.title)}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm text-[#A5A5AD] line-clamp-2 max-w-[54ch]">
                        {pick(project.summary)}
                      </p>
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Size Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-project-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-[#0B0B0D]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl bg-[#141419] border border-white/12 overflow-hidden shadow-2xl my-auto"
            >
              {/* Top Bar Controls */}
              <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A5A5AD] min-w-0">
                  <span className="font-semibold text-[#F5B544] whitespace-nowrap">
                    {pick(selectedProject.categoryLabel)}
                  </span>
                  <span aria-hidden="true" className="text-white/25">
                    ·
                  </span>
                  <span className="tabular-nums whitespace-nowrap">
                    {selectedIndex + 1} / {filteredProjects.length}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {filteredProjects.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label={t.portfolio.lightbox.previous}
                        className="w-10 h-10 rounded-lg bg-[#0B0B0D] border border-white/12 hover:border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label={t.portfolio.lightbox.next}
                        className="w-10 h-10 rounded-lg bg-[#0B0B0D] border border-white/12 hover:border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label={t.portfolio.lightbox.close}
                    className="w-10 h-10 rounded-lg bg-[#0B0B0D] border border-white/15 hover:border-[#FF6B35] hover:text-[#FF6B35] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Lightbox Content Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Full-Size Artwork View */}
                <div className="lg:col-span-7 bg-[#0B0B0D] flex items-center justify-center max-h-[65vh] lg:max-h-[75vh] overflow-hidden">
                  <ResilientImage
                    src={selectedProject.image}
                    alt={pick(selectedProject.imageAlt)}
                    fallbackTitle={pick(selectedProject.title)}
                    loading="eager"
                    className="w-full h-full max-h-[65vh] lg:max-h-[75vh]"
                    imgClassName="object-contain"
                  />
                </div>

                {/* Details Panel */}
                <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between gap-6">
                  <div>
                    <h3
                      id="lightbox-project-title"
                      className="text-xl sm:text-2xl font-bold text-white leading-tight"
                    >
                      {pick(selectedProject.title)}
                    </h3>

                    <p className="mt-3 text-sm text-[#A5A5AD] leading-relaxed">
                      {pick(selectedProject.summary)}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/[0.08]">
                      <h4 className="text-xs font-semibold text-[#F5B544] mb-3">
                        {t.portfolio.lightbox.deliverables}
                      </h4>
                      <ul className="space-y-2 text-sm text-white/90">
                        {selectedProject.deliverables.map((item) => (
                          <li key={item.en} className="flex items-start gap-2.5">
                            <Check
                              className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{pick(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-5 border-t border-white/[0.08]">
                      <h4 className="text-xs font-semibold text-[#A5A5AD] mb-2">
                        {t.portfolio.lightbox.toolsUsed}
                      </h4>
                      <p className="text-sm font-medium text-white">
                        {selectedProject.tools.join(' · ')}
                      </p>
                    </div>

                    {selectedProject.isDemo && (
                      <p className="mt-5 pt-4 border-t border-white/[0.08] text-xs text-[#A5A5AD] leading-relaxed">
                        {t.portfolio.lightbox.demoNotice}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const targetService = selectedProject.serviceId;
                      handleClose();
                      onRequestSimilar(targetService);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] text-[#0B0B0D] font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <span>{t.portfolio.lightbox.requestSimilar}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
