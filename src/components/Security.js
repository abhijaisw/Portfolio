export function createSecurity() {
  const section = document.createElement('section');
  section.className = 'section-padding security-section';
  section.id = 'security-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="badge-pill">
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

      <!-- Asymmetric Bento Grid (Anti-Slop Architecture) -->
      <div class="security-bento-grid">
        <!-- Featured Bento Card: Cryptography Engine (Spans 2 columns) -->
        <div class="security-card bento-card-featured">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
            <div class="security-icon" style="margin-bottom:0;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span class="badge-pill" style="margin:0; padding:3px 10px; font-size:0.7rem;">HSM TIER-4 ARCHITECTURE</span>
          </div>

          <h3 style="font-size:1.35rem; font-weight:600; color:var(--white); margin-bottom:8px;">
            End-to-End Cryptography & Hardware Enclaves
          </h3>
          <p style="color:var(--muted); font-size:0.92rem; max-width:620px; line-height:1.6;">
            All customer documents and biometric payloads are encrypted with AES-256-GCM at rest and TLS 1.3 in transit. Cryptographic keys are isolated inside FIPS 140-2 Level 3 hardware security modules with automated 90-day rotation.
          </p>

          <div class="bento-inner-cipher">
            <div>
              <span style="color:var(--muted);">ACTIVE CIPHER SUITE:</span>
              <span style="color:var(--cyan); margin-left:8px;">ECDHE-RSA-AES256-GCM-SHA384</span>
            </div>
            <div style="color:var(--success); font-weight:600;">
              ✓ HARDWARE ENCLAVE LOCKED
            </div>
          </div>
        </div>

        <!-- Bento Card 2: Biometric Vault -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h4>Zero-Knowledge Biometric Vault</h4>
          <p>
            Facial landmarks and biometric scans are converted into non-reversible mathematical vectors. Raw face captures are never stored in plaintext databases.
          </p>
          <div style="margin-top:14px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
            VECTOR FORMAT: 512-D FLOAT • HASH-ONLY
          </div>
        </div>

        <!-- Bento Card 3: RBAC & IAM -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h4>Granular RBAC & IAM Policies</h4>
          <p>
            Strict least-privilege enterprise access control. Restrict agent visibility down to specific fields, redacting sensitive national identifiers dynamically.
          </p>
        </div>

        <!-- Bento Card 4: Immutable Audit Ledger -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 11 12 14 22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <h4>Immutable Audit Ledger</h4>
          <p>
            Every verification approval, OCR extraction, officer sign-off, and API pull generates a cryptographically signed receipt for audit inspection.
          </p>
        </div>

        <!-- Bento Card 5: Real-Time Fraud & Anomaly Scoring -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <h4>Real-Time Anomaly Scoring</h4>
          <p>
            Continuous behavioral checks detect device fingerprint spoofing, proxy routing, velocity bursts, and known fraud syndicates.
          </p>
        </div>
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
