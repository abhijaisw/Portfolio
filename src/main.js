import './style.css';
import Lenis from 'lenis';

import { createNavbar } from './components/Navbar.js';
import { createHero } from './components/Hero.js';
import { createTrustBar } from './components/TrustBar.js';
import { createEcosystem } from './components/Ecosystem.js';
import { createKycJourney } from './components/KycJourney.js';
import { createDkycSection } from './components/DkycSection.js';
import { createEkycSection } from './components/EkycSection.js';
import { createCkycSection } from './components/CkycSection.js';
import { createRekycSection } from './components/RekycSection.js';
import { createOfflineKyc } from './components/OfflineKyc.js';
import { createSecurity } from './components/Security.js';
import { createGovernance } from './components/Governance.js';
import { createComparisonTable } from './components/ComparisonTable.js';
import { createArchitecture } from './components/Architecture.js';
import { createDashboard } from './components/Dashboard.js';
import { createImpactCalculator } from './components/ImpactCalculator.js';
import { createStats } from './components/Stats.js';
import { createTestimonials } from './components/Testimonials.js';
import { createFinalCTA } from './components/FinalCTA.js';
import { createFooter } from './components/Footer.js';
import { createDemoModal } from './components/DemoModal.js';

// Setup App Root
const app = document.querySelector('#app');

if (app) {
  // Clear any existing content
  app.innerHTML = '';

  // Main wrapper with accessible semantic landmarks
  const main = document.createElement('main');
  main.id = 'main-content';

  // Mount Navbar
  app.appendChild(createNavbar());

  // Mount Main Sections
  main.appendChild(createHero());
  main.appendChild(createTrustBar());
  main.appendChild(createEcosystem());
  main.appendChild(createGovernance());
  main.appendChild(createKycJourney());
  main.appendChild(createDkycSection());
  main.appendChild(createEkycSection());
  main.appendChild(createCkycSection());
  main.appendChild(createRekycSection());
  main.appendChild(createOfflineKyc());
  main.appendChild(createSecurity());
  main.appendChild(createComparisonTable());
  main.appendChild(createArchitecture());
  main.appendChild(createDashboard());
  main.appendChild(createImpactCalculator());
  main.appendChild(createStats());
  main.appendChild(createTestimonials());
  main.appendChild(createFinalCTA());

  app.appendChild(main);

  // Mount Footer & Modal
  app.appendChild(createFooter());
  app.appendChild(createDemoModal());
}

// Initialize Lenis Smooth Scroll
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;
if (!prefersReducedMotion) {
  try {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Coordinate smooth anchor links with Lenis
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -60, duration: 1.2 });
          }
        }
      });
    });
  } catch (err) {
    console.warn('Lenis smooth scroll fallback to native smooth scroll:', err);
  }
}

// Scroll-triggered Number Counters for Stats Section
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.stat-big-num');
      counters.forEach((counter) => {
        const targetVal = parseFloat(counter.getAttribute('data-target') || '0');
        const suffix = counter.getAttribute('data-suffix') || '';
        const isDecimal = targetVal % 1 !== 0;

        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = easeProgress * targetVal;

          if (isDecimal) {
            counter.textContent = currentVal.toFixed(1) + suffix;
          } else {
            counter.textContent = Math.floor(currentVal).toLocaleString() + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (suffix === 'ms') {
              counter.textContent = `< 850ms`;
            } else if (suffix === 's') {
              counter.textContent = `< 30s`;
            } else {
              counter.textContent = (isDecimal ? targetVal.toFixed(1) : targetVal.toLocaleString()) + suffix;
            }
          }
        }

        requestAnimationFrame(updateCounter);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const statsSection = document.querySelector('#stats-section');
if (statsSection) {
  statsObserver.observe(statsSection);
}
