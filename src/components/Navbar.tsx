import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG } from '../config/siteConfig';

const NAV_IDS = ['home', 'about', 'services', 'portfolio', 'contact'] as const;
type NavId = (typeof NAV_IDS)[number];

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
}

export function Navbar({ onNavigateSection }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<NavId>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id as NavId;
          if (NAV_IDS.includes(id)) {
            setActiveSection(id);
          }
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const navItems: { id: NavId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleLinkClick = (sectionId: string) => {
    setMobileOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileOpen
          ? 'bg-[#0B0B0D]/90 backdrop-blur-xl border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-base sm:text-lg font-bold tracking-[0.14em] text-white whitespace-nowrap shrink-0 hover:text-white/90 transition-colors"
        >
          {SITE_CONFIG.brand.name}
          <span className="text-[#FF6B35]" aria-hidden="true">
            .
          </span>
        </a>

        {/* Zone 2: Primary Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive ? 'text-white' : 'text-[#A5A5AD] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FF6B35]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher + Primary CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center p-0.5 rounded-lg bg-[#141419] border border-white/10"
          >
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-label={t.nav.switchToEnglish}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#0B0B0D]'
                  : 'text-[#A5A5AD] hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('bn')}
              aria-label={t.nav.switchToBengali}
              aria-pressed={lang === 'bn'}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'bn'
                  ? 'bg-white text-[#0B0B0D]'
                  : 'text-[#A5A5AD] hover:text-white'
              }`}
            >
              বাংলা
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] text-[#0B0B0D] font-semibold text-sm whitespace-nowrap shrink-0 transition-colors duration-150"
          >
            <span>{t.nav.hireMe}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#141419] border border-white/10 text-white hover:border-white/25 transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation-drawer"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0B0B0D] border-b border-white/10 px-5 pt-3 pb-6"
          >
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className={`py-3.5 text-base font-medium flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#FF6B35]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#FF6B35] hover:bg-[#ff7d4d] text-[#0B0B0D] font-semibold text-sm transition-colors"
            >
              <span>{t.nav.hireMe}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
