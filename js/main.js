/**
 * MR CONSTRUÇÕES — Lógica Principal da Aplicação
 */

class AppManager {
  constructor() {
    this.header = document.getElementById("siteHeader");
    this.menuToggle = document.getElementById("menuToggle");
    this.mobileDrawer = document.getElementById("mobileDrawer");
    this.budgetModal = document.getElementById("budgetModal");
    this.budgetModalClose = document.getElementById("budgetModalClose");
    this.toastContainer = document.getElementById("toastContainer");

    this.init();
  }

  init() {
    this.initHeaderScroll();
    this.initMobileMenu();
    this.initScrollSpy();
    this.initServices();
    this.initBudgetModal();
    this.initContactForms();
    this.initScrollReveal();
    this.initBackToTop();
  }

  initHeaderScroll() {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 60) {
        this.header.classList.add("is-scrolled");
      } else {
        this.header.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  initMobileMenu() {
    if (!this.menuToggle || !this.mobileDrawer) return;

    const toggleMenu = () => {
      const isOpen = this.mobileDrawer.classList.contains("is-open");
      if (isOpen) {
        this.mobileDrawer.classList.remove("is-open");
        this.menuToggle.classList.remove("is-active");
        document.body.classList.remove("no-scroll");
      } else {
        this.mobileDrawer.classList.add("is-open");
        this.menuToggle.classList.add("is-active");
        document.body.classList.add("no-scroll");
      }
    };

    this.menuToggle.addEventListener("click", toggleMenu);

    const mobileLinks = this.mobileDrawer.querySelectorAll(".mobile-nav-link, .btn");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.mobileDrawer.classList.remove("is-open");
        this.menuToggle.classList.remove("is-active");
        document.body.classList.remove("no-scroll");
      });
    });
  }

  initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");

    const spy = () => {
      const scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", spy, { passive: true });
  }

  initServices() {
    const container = document.getElementById("servicesGrid");
    if (!container || !window.SERVICES_DATA) return;

    container.innerHTML = window.SERVICES_DATA.map((service) => `
      <article class="service-card reveal-on-scroll">
        <div class="service-img-wrap">
          <img src="${service.image}" alt="${service.title}" class="service-img" loading="lazy">
          <span class="service-number">${service.number}</span>
        </div>
        <div class="service-body">
          <span class="mono-tag" style="margin-bottom: 0.4rem;">${service.category}</span>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.description}</p>
          <div class="service-tags">
            ${service.tags.map((t) => `<span class="service-tag-item">${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `).join("");
  }

  initBudgetModal() {
    const triggerButtons = document.querySelectorAll("[data-open-budget-modal]");
    triggerButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const presetSubject = btn.getAttribute("data-subject") || "";
        this.openBudgetModal(presetSubject);
      });
    });

    if (this.budgetModalClose) {
      this.budgetModalClose.addEventListener("click", () => this.closeBudgetModal());
    }

    if (this.budgetModal) {
      this.budgetModal.addEventListener("click", (e) => {
        if (e.target === this.budgetModal) {
          this.closeBudgetModal();
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.budgetModal && this.budgetModal.classList.contains("is-open")) {
        this.closeBudgetModal();
      }
    });
  }

  openBudgetModal(presetSubject = "") {
    if (!this.budgetModal) return;
    const subjectField = this.budgetModal.querySelector("#modalProjectNotes");
    if (subjectField && presetSubject) {
      subjectField.value = `Referência: ${presetSubject}\n`;
    }
    this.budgetModal.classList.add("is-open");
    document.body.classList.add("no-scroll");
  }

  closeBudgetModal() {
    if (!this.budgetModal) return;
    this.budgetModal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }

  initContactForms() {
    const contactForm = document.getElementById("contactMainForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormSubmit(contactForm, "Pedido de contacto enviado com sucesso!");
      });
    }

    const modalForm = document.getElementById("modalBudgetForm");
    if (modalForm) {
      modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleFormSubmit(modalForm, "Pedido de orçamento recebido com sucesso!", () => {
          this.closeBudgetModal();
        });
      });
    }
  }

  handleFormSubmit(form, successMessage, callback = null) {
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn ? submitBtn.innerHTML : "";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        </svg>
        <span>A processar pedido...</span>
      `;
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }

      this.showToast(
        successMessage + " Entraremos em contacto no prazo máximo de 24 horas úteis."
      );

      if (callback) callback();
    }, 1200);
  }

  showToast(message, duration = 5000) {
    if (!this.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8865D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    this.toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add("show");
    });

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }

  initBackToTop() {
    const btn = document.getElementById("backToTopBtn");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.mrApp = new AppManager();
});
