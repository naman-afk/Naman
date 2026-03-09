/* =========================================================
   ORB NAVIGATION
   ========================================================= */

const orbToggle = document.getElementById("orbToggle");
const orbMenu = document.getElementById("orbMenu");
const orbClose = document.getElementById("orbClose");

function openOrbMenu() {
  orbMenu.classList.add("active");
  orbToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeOrbMenu() {
  orbMenu.classList.remove("active");
  orbToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

orbToggle.addEventListener("click", openOrbMenu);
orbClose.addEventListener("click", closeOrbMenu);

orbMenu.addEventListener("click", (e) => {
  if (e.target === orbMenu) closeOrbMenu();
});


/* =========================================================
   THEME PALETTE
   ========================================================= */

const paletteToggle = document.getElementById("paletteToggle");
const palettePanel = document.getElementById("palettePanel");
const paletteClose = document.getElementById("paletteClose");
const themeLabel = document.getElementById("themeLabel");

function openPalette() {
  palettePanel.classList.add("active");
  paletteToggle.setAttribute("aria-expanded", "true");
}

function closePalette() {
  palettePanel.classList.remove("active");
  paletteToggle.setAttribute("aria-expanded", "false");
}

paletteToggle.addEventListener("click", openPalette);
paletteClose.addEventListener("click", closePalette);

palettePanel.addEventListener("click", (e) => {
  if (e.target === palettePanel) closePalette();
});


// Theme switching
const themeButtons = document.querySelectorAll("[data-set-theme]");

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.setTheme;
    document.documentElement.setAttribute("data-theme", theme);

    themeLabel.textContent = theme.toUpperCase();
    closePalette();
  });
});


/* =========================================================
   PROJECT FILTERING
   ========================================================= */

const filterButtons = document.querySelectorAll(".pill");
const projectCards = document.querySelectorAll("#projectGrid [data-category]");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
          card.style.transition = "all 0.4s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => (card.style.display = "none"), 300);
      }
    });
  });
});


/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0s";
        entry.target.classList.add("revealed");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));


/* =========================================================
   MAGNETIC HOVER EFFECT
   ========================================================= */

const magnets = document.querySelectorAll(".magnet");

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", (e) => {
    const rect = magnet.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    magnet.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px) scale(1.02)`;
  });

  magnet.addEventListener("mouseleave", () => {
    magnet.style.transform = "";
  });
});


/* =========================================================
   CLOSE MENUS ON ESC
   ========================================================= */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeOrbMenu();
    closePalette();
  }
});

