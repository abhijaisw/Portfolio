export function createArchitecture() {
  const section = document.createElement('section');
  section.className = 'section-padding architecture-section';
  section.id = 'architecture-section';

  const codeSnippets = {
    curl: `curl -X POST https://api.verificore.io/v1/cersai/ckyc/bulk-search \\
  -H "X-Tenant-Code: kyc_hdfc" \\
  -H "Authorization: Bearer sec_live_9482701" \\
  -H "Content-Type: application/json" \\
  -d '{
    "search_mode": "INDIVIDUAL_COMBINED",
    "identifiers": {
      "pan": "ABCDE1234F",
      "aadhaar_last4": "8921",
      "demographics": {
        "full_name": "Rahul Sharma",
        "dob": "1991-08-14"
      }
    },
    "auto_fvu_prevalidate": true,
    "target_registry": "CERSAI_CKYCRR_2.0"
  }'`,
    node: `import { VerifiCoreClient } from '@verificore/sdk';

const client = new VerifiCoreClient({
  apiKey: process.env.VERIFICORE_API_KEY,
  tenantCode: 'kyc_sbi', // AmbientTenantScope Database Isolation
  environment: 'production'
});

// Execute Sub-Second Aadhaar e-KYC with Real-Time Masking
const ekycResult = await client.uidai.verifyOtp({
  aadhaarNumber: 'XXXX-XXXX-8921',
  otp: '918204',
  consentTimestamp: new Date().toISOString()
});

console.log(ekycResult.status); // "VERIFIED_UIDAI_ACK"
console.log(ekycResult.kinAssigned); // "40029188291034"
console.log(ekycResult.maskedPan); // "ABCXXXXXXF"`,
    python: `from verificore import VerifiCore

client = VerifiCore(
    api_key="sec_live_9482701",
    tenant_code="kyc_icici"
)

# Dispatch 10,000-Record CKYCRR 2.0 Batch with Headless FVU
batch_response = client.cersai.dispatch_bulk_batch(
    batch_file="data/onboarding_q4_mumbai.xlsx",
    fvu_prevalidation=True,
    sftp_auto_dispatch=True,
    maker_id="MKR_MUM_481",
    checker_id="CHK_MUM_019"
)

if batch_response.fvu_status == "PASSED_ZERO_ERRORS":
    print(f"Dispatched via CERSAI SFTP. Receipt Hash: {batch_response.sha256_receipt}")`
  };

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Micro-Frontend & Microservices <br/>
          <span class="text-gradient-cyan">Technology Architecture.</span>
        </h2>
        <p class="section-subtitle">
          Engineered on Angular 21 Native Federation, YARP Gateway, .NET 10 Clean Architecture, headless Java FVU background runners, and multi-tenant PostgreSQL databases.
        </p>
      </div>

      <div class="architecture-container">
        <!-- Visual System Architecture Diagram -->
        <div class="glass-panel" style="padding: 32px;">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan); margin-bottom:20px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">
            <span>MICROSERVICES TOPOLOGY</span>
            <span>ANGULAR 21 + .NET 10 + POSTGRESQL MULTI-TENANT</span>
          </div>

          <!-- Architecture Visual Tree -->
          <div class="topology-stack" style="display:flex; flex-direction:column; gap:16px;">
            <!-- Layer 1: Micro-Frontends -->
            <div style="background:rgba(6,24,41,0.8); border:1px solid var(--border); border-radius:12px; padding:16px;">
              <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan); margin-bottom:8px;">
                MICRO-FRONTEND ECOSYSTEM (ANGULAR 21 + NATIVE FEDERATION + TAILWIND 4)
              </div>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:8px; font-family:var(--font-mono); font-size:0.75rem;">
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">Host Shell :4200</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center; color:var(--cyan);">CKYC Hub :4203</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">D-KYC Portal :4204</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">Re-KYC :4205</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">Admin App :4201</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">Telemetry :4202</div>
              </div>
            </div>

            <!-- Arrow Down -->
            <div style="text-align:center; color:var(--cyan); font-size:0.9rem; font-family:var(--font-mono); margin:-6px 0;">↓ YARP REVERSE PROXY & MULTI-TENANT CONTEXT RESOLUTION (:5000) ↓</div>

            <!-- Layer 2: Core Microservices -->
            <div style="background:rgba(6,24,41,0.8); border:1px solid var(--border-cyan); border-radius:12px; padding:16px;">
              <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan); margin-bottom:8px;">
                CORE MICROSERVICES (.NET 10 / ASP.NET CORE CLEAN ARCHITECTURE)
              </div>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px; font-family:var(--font-mono); font-size:0.75rem;">
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">CKYC Engine :5200</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">UIDAI e-KYC :5801</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">DigiLocker :5300</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">V-CIP Video :5400</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">Re-KYC :5600</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center;">Master Data :5500</div>
                <div style="background:#030d17; border:1px solid var(--border); padding:8px 10px; border-radius:6px; text-align:center; color:var(--cyan);">Orchestration :5800</div>
              </div>
            </div>

            <!-- Layer 3: Async Background Workers & Persistence -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
              <div style="background:rgba(6,24,41,0.8); border:1px solid var(--border); border-radius:12px; padding:16px;">
                <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan); margin-bottom:8px;">
                  ASYNC BACKGROUND WORKERS
                </div>
                <div style="display:flex; flex-direction:column; gap:6px; font-family:var(--font-mono); font-size:0.75rem;">
                  <div style="background:#030d17; padding:6px 10px; border-radius:6px;">● Headless Java FVU Runner</div>
                  <div style="background:#030d17; padding:6px 10px; border-radius:6px;">● CERSAI SFTP Poller & Dispatcher</div>
                  <div style="background:#030d17; padding:6px 10px; border-radius:6px;">● KIN Reconciliation Ingestion</div>
                </div>
              </div>

              <div style="background:rgba(6,24,41,0.8); border:1px solid var(--border); border-radius:12px; padding:16px;">
                <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan); margin-bottom:8px;">
                  ENTERPRISE PERSISTENCE & BUS
                </div>
                <div style="display:flex; flex-direction:column; gap:6px; font-family:var(--font-mono); font-size:0.75rem;">
                  <div style="background:#030d17; padding:6px 10px; border-radius:6px; color:var(--success);">● PostgreSQL (kyc_sbi, kyc_hdfc)</div>
                  <div style="background:#030d17; padding:6px 10px; border-radius:6px;">● Redis Distributed Cache & Rate Limiter</div>
                  <div style="background:#030d17; padding:6px 10px; border-radius:6px;">● RabbitMQ Multi-Tenant Event Bus</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive API Code Explorer -->
        <div class="code-explorer-panel">
          <div class="code-header-bar">
            <div class="lang-pills" role="tablist">
              <button type="button" class="lang-tab active" data-lang="curl" role="tab">cURL</button>
              <button type="button" class="lang-tab" data-lang="node" role="tab">Node.js</button>
              <button type="button" class="lang-tab" data-lang="python" role="tab">Python</button>
            </div>
            <button type="button" class="copy-code-btn" id="copy-code-btn" aria-label="Copy Code snippet">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <span>Copy</span>
            </button>
          </div>

          <pre class="code-body"><code id="code-snippet-display">${codeSnippets.curl}</code></pre>

          <div style="padding: 16px 20px; background: rgba(3, 13, 23, 0.9); border-top: 1px solid var(--border); font-size: 0.78rem; font-family: var(--font-mono); color: var(--muted); display: flex; justify-content: space-between; align-items: center;">
            <span>TENANT CONTEXT: X-Tenant-Code (kyc_sbi / kyc_hdfc)</span>
            <span style="color: var(--cyan);">STRICT DATA ISOLATION ✓</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Code Tab switching and copy handler
  setTimeout(() => {
    const tabs = section.querySelectorAll('.lang-tab');
    const display = section.querySelector('#code-snippet-display');
    const copyBtn = section.querySelector('#copy-code-btn');

    let currentSnippet = codeSnippets.curl;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const lang = tab.getAttribute('data-lang');
        currentSnippet = codeSnippets[lang];
        display.textContent = currentSnippet;
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(currentSnippet);
          const span = copyBtn.querySelector('span');
          span.textContent = 'Copied!';
          copyBtn.style.borderColor = 'var(--cyan)';
          copyBtn.style.color = 'var(--cyan)';
          setTimeout(() => {
            span.textContent = 'Copy';
            copyBtn.style.borderColor = '';
            copyBtn.style.color = '';
          }, 2000);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }, 0);

  return section;
}
