export function createSecurity() {
  const section = document.createElement('section');
  section.className = 'section-padding security-section';
  section.id = 'security-section';

  const pillars = [
    {
      title: 'End-to-End Cryptography',
      desc: 'All customer identity documents and biometric matrices are encrypted with AES-256-GCM at rest and TLS 1.3 in transit, protected by dedicated hardware security modules.',
      icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
    },
    {
      title: 'Zero-Knowledge Biometric Vault',
      desc: 'Facial landmarks and biometric scans are converted into irreversible mathematical vectors. Raw biometric images are never stored unencrypted in plain databases.',
      icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
    },
    {
      title: 'Granular RBAC & IAM Policies',
      desc: 'Strict least-privilege enterprise access control. Restrict agent data visibility down to specific fields, redacting sensitive national identifiers automatically.',
      icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
    },
    {
      title: 'Immutable Audit Trails',
      desc: 'Every document upload, officer approval, API pull, and verification decision generates a tamper-evident cryptographic receipt for instant regulatory inspection.',
      icon: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
    },
    {
      title: 'Real-Time Fraud & Anomaly Scoring',
      desc: 'Continuous behavioral analysis checks device fingerprints, IP telemetry, velocity spikes, and known fraud syndicates to prevent synthetic account openings.',
      icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
    },
    {
      title: 'Consent-Governed Data Architecture',
      desc: 'Explicit user consent timestamps and revocable authorization tokens ensure complete customer transparency and full compliance with sovereign privacy frameworks.',
      icon: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="badge-pill">
          <span class="pulse-dot"></span>
          <span>Enterprise Defense-in-Depth</span>
        </div>
        <h2 class="section-title">
          Built for trust. <br/>
          <span class="text-gradient-cyan">Designed for security-conscious financial workflows.</span>
        </h2>
        <p class="section-subtitle">
          Identity verification handles your organization's most sensitive customer data. VerifiCore is architected from the bare metal up to satisfy strict banking secrecy and privacy requirements.
        </p>
      </div>

      <div class="security-grid">
        ${pillars.map(p => `
          <div class="security-card">
            <div class="security-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${p.icon}
              </svg>
            </div>
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
          </div>
        `).join('')}
      </div>

      <!-- Trust Statement Banner -->
      <div style="margin-top:40px; padding:20px; background:rgba(10,37,64,0.45); border:1px solid var(--border); border-radius:14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span style="font-size:0.88rem; color:var(--white-dim);">
            Architected specifically for regulated banking, NBFC, insurance, and lending institutions.
          </span>
        </div>
        <div style="display:flex; gap:12px; font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">
          <span>[HSM Tier-4 Ready]</span>
          <span>[Zero Plaintext Storage]</span>
          <span>[Audit Logging Standard]</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
