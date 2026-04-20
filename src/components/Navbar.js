"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="mainNav">
      <Link href="/" className="nav-logo">
        <img src="/CARtel Supply logo 2 nobg.png" alt="CARtel Logo" />
      </Link>
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        ≡
      </button>

      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link href="/" className={isActive('/') ? 'active' : ''}>
            {t('nav-home')}
          </Link>
        </li>
        <li>
          <Link href="/buy" className={isActive('/buy') ? 'active' : ''}>
            {t('nav-shop')}
          </Link>
        </li>
        <li>
          <Link href="/#story">
            {t('nav-story')}
          </Link>
        </li>
        <li>
          <button onClick={toggleLang} className="lang-toggle-btn">
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
        </li>
        <li>
          <a href="https://wa.me/966551798746" target="_blank" className="nav-cta">
            {t('nav-order')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
