import './styles/main.css';
import {
  COMPANY_REASONS,
  JOB_HIGHLIGHTS,
  OVERVIEW_POINTS,
  RESPONSIBILITIES,
  VALUES,
  WORKFLOW_STEPS,
} from './data/content.js';
import { ICONS, ICON_SETS } from './data/icons.js';

const STORAGE_KEY = 'praso-theme';

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function iconMarkup(setName, index) {
  const iconName = ICON_SETS[setName]?.[index];
  return ICONS[iconName] ?? '';
}

function renderCards(targetId, items, renderItem) {
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.innerHTML = items.map(renderItem).join('');

  Array.from(target.children).forEach((child, index) => {
    child.setAttribute('data-reveal', '');
    child.classList.add(`stagger-${index + 1}`);
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll('[data-reveal]');

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((element) => element.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealItems.forEach((element) => observer.observe(element));
}

function initTopbarScroll() {
  const topbar = document.getElementById('topbar');
  if (!topbar) {
    return;
  }

  let ticking = false;

  const onScroll = () => {
    if (ticking) {
      return;
    }

    requestAnimationFrame(() => {
      topbar.classList.toggle('topbar-scrolled', window.scrollY > 60);
      ticking = false;
    });

    ticking = true;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // no-op
  }
}

function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    return;
  }

  document.documentElement.removeAttribute('data-theme');
}

function updateThemeToggleA11y(toggle, isDark) {
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
  toggle.title = isDark ? 'Ativar modo claro' : 'Ativar modo escuro';
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) {
    return;
  }

  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  updateThemeToggleA11y(toggle, isDark);

  toggle.addEventListener('click', () => {
    const nextDark = html.getAttribute('data-theme') !== 'dark';

    html.setAttribute('data-theme-transitioning', '');
    requestAnimationFrame(() => {
      applyTheme(nextDark);
      setStoredTheme(nextDark ? 'dark' : 'light');
      updateThemeToggleA11y(toggle, nextDark);

      setTimeout(() => {
        html.removeAttribute('data-theme-transitioning');
      }, 550);
    });
  });

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const hasSavedTheme = getStoredTheme() === 'dark' || getStoredTheme() === 'light';

  if (!hasSavedTheme && typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', (event) => {
      applyTheme(event.matches);
      updateThemeToggleA11y(toggle, event.matches);
    });
  }
}

function renderPageContent() {
  renderCards(
    'overview-points',
    OVERVIEW_POINTS,
    (item, index) => `
      <article class="overview-card">
        <div class="card-icon-wrap">${iconMarkup('overview', index)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
  );

  renderCards(
    'workflow-steps',
    WORKFLOW_STEPS,
    (item, index) => `
      <article class="workflow-step">
        <span class="workflow-step-number">0${index + 1}</span>
        <div class="workflow-icon">${iconMarkup('workflow', index)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
  );

  renderCards(
    'responsibilities-list',
    RESPONSIBILITIES,
    (item, index) => `
      <article class="responsibility-item">
        <span class="responsibility-icon">${iconMarkup('responsibilities', index)}</span>
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `
  );

  renderCards(
    'job-highlights',
    JOB_HIGHLIGHTS,
    (item, index) => `
      <article class="benefit-card">
        <div class="benefit-card-header">
          <span class="benefit-icon">${iconMarkup('jobHighlights', index)}</span>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
  );

  renderCards(
    'company-reasons',
    COMPANY_REASONS,
    (item, index) => `
      <article class="benefit-card">
        <div class="benefit-card-header">
          <span class="benefit-icon">${iconMarkup('companyReasons', index)}</span>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
  );

  renderCards(
    'values-grid',
    VALUES,
    (item, index) => `
      <article class="value-card">
        <div class="value-icon">${iconMarkup('values', index)}</div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderPageContent();
  initReveal();
  initTopbarScroll();
  initThemeToggle();
});
