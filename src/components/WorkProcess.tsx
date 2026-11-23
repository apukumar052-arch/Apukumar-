import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function WorkProcess() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="py-20 lg:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#FF6B35] mb-3">
            {t.process.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
            {t.process.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A5A5AD] leading-relaxed">
            {t.process.subheading}
          </p>
        </div>

        {/* Horizontal Timeline on Desktop (lg), Vertical Connected Timeline on Mobile */}
        <div className="relative mt-14 lg:mt-16">
          {/* Desktop Horizontal Connecting Rail */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-6 right-6 h-[1px] bg-gradient-to-r from-[#FF6B35]/60 via-white/15 to-[#F5B544]/60"
          />

          {/* Mobile Vertical Connecting Rail */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute top-6 bottom-6 left-6 w-[1px] bg-gradient-to-b from-[#FF6B35]/60 via-white/15 to-[#F5B544]/60"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-7">
            {t.process.steps.map((step, index) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-16 lg:pl-0"
              >
                {/* Step Node */}
                <div className="absolute left-0 top-0 lg:relative lg:mb-7 w-12 h-12 rounded-xl bg-[#141419] border border-white/15 flex items-center justify-center font-display text-sm font-bold text-[#FF6B35] tabular-nums shadow-sm">
                  {step.step}
                </div>

                {/* Step Content */}
                <div className="pt-1 lg:pt-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] text-[#A5A5AD] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
