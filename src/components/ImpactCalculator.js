export function createImpactCalculator() {
  const section = document.createElement('section');
  section.className = 'section-padding calculator-section';
  section.id = 'calculator-section';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          See the impact of <br/>
          <span class="text-gradient-cyan">faster, automated KYC.</span>
        </h2>
        <p class="section-subtitle">
          Estimate the operational hours recovered, turnaround speed acceleration, and compliance processing savings when switching from fragmented verification to VerifiCore.
        </p>
      </div>

      <div class="calculator-card">
        <div class="calculator-layout">
          <!-- Left Column: Interactive Range Sliders -->
          <div class="calculator-inputs">
            <!-- Slider 1: Monthly Onboarding Volume -->
            <div class="input-group">
              <div class="input-label-row">
                <span>Monthly Onboarding Volume</span>
                <span class="input-val-display" id="val-volume">25,000 applicants</span>
              </div>
              <input type="range" class="custom-range" id="input-volume" min="5000" max="250000" step="5000" value="25000" />
            </div>

            <!-- Slider 2: Current Verification Time -->
            <div class="input-group">
              <div class="input-label-row">
                <span>Current Verification Time</span>
                <span class="input-val-display" id="val-time">45 minutes</span>
              </div>
              <input type="range" class="custom-range" id="input-time" min="5" max="180" step="5" value="45" />
            </div>

            <!-- Slider 3: Current Manual Processing Rate -->
            <div class="input-group">
              <div class="input-label-row">
                <span>Current Manual Review Rate</span>
                <span class="input-val-display" id="val-manual">60%</span>
              </div>
              <input type="range" class="custom-range" id="input-manual" min="10" max="95" step="5" value="60" />
            </div>
          </div>

          <!-- Right Column: Computed Estimates -->
          <div class="calculator-results">
            <div class="result-item">
              <span class="result-label">Operational Hours Saved Monthly</span>
              <div class="result-value highlight" id="res-hours">11,250 hrs</div>
            </div>

            <div class="result-item">
              <span class="result-label">Turnaround Acceleration</span>
              <div class="result-value" id="res-speed">98.5% Faster</div>
            </div>

            <div class="result-item">
              <span class="result-label">Estimated Annual Cost Savings</span>
              <div class="result-value highlight" id="res-savings">$425,000 / yr</div>
            </div>

            <div class="calc-disclaimer">
              * Note: Calculations are illustrative estimates based on benchmark enterprise KYC deployments. Actual savings vary based on jurisdiction, workflows, and manual officer overhead.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Dynamic Calculation Logic
  setTimeout(() => {
    const inVolume = section.querySelector('#input-volume');
    const inTime = section.querySelector('#input-time');
    const inManual = section.querySelector('#input-manual');

    const dispVolume = section.querySelector('#val-volume');
    const dispTime = section.querySelector('#val-time');
    const dispManual = section.querySelector('#val-manual');

    const resHours = section.querySelector('#res-hours');
    const resSpeed = section.querySelector('#res-speed');
    const resSavings = section.querySelector('#res-savings');

    function update() {
      const vol = parseInt(inVolume.value, 10);
      const timeMin = parseInt(inTime.value, 10);
      const manualPct = parseInt(inManual.value, 10) / 100;

      dispVolume.textContent = `${vol.toLocaleString()} applicants`;
      dispTime.textContent = `${timeMin} minutes`;
      dispManual.textContent = `${Math.round(manualPct * 100)}%`;

      // VerifiCore average time is ~0.5 mins (30s)
      const currentHoursTotal = (vol * manualPct * timeMin) / 60;
      const verificoreHoursTotal = (vol * 0.05 * 0.5) / 60; // only 5% exception review @ 30s
      const hoursSaved = Math.max(0, Math.round(currentHoursTotal - verificoreHoursTotal));

      // Acceleration percentage
      const speedUplift = Math.min(99.4, (((timeMin - 0.5) / timeMin) * 100)).toFixed(1);

      // Estimated savings ($8/hr standard backoffice compliance officer rate)
      const annualSavings = Math.round(hoursSaved * 8 * 12);

      resHours.textContent = `${hoursSaved.toLocaleString()} hrs / mo`;
      resSpeed.textContent = `${speedUplift}% Faster`;
      resSavings.textContent = `$${annualSavings.toLocaleString()} / yr`;
    }

    inVolume.addEventListener('input', update);
    inTime.addEventListener('input', update);
    inManual.addEventListener('input', update);

    update();
  }, 0);

  return section;
}
