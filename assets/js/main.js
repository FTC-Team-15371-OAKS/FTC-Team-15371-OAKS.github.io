(() => {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  if (navToggle && nav) {
    const closeNav = () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) closeNav();
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  if (revealItems.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }
  }

  const filters = document.querySelectorAll("[data-filter]");
  const galleryItems = [...document.querySelectorAll("[data-gallery-item]")];
  const galleryEmpty = document.querySelector("[data-gallery-empty]");

  if (filters.length && galleryItems.length) {
    filters.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        let visible = 0;

        filters.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });

        galleryItems.forEach((item) => {
          const matches = filter === "all" || item.dataset.category === filter;
          item.classList.toggle("is-hidden", !matches);
          if (matches) visible += 1;
        });

        if (galleryEmpty) {
          galleryEmpty.classList.toggle("is-visible", visible === 0);
        }
      });
    });
  }

  const lightbox = document.querySelector("[data-lightbox]");
  if (lightbox && galleryItems.length) {
    const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
    const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
    const closeButton = lightbox.querySelector("[data-lightbox-close]");
    const prevButton = lightbox.querySelector("[data-lightbox-prev]");
    const nextButton = lightbox.querySelector("[data-lightbox-next]");
    let activeIndex = 0;

    const visibleItems = () =>
      galleryItems.filter((item) => !item.classList.contains("is-hidden"));

    const showItem = (index) => {
      const items = visibleItems();
      if (!items.length) return;
      activeIndex = (index + items.length) % items.length;
      const item = items[activeIndex];
      const image = item.querySelector("img");
      lightboxImage.src = item.dataset.full || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = item.dataset.caption || image.alt;
    };

    const openLightbox = (item) => {
      const items = visibleItems();
      showItem(items.indexOf(item));
      if (typeof lightbox.showModal === "function") {
        lightbox.showModal();
      } else {
        lightbox.setAttribute("open", "");
      }
      document.body.classList.add("nav-open");
      closeButton.focus();
    };

    const closeLightbox = () => {
      if (typeof lightbox.close === "function") {
        lightbox.close();
      } else {
        lightbox.removeAttribute("open");
      }
      document.body.classList.remove("nav-open");
    };

    galleryItems.forEach((item) => {
      item.addEventListener("click", () => openLightbox(item));
    });

    closeButton.addEventListener("click", closeLightbox);
    prevButton.addEventListener("click", () => showItem(activeIndex - 1));
    nextButton.addEventListener("click", () => showItem(activeIndex + 1));

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });

    lightbox.addEventListener("close", () => {
      document.body.classList.remove("nav-open");
    });

    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showItem(activeIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showItem(activeIndex + 1);
      }
    });
  }
})();
