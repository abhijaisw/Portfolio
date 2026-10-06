import { initHeroScene } from './HeroScene.js';

export function createHero() {
  const hero = document.createElement('section');
  hero.className = 'hero-section';
  hero.id = 'hero';

  hero.innerHTML = `
    <div class="container">
      <div class="hero-grid">
        <!-- Left Editorial Content -->
        <div class="hero-content">
          <div class="badge-pill">
            <span class="pulse-dot" style="background:#10B981; box-shadow:0 0 8px #10B981;"></span>
            <span>Live Batch Reconciliation: 100% Accounted (0 Mismatches)</span>
          </div>

          <h1 class="hero-title">
            <span class="line-serif">The Unified KYC Operating System</span>
            <span class="line-serif highlight-line">for Regulated Institutions.</span>
          </h1>

          <p class="hero-subtitle">
            Seamlessly bridge Central CKYC 2.0, Aadhaar e-KYC, DigiLocker, and Digital Onboarding in one multi-tenant, audit-ready platform.
          </p>

          <div class="hero-ctas">
            <button type="button" class="btn btn-primary open-demo-modal" id="hero-primary-cta">
              <span>Request Enterprise Sandbox</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
            <a href="#architecture-section" class="btn btn-secondary" id="hero-secondary-cta">
              <span>Explore API Specs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right 3D WebGL & Floating Glass Cards Stage -->
        <div class="hero-visual-stage" id="hero-stage">
          <canvas id="hero-three-canvas" aria-label="Interactive 3D Identity Core WebGL scene"></canvas>

          <div class="hero-cards-orbit">
            <!-- Central Main Glass Identity Card -->
            <div class="glass-identity-card" id="central-identity-card">
              <div class="card-header-bar">
                <div class="card-brand">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span>CERSAI CKYCRR 2.0</span>
                </div>
                <div class="verified-badge">
                  <span class="pulse-dot" style="background:#10B981; box-shadow:0 0 8px #10B981;"></span>
                  <span>KIN VERIFIED</span>
                </div>
              </div>

              <div class="card-user-profile">
                <div class="user-avatar-wrap">
                  <img src="/images/dkyc-biometric.jpg" alt="Biometric Face Match" class="user-avatar" loading="eager" />
                </div>
                <div class="user-details">
                  <h4>Rahul Sharma</h4>
                  <p class="font-mono" style="font-size:0.75rem; color:var(--cyan);">KIN: 4002-9188-291034</p>
                </div>
              </div>

              <div class="card-metrics-grid">
                <div class="metric-box">
                  <div class="metric-label">Aadhaar (UIDAI)</div>
                  <div class="metric-value success">
                    <span class="font-mono" style="font-size:0.75rem;">XXXX-XXXX-8921</span>
                  </div>
                </div>
                <div class="metric-box">
                  <div class="metric-label">PAN Verification</div>
                  <div class="metric-value">
                    <span class="font-mono" style="color: #00D4FF; font-size:0.75rem;">ABCDE1234F ✓</span>
                  </div>
                </div>
                <div class="metric-box">
                  <div class="metric-label">Passive 3D Match</div>
                  <div class="metric-value">
                    <span>99.7% NIST Pass</span>
                  </div>
                </div>
                <div class="metric-box">
                  <div class="metric-label">Audit Envelope</div>
                  <div class="metric-value">
                    <span class="font-mono" style="font-size:0.75rem;">SHA-256 SEALED</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Orbiting Micro Badges -->
            <div class="orbit-card card-dkyc">
              <div class="orbit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <div class="orbit-text">
                <div class="orbit-tag">CERSAI 2.0</div>
                <div class="orbit-val">10k Batch / SFTP</div>
              </div>
            </div>

            <div class="orbit-card card-ekyc">
              <div class="orbit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <div class="orbit-text">
                <div class="orbit-tag">UIDAI E-KYC</div>
                <div class="orbit-val">Sub-850ms OTP</div>
              </div>
            </div>

            <div class="orbit-card card-ckyc">
              <div class="orbit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div class="orbit-text">
                <div class="orbit-tag">4-Eyes Gate</div>
                <div class="orbit-val">Maker-Checker ✓</div>
              </div>
            </div>

            <div class="orbit-card card-rekyc">
              <div class="orbit-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </div>
              <div class="orbit-text">
                <div class="orbit-tag">Re-KYC</div>
                <div class="orbit-val">Continuous Health</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize Three.js Canvas and Card Mouse Tilt
  setTimeout(() => {
    const canvas = hero.querySelector('#hero-three-canvas');
    if (canvas) {
      initHeroScene(canvas);
    }

    // 3D Tilt interaction for card
    const card = hero.querySelector('#central-identity-card');
    const stage = hero.querySelector('#hero-stage');
    if (card && stage) {
      stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotX = -(y / rect.height) * 16;
        const rotY = (x / rect.width) * 16;
        card.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });

      stage.addEventListener('mouseleave', () => {
        card.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      });
    }
  }, 0);

  return hero;
}
