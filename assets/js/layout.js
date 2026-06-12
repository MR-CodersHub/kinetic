// Apply saved theme and direction immediately when script loads to prevent flashing and layout shifting
(function() {
  const savedMode = localStorage.getItem('premium-mode') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', savedMode);
  
  const savedDir = localStorage.getItem('doc-direction') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
})();

document.addEventListener('DOMContentLoaded', () => {
  const isPagesDir = window.location.pathname.includes('/pages/');
  const basePath = isPagesDir ? '../' : './';
  const pagesPath = isPagesDir ? './' : 'pages/';

  // --- NAVBAR COMPONENT ---
  const navbarHTML = `
    <header class="relative z-50 w-full border-b border-[var(--structural-line)] bg-[var(--canvas)]/80 backdrop-blur-md px-4 lg:px-12 py-4 flex items-center justify-between transition-all duration-300">
      <div class="flex items-center gap-3">
        <a href="${basePath}index.html" class="font-display font-black tracking-wider sm:tracking-widest text-xs sm:text-sm lg:text-base xl:text-lg uppercase hover:text-[var(--laser-cyan)] transition-colors flex flex-row items-center">
          <img src="${basePath}assets/images/brand-logo.png" class="w-10 sm:w-16 h-auto ltr:-ml-2 rtl:-mr-2 ltr:sm:-ml-4 rtl:sm:-mr-4" alt="Logo">
          KINETIC AUTO GLASS
        </a>
      </div>
      
      <!-- Desktop Nav -->
      <nav class="hidden lg:flex gap-4 xl:gap-8 font-mono text-[10px] xl:text-xs uppercase tracking-wider items-center">
        <a href="${basePath}index.html" class="nav-link text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-all duration-300 relative">Home</a>
        <a href="${pagesPath}home-saas.html" class="nav-link text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-all duration-300 relative">Fleet Services</a>
        <a href="${pagesPath}about.html" class="nav-link text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-all duration-300 relative">About Us</a>
        <a href="${pagesPath}blog.html" class="nav-link text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-all duration-300 relative">Blog</a>
        <a href="${pagesPath}services.html" class="nav-link text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-all duration-300 relative">Services</a>
        <a href="${pagesPath}contact.html" class="nav-link text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-all duration-300 relative">Contact</a>
      </nav>

      <!-- Desktop Right Controls -->
      <div class="hidden lg:flex items-center gap-3 xl:gap-6 font-mono text-xs">
        
        <!-- Theme Toggle -->
        <button id="nav-theme-toggle" class="w-9 h-9 border border-[var(--structural-line)] bg-[var(--surface-solid)] hover:border-[var(--laser-cyan)] text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-colors flex items-center justify-center rounded-none" aria-label="Toggle Theme">
          <svg id="theme-icon-sun" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg id="theme-icon-moon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>

        <!-- RTL Toggle -->
        <button id="nav-rtl-toggle" class="w-9 h-9 border border-[var(--structural-line)] bg-[var(--surface-solid)] hover:border-[var(--laser-cyan)] text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-colors flex items-center justify-center font-mono text-[9px] font-bold rounded-none" aria-label="Toggle Direction">
          RTL
        </button>

        <!-- User Dropdown -->
        <div class="relative group">
          <button class="w-9 h-9 border border-[var(--structural-line)] bg-[var(--surface-solid)] hover:border-[var(--laser-cyan)] text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-colors flex items-center justify-center rounded-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </button>
          <div class="absolute ltr:right-0 rtl:left-0 mt-2 w-48 bg-[var(--surface-solid)] border border-[var(--structural-line)] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform ltr:origin-top-right rtl:origin-top-left translate-y-2 group-hover:translate-y-0">
            <div class="py-2 flex flex-col text-[11px]">
              <a href="${pagesPath}login-register.html" class="px-4 py-2 hover:bg-[var(--surface-raised)] hover:text-[var(--laser-cyan)] transition-colors">Signup/Login</a>
              <a href="${pagesPath}admin-dashboard.html" class="px-4 py-2 hover:bg-[var(--surface-raised)] hover:text-[var(--laser-cyan)] transition-colors">Admin Dashboard</a>
              <a href="${pagesPath}user-dashboard.html" class="px-4 py-2 hover:bg-[var(--surface-raised)] hover:text-[var(--laser-cyan)] transition-colors">User Dashboard</a>
            </div>
          </div>
        </div>

        <a href="${pagesPath}booking.html" class="border border-[var(--laser-amber)] px-3 py-2 text-[10px] xl:text-xs text-[var(--laser-amber)] hover:bg-[var(--laser-amber)] hover:text-[var(--canvas)] transition-all duration-300 rounded-none uppercase shadow-[0_0_10px_rgba(217,119,6,0.15)] hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] whitespace-nowrap">
          Book Mobile Service
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="lg:hidden text-[var(--ink-high)] hover:text-[var(--laser-cyan)] hover:border-[var(--laser-cyan)] transition-colors w-9 h-9 border border-[var(--structural-line)] bg-[var(--surface-solid)] flex items-center justify-center rounded-none">
        <!-- Hamburger Icon -->
        <svg id="hamburger-icon" class="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        <!-- Close (X) Icon -->
        <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </header>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-[var(--canvas)] z-40 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto">
      <div class="p-6 pt-24 space-y-6 flex flex-col font-mono text-sm uppercase tracking-wider">
        <a href="${basePath}index.html" class="text-[var(--ink-high)] border-b border-[var(--structural-line)] pb-4 hover:text-[var(--laser-cyan)] transition-colors">Home</a>
        <a href="${pagesPath}home-saas.html" class="text-[var(--ink-high)] border-b border-[var(--structural-line)] pb-4 hover:text-[var(--laser-cyan)] transition-colors">Fleet Services</a>
        <a href="${pagesPath}about.html" class="text-[var(--ink-high)] border-b border-[var(--structural-line)] pb-4 hover:text-[var(--laser-cyan)] transition-colors">About Us</a>
        <a href="${pagesPath}blog.html" class="text-[var(--ink-high)] border-b border-[var(--structural-line)] pb-4 hover:text-[var(--laser-cyan)] transition-colors">Blog</a>
        <a href="${pagesPath}services.html" class="text-[var(--ink-high)] border-b border-[var(--structural-line)] pb-4 hover:text-[var(--laser-cyan)] transition-colors">Services</a>
        <a href="${pagesPath}contact.html" class="text-[var(--ink-high)] border-b border-[var(--structural-line)] pb-4 hover:text-[var(--laser-cyan)] transition-colors">Contact</a>
        
        <div class="pt-4 space-y-4">
          <a href="${pagesPath}login-register.html" class="block text-[var(--ink-mid)] hover:text-[var(--laser-cyan)]">Signup/Login</a>
          <a href="${pagesPath}admin-dashboard.html" class="block text-[var(--ink-mid)] hover:text-[var(--laser-cyan)]">Admin Dashboard</a>
          <a href="${pagesPath}user-dashboard.html" class="block text-[var(--ink-mid)] hover:text-[var(--laser-cyan)]">User Dashboard</a>
        </div>
        
        <div class="pt-8 flex justify-between items-center">
          <span class="text-[var(--ink-mid)]">Theme Toggle</span>
          <button id="mobile-theme-toggle" class="p-2 text-[var(--ink-high)] bg-[var(--surface-raised)] border border-[var(--structural-line)] text-xs">
             Switch Mode
          </button>
        </div>

        <div class="pt-4 flex justify-between items-center">
          <span class="text-[var(--ink-mid)]">RTL Toggle</span>
          <button id="mobile-rtl-toggle" class="p-2 text-[var(--ink-high)] bg-[var(--surface-raised)] border border-[var(--structural-line)] text-xs font-mono font-bold">
             RTL
          </button>
        </div>
      </div>
    </div>
  `;


  // --- FOOTER COMPONENT ---
  const footerHTML = `
    <footer class="bg-[var(--surface-solid)] border-t border-[var(--structural-line)] pt-16 pb-8 px-6 lg:px-12 font-body text-sm relative overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[var(--laser-cyan)] to-transparent opacity-30"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
        <a href="${basePath}index.html" class="font-display font-black tracking-widest text-lg uppercase hover:text-[var(--laser-cyan)] transition-colors flex flex-row items-center"><img src="${basePath}assets/images/brand-logo.png" class="w-16 h-auto -ml-4" alt="Logo">KINETIC AUTO GLASS</a>
      </div>
          <p class="text-[var(--ink-mid)] leading-relaxed">
            Professional mobile windshield repair, auto glass replacement, and ADAS calibration services brought directly to your location.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 border border-[var(--structural-line)] flex items-center justify-center text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] hover:border-[var(--laser-cyan)] transition-all duration-300 hover:-translate-y-1 bg-[var(--canvas)]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 border border-[var(--structural-line)] flex items-center justify-center text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] hover:border-[var(--laser-cyan)] transition-all duration-300 hover:-translate-y-1 bg-[var(--canvas)]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 border border-[var(--structural-line)] flex items-center justify-center text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] hover:border-[var(--laser-cyan)] transition-all duration-300 hover:-translate-y-1 bg-[var(--canvas)]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-6">
          <h4 class="font-mono text-xs uppercase tracking-widest text-[var(--ink-high)] font-bold">Quick Links</h4>
          <ul class="space-y-3 font-mono text-xs">
            <li><a href="${basePath}index.html" class="text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-colors flex items-center group"><span class="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[var(--laser-cyan)]">-</span> Home </a></li>
            <li><a href="${pagesPath}home-saas.html" class="text-[var(--ink-mid)] hover:text-[var(--laser-cyan)] transition-colors flex items-center group"><span class="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[var(--laser-cyan)]">-</span> Fleet Services</a></li>
            <li><a href="${pagesPath}services.html" class="text-[var(--ink-mid)] hover:text-[var(--laser-amber)] transition-colors flex items-center group"><span class="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[var(--laser-amber)]">-</span> Services</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="space-y-6">
          <h4 class="font-mono text-xs uppercase tracking-widest text-[var(--ink-high)] font-bold">Company</h4>
          <ul class="space-y-3 font-mono text-xs">
            <li><a href="${pagesPath}about.html" class="text-[var(--ink-mid)] hover:text-[var(--laser-amber)] transition-colors flex items-center group"><span class="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[var(--laser-amber)]">-</span> About Us</a></li>
            <li><a href="${pagesPath}blog.html" class="text-[var(--ink-mid)] hover:text-[var(--laser-amber)] transition-colors flex items-center group"><span class="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[var(--laser-amber)]">-</span> Blog</a></li>
          
            <li><a href="${pagesPath}contact.html" class="text-[var(--ink-mid)] hover:text-[var(--laser-amber)] transition-colors flex items-center group"><span class="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-[var(--laser-amber)]">-</span> Contact</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="space-y-6">
          <h4 class="font-mono text-xs uppercase tracking-widest text-[var(--ink-high)] font-bold">Service Updates</h4>
          <p class="text-xs text-[var(--ink-mid)]">Subscribe to receive seasonal maintenance tips, service alerts, and promotions.</p>
          <form id="footer-newsletter-form" class="flex flex-col space-y-3" onsubmit="event.preventDefault()">
            <input id="footer-newsletter-email" type="email" placeholder="Enter Your Email Address" class="bg-[var(--canvas)] border border-[var(--structural-line)] p-3 text-xs font-mono focus:outline-none focus:border-[var(--laser-cyan)] transition-colors text-[var(--ink-high)]">
            <button type="submit" class="bg-[var(--laser-cyan)] text-[var(--canvas)] font-bold py-3 text-xs font-mono uppercase tracking-widest hover:bg-cyan-400 transition-colors">
              Subscribe
            </button>
            <!-- Newsletter feedback -->
            <div id="newsletter-feedback" class="hidden text-xs font-mono px-3 py-2 border"></div>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-[var(--structural-line)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-[var(--ink-low)]">
        <div>
          &copy; ${new Date().getFullYear()} Kinetic Auto Glass Services. Certified Safe Drive-Away Quality.
        </div>
        <div class="flex gap-6">
          <a href="${pagesPath}privacy.html" class="hover:text-[var(--laser-cyan)] transition-colors">Privacy Policy</a>
          <a href="${pagesPath}terms.html" class="hover:text-[var(--laser-cyan)] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  `;

  // Inject into DOM
  const navContainer = document.getElementById('app-navbar');
  const footerContainer = document.getElementById('app-footer');
  
  if (navContainer) {
    navContainer.className = "sticky top-0 z-50 w-full";
    navContainer.innerHTML = navbarHTML;
  }
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }

  // --- LOGIC: Sticky Header Scroll Shrink ---
  window.addEventListener('scroll', () => {
    const header = navContainer ? navContainer.querySelector('header') : null;
    if (header) {
      if (window.scrollY > 20) {
        header.classList.remove('py-4');
        header.classList.add('py-2.5', 'shadow-md');
      } else {
        header.classList.remove('py-2.5', 'shadow-md');
        header.classList.add('py-4');
      }
    }
  });

  // --- LOGIC: Active Nav Link ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.classList.add('text-[var(--laser-cyan)]', 'after:content-[\'\']', 'after:absolute', 'after:bottom-[-4px]', 'after:left-0', 'after:w-full', 'after:h-[2px]', 'after:bg-[var(--laser-cyan)]');
      link.classList.remove('text-[var(--ink-mid)]');
    }
  });

  // --- LOGIC: Theme Toggle ---
  function initTheme() {
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    const toggleBtn = document.getElementById('nav-theme-toggle');
    const mobileToggleBtn = document.getElementById('mobile-theme-toggle');

    const updateIcons = (mode) => {
      if (!sunIcon || !moonIcon) return;
      if (mode === 'dark') {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
    };

    const applyTheme = (mode) => {
      document.documentElement.setAttribute('data-theme', mode);
      localStorage.setItem('premium-mode', mode);
      updateIcons(mode);
    };

    // If app.js already handles this, this won't conflict since we are reading the same localStorage key
    const currentMode = localStorage.getItem('premium-mode') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    applyTheme(currentMode);

    const handleToggle = () => {
      const mode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(mode);
    };

    if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
    if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', handleToggle);
  }
  
  // --- LOGIC: RTL Toggle ---
  function initRtl() {
    const toggleBtn = document.getElementById('nav-rtl-toggle');
    const mobileToggleBtn = document.getElementById('mobile-rtl-toggle');

    const updateRtlButton = (dir) => {
      if (toggleBtn) {
        toggleBtn.innerText = dir === 'rtl' ? 'LTR' : 'RTL';
      }
      if (mobileToggleBtn) {
        mobileToggleBtn.innerText = dir === 'rtl' ? 'LTR' : 'RTL';
      }
    };

    const applyRtl = (dir) => {
      document.documentElement.setAttribute('dir', dir);
      localStorage.setItem('doc-direction', dir);
      updateRtlButton(dir);
    };

    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    updateRtlButton(currentDir);

    const handleToggle = () => {
      const dir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      applyRtl(dir);
    };

    if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
    if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', handleToggle);
  }

  // Call immediately
  initTheme();
  initRtl();

  // --- LOGIC: Newsletter Form ---
  // The form is rendered by the footer template so we wait for it after injection
  const newsletterForm = document.getElementById('footer-newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('footer-newsletter-email');
      const feedback   = document.getElementById('newsletter-feedback');
      const email      = emailInput ? emailInput.value.trim() : '';

      // Reset
      if (feedback) {
        feedback.className = 'hidden text-xs font-mono px-3 py-2 border';
        feedback.textContent = '';
      }

      if (!email) {
        if (feedback) {
          feedback.textContent = '⚠ Please enter your email address.';
          feedback.classList.remove('hidden');
          feedback.classList.add('border-[var(--laser-amber)]', 'bg-[var(--laser-amber)]/5', 'text-[var(--laser-amber)]');
        }
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        if (feedback) {
          feedback.textContent = '⚠ Please enter a valid email address.';
          feedback.classList.remove('hidden');
          feedback.classList.add('border-[var(--laser-amber)]', 'bg-[var(--laser-amber)]/5', 'text-[var(--laser-amber)]');
        }
        return;
      }

      // Success
      if (feedback) {
        feedback.textContent = '✓ Subscription successful. You will receive service updates.';
        feedback.classList.remove('hidden');
        feedback.classList.add('border-emerald-500/40', 'bg-emerald-500/5', 'text-emerald-500');
      }
      if (emailInput) emailInput.value = '';

      // Auto-hide after 5 seconds
      setTimeout(() => {
        if (feedback) feedback.classList.add('hidden');
      }, 5000);
    });
  }

  // --- LOGIC: Mobile Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    // Guard flag: ignore resize events triggered immediately after a toggle.
    // Mobile browsers (Android Chrome, iOS Safari) fire resize when body
    // overflow is set to hidden (viewport/toolbar adjusts). Without this guard
    // the resize handler fires ~300ms after openMenu() and closes the menu.
    let ignoreNextResize = false;

    const openMenu = () => {
      ignoreNextResize = true;
      mobileMenu.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.add('hidden');
        hamburgerIcon.classList.remove('block');
        closeIcon.classList.remove('hidden');
        closeIcon.classList.add('block');
      }
      // Allow the resize guard to expire after the browser settles
      setTimeout(() => { ignoreNextResize = false; }, 400);
    };

    const closeMenu = () => {
      ignoreNextResize = true;
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = '';
      if (hamburgerIcon && closeIcon) {
        hamburgerIcon.classList.remove('hidden');
        hamburgerIcon.classList.add('block');
        closeIcon.classList.add('hidden');
        closeIcon.classList.remove('block');
      }
      setTimeout(() => { ignoreNextResize = false; }, 400);
    };

    mobileMenuBtn.addEventListener('click', (e) => {
      // Stop propagation so the click doesn't bubble to any ancestor
      // or document-level handlers that might interfere.
      e.stopPropagation();
      const isOpen = !mobileMenu.classList.contains('translate-x-full');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Handle window resize: only close on genuine desktop resize events,
    // not the spurious ones fired by mobile browsers after overflow change.
    window.addEventListener('resize', () => {
      if (ignoreNextResize) return; // skip browser-triggered viewport adjustments
      if (window.innerWidth >= 1024) { // lg breakpoint
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isOpen) {
          closeMenu();
        }
      }
    });
  }
});
