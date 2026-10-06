export function createOfflineKyc() {
  const section = document.createElement('section');
  section.className = 'section-padding feature-detail-section';
  section.id = 'offline-kyc';

  section.innerHTML = `
    <div class="container">
      <div class="feature-split-section">
        <!-- Left Column: Copy & Value Proposition -->
        <div class="feature-copy-col">
          <div class="badge-pill">
            <span class="pulse-dot"></span>
            <span>Flagship Capability • Zero Latency</span>
          </div>

          <h2 class="section-title">
            KYC without connectivity. <br/>
            <span class="text-gradient-cyan">Bring secure identity verification to rural, remote, and low-connectivity environments.</span>
          </h2>

          <p class="section-subtitle">
            Financial inclusion doesn't stop where 4G signals end. VerifiCore equips field banking correspondents and remote agents with a hardware-hardened mobile workflow that captures, validates, and stores biometric identity proofs in disconnected environments.
          </p>

          <ul class="feature-list" role="list">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Hardware Enclave AES-256 Storage:</strong> Customer files, face scans, and document proofs are encrypted on-device with zero plaintext exposure.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Edge-Native OCR & Face Matching:</strong> Lightweight on-device neural models validate identity alignment without server ping.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Automated Delta Syncing:</strong> As soon as the device connects to cellular or Wi-Fi, records sync automatically via cryptographically signed packets.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Anti-Tamper Device Lock:</strong> If a field tablet or phone is lost or stolen, remote killswitches and cryptographic timeouts protect customer privacy.</span>
            </li>
          </ul>

          <div style="margin-top: 10px;">
            <button type="button" class="btn btn-primary btn-sm" id="btn-run-offline-cycle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>Simulate Reconnection & Auto-Sync Cycle</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Signature Visual Terminal & Device -->
        <div class="feature-visual-col">
          <div class="feature-glass-frame" style="max-width: 520px;">
            <!-- Interactive State Switcher -->
            <div class="offline-state-pill-group">
              <button type="button" class="offline-state-btn active" data-state="offline">1. OFFLINE</button>
              <button type="button" class="offline-state-btn" data-state="detected">2. NETWORK AVAILABLE</button>
              <button type="button" class="offline-state-btn" data-state="syncing">3. SYNCING</button>
              <button type="button" class="offline-state-btn" data-state="verified">4. VERIFIED</button>
            </div>

            <!-- Floating Device Screen Mockup with Real Visual -->
            <div style="position:relative; margin-bottom:16px; border-radius:14px; overflow:hidden; border:1px solid var(--border-cyan);">
              <img src="/images/offline-device.jpg" alt="VerifiCore Offline Mobile KYC App" class="feature-media-img" loading="lazy" />
              <div id="device-overlay-badge" style="position:absolute; top:12px; right:12px; background:rgba(245,158,11,0.9); color:#030d17; font-family:var(--font-mono); font-size:0.75rem; font-weight:700; padding:4px 10px; border-radius:6px;">
                ● OFFLINE SECURE
              </div>
            </div>

            <!-- Detailed Screen Specs -->
            <div class="offline-status-screen" id="offline-screen-details">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:6px;">
                <span style="color:var(--muted);">ACTIVE CUSTOMER:</span>
                <span style="color:var(--white); font-weight:600;">Rahul Sharma (ID: VK09871)</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">DOCUMENTS:</span>
                <span style="color:var(--success);">✓ Captured (National ID)</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">LOCAL ENCRYPTION:</span>
                <span style="color:var(--cyan);">AES-256 (Hardware Secure Enclave)</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">CONNECTIVITY STATUS:</span>
                <span id="screen-conn-val" style="color:var(--warning); font-weight:700;">OFFLINE (0 BARS)</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">OFFLINE QUEUE:</span>
                <span id="screen-queue-val" style="color:var(--white);">3 Records Pending Sync</span>
              </div>
              <div style="display:flex; justify-content:space-between; padding-top:6px; border-top:1px dashed rgba(255,255,255,0.15);">
                <span style="color:var(--muted);">SYNC ENGINE:</span>
                <span id="screen-sync-val" style="color:var(--cyan);">Waiting for cellular or Wi-Fi handshake...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive simulation state logic
  setTimeout(() => {
    const stateBtns = section.querySelectorAll('.offline-state-btn');
    const badge = section.querySelector('#device-overlay-badge');
    const connVal = section.querySelector('#screen-conn-val');
    const queueVal = section.querySelector('#screen-queue-val');
    const syncVal = section.querySelector('#screen-sync-val');
    const runCycleBtn = section.querySelector('#btn-run-offline-cycle');

    const states = {
      offline: {
        badgeText: '● OFFLINE SECURE',
        badgeBg: 'rgba(245,158,11,0.9)',
        conn: 'OFFLINE (0 BARS)',
        connColor: 'var(--warning)',
        queue: '3 Records Encrypted in SQLite Enclave',
        sync: 'Waiting for network connection...'
      },
      detected: {
        badgeText: '● 4G DETECTED',
        badgeBg: 'rgba(0,212,255,0.9)',
        conn: 'NETWORK AVAILABLE (4G LTE 98Mbps)',
        connColor: 'var(--cyan)',
        queue: '3 Records Prepared for Cryptographic Handshake',
        sync: 'Initiating mutual TLS 1.3 handshake with central API...'
      },
      syncing: {
        badgeText: '⚡ SYNCING DELTAS',
        badgeBg: 'rgba(0,212,255,0.95)',
        conn: 'CONNECTED & TRANSMITTING',
        connColor: 'var(--cyan)',
        queue: 'Uploading Batch 1/3 (Zero-Knowledge Delta)',
        sync: 'Verifying cryptographic digital hashes with Central Registry...'
      },
      verified: {
        badgeText: '✓ CENTRAL SYNCHRONIZED',
        badgeBg: 'rgba(16,185,129,0.95)',
        conn: 'SYNCHRONIZATION COMPLETE',
        connColor: 'var(--success)',
        queue: '0 Pending Records (All 3 Archived to C-KYC)',
        sync: '✓ Master audit tokens confirmed by central banking registry.'
      }
    };

    function applyState(stKey) {
      stateBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-state') === stKey);
      });
      const data = states[stKey];
      if (data) {
        badge.textContent = data.badgeText;
        badge.style.background = data.badgeBg;
        connVal.textContent = data.conn;
        connVal.style.color = data.connColor;
        queueVal.textContent = data.queue;
        syncVal.textContent = data.sync;
      }
    }

    stateBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-state');
        if (key) applyState(key);
      });
    });

    runCycleBtn?.addEventListener('click', () => {
      applyState('detected');
      setTimeout(() => applyState('syncing'), 1000);
      setTimeout(() => applyState('verified'), 2200);
    });
  }, 0);

  return section;
}
