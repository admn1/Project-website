"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/CARtel Supply logo 2 nobg.png" alt="CARtel Logo" style={{ height: '80px' }} />
          </div>
          <ul className="footer-links">
            <li><Link href="/">{t('nav-home')}</Link></li>
            <li><Link href="/buy">{t('nav-shop')}</Link></li>
            <li><Link href="/#story">{t('nav-story')}</Link></li>
            <li><a href="https://www.instagram.com/car.tel_supply/" target="_blank">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@car.tel_supply?lang=en" target="_blank">TikTok</a></li>
          </ul>
          <p className="footer-copy">{t('footer-copy')}</p>
        </div>
      </div>
    </footer>
  );
}
