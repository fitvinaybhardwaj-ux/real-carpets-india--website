import { PRODUCTS } from './data.js';

let currentCategory = 'all';
let currentConstruction = 'all';
let searchQuery = '';

export function initCatalog(onAddToSample, onOpenQuote) {
  const container = document.getElementById('products-grid');
  if (!container) return;
  const countEl = document.getElementById('filter-results-count');
  const categoryPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('search-input');
  const constructionSelect = document.getElementById('filter-construction');

  function render() {
    if (!container) return;

    const filtered = PRODUCTS.filter(p => {
      // Category filter
      if (currentCategory !== 'all' && p.category !== currentCategory) {
        return false;
      }
      // Construction filter
      if (currentConstruction !== 'all') {
        if (!p.construction.toLowerCase().includes(currentConstruction.toLowerCase()) &&
            !p.subCategory.toLowerCase().includes(currentConstruction.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const text = `${p.name} ${p.code} ${p.material} ${p.construction} ${p.subCategory}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Articles`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 4rem 1rem; text-align: center; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <p style="font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 0.5rem;">No articles matched your exact filter parameters.</p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">Real Carpets India manufactures custom specifications to order. Try resetting filters or contact our merchandising team.</p>
          <button id="btn-reset-filters" class="btn btn-primary btn-sm">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('btn-reset-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentConstruction = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          if (constructionSelect) constructionSelect.value = 'all';
          categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
          render();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(p => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-card-img-wrap" data-action="open-modal" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name} - Real Carpets India" class="product-card-img" loading="lazy">
          <span class="product-card-tag">${p.subCategory}</span>
          <span class="product-card-code">${p.code}</span>
        </div>
        <div class="product-card-body">
          <div>
            <h3 class="product-card-title" data-action="open-modal" data-id="${p.id}">${p.name}</h3>
            <div class="product-card-spec-row">
              <div class="spec-line">
                <span class="spec-line-label">Construction:</span>
                <span class="spec-line-val">${p.construction}</span>
              </div>
              <div class="spec-line">
                <span class="spec-line-label">Material:</span>
                <span class="spec-line-val">${p.material.split(',')[0]}</span>
              </div>
              <div class="spec-line">
                <span class="spec-line-label">Min. Order:</span>
                <span class="spec-line-val">${p.moq}</span>
              </div>
            </div>
          </div>
          <div class="product-card-actions">
            <button class="btn btn-outline btn-sm" data-action="open-modal" data-id="${p.id}">
              Spec Sheet
            </button>
            <button class="btn btn-primary btn-sm" data-action="add-sample" data-id="${p.id}">
              + Sample
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to cards
    container.querySelectorAll('[data-action="open-modal"]').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = el.dataset.id || el.closest('[data-id]').dataset.id;
        const prod = PRODUCTS.find(x => x.id === id);
        if (prod) openProductModal(prod, onAddToSample, onOpenQuote);
      });
    });

    container.querySelectorAll('[data-action="add-sample"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const prod = PRODUCTS.find(x => x.id === id);
        if (prod && onAddToSample) {
          onAddToSample(prod);
        }
      });
    });
  }

  // Category pills event
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category || 'all';
      render();
    });
  });

  // Construction dropdown
  if (constructionSelect) {
    constructionSelect.addEventListener('change', (e) => {
      currentConstruction = e.target.value;
      render();
    });
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      render();
    });
  }

  // Check URL params for category on load
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramCategory = urlParams.get('category');
    if (paramCategory) {
      const matchingPill = Array.from(categoryPills).find(
        p => p.dataset.category?.toLowerCase() === paramCategory.toLowerCase()
      );
      if (matchingPill) {
        categoryPills.forEach(p => p.classList.remove('active'));
        matchingPill.classList.add('active');
        currentCategory = matchingPill.dataset.category;
      }
    }
  } catch (e) {}

  // Initial render
  render();
}

/**
 * Open Product Detail Modal
 */
export function openProductModal(product, onAddToSample, onOpenQuote) {
  const modalBackdrop = document.getElementById('product-detail-modal');
  if (!modalBackdrop) return;

  const modalBody = modalBackdrop.querySelector('.product-modal-container');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-gallery">
        <div class="product-modal-main-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="product-modal-main-img">
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge badge-terracotta">${product.category}</span>
          <span class="badge badge-dark">${product.subCategory}</span>
          ${product.certifications ? product.certifications.map(c => `<span class="badge badge-olive">${c}</span>`).join('') : ''}
        </div>
      </div>
      <div class="product-modal-info">
        <span class="product-modal-code-badge">Article Code: ${product.code}</span>
        <h2>${product.name}</h2>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
          Manufactured at our Panipat facility under integrated ISO 9001 supervision. Available in standard overseas dimensions as well as tailored custom private-label specifications.
        </p>

        <table class="product-spec-table">
          <tbody>
            <tr>
              <td class="spec-title">Construction</td>
              <td class="spec-val">${product.construction}</td>
            </tr>
            <tr>
              <td class="spec-title">Fibre Material</td>
              <td class="spec-val">${product.material}</td>
            </tr>
            ${product.pileHeight ? `<tr><td class="spec-title">Pile Height</td><td class="spec-val">${product.pileHeight}</td></tr>` : ''}
            ${product.backing ? `<tr><td class="spec-title">Backing System</td><td class="spec-val">${product.backing}</td></tr>` : ''}
            ${product.sizes ? `<tr><td class="spec-title">Export Sizes</td><td class="spec-val">${product.sizes.join(', ')}</td></tr>` : ''}
            ${product.colours ? `<tr><td class="spec-title">Colour Options</td><td class="spec-val">${product.colours.join(', ')}</td></tr>` : ''}
            <tr>
              <td class="spec-title">Minimum Order (MOQ)</td>
              <td class="spec-val">${product.moq}</td>
            </tr>
            <tr>
              <td class="spec-title">Production Lead Time</td>
              <td class="spec-val">${product.leadTime}</td>
            </tr>
            ${product.applications ? `<tr><td class="spec-title">Target Applications</td><td class="spec-val">${product.applications}</td></tr>` : ''}
            ${product.customOptions ? `<tr><td class="spec-title">Customisation</td><td class="spec-val">${product.customOptions}</td></tr>` : ''}
          </tbody>
        </table>

        <div class="modal-action-row">
          <button class="btn btn-primary" id="modal-btn-quote" data-code="${product.code}" data-name="${product.name}">
            Request Quotation
          </button>
          <button class="btn btn-outline" id="modal-btn-sample" data-id="${product.id}">
            + Add to Sample Box
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach modal action button events
  const quoteBtn = modalBody.querySelector('#modal-btn-quote');
  if (quoteBtn && onOpenQuote) {
    quoteBtn.addEventListener('click', () => {
      closeProductModal();
      onOpenQuote({ code: product.code, name: product.name, category: product.category });
    });
  }

  const sampleBtn = modalBody.querySelector('#modal-btn-sample');
  if (sampleBtn && onAddToSample) {
    sampleBtn.addEventListener('click', () => {
      onAddToSample(product);
    });
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

export function closeProductModal() {
  const modalBackdrop = document.getElementById('product-detail-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}
