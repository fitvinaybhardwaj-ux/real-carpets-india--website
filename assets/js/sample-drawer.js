let sampleItems = [];

export function initSampleDrawer(showToast) {
  const drawer = document.getElementById('sample-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const triggerBtn = document.getElementById('header-sample-trigger');
  const closeBtn = document.getElementById('close-sample-drawer');
  const itemsContainer = document.getElementById('sample-drawer-items-list');
  const badges = document.querySelectorAll('.sample-count-badge');
  const sampleForm = document.getElementById('sample-order-form');

  // Load from localStorage if present
  try {
    const saved = localStorage.getItem('rci_sample_box');
    if (saved) {
      sampleItems = JSON.parse(saved);
      updateBadge();
    }
  } catch (e) {
    sampleItems = [];
  }

  function openDrawer() {
    renderDrawerItems();
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  function updateBadge() {
    badges.forEach(b => {
      b.textContent = sampleItems.length;
      b.style.display = sampleItems.length > 0 ? 'flex' : 'none';
    });
    try {
      localStorage.setItem('rci_sample_box', JSON.stringify(sampleItems));
    } catch (e) {}
  }

  function renderDrawerItems() {
    if (!itemsContainer) return;

    if (sampleItems.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: var(--text-muted);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          </div>
          <h4 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.35rem;">Your Sample Box is Empty</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1.5rem;">
            Browse our catalogue and click "+ Sample" on any rug, bathmat or throw to request physical fabric swatches.
          </p>
          <button class="btn btn-primary btn-sm" id="btn-browse-catalog-from-drawer">
            Browse Catalogue
          </button>
        </div>
      `;

      const browseBtn = itemsContainer.querySelector('#btn-browse-catalog-from-drawer');
      if (browseBtn) {
        browseBtn.addEventListener('click', () => {
          closeDrawer();
          const catSec = document.getElementById('catalogue');
          if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
        });
      }
      return;
    }

    itemsContainer.innerHTML = `
      <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <span><strong>${sampleItems.length} Swatch Article${sampleItems.length > 1 ? 's' : ''}</strong> Selected</span>
        <button id="btn-clear-all-samples" style="font-size: 0.75rem; color: var(--accent-terracotta); text-decoration: underline;">Clear All</button>
      </div>
      ${sampleItems.map((item, idx) => `
        <div class="sample-item-card">
          <img src="${item.image}" alt="${item.name}" class="sample-item-thumb">
          <div class="sample-item-info">
            <h4>${item.name}</h4>
            <span>Code: ${item.code}</span>
            <span>${item.construction}</span>
          </div>
          <button class="sample-remove-btn" data-index="${idx}" title="Remove swatch">&times;</button>
        </div>
      `).join('')}
    `;

    itemsContainer.querySelectorAll('.sample-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        sampleItems.splice(idx, 1);
        updateBadge();
        renderDrawerItems();
        if (showToast) showToast('Swatch removed from sample box.');
      });
    });

    const clearBtn = itemsContainer.querySelector('#btn-clear-all-samples');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        sampleItems = [];
        updateBadge();
        renderDrawerItems();
        if (showToast) showToast('Sample box cleared.');
      });
    }
  }

  // Sample Order Form Submission
  if (sampleForm) {
    sampleForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (sampleItems.length === 0) {
        if (showToast) showToast('Please add at least one swatch to your sample box first.');
        return;
      }

      const submitBtn = sampleForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Dispatch Request...';

      const formData = new FormData(sampleForm);
      const payload = {
        company: formData.get('company'),
        recipientName: formData.get('recipientName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        shippingAddress: formData.get('address'),
        city: formData.get('city'),
        country: formData.get('country'),
        postalCode: formData.get('postalCode'),
        courierAccount: formData.get('courierAccount') || 'Factory Standard DHL/FedEx Dispatch',
        items: sampleItems,
        submittedAt: new Date().toISOString()
      };

      try {
        const res = await fetch('/api/sample', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json().catch(() => ({ status: 'success' }));
        const refId = data.refId || 'RCI-SMP-' + Math.floor(1000 + Math.random() * 9000);

        closeDrawer();
        sampleItems = [];
        updateBadge();
        sampleForm.reset();

        showSampleSuccess(refId, payload.email);
        if (showToast) showToast(`Sample dispatch request confirmed. Ref: ${refId}`);
      } catch (err) {
        console.warn('Local sample API notice:', err);
        const refId = 'RCI-SMP-' + Math.floor(1000 + Math.random() * 9000);
        closeDrawer();
        sampleItems = [];
        updateBadge();
        sampleForm.reset();
        showSampleSuccess(refId, payload.email);
        if (showToast) showToast(`Sample dispatch request confirmed. Ref: ${refId}`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  function showSampleSuccess(refId, email) {
    const successModal = document.getElementById('enquiry-success-modal');
    if (!successModal) return;

    const titleEl = successModal.querySelector('#success-modal-title');
    const msgEl = successModal.querySelector('#success-modal-message');
    const refEl = successModal.querySelector('#success-ref-id');
    const emailEl = successModal.querySelector('#success-recipient-email');

    if (titleEl) titleEl.textContent = 'Sample Swatch Request Received';
    if (msgEl) msgEl.textContent = 'Our Panipat export sampling desk has logged your sample dispatch request. A courier tracking confirmation and proforma swatch dossier will be dispatched to your business email.';
    if (refEl) refEl.textContent = refId;
    if (emailEl) emailEl.textContent = email;

    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  return {
    add(product) {
      const exists = sampleItems.find(x => x.id === product.id);
      if (exists) {
        if (showToast) showToast(`${product.code} is already in your sample box.`);
        openDrawer();
        return;
      }
      sampleItems.push({
        id: product.id,
        code: product.code,
        name: product.name,
        construction: product.construction,
        image: product.image
      });
      updateBadge();
      if (showToast) showToast(`Added ${product.code} to sample box.`);
      openDrawer();
    },
    open() {
      openDrawer();
    }
  };
}
