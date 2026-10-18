/**
 * Smart Car Touchscreen Landing Page - Main JavaScript
 * Handles Scroll Animations, 3D Showcase Flip, Parallax, Filters, and Navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Scroll Progress Bar & Navbar Sticky Behavior
  // ------------------------------------------------------------------------
  const progressBar = document.getElementById('scrollProgressBar');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`;
    }

    if (header) {
      if (scrollTop > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Active link highlighting
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // ------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // ------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const closeDrawer = document.getElementById('closeDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openMenu() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMenu);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ------------------------------------------------------------------------
  // 3. Scroll Reveal Animations (Intersection Observer)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, unobserve to keep visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ------------------------------------------------------------------------
  // 4. Interactive Product Showcase (3D Card & Scroll Trigger)
  // ------------------------------------------------------------------------
  const card3d = document.getElementById('product3dCard');
  const viewport = document.getElementById('showcaseViewport');
  const btnFront = document.getElementById('btnViewFront');
  const btnBack = document.getElementById('btnViewBack');
  const btnAutoRotate = document.getElementById('btnAutoRotate');
  const autoRotateText = document.getElementById('autoRotateText');
  const tooltipBox = document.getElementById('hotspotTooltip');
  const tooltipText = tooltipBox ? tooltipBox.querySelector('.tooltip-text') : null;

  let isFlipped = false;
  let autoRotateInterval = null;
  let isAutoRotating = false;
  let mouseTiltEnabled = true;

  function updateView(flipped) {
    isFlipped = flipped;
    if (card3d) {
      if (isFlipped) {
        card3d.classList.add('flipped');
        if (btnBack) btnBack.classList.add('active');
        if (btnFront) btnFront.classList.remove('active');
      } else {
        card3d.classList.remove('flipped');
        if (btnFront) btnFront.classList.add('active');
        if (btnBack) btnBack.classList.remove('active');
      }
    }
  }

  if (btnFront) {
    btnFront.addEventListener('click', () => {
      stopAutoRotate();
      updateView(false);
    });
  }

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      stopAutoRotate();
      updateView(true);
    });
  }

  function startAutoRotate() {
    isAutoRotating = true;
    if (btnAutoRotate) btnAutoRotate.classList.add('active');
    if (autoRotateText) autoRotateText.textContent = 'إيقاف التدوير';
    autoRotateInterval = setInterval(() => {
      updateView(!isFlipped);
    }, 3200);
  }

  function stopAutoRotate() {
    isAutoRotating = false;
    if (btnAutoRotate) btnAutoRotate.classList.remove('active');
    if (autoRotateText) autoRotateText.textContent = 'تدوير تلقائي';
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
    }
  }

  if (btnAutoRotate) {
    btnAutoRotate.addEventListener('click', () => {
      if (isAutoRotating) {
        stopAutoRotate();
      } else {
        startAutoRotate();
      }
    });
  }

  // Click on card itself to toggle flip
  if (card3d) {
    card3d.addEventListener('click', (e) => {
      // Ignore if clicking on hotspot pin
      if (e.target.closest('.hotspot-pin')) return;
      stopAutoRotate();
      updateView(!isFlipped);
    });
  }

  // Dynamic Scroll-Triggered Flip: As user scrolls through the Showcase section
  const showcaseSection = document.getElementById('showcase');
  if (showcaseSection) {
    let hasScrolledFlipTriggered = false;
    window.addEventListener('scroll', () => {
      if (isAutoRotating) return; // Do not override if user clicked auto-rotate
      const rect = showcaseSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // When showcase is in the middle of screen
      if (rect.top <= viewportHeight * 0.35 && rect.bottom >= viewportHeight * 0.65) {
        if (!isFlipped && !hasScrolledFlipTriggered) {
          updateView(true);
          hasScrolledFlipTriggered = true;
        }
      } else if (rect.top > viewportHeight * 0.45) {
        if (isFlipped && hasScrolledFlipTriggered) {
          updateView(false);
          hasScrolledFlipTriggered = false;
        }
      }
    }, { passive: true });
  }

  // 3D Parallax Mouse Tilt Effect on Viewport
  if (viewport && card3d) {
    viewport.addEventListener('mousemove', (e) => {
      if (!mouseTiltEnabled) return;
      const rect = viewport.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Degree range -12 to 12
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const rotY = isFlipped ? 180 - deltaX * 12 : deltaX * 12;
      const rotX = -deltaY * 12;

      card3d.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;

      // Specular glare position
      const glares = card3d.querySelectorAll('.product-glare');
      glares.forEach(glare => {
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18) 0%, transparent 60%)`;
      });
    });

    viewport.addEventListener('mouseleave', () => {
      card3d.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
      const glares = card3d.querySelectorAll('.product-glare');
      glares.forEach(glare => {
        glare.style.background = '';
      });
    });

    // Touch support for mobile swipe
    let touchStartX = 0;
    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > 40) {
        stopAutoRotate();
        updateView(!isFlipped);
      }
    }, { passive: true });
  }

  // Hotspot Tooltips Hover & Click
  const hotspotPins = document.querySelectorAll('.hotspot-pin');
  hotspotPins.forEach(pin => {
    const tip = pin.getAttribute('data-tooltip');
    
    pin.addEventListener('mouseenter', () => {
      if (tooltipText && tip) {
        tooltipText.textContent = tip;
        tooltipBox.style.borderColor = 'var(--neon-red)';
      }
    });

    pin.addEventListener('mouseleave', () => {
      if (tooltipBox) {
        tooltipBox.style.borderColor = 'var(--neon-red-border)';
      }
    });

    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      if (tooltipText && tip) {
        tooltipText.textContent = tip;
        tooltipBox.classList.add('pulse');
        setTimeout(() => tooltipBox.classList.remove('pulse'), 400);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. Feature Filter Category Tabs
  // ------------------------------------------------------------------------
  const tabButtons = document.querySelectorAll('.tab-btn');
  const featureCards = document.querySelectorAll('.feature-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      featureCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 6. FAQ Accordion Interaction
  // ------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
        }
      });
    }
  });

  // ------------------------------------------------------------------------
  // 7. Smooth Scroll for all internal hash links
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
