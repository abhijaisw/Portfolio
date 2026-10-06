export function createGovernance() {
  const section = document.createElement('section');
  section.className = 'section-padding governance-section';
  section.id = 'governance-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Institutional Governance & <br/>
          <span class="text-gradient-cyan">Operational Accountability.</span>
        </h2>
        <p class="section-subtitle">
          Eliminate human error and rogue dispatches with 4-eyes Maker-Checker segregation, automated pre-upload CERSAI diagnostics, and instant post-import reconciliation audits.
        </p>
      </div>

      <!-- Feature 1: Maker-Checker Visual Split-Screen -->
      <div class="governance-showcase-box" style="background:var(--navy-light); border:1px solid var(--border); border-radius:var(--radius-xl); padding:36px; margin-bottom:48px; box-shadow:0 24px 60px rgba(0,0,0,0.4);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:28px;">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan); letter-spacing:0.08em; text-transform:uppercase;">
              OPERATIONAL DUAL-AUTHORIZATION ENGINE
            </div>
            <h3 style="font-size:1.4rem; font-weight:600; color:var(--white); margin-top:4px;">
              4-Eyes Maker-Checker Governance in Action
            </h3>
          </div>
          <div style="display:flex; gap:8px;">
            <span class="status-pill active font-mono" style="font-size:0.75rem;">REGULATORY MANDATE COMPLIANT</span>
          </div>
        </div>

        <div class="maker-checker-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:28px;">
          <!-- Maker Pane -->
          <div class="role-pane" style="background:rgba(6,24,41,0.7); border:1px solid var(--border); border-radius:var(--radius-lg); padding:24px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:28px; height:28px; border-radius:6px; background:rgba(0,212,255,0.15); color:var(--cyan); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.75rem;">M</div>
                <span style="font-weight:600; font-size:0.95rem; color:var(--white);">Role: Branch Maker</span>
              </div>
              <span class="font-mono text-cyan" style="font-size:0.75rem;">STAGE: BATCH_PREPARED</span>
            </div>

            <div style="font-size:0.85rem; color:var(--muted); margin-bottom:16px; line-height:1.5;">
              Branch officer compiles customer records, uploads supporting identification documents, and executes the local pre-validation diagnostic check.
            </div>

            <!-- Staged Batch Card -->
            <div style="background:#030d17; border:1px solid var(--border); border-radius:8px; padding:16px; font-family:var(--font-mono); font-size:0.78rem;">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">BATCH ID:</span>
                <span style="color:var(--white);">BATCH-2026-MUM-0481</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">RECORDS COUNT:</span>
                <span style="color:var(--cyan);">5,000 Accounts</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--muted);">PRE-VALIDATION:</span>
                <span style="color:var(--success);">0 Errors (Clean)</span>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span style="color:var(--muted);">ASSIGNED CHECKER:</span>
                <span style="color:var(--white);">P. K. Nambiar (Chief Mgr)</span>
              </div>
            </div>

            <div style="margin-top:16px; padding:10px 14px; background:rgba(0,212,255,0.06); border-radius:6px; font-size:0.78rem; color:var(--cyan); display:flex; align-items:center; gap:8px;">
              <span>✓ Staged & Locked for Independent Checker Sign-Off</span>
            </div>
          </div>

          <!-- Checker Pane -->
          <div class="role-pane" id="checker-action-pane" style="background:rgba(6,24,41,0.7); border:1px solid var(--border-cyan); border-radius:var(--radius-lg); padding:24px; position:relative;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
              <div style="display:flex; align-items:center; gap:8px;">
                <div style="width:28px; height:28px; border-radius:6px; background:rgba(16,185,129,0.15); color:var(--success); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.75rem;">C</div>
                <span style="font-weight:600; font-size:0.95rem; color:var(--white);">Role: Branch Checker</span>
              </div>
              <span id="checker-status-badge" class="font-mono" style="font-size:0.75rem; color:#f59e0b;">ACTION_REQUIRED</span>
            </div>

            <div style="font-size:0.85rem; color:var(--muted); margin-bottom:16px; line-height:1.5;">
              Supervising officer reviews pre-validation diagnostics, checks PII masking compliance, and enters mandatory authorization remarks.
            </div>

            <div style="background:#030d17; border:1px solid var(--border); border-radius:8px; padding:16px; font-family:var(--font-mono); font-size:0.78rem; margin-bottom:16px;">
              <div style="color:var(--muted); margin-bottom:6px;">DIAGNOSTIC SUMMARY:</div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; color:var(--white-dim); font-size:0.72rem;">
                <div>● 0 Missing Photos</div>
                <div>● 100% Pincode Aligned</div>
                <div>● 100% Aadhaar Masked</div>
                <div>● 0 PAN Format Errors</div>
              </div>
            </div>

            <div id="checker-interactive-controls">
              <div style="margin-bottom:12px;">
                <label style="display:block; font-size:0.75rem; color:var(--muted); margin-bottom:4px; font-family:var(--font-mono);">
                  AUTHORIZATION REMARKS (MANDATORY):
                </label>
                <input type="text" id="checker-remarks" value="Pre-validation audited. 5,000 records verified for CERSAI dispatch." 
                  style="width:100%; background:rgba(10,37,64,0.6); border:1px solid var(--border); border-radius:6px; padding:8px 12px; color:var(--white); font-family:var(--font-mono); font-size:0.75rem; outline:none;" />
              </div>

              <div style="display:flex; gap:10px;">
                <button type="button" id="btn-authorize-batch" class="btn btn-primary" style="flex:1; padding:10px 16px; font-size:0.82rem; justify-content:center;">
                  <span>Authorize & Dispatch SFTP</span>
                </button>
                <button type="button" id="btn-reject-batch" class="btn btn-secondary" style="padding:10px 16px; font-size:0.82rem; border-color:rgba(239,68,68,0.4); color:#ef4444;">
                  <span>Reject</span>
                </button>
              </div>
            </div>

            <div id="checker-success-feedback" style="display:none; padding:14px; background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.4); border-radius:8px; color:var(--success); font-family:var(--font-mono); font-size:0.78rem;">
              ✓ BATCH AUTHORIZED. SFTP TRANSMISSION IN PROGRESS (KIN INGESTION IN-FLIGHT).
            </div>
          </div>
        </div>
      </div>

      <!-- Feature 2: Post-Import Live Reconciliation Audit Card -->
      <div class="reconciliation-card" style="background:var(--navy-light); border:1px solid var(--border); border-radius:var(--radius-xl); padding:36px; box-shadow:0 24px 60px rgba(0,0,0,0.4);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:24px;">
          <div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan); letter-spacing:0.08em; text-transform:uppercase;">
              INSTITUTION MASTER DATA ENGINE (ADMIN-APP)
            </div>
            <h3 style="font-size:1.4rem; font-weight:600; color:var(--white); margin-top:4px;">
              Post-Import Live Reconciliation Audit
            </h3>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--muted);">EXCEL TEMPLATE: v1.0 STANDARDIZED</span>
            <span class="badge-pill" style="margin:0; padding:4px 10px; font-size:0.7rem; color:var(--success); border-color:rgba(16,185,129,0.4);">
              ● RECONCILED: 100% ACCOUNTED
            </span>
          </div>
        </div>

        <p style="color:var(--muted); font-size:0.92rem; max-width:850px; line-height:1.6; margin-bottom:28px;">
          When onboarding a new bank, subsidiary, or regional zone with 100+ branches and 500+ users, VerifiCore validates hierarchical dependencies across Regions, Branches, and Users before database commit, providing an instant side-by-side reconciliation proof.
        </p>

        <!-- Live Reconciliation Proof Table -->
        <div style="overflow-x:auto;">
          <table style="width:100%; border-collapse:collapse; font-family:var(--font-mono); font-size:0.82rem; text-align:left;">
            <thead>
              <tr style="background:#030d17; color:var(--muted); border-bottom:1px solid var(--border);">
                <th style="padding:12px 16px;">ENTITY CATEGORY</th>
                <th style="padding:12px 16px;">EXCEL RECORDS SUBMITTED</th>
                <th style="padding:12px 16px;">NEW RECORDS INSERTED</th>
                <th style="padding:12px 16px;">EXISTING PRESERVED</th>
                <th style="padding:12px 16px;">UPDATED IN-PLACE</th>
                <th style="padding:12px 16px;">AUDIT STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.06); color:var(--white-dim);">
                <td style="padding:14px 16px; font-weight:600; color:var(--white);">Regional Zones</td>
                <td style="padding:14px 16px;">24</td>
                <td style="padding:14px 16px; color:var(--success);">+20</td>
                <td style="padding:14px 16px; color:var(--cyan);">4</td>
                <td style="padding:14px 16px;">0</td>
                <td style="padding:14px 16px; color:var(--success);">MATCHED ✓</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.06); color:var(--white-dim);">
                <td style="padding:14px 16px; font-weight:600; color:var(--white);">Banking Branches</td>
                <td style="padding:14px 16px;">350</td>
                <td style="padding:14px 16px; color:var(--success);">+310</td>
                <td style="padding:14px 16px; color:var(--cyan);">40</td>
                <td style="padding:14px 16px;">0</td>
                <td style="padding:14px 16px; color:var(--success);">MATCHED ✓</td>
              </tr>
              <tr style="border-bottom:1px solid rgba(255,255,255,0.06); color:var(--white-dim);">
                <td style="padding:14px 16px; font-weight:600; color:var(--white);">Authorized Officers & Makers</td>
                <td style="padding:14px 16px;">2,126</td>
                <td style="padding:14px 16px; color:var(--success);">+1,770</td>
                <td style="padding:14px 16px; color:var(--cyan);">356</td>
                <td style="padding:14px 16px;">0</td>
                <td style="padding:14px 16px; color:var(--success);">MATCHED ✓</td>
              </tr>
              <tr style="background:rgba(0,212,255,0.04); font-weight:700; color:var(--white);">
                <td style="padding:14px 16px; color:var(--cyan);">TOTAL RECONCILED</td>
                <td style="padding:14px 16px;">2,500 Records</td>
                <td style="padding:14px 16px; color:var(--success);">+2,100 Inserted</td>
                <td style="padding:14px 16px; color:var(--cyan);">400 Preserved</td>
                <td style="padding:14px 16px;">0 Discarded</td>
                <td style="padding:14px 16px; color:var(--success);">100% ACCOUNTED</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; font-family:var(--font-mono); font-size:0.75rem; color:var(--muted); padding-top:16px; border-top:1px solid rgba(255,255,255,0.06);">
          <div>
            <span>SHA-256 CHECKSUM ENVELOPE:</span>
            <span style="color:var(--white-dim); margin-left:6px;">a8f9b421c602e4d974b1265893e18a45fe21d4...</span>
          </div>
          <div>
            <span>PROCESSING DURATION:</span>
            <span style="color:var(--cyan); margin-left:6px;">1,240 ms</span>
          </div>
        </div>
      </div>

      <!-- Feature 3: Dynamic KYC Cascade (Intelligent Orchestration) -->
      <div style="margin-top:48px; background:linear-gradient(135deg, rgba(6,24,41,0.9) 0%, rgba(10,37,64,0.7) 100%); border:1px solid var(--border-cyan); border-radius:var(--radius-xl); padding:36px; box-shadow:0 24px 60px rgba(0,0,0,0.5);">
        <div style="margin-bottom:20px;">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan); letter-spacing:0.08em; text-transform:uppercase;">
            INTELLIGENT WORKFLOW ORCHESTRATION (KYC.ORCHESTRATE)
          </div>
          <h3 style="font-size:1.4rem; font-weight:600; color:var(--white); margin-top:4px;">
            Dynamic KYC Fallback Cascade: Zero Applicant Drop-Off
          </h3>
          <p style="color:var(--muted); font-size:0.92rem; max-width:850px; line-height:1.6; margin-top:8px;">
            If any government registry times out or faces transient downtime, VerifiCore automatically cascades down to alternative channels without disrupting the customer's onboarding session.
          </p>
        </div>

        <div class="cascade-flow-steps" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-top:24px;">
          <div class="cascade-step" style="flex:1; min-width:180px; background:#030d17; border:1px solid var(--border); border-radius:10px; padding:16px; text-align:center;">
            <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--muted);">STAGE 1 (INSTANT)</div>
            <div style="font-weight:700; color:var(--white); margin-top:4px; font-size:0.95rem;">CKYC 2.0 Search</div>
            <div style="font-size:0.75rem; color:var(--cyan); margin-top:2px;">14-Digit KIN Registry</div>
          </div>

          <div style="color:var(--cyan); font-weight:700; font-size:1.2rem;">→</div>

          <div class="cascade-step" style="flex:1; min-width:180px; background:#030d17; border:1px solid var(--border); border-radius:10px; padding:16px; text-align:center;">
            <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--muted);">STAGE 2 (CONSENT PULL)</div>
            <div style="font-weight:700; color:var(--white); margin-top:4px; font-size:0.95rem;">DigiLocker Pull</div>
            <div style="font-size:0.75rem; color:var(--cyan); margin-top:2px;">PAN & Aadhaar XML</div>
          </div>

          <div style="color:var(--cyan); font-weight:700; font-size:1.2rem;">→</div>

          <div class="cascade-step" style="flex:1; min-width:180px; background:#030d17; border:1px solid var(--border); border-radius:10px; padding:16px; text-align:center;">
            <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--muted);">STAGE 3 (DIRECT UIDAI)</div>
            <div style="font-weight:700; color:var(--white); margin-top:4px; font-size:0.95rem;">Aadhaar e-KYC</div>
            <div style="font-size:0.75rem; color:var(--cyan); margin-top:2px;">Sub-850ms OTP</div>
          </div>

          <div style="color:var(--cyan); font-weight:700; font-size:1.2rem;">→</div>

          <div class="cascade-step" style="flex:1; min-width:180px; background:#030d17; border:1px solid var(--border); border-radius:10px; padding:16px; text-align:center;">
            <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--muted);">STAGE 4 (ASSISTED)</div>
            <div style="font-weight:700; color:var(--white); margin-top:4px; font-size:0.95rem;">Assisted V-CIP</div>
            <div style="font-size:0.75rem; color:var(--cyan); margin-top:2px;">Live Officer Video</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Interactivity for Maker-Checker
  setTimeout(() => {
    const btnAuth = section.querySelector('#btn-authorize-batch');
    const btnRej = section.querySelector('#btn-reject-batch');
    const controls = section.querySelector('#checker-interactive-controls');
    const feedback = section.querySelector('#checker-success-feedback');
    const badge = section.querySelector('#checker-status-badge');

    if (btnAuth && controls && feedback && badge) {
      btnAuth.addEventListener('click', () => {
        controls.style.display = 'none';
        feedback.style.display = 'block';
        badge.textContent = 'AUTHORIZED_DISPATCHED';
        badge.style.color = 'var(--success)';
      });

      btnRej.addEventListener('click', () => {
        const reason = prompt('Please enter mandatory rejection reason for the Maker:', 'Missing signature verification on line 42');
        if (reason) {
          controls.style.display = 'none';
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(239,68,68,0.12)';
          feedback.style.borderColor = 'rgba(239,68,68,0.4)';
          feedback.style.color = '#ef4444';
          feedback.textContent = `✗ BATCH RETURNED TO MAKER. AUDIT REASON: "${reason}"`;
          badge.textContent = 'REJECTED_AUDITED';
          badge.style.color = '#ef4444';
        }
      });
    }
  }, 0);

  return section;
}
