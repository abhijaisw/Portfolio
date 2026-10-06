import confetti from 'canvas-confetti';

export function createDemoModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'demo-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-hidden', 'true');

  modal.innerHTML = `
    <div class="modal-content" id="demo-modal-dialog">
      <button type="button" class="modal-close-btn" id="modal-close" aria-label="Close Dialog">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div id="modal-form-view">
        <div style="margin-bottom: 24px;">
          <div class="badge-pill" style="margin-bottom: 10px;">
            <span class="pulse-dot"></span>
            <span>Enterprise Briefing</span>
          </div>
          <h3 class="font-serif" style="font-size: 1.8rem; color: var(--white); margin-bottom: 6px;">
            Request a VerifiCore Demo
          </h3>
          <p style="font-size: 0.88rem; color: var(--muted);">
            Connect with our identity infrastructure architects to design your custom KYC pipeline.
          </p>
        </div>

        <form id="demo-request-form">
          <div class="form-group">
            <label for="demo-name">Full Name *</label>
            <input type="text" id="demo-name" class="form-input" placeholder="e.g. Vikram Mehta" required />
          </div>

          <div class="form-group">
            <label for="demo-email">Corporate Work Email *</label>
            <input type="email" id="demo-email" class="form-input" placeholder="name@company.com" required />
          </div>

          <div class="form-group">
            <label for="demo-org-type">Organization Type *</label>
            <select id="demo-org-type" class="form-select" required>
              <option value="" disabled selected>Select category</option>
              <option value="bank">Tier-1 Commercial Bank</option>
              <option value="nbfc">NBFC & Microfinance</option>
              <option value="fintech">Fintech & Neobank</option>
              <option value="insurance">Insurance Provider</option>
              <option value="lending">Digital Lending Platform</option>
              <option value="wealth">Wealth & Asset Management</option>
            </select>
          </div>

          <div class="form-group">
            <label>Capabilities of Interest</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 4px;">
              <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--muted); cursor: pointer;">
                <input type="checkbox" name="caps" value="dkyc" checked style="accent-color: var(--cyan);" />
                <span>D-KYC (Video & AI)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--muted); cursor: pointer;">
                <input type="checkbox" name="caps" value="ekyc" checked style="accent-color: var(--cyan);" />
                <span>e-KYC (Govt OTP)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--muted); cursor: pointer;">
                <input type="checkbox" name="caps" value="ckyc" checked style="accent-color: var(--cyan);" />
                <span>C-KYC (Central Registry)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--muted); cursor: pointer;">
                <input type="checkbox" name="caps" value="rekyc" style="accent-color: var(--cyan);" />
                <span>Re-KYC (Continuous)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--muted); cursor: pointer;">
                <input type="checkbox" name="caps" value="offline" checked style="accent-color: var(--cyan);" />
                <span>Offline Mobile KYC</span>
              </label>
            </div>
          </div>

          <div style="margin-top: 24px;">
            <button type="submit" class="btn btn-primary" style="width: 100%;">
              <span>Confirm Demo Booking</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <!-- Success Confirmation View -->
      <div id="modal-success-view" style="display: none; text-align: center; padding: 20px 0;">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px auto; color: var(--success);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h3 class="font-serif" style="font-size: 1.8rem; color: var(--white); margin-bottom: 8px;">
          Demo Priority Confirmed!
        </h3>
        <p style="font-size: 0.9rem; color: var(--muted); margin-bottom: 24px;">
          Our enterprise compliance team has received your inquiry. A calendar invitation and sandbox credentials will be delivered to your email.
        </p>

        <div style="padding: 14px; background: rgba(10, 37, 64, 0.6); border: 1px dashed var(--border-cyan); border-radius: 10px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--cyan); margin-bottom: 24px;">
          TICKET REF: <span id="demo-ticket-id">VC-DEMO-8821</span>
        </div>

        <button type="button" class="btn btn-secondary btn-sm" id="btn-finish-modal" style="width: 100%;">
          Close Window
        </button>
      </div>
    </div>
  `;

  // Attach modal behavior
  setTimeout(() => {
    const closeBtn = modal.querySelector('#modal-close');
    const finishBtn = modal.querySelector('#btn-finish-modal');
    const form = modal.querySelector('#demo-request-form');
    const formView = modal.querySelector('#modal-form-view');
    const successView = modal.querySelector('#modal-success-view');
    const ticketIdEl = modal.querySelector('#demo-ticket-id');

    function openModal() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      formView.style.display = 'block';
      successView.style.display = 'none';
      form?.reset();
    }

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }

    closeBtn?.addEventListener('click', closeModal);
    finishBtn?.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Global hook for all .open-demo-modal buttons
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.open-demo-modal');
      if (target) {
        e.preventDefault();
        openModal();
      }
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const randomTicket = 'VC-DEMO-' + Math.floor(1000 + Math.random() * 9000);
      if (ticketIdEl) ticketIdEl.textContent = randomTicket;

      formView.style.display = 'none';
      successView.style.display = 'block';

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00D4FF', '#10B981', '#33DDFF', '#FFFFFF']
        });
      } catch (err) {
        // graceful ignore
      }
    });
  }, 0);

  return modal;
}
