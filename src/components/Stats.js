export function createStats() {
  const section = document.createElement('section');
  section.className = 'section-padding stats-section';
  section.id = 'stats-section';

  section.innerHTML = `
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-big-num" data-target="99.8" data-suffix="%">99.8%</div>
          <div class="stat-desc">Biometric Accuracy Rate</div>
        </div>

        <div class="stat-item">
          <div class="stat-big-num" data-target="2" data-suffix="M+">2M+</div>
          <div class="stat-desc">Verifications Daily Capacity</div>
        </div>

        <div class="stat-item">
          <div class="stat-big-num" data-target="190" data-suffix="+">190+</div>
          <div class="stat-desc">Jurisdictions Supported</div>
        </div>

        <div class="stat-item">
          <div class="stat-big-num" data-target="30" data-suffix="s">&lt; 30s</div>
          <div class="stat-desc">Average Verification Time</div>
        </div>
      </div>

      <div class="stats-disclaimer">
        * Performance metrics shown represent illustrative benchmark figures and system throughput capacity.
      </div>
    </div>
  `;

  return section;
}
