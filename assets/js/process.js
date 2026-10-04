import { MANUFACTURING_PROCESS, MANUFACTURING_TECHNIQUES } from './data.js';

let currentStep = 1;

export function initProcess() {
  const tabsContainer = document.getElementById('process-step-tabs');
  const viewerContainer = document.getElementById('process-step-viewer');
  const craftsContainer = document.getElementById('crafts-grid');

  // 1. Render Process Tabs (Filter / Step Form)
  if (tabsContainer) {
    tabsContainer.innerHTML = MANUFACTURING_PROCESS.map(s => `
      <button class="step-tab ${s.step === 1 ? 'active' : ''}" data-step="${s.step}" type="button" aria-label="Stage ${s.step}: ${s.title}">
        <span class="step-num">${s.step}</span>
        <span class="step-title-text">${s.title}</span>
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.step-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const stepNum = parseInt(tab.dataset.step, 10);
        setStep(stepNum);
      });
    });
  }

  // 2. Render Step Viewer (Explanation Underneath)
  function renderStep(stepNum) {
    if (!viewerContainer) return;
    const step = MANUFACTURING_PROCESS.find(s => s.step === stepNum) || MANUFACTURING_PROCESS[0];

    viewerContainer.innerHTML = `
      <div class="step-explanation-header">
        <div class="step-meta">
          <span class="step-badge">Stage ${step.step} of 17 &bull; ${step.category}</span>
          <div class="step-progress-track" aria-hidden="true">
            <div class="step-progress-fill" style="width: ${(step.step / 17) * 100}%;"></div>
          </div>
        </div>
        <div class="step-nav-buttons">
          <button class="btn btn-outline btn-sm" id="btn-prev-step" ${step.step === 1 ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
            &larr; Previous Stage
          </button>
          <button class="btn btn-primary btn-sm" id="btn-next-step" ${step.step === 17 ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
            Next Stage &rarr;
          </button>
        </div>
      </div>

      <div class="step-explanation-body">
        <h3 class="step-title">${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
        <div class="step-detail-box">
          <div class="step-detail-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <strong>Process Quality Control:</strong>
          </div>
          <p class="step-detail-text">${step.detail}</p>
        </div>
      </div>
    `;

    const prevBtn = viewerContainer.querySelector('#btn-prev-step');
    const nextBtn = viewerContainer.querySelector('#btn-next-step');

    if (prevBtn && step.step > 1) {
      prevBtn.addEventListener('click', () => setStep(step.step - 1));
    }
    if (nextBtn && step.step < 17) {
      nextBtn.addEventListener('click', () => setStep(step.step + 1));
    }
  }

  function setStep(stepNum) {
    currentStep = stepNum;
    if (tabsContainer) {
      tabsContainer.querySelectorAll('.step-tab').forEach(t => {
        const isMatch = parseInt(t.dataset.step, 10) === stepNum;
        t.classList.toggle('active', isMatch);
      });
    }
    renderStep(stepNum);
  }

  // Initial render of step 1
  renderStep(1);

  // 3. Render Craftsmanship Techniques Grid
  if (craftsContainer) {
    craftsContainer.innerHTML = MANUFACTURING_TECHNIQUES.map(c => `
      <div class="craft-card">
        <div class="craft-card-img-wrap">
          <img src="${c.image}" alt="${c.name} Construction - Real Carpets India" class="craft-card-img" loading="lazy">
        </div>
        <div class="craft-card-body">
          <h4 class="craft-card-title">${c.name}</h4>
          <p class="craft-card-desc">${c.desc}</p>
        </div>
      </div>
    `).join('');
  }
}
