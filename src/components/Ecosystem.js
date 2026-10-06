export function createEcosystem() {
  const section = document.createElement('section');
  section.className = 'section-padding ecosystem-section';
  section.id = 'ecosystem';

  const capabilities = [
    {
      id: 'dkyc',
      name: 'D-KYC',
      tag: 'Digital Verification',
      desc: 'Remote video onboarding (V-CIP), AI document verification, sub-millimeter facial matching & 3D liveness detection.',
      protocol: 'WEBRTC / AI-VISION-v4',
      throughput: '4,200/min',
      latency: '< 1.4s',
      encryption: 'TLS 1.3 / AES-256',
      samplePayload: `{
  "protocol": "D-KYC",
  "biometric_liveness": "PASS_3D",
  "face_match_confidence": 0.987,
  "tamper_detection": "NEGATIVE",
  "status": "APPROVED"
}`
    },
    {
      id: 'ekyc',
      name: 'e-KYC',
      tag: 'Electronic Verification',
      desc: 'Instant cryptographic OTP verification and automated government registry API handshakes with zero paper friction.',
      protocol: 'REST / HMAC-SHA256',
      throughput: '12,500/min',
      latency: '< 850ms',
      encryption: 'HSM Tier-4 / RSA-4096',
      samplePayload: `{
  "protocol": "e-KYC",
  "gov_registry_ack": true,
  "otp_auth": "CONFIRMED",
  "digital_signature": "VALID",
  "latency_ms": 780
}`
    },
    {
      id: 'ckyc',
      name: 'C-KYC',
      tag: 'Central Registry',
      desc: 'Unified 14-digit C-KYC record storage enabling instant customer portability across banking, insurance, and asset management.',
      protocol: 'CER-v2 / GRAPH-INDEX',
      throughput: '8,000/min',
      latency: '< 620ms',
      encryption: 'Zero-Knowledge Cryptographic Hash',
      samplePayload: `{
  "protocol": "C-KYC",
  "registry_id": "CKYC-9948-2041-01",
  "reusable_consent": true,
  "authorized_sharing": ["BANKING", "WEALTH"],
  "audit_trail_id": "0x4FA...99C"
}`
    },
    {
      id: 'rekyc',
      name: 'Re-KYC',
      tag: 'Continuous Updates',
      desc: 'Dynamic risk scoring and perpetual compliance monitoring that triggers frictionless 1-click re-verification on profile events.',
      protocol: 'EVENT-STREAM / KAFKA',
      throughput: '6,400/min',
      latency: 'Continuous Event Loop',
      encryption: 'AES-GCM-256',
      samplePayload: `{
  "protocol": "Re-KYC",
  "trigger_event": "PERIODIC_ANNIVERSARY",
  "risk_score_delta": -2,
  "notification_channel": "OMNICHANNEL_SECURE",
  "compliance_state": "OPTIMAL"
}`
    },
    {
      id: 'offline',
      name: 'Offline Mobile',
      tag: 'Field Verification',
      desc: 'Rugged verification for rural and disconnected field agents with hardware-encrypted local sandbox and automatic delta sync.',
      protocol: 'LOCAL-SQLITE-ENC / SYNC-DELTA',
      throughput: 'Edge Native (Zero Ping)',
      latency: 'Instant Offline Capture',
      encryption: 'Device Hardware Enclave (AES-256)',
      samplePayload: `{
  "protocol": "OFFLINE_MOBILE",
  "connectivity": "OFFLINE_SECURE",
  "enclave_cache_records": 3,
  "sync_state": "WAITING_FOR_NETWORK",
  "hash_digest": "0x98b2c4180..."
}`
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Five KYC capabilities. <br/>
          <span class="text-gradient-cyan">One unified platform.</span>
        </h2>
        <p class="section-subtitle">
          Eliminate siloed compliance tools. VerifiCore consolidates every digital, government, centralized, periodic, and field verification workflow into an enterprise identity engine.
        </p>
      </div>

      <div class="ecosystem-hub-container">
        <!-- Center Core Visual -->
        <div class="hub-center-core" id="ecosystem-core-pulse">
          <div class="core-icon-ring">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h3 id="hub-core-title">VERIFICORE</h3>
          <p id="hub-core-status">IDENTITY ENGINE ACTIVE</p>
        </div>

        <!-- 5 Interactive Satellite Capability Cards -->
        <div class="ecosystem-nodes-grid" id="ecosystem-nodes">
          ${capabilities.map((c, index) => `
            <div class="node-card ${index === 0 ? 'active' : ''}" data-id="${c.id}" tabindex="0" role="button" aria-label="${c.name} ${c.tag}">
              <div class="node-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  ${getNodeIcon(c.id)}
                </svg>
              </div>
              <h4>${c.name}</h4>
              <div class="node-subtitle">${c.tag}</div>
              <p>${c.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- Real-time Capability Inspector Drawer -->
        <div class="ecosystem-inspector" id="node-inspector">
          <div class="inspector-meta">
            <h4 id="inspector-name">${capabilities[0].name}: ${capabilities[0].tag}</h4>
            <p class="inspector-desc" id="inspector-desc">${capabilities[0].desc}</p>
            <div class="inspector-specs">
              <div class="spec-row">
                <span class="spec-key">Protocol Stack:</span>
                <span class="spec-val" id="spec-protocol">${capabilities[0].protocol}</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">Throughput Capacity:</span>
                <span class="spec-val" id="spec-throughput">${capabilities[0].throughput}</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">Verification Latency:</span>
                <span class="spec-val" id="spec-latency">${capabilities[0].latency}</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">Encryption Standard:</span>
                <span class="spec-val" id="spec-encryption">${capabilities[0].encryption}</span>
              </div>
            </div>
          </div>

          <div class="inspector-terminal-wrap">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); margin-bottom:8px; display:flex; justify-content:space-between;">
              <span>REAL-TIME TELEMETRY PACKET</span>
              <span class="text-cyan">LIVE STREAM</span>
            </div>
            <pre class="inspector-terminal" id="inspector-payload"><code>${capabilities[0].samplePayload}</code></pre>
          </div>
        </div>
      </div>
    </div>
  `;

  function getNodeIcon(id) {
    switch (id) {
      case 'dkyc':
        return '<path d="m15 10 5-5m0 0h-5m5 0v5"/><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><circle cx="9" cy="9" r="2"/>';
      case 'ekyc':
        return '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
      case 'ckyc':
        return '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>';
      case 'rekyc':
        return '<path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>';
      case 'offline':
        return '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M1 1l22 22"/>';
      default:
        return '<circle cx="12" cy="12" r="10"/>';
    }
  }

  // Interactive node click logic
  setTimeout(() => {
    const nodes = section.querySelectorAll('.node-card');
    const nameEl = section.querySelector('#inspector-name');
    const descEl = section.querySelector('#inspector-desc');
    const protocolEl = section.querySelector('#spec-protocol');
    const throughputEl = section.querySelector('#spec-throughput');
    const latencyEl = section.querySelector('#spec-latency');
    const encEl = section.querySelector('#spec-encryption');
    const payloadEl = section.querySelector('#inspector-payload');
    const coreTitle = section.querySelector('#hub-core-title');

    nodes.forEach(node => {
      node.addEventListener('click', () => {
        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        const selectedId = node.getAttribute('data-id');
        const cap = capabilities.find(c => c.id === selectedId);
        if (cap) {
          nameEl.textContent = `${cap.name}: ${cap.tag}`;
          descEl.textContent = cap.desc;
          protocolEl.textContent = cap.protocol;
          throughputEl.textContent = cap.throughput;
          latencyEl.textContent = cap.latency;
          encEl.textContent = cap.encryption;
          payloadEl.innerHTML = `<code>${cap.samplePayload}</code>`;
          coreTitle.textContent = `${cap.name} LINKED`;
        }
      });
    });
  }, 0);

  return section;
}
