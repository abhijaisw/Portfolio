export function createRekycSection() {
  const section = document.createElement('section');
  section.className = 'section-padding feature-detail-section';
  section.id = 'rekyc-section';

  const timelineSteps = [
    { title: 'KYC Completed', desc: 'Initial baseline record archived with timestamp', state: 'COMPLETED' },
    { title: 'Customer Monitored', desc: 'Continuous AML, watchlist & address delta screening', state: 'CONTINUOUS' },
    { title: 'Change Detected', desc: 'Trigger event: Periodic 2-yr expiry or profile change', state: 'TRIGGER' },
    { title: 'Smart Notification', desc: 'Omnichannel SMS, WhatsApp & in-app biometric link', state: 'DISPATCH' },
    { title: '1-Click Re-KYC', desc: 'Customer confirms deltas with facial scan in <20s', state: 'ACTION' },
    { title: 'Updated Identity', desc: 'Refreshed credentials synced to C-KYC ledger', state: 'SYNCHRONIZED' }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="feature-split-section reverse">
        <!-- Left Column: Copy & Value Proposition -->
        <div class="feature-copy-col">
          <div class="badge-pill">
            <span class="pulse-dot"></span>
            <span>Re-KYC • Perpetual Compliance</span>
          </div>

          <h2 class="section-title">
            Re-KYC. <br/>
            <span class="text-gradient-cyan">Keep customer information continuously current.</span>
          </h2>

          <p class="section-subtitle">
            Regulatory mandates demand periodic identity re-validation, but manual outreach causes massive churn. VerifiCore automates continuous compliance monitoring, alerting customers only when necessary with frictionless 1-click refreshes.
          </p>

          <ul class="feature-list" role="list">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Risk-Categorized Refresh Schedules:</strong> High-risk profiles reviewed annually; low-risk profiles managed on automated multi-year tracks.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Event-Driven Triggers:</strong> Automatic re-verification fired on address changes, high-value transaction spikes, or director updates.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Frictionless 20-Second Refresh:</strong> Pre-filled existing profiles; applicant only needs to approve diffs and confirm liveness.</span>
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Automated Regulatory Audit Exports:</strong> Instant compliance proofs for central banking and anti-money laundering regulators.</span>
            </li>
          </ul>

          <div style="margin-top: 10px;">
            <button type="button" class="btn btn-secondary btn-sm" id="btn-fire-rekyc-trigger">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 14 14"/>
              </svg>
              <span>Simulate Periodic Trigger Event</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Animated Vertical Timeline -->
        <div class="feature-visual-col">
          <div class="feature-glass-frame" style="max-width: 480px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
              <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--cyan); font-weight:600;">
                RE-KYC AUTOMATION ENGINE
              </span>
              <span id="rekyc-cycle-tag" class="badge-pill" style="margin:0; padding:2px 10px; font-size:0.7rem;">
                CONTINUOUS MONITORING
              </span>
            </div>

            <!-- Interactive Timeline Visual -->
            <div style="display:flex; flex-direction:column; gap:12px; position:relative;" id="rekyc-timeline-list">
              ${timelineSteps.map((step, idx) => `
                <div class="rekyc-step-node" data-index="${idx}" style="display:flex; gap:14px; align-items:flex-start; padding:10px 14px; background:rgba(10,37,64,0.45); border:1px solid var(--border); border-radius:8px; transition:var(--transition-fast);">
                  <div style="width:24px; height:24px; border-radius:50%; background:rgba(0,212,255,0.15); border:1px solid var(--cyan); display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan); font-weight:700; flex-shrink:0;">
                    ${idx + 1}
                  </div>
                  <div style="flex:1;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                      <span style="font-size:0.88rem; font-weight:600; color:var(--white);">${step.title}</span>
                      <span style="font-family:var(--font-mono); font-size:0.68rem; color:var(--muted);">${step.state}</span>
                    </div>
                    <div style="font-size:0.78rem; color:var(--muted); margin-top:2px;">${step.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div id="rekyc-status-banner" style="margin-top:16px; padding:10px 14px; background:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); border-radius:8px; font-family:var(--font-mono); font-size:0.75rem; color:var(--success); text-align:center;">
              ✓ ZERO ACCOUNT FREEZES • 94.2% TIMELY RETENTION RATE
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach interactive trigger simulation
  setTimeout(() => {
    const btn = section.querySelector('#btn-fire-rekyc-trigger');
    const nodes = section.querySelectorAll('.rekyc-step-node');
    const banner = section.querySelector('#rekyc-status-banner');
    const cycleTag = section.querySelector('#rekyc-cycle-tag');

    btn?.addEventListener('click', () => {
      cycleTag.textContent = 'TRIGGER EVENT: ADDRESS UPDATE';
      cycleTag.style.color = '#00D4FF';
      banner.textContent = 'DISPATCHING 1-CLICK SMS / APP REFRESH...';
      banner.style.color = '#00D4FF';

      nodes.forEach((node, idx) => {
        setTimeout(() => {
          node.style.borderColor = '#00D4FF';
          node.style.background = 'rgba(13, 58, 95, 0.7)';
        }, idx * 150);
      });

      setTimeout(() => {
        banner.textContent = '✓ CUSTOMER APPROVED DELTA IN 18 SECONDS • RECORD RENEWED';
        banner.style.color = '#10B981';
        cycleTag.textContent = 'STATUS: RENEWED (2-YR EXTENSION)';
        cycleTag.style.color = '#10B981';
      }, 1200);
    });
  }, 0);

  return section;
}
