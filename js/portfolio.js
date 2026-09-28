/**
 * MR CONSTRUÇÕES — Gestor do Portfólio & Galeria Editorial
 */

class PortfolioManager {
  constructor() {
    this.container = document.getElementById("portfolioGrid");
    this.filterButtons = document.querySelectorAll(".filter-btn");
    this.activeFilter = "todos";
    this.init();
  }

  init() {
    if (!this.container) return;
    this.renderProjects();
    this.bindFilters();
  }

  bindFilters() {
    this.filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        if (filter === this.activeFilter) return;

        this.filterButtons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        this.activeFilter = filter;
        this.renderProjects();
      });
    });
  }

  renderProjects() {
    if (!window.PROJECTS_DATA) return;

    const filtered = this.activeFilter === "todos"
      ? window.PROJECTS_DATA
      : window.PROJECTS_DATA.filter((p) => p.category.toLowerCase() === this.activeFilter.toLowerCase());

    this.container.style.opacity = "0.2";
    this.container.style.transition = "opacity 0.25s ease-out";

    setTimeout(() => {
      this.container.innerHTML = "";

      if (filtered.length === 0) {
        this.container.innerHTML = `
          <div style="grid-column: span 12; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Nenhum projeto encontrado nesta categoria.</p>
            <p style="font-size: 0.9rem;">Consulte as restantes categorias para ver mais trabalhos.</p>
          </div>
        `;
      } else {
        filtered.forEach((project, index) => {
          const card = this.createProjectCard(project, index);
          this.container.appendChild(card);
        });
      }

      this.container.style.opacity = "1";
    }, 200);
  }

  createProjectCard(project, index) {
    const card = document.createElement("article");
    const layoutClass = `layout-${project.layoutType || "wide-editorial"}`;
    card.className = `project-card ${layoutClass} reveal-on-scroll is-visible`;
    card.setAttribute("data-project-id", project.id);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Ver projeto ${project.title}, ${project.location}`);

    card.innerHTML = `
      <div class="project-media-wrap">
        <img 
          src="${project.heroImage}" 
          alt="${project.title} — ${project.location}" 
          class="project-img" 
          loading="${index < 3 ? 'eager' : 'lazy'}"
        >
        <div class="project-overlay">
          <span class="project-meta-pill">
            <span>${project.categoryLabel}</span>
            <span>•</span>
            <span>${project.year}</span>
          </span>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-location">${project.location}</p>
          <div class="project-card-cta">
            <span>Ver projeto</span>
            <svg class="project-card-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      if (window.mrProjectView) {
        window.mrProjectView.open(project.id);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (window.mrProjectView) {
          window.mrProjectView.open(project.id);
        }
      }
    });

    return card;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.mrPortfolio = new PortfolioManager();
});
