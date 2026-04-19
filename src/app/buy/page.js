"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

export default function Buy() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===================== SHOP HERO ===================== */}
      <section className="shop-hero">
        <div className="shop-hero-bg">
          <div className="shop-orb shop-orb-1"></div>
          <div className="shop-orb shop-orb-2"></div>
          <div className="shop-orb shop-orb-3"></div>
        </div>
        <div className="container">
          <div className="shop-hero-inner">
            <AnimatedSection className="section-label" style={{ justifyContent: 'center' }}>
              {t('sh-label')}
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="shop-title" dangerouslySetInnerHTML={{ __html: t('sh-title') }}></h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="shop-subtitle">{t('sh-desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="shop-trust">
              <span>{t('sh-t1')}</span>
              <span>{t('sh-t2')}</span>
              <span>{t('sh-t3')}</span>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCT FEATURE ===================== */}
      <section className="products-section" id="products">
        <div className="container">
          <div className="product-feature" id="main-product">
            <AnimatedSection direction="left" className="product-feature-image">
              <img src="/car_screen_cartel.png" alt="High-Tech Digital Infotainment Screen" />
              <div className="product-badge">{t('p-badge')}</div>
            </AnimatedSection>
            
            <div className="product-feature-info">
              <AnimatedSection direction="right" delay={0.1}>
                <div className="product-meta">
                  <span className="product-type">{t('p-type')}</span>
                  <div className="product-rating">★★★★★ <span>{t('p-reviews')}</span></div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <h2 className="product-name">{t('p-name')}</h2>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.3}>
                <p className="product-desc">{t('p-desc')}</p>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.4}>
                <div className="product-tags">
                  <span className="tag tag-gold">{t('p-tag1')}</span>
                  <span className="tag tag-red">{t('p-tag2')}</span>
                  <span className="tag">{t('p-tag3')}</span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection direction="right" delay={0.5}>
                <ul className="product-specs">
                  <li><strong>{t('sp-1')}</strong> <span>{t('sv-1')}</span></li>
                  <li><strong>{t('sp-2')}</strong> <span>{t('sv-2')}</span></li>
                  <li><strong>{t('sp-3')}</strong> <span>{t('sv-3')}</span></li>
                  <li><strong>{t('sp-4')}</strong> <span>{t('sv-4')}</span></li>
                </ul>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.6}>
                <div className="product-footer">
                  <div className="product-pricing">
                    <span className="price">$1,299.00</span>
                  </div>
                  <a href="https://wa.me/966551798746" target="_blank" className="add-to-cart-btn btn-subscribe" id="order-whatsapp-btn">
                    {t('p-order')}
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DELIVERY INFO ===================== */}
      <section className="delivery-info">
        <div className="container">
          <div className="delivery-grid">
            {[1, 2, 3, 4].map((id, index) => (
              <AnimatedSection key={id} delay={index * 0.1} className="delivery-item">
                <div className="delivery-icon">{id === 1 ? '🚚' : id === 2 ? '🛡️' : id === 3 ? '💬' : '♻️'}</div>
                <h4>{t(`dl-${id}-t`)}</h4>
                <p>{t(`dl-${id}-d`)}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
