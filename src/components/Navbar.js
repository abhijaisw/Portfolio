export function createNavbar() {
  const nav = document.createElement('header');
  nav.className = 'site-nav';
  nav.id = 'site-navbar';

  nav.innerHTML = `
    <div class="container nav-inner">
      <a href="#" class="brand-logo" aria-label="VerifiCore Home">
        <div class="brand-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <span>VerifiCore</span>
      </a>

      <nav aria-label="Primary Navigation">
        <ul class="nav-links">
          <li><a href="#ecosystem" class="nav-link">Platform</a></li>
          <li><a href="#dkyc-section" class="nav-link">Solutions</a></li>
          <li><a href="#journey-section" class="nav-link">How It Works</a></li>
          <li><a href="#security-section" class="nav-link">Security</a></li>
          <li><a href="#architecture-section" class="nav-link">Integrations</a></li>
          <li><a href="#calculator-section" class="nav-link">ROI Impact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <button type="button" class="btn btn-secondary btn-sm" id="nav-login-btn">
          <span>Control Center</span>
        </button>
        <button type="button" class="btn btn-primary btn-sm open-demo-modal" id="nav-demo-btn">
          <span>Request Demo</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7"/>
          </svg>
        </button>
        <button type="button" class="mobile-menu-btn" id="mobile-toggle" aria-label="Open Navigation Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  `;

  // Create mobile drawer outside header and append to document.body
  let drawer = document.getElementById('mobile-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'mobile-nav-drawer';
    drawer.id = 'mobile-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div class="mobile-nav-header">
        <div class="brand-logo">
          <div class="brand-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <span>VerifiCore</span>
        </div>
        <button type="button" class="mobile-menu-btn" id="mobile-close" aria-label="Close Navigation Menu" style="display:block;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <ul class="mobile-nav-links">
        <li><a href="#ecosystem" class="mobile-link">Platform</a></li>
        <li><a href="#dkyc-section" class="mobile-link">Solutions</a></li>
        <li><a href="#journey-section" class="mobile-link">How It Works</a></li>
        <li><a href="#security-section" class="mobile-link">Security</a></li>
        <li><a href="#architecture-section" class="mobile-link">Integrations</a></li>
        <li><a href="#calculator-section" class="mobile-link">ROI Calculator</a></li>
      </ul>
      <div style="margin-top: auto; display: flex; flex-direction: column; gap: 12px;">
        <button type="button" class="btn btn-primary open-demo-modal" style="width: 100%;">Request Demo</button>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  // Scroll listener for backdrop blur
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile drawer logic
  setTimeout(() => {
    const toggle = nav.querySelector('#mobile-toggle');
    const close = drawer?.querySelector('#mobile-close');
    const links = drawer?.querySelectorAll('.mobile-link') || [];
    const drawerDemoBtn = drawer?.querySelector('.open-demo-modal');

    function closeDrawer() {
      drawer?.classList.remove('open');
      drawer?.setAttribute('aria-hidden', 'true');
    }

    toggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer?.classList.add('open');
      drawer?.setAttribute('aria-hidden', 'false');
    });

    close?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });

    links.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    drawerDemoBtn?.addEventListener('click', closeDrawer);

    // Close when clicking outside drawer container
    drawer?.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    // Auto-close if resized to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        closeDrawer();
      }
    });

    const loginBtn = nav.querySelector('#nav-login-btn');
    loginBtn?.addEventListener('click', () => {
      const dash = document.querySelector('#dashboard-section');
      dash?.scrollIntoView({ behavior: 'smooth' });
    });
  }, 0);

  return nav;
}
