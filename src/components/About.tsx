import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 lg:py-28 border-b border-white/[0.06] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Creative Approach */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-semibold text-[#FF6B35] mb-3">
              {t.about.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
              {t.about.heading}
            </h2>

            <div className="mt-7 space-y-5 text-base sm:text-[17px] text-[#A5A5AD] leading-[1.75] max-w-[65ch]">
              <p className="text-white/90">{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* Creative Approach Pillars */}
            <div className="mt-12 pt-10 border-t border-white/[0.08]">
              <h3 className="text-sm font-semibold text-[#F5B544] mb-6">
                {t.about.approachHeading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                {t.about.approachPoints.map((point, index) => (
                  <div key={point.title} className="space-y-2.5">
                    <span className="text-xs font-semibold text-white/40 tabular-nums">
                      0{index + 1}
                    </span>
                    <h4 className="text-base font-semibold text-white">
                      {point.title}
                    </h4>
                    <p className="text-sm text-[#A5A5AD] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Software Skills & Studio Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#141419] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">
                {t.about.toolkitHeading}
              </h3>
              <p className="mt-2 text-sm text-[#A5A5AD] leading-relaxed">
                {t.about.toolkitSubtext}
              </p>

              <div className="mt-7 divide-y divide-white/[0.07]">
                {t.about.software.map((tool) => (
                  <div
                    key={tool.name}
                    className="py-5 first:pt-0 last:pb-0 flex items-start gap-4 group"
                  >
                    <div
                      aria-hidden="true"
                      className="w-11 h-11 rounded-xl bg-[#0B0B0D] border border-white/10 group-hover:border-[#FF6B35]/50 flex items-center justify-center shrink-0 font-display text-sm font-bold text-[#F5B544] transition-colors duration-200"
                    >
                      {tool.code}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold text-white">
                        {tool.name}
                      </h4>
                      <p className="mt-1 text-sm text-[#A5A5AD] leading-relaxed">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
