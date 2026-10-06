export function createTrustBar() {
  const section = document.createElement('section');
  section.className = 'trust-section';
  section.id = 'trust-bar';

  section.innerHTML = `
    <div class="container">
      <div class="trust-label">
        Built for Scheduled Commercial Banks, Tier-1 NBFCs & Regulated Financial Entities
      </div>
      <div class="trust-badges-wrapper" role="list">
        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 2 2 7h20L12 2z"/>
          </svg>
          <span>Scheduled Commercial Banks</span>
        </div>

        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <span>Tier-1 NBFCs & Microfinance</span>
        </div>

        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span>Regulated FinTechs & Neobanks</span>
        </div>

        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>Life & General Insurance</span>
        </div>

        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span>Digital Lending Platforms</span>
        </div>

        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          <span>Wealth & Asset Managers</span>
        </div>

        <div class="trust-badge-pill" role="listitem">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>Housing Finance Companies (HFCs)</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
