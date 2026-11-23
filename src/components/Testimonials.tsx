import { motion } from 'motion/react';
import { Info, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export function Testimonials() {
  const { t, pick } = useLanguage();
  const hasDemoEntries = TESTIMONIALS_DATA.some((item) => item.isDemo);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#FF6B35] mb-3">
            {t.testimonials.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] leading-[1.15] text-white">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A5A5AD] leading-relaxed">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Clear Demonstration Notice (Never Invents Real Reviews or Ratings) */}
        {hasDemoEntries && (
          <div className="mt-8 rounded-xl bg-[#141419] border border-[#F5B544]/25 p-4 sm:p-5 flex items-start gap-3.5 max-w-4xl">
            <Info
              className="w-5 h-5 text-[#F5B544] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div className="text-sm leading-relaxed">
              <p className="font-semibold text-white">
                {t.testimonials.demoBannerTitle}
              </p>
              <p className="mt-1 text-[#A5A5AD]">
                {t.testimonials.demoBannerText}
              </p>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-2xl bg-[#141419] border border-white/[0.08] p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <Quote
                    className="w-6 h-6 text-[#FF6B35]/80"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-[#A5A5AD]">
                    {item.isDemo
                      ? t.testimonials.demoEntryTag
                      : pick(item.projectType)}
                  </span>
                </div>

                <blockquote className="mt-5 text-sm sm:text-[15px] text-white/85 leading-[1.75]">
                  “{pick(item.quote)}”
                </blockquote>
              </div>

              <figcaption className="mt-7 pt-5 border-t border-white/[0.07]">
                <p className="text-sm font-semibold text-white">
                  {pick(item.author)}
                </p>
                <p className="mt-1 text-xs text-[#A5A5AD]">
                  {pick(item.role)} · {pick(item.projectType)}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
