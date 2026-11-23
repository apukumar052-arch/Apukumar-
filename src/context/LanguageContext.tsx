import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { TRANSLATIONS, type TranslationSchema } from '../data/translations';
import type { Language, LocalizedText } from '../types/content';

const STORAGE_KEY = 'apu_kumar_portfolio_lang';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationSchema;
  pick: (value: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved =
      window.sessionStorage.getItem(STORAGE_KEY) ||
      window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'bn') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions in private sandboxes
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, next);
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'bn' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang];
  const pick = (value: LocalizedText) => value[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
