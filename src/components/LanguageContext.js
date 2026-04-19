"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary } from '../translations/dictionary';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    const savedLang = localStorage.getItem('cartel-lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('cartel-lang', newLang);
  };

  const t = (key) => {
    return dictionary[lang][key] || key;
  };

  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={lang === 'ar' ? 'lang-ar' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
