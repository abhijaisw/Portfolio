export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.id = 'site-footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <!-- Brand Column -->
        <div class="footer-brand">
          <a href="#" class="brand-logo" aria-label="VerifiCore Home">
            <div class="brand-mark" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <span>VerifiCore</span>
          </a>
          <p>One identity. Every KYC journey.</p>
          <p style="font-size:0.8rem; color:var(--muted-dark); margin-top:8px;">
            The unified identity verification infrastructure powering digital, central, periodic, and offline compliance.
          </p>
        </div>

        <!-- Col 1: Platform -->
        <div class="footer-col">
          <h5>Platform</h5>
          <ul>
            <li><a href="#dkyc-section">D-KYC (Digital)</a></li>
            <li><a href="#ekyc-section">e-KYC (Electronic)</a></li>
            <li><a href="#ckyc-section">C-KYC (Central Registry)</a></li>
            <li><a href="#rekyc-section">Re-KYC (Continuous)</a></li>
            <li><a href="#offline-kyc">Offline Mobile KYC</a></li>
          </ul>
        </div>

        <!-- Col 2: Company -->
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="#">About VerifiCore</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & News</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <!-- Col 3: Resources -->
        <div class="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="#architecture-section">API Documentation</a></li>
            <li><a href="#security-section">Security Architecture</a></li>
            <li><a href="#calculator-section">ROI Calculator</a></li>
            <li><a href="#">Developer Sandbox</a></li>
            <li><a href="#">Enterprise Support</a></li>
          </ul>
        </div>

        <!-- Col 4: Legal -->
        <div class="footer-col">
          <h5>Legal & Trust</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Compliance Governance</a></li>
            <li><a href="#">Security Disclosures</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div>
          © ${new Date().getFullYear()} VerifiCore Technologies Inc. All rights reserved. Built for enterprise compliance.
        </div>
        <div class="status-indicator">
          <span class="status-dot"></span>
          <span>All Identity Registries Operational (99.99%)</span>
        </div>
      </div>
    </div>
  `;

  return footer;
}
