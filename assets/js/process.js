import { MANUFACTURING_PROCESS, MANUFACTURING_TECHNIQUES } from './data.js';

let currentStep = 1;

export function initProcess() {
  const tabsContainer = document.getElementById('process-step-tabs');
  const viewerContainer = document.getElementById('process-step-viewer');
  const craftsContainer = document.getElementById('crafts-grid');

  // 1. Render Process Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = MANUFACTURING_PROCESS.map(s => `
      <button class="step-tab ${s.step === 1 ? 'active' : ''}" data-step="${s.step}">
        <span class="step-num">${s.step}</span>
        <span>${s.title}</span>
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.step-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const stepNum = parseInt(tab.dataset.step, 10);
        setStep(stepNum);
      });
    });
  }

  // 2. Render Step Viewer
  function renderStep(stepNum) {
    if (!viewerContainer) return;
    const step = MANUFACTURING_PROCESS.find(s => s.step === stepNum) || MANUFACTURING_PROCESS[0];

    viewerContainer.innerHTML = `
      <div class="step-viewer-visual">
        <img src="assets/images/pages/page_28_process_17_steps.jpg" alt="Real Carpets India - 17 Stage Manufacturing Process Overview" class="step-viewer-img">
      </div>
      <div class="step-viewer-content">
        <span class="step-badge">Stage ${step.step} of 17 &bull; ${step.category}</span>
        <h3 class="step-title">${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
        <div class="step-detail-box">
          <strong>Process Quality Control:</strong>
          <p style="margin-top: 0.35rem;">${step.detail}</p>
        </div>
        <div style="display: flex; gap: 0.75rem; margin-top: 2rem;">
          <button class="btn btn-outline btn-sm" id="btn-prev-step" ${step.step === 1 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
            &larr; Previous Stage
          </button>
          <button class="btn btn-primary btn-sm" id="btn-next-step" ${step.step === 17 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
            Next Stage &rarr;
          </button>
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
        if (isMatch) {
          t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
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
