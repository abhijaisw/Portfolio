export function createComparisonTable() {
  const section = document.createElement('section');
  section.className = 'section-padding comparison-section';
  section.id = 'comparison-section';

  const comparisonRows = [
    {
      dimension: 'Customer Onboarding TAT',
      legacy: '3 to 5 business days per account',
      verificore: 'Under 30 seconds (Instant sub-second registry check)',
      highlight: true
    },
    {
      dimension: 'Cost per Customer Verification',
      legacy: '₹150 – ₹300 (Paperwork, courier, branches, warehousing)',
      verificore: 'Under ₹20 per customer (Up to 85% operational savings)',
      highlight: true
    },
    {
      dimension: 'Batch Processing Scale',
      legacy: 'Manual command-line execution & external FVU JAR tools',
      verificore: 'Automated asynchronous background engine (up to 10,000 records/batch)',
      highlight: false
    },
    {
      dimension: 'CERSAI Error Handling',
      legacy: 'Cryptic error codes (ERR_0842), full-batch rejections 48 hrs later',
      verificore: 'Pre-upload instant diagnostics with plain-language hints and 1-click CSV export',
      highlight: false
    },
    {
      dimension: 'Verification Channels',
      legacy: 'Fragmented across 4-6 vendor portals and manual silos',
      verificore: 'Unified CKYC 2.0, Aadhaar e-KYC, DigiLocker & V-CIP in one API',
      highlight: false
    },
    {
      dimension: 'Institution Onboarding',
      legacy: 'Manual IT database scripts and coordination taking 3–7 days',
      verificore: 'Self-service standardized Excel ingestion (v1.0) in under 2 minutes',
      highlight: false
    },
    {
      dimension: 'Data Privacy & PII Masking',
      legacy: 'Manual photo blacklining and high risk of raw Aadhaar/PAN leaks',
      verificore: 'Automated real-time Aadhaar & PAN masking at UI and API layers',
      highlight: true
    },
    {
      dimension: 'Operational Governance',
      legacy: 'Unofficial email approvals or physical rubber-stamp sign-offs',
      verificore: 'Mandatory in-app 4-eyes Maker-Checker with cryptographic audit receipts',
      highlight: false
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          The Transformation: <br/>
          <span class="text-gradient-cyan">Legacy Banking vs. VerifiCore OS.</span>
        </h2>
        <p class="section-subtitle">
          See the tangible operational shift when replacing fragmented legacy processes with a unified financial identity operating system.
        </p>
      </div>

      <div style="background:var(--navy-light); border:1px solid var(--border); border-radius:var(--radius-xl); overflow:hidden; box-shadow:0 24px 60px rgba(0,0,0,0.45);">
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
            <thead>
              <tr style="background:#030d17; border-bottom:1px solid var(--border); font-family:var(--font-mono); font-size:0.78rem;">
                <th style="padding:18px 24px; color:var(--muted); width:25%;">OPERATIONAL DIMENSION</th>
                <th style="padding:18px 24px; color:#ef4444; width:37%;">BEFORE VERIFICORE (LEGACY BANKING)</th>
                <th style="padding:18px 24px; color:var(--cyan); width:38%;">WITH VERIFICORE (UNIFIED KYC OS)</th>
              </tr>
            </thead>
            <tbody>
              ${comparisonRows.map((r, i) => `
                <tr style="border-bottom:1px solid rgba(255,255,255,0.05); background:${r.highlight ? 'rgba(0,212,255,0.02)' : 'transparent'};">
                  <td style="padding:18px 24px; font-weight:600; color:var(--white); font-size:0.88rem;">
                    ${r.dimension}
                  </td>
                  <td style="padding:18px 24px; color:var(--muted); line-height:1.5;">
                    <span style="color:#ef4444; margin-right:8px; font-weight:700;">✗</span>
                    ${r.legacy}
                  </td>
                  <td style="padding:18px 24px; color:var(--white-dim); font-weight:${r.highlight ? '600' : '400'}; line-height:1.5;">
                    <span style="color:var(--success); margin-right:8px; font-weight:700;">✓</span>
                    ${r.verificore}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="padding:20px 24px; background:#030d17; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">
          <span>COMPLIANCE CERTIFICATION: CERSAI CKYCRR 2.0 & UIDAI COMPLIANT</span>
          <span style="color:var(--cyan);">UP TO 85% ONBOARDING COST RECOVERY</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
