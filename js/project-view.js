/**
 * MR CONSTRUÇÕES — Gestor da Página Individual de Projetos
 * Experiência editorial inspirada em portfólios profissionais de arquitetura
 */

class ProjectViewManager {
  constructor() {
    this.mainView = document.getElementById("mainWebsiteView");
    this.detailView = document.getElementById("projectDetailView");
    this.currentProjectId = null;
    this.savedScrollPos = 0;

    this.initRoutes();
  }

  initRoutes() {
    window.addEventListener("hashchange", () => this.handleHashChange());
    window.addEventListener("DOMContentLoaded", () => {
      this.handleHashChange();
    });
  }

  handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith("#projeto/")) {
      const id = hash.replace("#projeto/", "").trim();
      this.open(id, false);
    } else {
      if (this.currentProjectId) {
        this.close(false);
      }
    }
  }

  open(projectId, updateHash = true) {
    if (!window.PROJECTS_DATA) return;
    const project = window.PROJECTS_DATA.find((p) => p.id === projectId);
    if (!project) return;

    if (!this.currentProjectId) {
      this.savedScrollPos = window.scrollY || window.pageYOffset;
    }

    this.currentProjectId = projectId;

    if (updateHash) {
      window.location.hash = `#projeto/${projectId}`;
    }

    this.render(project);

    if (this.mainView) {
      this.mainView.style.display = "none";
    }
    
    if (this.detailView) {
      this.detailView.style.display = "block";
      requestAnimationFrame(() => {
        this.detailView.classList.add("is-active");
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  }

  close(updateHash = true) {
    this.currentProjectId = null;
    if (this.detailView) {
      this.detailView.classList.remove("is-active");
      this.detailView.style.display = "none";
    }
    if (this.mainView) {
      this.mainView.style.display = "block";
    }

    if (updateHash) {
      window.location.hash = "#projetos";
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: this.savedScrollPos, behavior: "instant" });
    });
  }

  render(project) {
    if (!this.detailView) return;
    const allProjects = window.PROJECTS_DATA || [];
    const currentIndex = allProjects.findIndex((p) => p.id === project.id);
    const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
    const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

    const allImages = project.gallery || [];

    const specsHtml = `
      <div class="project-specs-card">
        <h4 class="project-specs-title">Ficha Técnica da Empreitada</h4>
        <div class="project-specs-list">
          <div class="spec-item">
            <span class="spec-name">Localização</span>
            <span class="spec-val">${project.location}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Tipo de Obra</span>
            <span class="spec-val">${project.categoryLabel}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Ano de Conclusão</span>
            <span class="spec-val">${project.year}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Área Bruta</span>
            <span class="spec-val">${project.area}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Prazo de Execução</span>
            <span class="spec-val">${project.duration}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Arquitetura</span>
            <span class="spec-val">${project.architecture || "Gabinete Parceiro"}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Construção & Engenharia</span>
            <span class="spec-val">${project.engineering || "MR Construções"}</span>
          </div>
          <div class="spec-item">
            <span class="spec-name">Estado</span>
            <span class="spec-val" style="color: var(--color-accent);">${project.status || "Concluído"}</span>
          </div>
        </div>
      </div>
    `;

    const highlightsHtml = project.highlights && project.highlights.length > 0 ? `
      <div class="project-highlights-wrap">
        <h3 class="highlights-title">Soluções Construtivas & Detalhes de Excelência</h3>
        <div class="highlights-grid">
          ${project.highlights.map(h => `
            <div class="highlight-pill-item">
              <svg class="highlight-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${h}</span>
            </div>
          `).join("")}
        </div>
      </div>
    ` : "";

    let galleryHtml = "";
    if (allImages.length > 0) {
      let i = 0;
      while (i < allImages.length) {
        if (i === 0 || i % 3 === 0) {
          const img = allImages[i];
          const imgIndex = i;
          galleryHtml += `
            <figure class="gallery-figure gallery-full-wide" data-gallery-index="${imgIndex}">
              <img src="${img.url}" alt="${img.caption || project.title}" loading="lazy">
              <div class="gallery-caption">
                <span class="caption-text">${img.caption || ""}</span>
                <span class="caption-zoom-hint">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  Ecrã Inteiro
                </span>
              </div>
            </figure>
          `;
          i++;
        } else {
          const img1 = allImages[i];
          const idx1 = i;
          const img2 = allImages[i + 1];
          const idx2 = i + 1;
          const isAsym = (i % 2 === 1);

          if (img2) {
            galleryHtml += `
              <div class="gallery-pair-row ${isAsym ? 'asymmetric' : 'asymmetric-reversed'}">
                <figure class="gallery-figure" data-gallery-index="${idx1}">
                  <img src="${img1.url}" alt="${img1.caption || project.title}" loading="lazy">
                  <div class="gallery-caption">
                    <span class="caption-text">${img1.caption || ""}</span>
                    <span class="caption-zoom-hint">Ecrã Inteiro</span>
                  </div>
                </figure>
                <figure class="gallery-figure" data-gallery-index="${idx2}">
                  <img src="${img2.url}" alt="${img2.caption || project.title}" loading="lazy">
                  <div class="gallery-caption">
                    <span class="caption-text">${img2.caption || ""}</span>
                    <span class="caption-zoom-hint">Ecrã Inteiro</span>
                  </div>
                </figure>
              </div>
            `;
            i += 2;
          } else {
            galleryHtml += `
              <figure class="gallery-figure gallery-full-wide" data-gallery-index="${idx1}">
                <img src="${img1.url}" alt="${img1.caption || project.title}" loading="lazy">
                <div class="gallery-caption">
                  <span class="caption-text">${img1.caption || ""}</span>
                  <span class="caption-zoom-hint">Ecrã Inteiro</span>
                </div>
              </figure>
            `;
            i++;
          }
        }
      }
    }

    this.detailView.innerHTML = `
      <nav class="project-top-nav" aria-label="Navegação do Projeto">
        <div class="container">
          <button class="project-back-btn" id="projectBackBtn">
            <svg class="project-back-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Voltar aos Projetos</span>
          </button>
          <span class="project-nav-counter">Obra ${currentIndex + 1} de ${allProjects.length}</span>
        </div>
      </nav>

      <section class="project-hero-media">
        <img src="${project.heroImage}" alt="${project.title} — ${project.location}">
        <div class="project-hero-overlay"></div>
      </section>

      <section class="project-info-section">
        <div class="container">
          <div class="project-header-grid">
            <div class="project-main-titles">
              <span class="project-category-badge">
                <span>${project.categoryLabel}</span>
                <span>•</span>
                <span>${project.location}</span>
                <span>•</span>
                <span>${project.year}</span>
              </span>
              <h1 class="project-title-large">${project.title}</h1>
              <p class="project-tagline-text">${project.tagline || ""}</p>
              <div class="project-description-text">
                <p>${project.description}</p>
              </div>
            </div>
            ${specsHtml}
          </div>
          ${highlightsHtml}
        </div>
      </section>

      <section class="project-gallery-section">
        <div class="container">
          <div class="project-gallery-intro">
            <span class="section-tag">Galeria Fotográfica da Obra</span>
            <h2 class="section-title">Todos os Detalhes da Execução</h2>
            <p class="section-subtitle">
              Registo fotográfico completo do projeto, ilustrando a qualidade dos materiais, o rigor dos acabamentos e a vivência dos espaços.
            </p>
          </div>
          <div class="project-gallery-container" id="projectGalleryContainer">
            ${galleryHtml}
          </div>
        </div>
      </section>

      <section class="project-cta-section">
        <div class="container">
          <div class="project-cta-box">
            <span class="section-tag" style="justify-content: center; color: var(--color-accent);">Próxima Obra</span>
            <h2 class="project-cta-question">Tem um projeto em mente?</h2>
            <p class="project-cta-text">
              Partilhe connosco a sua visão. A nossa equipa de engenharia e direção de obras está disponível para analisar o seu projeto ou desenvolver uma proposta orçamental detalhada e transparente.
            </p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <button class="btn btn-accent" id="projectCtaBudgetBtn">
                <span>Pedir orçamento para obra semelhante</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button class="btn btn-outline-white" id="projectCtaContactBtn">
                <span>Fale connosco</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <nav class="project-pagination-bar" aria-label="Navegação entre projetos">
        <div class="container">
          <div class="pagination-item prev" id="prevProjectBtn" data-target-id="${prevProject.id}">
            <span class="pagination-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Projeto Anterior
            </span>
            <span class="pagination-title">${prevProject.title}</span>
          </div>

          <div class="pagination-item next" id="nextProjectBtn" data-target-id="${nextProject.id}">
            <span class="pagination-label">
              Próximo Projeto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <span class="pagination-title">${nextProject.title}</span>
          </div>
        </div>
      </nav>
    `;

    const backBtn = this.detailView.querySelector("#projectBackBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => this.close());
    }

    const prevBtn = this.detailView.querySelector("#prevProjectBtn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        this.open(prevProject.id);
      });
    }

    const nextBtn = this.detailView.querySelector("#nextProjectBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        this.open(nextProject.id);
      });
    }

    const ctaBudgetBtn = this.detailView.querySelector("#projectCtaBudgetBtn");
    if (ctaBudgetBtn) {
      ctaBudgetBtn.addEventListener("click", () => {
        if (window.mrApp) {
          window.mrApp.openBudgetModal(`Obra semelhante a ${project.title}`);
        }
      });
    }

    const ctaContactBtn = this.detailView.querySelector("#projectCtaContactBtn");
    if (ctaContactBtn) {
      ctaContactBtn.addEventListener("click", () => {
        this.close();
        setTimeout(() => {
          const contactEl = document.getElementById("contactos");
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      });
    }

    const galleryFigures = this.detailView.querySelectorAll(".gallery-figure");
    galleryFigures.forEach((fig) => {
      fig.addEventListener("click", () => {
        const idx = parseInt(fig.getAttribute("data-gallery-index"), 10);
        if (window.mrLightbox) {
          window.mrLightbox.open(allImages, isNaN(idx) ? 0 : idx);
        }
      });
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.mrProjectView = new ProjectViewManager();
});
