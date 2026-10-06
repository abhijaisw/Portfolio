export function createFinalCTA() {
  const section = document.createElement('section');
  section.className = 'section-padding final-cta-section';
  section.id = 'final-cta';

  section.innerHTML = `
    <div class="container">
      <div class="cta-box-inner">
        <h2 class="display-title" style="margin-bottom: 20px; max-width: 780px;">
          Ready to deploy the <br/>
          <span class="text-gradient-cyan">Unified KYC Operating System?</span>
        </h2>

        <p class="section-subtitle" style="margin-bottom: 40px; text-align: center;">
          Transform multi-day compliance bottlenecks into a 30-second digital handshake. Automate CERSAI CKYCRR 2.0 submissions, UIDAI Aadhaar e-KYC, and DigiLocker verification in one multi-tenant platform.
        </p>

        <div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-bottom:32px;">
          <button type="button" class="btn btn-primary open-demo-modal" id="cta-bottom-demo">
            <span>Request Enterprise Sandbox</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
          <a href="#architecture-section" class="btn btn-secondary" id="cta-bottom-team">
            <span>Explore API Specs</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
        </div>

        <div style="display:flex; align-items:center; gap:20px; font-family:var(--font-mono); font-size:0.78rem; color:var(--muted); flex-wrap:wrap; justify-content:center;">
          <span>● Instant Sandbox API Credentials</span>
          <span>● CERSAI CKYCRR 2.0 & UIDAI Compliant</span>
          <span>● On-Premise & Multi-Tenant Cloud Architecture</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
