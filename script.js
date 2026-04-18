/* ═══════════════════════════════════════════
   PRASO CAREERS — APP LOGIC
   ═══════════════════════════════════════════ */

const APPLY_URL = "https://praso.inhire.app/";
const ROLE_TITLE = "Delivery Station Associate";
const ROLE_SUBTITLE =
  "Uma vaga para quem gosta de rotina prática, organização e ritmo. Você ajuda a operação da Praso a sair do papel e chegar bem até quem está tocando o negócio na ponta.";

/* ═══════════════════════════════════════════
   SVG ICONS (stroke-based, 24×24 viewBox)
   ═══════════════════════════════════════════ */

function svg(paths) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

const ICONS = {
  // Workflow
  package:     svg('<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05"/><path d="M12 22.08V12"/>'),
  layers:      svg('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>'),
  checkCircle: svg('<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>'),
  send:        svg('<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>'),

  // Overview
  clipboard:   svg('<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/>'),
  target:      svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  zap:         svg('<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'),
  heart:       svg('<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>'),

  // Responsibilities
  inbox:       svg('<path d="M22 12h-6l-2 3H10l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>'),
  search:      svg('<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>'),
  alertCircle: svg('<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>'),
  activity:    svg('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
  shield:      svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),

  // Job highlights
  eye:         svg('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
  lightning:   svg('<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'),
  trendingUp:  svg('<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>'),
  users:       svg('<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>'),

  // Company reasons
  messageCircle: svg('<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>'),
  compass:     svg('<circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>'),
  rocket:      svg('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>'),
  star:        svg('<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'),

  // Values
  unlock:      svg('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 019.9-1"/>'),
  tool:        svg('<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>'),
  link:        svg('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>'),
  flag:        svg('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>'),
};

// Map icons to each data set
const OVERVIEW_ICONS = ["clipboard", "target", "zap", "heart"];
const WORKFLOW_ICONS = ["package", "layers", "checkCircle", "send"];
const RESPONSIBILITY_ICONS = ["inbox", "search", "alertCircle", "activity", "shield"];
const JOB_HIGHLIGHT_ICONS = ["eye", "lightning", "trendingUp", "users"];
const COMPANY_REASON_ICONS = ["messageCircle", "compass", "rocket", "star"];
const VALUE_ICONS = ["unlock", "tool", "link", "flag"];

/* ═══════════════════════════════════════════
   CONTENT DATA
   ═══════════════════════════════════════════ */

const OVERVIEW_POINTS = [
  {
    title: "Recebimento com padrão",
    text: "Conferir entrada, apoiar organização e manter o fluxo certo desde o começo do processo."
  },
  {
    title: "Separação com atenção",
    text: "Trabalhar com agilidade sem perder precisão. O detalhe faz diferença no pedido final."
  },
  {
    title: "Expedição mais fluida",
    text: "Ajudar a operação a ganhar previsibilidade para que a entrega aconteça com menos ruído."
  },
  {
    title: "Impacto real no cliente",
    text: "Quando a operação roda bem, o empreendedor ganha tempo, controle e tranquilidade."
  }
];

const WORKFLOW_STEPS = [
  {
    title: "Receber",
    text: "Entradas, conferência e organização inicial para manter o estoque pronto para girar."
  },
  {
    title: "Separar",
    text: "Pedidos saem melhor quando cada item é tratado com atenção, ritmo e padrão."
  },
  {
    title: "Conferir",
    text: "Antes de expedir, é hora de revisar, corrigir ruído e garantir consistência."
  },
  {
    title: "Despachar",
    text: "A operação se fecha bem quando a saída acontece com clareza, agilidade e responsabilidade."
  }
];

const RESPONSIBILITIES = [
  {
    title: "Apoiar recebimento e organização",
    text: "Conferir volumes, apoiar endereçamento e manter a área preparada para o fluxo do dia."
  },
  {
    title: "Separar pedidos com atenção ao detalhe",
    text: "Trabalhar com precisão para que o pedido saia certo, completo e pronto para expedição."
  },
  {
    title: "Conferir e sinalizar inconsistências",
    text: "Perceber desvios, comunicar rápido e ajudar a resolver antes que o problema vá para frente."
  },
  {
    title: "Cuidar do ritmo da operação",
    text: "Apoiar o time a manter padrão, organização e agilidade mesmo em momentos de maior volume."
  },
  {
    title: "Zelar pelo espaço e pelos processos",
    text: "A operação fica melhor quando o ambiente está limpo, claro e pronto para o próximo movimento."
  }
];

const JOB_HIGHLIGHTS = [
  {
    title: "Você vê o resultado do seu trabalho",
    text: "Aqui o impacto é concreto. O que você faz aparece no fluxo do dia e na experiência de quem recebe."
  },
  {
    title: "A rotina não fica parada",
    text: "É uma operação viva. Tem ritmo, prioridade mudando e muita coordenação entre pessoas."
  },
  {
    title: "Você aprende fazendo",
    text: "Quem gosta de prática, melhoria contínua e operação bem executada costuma crescer rápido aqui."
  },
  {
    title: "Tem senso de time",
    text: "O trabalho acontece junto. Um ajuda o outro para o processo andar melhor para todo mundo."
  }
];

const COMPANY_REASONS = [
  {
    title: "A Praso fala perto, não de cima",
    text: "Nossa comunicação é humana, direta e sem hierarquia. Isso vale para cliente, time e operação."
  },
  {
    title: "A marca tem propósito claro",
    text: "Ajudamos pequenos empreendedores a ganhar tempo, previsibilidade e mais espaço para crescer."
  },
  {
    title: "Praticidade faz parte do DNA",
    text: "A gente valoriza solução direta, rápida e funcional. Menos fricção, mais movimento."
  },
  {
    title: "Cultura aparece na rotina",
    text: "Campanhas, escritório, time e operação carregam a identidade da marca de forma viva e reconhecível."
  }
];

const VALUES = [
  {
    title: "Acesso",
    text: "A operação ajuda a tornar simples e disponível aquilo que antes era mais difícil para o pequeno varejo."
  },
  {
    title: "Praticidade",
    text: "Resolver rápido e com clareza importa. Boa execução reduz atrito para o time e para o cliente."
  },
  {
    title: "Parceria",
    text: "A Praso está do lado de quem empreende. A operação também faz parte desse cuidado."
  },
  {
    title: "Autonomia",
    text: "Quando o processo funciona, o cliente ganha mais previsibilidade e controle para planear melhor."
  }
];


/* ═══════════════════════════════════════════
   RENDER HELPERS
   ═══════════════════════════════════════════ */

function renderCards(targetId, items, renderItem) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(renderItem).join("");

  // Apply stagger + reveal to each child
  Array.from(target.children).forEach((child, i) => {
    child.setAttribute("data-reveal", "");
    child.classList.add(`stagger-${i + 1}`);
  });
}

function setApplyLinks() {
  document.querySelectorAll("[data-apply-link]").forEach((link) => {
    link.href = APPLY_URL;
    link.target = "_blank";
    link.rel = "noreferrer";
  });
}


/* ═══════════════════════════════════════════
   SCROLL REVEAL (Intersection Observer)
   ═══════════════════════════════════════════ */

function initReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Immediately show everything
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
}


/* ═══════════════════════════════════════════
   TOPBAR SHRINK ON SCROLL
   ═══════════════════════════════════════════ */

function initTopbarScroll() {
  const topbar = document.getElementById("topbar");
  if (!topbar) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          topbar.classList.add("topbar-scrolled");
        } else {
          topbar.classList.remove("topbar-scrolled");
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}


/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // Set dynamic text
  document.getElementById("role-title").textContent = ROLE_TITLE;
  document.getElementById("role-subtitle").textContent = ROLE_SUBTITLE;

  // Render overview cards with icons
  renderCards(
    "overview-points",
    OVERVIEW_POINTS,
    (item, index) => `
      <article class="overview-card">
        <div class="card-icon-wrap">${ICONS[OVERVIEW_ICONS[index]]}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  );

  // Render workflow steps with icons
  renderCards(
    "workflow-steps",
    WORKFLOW_STEPS,
    (item, index) => `
      <article class="workflow-step">
        <span class="workflow-step-number">0${index + 1}</span>
        <div class="workflow-icon">${ICONS[WORKFLOW_ICONS[index]]}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  );

  // Render responsibilities with icons
  renderCards(
    "responsibilities-list",
    RESPONSIBILITIES,
    (item, index) => `
      <article class="responsibility-item">
        <span class="responsibility-icon">${ICONS[RESPONSIBILITY_ICONS[index]]}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>
    `
  );

  // Render job highlights with icons
  renderCards(
    "job-highlights",
    JOB_HIGHLIGHTS,
    (item, index) => `
      <article class="benefit-card">
        <div class="benefit-card-header">
          <span class="benefit-icon">${ICONS[JOB_HIGHLIGHT_ICONS[index]]}</span>
          <h3>${item.title}</h3>
        </div>
        <p>${item.text}</p>
      </article>
    `
  );

  // Render company reasons with icons
  renderCards(
    "company-reasons",
    COMPANY_REASONS,
    (item, index) => `
      <article class="benefit-card">
        <div class="benefit-card-header">
          <span class="benefit-icon">${ICONS[COMPANY_REASON_ICONS[index]]}</span>
          <h3>${item.title}</h3>
        </div>
        <p>${item.text}</p>
      </article>
    `
  );

  // Render values with icons
  renderCards(
    "values-grid",
    VALUES,
    (item, index) => `
      <article class="value-card">
        <div class="value-icon">${ICONS[VALUE_ICONS[index]]}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
  );

  // Set apply links
  setApplyLinks();

  // Initialize scroll reveal
  initReveal();

  // Initialize topbar behavior
  initTopbarScroll();
});
