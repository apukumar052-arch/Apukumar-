import { useCallback, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseMe } from './components/WhyChooseMe';
import { WorkProcess } from './components/WorkProcess';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { PortfolioCategory, ServiceId } from './types/content';

function PortfolioApp() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceId | ''>('');

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleViewCategoryProjects = useCallback(
    (category: PortfolioCategory) => {
      setActiveCategory(category);
      scrollToSection('portfolio');
    },
    [scrollToSection]
  );

  const handleGetStartedWithService = useCallback(
    (serviceId: ServiceId) => {
      setSelectedService(serviceId);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#FF6B35] focus:text-[#0B0B0D] focus:font-semibold"
      >
        Skip to content
      </a>

      <Navbar onNavigateSection={scrollToSection} />

      <main id="main-content">
        <Hero
          onViewWork={() => scrollToSection('portfolio')}
          onHireMe={() => scrollToSection('contact')}
        />

        <About />

        <Services
          onViewProjects={handleViewCategoryProjects}
          onGetStarted={handleGetStartedWithService}
        />

        <Portfolio
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onRequestSimilar={handleGetStartedWithService}
        />

        <WhyChooseMe />

        <WorkProcess />

        <Contact preselectedService={selectedService} />
      </main>

      <Footer
        onNavigateSection={scrollToSection}
        onSelectServicePortfolio={handleViewCategoryProjects}
      />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </MotionConfig>
  );
}
