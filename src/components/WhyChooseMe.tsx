import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function WhyChooseMe() {
  const { t } = useLanguage();

  return (
    <section
      id="why-choose-me"
      className="py-20 lg:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#FF6B35] mb-3">
            {t.whyChooseMe.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
            {t.whyChooseMe.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A5A5AD] leading-relaxed">
            {t.whyChooseMe.subheading}
          </p>
        </div>

        {/* Architectural 3x2 Hairline Grid */}
        <div className="mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyChooseMe.items.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: (idx % 3) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-[#141419] border border-white/[0.08] hover:border-white/20 p-6 sm:p-7 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-[#F5B544] tabular-nums">
                  {item.number}
                </span>
                <span
                  aria-hidden="true"
                  className="w-8 h-[1px] bg-white/15 group-hover:bg-[#FF6B35] transition-colors duration-200"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm sm:text-[15px] text-[#A5A5AD] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
