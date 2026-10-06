export function createEkycSection() {
  const section = document.createElement('section');
  section.className = 'section-padding feature-detail-section';
  section.id = 'ekyc-section';

  section.innerHTML = `
    <div class="container">
      <div class="feature-split-section reverse">
        <!-- Left Column: Copy & Value Proposition -->
        <div class="feature-copy-col">
          <div class="badge-pill">
            <span class="pulse-dot"></span>
            <span>Electronic KYC • Sub-Second</span>
          </div>

          <h2 class="section-title">
            Electronic KYC. <br/>
            <span class="text-gradient-cyan">Fast, digital identity verification when speed matters.</span>
          </h2>

          <p class="section-subtitle">
            When instant onboarding conversion is your priority, VerifiCore executes cryptographically signed, zero-paper electronic verifications directly against authorized government databases in under 850 milliseconds.
          </p>

          <ul class="feature-list" role="list">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Instant OTP & Cryptographic Tokens:</strong> Secure one-time password handshakes delivered through high-availability telecom pipes.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Direct Government Identity Integrations:</strong> Real-time APIs for national identification systems, tax registries, and electoral databases.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>100% Paperless Regulatory Compliance:</strong> Eliminates physical paperwork, in-person agent delays, and back-office scanning queues.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Cryptographic Tamper-Seals:</strong> XML/JSON payloads are signed with HSM private keys ensuring immutable non-repudiation.</span>
            </li>
          </ul>

          <div style="margin-top: 10px;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-simulate-ekyc">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <span>Test Real-Time OTP Handshake</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Instant Verification Terminal -->
        <div class="feature-visual-col">
          <div class="feature-glass-frame" style="max-width: 480px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border);">
              <div style="display:flex; align-items:center; gap:8px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--white); font-weight:600;">E-KYC AUTHENTICATOR</span>
              </div>
              <span id="ekyc-latency-tag" class="font-mono text-cyan" style="font-size:0.75rem;">⚡ LATENCY: 740ms</span>
            </div>

            <!-- Terminal Mockup -->
            <div style="background:#030d17; border:1px solid var(--border); border-radius:12px; padding:20px; margin-bottom:18px;">
              <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--muted); margin-bottom:8px;">
                CUSTOMER IDENTITY IDENTIFIER
              </div>
              <div style="font-family:var(--font-mono); font-size:1.05rem; color:var(--white); letter-spacing:0.1em; margin-bottom:16px;">
                •••• •••• 9014
              </div>

              <!-- OTP Boxes -->
              <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--muted); margin-bottom:8px;">
                ONE-TIME VERIFICATION CODE (SMS/PUSH)
              </div>
              <div style="display:flex; gap:8px; margin-bottom:18px;" id="otp-digit-boxes">
                <div style="flex:1; height:44px; background:rgba(10,37,64,0.6); border:1px solid var(--border-cyan); border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:1.1rem; color:var(--cyan); font-weight:700;">8</div>
                <div style="flex:1; height:44px; background:rgba(10,37,64,0.6); border:1px solid var(--border-cyan); border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:1.1rem; color:var(--cyan); font-weight:700;">4</div>
                <div style="flex:1; height:44px; background:rgba(10,37,64,0.6); border:1px solid var(--border-cyan); border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:1.1rem; color:var(--cyan); font-weight:700;">2</div>
                <div style="flex:1; height:44px; background:rgba(10,37,64,0.6); border:1px solid var(--border-cyan); border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:1.1rem; color:var(--cyan); font-weight:700;">9</div>
                <div style="flex:1; height:44px; background:rgba(10,37,64,0.6); border:1px solid var(--border-cyan); border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:1.1rem; color:var(--cyan); font-weight:700;">1</div>
                <div style="flex:1; height:44px; background:rgba(10,37,64,0.6); border:1px solid var(--border-cyan); border-radius:6px; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:1.1rem; color:var(--cyan); font-weight:700;">7</div>
              </div>

              <!-- Terminal Status Log -->
              <div id="ekyc-log" style="font-family:var(--font-mono); font-size:0.75rem; color:#c4f3ff; line-height:1.6; border-top:1px dashed var(--border); padding-top:12px;">
                <div>[AUTH] Handshake dispatched to Govt Registry Gateway</div>
                <div style="color:var(--success);">[SUCCESS] Cryptographic signature verified by HSM-02</div>
                <div style="color:var(--cyan);">[STATUS] Complete KYC demographics extracted instantly</div>
              </div>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">
              <span>REGISTRY API: v3.4 ACTIVE</span>
              <span style="color:var(--success);">99.99% UPTIME</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive OTP simulation
  setTimeout(() => {
    const btn = section.querySelector('#btn-simulate-ekyc');
    const log = section.querySelector('#ekyc-log');
    const latency = section.querySelector('#ekyc-latency-tag');
    const boxes = section.querySelectorAll('#otp-digit-boxes > div');

    btn?.addEventListener('click', () => {
      latency.textContent = '⚡ CALCULATING...';
      log.innerHTML = '<div>[DISPATCH] Generating new secure challenge token...</div>';
      
      const newDigits = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
      boxes.forEach((box, i) => {
        box.textContent = '•';
      });

      setTimeout(() => {
        boxes.forEach((box, i) => {
          box.textContent = newDigits[i];
        });
        latency.textContent = '⚡ LATENCY: 620ms (FAST)';
        log.innerHTML = `
          <div>[CHALLENGE] Dispatched 6-digit challenge token</div>
          <div style="color:var(--cyan);">[HANDSHAKE] Authenticated in 620ms</div>
          <div style="color:var(--success); font-weight:600;">[APPROVED] Customer identity confirmed paperless</div>
        `;
      }, 700);
    });
  }, 0);

  return section;
}
