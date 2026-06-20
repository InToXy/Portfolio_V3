import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fr } from '../locales/fr';
import { en } from '../locales/en';

type Language = 'fr' | 'en';
type Translations = typeof fr;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('fr');

  const toggleLang = () => setLang(prev => prev === 'fr' ? 'en' : 'fr');

  const t = lang === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
