export function createTestimonials() {
  const section = document.createElement('section');
  section.className = 'section-padding testimonials-section';
  section.id = 'testimonials-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Proven across identity-critical <br/>
          <span class="text-gradient-cyan">financial operations.</span>
        </h2>
        <p class="section-subtitle">
          See how risk directors, engineering heads, and compliance officers modernise their KYC pipelines with VerifiCore.
        </p>
      </div>

      <!-- Asymmetric Editorial Testimonials Layout (Anti-Slop Architecture) -->
      <div class="testimonials-asymmetric-layout">
        <!-- Lead Featured Editorial Testimonial -->
        <div class="testimonial-featured-card">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:28px;">
              <span class="badge-pill" style="margin:0; padding:3px 12px; font-size:0.72rem; color:var(--cyan); border-color:var(--border-cyan);">
                FEATURED ENTERPRISE DEPLOYMENT
              </span>
              <span class="font-mono text-cyan" style="font-size:0.75rem;">+42% ONBOARDING ACCELERATION</span>
            </div>

            <blockquote class="font-serif" style="font-size:clamp(1.25rem, 2.2vw, 1.7rem); line-height:1.45; color:var(--white); margin-bottom:32px;">
              “VerifiCore has transformed how our risk and compliance teams execute identity verification. Consolidating CERSAI CKYCRR 2.0 bulk processing and Aadhaar e-KYC into one unified engine reduced our applicant drop-off by over 40% while automating full UIDAI PII masking.”
            </blockquote>
          </div>

          <div class="testimonial-author" style="border-top-color:rgba(0, 212, 255, 0.25);">
            <div style="width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg, rgba(0,212,255,0.2), rgba(10,37,64,0.9)); border:1px solid var(--cyan); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-weight:700; font-size:1rem;">
              VP
            </div>
            <div>
              <div class="author-role" style="font-size:0.95rem; font-weight:600; color:var(--white);">Executive Vice President, Risk & Compliance</div>
              <div class="author-org" style="color:var(--muted); font-size:0.85rem;">Leading Private Sector Bank</div>
            </div>
          </div>
        </div>

        <!-- Companion Secondary Testimonials Stack -->
        <div class="testimonial-side-stack">
          <!-- Card 2 -->
          <div class="testimonial-card">
            <div class="quote-text font-serif">
              “The Offline Mobile KYC capability was the exact breakthrough our field teams needed. We onboard agricultural micro-borrowers across rural branches with zero connectivity and complete cryptographic audit certainty upon sync.”
            </div>
            <div class="testimonial-author">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.3); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-size:0.8rem; font-weight:700;">
                NB
              </div>
              <div>
                <div class="author-role">Head of Rural Operations & Microfinance</div>
                <div class="author-org">Tier-1 NBFC & Financial Inclusion Group</div>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="testimonial-card">
            <div class="quote-text font-serif">
              “Managing periodic Re-KYC across millions of accounts used to consume dozens of manual review officers. VerifiCore's risk-calibrated triggers turned our multi-week cycle into a seamless, automated background loop.”
            </div>
            <div class="testimonial-author">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.3); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-size:0.8rem; font-weight:700;">
                CO
              </div>
              <div>
                <div class="author-role">Chief Compliance Officer</div>
                <div class="author-org">Digital Banking & Wealth Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
