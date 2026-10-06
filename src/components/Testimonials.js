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
              “VerifiCore has transformed the way our risk and compliance teams approach identity verification. Consolidating video D-KYC and Central C-KYC into one unified API reduced our applicant drop-off by over 40% while hardening our AML risk posture.”
            </blockquote>
          </div>

          <div class="testimonial-author" style="border-top-color:rgba(0, 212, 255, 0.25);">
            <div style="width:48px; height:48px; border-radius:50%; background:linear-gradient(135deg, rgba(0,212,255,0.2), rgba(10,37,64,0.9)); border:1px solid var(--cyan); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-weight:700; font-size:1rem;">
              VC
            </div>
            <div>
              <div class="author-role" style="font-size:0.95rem; font-weight:600; color:var(--white);">[Chief Risk Officer]</div>
              <div class="author-org" style="color:var(--muted); font-size:0.85rem;">[Tier-1 Commercial Banking Institution]</div>
            </div>
          </div>
        </div>

        <!-- Companion Secondary Testimonials Stack -->
        <div class="testimonial-side-stack">
          <!-- Card 2 -->
          <div class="testimonial-card">
            <div class="quote-text font-serif">
              “The Offline Mobile KYC capability was the exact breakthrough our field teams needed. We can now onboard agricultural micro-borrowers in deep rural areas with zero connectivity and 100% cryptographic confidence.”
            </div>
            <div class="testimonial-author">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.3); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-size:0.8rem; font-weight:700;">
                MFI
              </div>
              <div>
                <div class="author-role">[Head of Rural Operations]</div>
                <div class="author-org">[Leading Microfinance & NBFC Group]</div>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="testimonial-card">
            <div class="quote-text font-serif">
              “Managing periodic Re-KYC used to consume dozens of manual review officers. VerifiCore's automated event-driven triggers turned our multi-week compliance cycle into a continuous, frictionless background loop.”
            </div>
            <div class="testimonial-author">
              <div style="width:36px; height:36px; border-radius:50%; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.3); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-size:0.8rem; font-weight:700;">
                CMP
              </div>
              <div>
                <div class="author-role">[Director of Digital Compliance]</div>
                <div class="author-org">[Global Fintech & Wealth Platform]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
