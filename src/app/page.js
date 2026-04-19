"use client";

import React from 'react';
import { useLanguage } from '@/components/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="glow-orb glow-orb-1"></div>
          <div className="glow-orb glow-orb-2"></div>
          <div className="glow-orb glow-orb-3"></div>
        </div>

        <div className="hero-content container">
          <div className="hero-text">
            <AnimatedSection>
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>{t('hero-badge')}</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t('hero-title') }}></h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="hero-subtitle">{t('hero-subtitle')}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="hero-actions">
                <Link href="/buy" className="btn btn-primary" id="hero-shop-btn">
                  <span>{t('hero-btn-shop')}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link href="#story" className="btn btn-outline" id="hero-story-btn">
                  {t('hero-btn-about')}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="hero-stats">
                <div className="stat"><span className="stat-num">100%</span><span className="stat-label">{t('stat-1')}</span></div>
                <div className="stat-divider"></div>
                <div className="stat"><span className="stat-num">{t('stat-2')}</span><span className="stat-label">{t('stat-2-l')}</span></div>
                <div className="stat-divider"></div>
                <div className="stat"><span className="stat-num">{t('stat-3')}</span><span className="stat-label">{t('stat-3-l')}</span></div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={0.2} className="hero-visual">
            <div className="hero-image-wrap">
              <div className="hero-image-glow"></div>
              <img src="/hero_car_cartel.png" alt="Premium Sports Car" className="hero-img" id="heroImg" />
              <div className="hero-badge-float badge-float-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <span>{t('badge-precision')}</span>
              </div>
              <div className="hero-badge-float badge-float-2">
                {t('badge-perf')}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="hero-scroll-hint" id="scrollHint">
          <span>{t('scroll-hint')}</span>
          <div className="scroll-arrow">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>{t('marq-1')}</span><span>✦</span>
              <span>{t('marq-2')}</span><span>✦</span>
              <span>{t('marq-3')}</span><span>✦</span>
              <span>{t('marq-4')}</span><span>✦</span>
              <span>{t('marq-5')}</span><span>✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ===================== FEATURES ===================== */}
      <section className="features" id="features">
        <div className="container">
          <div className="features-header">
            <AnimatedSection className="section-label">{t('feat-label')}</AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 dangerouslySetInnerHTML={{ __html: t('feat-title') }}></h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="features-desc">{t('feat-desc')}</p>
            </AnimatedSection>
          </div>

          <div className="features-grid">
            {[1, 2, 3, 4].map((id, index) => (
              <AnimatedSection key={id} delay={index * 0.1} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-ring"></div>
                  <span>{id === 1 ? '🛠️' : id === 2 ? '⚡' : id === 3 ? '🛡️' : '🚀'}</span>
                </div>
                <h3>{t(`fc-${id}-title`)}</h3>
                <p>{t(`fc-${id}-desc`)}</p>
                <div className="feature-line"></div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STORY ===================== */}
      <section className="story" id="story">
        <div className="story-bg-text">CARTEL</div>
        <div className="container">
          <div className="story-inner">
            <AnimatedSection direction="left" className="story-visual">
              <div className="story-img-frame">
                <img src="/car_parts_cartel.png" alt="Premium Car Parts" className="story-img" />
                <div className="story-img-accent"></div>
              </div>
              <div className="story-tag">
                <div className="story-tag-icon">🏁</div>
                <div>
                  <strong>{t('story-tag-str')}</strong>
                  <span>{t('story-tag-sp')}</span>
                </div>
              </div>
            </AnimatedSection>

            <div className="story-text">
              <AnimatedSection className="section-label">{t('story-label')}</AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 dangerouslySetInnerHTML={{ __html: t('story-title') }}></h2>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p>{t('story-desc-1')}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p>{t('story-desc-2')}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.4} className="story-pillars">
                <div className="pillar"><strong>1,000+</strong><span>{t('story-pill-1')}</span></div>
                <div className="pillar"><strong>{t('story-pill-2-b')}</strong><span>{t('story-pill-2')}</span></div>
                <div className="pillar"><strong>24/7</strong><span>{t('story-pill-3')}</span></div>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <Link href="/buy" className="btn btn-primary" id="story-shop-btn">
                  {t('story-btn')}
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PERFORMANCE ===================== */}
      <section className="nutrition" id="nutrition">
        <div className="container">
          <div className="nutrition-header">
            <AnimatedSection className="section-label">{t('perf-label')}</AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 dangerouslySetInnerHTML={{ __html: t('perf-title') }}></h2>
            </AnimatedSection>
          </div>
          <div className="nutrition-grid">
            {[
              { val: "+15%", fill: "85%", delay: 0 },
              { val: "-20lbs", fill: "65%", delay: 100 },
              { val: "1.1G", fill: "50%", delay: 200 },
              { val: "< 0.1s", fill: "75%", delay: 300 }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={item.delay / 1000} className="nutrient-card">
                <div className="nutrient-value">{item.val}</div>
                <div className="nutrient-name">{t(`n${i+1}-title`)}</div>
                <div className="nutrient-bar">
                  <div className="nutrient-fill" style={{ '--fill': item.fill }}></div>
                </div>
                <p>{t(`n${i+1}-desc`)}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <AnimatedSection className="section-label" style={{ justifyContent: 'center' }}>
            {t('test-label')}
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="testimonials-title" dangerouslySetInnerHTML={{ __html: t('test-title') }}></h2>
          </AnimatedSection>
          <div className="testimonials-grid">
            {[1, 2, 3].map((id, index) => (
              <AnimatedSection key={id} delay={index * 0.1} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p>{t(`t${id}-p`)}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{id === 1 ? 'MS' : id === 2 ? 'JD' : 'AK'}</div>
                  <div><strong>{t(`t${id}-n`)}</strong><span>{t(`t${id}-r`)}</span></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="cta-banner">
        <div className="cta-banner-bg">
          <div className="cta-orb cta-orb-1"></div>
          <div className="cta-orb cta-orb-2"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <AnimatedSection>
              <h2 dangerouslySetInnerHTML={{ __html: t('cta-title') }}></h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p>{t('cta-desc')}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link href="/buy" className="btn btn-white" id="cta-shop-btn">
                {t('cta-btn')}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
