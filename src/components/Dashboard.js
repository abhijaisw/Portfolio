export function createDashboard() {
  const section = document.createElement('section');
  section.className = 'section-padding dashboard-section';
  section.id = 'dashboard-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Mission control for <br/>
          <span class="text-gradient-cyan">enterprise compliance operations.</span>
        </h2>
        <p class="section-subtitle">
          Monitor verification funnels, liveness anomaly spikes, queue velocity, and C-KYC ledger health in real-time with zero latency.
        </p>
      </div>

      <div class="dashboard-frame">
        <!-- Top Control Bar -->
        <div class="dashboard-top-row">
          <div class="dash-title-wrap">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2.2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span>VERIFICORE CONTROL CENTER</span>
            </h3>
          </div>
          <div class="dash-live-status">
            <span class="pulse-dot" style="background:#10B981; box-shadow:0 0 8px #10B981;"></span>
            <span>SYSTEM HEALTH: 99.99% • ALL REGISTRIES ONLINE</span>
          </div>
        </div>

        <!-- 5 Key Metric Cards -->
        <div class="dash-metrics-grid">
          <div class="dash-stat-card">
            <div class="dash-stat-label">Today's Verifications</div>
            <div class="dash-stat-num">
              <span id="dash-stat-verifs">2,483</span>
              <span class="change">+14.2%</span>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-label">Success Rate</div>
            <div class="dash-stat-num">
              <span>99.8%</span>
              <span class="change">Optimal</span>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-label">Average Time</div>
            <div class="dash-stat-num">
              <span>28.4s</span>
              <span class="change" style="color:var(--cyan);">-3.2s</span>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-label">Risk Alerts</div>
            <div class="dash-stat-num">
              <span style="color:#F59E0B;">24</span>
              <span style="font-size:0.75rem; color:var(--muted);">L-2 Review</span>
            </div>
          </div>

          <div class="dash-stat-card">
            <div class="dash-stat-label">Pending Re-KYC</div>
            <div class="dash-stat-num">
              <span>1,284</span>
              <span style="font-size:0.75rem; color:var(--cyan);">Auto-Queued</span>
            </div>
          </div>
        </div>

        <!-- Visual Charts & Live Telemetry Stream -->
        <div class="dashboard-visual-grid">
          <!-- Left: Real-Time Throughput Area Chart -->
          <div class="chart-panel">
            <div class="panel-header">
              <span>HOURLY VERIFICATION THROUGHPUT (PAST 24H)</span>
              <span class="text-cyan">PEAK: 420/HR</span>
            </div>
            <div style="height: 190px; width: 100%; position: relative;">
              <svg viewBox="0 0 500 150" style="width: 100%; height: 100%; overflow: visible;">
                <defs>
                  <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#00D4FF" stop-opacity="0.45"/>
                    <stop offset="100%" stop-color="#00D4FF" stop-opacity="0.0"/>
                  </linearGradient>
                </defs>
                <!-- Area Fill -->
                <path d="M 0,130 Q 80,40 160,80 T 320,30 T 420,70 T 500,20 L 500,150 L 0,150 Z" fill="url(#chartGrad)"/>
                <!-- Line Stroke -->
                <path d="M 0,130 Q 80,40 160,80 T 320,30 T 420,70 T 500,20" fill="none" stroke="#00D4FF" stroke-width="3" stroke-linecap="round"/>
                <!-- Glowing Peak Dots -->
                <circle cx="320" cy="30" r="5" fill="#33DDFF" stroke="#0A2540" stroke-width="2"/>
                <circle cx="500" cy="20" r="5" fill="#33DDFF" stroke="#0A2540" stroke-width="2"/>
              </svg>
            </div>
            <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); margin-top: 10px;">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>NOW</span>
            </div>
          </div>

          <!-- Right: Live Activity Event Stream -->
          <div class="activity-panel">
            <div class="panel-header">
              <span>LIVE VERIFICATION FEED</span>
              <span class="pulse-dot" style="background:#00D4FF; box-shadow:0 0 8px #00D4FF;"></span>
            </div>
            <div class="activity-feed-list" id="activity-feed">
              <div class="activity-item">
                <span class="font-mono text-cyan">D-KYC</span>
                <span>Video Liveness Confirmed (Rahul S.)</span>
                <span class="font-mono" style="color:var(--success);">2s ago</span>
              </div>
              <div class="activity-item">
                <span class="font-mono text-cyan">e-KYC</span>
                <span>Govt Aadhaar OTP Authenticated</span>
                <span class="font-mono" style="color:var(--success);">8s ago</span>
              </div>
              <div class="activity-item">
                <span class="font-mono text-cyan">Offline</span>
                <span>Field Sync: 3 Records Archived (Agent #41)</span>
                <span class="font-mono" style="color:var(--success);">14s ago</span>
              </div>
              <div class="activity-item">
                <span class="font-mono text-cyan">C-KYC</span>
                <span>Registry Token Issued (CKYC-IND-9941)</span>
                <span class="font-mono" style="color:var(--success);">21s ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Simulate live feed increment every 4 seconds
  setTimeout(() => {
    const feed = section.querySelector('#activity-feed');
    const verifCounter = section.querySelector('#dash-stat-verifs');
    let count = 2483;

    const sampleEvents = [
      { type: 'D-KYC', text: 'Facial Vector Match 99.6% (Priya M.)' },
      { type: 'Re-KYC', text: 'Periodic Compliance Renewed (Amit K.)' },
      { type: 'C-KYC', text: 'Cross-Bank Consent Granted (HDFC/ICICI)' },
      { type: 'e-KYC', text: 'Govt Registry Response in 610ms' },
      { type: 'Offline', text: 'AES-256 Batch Sync Complete (Agent #82)' }
    ];

    setInterval(() => {
      count++;
      if (verifCounter) verifCounter.textContent = count.toLocaleString();

      if (feed) {
        const randEvent = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
        const newItem = document.createElement('div');
        newItem.className = 'activity-item';
        newItem.innerHTML = `
          <span class="font-mono text-cyan">${randEvent.type}</span>
          <span>${randEvent.text}</span>
          <span class="font-mono" style="color:var(--success);">Just now</span>
        `;
        feed.prepend(newItem);
        if (feed.children.length > 4) {
          feed.removeChild(feed.lastElementChild);
        }
      }
    }, 4500);
  }, 0);

  return section;
}
