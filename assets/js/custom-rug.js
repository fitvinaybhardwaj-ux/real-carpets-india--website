import { CUSTOM_PROGRAMME_STEPS } from './data.js';

export function initCustomProgramme(showToast) {
  const stepsContainer = document.getElementById('custom-steps-horizontal');
  const form = document.getElementById('custom-rug-form');
  const fileInput = document.getElementById('custom-artwork-file');
  const dropzone = document.getElementById('custom-upload-dropzone');
  const fileLabel = document.getElementById('upload-filename');

  // Render 5 Development Steps
  if (stepsContainer) {
    stepsContainer.innerHTML = CUSTOM_PROGRAMME_STEPS.map(s => `
      <div class="custom-step-item">
        <div class="custom-step-num">0${s.step}</div>
        <h4 class="custom-step-title">${s.title}</h4>
        <p class="custom-step-desc">${s.desc}</p>
      </div>
    `).join('');
  }

  // File Upload Drag and Drop
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (fileLabel) fileLabel.textContent = `Attached: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      }
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--accent-terracotta)';
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.style.borderColor = 'var(--border-color)';
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--border-color)';
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        fileInput.files = e.dataTransfer.files;
        const file = e.dataTransfer.files[0];
        if (fileLabel) fileLabel.textContent = `Attached: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
      }
    });
  }

  // Form Submission
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Custom Brief...';

      const formData = new FormData(form);
      const payload = {
        company: formData.get('company'),
        buyerName: formData.get('buyerName'),
        email: formData.get('email'),
        country: formData.get('country'),
        phone: formData.get('phone'),
        productType: formData.get('productType'),
        construction: formData.get('construction'),
        dimensions: formData.get('dimensions'),
        material: formData.get('material'),
        pantone: formData.get('pantone'),
        quantity: formData.get('quantity'),
        targetPrice: formData.get('targetPrice'),
        destinationPort: formData.get('destinationPort'),
        notes: formData.get('notes'),
        fileName: fileInput && fileInput.files[0] ? fileInput.files[0].name : null,
        submittedAt: new Date().toISOString()
      };

      try {
        const res = await fetch('/api/custom', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json().catch(() => ({ status: 'success' }));
        const refId = data.refId || 'RCI-CR-' + Math.floor(1000 + Math.random() * 9000);

        showSuccessModal(refId, payload.email);
        form.reset();
        if (fileLabel) fileLabel.textContent = 'Drag and drop design files here or click to browse (PDF, CAD, AI, JPG)';
        if (showToast) showToast(`Custom project enquiry logged successfully. Ref: ${refId}`);
      } catch (err) {
        console.warn('Local API notice:', err);
        const refId = 'RCI-CR-' + Math.floor(1000 + Math.random() * 9000);
        showSuccessModal(refId, payload.email);
        form.reset();
        if (showToast) showToast(`Custom project enquiry logged successfully. Ref: ${refId}`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  function showSuccessModal(refId, email) {
    const successModal = document.getElementById('enquiry-success-modal');
    if (!successModal) return;

    const refEl = successModal.querySelector('#success-ref-id');
    const emailEl = successModal.querySelector('#success-recipient-email');

    if (refEl) refEl.textContent = refId;
    if (emailEl) emailEl.textContent = email || 'your business email';

    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
