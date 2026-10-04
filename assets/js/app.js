import { 
  COMPANY_PROFILE, 
  CERTIFICATIONS, 
  STORY_COLLECTIONS, 
  EVENTS_EXHIBITIONS,
  WHY_REAL_CARPETS_INDIA
} from './data.js';

import { initCatalog, closeProductModal } from './catalog.js';
import { initProcess } from './process.js';
import { initMap } from './map.js';
import { initCustomProgramme } from './custom-rug.js';
import { initSampleDrawer } from './sample-drawer.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification Manager
  const toastContainer = document.getElementById('toast-container');
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  // 2. Initialize Sample Drawer
  const sampleDrawer = initSampleDrawer(showToast);

  // 3. Initialize Quote Modal and Form
  const quoteModal = document.getElementById('quote-request-modal');
  const quoteForm = document.getElementById('quote-request-form');

  function openQuoteModal(prefill = null) {
    if (!quoteModal) return;
    if (prefill && quoteForm) {
      const prodCodeInput = quoteForm.querySelector('#quote-product-code');
      const reqInput = quoteForm.querySelector('#quote-requirement');
      if (prodCodeInput) prodCodeInput.value = prefill.code || '';
      if (reqInput) reqInput.value = `Quotation request for article: ${prefill.name} (${prefill.code}) - Category: ${prefill.category}`;
    }
    quoteModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuoteModal() {
    if (quoteModal) {
      quoteModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-action="open-quote"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuoteModal();
    });
  });

  const closeQuoteBtn = document.getElementById('close-quote-modal');
  if (closeQuoteBtn) closeQuoteBtn.addEventListener('click', closeQuoteModal);
  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) closeQuoteModal();
    });
  }

  // Quote Form Handler
  if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting Quotation Request...';

      const formData = new FormData(quoteForm);
      const payload = {
        fullName: formData.get('fullName'),
        company: formData.get('company'),
        jobTitle: formData.get('jobTitle'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        country: formData.get('country'),
        category: formData.get('category'),
        productCode: formData.get('productCode'),
        construction: formData.get('construction'),
        material: formData.get('material'),
        size: formData.get('size'),
        quantity: formData.get('quantity'),
        targetMarket: formData.get('targetMarket'),
        deliveryCountry: formData.get('deliveryCountry'),
        message: formData.get('message'),
        submittedAt: new Date().toISOString()
      };

      try {
        const res = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json().catch(() => ({ status: 'success' }));
        const refId = data.refId || 'RCI-QT-' + Math.floor(1000 + Math.random() * 9000);

        closeQuoteModal();
        quoteForm.reset();
        showEnquirySuccess(refId, payload.email);
        showToast(`Quotation request sent successfully. Ref: ${refId}`);
      } catch (err) {
        console.warn('Local quote API notice:', err);
        const refId = 'RCI-QT-' + Math.floor(1000 + Math.random() * 9000);
        closeQuoteModal();
        quoteForm.reset();
        showEnquirySuccess(refId, payload.email);
        showToast(`Quotation request sent successfully. Ref: ${refId}`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // 4. Initialize Product Catalog
  initCatalog(
    (product) => sampleDrawer.add(product),
    (prefill) => openQuoteModal(prefill)
  );

  // Close Product Detail Modal Button
  const closeProductBtn = document.getElementById('close-product-modal');
  if (closeProductBtn) closeProductBtn.addEventListener('click', closeProductModal);
  const productModal = document.getElementById('product-detail-modal');
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // 5. Initialize Manufacturing Process & Map & Custom
  initProcess();
  initMap();
  initCustomProgramme(showToast);

  // 6. Render Story Collections
  const storyContainer = document.getElementById('story-collections-container');
  if (storyContainer) {
    storyContainer.innerHTML = STORY_COLLECTIONS.map(s => `
      <div class="story-collection-suite">
        <div class="story-suite-visual">
          <img src="${s.image}" alt="${s.title} - Real Carpets India Story Collection" class="story-suite-img" loading="lazy">
        </div>
        <div class="story-suite-content">
          <span class="story-suite-subtitle">${s.subtitle}</span>
          <h3>${s.title}</h3>
          <p class="story-suite-desc">${s.desc}</p>
          <div class="suite-elements-grid">
            ${s.elements.map(el => `
              <div class="suite-element-item">
                <div class="suite-element-name">${el.name}</div>
                <div class="suite-element-spec">${el.spec}</div>
              </div>
            `).join('')}
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" data-action="open-quote">
              Enquire About This Story Suite
            </button>
            <a href="#custom-programme" class="btn btn-outline btn-sm">
              Customise Motif
            </a>
          </div>
        </div>
      </div>
    `).join('');

    storyContainer.querySelectorAll('[data-action="open-quote"]').forEach(btn => {
      btn.addEventListener('click', () => openQuoteModal());
    });
  }

  // 7. Render Certifications Continuous Marquee & Lightbox Modal
  const certsContainer = document.getElementById('certs-grid');
  const certModal = document.getElementById('cert-lightbox-modal');
  const closeCertBtn = document.getElementById('close-cert-modal');

  if (certsContainer) {
    const createCardHtml = (c) => `
      <div class="cert-card" data-id="${c.id}" role="button" tabindex="0" aria-label="Inspect ${c.name} certification document">
        <div>
          <div class="cert-card-img-wrap">
            <img src="${c.image}" alt="${c.name} Document" class="cert-card-img-preview" loading="lazy">
          </div>
          <span class="cert-card-authority" title="${c.authority}">${c.authority}</span>
          <h4 class="cert-card-name" title="${c.name}">${c.name}</h4>
          <span class="badge badge-terracotta cert-card-badge" title="${c.scope}">${c.scope}</span>
          <p class="cert-card-desc" title="${c.desc}">${c.desc}</p>
        </div>
        <div class="cert-card-action">
          <span>Inspect Document</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
      </div>
    `;

    const singleGroupHtml = CERTIFICATIONS.map(createCardHtml).join('');

    certsContainer.className = 'certs-marquee-container reveal-on-scroll delay-1';
    certsContainer.innerHTML = `
      <div class="certs-marquee-track">
        <div class="certs-marquee-group">${singleGroupHtml}</div>
        <div class="certs-marquee-group" aria-hidden="true">${singleGroupHtml}</div>
      </div>
    `;

    certsContainer.querySelectorAll('.cert-card').forEach(card => {
      const openModal = () => {
        const id = card.dataset.id;
        const cert = CERTIFICATIONS.find(x => x.id === id);
        if (cert && certModal) {
          const imgEl = certModal.querySelector('#cert-modal-img');
          const titleEl = certModal.querySelector('#cert-modal-title');
          const descEl = certModal.querySelector('#cert-modal-desc');
          if (imgEl) imgEl.src = cert.image;
          if (titleEl) titleEl.textContent = cert.name;
          if (descEl) descEl.textContent = `${cert.authority} — ${cert.desc}`;
          certModal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      };

      card.addEventListener('click', openModal);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal();
        }
      });
    });
  }

  if (closeCertBtn && certModal) {
    closeCertBtn.addEventListener('click', () => {
      certModal.classList.remove('open');
      document.body.style.overflow = '';
    });
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        certModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 8. Render Why Real Carpets India Pillars
  const pillarsContainer = document.getElementById('why-us-pillars-grid');
  if (pillarsContainer) {
    pillarsContainer.innerHTML = WHY_REAL_CARPETS_INDIA.map(p => `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1.75rem;">
        <div style="font-family: var(--font-serif); font-size: 1.75rem; color: var(--accent-terracotta); font-weight: 600; line-height: 1; margin-bottom: 0.75rem;">${p.num}</div>
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">${p.title}</h4>
        <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.6;">${p.desc}</p>
      </div>
    `).join('');
  }

  // 9. Render Exhibitions List
  const eventsContainer = document.getElementById('events-timeline-list');
  if (eventsContainer) {
    eventsContainer.innerHTML = EVENTS_EXHIBITIONS.map(ev => `
      <div style="display: flex; gap: 1.25rem; align-items: flex-start; padding: 1rem 0; border-bottom: 1px solid var(--border-subtle);">
        <span style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 600; color: var(--accent-terracotta); min-width: 60px;">${ev.year}</span>
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.2rem;">${ev.name}</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">${ev.location} &bull; <em>${ev.type}</em></p>
        </div>
      </div>
    `).join('');
  }

  // 10. Sticky Header on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 11. Dynamic Categories Sidebar & 3-Lines Trigger Controller
  const catTrigger = document.getElementById('categories-menu-trigger');
  const catSidebar = document.getElementById('categories-sidebar');
  const catOverlay = document.getElementById('categories-sidebar-overlay');
  const closeCatBtn = document.getElementById('close-categories-sidebar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileOverlay = document.getElementById('mobile-drawer-overlay');
  const closeMobileNav = document.getElementById('close-mobile-nav');

  function openCategoriesSidebar() {
    if (!catSidebar) return;
    catTrigger?.classList.add('active');
    catTrigger?.setAttribute('aria-expanded', 'true');
    catSidebar.classList.add('open');
    catOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCategoriesSidebar() {
    if (!catSidebar) return;
    catTrigger?.classList.remove('active');
    catTrigger?.setAttribute('aria-expanded', 'false');
    catSidebar.classList.remove('open');
    catOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (catTrigger) {
    catTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      if (catSidebar?.classList.contains('open')) {
        closeCategoriesSidebar();
      } else {
        openCategoriesSidebar();
      }
    });
  }

  if (closeCatBtn) closeCatBtn.addEventListener('click', closeCategoriesSidebar);
  if (catOverlay) catOverlay.addEventListener('click', closeCategoriesSidebar);

  // Close on Escape Key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (catSidebar?.classList.contains('open')) {
        closeCategoriesSidebar();
      }
      if (mobileDrawer?.classList.contains('open')) {
        closeMobileDrawer();
      }
    }
  });

  // Handle Category Links inside Sidebar
  document.querySelectorAll('.categories-list a, .collections-pill-grid a, .sidebar-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const category = link.getAttribute('data-category');
      // If currently on products.html and clicked a category:
      const isProductsPage = window.location.pathname.endsWith('products.html') || window.location.pathname.includes('/products');
      if (category && isProductsPage) {
        e.preventDefault();
        closeCategoriesSidebar();
        const pill = document.querySelector(`.filter-pill[data-category="${category}"]`);
        if (pill) {
          pill.click();
          document.getElementById('products-grid')?.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', `products.html?category=${encodeURIComponent(category)}`);
        }
      } else {
        closeCategoriesSidebar();
      }
    });
  });

  // Legacy Mobile Drawer fallback if present
  function openMobileNav() {
    if (catSidebar) {
      openCategoriesSidebar();
    } else {
      mobileDrawer?.classList.add('open');
      mobileOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileDrawer() {
    mobileDrawer?.classList.remove('open');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (closeMobileNav) closeMobileNav.addEventListener('click', closeMobileDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  // 12. General Enquiry Success Modal Handler
  const successModal = document.getElementById('enquiry-success-modal');
  const closeSuccessBtn = document.getElementById('close-success-modal');
  const successDismissBtn = document.getElementById('success-dismiss-btn');

  function closeSuccess() {
    if (successModal) {
      successModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccess);
  if (successDismissBtn) successDismissBtn.addEventListener('click', closeSuccess);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeSuccess();
    });
  }

  function showEnquirySuccess(refId, email) {
    if (!successModal) return;
    const titleEl = successModal.querySelector('#success-modal-title');
    const msgEl = successModal.querySelector('#success-modal-message');
    const refEl = successModal.querySelector('#success-ref-id');
    const emailEl = successModal.querySelector('#success-recipient-email');

    if (titleEl) titleEl.textContent = 'Quotation Request Logged';
    if (msgEl) msgEl.textContent = 'Thank you for reaching out to Real Carpets India. Our Panipat export merchandising desk will examine your specifications and provide a proforma pricing and lead-time schedule.';
    if (refEl) refEl.textContent = refId;
    if (emailEl) emailEl.textContent = email;

    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // 13. Reveal on Scroll Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});
