export function createArchitecture() {
  const section = document.createElement('section');
  section.className = 'section-padding architecture-section';
  section.id = 'architecture-section';

  const codeSnippets = {
    curl: `curl -X POST https://api.verificore.io/v1/kyc/verify \\
  -H "Authorization: Bearer sec_live_9482701" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customer_id": "CUST_99182",
    "workflow": "D_KYC_BIOMETRIC",
    "biometric_capture": {
      "image_base64": "data:image/jpeg;base64,...",
      "liveness_check": true
    },
    "document_type": "NATIONAL_PASSPORT",
    "require_ckyc_registration": true
  }'`,
    node: `import { VerifiCoreClient } from '@verificore/sdk';

const verificore = new VerifiCoreClient({
  apiKey: process.env.VERIFICORE_API_KEY,
  environment: 'production'
});

const verification = await verificore.kyc.verify({
  customerId: 'CUST_99182',
  workflow: 'D_KYC_BIOMETRIC',
  biometrics: {
    livenessVerification: true,
    faceMatchThreshold: 0.95
  },
  autoCommitToCkyc: true
});

console.log(verification.status); // "VERIFIED"
console.log(verification.ckycRecordId); // "CKYC-IND-2026-9482"`,
    python: `from verificore import VerifiCore

client = VerifiCore(api_key="sec_live_9482701")

response = client.kyc.create_verification(
    customer_id="CUST_99182",
    workflow="D_KYC_BIOMETRIC",
    biometrics={
        "liveness_check": True,
        "anti_spoof_mode": "STRICT"
    },
    document_type="NATIONAL_PASSPORT",
    auto_commit_ckyc=True
)

if response.status == "VERIFIED":
    print(f"Customer Approved. C-KYC Token: {response.ckyc_token}")`
  };

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Connects seamlessly with <br/>
          <span class="text-gradient-cyan">your existing financial stack.</span>
        </h2>
        <p class="section-subtitle">
          Whether you run legacy core banking engines, modern microservices, or distributed mobile field teams, VerifiCore integrates with modern REST, GraphQL, webhooks, and native mobile SDKs.
        </p>
      </div>

      <div class="architecture-container">
        <!-- Visual System Architecture Diagram -->
        <div class="glass-panel" style="padding: 32px;">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan); margin-bottom:20px; display:flex; justify-content:space-between;">
            <span>SYSTEM TOPOLOGY</span>
            <span>REST & GRAPHQL GATEWAY</span>
          </div>

          <!-- Architecture Visual Tree -->
          <div style="text-align:center; margin-bottom:20px;">
            <div style="display:inline-block; padding:12px 28px; background:linear-gradient(135deg, #0A2540, #00D4FF); border-radius:10px; color:var(--white); font-weight:700; font-family:var(--font-mono); font-size:0.95rem; box-shadow:0 0 25px rgba(0,212,255,0.25);">
              VERIFICORE UNIFIED IDENTITY CORE
            </div>
          </div>

          <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; text-align:center; margin-bottom:20px;">
            <div style="padding:8px 4px; background:rgba(10,37,64,0.6); border:1px solid var(--border); border-radius:6px; font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan);">
              D-KYC
            </div>
            <div style="padding:8px 4px; background:rgba(10,37,64,0.6); border:1px solid var(--border); border-radius:6px; font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan);">
              e-KYC
            </div>
            <div style="padding:8px 4px; background:rgba(10,37,64,0.6); border:1px solid var(--border); border-radius:6px; font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan);">
              C-KYC
            </div>
            <div style="padding:8px 4px; background:rgba(10,37,64,0.6); border:1px solid var(--border); border-radius:6px; font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan);">
              Re-KYC
            </div>
            <div style="padding:8px 4px; background:rgba(10,37,64,0.6); border:1px solid var(--border); border-radius:6px; font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan);">
              Offline SDK
            </div>
          </div>

          <div style="border-top:1px dashed var(--border); padding-top:16px; margin-top:16px;">
            <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--muted); margin-bottom:12px;">
              TARGET ENTERPRISE INTEGRATIONS
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <span class="trust-badge-pill" style="padding:6px 14px; font-size:0.78rem;">Core Banking Systems</span>
              <span class="trust-badge-pill" style="padding:6px 14px; font-size:0.78rem;">Enterprise CRM (Salesforce)</span>
              <span class="trust-badge-pill" style="padding:6px 14px; font-size:0.78rem;">Loan Origination (LOS)</span>
              <span class="trust-badge-pill" style="padding:6px 14px; font-size:0.78rem;">Insurance Underwriting</span>
              <span class="trust-badge-pill" style="padding:6px 14px; font-size:0.78rem;">Fintech Neo-Apps</span>
              <span class="trust-badge-pill" style="padding:6px 14px; font-size:0.78rem;">Government Identity Gateways</span>
            </div>
          </div>
        </div>

        <!-- Interactive API Code Explorer with Taste Skill Specular Sheen -->
        <div class="api-code-block">
          <div class="api-tabs-header">
            <div class="code-tabs">
              <button type="button" class="code-tab-btn active" data-lang="curl">cURL</button>
              <button type="button" class="code-tab-btn" data-lang="node">Node.js</button>
              <button type="button" class="code-tab-btn" data-lang="python">Python</button>
            </div>
            <button type="button" class="copy-btn" id="copy-code-btn" aria-label="Copy code to clipboard">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <span>Copy</span>
            </button>
          </div>
          <pre class="code-content-pre"><code id="code-display">${codeSnippets.curl}</code></pre>
        </div>
      </div>
    </div>
  `;

  // Attach tab switching and copy listeners
  setTimeout(() => {
    const tabs = section.querySelectorAll('.code-tab-btn');
    const display = section.querySelector('#code-display');
    const copyBtn = section.querySelector('#copy-code-btn');
    let currentLang = 'curl';

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const lang = tab.getAttribute('data-lang');
        currentLang = lang;
        if (lang && codeSnippets[lang]) {
          display.textContent = codeSnippets[lang];
        }
      });
    });

    copyBtn?.addEventListener('click', () => {
      const code = codeSnippets[currentLang] || '';
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span style="color:#10B981; font-weight:600;">Copied</span>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <span>Copy</span>
          `;
        }, 1800);
      });
    });
  }, 0);

  return section;
}
