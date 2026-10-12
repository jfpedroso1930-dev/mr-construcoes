/* ==========================================================================
   MR CONSTRUÇÕES — JavaScript
   Slider, Comparação, Animações de Scroll, Header dinâmico
   ========================================================================== */

const projects = [
    {
        category: "Remodelação",
        title: "Casa de banho<br>Porto",
        description: "Reestruturação completa de uma casa de banho, com atenção ao conforto, à funcionalidade e à qualidade dos acabamentos.",
        link: "https://www.facebook.com/photo?fbid=506328185295516&set=pb.100077550159685.-2207520000"
    },
    {
        category: "Construção exterior",
        title: "Piscina<br>Famalicão",
        description: "Construção de piscina integrada no espaço exterior, com uma solução adequada ao terreno e à utilização da habitação.",
        link: "https://www.facebook.com/photo.php?fbid=310790821515921&set=pb.100077550159685.-2207520000&type=3"
    },
    {
        category: "Remodelação",
        title: "Habitação<br>Famalicão",
        description: "Intervenção de remodelação numa habitação em Famalicão, melhorando a imagem, o conforto e a utilização do espaço.",
        link: "https://www.facebook.com/p/MR-Constru%C3%A7%C3%B5es-100077550159685/"
    }
];

const slides = document.querySelectorAll(".hero-slide");
const category = document.getElementById("slide-category");
const number = document.getElementById("slide-number");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");
const link = document.getElementById("slide-link");
const previousButton = document.getElementById("previous-slide");
const nextButton = document.getElementById("next-slide");
const autoplayButton = document.getElementById("toggle-autoplay");
const detailsButton = document.getElementById("details-button");
const detailsPanel = document.getElementById("project-details");

let currentSlide = 0;
let autoplay = true;
let sliderTimer;

function closeDetails() {
    detailsButton.classList.remove("open");
    detailsButton.setAttribute("aria-expanded", "false");
    detailsPanel.classList.remove("open");
    detailsPanel.setAttribute("aria-hidden", "true");
}

function showSlide(index) {
    currentSlide = (index + projects.length) % projects.length;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === currentSlide);
    });

    const project = projects[currentSlide];
    category.textContent = project.category;
    number.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
    title.innerHTML = project.title;
    description.textContent = project.description;
    link.href = project.link;

    closeDetails();
}

function startAutoplay() {
    clearInterval(sliderTimer);

    if (autoplay) {
        sliderTimer = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5500);
    }
}

previousButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startAutoplay();
});

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    startAutoplay();
});

autoplayButton.addEventListener("click", () => {
    autoplay = !autoplay;
    autoplayButton.textContent = autoplay ? "Ⅱ" : "▶";
    autoplayButton.setAttribute(
        "aria-label",
        autoplay ? "Pausar apresentação" : "Retomar apresentação"
    );
    startAutoplay();
});

detailsButton.addEventListener("click", () => {
    const isOpen = detailsButton.classList.toggle("open");
    detailsButton.setAttribute("aria-expanded", String(isOpen));
    detailsPanel.classList.toggle("open", isOpen);
    detailsPanel.setAttribute("aria-hidden", String(!isOpen));
});

const comparisonContainer = document.getElementById("comparison");
const comparisonRange = document.getElementById("comparison-range");
const comparisonBefore = document.getElementById("comparison-before-wrap");
const comparisonHandle = document.getElementById("comparison-handle");

function updateComparison(value) {
    const percentage = Math.max(0, Math.min(100, Number(value)));

    if (comparisonContainer) {
        comparisonContainer.style.setProperty("--position", `${percentage}%`);
    }

    if (comparisonBefore) {
        comparisonBefore.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        comparisonBefore.style.webkitClipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }

    if (comparisonHandle) {
        comparisonHandle.style.left = `${percentage}%`;
    }

    if (comparisonRange && Number(comparisonRange.value) !== Math.round(percentage)) {
        comparisonRange.value = percentage;
    }
}

if (comparisonRange) {
    comparisonRange.addEventListener("input", (event) => {
        updateComparison(event.target.value);
    });
}

if (comparisonContainer) {
    let isDragging = false;

    const setPositionFromPointer = (e) => {
        const rect = comparisonContainer.getBoundingClientRect();
        if (rect.width <= 0) return;
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const offsetX = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
        updateComparison(percentage);
    };

    comparisonContainer.addEventListener("pointerdown", (e) => {
        isDragging = true;
        comparisonContainer.setPointerCapture(e.pointerId);
        setPositionFromPointer(e);
    });

    comparisonContainer.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        setPositionFromPointer(e);
    });

    const stopDragging = (e) => {
        if (!isDragging) return;
        isDragging = false;
        try {
            comparisonContainer.releasePointerCapture(e.pointerId);
        } catch (_) {}
    };

    comparisonContainer.addEventListener("pointerup", stopDragging);
    comparisonContainer.addEventListener("pointercancel", stopDragging);
}

if (comparisonRange) {
    updateComparison(comparisonRange.value || 50);
}

document.getElementById("current-year").textContent = new Date().getFullYear();

showSlide(0);
startAutoplay();


/* ==========================================================================
   SCROLL REVEAL — Intersection Observer
   Anima elementos com classes .reveal, .reveal-left, .reveal-right, .reveal-scale
   ========================================================================== */
(function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
})();


/* ==========================================================================
   HEADER — Efeito de scroll (glassmorphism ao rolar)
   ========================================================================== */
(function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    updateHeader();
})();


/* ==========================================================================
   SMOOTH ANCHOR SCROLL — Override para links internos
   ========================================================================== */
(function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
})();