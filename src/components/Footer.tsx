import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_CHANNELS, SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/services';
import type { PortfolioCategory } from '../types/content';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onSelectServicePortfolio: (category: PortfolioCategory) => void;
}

export function Footer({
  onNavigateSection,
  onSelectServicePortfolio,
}: FooterProps) {
  const { t, pick } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Description */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block font-display text-lg font-bold tracking-[0.14em] text-white"
            >
              {SITE_CONFIG.brand.name}
              <span className="text-[#FF6B35]" aria-hidden="true">
                .
              </span>
            </a>
            <p className="text-sm text-[#A5A5AD] leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A5A5AD]">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateSection(link.id);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A5A5AD]">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectServicePortfolio(service.portfolioCategory)}
                    className="text-left hover:text-white transition-colors cursor-pointer"
                  >
                    {pick(service.title)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.footer.connectTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A5A5AD]">
              {CONTACT_CHANNELS.map((channel) => {
                const isExternal = channel.id !== 'email';
                return (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 hover:text-[#FF6B35] transition-colors"
                    >
                      <span>{pick(channel.label)}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#A5A5AD]">
          <p className="tabular-nums">
            © {currentYear} {SITE_CONFIG.brand.name}. {t.footer.rightsReserved}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141419] border border-white/10 hover:border-[#FF6B35]/50 hover:text-white text-[#A5A5AD] text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
