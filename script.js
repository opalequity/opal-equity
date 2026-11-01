/**
 * ==============================================================================
 * OPAL EQUITY LIMITED — MASTER INTERACTIVE JAVASCRIPT (script.js)
 * Clean, lightweight, modular Vanilla JavaScript
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initActiveNav();
  initBackToTop();
  initDynamicContentSync();
  initServicesRender();
  initTeamRender();
  initNewsRenderAndFilter();
  initContactForm();
  initModal();
});

/* ------------------------------------------------------------------------------
 * 1. HEADER SCROLL & BACK TO TOP
 * ------------------------------------------------------------------------------ */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTop) {
      if (scrollY > 350) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });
}

function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ------------------------------------------------------------------------------
 * 2. MOBILE NAVIGATION DRAWER
 * ------------------------------------------------------------------------------ */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openMenu() {
    toggleBtn.classList.add('open');
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.classList.remove('open');
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  backdrop.addEventListener('click', closeMenu);

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });

  // Close when clicking any nav link inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ------------------------------------------------------------------------------
 * 3. ACTIVE NAVIGATION HIGHLIGHTER
 * ------------------------------------------------------------------------------ */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ------------------------------------------------------------------------------
 * 4. DYNAMIC CONTENT SYNC FROM content.js
 * Automatically populates any HTML element with [data-content-key]
 * ------------------------------------------------------------------------------ */
function initDynamicContentSync() {
  if (typeof OPAL_CONTENT === 'undefined') return;

  const contentElements = document.querySelectorAll('[data-content-key]');
  contentElements.forEach(el => {
    const keyPath = el.getAttribute('data-content-key');
    const value = getNestedValue(OPAL_CONTENT, keyPath);
    if (value !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = value;
      } else {
        el.textContent = value;
      }
    }
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

/* ------------------------------------------------------------------------------
 * 5. SERVICES RENDER (For services.html and index.html preview)
 * ------------------------------------------------------------------------------ */
function initServicesRender() {
  if (typeof OPAL_CONTENT === 'undefined' || !OPAL_CONTENT.services) return;

  // On Services Page
  const servicesContainer = document.getElementById('opal-services-grid');
  if (servicesContainer) {
    servicesContainer.innerHTML = OPAL_CONTENT.services.map(service => `
      <div class="card service-card" id="${service.id}">
        <div class="service-card-header">
          <div class="icon-box">
            ${service.iconSvg}
          </div>
          <div class="service-card-heading-group">
            <div class="service-card-tag">${service.category}</div>
            <h3 class="service-card-title">${service.title}</h3>
          </div>
        </div>
        <p class="service-card-desc">${service.shortDescription}</p>
        
        <div class="service-features-list" style="margin-bottom: 1.5rem; border-top: 1px solid var(--border-light); padding-top: 1rem;">
          <ul style="list-style: none; padding: 0;">
            ${service.keyFeatures.map(item => `
              <li style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--accent-gold); font-size: 0.9rem;">✦</span> ${item}
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="service-card-footer">
          <button type="button" class="learn-more-link open-service-modal" data-service-id="${service.id}">
            View Details <span style="font-size: 1.1rem;">→</span>
          </button>
          <span class="placeholder-tag">${service.badge}</span>
        </div>
      </div>
    `).join('');

    // Attach click listeners for service modal
    servicesContainer.querySelectorAll('.open-service-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const serviceId = btn.getAttribute('data-service-id');
        const service = OPAL_CONTENT.services.find(s => s.id === serviceId);
        if (service) {
          openOpalModal(
            service.title,
            service.category,
            `
              <div style="margin-bottom: 1.5rem; color: var(--accent-gold); font-size: 0.85rem; font-weight: 600; text-transform: uppercase;">
                ${service.badge}
              </div>
              <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem;">${service.fullDescription}</p>
              
              <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--primary-navy);">Scope & Structured Focus Areas</h4>
              <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
                ${service.keyFeatures.map(f => `
                  <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); display: flex; align-items: center; gap: 0.6rem;">
                    <span style="color: var(--accent-gold); font-weight: bold;">✔</span> ${f}
                  </li>
                `).join('')}
              </ul>
              
              <div style="background: var(--bg-light); padding: 1.25rem; border-left: 3px solid var(--accent-gold); border-radius: var(--radius-sm); font-size: 0.88rem; color: var(--text-muted);">
                <strong>Note:</strong> For further details or personalized consultation regarding our services, please connect with Opal Equity Limited.
              </div>
            `
          );
        }
      });
    });
  }

  // On Home Page Preview
  const homeServicesContainer = document.getElementById('opal-home-services-grid');
  if (homeServicesContainer) {
    const featured = OPAL_CONTENT.services.slice(0, 3);
    homeServicesContainer.innerHTML = featured.map(service => `
      <div class="card service-card">
        <div class="service-card-header">
          <div class="icon-box">
            ${service.iconSvg}
          </div>
          <div class="service-card-heading-group">
            <div class="service-card-tag">${service.category}</div>
            <h3 class="service-card-title">${service.title}</h3>
          </div>
        </div>
        <p class="service-card-desc">${service.shortDescription}</p>
        <div class="service-card-footer">
          <a href="services.html#${service.id}" class="learn-more-link">
            Explore Service <span style="font-size: 1.1rem;">→</span>
          </a>
          <span class="placeholder-tag">Placeholder</span>
        </div>
      </div>
    `).join('');
  }
}

/* ------------------------------------------------------------------------------
 * 6. TEAM RENDER (For team.html)
 * ------------------------------------------------------------------------------ */
function initTeamRender() {
  const teamContainer = document.getElementById('opal-team-grid');
  if (!teamContainer || typeof OPAL_CONTENT === 'undefined' || !OPAL_CONTENT.team) return;

  teamContainer.innerHTML = OPAL_CONTENT.team.map(member => `
    <div class="team-card">
      <div class="team-card-image-wrap">
        <img src="${member.image}" alt="${member.name}" loading="lazy">
      </div>
      <div class="team-card-body">
        <h3 class="team-card-name">${member.name}</h3>
        <div class="team-card-role">${member.role}</div>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------------------------
 * 7. NEWS & UPDATES RENDER & CATEGORY FILTER (For news.html)
 * ------------------------------------------------------------------------------ */
function initNewsRenderAndFilter() {
  const newsContainer = document.getElementById('opal-news-grid');
  if (!newsContainer || typeof OPAL_CONTENT === 'undefined' || !OPAL_CONTENT.news) return;

  function renderArticles(filterCategory = 'all') {
    const articles = filterCategory === 'all'
      ? OPAL_CONTENT.news
      : OPAL_CONTENT.news.filter(a => a.category.toLowerCase().includes(filterCategory.toLowerCase()));

    if (articles.length === 0) {
      newsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <h3 style="margin-bottom: 0.5rem;">No updates found in this category</h3>
          <p class="text-muted">New announcements will be posted here as official corporate milestones are established.</p>
        </div>
      `;
      return;
    }

    newsContainer.innerHTML = articles.map(item => `
      <article class="news-card">
        <div class="news-card-image-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="news-card-category">${item.category}</div>
        </div>
        <div class="news-card-body">
          <div class="news-card-date">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${item.date}
          </div>
          <h3 class="news-card-title">${item.title}</h3>
          <p class="news-card-excerpt">${item.excerpt}</p>
          <div class="news-card-footer">
            <button type="button" class="btn btn-outline-navy btn-sm open-news-modal" data-news-id="${item.id}" style="width: 100%;">
              Read Article
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click listeners to open news modal
    newsContainer.querySelectorAll('.open-news-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const newsId = parseInt(btn.getAttribute('data-news-id'), 10);
        const article = OPAL_CONTENT.news.find(a => a.id === newsId);
        if (article) {
          openOpalModal(
            article.title,
            `${article.category} • ${article.date}`,
            `
              <div style="margin-bottom: 1.5rem; border-radius: var(--radius-md); overflow: hidden; max-height: 320px;">
                <img src="${article.image}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
              <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-body); white-space: pre-line;">
                ${article.fullContent}
              </div>
              <div style="margin-top: 2rem; padding: 1.25rem; background: var(--bg-light); border-left: 3px solid var(--accent-gold); border-radius: var(--radius-sm); font-size: 0.86rem; color: var(--text-muted);">
                <strong>Editorial Note:</strong> This is an editable corporate news item placeholder. To post new articles or edit existing ones, open <code>js/content.js</code> and update the <code>news</code> array.
              </div>
            `
          );
        }
      });
    });
  }

  // Initial render
  renderArticles('all');

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.news-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-secondary');
        b.style.background = 'transparent';
        b.style.color = 'var(--primary-navy)';
        b.style.borderColor = 'var(--border-subtle)';
      });

      btn.classList.add('btn-primary');
      btn.classList.remove('btn-secondary');
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';

      const category = btn.getAttribute('data-filter') || 'all';
      renderArticles(category);
    });
  });
}

/* ------------------------------------------------------------------------------
 * 8. CONTACT FORM WITH VISUAL DEMONSTRATION LOGIC
 * (Strictly avoids pretending messages are dispatched without a real backend)
 * ------------------------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('opal-contact-form');
  const statusBox = document.getElementById('opal-form-status');

  if (!form || !statusBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const subject = form.querySelector('#subject')?.value.trim();
    const message = form.querySelector('#message')?.value.trim();

    // Basic frontend validation
    if (!name || !email || !message) {
      statusBox.className = 'form-status notice';
      statusBox.innerHTML = `
        <strong>Please fill in all required fields.</strong>
        <p style="margin-top: 0.25rem; font-size: 0.88rem;">Name, email, and message are required to proceed.</p>
      `;
      statusBox.style.display = 'block';
      return;
    }

    // Feedback conforming to rules: Do not pretend email is dispatched
    statusBox.className = 'form-status notice';
    statusBox.innerHTML = `
      <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
        <span style="font-size: 1.2rem; color: #B45309;">ℹ</span>
        <div>
          <strong style="color: #92400E;">Demo Mode — Message Validated</strong>
          <p style="margin-top: 0.35rem; font-size: 0.88rem; line-height: 1.5; color: #78350F;">
            Thank you, <strong>${escapeHtml(name)}</strong>. Your contact form inputs were validated successfully.
            <br><br>
            <em>Important Notice:</em> As this website is currently in frontend demonstration mode, no email has been sent. To connect this form to your real corporate inbox (using a free service like Formspree, Cloudflare Pages Functions, or an SMTP endpoint), please consult <strong>README.md</strong>.
          </p>
        </div>
      </div>
    `;
    statusBox.style.display = 'block';

    // Scroll status box into view smoothly
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ------------------------------------------------------------------------------
 * 9. GLOBAL MODAL DIALOG HELPER
 * ------------------------------------------------------------------------------ */
function initModal() {
  const modalOverlay = document.getElementById('opal-modal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

function openOpalModal(title, subtitle, htmlContent) {
  const modalOverlay = document.getElementById('opal-modal');
  if (!modalOverlay) return;

  const titleEl = modalOverlay.querySelector('.modal-title');
  const subtitleEl = modalOverlay.querySelector('.modal-subtitle');
  const bodyEl = modalOverlay.querySelector('.modal-body');

  if (titleEl) titleEl.textContent = title;
  if (subtitleEl) subtitleEl.textContent = subtitle;
  if (bodyEl) bodyEl.innerHTML = htmlContent;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
