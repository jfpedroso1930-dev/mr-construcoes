/**
 * MR CONSTRUÇÕES — Visualizador de Fotografias em Ecrã Inteiro (Lightbox)
 */

class Lightbox {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.createDom();
    this.bindEvents();
  }

  createDom() {
    const modal = document.createElement("div");
    modal.className = "lightbox-modal";
    modal.id = "globalLightbox";
    modal.innerHTML = `
      <div class="lightbox-controls">
        <span class="mono-tag" id="lightboxCounter" style="color: rgba(255,255,255,0.7);">1 / 1</span>
        <button class="lightbox-btn" id="lightboxClose" aria-label="Fechar galeria">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <button class="lightbox-nav-btn lightbox-nav-prev" id="lightboxPrev" aria-label="Fotografia anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button class="lightbox-nav-btn lightbox-nav-next" id="lightboxNext" aria-label="Próxima fotografia">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div class="lightbox-content">
        <img src="" alt="" class="lightbox-image" id="lightboxImg">
        <div class="lightbox-caption" id="lightboxCaption"></div>
      </div>
    `;

    document.body.appendChild(modal);

    this.modalEl = modal;
    this.imgEl = modal.querySelector("#lightboxImg");
    this.captionEl = modal.querySelector("#lightboxCaption");
    this.counterEl = modal.querySelector("#lightboxCounter");
    this.btnPrev = modal.querySelector("#lightboxPrev");
    this.btnNext = modal.querySelector("#lightboxNext");
    this.btnClose = modal.querySelector("#lightboxClose");
  }

  bindEvents() {
    this.btnClose.addEventListener("click", () => this.close());
    this.btnPrev.addEventListener("click", () => this.prev());
    this.btnNext.addEventListener("click", () => this.next());

    this.modalEl.addEventListener("click", (e) => {
      if (e.target === this.modalEl || e.target.classList.contains("lightbox-content")) {
        this.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!this.isOpen) return;
      if (e.key === "Escape") this.close();
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    });

    let touchStartX = 0;
    this.modalEl.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.modalEl.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) this.next();
      if (touchEndX - touchStartX > 50) this.prev();
    }, { passive: true });
  }

  open(imagesList, startIndex = 0) {
    if (!imagesList || imagesList.length === 0) return;
    this.images = imagesList;
    this.currentIndex = Math.max(0, Math.min(startIndex, imagesList.length - 1));
    this.isOpen = true;
    this.renderCurrent();
    this.modalEl.classList.add("is-active");
    document.body.classList.add("no-scroll");
  }

  close() {
    this.isOpen = false;
    this.modalEl.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  }

  prev() {
    if (this.images.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.renderCurrent();
  }

  next() {
    if (this.images.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.renderCurrent();
  }

  renderCurrent() {
    const item = this.images[this.currentIndex];
    if (!item) return;

    this.imgEl.style.opacity = "0.4";
    this.imgEl.src = item.url;
    this.imgEl.alt = item.caption || "Fotografia da obra";

    this.imgEl.onload = () => {
      this.imgEl.style.opacity = "1";
    };

    this.captionEl.textContent = item.caption || "";
    this.counterEl.textContent = `${this.currentIndex + 1} / ${this.images.length}`;

    const showNav = this.images.length > 1;
    this.btnPrev.style.display = showNav ? "flex" : "none";
    this.btnNext.style.display = showNav ? "flex" : "none";
  }
}

window.mrLightbox = new Lightbox();
