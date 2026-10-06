export function createImpactCalculator() {
  const section = document.createElement('section');
  section.className = 'section-padding calculator-section';
  section.id = 'calculator-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          Institutional ROI & <br/>
          <span class="text-gradient-cyan">Cost Reduction Modeling.</span>
        </h2>
        <p class="section-subtitle">
          Compare legacy physical branch onboarding against VerifiCore automated digital verification. Model your institution's net monthly savings, turnaround collapse, and operational efficiency gains.
        </p>
      </div>

      <div class="calculator-card">
        <!-- Top Toolbar with Currency Switcher -->
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:32px; padding-bottom:20px; border-bottom:1px solid var(--border);">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:10px; height:10px; border-radius:50%; background:var(--cyan); box-shadow:0 0 10px var(--cyan);"></div>
            <span style="font-family:var(--font-mono); font-size:0.82rem; color:var(--white-dim); font-weight:600;">
              BANKING UNIT ECONOMICS: ₹180 LEGACY vs. ₹20 VERIFICORE
            </span>
          </div>

          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:0.8rem; color:var(--muted); font-family:var(--font-mono);">CURRENCY:</span>
            <div class="currency-toggle-wrap" style="display:inline-flex; background:rgba(6,24,41,0.8); border:1px solid var(--border); border-radius:30px; padding:3px;">
              <button type="button" class="curr-btn active" data-curr="INR" style="background:var(--cyan); color:#030d17; border:none; padding:4px 14px; border-radius:20px; font-family:var(--font-mono); font-size:0.75rem; font-weight:700; cursor:pointer;">
                ₹ INR
              </button>
              <button type="button" class="curr-btn" data-curr="USD" style="background:transparent; color:var(--muted); border:none; padding:4px 14px; border-radius:20px; font-family:var(--font-mono); font-size:0.75rem; font-weight:700; cursor:pointer;">
                $ USD
              </button>
            </div>
          </div>
        </div>

        <div class="calculator-layout">
          <!-- Left Column: Interactive Range Sliders -->
          <div class="calculator-inputs">
            <!-- Slider 1: Monthly Onboarding Volume -->
            <div class="input-group">
              <div class="input-label-row">
                <span>Monthly Onboarding Volume</span>
                <span class="input-val-display" id="val-volume">25,000 applicants</span>
              </div>
              <input type="range" class="custom-range" id="input-volume" min="5000" max="200000" step="5000" value="25000" />
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.7rem; color:var(--muted); margin-top:4px;">
                <span>5k</span>
                <span>50k</span>
                <span>100k</span>
                <span>200k</span>
              </div>
            </div>

            <!-- Slider 2: Current Physical / Semi-Manual Share -->
            <div class="input-group">
              <div class="input-label-row">
                <span>Current Physical/Manual KYC Ratio</span>
                <span class="input-val-display" id="val-manual">70% physical</span>
              </div>
              <input type="range" class="custom-range" id="input-manual" min="20" max="100" step="5" value="70" />
              <div style="display:flex; justify-content:space-between; font-family:var(--font-mono); font-size:0.7rem; color:var(--muted); margin-top:4px;">
                <span>20% (Mostly Digital)</span>
                <span>50%</span>
                <span>100% (Branch Only)</span>
              </div>
            </div>

            <!-- Unit Economics Breakdown Box -->
            <div style="background:rgba(10,37,64,0.4); border:1px solid var(--border); border-radius:12px; padding:16px 18px; margin-top:20px;">
              <div style="font-size:0.8rem; font-weight:600; color:var(--white); margin-bottom:10px;">
                Unit Economics Comparison
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-family:var(--font-mono); font-size:0.75rem;">
                <div>
                  <span style="color:var(--muted); display:block;">Legacy Physical KYC:</span>
                  <span style="color:#ef4444; font-weight:700; font-size:0.9rem;" id="disp-unit-legacy">₹180 / applicant</span>
                </div>
                <div>
                  <span style="color:var(--muted); display:block;">VerifiCore Automated:</span>
                  <span style="color:var(--success); font-weight:700; font-size:0.9rem;" id="disp-unit-veri">₹20 / applicant</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Computed Estimates -->
          <div class="calculator-results">
            <div class="result-item">
              <span class="result-label">Net Monthly Cost Savings</span>
              <div class="result-value highlight" id="res-savings-month">₹28.00 Lakhs / mo</div>
            </div>

            <div class="result-item">
              <span class="result-label">Projected Annual Savings</span>
              <div class="result-value highlight" style="font-size:clamp(1.6rem, 2.8vw, 2.2rem);" id="res-savings-year">₹3.36 Crore / yr</div>
            </div>

            <div class="result-item">
              <span class="result-label">Onboarding Turnaround Time (TAT)</span>
              <div class="result-value" id="res-speed">3-5 Days → &lt; 30s</div>
            </div>

            <div class="result-item">
              <span class="result-label">Cost Reduction Ratio</span>
              <div class="result-value" style="color:var(--success);" id="res-reduction">88.9% Reduction</div>
            </div>

            <div class="calc-disclaimer">
              * Based on Indian banking benchmarks: Legacy physical costs reflect branch verification, physical paper handling, courier logistics, and physical warehousing. VerifiCore costs reflect automated CKYC, DigiLocker, and Aadhaar e-KYC microservices.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Dynamic Calculation Logic
  setTimeout(() => {
    const inVolume = section.querySelector('#input-volume');
    const inManual = section.querySelector('#input-manual');

    const dispVolume = section.querySelector('#val-volume');
    const dispManual = section.querySelector('#val-manual');
    const dispUnitLegacy = section.querySelector('#disp-unit-legacy');
    const dispUnitVeri = section.querySelector('#disp-unit-veri');

    const resSavingsMonth = section.querySelector('#res-savings-month');
    const resSavingsYear = section.querySelector('#res-savings-year');
    const resSpeed = section.querySelector('#res-speed');
    const resReduction = section.querySelector('#res-reduction');

    const currButtons = section.querySelectorAll('.curr-btn');
    let currentCurrency = 'INR';
    const FX_RATE = 83.5; // INR per USD

    function formatCurrency(amountINR, isMonthly = false) {
      if (currentCurrency === 'INR') {
        if (amountINR >= 10000000) {
          const cr = (amountINR / 10000000).toFixed(2);
          return `₹${cr} Crore${isMonthly ? ' / mo' : ' / yr'}`;
        } else if (amountINR >= 100000) {
          const lk = (amountINR / 100000).toFixed(2);
          return `₹${lk} Lakhs${isMonthly ? ' / mo' : ' / yr'}`;
        } else {
          return `₹${Math.round(amountINR).toLocaleString('en-IN')}${isMonthly ? ' / mo' : ' / yr'}`;
        }
      } else {
        const amountUSD = Math.round(amountINR / FX_RATE);
        return `$${amountUSD.toLocaleString('en-US')}${isMonthly ? ' / mo' : ' / yr'}`;
      }
    }

    function update() {
      const vol = parseInt(inVolume.value, 10);
      const manualPct = parseInt(inManual.value, 10) / 100;

      dispVolume.textContent = `${vol.toLocaleString('en-IN')} applicants`;
      dispManual.textContent = `${Math.round(manualPct * 100)}% physical`;

      // Unit costs in INR
      const legacyUnitCost = 180;
      const verificoreUnitCost = 20;

      if (currentCurrency === 'INR') {
        dispUnitLegacy.textContent = '₹180 / applicant';
        dispUnitVeri.textContent = '₹20 / applicant';
      } else {
        dispUnitLegacy.textContent = '$2.15 / applicant';
        dispUnitVeri.textContent = '$0.24 / applicant';
      }

      // Physical applicants transitioning to digital
      const physicalVol = vol * manualPct;
      const savingsPerTransition = legacyUnitCost - verificoreUnitCost; // ₹160

      const monthlySavingsINR = physicalVol * savingsPerTransition;
      const annualSavingsINR = monthlySavingsINR * 12;

      resSavingsMonth.textContent = formatCurrency(monthlySavingsINR, true);
      resSavingsYear.textContent = formatCurrency(annualSavingsINR, false);
      resReduction.textContent = `${((savingsPerTransition / legacyUnitCost) * 100).toFixed(1)}% Unit Savings`;
      resSpeed.textContent = `3-5 Days → < 30s`;
    }

    currButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        currButtons.forEach(b => {
          b.classList.remove('active');
          b.style.background = 'transparent';
          b.style.color = 'var(--muted)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--cyan)';
        btn.style.color = '#030d17';
        currentCurrency = btn.getAttribute('data-curr');
        update();
      });
    });

    inVolume.addEventListener('input', update);
    inManual.addEventListener('input', update);

    update();
  }, 0);

  return section;
}
