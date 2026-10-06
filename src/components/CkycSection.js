export function createCkycSection() {
  const section = document.createElement('section');
  section.className = 'section-padding feature-detail-section';
  section.id = 'ckyc-section';

  section.innerHTML = `
    <div class="container">
      <div class="feature-split-section">
        <!-- Left Column: Copy & Value Proposition -->
        <div class="feature-copy-col">
          <h2 class="section-title">
            Central KYC. <br/>
            <span class="text-gradient-cyan">One verified identity. Reusable across the financial ecosystem.</span>
          </h2>

          <p class="section-subtitle">
            Stop forcing existing customers to re-submit physical documents and repeat KYC steps for every new account. VerifiCore interfaces with CERSAI CKYCRR 2.0, enabling seamless cross-institution portability with customer consent.
          </p>

          <ul class="feature-list" role="list">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Unified 14-Digit C-KYC Identifier:</strong> Instant lookup and record ingestion using standardized financial registry keys.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Granular Customer Consent Management:</strong> Fine-grained data sharing approvals with time-bound cryptographic access tokens.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Deduplication Intelligence:</strong> Proprietary phonetic and fuzzy matching detects duplicate records and merged accounts.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Tamper-Evident Audit Trails:</strong> Every record access, consent grant, and institutional pull is logged into an immutable ledger.</span>
            </li>
          </ul>

          <div style="margin-top: 10px;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-toggle-ckyc-flow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                <polyline points="16 6 12 2 8 6"/>
                <line x1="12" y1="2" x2="12" y2="15"/>
              </svg>
              <span>Simulate Ecosystem Share Request</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Visual Architecture Flow -->
        <div class="feature-visual-col">
          <div class="feature-glass-frame" style="max-width: 500px;">
            <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan); margin-bottom:20px; display:flex; justify-content:space-between;">
              <span>C-KYC ECOSYSTEM DISPATCH</span>
              <span>TOKEN: CKYC-7729</span>
            </div>

            <!-- Ecosystem Visual Flow Diagram -->
            <div style="display:flex; flex-direction:column; gap:16px;">
              <!-- 1. Customer Consent Node -->
              <div style="display:flex; align-items:center; gap:14px; background:rgba(10,37,64,0.5); padding:12px 16px; border-radius:10px; border:1px solid var(--border);">
                <div style="width:36px; height:36px; border-radius:8px; background:rgba(0,212,255,0.15); display:flex; align-items:center; justify-content:center; color:var(--cyan);">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div style="flex:1;">
                  <div style="font-size:0.88rem; font-weight:600; color:var(--white);">1. Customer (Rahul Sharma)</div>
                  <div style="font-size:0.75rem; color:var(--muted);">Grants explicit e-consent for cross-entity sharing</div>
                </div>
                <span class="badge-pill" style="margin:0; padding:2px 8px; font-size:0.65rem; background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.4); color:var(--success);">
                  CONSENTED
                </span>
              </div>

              <!-- Connecting Arrow -->
              <div style="text-align:center; color:var(--cyan); font-family:var(--font-mono); font-size:0.8rem;">
                ↓ [Cryptographic Proof]
              </div>

              <!-- 2. VerifiCore Central Core -->
              <div style="display:flex; align-items:center; gap:14px; background:linear-gradient(135deg, rgba(13,58,95,0.8), rgba(6,24,41,0.9)); padding:16px; border-radius:12px; border:1px solid var(--border-cyan); box-shadow:0 0 25px rgba(0,212,255,0.15);">
                <div style="width:40px; height:40px; border-radius:10px; background:rgba(0,212,255,0.2); display:flex; align-items:center; justify-content:center; color:var(--cyan);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div style="flex:1;">
                  <div style="font-size:0.95rem; font-weight:700; color:var(--white);">2. VerifiCore Central Engine</div>
                  <div style="font-size:0.76rem; color:var(--cyan); font-family:var(--font-mono);">C-KYC Master Registry (14-Digit Key Verified)</div>
                </div>
              </div>

              <!-- Connecting Split Arrow -->
              <div style="text-align:center; color:var(--cyan); font-family:var(--font-mono); font-size:0.8rem;">
                ↓ [Zero-Knowledge Distribution]
              </div>

              <!-- 3. Target Authorized Institutions Grid -->
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div id="inst-bank" style="background:rgba(10,37,64,0.4); border:1px solid var(--border); padding:10px; border-radius:8px; font-size:0.78rem;">
                  <div style="color:var(--white); font-weight:600;">Tier-1 Bank</div>
                  <div class="font-mono text-cyan" style="font-size:0.7rem;">Status: Authorized ✓</div>
                </div>
                <div id="inst-fund" style="background:rgba(10,37,64,0.4); border:1px solid var(--border); padding:10px; border-radius:8px; font-size:0.78rem;">
                  <div style="color:var(--white); font-weight:600;">Mutual Fund AMC</div>
                  <div class="font-mono text-cyan" style="font-size:0.7rem;">Status: Authorized ✓</div>
                </div>
                <div id="inst-insure" style="background:rgba(10,37,64,0.4); border:1px solid var(--border); padding:10px; border-radius:8px; font-size:0.78rem;">
                  <div style="color:var(--white); font-weight:600;">Insurance Underwriter</div>
                  <div class="font-mono text-cyan" style="font-size:0.7rem;">Status: Authorized ✓</div>
                </div>
                <div id="inst-broker" style="background:rgba(10,37,64,0.4); border:1px solid var(--border); padding:10px; border-radius:8px; font-size:0.78rem;">
                  <div style="color:var(--white); font-weight:600;">Brokerage Platform</div>
                  <div class="font-mono text-cyan" style="font-size:0.7rem;">Status: Authorized ✓</div>
                </div>
              </div>
            </div>

            <div id="ckyc-toast" style="margin-top:16px; padding:8px 12px; background:rgba(0,212,255,0.08); border-radius:6px; font-family:var(--font-mono); font-size:0.72rem; color:var(--muted); text-align:center;">
              ZERO PHYSICAL RE-SUBMISSIONS REQUIRED
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive simulation
  setTimeout(() => {
    const btn = section.querySelector('#btn-toggle-ckyc-flow');
    const toast = section.querySelector('#ckyc-toast');
    const insts = [
      section.querySelector('#inst-bank'),
      section.querySelector('#inst-fund'),
      section.querySelector('#inst-insure'),
      section.querySelector('#inst-broker')
    ];

    btn?.addEventListener('click', () => {
      toast.textContent = 'DISPATCHING CONSENT VERIFICATION PACKETS...';
      toast.style.color = '#00D4FF';

      insts.forEach(el => {
        if (el) el.style.borderColor = '#00D4FF';
      });

      setTimeout(() => {
        toast.textContent = '✓ 4 INSTITUTIONS SYNCHRONIZED IN 410ms';
        toast.style.color = '#10B981';
      }, 800);
    });
  }, 0);

  return section;
}
