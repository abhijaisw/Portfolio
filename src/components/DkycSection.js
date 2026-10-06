export function createDkycSection() {
  const section = document.createElement('section');
  section.className = 'section-padding feature-detail-section';
  section.id = 'dkyc-section';

  section.innerHTML = `
    <div class="container">
      <div class="feature-split-section">
        <!-- Left Column: Copy & Value Proposition -->
        <div class="feature-copy-col">
          <h2 class="section-title">
            Digital KYC. <br/>
            <span class="text-gradient-cyan">Verify customers remotely without compromising trust.</span>
          </h2>

          <p class="section-subtitle">
            Transform high-friction remote onboarding into a compliant, sub-minute journey. VerifiCore pairs real-time video verification with military-grade computer vision to detect forged physical documents, screen recordings, and AI deepfakes.
          </p>

          <ul class="feature-list" role="list">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Assisted & Automated Video KYC (V-CIP):</strong> Dual recording with geo-tagging and concurrent officer workflows.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>AI Document Analysis:</strong> 50+ forensic checks for microprint, holographic foils, font distortion, and photo substitution.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Sub-Millimeter Facial Matching:</strong> 98.7% match accuracy across varying lighting, angles, and ethnic demographics.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Passive 3D Liveness:</strong> Zero user friction; verifies depth and involuntary eye micro-saccades without awkward head turns.</span>
            </li>
          </ul>

          <div style="margin-top: 10px;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-simulate-dkyc">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Simulate Biometric Verification Run</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Glass Verification Terminal with Image & HUD -->
        <div class="feature-visual-col">
          <div class="feature-glass-frame">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan); font-weight:600; display:flex; align-items:center; gap:8px;">
                <span class="pulse-dot"></span>
                <span>DIGITAL KYC ENGINE</span>
              </div>
              <span id="dkyc-live-badge" class="badge-pill" style="margin:0; padding:2px 10px; font-size:0.7rem; background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.4); color:var(--success);">
                CAMERA STREAM ACTIVE
              </span>
            </div>

            <!-- Media Preview -->
            <div style="position:relative; margin-bottom:20px; overflow:hidden; border-radius:12px;">
              <img src="/images/dkyc-biometric.jpg" alt="Biometric Face Mesh Scanning" class="feature-media-img" loading="lazy" />
              <div style="position:absolute; bottom:12px; left:12px; right:12px; background:rgba(6,24,41,0.85); backdrop-filter:blur(8px); padding:8px 12px; border-radius:6px; display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.72rem;">
                <span style="color:var(--white);">STREAM: 1080p @ 60 FPS</span>
                <span style="color:var(--cyan);">NEURAL MESH: 468 POINTS</span>
              </div>
            </div>

            <!-- Real-time Verification Grid -->
            <div class="dkyc-scanner-panel">
              <div class="dkyc-status-row">
                <span style="color:var(--muted); font-size:0.85rem;">Official Document</span>
                <span id="doc-status" style="color:var(--success); font-weight:600; font-family:var(--font-mono); font-size:0.85rem;">✓ Verified (Passport)</span>
              </div>
              <div class="dkyc-status-row">
                <span style="color:var(--muted); font-size:0.85rem;">Biometric Face Match</span>
                <span id="facematch-status" style="color:var(--cyan); font-weight:600; font-family:var(--font-mono); font-size:0.85rem;">98.7% Confidence</span>
              </div>
              <div class="dkyc-status-row">
                <span style="color:var(--muted); font-size:0.85rem;">Passive 3D Liveness</span>
                <span id="liveness-status" style="color:var(--success); font-weight:600; font-family:var(--font-mono); font-size:0.85rem;">✓ Passed (Natural)</span>
              </div>
              <div class="dkyc-status-row">
                <span style="color:var(--muted); font-size:0.85rem;">Fraud & Alteration Risk</span>
                <span id="risk-status" style="color:var(--white); font-weight:600; font-family:var(--font-mono); font-size:0.85rem;">LOW (Tier-1 Pass)</span>
              </div>
              <div class="dkyc-status-row" style="border-color:var(--border-cyan); background:rgba(0, 212, 255, 0.08);">
                <span style="color:var(--white); font-weight:600; font-size:0.9rem;">Final Decision</span>
                <span id="final-status" style="color:var(--success); font-weight:700; font-family:var(--font-mono); font-size:0.95rem;">● VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive simulation
  setTimeout(() => {
    const simBtn = section.querySelector('#btn-simulate-dkyc');
    const badge = section.querySelector('#dkyc-live-badge');
    const docStatus = section.querySelector('#doc-status');
    const faceMatch = section.querySelector('#facematch-status');
    const liveness = section.querySelector('#liveness-status');
    const finalStatus = section.querySelector('#final-status');

    simBtn?.addEventListener('click', () => {
      badge.textContent = 'ANALYZING BIOMETRIC FRAMES...';
      badge.style.color = '#00D4FF';
      docStatus.textContent = 'SCANNING SECURITY FOIL...';
      faceMatch.textContent = 'EXTRACTING VECTOR...';
      liveness.textContent = 'CHECKING MICRO-SACCADES...';
      finalStatus.textContent = 'PROCESSING...';
      finalStatus.style.color = '#F59E0B';

      setTimeout(() => {
        docStatus.textContent = '✓ Verified (Passport 300DPI)';
        faceMatch.textContent = '99.4% Confidence (High)';
        liveness.textContent = '✓ Passed (Depth Validated)';
        finalStatus.textContent = '● VERIFIED & APPROVED';
        finalStatus.style.color = '#10B981';
        badge.textContent = 'VERIFICATION AUDIT LOGGED';
        badge.style.color = '#10B981';
      }, 1200);
    });
  }, 0);

  return section;
}
