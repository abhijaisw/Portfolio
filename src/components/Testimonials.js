export function createTestimonials() {
  const section = document.createElement('section');
  section.className = 'section-padding testimonials-section';
  section.id = 'testimonials-section';

  const items = [
    {
      quote: "“VerifiCore has transformed the way our risk and compliance teams approach identity verification. Consolidating video D-KYC and Central C-KYC into one API reduced our customer drop-off by over 40%.”",
      name: "[Chief Risk Officer]",
      org: "[Tier-1 Commercial Banking Institution]"
    },
    {
      quote: "“The Offline Mobile KYC capability was the exact breakthrough our field teams needed. We can now onboard agricultural micro-borrowers in deep rural areas with zero connectivity and 100% cryptographic confidence.”",
      name: "[Head of Rural Operations]",
      org: "[Leading Microfinance & NBFC Group]"
    },
    {
      quote: "“Managing periodic Re-KYC used to consume dozens of manual review officers. VerifiCore's automated event-driven triggers turned our multi-week compliance cycle into a continuous, frictionless background loop.”",
      name: "[Director of Digital Compliance]",
      org: "[Global Fintech & Wealth Platform]"
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="badge-pill">
          <span class="pulse-dot"></span>
          <span>Customer Perspectives</span>
        </div>
        <h2 class="section-title">
          Proven across identity-critical <br/>
          <span class="text-gradient-cyan">financial operations.</span>
        </h2>
        <p class="section-subtitle">
          See how risk directors, engineering heads, and compliance officers modernise their KYC pipelines with VerifiCore.
        </p>
      </div>

      <div class="testimonials-grid">
        ${items.map(t => `
          <div class="testimonial-card">
            <div class="quote-text font-serif">
              ${t.quote}
            </div>
            <div class="testimonial-author">
              <div style="width:40px; height:40px; border-radius:50%; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.3); display:flex; align-items:center; justify-content:center; color:var(--cyan); font-family:var(--font-mono); font-weight:700;">
                VC
              </div>
              <div>
                <div class="author-role">${t.name}</div>
                <div class="author-org">${t.org}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  return section;
}
