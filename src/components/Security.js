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
        <!-- Featured Bento Card: 4-Eyes Maker-Checker Governance (Spans 2 columns) -->
        <div class="security-card bento-card-featured">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
            <div class="security-icon" style="margin-bottom:0;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span class="badge-pill" style="margin:0; padding:3px 10px; font-size:0.7rem; color:var(--cyan); border-color:var(--border-cyan);">
              4-EYES PRINCIPLE GOVERNANCE
            </span>
          </div>

          <h3 style="font-size:1.35rem; font-weight:600; color:var(--white); margin-bottom:8px;">
            Maker-Checker Operational Dual-Authorization
          </h3>
          <p style="color:var(--muted); font-size:0.92rem; max-width:620px; line-height:1.6;">
            Complete operational segregation of duties. Branch Makers stage bulk batches and verify documents, while authorized Checkers review diagnostics and authorize transmission with mandatory written explanations before any payload reaches government registries.
          </p>

          <div class="bento-inner-cipher">
            <div>
              <span style="color:var(--muted);">GOVERNANCE SCOPE:</span>
              <span style="color:var(--cyan); margin-left:8px;">MAKER_CHECKER_DUAL_KEY</span>
            </div>
            <div style="color:var(--success); font-weight:600;">
              ✓ 4-EYES SEGREGATION ENFORCED
            </div>
          </div>
        </div>

        <!-- Bento Card 2: Automated Real-Time PII Masking -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h4>Automated PII Masking</h4>
          <p>
            Dynamic UI and API layer redaction: Aadhaar masked as <code style="color:var(--cyan);">XXXX-XXXX-1234</code>, PAN as <code style="color:var(--cyan);">ABCXXXXXXF</code> in strict compliance with UIDAI circulars and RBI privacy mandates.
          </p>
          <div style="margin-top:14px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
            UIDAI CIRCULAR 2018/14 COMPLIANT
          </div>
        </div>

        <!-- Bento Card 3: Multi-Tenant Database Isolation -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            </svg>
          </div>
          <h4>Strict Multi-Tenant Isolation</h4>
          <p>
            Complete cryptographic data boundaries and isolated database schemas (<code style="color:var(--cyan);">kyc_sbi</code>, <code style="color:var(--cyan);">kyc_hdfc</code>) driven by <code style="color:var(--cyan);">AmbientTenantScope</code>. Zero risk of cross-institutional contamination.
          </p>
          <div style="margin-top:14px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
            SCHEMA-PER-TENANT ARCHITECTURE
          </div>
        </div>

        <!-- Bento Card 4: SHA-256 Checksum Envelopes -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 11 12 14 22 4"/>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <h4>Cryptographic SHA-256 Checksums</h4>
          <p>
            SHA-256 checksums computed on all input spreadsheets, bulk packages, and CERSAI transmission files. Guarantees forensic non-repudiation and duplicate upload prevention.
          </p>
          <div style="margin-top:14px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
            TAMPER-EVIDENT FORENSIC LEDGER
          </div>
        </div>

        <!-- Bento Card 5: Argon2id Password Hashing -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h4>Argon2id High-Entropy Encryption</h4>
          <p>
            Memory-hard Argon2id primary encryption with PBKDF2 compatibility layer. Engineered specifically to defeat modern GPU and ASIC brute-force attacks.
          </p>
          <div style="margin-top:14px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
            GPU/ASIC BRUTE-FORCE RESILIENT
          </div>
        </div>

        <!-- Bento Card 6: Millisecond Regulatory Audit Trails -->
        <div class="security-card">
          <div class="security-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <h4>Granular Regulatory Audit Trails</h4>
          <p>
            Millisecond-accurate event log recording operator ID, step duration, status transitions, and forensic receipt hashes for effortless RBI and internal audit inspections.
          </p>
          <div style="margin-top:14px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
            INSPECTION-READY RBI AUDIT LOGS
          </div>
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
            Architected specifically for regulated Indian banking, NBFC, insurance, and lending institutions.
          </span>
        </div>
        <div style="display:flex; gap:12px; font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); flex-wrap:wrap;">
          <span>CERSAI CKYCRR 2.0 Compliant</span>
          <span>UIDAI Aadhaar Masking Certified</span>
          <span>Argon2id Encrypted</span>
          <span>Zero-Trust Multi-Tenant</span>
        </div>
      </div>
    </div>
  `;

  return section;
}
