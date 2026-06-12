document.addEventListener('DOMContentLoaded', () => {
  initPremiumTheme();
  initStructuralWizard();
});

function initPremiumTheme() {
  const toggle = document.getElementById('theme-trigger');
  if (!toggle) return;
  
  const apply = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('premium-mode', mode);
  };

  const active = localStorage.getItem('premium-mode') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  apply(active);
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    apply(current === 'dark' ? 'light' : 'dark');
  });
}

function initStructuralWizard() {
  const host = document.getElementById('diagnostic-engine-host');
  if (!host) return;

  window.runDiagnosticStep = (metric, flag) => {
    host.innerHTML = `
      <div class="space-y-6 animate-pulse">
        <div class="flex items-center justify-between text-[10px] font-mono text-[var(--ink-low)]">
          <span>WINDSHIELD DIAGNOSTIC // STEP 02</span>
          <span>SYSTEM READY</span>
        </div>
        <h4 class="text-xl font-bold font-tech tracking-tight text-[var(--ink-high)]">Is the chip or crack larger than a single rupee coin or located near the windshield edge?</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onclick="finishDiagnostic(true)" class="p-4 text-start border border-[var(--structural-line)] bg-[var(--surface-raised)] hover:border-[var(--laser-amber)] transition-all">
            <span class="block font-mono text-xs text-[var(--laser-amber)]">[01] YES</span>
            <span class="block text-sm font-medium mt-1 text-[var(--ink-high)]">Yes, it is large or near the edge</span>
          </button>
          <button onclick="finishDiagnostic(${flag})" class="p-4 text-start border border-[var(--structural-line)] bg-[var(--surface-raised)] hover:border-[var(--laser-cyan)] transition-all">
            <span class="block font-mono text-xs text-[var(--laser-cyan)]">[02] NO</span>
            <span class="block text-sm font-medium mt-1 text-[var(--ink-high)]">No, it is small and centered</span>
          </button>
        </div>
      </div>
    `;
  };

  window.finishDiagnostic = (needsReplacement) => {
    host.innerHTML = `
      <div class="space-y-6">
        <div class="p-4 border ${needsReplacement ? 'border-amber-500/20 bg-amber-500/5' : 'border-cyan-500/20 bg-cyan-500/5'} rounded-lg">
          <span class="font-mono text-[10px] uppercase tracking-wider ${needsReplacement ? 'text-[var(--laser-amber)]' : 'text-[var(--laser-cyan)]'} block mb-2">
            ${needsReplacement ? 'WINDSHIELD REPLACEMENT REQUIRED' : 'REPAIRABLE CHIP DETECTED'}
          </span>
          <h4 class="text-lg font-bold font-tech text-[var(--ink-high)] mb-2">
            ${needsReplacement ? 'Windshield Replacement & ADAS Calibration Required' : 'Mobile Windshield Chip Repair'}
          </h4>
          <p class="text-xs text-[var(--ink-mid)] leading-relaxed">
            ${needsReplacement 
              ? 'Damage near the edge or larger than a coin compromises the structural integrity of the windshield. A full replacement is required, followed by calibration of your vehicle\'s safety camera.' 
              : 'Your damage is repairable! Our mobile technicians can fill the chip with high-grade optical resin in under 30 minutes, preventing it from spreading.'}
          </p>
        </div>
        <a href="booking.html" class="w-full machined-button bg-[var(--ink-high)] text-[var(--canvas)] p-4 flex items-center justify-center font-bold text-center border-none">
          Book Mobile Repair Van &rarr;
        </a>
      </div>
    `;
  };
}