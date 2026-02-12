/**
 * FlowTIQ — Shared Components
 * Injects the navigation bar and footer into every page.
 *
 * Usage:
 *   <body data-page="veiligheid" data-root="../">
 *     <div id="nav"></div>
 *     ...page content...
 *     <div id="footer"></div>
 *     <script src="../js/components.js"></script>
 *   </body>
 *
 *   data-page  : which nav item to highlight ("platform"|"process"|"solutions"|"veiligheid")
 *   data-root  : relative path to site root (e.g. "../" for pages/, "./" for root)
 */

(function () {
  const body = document.body;
  const root = body.dataset.root || './';
  const page = body.dataset.page || '';

  // --------------- Navigation ---------------
  const navLinks = [
    { id: 'platform', label: 'Producten', href: root + 'pages/platform.html' },
    { id: 'veiligheid', label: 'Veiligheid & Privacy', href: root + 'pages/veiligheid.html' },
    { id: 'over-ons', label: 'Over ons', href: root + 'pages/over-ons.html' },
    { id: 'contact', label: 'Contact', href: root + 'pages/contact.html' },
  ];

  function buildNavLinks() {
    return navLinks
      .map((link) => {
        if (link.id === page) {
          return `<a href="${link.href}" class="font-semibold text-teal-600 font-sans cursor-default">${link.label}</a>`;
        }
        return `<a href="${link.href}" class="transition-colors hover:text-blue-800 font-sans">${link.label}</a>`;
      })
      .join('\n');
  }

  const navHTML = `
    <nav class="fixed w-full z-50 glass-panel border-b transition-all duration-300 border-slate-200/60">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <!-- Logo -->
          <a href="${root}index.html" class="flex items-center gap-2 group cursor-pointer">
            <img src="${root}img/logo_full.png" alt="FlowTIQ Logo" class="h-8 transition-opacity group-hover:opacity-80">
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            ${buildNavLinks()}
          </div>

          <!-- CTA -->
          <div class="flex items-center gap-4">
            <button id="mobile-menu-btn" class="md:hidden text-slate-600 hover:text-blue-950 transition-colors" aria-label="Open menu">
              <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
            </button>
            <a href="${root}pages/contact.html"
               class="hidden md:inline-flex items-center justify-center transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:bg-blue-900 hover:shadow-blue-900/20 text-sm font-medium text-white bg-teal-600 rounded-full px-5 py-2.5">
              Kop koffie drinken?
            </a>
          </div>
        </div>

        <!-- Mobile Menu (hidden by default) -->
        <div id="mobile-menu" class="md:hidden overflow-hidden max-h-0 transition-all duration-300">
          <div class="flex flex-col space-y-4 pb-6 text-sm font-medium text-slate-600">
            ${buildNavLinks()}
            <a href="${root}pages/contact.html"
               class="inline-flex items-center justify-center text-sm font-medium text-white bg-teal-600 rounded-full px-5 py-2.5 mt-2">
              Kop koffie drinken?
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const navEl = document.getElementById('nav');
  if (navEl) navEl.innerHTML = navHTML;

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px') {
        mobileMenu.style.maxHeight = '0px';
      } else {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      }
    });
  }

  // --------------- Footer ---------------
  const footerHTML = `
    <footer id="contact" class="pt-20 pb-10 border-t border-slate-200 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div class="col-span-2 lg:col-span-2">
            <a href="${root}index.html" class="mb-6 block hover:opacity-80 transition-opacity">
              <img src="${root}img/logo_full.png" alt="FlowTIQ Logo" class="h-8">
            </a>
            <p class="text-slate-500 text-sm leading-relaxed max-w-xs mb-6 font-sans">
              Empowering enterprises with intelligent overlays to reduce administrative friction and unlock human potential.
            </p>
            <div class="flex gap-4">
              <a href="#" class="transition-colors text-slate-400 hover:text-blue-800">
                <iconify-icon icon="solar:chat-round-linear" width="20" height="20"></iconify-icon>
              </a>
              <a href="#" class="transition-colors text-slate-400 hover:text-blue-800">
                <iconify-icon icon="solar:letter-linear" width="20" height="20"></iconify-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 class="mb-4 text-sm text-blue-950 font-sans font-semibold">Product</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li><a href="#" class="transition-colors hover:text-blue-800 font-sans">Intelligence Engine</a></li>
              <li><a href="#" class="transition-colors hover:text-blue-800 font-sans">Integrations</a></li>
              <li><a href="${root}pages/veiligheid.html" class="transition-colors hover:text-blue-800 font-sans">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 text-sm text-blue-950 font-sans font-semibold">Company</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li><a href="#" class="transition-colors hover:text-blue-800 font-sans">About</a></li>
              <li><a href="#" class="transition-colors hover:text-blue-800 font-sans">Careers</a></li>
              <li><a href="#" class="transition-colors hover:text-blue-800 font-sans">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 text-sm text-blue-950 font-sans font-semibold">Contact</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li class="flex items-center gap-2 font-sans">
                <iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                hello@flowtiq.com
              </li>
              <li class="flex items-center gap-2 font-sans">
                <iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                06 24 84 3200
              </li>
              <li class="flex items-center gap-3 font-sans">
                <iconify-icon icon="solar:map-point-linear" width="14" class="flex-shrink-0"></iconify-icon>
                Gelderse Rooslaan 210, <br>6841 BE Arnhem
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
          <p class="text-xs text-slate-400 font-sans">&copy; ${new Date().getFullYear()} FlowTIQ. All rights reserved.</p>
          <div class="flex gap-6 text-xs text-slate-400">
            <a href="#" class="hover:text-slate-600 font-sans">Privacy Policy</a>
            <a href="#" class="hover:text-slate-600 font-sans">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = footerHTML;
})();
