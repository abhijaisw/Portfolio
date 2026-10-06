export function createStats() {
  const section = document.createElement('section');
  section.className = 'section-padding stats-section';
  section.id = 'stats-section';

  section.innerHTML = `
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-big-num" data-target="99.7" data-suffix="%">99.7%</div>
          <div class="stat-desc">NIST Passive 3D Liveness & Biometric Precision</div>
        </div>

        <div class="stat-item">
          <div class="stat-big-num" data-target="10000" data-suffix="">10,000</div>
          <div class="stat-desc">Records / Batch Bulk Asynchronous Processing</div>
        </div>

        <div class="stat-item">
          <div class="stat-big-num" data-target="100" data-suffix="%">100%</div>
          <div class="stat-desc">CERSAI CKYCRR 2.0 & UIDAI Regulated Compliance</div>
        </div>

        <div class="stat-item">
          <div class="stat-big-num" data-target="850" data-suffix="ms">&lt; 850ms</div>
          <div class="stat-desc">Sub-Second Central Registry Verification TAT</div>
        </div>
      </div>

      <div class="stats-disclaimer">
        * Performance metrics certified under NIST FRVT passive liveness benchmarks and high-throughput CERSAI SFTP automated dispatch pipelines.
      </div>
    </div>
  `;

  return section;
}
