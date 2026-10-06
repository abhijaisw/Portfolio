export function createKycJourney() {
  const section = document.createElement('section');
  section.className = 'section-padding journey-section';
  section.id = 'journey-section';

  const stages = [
    {
      num: '01',
      title: 'Capture',
      subtitle: 'Omnichannel Ingestion',
      desc: 'Collect customer identity information securely across mobile SDKs, responsive web portals, assisted field apps, and high-volume REST APIs with instant optical framing.',
      statusText: 'DOCUMENTS & METADATA SECURED',
      telemetry: 'LATENCY: 420ms • ENCRYPTION: AES-256 • GEO-FENCE: VERIFIED',
      renderVisual: () => `
        <div style="width:100%; max-width:380px; text-align:center;">
          <div style="border: 2px dashed rgba(0, 212, 255, 0.5); border-radius: 14px; padding: 24px; background: rgba(10, 37, 64, 0.4); margin-bottom: 16px;">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" stroke-width="1.8" style="margin-bottom: 12px;">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            <div style="font-weight:600; color:var(--white); margin-bottom:4px;">Smart Document Auto-Capture</div>
            <div style="font-size:0.8rem; color:var(--muted);">Glare Detection: Passed • Edge Alignment: 100%</div>
          </div>
          <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan);">
            <span>National ID / Passport</span>
            <span>✓ High Res (300 DPI)</span>
          </div>
        </div>
      `
    },
    {
      num: '02',
      title: 'Verify',
      subtitle: 'AI Biometrics & Forensic OCR',
      desc: 'Validate official documents, cross-check anti-tamper security foils, and execute 3D passive liveness analysis to eliminate synthetic identity fraud and deepfakes.',
      statusText: 'BIOMETRICS & FORENSICS VALIDATED',
      telemetry: 'FACE MATCH: 99.4% • LIVENESS: PASS • TAMPER RISK: 0.0%',
      renderVisual: () => `
        <div style="width:100%; max-width:380px;">
          <div style="background: rgba(10, 37, 64, 0.5); border: 1px solid var(--border-cyan); border-radius: 14px; padding: 20px; margin-bottom: 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">FACIAL MESH SCAN</span>
              <span style="color:var(--success); font-family:var(--font-mono); font-size:0.75rem; font-weight:700;">✓ 3D ACTIVE</span>
            </div>
            <div style="height: 6px; width: 100%; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; margin-bottom: 12px;">
              <div style="width: 98.7%; height: 100%; background: linear-gradient(90deg, #00D4FF, #10B981);"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:var(--white-dim);">
              <span>AI Vector Similarity</span>
              <strong style="color:var(--cyan);">98.7% Confidence</strong>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-family:var(--font-mono); font-size:0.72rem;">
            <div style="background:rgba(6,24,41,0.6); padding:8px; border-radius:6px; border:1px solid var(--border);">OCR Parsing: ✓ PASSED</div>
            <div style="background:rgba(6,24,41,0.6); padding:8px; border-radius:6px; border:1px solid var(--border);">Hologram Integrity: ✓ PASS</div>
          </div>
        </div>
      `
    },
    {
      num: '03',
      title: 'Assess',
      subtitle: 'AML & Fraud Scoring Engine',
      desc: 'Screen applicants instantaneously against global sanction lists, Politically Exposed Persons (PEP) registries, watchlists, and behavioral risk matrices.',
      statusText: 'RISK SCORE: 08/100 (TIER-1 LOW RISK)',
      telemetry: 'AML CHECK: CLEAR • PEP: NEGATIVE • SANCTIONS: ZERO MATCH',
      renderVisual: () => `
        <div style="width:100%; max-width:380px; text-align:center;">
          <div style="position:relative; width:130px; height:130px; margin: 0 auto 16px auto; display:flex; align-items:center; justify-content:center;">
            <svg viewBox="0 0 100 100" style="transform: rotate(-90deg); width:100%; height:100%;">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" stroke-width="8" fill="none"/>
              <circle cx="50" cy="50" r="42" stroke="#10B981" stroke-width="8" stroke-dasharray="264" stroke-dashoffset="30" stroke-linecap="round" fill="none"/>
            </svg>
            <div style="position:absolute; text-align:center;">
              <span style="font-family:var(--font-serif); font-size:1.8rem; font-weight:700; color:var(--white);">LOW</span>
              <div style="font-family:var(--font-mono); font-size:0.65rem; color:var(--success);">RISK TIER</div>
            </div>
          </div>
          <div style="background: rgba(10,37,64,0.4); border-radius:8px; padding:10px; font-family:var(--font-mono); font-size:0.75rem; color:var(--white-dim); text-align:left;">
            <div>● Interpol / UN Sanctions: <span style="color:var(--success);">CLEARED</span></div>
            <div>● Adverse Media Flags: <span style="color:var(--success);">0 FOUND</span></div>
          </div>
        </div>
      `
    },
    {
      num: '04',
      title: 'Register',
      subtitle: 'C-KYC Minting & Credentialing',
      desc: 'Mint a cryptographically verifiable central identity token. The master record is archived with verifiable audit trails and prepared for consent-governed ecosystem reusability.',
      statusText: 'CENTRAL RECORD COMMITTED TO C-KYC',
      telemetry: 'LEDGER BLOCK: #894,102 • AUDIT HASH: 0x981C...F4 • STATUS: ACTIVE',
      renderVisual: () => `
        <div style="width:100%; max-width:380px;">
          <div style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(10, 37, 64, 0.8)); border: 1px solid var(--border-cyan); border-radius: 12px; padding: 20px; margin-bottom: 12px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-family:var(--font-mono); font-size:0.72rem; color:var(--cyan);">
              <span>MASTER C-KYC RECORD</span>
              <span>TOKENIZED</span>
            </div>
            <div style="font-size:1.15rem; font-weight:700; color:var(--white); font-family:var(--font-mono); margin-bottom:8px;">
              CKYC-IND-2026-9482
            </div>
            <div style="font-size:0.8rem; color:var(--muted);">
              Consent Token: <span style="color:var(--white);">sha256:d8a9...771e</span>
            </div>
          </div>
          <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--success); background:rgba(16,185,129,0.1); padding:8px 12px; border-radius:6px; border:1px solid rgba(16,185,129,0.3); text-align:center;">
            ✓ Reusable across Banking, Securities & Insurance
          </div>
        </div>
      `
    },
    {
      num: '05',
      title: 'Monitor',
      subtitle: 'Continuous & Perpetual Compliance',
      desc: 'Automate periodic Re-KYC deadlines, listen for lifecycle events (address change, expired passport, corporate director modifications), and maintain a continuous audit posture.',
      statusText: 'PERPETUAL MONITORING ENGINE ACTIVE',
      telemetry: 'MONITOR CYCLES: 24/7/365 • TRIGGER EVENT: REAL-TIME • SLA: 99.99%',
      renderVisual: () => `
        <div style="width:100%; max-width:380px;">
          <div style="background: rgba(10, 37, 64, 0.5); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 12px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <span style="font-size:0.85rem; font-weight:600; color:var(--white);">Automated Re-KYC Trigger</span>
              <span class="badge-pill" style="margin:0; padding:2px 8px; font-size:0.65rem;">ACTIVE POLLING</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px; font-family:var(--font-mono); font-size:0.72rem;">
              <div style="display:flex; justify-content:space-between; color:var(--muted);">
                <span>Next Scheduled Review:</span>
                <span style="color:var(--white);">12 OCT 2028</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:var(--muted);">
                <span>Risk Anomaly Drift:</span>
                <span style="color:var(--success);">0.00% (STABLE)</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:var(--muted);">
                <span>Smart Outreach:</span>
                <span style="color:var(--cyan);">1-Click Frictionless SMS/App</span>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="badge-pill">
          <span class="pulse-dot"></span>
          <span>End-to-End Lifecycle</span>
        </div>
        <h2 class="section-title">
          From identity capture to <br/>
          <span class="text-gradient-cyan">continuous compliance.</span>
        </h2>
        <p class="section-subtitle">
          Walk through the five interconnected stages that turn raw customer onboarding into a cryptographically secured, perpetual KYC record.
        </p>
      </div>

      <div class="journey-layout">
        <!-- Step Navigation Column -->
        <div class="journey-timeline-nav" id="journey-nav-steps">
          ${stages.map((st, idx) => `
            <div class="journey-step-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" role="button" tabindex="0" aria-label="Step ${st.num}: ${st.title}">
              <div class="step-num">${st.num}</div>
              <div class="step-info">
                <h4>${st.title} — ${st.subtitle}</h4>
                <p>${st.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Sticky Visual Console -->
        <div class="journey-display-console" id="journey-console">
          <div class="console-header">
            <div class="console-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 14 14"/>
              </svg>
              <span id="console-stage-title">STAGE 01 — CAPTURE</span>
            </div>
            <div class="console-stage-badge" id="console-stage-badge">PHASE ACTIVE</div>
          </div>

          <div class="console-body" id="console-visual-content">
            ${stages[0].renderVisual()}
          </div>

          <div class="console-footer-telemetry">
            <div id="console-status-text">${stages[0].statusText}</div>
            <div id="console-telemetry" style="color:var(--cyan);">${stages[0].telemetry}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive step click listeners
  setTimeout(() => {
    const stepBtns = section.querySelectorAll('.journey-step-btn');
    const stageTitle = section.querySelector('#console-stage-title');
    const visualContent = section.querySelector('#console-visual-content');
    const statusText = section.querySelector('#console-status-text');
    const telemetry = section.querySelector('#console-telemetry');

    stepBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        stepBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
        const stage = stages[idx];
        if (stage) {
          stageTitle.textContent = `STAGE ${stage.num} — ${stage.title.toUpperCase()}`;
          visualContent.innerHTML = stage.renderVisual();
          statusText.textContent = stage.statusText;
          telemetry.textContent = stage.telemetry;
        }
      });
    });
  }, 0);

  return section;
}
