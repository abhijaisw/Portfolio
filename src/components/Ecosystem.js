export function createEcosystem() {
  const section = document.createElement('section');
  section.className = 'section-padding ecosystem-section';
  section.id = 'ecosystem';

  const capabilities = [
    {
      id: 'ckyc_bulk',
      name: 'CKYC Bulk 2.0',
      tag: 'CERSAI Central Registry',
      desc: 'High-throughput 10,000 records/batch processing. Guided bulk search builder, headless Java FVU execution, automated SFTP dispatch, and root-cause diagnostics.',
      protocol: 'CERSAI CKYCRR 2.0 / SFTP & FVU',
      throughput: '10,000 Records / Batch',
      latency: '< 620ms API / Async Bulk',
      encryption: 'SHA-256 Checksums / PII Masked',
      samplePayload: `{
  "cersai_version": "CKYCRR_2.0",
  "batch_records": 10000,
  "fvu_validation": "PASSED_0_ERRORS",
  "sftp_channel": "CERSAI_SECURE_SFTP",
  "kin_assigned": 9984,
  "diagnostics": {
    "missing_photos": 0,
    "pincode_mismatches": 0
  },
  "status": "DISPATCH_CONFIRMED"
}`
    },
    {
      id: 'ekyc_uidai',
      name: 'Aadhaar e-KYC',
      tag: 'UIDAI Direct Integration',
      desc: 'Instant OTP e-KYC, biometric verification, and Offline XML ingestion with tamper-proof signature validation and automated demographic parsing.',
      protocol: 'UIDAI AUTH 2.5 / XML-SIG',
      throughput: '15,000 / min',
      latency: '< 850ms Sub-Second',
      encryption: 'UIDAI PKI 2048-bit / Masked PII',
      samplePayload: `{
  "registry": "UIDAI_AADHAAR",
  "otp_handshake": "VERIFIED_SUB_SECOND",
  "demographic_extracted": {
    "name": "Rahul Sharma",
    "dob": "1991-08-14",
    "gender": "M",
    "aadhaar_masked": "XXXX-XXXX-8921"
  },
  "xml_signature": "GENUINE_UIDAI_ROOT",
  "latency_ms": 740
}`
    },
    {
      id: 'digilocker',
      name: 'DigiLocker Gateway',
      tag: 'NeGD / MeitY Credentials',
      desc: 'Consent-driven instant pull of legally verified government credentials: PAN verification record, Driving License, Passport, and Vehicle RC with XML validation.',
      protocol: 'NeGD OAUTH2 / XML-DSIG',
      throughput: '8,500 / min',
      latency: '< 1.1s Direct Pull',
      encryption: 'X.509 Cryptographic Cert',
      samplePayload: `{
  "gateway": "DIGILOCKER_NEGD",
  "user_consent_timestamp": "2026-10-07T01:05:00Z",
  "documents_fetched": [
    "PAN_VERIFICATION_RECORD",
    "DRIVING_LICENSE",
    "AADHAAR_XML"
  ],
  "issuer_signature": "VERIFIED_GOV_ISSUER",
  "tamper_check": "ZERO_ALTERATION"
}`
    },
    {
      id: 'dkyc_vcip',
      name: 'Digital V-CIP',
      tag: 'RBI Video Customer Identification',
      desc: 'Compliant assisted Video KYC (V-CIP) with live officer workbench, automated geo-tagging, anti-deepfake screening, and passive 3D facial liveness.',
      protocol: 'WEBRTC / AI-LIVENESS-3D',
      throughput: '5,000 / min',
      latency: '< 3 mins Total Session',
      encryption: 'TLS 1.3 / AES-256-GCM',
      samplePayload: `{
  "regulation": "RBI_MASTER_DIRECTIONS_VCIP",
  "geo_tagging": {
    "lat": 19.0760,
    "lng": 72.8777,
    "within_india": true
  },
  "passive_liveness_score": 0.997,
  "tamper_detection": "NEGATIVE",
  "vcip_officer_signoff": "APPROVED"
}`
    },
    {
      id: 'rekyc_rem',
      name: 'Re-KYC Remediation',
      tag: 'Perpetual Compliance Engine',
      desc: 'Risk-calibrated periodic refresh automation (High: 2 yr, Medium: 8 yr, Low: 10 yr) with customer SMS/Email self-service portals and dropout recovery workbench.',
      protocol: 'EVENT-DRIVEN / RABBITMQ',
      throughput: '20,000 / hr',
      latency: 'Continuous Lifecycle Loop',
      encryption: 'Argon2id / AES-256-GCM',
      samplePayload: `{
  "rekyc_engine": "PERPETUAL_COMPLIANCE",
  "account_risk_class": "MEDIUM_RISK_8YR",
  "trigger": "CYCLE_SCHEDULED",
  "self_service_link_sent": "SMS_WHATSAPP_EMAIL",
  "customer_action": "NO_CHANGE_IN_KYC_CONFIRMED",
  "remediation_status": "COMPLIANT_ACTIVE"
}`
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Five Core KYC Engines. <br/>
          <span class="text-gradient-cyan">One Unified Operating System.</span>
        </h2>
        <p class="section-subtitle">
          Eliminate fragmented compliance tools. VerifiCore unifies CERSAI CKYC 2.0 bulk processing, UIDAI Aadhaar e-KYC, DigiLocker, RBI Video KYC, and periodic Re-KYC remediation in an enterprise microservices architecture.
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
          <h3 id="hub-core-title">VERIFICORE OS</h3>
          <p id="hub-core-status">ALL ENGINES SYNCHRONIZED</p>
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
                <span class="spec-key">Throughput Scale:</span>
                <span class="spec-val" id="spec-throughput">${capabilities[0].throughput}</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">Verification Latency:</span>
                <span class="spec-val" id="spec-latency">${capabilities[0].latency}</span>
              </div>
              <div class="spec-row">
                <span class="spec-key">Regulatory Security:</span>
                <span class="spec-val" id="spec-encryption">${capabilities[0].encryption}</span>
              </div>
            </div>
          </div>

          <div class="inspector-terminal-wrap">
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); margin-bottom:8px; display:flex; justify-content:space-between;">
              <span>CERSAI / UIDAI TELEMETRY ENVELOPE</span>
              <span class="text-cyan">LIVE PRODUCTION PROTOCOL</span>
            </div>
            <pre class="inspector-terminal" id="inspector-payload"><code>${capabilities[0].samplePayload}</code></pre>
          </div>
        </div>
      </div>
    </div>
  `;

  function getNodeIcon(id) {
    switch (id) {
      case 'ckyc_bulk':
        return '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>';
      case 'ekyc_uidai':
        return '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>';
      case 'digilocker':
        return '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/>';
      case 'dkyc_vcip':
        return '<path d="m15 10 5-5m0 0h-5m5 0v5"/><path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><circle cx="9" cy="9" r="2"/>';
      case 'rekyc_rem':
        return '<path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>';
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
